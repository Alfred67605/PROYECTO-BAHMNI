---
id: "836272188"
title: "Bahmni ERP Connect"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/836272188/bahmni-erp-connect"
version: 3
updated: "2019-04-08T13:15:15.335Z"
author: "Angshuman Sarkar"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:33.725Z"
---

# Bahmni ERP Connect

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/836272188)  
> **Versión del documento:** v3 (2019-04-08T13:15:15.335Z) | **Autor/Editor:** Angshuman Sarkar

---

Bahmni ERP Connect is the service that integrates OpenMRS (EMR) & OpenELIS (Lab) components to Odoo (ERP). 

**

## Source Code

- Feed Integration Service - [https://github.com/Bahmni/openerp-atomfeed-service](https://github.com/Bahmni/openerp-atomfeed-service)
- Packaging - [https://github.com/Bahmni/bahmni-package/tree/master/bahmni-erp-connect](https://github.com/Bahmni/bahmni-package/tree/master/bahmni-erp-connect)

## Build and install

```
> cd /mybahmni/
> git clone https://github.com/Bahmni/openerp-atomfeed-service
> git clone https://github.com/Bahmni/bahmni-package

> cd /mybahmni/openerp-atomfeed-service/
# generate the war "openerp-atomfeed-service.war"
> mvn clean install
> cp target/openerp-atomfeed-service.war /mybahmni/bahmni-package/bahmni-erp-connect/resources/
> cd /mybahmni/bahmni-package/bahmni-erp-connect/
> ./gradlew buildrpm

# you might want to bump up the version of the rpm. 
# To do so, you can change "bahmni-package/gradle.properties"

# now copy the rpm to the target machine (vagrant or docker) 
# uninstall previous version of bahmni-erp-connect
# first logon to the target env and switch to su
# assuming that you have the erp-connect rpm available at /tmp/ 
> rpm -e bahmni-erp-connect
> rpm -Uvh /tmp/
> service bahmni-erp-connect status

```

## Runtime properties 
 
Please note, some of the runtime properties configuration (like using APP_PROPERTIES_FILE env variable to indicate external properties file) are only available from 0.92 version. 

- Runtime properties are set through "bahmni-erp-connect.conf" which is usually found under "/opt/bahmni-erp-connect/etc/"
- The properties exported this way, are set as environment variables everytime "bahmni-erp-connect" starts up. However the properties set this way do not allow properties with dot - for example "scheduler.initial.delay" can not be exported through "bahmni-erp-connect.conf" file. For this you would require this property to be passed either as JVM arguments with "-D" parameters. 
java -jar -Dscheduler.start.delay=10000

- Alternatively, export a property "APP_PROPERTIES_FILE" in "bahmni-erp-connect.conf"
export APP_PROPERTIES_FILE=file:/home/bahmni/bahmi-erp-connect.properties

- Obviously, you need to ensure that a properties file with such names are found in that location, and the file can be read by "bahmni" user. 
- For list of available properties that can be overridden, see [here](https://github.com/Bahmni/openerp-atomfeed-service/blob/master/openerp-atomfeed-service/src/main/resources/erp-atomfeed.properties)

On this page**
