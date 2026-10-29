---
id: "3117482143"
title: "Metabase Configuration (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117482143/metabase-configuration-docker"
version: 8
updated: "2023-01-23T11:53:44.215Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:02.041Z"
---

# Metabase Configuration (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117482143)  
> **Versión del documento:** v8 (2023-01-23T11:53:44.215Z) | **Autor/Editor:** Gurpreet Luthra

---

Metabase is an opensource, popular, analytics and reporting tool, which can be used to connect to Mart DB, OpenMRS DB, etc. to create visualisation, dashboards, reports, etc in data stored in Bahmni. Bahmni comes pre-packaged with metabase and mart, in docker compose (for both bahmni-lite and bahmni-standard). Before you use Metabase for production data, please ensure you have setup correct permissions/groups for users, so they don’t get access to ALL the data. Read more on that here: [Securing Metabase & Bahmni Mart Analytics Tool](/wiki/spaces/BAH/pages/3130884148/Securing+Metabase+Bahmni+Mart+Analytics+Tool) . To better understand Bahmni Mart please read: [Bahmni Mart](/wiki/spaces/BAH/pages/695959553/Bahmni+Mart) 

## Environment Configurations:

| Variable Name | Description |
| --- | --- |
| METABASE_IMAGE_TAG | This value tells which image version to be used for Metabase. A list of tags can be found at [bahmni/Metabase image - Tags](https://hub.docker.com/r/metabase/metabase/tags). |
| METABASE_POSTGRES_IMAGE_TAG | This value tells which image version to be used for Postgres image. A list of tags can be found at [postgres - Tags](https://hub.docker.com/_/postgres/tags). |
| METABASE_DB_HOST | Host of the Metabase application database. |
| METABASE_DB_PORT | Port of the Metabase application database. |
| METABASE_DB_NAME | Name of the Metabase application database. |
| METABASE_DB_USER | Username of the Metabase application database. |
| METABASE_DB_PASSWORD | Password of the Metabase application database. |
| MB_ADMIN_EMAIL | Email-Id of the Metabase application Admin user. |
| MB_ADMIN_FIRST_NAME | First name of the Metabase application Admin user. |
| MB_ADMIN_PASSWORD | Password of the Metabase application Admin user. |
| OPENMRS_DB_HOST | Host of the OpenMRS database. |
| OPENMRS_DB_NAME | Name of the OpenMRS database. |
| OPENMRS_DB_USERNAME | Username of the OpenMRS database. |
| OPENMRS_DB_PASSWORD | Password of the OpenMRS database. |
| OPENMRS_DB_TYPE | Type of the OpenMRS database. |

## Starting Metabase from Bahmni Docker

####  Metabase will start with below details:

- A pre-configured Admin user.

- 
Pre-connected to OpenMRS DB and MART DB.

- 
Few sample reports.

 

#### To start Metabase in local follow the below commands.

- We need OpenMRS DB to be up and running before starting Metabase else the Sample reports will not be generated.

- 
 Start metabase profile from docker-compose.yaml

```
# Edit the profile to "bahmni-mart" to bring up all services incl metabase 
# (or to "metabase" if you ONLY want metabase)
COMPOSE_PROFILES=bahmni-mart 

# Then execute the command
docker compose up -d
```

3. Metabase should be running on `https:///metabase`

4. To Login, use the same credentials as mentioned in the `.env` file for variables: `METABASE_ADMIN_EMAIL` and `METABASE_ADMIN_PASSWORD`. 

Once you have logged in as Admin user to Metabase you can go to DATA -> Browse data -> OUR DATA to see all the connected Databases and to visualize the predefined reports the user needs to go to COLLECTIONS -> Bahmni Analytics

Note: *Automatic report generation and DB integration will happen in Metabase during start-up only if no prior user exists in Metabase. If Metabase DB already has an user then DB integration and report generation will be skipped.*

 Short Demo video on Youtube of Metabase & Mart: [https://www.youtube.com/watch?v=IHZR-W7EdNg](https://www.youtube.com/watch?v=IHZR-W7EdNg) 

 
***Running Bahmni on Docker***
