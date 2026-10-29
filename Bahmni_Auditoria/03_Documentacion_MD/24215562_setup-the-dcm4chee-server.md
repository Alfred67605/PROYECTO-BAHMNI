---
id: "24215562"
title: "SetUp the DCM4CHEE Server"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/24215562/setup-the-dcm4chee-server"
version: 19
updated: "2016-08-04T05:37:08.562Z"
author: "swathi varkala"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:27.025Z"
---

# SetUp the DCM4CHEE Server

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/24215562)  
> **Versión del documento:** v19 (2016-08-04T05:37:08.562Z) | **Autor/Editor:** swathi varkala

---

**This steps for dcm4chee installation as described below are deprecated and not required with new installation. dcm4chee is embedded in Bahmni installer as an optional installation component. Please see this document: [Bahmni Advanced Installation](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=35291242).**

 
**
****References :**
- [http://www.dcm4che.org/docs/reference/dcm4chee/html/dcm4chee-installation.html](http://www.dcm4che.org/docs/reference/dcm4chee/html/dcm4chee-installation.html)
-  [http://www.dcm4che.org/confluence/display/ee2/Installation](http://www.dcm4che.org/confluence/display/ee2/Installation)

 

**Steps to follow for setup of DCM4CHEE using dmc4chee puppet module:**

- 
Download the following from YumRepo or the actual websites.

```
[Oviyam-2.1-bin.zip](http://172.18.2.14/packages/build/Oviyam-2.1-bin.zip) 
[dcm4che-2.0.28-bin.zip](http://172.18.2.14/packages/build/dcm4che-2.0.28-bin.zip)  
[dcm4chee-2.18.1-psql.zip](http://172.18.2.14/packages/build/dcm4chee-2.18.1-psql.zip)
[oviyam2.war](http://172.18.2.14/packages/build/oviyam2.war)
```
into /packages/build
```
[jboss-4.2.3.GA-jdk6.zip](http://172.18.2.14/packages/servers/jboss-4.2.3.GA-jdk6.zip) into /packages/servers
```

- 
Once downloaded, run the below command

```
bahmni-environment/scripts/run-puppet-module.sh dcm4chee
```

**Steps to follow for setup of DCM4CHEE manually:**

- Download dcm4chee-2.18.1-psql.zip from [http://sourceforge.net/projects/dcm4che/files/dcm4chee/2.18.1/](http://sourceforge.net/projects/dcm4che/files/dcm4chee/2.18.1/)
- Once downloaded, extract the distribution package into your desired destination directory. Avoid using a directory path that contains spaces though, as that may cause problems when running the application from the command line.
- 
Install PostgreSQL , create "pacsdb" database and run the below command
 

```
create database pacsdb
```

```
psql -Upostgres pacsdb -f dcm4chee-2.18.1-psql/sql/create.psql
```

- Download jboss-4.2.3.GA-jdk6.zip from [http://sourceforge.net/projects/jboss/files/JBoss/JBoss-4.2.3.GA/jboss-4.2.3.GA-jdk6.zip/download](http://sourceforge.net/projects/jboss/files/JBoss/JBoss-4.2.3.GA/jboss-4.2.3.GA-jdk6.zip/download)  and extract it in  /usr/share
- 
Goto dcm4chee extracted directory run the following command

```
dcm4chee-2.18.1-psql/bin/install_jboss.sh /usr/share/jboss-4.2.3.GA
```

- Change Port Numbers 8080 to 8001, 8009 to 8010 in dcm4chee-2.18.1-psql/server/default/deploy/jboss-web.deployer/server.xml
- Change the Port Number 1099 to 1100 in dcm4chee-2.18.1-psql/server/default/conf/jboss-service.xml
- 
Unzip the downloaded Oviyam2 bin zip from  [http://sourceforge.net/projects/dcm4che/files/Oviyam/2.1/](http://sourceforge.net/projects/dcm4che/files/Oviyam/2.1/) and run the below commands and Copy the ***oviyam2.war*** to ***dcm4chee-2.18.1-psql/server/default/***

- To start the dcm4chee server run dcm4chee-2.18.1-psql/bin/run.sh
- 
You can access dcm4chee using http://**ip-address**:8001/dcm4chee-web3/
 
![](https://bahmni.atlassian.net/wiki/download/attachments/24215562/Screenshot1.png?version=1&modificationDate=1436792163024&cacheVersion=1&api=v2)

- 
Use the below command to upload dcm files manually to DCM4CHEE. 

```
dcmsnd DCM4CHEE@ipaddress:11112 image.dcm
```

Sample image : [image.dcm](/wiki/download/attachments/24215562/image.dcm?version=1&modificationDate=1437549937105&cacheVersion=1&api=v2)

Utilities can be downloaded from [https://sourceforge.net/projects/dcm4che/files/dcm4che2/2.0.28/](https://sourceforge.net/projects/dcm4che/files/dcm4che2/2.0.28/)

Unzip the dcm4che-2.0.28-bin.zip file

- 
run the excecutable files with appropriate parameters.

- 
Configure ImageSuite in DCM4CHEE as below

![](https://bahmni.atlassian.net/wiki/download/attachments/24215562/Screen%20Shot%202015-07-13%20at%2010.56.39%20PM.png?version=1&modificationDate=1436808490579&cacheVersion=1&api=v2)
