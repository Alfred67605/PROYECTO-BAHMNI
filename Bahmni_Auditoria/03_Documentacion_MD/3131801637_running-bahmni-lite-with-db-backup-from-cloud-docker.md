---
id: "3131801637"
title: "Running Bahmni Lite with DB backup from cloud (Docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3131801637/running-bahmni-lite-with-db-backup-from-cloud-docker"
version: 6
updated: "2023-08-28T10:24:36.297Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:09.573Z"
---

# Running Bahmni Lite with DB backup from cloud (Docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3131801637)  
> **Versión del documento:** v6 (2023-08-28T10:24:36.297Z) | **Autor/Editor:** Gurpreet Luthra

---

This page documents how to take a DB Backup of your OpenMRS / EMR DB from **Kubernetes** environment (running on cloud), build a **docker** image with this DB, and then run Bahmni docker compose with the restored database. 

**WARNING: ***If you are working with production data, please be very careful how you handle it, who has access to it, and where you share/keep it. It is illegal to make private patient data available to people without authorisation in most countries!*
 
# Repositories

🔸 [Bahmni Lite](https://github.com/Bahmni/bahmni-docker.git)

🔸 [Bahmni Lite - India based with ABDM integration](https://github.com/BahmniIndiaDistro/bahmni-india-package.git)

🔸 [Bahmni Scripts - to build DB for openMRS](https://github.com/Bahmni/bahmni-scripts.git)

# Setup

🔹 [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) clone the respective Bahmni Lite repository

🔹 [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) clone the Bahmni Scripts repository

🔹 Install [Docker](/wiki/spaces/BAH/pages/299630726/Running+Bahmni+on+Docker)

# DB backup from Kubernetes/AWS
 
We ran Bahmni Lite on AWS/Kubernetes. So the following setup will extract DB dump based on Kubernetes commands. 

- 
Get into the openMRS kubernetes pod

```
kubectl exec -it openmrs
 -n  -- bash
```

2. Navigate to the `openmrs/data` folder and zip the `configuration_checksum` folder (which is used by Initializer module to determine if an initializer entry has run or not run).

```
# install zip
yum install zip

# Navigate to openmrs/data directory
cd /openmrs/data

# Zip the checksums folder
zip -r configuration_checksums.zip configuration_checksums
```

3.  Backup the DB as a SQL dump

```
# Install mysql cli
yum install mysql

# Export the current live DB as a sql dump to the pod
mysql -u username -p database_name > omrsdb.sql
# Provide password and press Enter

# Exit Mysql
Exit
```

4. Note down the Database details

```
# Open the runtime properties
cat openmrs-runtime.properties

# Exit the openMRS pod
Exit
```

 
Keep a note of the above DB details and maintain them securely until the setup is completed successfully

5. Copy the files to local machine

```
# Copy the checksums zip to the local
kubectl cp performance/openmrs-
:/openmrs/data/configuration_checksums.zip configuration_checksums.zip

# Copy the sql dump to the local
kubectl cp performance/openmrs-:/openmrs/data/omrsdb.sql omrsdb.sql
```

# Build the DB in Docker
 We used mysql 5.7 for our setup, if you use mysql 5.6 kindly change it wherever applicable.

- 
Navigate to `~/bahmni-scripts/demo/db-backups/1.0.0-lite/mysql5.7/resources`

 2. Delete the files present in this directory

 3. Copy and paste the files exported from the pod i.e `configuration_checksums.zip` and `omrsdb.sql` to this directory

4. Navigate back to the mysql5.7 directory and replace the Dockerfile contents with the following code:

**Apple M1 Chip (Mac)**

```
ARG arch
FROM --platform=linux/amd64 mysql:5.7

#Install the required tools
RUN yum update -y && \
   yum install -y \
   unzip

#Set the mysql root password
ENV MYSQL_ROOT_PASSWORD=

#Copy configuration_checksums & DB Backup
COPY demo/db-backups/1.0.0-lite/mysql5.7/resources/*.zip  .
COPY demo/db-backups/1.0.0-lite/mysql5.7/resources/*.sql  /docker-entrypoint-initdb.d/omrs_db_backup.sql

RUN unzip configuration_checksums.zip && \
   rm configuration_checksums.zip
```

**Others (Linux)**

```
FROM mysql:5.7

#Install the required tools
RUN yum update -y && \
   yum install -y \
   unzip

#Set the mysql root password
ENV MYSQL_ROOT_PASSWORD=

#Copy configuration_checksums & DB Backup
COPY demo/db-backups/1.0.0-lite/mysql5.7/resources/*.zip  .
COPY demo/db-backups/1.0.0-lite/mysql5.7/resources/*.sql  /docker-entrypoint-initdb.d/omrs_db_backup.sql

RUN unzip configuration_checksums.zip && \
   rm configuration_checksums.zip
```

5. Navigate to bahmni-scripts root directory and execute the following docker command (note the TAGNAME should be set to some specific value. e.g my-build-1):

```
docker build --no-cache -t bahmni/openmrs-db: -f demo/db-backups/1.0.0-lite/mysql5.7/Dockerfile .
```

# Config the environment and docker compose 

- 
Navigate to the `bahmni-docker/bahmni-lite` or `bahmni-india-package` directory where the `docker- compose.yml` is present

 
If using Apple M1 chip, add `platform: linux/amd64` to each service present under the docker compose file.

2. Add the openMRS DB details captured earlier in [DB backup extraction](#dblink) to the .env file and save it. Ensure the `OPENMRS_DB_IMAGE_NAME` is pointing to the newly created docker image (as generated in the previous step).

```
# OpenMRS Environment Variables
OPENMRS_IMAGE_TAG=latest
OPENMRS_DB_IMAGE_NAME=bahmni/openmrs-db:
OPENMRS_DB_NAME=
OPENMRS_DB_HOST=openmrsdb
OPENMRS_DB_USERNAME=
OPENMRS_DB_PASSWORD=
OPENMRS_DB_CREATE_TABLES='false'
OPENMRS_DB_AUTO_UPDATE='true'
OPENMRS_MODULE_WEB_ADMIN='true'
MYSQL_ROOT_USERNAME=root
# OMRS_DEV_DEBUG_PORT=
OMRS_JAVA_SERVER_OPTS=''
OMRS_JAVA_MEMORY_OPTS=''
OPENMRS_UPLOAD_FILES_PATH=./openmrs-uploads
BAHMNI_OPENMRS_MODULES_PATH=
MYSQL_ROOT_PASSWORD=
OPENMRS_DB_TYPE=mysql
OPENMRS_DOCKER_ENV='true'
```

# Invoke Bahmni Lite

- 
Bring up Bahmni through Docker compose

```
docker-compose up -d --build
```

2. Wait for openmrs to load with all the required indexes

3. Enter “[http://localhost/openmrs](http://localhost/openmrs)” in browser and verify openMRS is up

4. Navigate to “[http://localhost/](http://localhost/)” and start using Bahmni (this should now run with the new DB)
