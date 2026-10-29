---
id: "3117613179"
title: "PACS Configurations (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117613179/pacs-configurations-docker"
version: 8
updated: "2026-02-09T04:20:27.551Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:59.960Z"
---

# PACS Configurations (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117613179)  
> **Versión del documento:** v8 (2026-02-09T04:20:27.551Z) | **Autor/Editor:** Mohankumar Thangavel

---

Bahmni/dcm4chee image runs DCM4CHEE postgres version. Bahmni/pacs-integration image is developed to enable atomfeed sync between Bahmni EMR and DCM4CHEE. Both these images are build and published using Github Actions from [pacs-integration](https://github.com/Bahmni/pacs-integration)repository.

PACS setup in Bahmni uses DCM4CHEE. You can read more about it [here](#). If you are using a fresh database setup, you need to map PACS Procedure codes as mentioned [here](#).

In docker compose we use two different profiles `pacs` and `pacs-simulator`.

When the `pacs` profile is started, and when an order is made from Bahmni -> Consultation -> Orders -> Radiology Order you will be able to see the orders in `Modality Worklist` of DCM4CHEE / PACS. There is a one-time setup in OpenMRS that needs to be done to view Radiology Images properly. Refer 4th point in this [Wiki Page](#)

### One time setup for pacs-integration

#### For DCM4CHEE v2 (pacs profile): 

- SSH into the pacsdb container by running: `docker compose exec -it pacsdb bash` . Note: Run this from bahmni-docker/bahmni-standard directory.

- 
Run the below commands inside the container shell to setup Modality Configuration for sync:

```
psql -U ${PACS_INTEGRATION_DB_USERNAME} ${PACS_INTEGRATION_DB_NAME} -c "INSERT into modality VALUES (1, 'DCM4CHEE','DCM4CHEE PACS', 'dcm4chee',2575,3000);"
psql -U ${PACS_INTEGRATION_DB_USERNAME} ${PACS_INTEGRATION_DB_NAME} -c "INSERT INTO order_type(id,name,modality_id) VALUES(1,'Radiology Order',1);"
```

**On This Page:**
 

#### For DCM4CHEE 5 (dcm4chee5 profile):

- SSH into the pacs-integration5-db container by running `docker compose exec -it pacs-integration5-db bash`. Note: Run this command from bahmni-docker/bahmni-standard directory.

- 
Run the below commands inside the container shell to setup Modality Configuration for sync:

```
psql -U ${POSTGRES_USER} ${POSTGRES_DB} -c "INSERT into modality VALUES (1, 'DCM4CHEE','DCM4CHEE PACS', 'dcm4chee5',2575,3000);" 

psql -U ${POSTGRES_USER} ${POSTGRES_DB} -c "INSERT INTO order_type(id,name,modality_id) VALUES(1,'Radiology Order',1);"
```

## Environment Configurations

### PACS DB Configurations

| Variable Name | Description |
| --- | --- |
| PACS_DB_HOST | The host name of the postgres server which runs database for dcm4chee and pacs-integration |
| PACS_DB_PORT | The port of the postgres server for dcm4chee and pacs-integration |
| PACS_DB_ROOT_PASSWORD | The root password given to the postgres container ie pacsdb service |

### DCM4CHEE Configurations

| Variable Name | Description |
| --- | --- |
| DCM4CHEE_IMAGE_TAG | This value specifies which image version needs to be used for dcm4chee service. List of tags can be found at [bahmni/dcm4chee - Tags](https://hub.docker.com/r/bahmni/dcm4chee/tags) . |
| DCM4CHEE_DB_NAME | The name of the database for dcm4chee service |
| DCM4CHEE_DB_USERNAME | Username for connecting to dcm4chee database |
| DCM4CHEE_DB_PASSWORD | Password for connecting to dcm4chee database |

### PACS-Integration Configurations

| Variable Name | Description |
| --- | --- |
| PACS_INTEGRATION_IMAGE_TAG | This value specifies which image version needs to be used for pacs-integration service. List of tags can be found at [bahmni/pacs-integration - Tags](https://hub.docker.com/r/bahmni/pacs-integration/tags) . |
| PACS_INTEGRATION_DB_NAME | The name of the database for pacs-integration service |
| PACS_INTEGRATION_DB_USERNAME | Username for connecting to pacs-integration database |
| PACS_INTEGRATION_DB_PASSWORD | Password for connecting to pacs-integration database |

### PACS Simulator Configurations

Should be used for testing / demo environments. In a production setup this would be replaced by actual Modality machine (Example: X-Ray Machine)

| Variable Name | Description |
| --- | --- |
| PACS_SIMULATOR_IMAGE_TAG | This value specifies which image version needs to be used for pacs-simulator service. List of tags can be found at [bahmni/pacs-simulator - Tags](https://hub.docker.com/r/bahmni/pacs-simulator/tags) . |
| PACS_SIMULATOR_TIMEOUT | The timeout value for PACS Simulator while sending DICOM Image to the given server |
| PACS_SERVER_TYPE | Takes either `dcm4chee` (or) `orthanc` |
| PACS_SERVER_URL | The URL of the PACS server. For DCM4CHEE it would be like `DCM4CHEE@dcm4chee:11112` |
| UPDATE_PACS_INTEGRATION_DB | Set this to true if you want PACS Simulator automatically register itself as a modality for `Radiology Order` type in PACS Integration database. When set to true this would connect with pacs_integration_db |

## Using PACS Simulator (for test/QA purposes. Not to be used in Production)

There are two ways of uploading a DICOM image against a PACS order.

#### 1. Manually upload DICOM Images

First find out the patient id, patient first name, patient last name and accession number of the order from modality worklist page of DCM4CHEE. Now from your terminal navigated to the bahmni-docker directory run the following command after replacing the appropriate values.

```
docker compose run pacs-simulator sh -c './upload.sh DCM4CHEE@dcm4chee:11112 
   '
```

An example command would look like

`docker compose run pacs-simulator sh -c './upload.sh DCM4CHEE@dcm4chee:11112 GAN203010 Test Radiology ORD-329'`

#### 2. Automated Method by running PACS-Simulator

The PACS Simulator service can also be started in a listen mode by running `docker-compose --profile pacs-simulator up -d`. When `pacs-simulator` profile is started, the order would be received by pacs-simulator service and a sample DICOM image will be uploaded to DCM4CHEE by pacs-simulator. And the completed order can be found in `Folder` tab of DCM4CHEE and also in Oviyam viewer. Now the orders will not be visible in Modality Worklist.

❗_Note:_ When pacs-simulator is started, it will update entries in `pacs_integration_db` modality table. Now when you want to receive the orders back in DCM4CHEE Modality Worklist make sure to update the modality table by running the below commands.

```
docker compose stop pacs-simulator
docker compose exec -it pacsdb sh
psql -U ${PACS_INTEGRATION_DB_USERNAME} -d ${PACS_INTEGRATION_DB_NAME} -c "UPDATE modality set ip='dcm4chee',port=2575 where id=1;"
exit 
```
