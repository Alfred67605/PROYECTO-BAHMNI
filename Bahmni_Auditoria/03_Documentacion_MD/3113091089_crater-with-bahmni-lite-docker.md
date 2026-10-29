---
id: "3113091089"
title: "Crater with Bahmni Lite (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3113091089/crater-with-bahmni-lite-docker"
version: 6
updated: "2024-03-01T09:55:40.119Z"
author: "Deepthi Mantena (Deactivated)"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:57.827Z"
---

# Crater with Bahmni Lite (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3113091089)  
> **Versión del documento:** v6 (2024-03-01T09:55:40.119Z) | **Autor/Editor:** Deepthi Mantena (Deactivated)

---

This page documents how to get Crater (open source billing software) running using docker. If you haven’t yet setup Bahmni on docker, please see the documentation here first: [Getting Bahmni Quicky Started with Docker](/wiki/spaces/BAH/pages/3117744129/Getting+Started+Quickly+with+Bahmni+on+Docker)

### **Prerequisites:-**

- 
Docker installed on your pc.

- 
Clone Bahmni-docker into your system from [https://github.com/Bahmni/bahmni-docker](https://github.com/Bahmni/bahmni-docker) 

- 
Some prior knowledge about openmrs and crater-atomfeed.

 You can find full setup of crater and crater-atomfeed with Bahmni in this given module.

## **About OpenMRS**

As OpenMRS is the backend service on top of which Bahmni EMR UI runs, if any patient is created in Bahmni, it will be auto-created in Crater. So you need to check Openmrs environment variables and ensure OpenMRS is running fine (and you can create patients in OpenMRS via Bahmni Registration screen).

## **About crater-atomfeed**

Crater-atomfeed is the service running to connect Bahmni to crater (it is the integration bridge between the two services). So to run crater we need crater-atomfeed also running. 

Check crater atomfeed configration (in .env file):

- 
In .env file, go to 

**crater-atomfeed** validate the openmrs and crater configurations.

- 
Validate the database configuration of 

**crater-atomfeed-db** service.

## **About Crater**

Crater configration can be checked under **crater-nginx** section, mentioned port is localhost:81 (by default).

Currently we are using MySQL database for crater which we can checked in docker-compose file->**craterdb** section currently running port of database can also be checked there, to change or add any configuration change credentials under **craterdb** section of docker-compose file. To validate the creds like username and password go into .env file of bahmni-docker.

 Once you understood why we need crater-atomfeed and openmrs with crater you can start setting up crater.

# **Running Crater using Docker**

Now run the profile of crater using the command (note: you can also run profile `bahmni-lite`, which brings all services up: OpenMRS and Crater in one shot).

```
docker-compose --profile crater up -d
```

To run crater and bahmni altogether you will also need to run openmrs and crater atomfeed use the command     

```
docker-compose --profile crater-atomfeed --profile openmrs up -d
```

If all (crater,crater-atomfeed and openmrs ) are up then your console will show :-
![](https://bahmni.atlassian.net/wiki/download/attachments/3113091089/Screenshot%20from%202022-11-30%2016-31-02-20221130-110228.png?version=1&modificationDate=1669806165931&cacheVersion=1&api=v2)
To Check the logs follow the steps:-

- 

```
docker ps | grep 
```

![](https://bahmni.atlassian.net/wiki/download/attachments/3113091089/Screenshot%20from%202022-11-30%2016-33-22-20221130-110354.png?version=1&modificationDate=1669806271515&cacheVersion=1&api=v2)Through the above command you will get the container ID of the container whose logs you want to check and will also show whether the container is up or not

- 

```
docker logs -f 
```

![](https://bahmni.atlassian.net/wiki/download/attachments/3113091089/Screenshot%20from%202022-11-30%2016-36-02-20221130-110701.png?version=1&modificationDate=1669806437590&cacheVersion=1&api=v2)

 **Crater Up and Running:** If the docker container are up and running fine, open your browser on [https://localhost:81](https://localhost:81) . That’s it! 

## Making Code Changes to Crater Atomfeed 

If during development you want to make any change in the backend code of crater-atomfeed then maven build the backend code a jar will be created paste it in Dockerfile in package->docker->Dockerfile now build the docker project using the command 

```
docker build -t bahmni/crater-atomfeed:test -f package/docker/Dockerfile .
```

An image with name crater-atomfeed:test will be created now change the image in crater-atomfeed to bahmni/crater-atomfeed:test
 and run the command 

```
docker-compose --profile openmrs --profile crater --profile crater-atomfeed up -d
```

## Configuring Default Currency in Crater

During the the fresh setup of crater one can configure the preferred currency in the .env file from where the docker compose is invoked.
For example if you are invoking docker compose from bahmni-docker the below changes can be made in .env under crater environment variables

```
CRATER_DEFAULT_CURRENCY=USD
```

please find different currency codes here [https://github.com/Bahmni/crater/blob/bahmni-master/database/seeders/CurrenciesTableSeeder.php](https://github.com/Bahmni/crater/blob/bahmni-master/database/seeders/CurrenciesTableSeeder.php) 

In docker compose.yml file add the below under crater-php service:

```
CRATER_DEFAULT_CURRENCY: ${CRATER_DEFAULT_CURRENCY:?}
```

After making these changes run 
docker compose down with volume and then bring up crater .
With these changes you should be able to configure the preferred currency as default currency in crater.

 **Running Bahmni on Docker**
