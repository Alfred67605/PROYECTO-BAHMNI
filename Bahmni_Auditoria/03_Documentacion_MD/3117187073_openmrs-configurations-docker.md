---
id: "3117187073"
title: "OpenMRS Configurations (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117187073/openmrs-configurations-docker"
version: 12
updated: "2024-07-22T11:16:08.441Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:52.835Z"
---

# OpenMRS Configurations (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117187073)  
> **Versión del documento:** v12 (2024-07-22T11:16:08.441Z) | **Autor/Editor:** Mohankumar Thangavel

---

[Bahmni/openmrs](https://hub.docker.com/r/bahmni/openmrs) image is built based on [openmrs/openmrs-core](https://hub.docker.com/r/openmrs/openmrs-core) image. This acts as the backend for all EMR related services in Bahmni. This image is built and published with Github Actions from [openmrs-distro-bahmni](https://github.com/Bahmni/openmrs-distro-bahmni) repository.

**On this Page**
 

## Environment Variables:

| Variable Name | Description |  |
| --- | --- | --- |
| 1 | OPENMRS_IMAGE_TAG | This value tells which image version to be used for Bahmni OpenMRS. List of tags can be found at [bahmni/openmrs - Tags](https://hub.docker.com/r/bahmni/openmrs/tags) . |
| 2 | OPENMRS_DB_NAME | Database name for OpenMRS application |
| 3 | OPENMRS_DB_HOST | Host name of the MySQL Database server. |
| 4 | OPENMRS_DB_USERNAME | Username of the OpenMRS Database. OpenMRS container will create a database user with this credential. |
| 5 | OPENMRS_DB_PASSWORD | Password of the OpenMRS Database. OpenMRS container will create a database user with this credential. |
| 6 | OPENMRS_DB_CREATE_TABLES | Takes either true/false. Setting this to true, OpenMRS creates the tables necessary or running the application. Note: Set this to true only when you are running with an empty MySQL Database. |
| 7 | OPENMRS_DB_AUTO_UPDATE | Takes either true/false. When set to true, the migrations are run and schema is kept up to date. |
| 8 | OPENMRS_MODULE_WEB_ADMIN | Takes either true/false. Settings this to true allows you to manage OpenMRS Modules through the Web UI. It is recommended to set to false in production. |
| 9 | OPENMRS_DEBUG | Takes either true/false. Enables the debug mode of OpenMRS |
| 10 | OPENMRS_UPLOAD_FILES_PATH | This variable can be specified with a directory of the host machine where the uploaded files from OpenMRS needs to be stored. Defaults to `openmrs-uploads` directory in the docker-compose directory itself. |
| 11 | MYSQL_ROOT_PASSWORD | This is the root password for MySQL Database Server used by OpenMRS DB service. |
| 12 | OPENMRS_DB_IMAGE_NAME | This is used to set the type of database container to start up. You can use mysql:5.6 and set `OPENMRS_DB_CREATE_TABLES` to true to start with fresh setup with no data loaded. |

## Login into OpenMRS Admin UI & First-time steps

To check if OpenMRS container is ready, see the OpenMRS Logs and ensure you see this line in the tomcat logs:

```
INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 119674 ms
```

In your browser, go to the following URL: [https://localhost/openmrs/](https://localhost/openmrs/) (Creds: superman/Admin123).

**If this is your FIRST TIME login into OpenMRS, you will need to create Search Index. Perform these steps:**

- 
Login into OpenMRS Admin UI.

- 
Go to Administration → Search Index ([https://localhost/openmrs/admin/maintenance/searchIndex.htm](https://localhost/openmrs/admin/maintenance/searchIndex.htm))

- 
Click on “Rebuild Search Index”. This should take less than 2 minutes. 

- 
Once done, you can now use OpenMRS and Bahmni. 

## View OpenMRS Logs

```
# To see OpenMRS logs (from the appropriate docker-compose sub-folder)
docker-compose logs openmrs -f

# Another way
docker logs  -f

# To get container ID of all containers 
docker ps
```

## Debugging OpenMRS Application

Since OpenMRS is running on Tomcat, remote debugging can be enabled and can be connected with IDE supporting remote debugging.(Eclipse, Intellij IDEA etc.)

- 
Enable debugging by uncommenting & setting `OMRS_DEV_DEBUG_PORT` to some port (e.g 8000) in the [.env](https://github.com/Bahmni/bahmni-docker/blob/master/.env#L80) and [docker-compose](https://github.com/Bahmni/bahmni-docker/blob/master/docker-compose.yml#L152#L170) files

- 
Now remote debugging for OpenMRS is exposed on port `OMRS_DEV_DEBUG_PORT` in your local machine.

- 
Now you can follow the IDE configuration to setup remote debugging using host as `localhost` and port as the value of `OMRS_DEV_DEBUG_PORT`.

- 
For example in Intellij IDEA navigate to Run -> Edit Configurations. In the dialog box click on `+` icon to create a new config and select `Remote JVM Debug`. Fill in the host,port and name and click Apply. Now you can use the debugger.

 
Make sure to disable debugging if you are running in a Production Environment

## Setting up a fresh OpenMRS Instance

By default, the configuration of openmrs and openmrsdb services are set to load demo data from a backup file. If you want to start the installation with a fresh schema, set `OPENMRS_DB_CREATE_TABLES` to `true` and then set `OPENMRS_DB_IMAGE_NAME` to `mysql:8.0`. Now when start the schema will be created by liquibase migrations of OpenMRS and other OMODS loaded.

## Apache Tomcat Environment Variables
To set CATALINA_HOME and JAVA_OPTS or other Environment variables used by the Tomcat startup scripts, set the value of [these variables](https://github.com/Bahmni/bahmni-docker/blob/master/docker-compose.yml#L153#L154), [here](https://github.com/Bahmni/bahmni-docker/blob/master/.env#L81#L82). The values of CATALINA_HOME and JAVA_OPTS are set as

```
JAVA_OPTS="$OMRS_JAVA_SERVER_OPTS"
CATALINA_OPTS="${OMRS_JAVA_MEMORY_OPTS} -DOPENMRS_INSTALLATION_SCRIPT=${OMRS_SERVER_PROPERTIES_FILE} -DOPENMRS_APPLICATION_DATA_DIRECTORY=${OMRS_DATA_DIR}/"

```

Values of `OMRS_SERVER_PROPERTIES_FILE` by default is set to `/openmrs/openmrs-server.properties` and `OMRS_DATA_DIR` set to `/openmrs/data`

## Configuring Database connection pool max size

The number of maximum connections that would be made from openmrs to the database instance can be controlled.

There is a variable called as `OMR_C3P0_MAX_SIZE` in the env file with the default value of 50. If you have a smaller instance of database which is not capable of handling this many connections then this value can be decreased accordingly. Also if you have more number of simultaneous users you can increase this value based on database instance capacity. Once you update the value, recreate the container by running `docker compose up -d` . More about performance baselining can be found [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3071639561/BahmniLite+Performance+Baselining+AWS+Gatling).
