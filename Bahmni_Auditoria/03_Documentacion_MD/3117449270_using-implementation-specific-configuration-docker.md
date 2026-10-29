---
id: "3117449270"
title: "Using Implementation specific Configuration (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449270/using-implementation-specific-configuration-docker"
version: 12
updated: "2024-07-30T09:04:35.031Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:52.019Z"
---

# Using Implementation specific Configuration (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449270)  
> **Versión del documento:** v12 (2024-07-30T09:04:35.031Z) | **Autor/Editor:** Mohankumar Thangavel

---

Detailed explanation about Bahmni configuration can be found at [Configuration 101.](#) 

Bahmni uses configuration in the form of JSON and supports configuration across multiple services. The default configuration comes with [standard-config](https://github.com/Bahmni/standard-config) (for Bahmni Standard) and [clinic-config](https://github.com/Bahmni/clinic-config) (for Bahmni Lite) image running in **bahmni-config** service. The configurations will be shared across services like OpenMRS, bahmni-web, openelis, reports by using docker volumes.To override default-config with your implementation specific configuration, it is recommended to build a docker image of your config and use it with the bahmni-config service.

The steps to build the docker image for your implementation specific config can be found [here](https://github.com/Bahmni/default-config#docker-image-build). Once you have the docker image built you need to update `Bahmni Config Environment Variables` in the [.env](https://github.com/Bahmni/bahmni-docker/blob/master/.env) file.

### Local development on config

If you are doing local development on configuration, you can mount your local folder also. Follow the step below.

- 
Update the `CONFIG_VOLUME` variable in the .env file with the path of your local config folder.

- 
Comment `bahmni-config` service in docker-compose.yml

- 
Update / Start the containers by running `docker-compose up -d`. If you use any profile, pass the profile option as well.

**You can also refer to this training video on how to perform the above:** [https://www.youtube.com/watch?v=eDab30kY54w&list=PLzknGpbejfSzEB2dT87mexJaBUsXNuZkD&index=4](https://www.youtube.com/watch?v=eDab30kY54w&list=PLzknGpbejfSzEB2dT87mexJaBUsXNuZkD&index=4) 
 
- 
Also see this discussion on how to package Bahmni docker images for your own custom deployments: [https://talk.openmrs.org/t/running-bahmni-as-a-single-docker-service/40165](https://talk.openmrs.org/t/running-bahmni-as-a-single-docker-service/40165) 

- 
Publish your docker images to docker hub: [https://www.cloudbees.com/blog/using-docker-push-to-publish-images-to-dockerhub](https://www.cloudbees.com/blog/using-docker-push-to-publish-images-to-dockerhub) 

- 
Copying docker images directly to target machine: [Running with Poor or No Internet Connectivity (docker)](/wiki/spaces/BAH/pages/3117613282/Running+with+Poor+or+No+Internet+Connectivity+docker) 

Breaking changes when using existing config with Bahmni on Docker:

- 
**Bahmni Reports SQL path for Custom SQL files:**
In CentOS based Bahmni installation, the sqlPath attribute for custom sql files would have `/var/www/bahmni_config/...` as the path. Now with docker setup, the config folder is mounted at `/etc/bahmni_config` in the reports container. So, replace the value of sqlPath attribute in report.json to start with `/etc/bahmni_config` rather than `/var/www/bahmni_config`

- 
**Liquibase Migrations for OpenMRS:**
In CentOS based Bahmni installation, adding custom liquibase migration for OpenMRS are allowed through `bahmni_config/openmrs/migrations` . With the dockerised setup and upgraded OpenMRS [openmrs-module-initializer](https://github.com/mekomsolutions/openmrs-module-initializer) module is packaged with the distribution. So new liquibase migrations to be added in `masterdata/configuration/liquibase` directory in the bahmni-config.

 **Running Bahmni on Docker**
