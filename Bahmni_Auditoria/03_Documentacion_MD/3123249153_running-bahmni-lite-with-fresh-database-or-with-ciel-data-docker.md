---
id: "3123249153"
title: "Running Bahmni Lite with fresh database or with CIEL data (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3123249153/running-bahmni-lite-with-fresh-database-or-with-ciel-data-docker"
version: 16
updated: "2024-01-15T05:42:15.485Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:50.732Z"
---

# Running Bahmni Lite with fresh database or with CIEL data (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3123249153)  
> **Versión del documento:** v16 (2024-01-15T05:42:15.485Z) | **Autor/Editor:** Gurpreet Luthra

---

Bahmni LITE comes with [CIEL Concept dictionary](/wiki/spaces/BAH/pages/3311534130/Bahmni+and+CIEL+dictionary), which comprises of over 50K medical terms. This can slow down the first time initialization of DB. To decrease startup time, Bahmni publishes pre-loaded DBs based on mysql v5.6 and mysql v5.7. The default OpenMRS DB image of bahmni-lite points to the `bahmni/openmrs-db:1.0.0-lite-mysql5.7`. This can be configured and changed as per your requirements. The DB dump with CIEL data is maintained here on github: [https://github.com/Bahmni/bahmni-scripts/tree/master/demo/db-backups/1.0.0-lite](https://github.com/Bahmni/bahmni-scripts/tree/master/demo/db-backups/1.0.0-lite) 

DB Images pre-loaded with CIEL concepts are:

- 
`bahmni/openmrs-db:1.0.0-lite-mysql5.6`: OpenMRS DB based on mysql v5.6

- 
`bahmni/openmrs-db:1.0.0-lite-mysql5.7`: OpenMRS DB based on mysql v5.7

These images can be used by changing the [OPENMRS_DB_IMAGE_NAME](https://github.com/Bahmni/bahmni-docker/blob/0c4ab521b3e70b99c87c84adc0b9e3c07950df9b/bahmni-lite/.env#L30) variable in .[env](https://github.com/Bahmni/bahmni-docker/blob/master/bahmni-lite/.env) file of bahmni-lite

## **To start Bahmni with a fresh DB, perform the following one-time steps:**
 
If you have already started Bahmni, please make sure to bring down all the containers by running `docker compose --profile  down -v`

- 
Change the [OPENMRS_DB_IMAGE_NAME](https://github.com/Bahmni/bahmni-docker/blob/0c4ab521b3e70b99c87c84adc0b9e3c07950df9b/bahmni-lite/.env#L30) variable to `mysql:5.6` or `mysql:5.7`  in [.env](https://github.com/Bahmni/bahmni-docker/blob/master/bahmni-lite/.env) file of Bahmni Lite (this means use MySQL published fresh docker image)

```
OPENMRS_DB_IMAGE_NAME=mysql:5.6
```

- 
Set the `OPENMRS_DB_CREATE_TABLES` variable to `'true'` in [.env](https://github.com/Bahmni/bahmni-docker/blob/0c4ab521b3e70b99c87c84adc0b9e3c07950df9b/bahmni-lite/.env#L35) file of bahmni-lite

- 
Comment out the volume mounts for `configuration_checksums` in [openmrs](https://github.com/Bahmni/bahmni-docker/blob/0c4ab521b3e70b99c87c84adc0b9e3c07950df9b/bahmni-lite/docker-compose.yml#L80) and [openmrsdb](https://github.com/Bahmni/bahmni-docker/blob/0c4ab521b3e70b99c87c84adc0b9e3c07950df9b/bahmni-lite/docker-compose.yml#L99) service in the [docker-compose.yml](https://github.com/Bahmni/bahmni-docker/blob/master/bahmni-lite/docker-compose.yml) of Bahmni Lite. Doing this will make sure that the initializer module re-executes the changelogs. Note: the default initialiser configuration can be [seen here](https://github.com/Bahmni/clinic-config/tree/main/masterdata/configuration). To run with your own “config”, see this [documentation](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449270/Using+Implementation+specific+Configuration+docker). 

```
# Add a '#' in front of the configuration_checksum lines in volume sub-section of the individual services to comment them out
# - 'configuration_checksums:/openmrs/data/configuration_checksums'
# - 'configuration_checksums:/configuration_checksums'
```

- 
Now start Bahmni LITE, and see the openmrs logs to understand when the initialiser logs finish execution. 

```
# Start Bahmni LITE (in bahmni-lite/ subfolder)
docker compose up -d

# See OpenMRS Logs
docker compose logs openmrs -f
```

**Running Bahmni with Docker**
