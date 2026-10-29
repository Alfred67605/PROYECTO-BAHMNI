---
id: "3169517585"
title: "Upgrading Bahmni on CentOS to Bahmni Standard (or Lite) on Docker"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3169517585/upgrading-bahmni-on-centos-to-bahmni-standard-or-lite-on-docker"
version: 16
updated: "2024-07-30T10:42:29.257Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:05.921Z"
---

# Upgrading Bahmni on CentOS to Bahmni Standard (or Lite) on Docker

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3169517585)  
> **Versión del documento:** v16 (2024-07-30T10:42:29.257Z) | **Autor/Editor:** Mohankumar Thangavel

---

If you are new to Bahmni on Docker, we recommend you to go through the [Getting Started](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117744129/Getting+Started+Quickly+with+Bahmni+on+Docker#Running-Bahmni-Standard) documentation to try Bahmni with demo database on docker and get used to different configurations and commands before starting the migration.

 
**[Dec-2023] **The Bahmni team has conducted an **online training** on migrating from Bahmni CentOS, to Dockerized version of Bahmni. Please see the training material with video recordings here: [Migrating Bahmni from CentOS to Docker (Training)](/wiki/spaces/BAH/pages/3298590813/Migrating+Bahmni+from+CentOS+to+Docker+Training) 
 
This migration guide is in its initial stages. We recommend following the below instructions to setup a pre-prod / test environment first and test if all of the critical flows are working fine and then move to production. Make sure you have proper backup from your existing installation. This process has been conducted in two locations till now. Please let us know any feedback or improvements to this process, if you try it out.
 
## Preparing for upgrade:

When planning of upgrade from a existing production system on CentOS to running Bahmni on Docker, plan for additional hardware (servers) which will help you run Bahmni docker. A decent server for a production environment running most of standard components should be one with 4CPUs running with CPU > 3GHz and 16 GB of RAM. 

**Note: **For running Bahmni on Docker, there is no specific requirement for the operating system. In general docker can run on any operating system. Refer [here](https://docs.docker.com/engine/install/) for supported platforms and architectures. We recommend installing an LTS version of Ubuntu Server.

**Tip:** We recommend configuring the test / pre-prod environment on an **isolated** network environment or closed environment, to ensure the new server does not accidentally make any sync/DB calls to the currently running production server, or corrupts current atomfeed syncs. This can happen if you copy configuration files which have IP addresses pointing to older servers. An isolated environment will not allow outgoing calls to older servers. 

### Backing up artifacts:

Below are the common backup artifacts to be extracted from an existing Bahmni installation covering all components of Bahmni. If you are not using any component listed below you can ignore the backup artifacts related to it.

Note: The commands has been given here with the assumption that you have created a directory called /bahmni-backup for storing all the backup artifacts. If you have already configured backups for the installation and have the artifacts handy, you can just arrange in the directory structure as mentioned below.

| **Artifact Name** | **Description** | **Default location on server** | **Command to generate the artifact with default credentials** |  |
| --- | --- | --- | --- | --- |
| 1 | Bahmni Configuration | The configuration folder of Bahmni and its sub-components. Most implementations would have this as a Git repository. | /opt/bahmni-web/etc/bahmni_config/ | `cp -a /opt/bahmni-web/etc/bahmni_config /bahmni-backup/` |
| 2 | OpenMRS Database Backup | Backup of the OpenMRS mysql database | - | `mysqldump -u root --password=P@ssw0rd --routines openmrs --no-tablespaces > "/bahmni-backup/openmrsdb_backup.sql"` |
| 3 | Reports Database Backup | Backup of the Reports mysql database | - | `mysqldump -u reports-user --password=password --routines bahmni_reports --no-tablespaces > "/bahmni-backup/reportsdb_backup.sql"` |
| 4 | OpenELIS Database Backup | Backup of the OpenELIS Postgres database | - | `pg_dump -U clinlims -d clinlims -F p -b -v > "/bahmni-backup/openelisdb_backup.sql"` |
| 5 | Odoo Database Backup | Backup of the Odoo Postgres database | - | `pg_dump -U odoo -d odoo -F p -b -v > "/bahmni-backup/odoo_10_db_backup.sql"` |
| 6 | DCM4CHEE Database Backup | Backup of the DCM4CHEE Postgres database | - | `pg_dump -U postgres -d pacsdb -F p -b -v > "/bahmni-backup/dcm4cheedb_backup.sql"` |
| 7 | Pacs Integration Database Backup | Backup of the PACS Integration Postgres database | - | `pg_dump -U postgres -d bahmni_pacs -F p -b -v > "/bahmni-backup/pacs_integrationdb_backup.sql"` |
| 8 | Patient Images | Patient Photos captured from the registration page of Bahmni | /home/bahmni/patient_images | `cp -a /home/bahmni/patient_images /bahmni-backup/` |
| 9 | Document Images | Documents uploaded for a patient from multiple modules like Patient Documents module, Form observations etc | /home/bahmni/document_images | `cp -a /home/bahmni/document_images /bahmni-backup/` |
| 10 | Uploaded Results | Documents that are uploaded from OpenELIS during test result upload | /home/bahmni/uploaded_results | `cp -a /home/bahmni/uploaded_results /bahmni-backup/` |
| 11 | Uploaded Files | Files that are uploaded from Admin Module of Bahmni | /home/bahmni/uploaded-files | `cp -a /home/bahmni/uploaded-files /bahmni-backup/` |
| 12 | Clinical Forms JSON Files | The JSON files that are created by form builder module when defining form2 forms. Applicable only when Form-2 forms are used | /home/bahmni/clinical_forms | `cp -a /home/bahmni/clinical_forms /bahmni-backup/` |
| 13 | DCM4CHEE Dicom Files | The dicom files captured and stored in the dcm4chee server archive | /home/bahmni/pacs_images/archive | `cp -a /home/bahmni/pacs_images/archive/. /bahmni-backup/dcm4chee_archive` |
| 14 | Bahmni Queued Reports Results Files | The result files of reports added to queue from the reports module | /home/bahmni/reports | `cp -a /home/bahmni/reports /bahmni-backup/` |

Once you have gathered all the artifacts you would have directory structure as below. You can validate by running `ls -al /bahmni-backup ` . Also validate whether backups are properly take by doing `head -n 100`of db backup .sql files and doing an `ls` of other file directories.
 Backup Folder Structure
/bahmni-backup

  |--- bahmni_config

  |--- clinical_forms

  |--- dcm4chee_archive

  |--- dcm4cheedb_backup.sql

  |--- document_images

  |--- odoo_10_db_backup.sql

  |--- openelisdb_backup.sql

  |--- openmrsdb_backup.sql

  |--- pacs_integrationdb_backup.sql

  |--- patient_images

  |--- reports

  |--- reportsdb_backup.sql

  |--- uploaded_results

  |--- uploaded-files

Now you can compress the backup artifacts folder `/bahmni-backup` using zip or gzip and copy it to the new server over an external Hard drive or USB stick.

## Setting up the new server:

- Follow the pre-requisites in the [Getting started on Docker page](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117744129/Getting+Started+Quickly+with+Bahmni+on+Docker#Prerequisites%3A) to install the required tools. It would be mostly on installing docker, docker compose and git, and then cloning the bahmni-docker repository. 

- 
Copying in the backup artifacts from your old implementation. Move the backup artifacts same as directory structure mentioned above in the new server and unzip if required. Also make a note of the path where you have copied the backup artifacts.

#### Using your implementation specific configuration:

Please look at breaking changes in [this page](/wiki/spaces/BAH/pages/3117449270/Using+Implementation+specific+Configuration+docker)to understand some changes that would be needed with your current configuration setup.

In general we recommend implementations to track changes in their implementation specific configuration files using a version control tool like Git. This would be helpful to track what changes have been made, when and by whom. Follow the steps in this [documentation](/wiki/spaces/BAH/pages/3117449270/Using+Implementation+specific+Configuration+docker) to know how you can use your implementation specific configuration with docker. **Note: Only update the paths or config image variables, don't start services by running **`docker compose up -d`.

**Tip:** To get started and try out with the migration process, you can follow the [local development setup](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449270/Using+Implementation+specific+Configuration+docker#Local-development-on-config) as mentioned in the documentation and use `/bahmni_config` as value for `CONFIG_VOLUME` in .env. and comment the bahmni-config service. This will use the config you backed up during the backup process as above. We recommend storing configuration on a Git Repository.

This is an important step towards migration and make sure you followed the steps as in the referred document above.

#### Updating variables in environment configuration file:

The .env files present in bahmni-docker/bahmni-standard folder contains all configurable properties for running Bahmni on Docker. You can choose to use either .env or .env.dev. The .env file will soon have specific image tags for a released version and .env.dev will have latest image tags pointing to images built from mainline code of all repositories.
 
Migration will upgrade the MySQL version to 8.0. Read [this page](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3568599041/Upgrading+to+MySQL+8.0#Impacts-with-the-MySQL-8.0-upgrade) to know about the impacts.

Some of the variables related to database configuration needs to be updated in the .env file as the default setup comes with demo database images. Update the variable values as mentioned in below table

| **Variable Name** | **Value to be updated** |  |
| --- | --- | --- |
| 1 | `TZ` | The time zone where your previous instance was running. Example: `Asia/Kolkata` |
| 2 | `OPENMRS_DB_IMAGE_NAME` | mysql:8.0 |
| 3 | `OPENELIS_DB_IMAGE_NAME` | postgres:9.6 |
| 4 | `ODOO_10_DB_IMAGE_NAME` | postgres:9.6 |
| 5 | `ODOO_DB_IMAGE_NAME` | postgres:16.1 |
| 6 | `OPENELIS_DB_NAME` | clinlims |
| 7 | `OPENELIS_DB_USER` | clinlims |
| 8 | `OPENELIS_DB_PASSWORD` | clinlims |

## Restoring Bahmni Application and Databases:

### Running the Restore Script:
 
The restore script has been written to support restoration of every component on the same server running both database and application as containers. If you are planning to run database on an external server or a managed service like AWS RDS, you need to tune the script to restore the db backup in the external service/server. Or you can restore databases manually in the external setup also. You can find the utility functions in bahmni-docker/backup_restore/restore_utils.sh 

Before executing the restore script, if you are planning to use a different env file other than `.env` open the `bahmni-docker/bahmni-standard/restore_bahmni_standard.sh` file and update the value of `BAHMNI_DOCKER_ENV_FILE` variable in the script.

Now cd into the `bahmni-docker/bahmni-standard` directory and  run the restore script by using the following command

```
./restore_bahmni_standard.sh 

Example: ./restore_bahmni_standard.sh /bahmni-backup   --> Assuming you have backup-artifacts copied into /bahmni-backup directory
```

The `` is the location where you have copied backup data from your old server. **Note: Pass the absolute path of the directory as the input**

The restore script will now start initialising the database containers one by one based on the db backup files present in the passed `restore-artifacts-folder-path` directory. As an example if you have added only `openmrsdb_backup.sql` then only openmrsdb container will be started and database will be restored.

Next the restore script will load the bahmni files system backups like patient images, document images etc. into the required volume mounts.  

You may see some error logs like `DB backup file for $db_name not found at ${db_backup_file_path}. Skipping restore` or `Source directory for $artifact_name does not exist or is empty. So skipping restore for $artifact_name.`. You can ignore these logs if you are not using that specific components or don&rsquo;t want to restore those specific directories.

Once the restore script has completed, you can see the list of running containers by running `docker ps -a`  and the list of volumes created by running `docker volume ls`. To validate whether a database has been properly restored, you can exec into the container and connect to the database and validate.

#### Few useful queries to validate the restore of OpenMRS database:

The below queries can be run inside OpenMRS db container by exec and connecting to MYSQL. (docker compose exec -it openmrsdb bash)

```
--> List all tables (Approx 246 tables)
SHOW tables;

--> List all procedures in OpenMRS database. You will see entries showing names
SHOW PROCEDURE STATUS WHERE db = 'openmrs';

--> List Routine Information in OpenMRS database
SELECT  routine_schema,routine_name,routine_type  FROM information_schema.routines  WHERE routine_schema = 'openmrs'  ORDER BY routine_name;

---> Validate View Creation (You should see a query fetching information from concept related tables)
select VIEW_DEFINITION from information_schema.views where TABLE_NAME='concept_view';
```

### Starting the Bahmni Application Components:

Once the above step has been completed, you will have the database and bahmni files copied and volume mounted into specific locations. Next step is starting the application containers. We recommend doing this in a phased approach.
 
The below commands and guide assumes that your current implementation is running with the same application binaries as shipped by Bahmni out of the box. If you have built custom modules or have a customised build of binaries, then you should first build a custom docker image of your distribution or application and use that as the image for respective services.

#### ⚕️ Starting EMR Components:

As the first step to testing upgrade on Bahmni Docker start with the Bahmni EMR components which includes running OpenMRS with Bahmni Modules, Bahmni Web, Appointments, Implementer Interface. You can start these services by running

`docker compose --profile emr up -d`     **or     **`docker compose --profile emr --env-file  up -d`.

Wait for the containers to boot up, run the required migrations. You can also check logs of individual containers by running `docker compose logs -f openmrs` or using the `./run-bahmni.sh` utility script

The application should be accessible at `https://localhost (or) https://`. You can validate the EMR flows based on your implementation specific configuration.

Once you feel comfortable that you have tested all EMR/Clinical flows, you can proceed with starting the other required services based on your needs.
 Known Issues and Troubleshooting
- 
**Issue with Patient Document Access**

When trying to access patient documents or uploaded-results or uploaded-files, if you get a 403 Forbidden error or 404 Not found error, it is likely due to file permissions issue with restored files. You can fix this by running the below commands on openmrs container

```
docker compose exec -it openmrs bash
setfacl -R -d -m o::rx -m g::rx /home/bahmni/document_images
setfacl -R -d -m o::rx -m g::rx /home/bahmni/uploaded_results
setfacl -R -d -m o::rx -m g::rx /home/bahmni/uploaded-files
chmod -R 755 /home/bahmni/document_images
chmod -R 755 /home/bahmni/uploaded_results
chmod -R 755 /home/bahmni/uploaded-files
```

#### 📑 Starting Reports Components:

**Change of directory for report custom SQLs**: In the docker setup, the bahmni-config is mounted at `/etc/bahmni-config` in the reports container. So in your report config file at `openmrs/apps/reports/reports.json`, if you are using custom sql reports, update the value of sqlPath from `/var/www/bahmni_config` to `/etc/bahmni_config`.

You can start the Reports service by running the below command.

`docker compose --profile reports up -d`    **or   ** `docker compose --profile reports --env-file  up -d`.

The application should be accessible at `https://localhost (or) https://` . You can validate reports data between old and new system. 

#### 🥼 Starting OpenELIS Components:

You can start the OpenELIS Lab Managament system by running the below command.

`docker compose --profile openelis up -d`    **or**   `docker compose --profile openelis --env-file  up -d`.

The application should be accessible at `https://localhost/openelis (or) https:///openelis` . You can validate patients and lab orders sync properly over atomfeed. 

#### 🧾  Starting Odoo Components:

You can start Odoo and the odoo-connect service (integration service between EMR and odoo) by running below command. 

`docker compose --profile odoo-10 up -d`   **or**   `docker compose --profile odoo-10 --env-file  up -d`.

The application should be accessible at `https://localhost:8070 (or) https://:8070`. You can validate patients, quotations sync properly over atomfeed.
 Known Issues and Troubleshooting
- 
Sometimes you might see that Odoo UI is broken. This is due to some static files are not being loaded by Odoo on boot up. To fix this some entries from the ir_attachment table has to be deleted.

```
docker compose exec -it odoodb bash
psql -U odoo
DELETE FROM ir_attachment WHERE url like '%/web/content%';
\q
exit
```

#### 📻  Starting Radiology (PACS) Components:

##### Steps to be done before starting Radiology:

- 
Before starting application, update modality table in the pacs_integration database to send orders to dcm4chee running in docker

```
docker compose exec -it pacsdb sh 
psql -U ${PACS_INTEGRATION_DB_USERNAME} -d ${PACS_INTEGRATION_DB_NAME} -c "UPDATE modality set ip='dcm4chee',port=2575 where id=1;" 
exit
```

- 
Updating PACS Query Config

Login to OpenMRS and validate if `Pacs Query` OMOD is running from Administration &rarr; Manage Modules.

- 
Now navigate to Administration &rarr; Settings &rarr; PacsQuery and find the `pacsConfig` property.

- 
In that property add information about your PACS server from where the order information needs to be fetched. The format would be `@:`.** **Set the value as ***DCM4CHEE@dcm4chee:11112***

##### Starting the application:

You can start DCM4CHEE and the pacs-integration service by running below command. 

`docker compose --profile pacs up -d` or `docker compose --profile pacs --env-file  up -d`.

The application should be accessible at `https://localhost/dcm4chee-web3 (or) https:///dcm4chee-web3`. You can validate dcm4chee modality worklist sync properly over atomfeed.

Now you should have all the components of Bahmni Standard running on docker 🎊 . We recommend thorough testing of all user flows, system sync over atomfeed before moving to production. Also try restore a couple of times in pre-prod and then move to production.

**Tip for local, testing or pre-prod environments (Not on production)**

If you at any time feel that something is not working as expected or you wish to start over gain, you can cleanup your environment by running `docker compose --profile bahmni-standard down -v` and then start off with the restore process from fresh again.

If you have any difficulties or face errors during restore or have any feedbacks or suggestions, please reach out to us on Bahmni Community Slack or OpenMRS talk thread. [Communication Channels and Tools (Discourse & Slack)](/wiki/spaces/BAH/pages/414646273/Communication+Channels+and+Tools+Discourse+Slack) 

### What&rsquo;s Next:

- [Performing a Backup / Restore of Container Data & Files (docker)](/wiki/spaces/BAH/pages/3222601729/Performing+a+Backup+Restore+of+Container+Data+Files+docker) 

- 
[Configuring SSL/HTTPs certificate (docker)](/wiki/spaces/BAH/pages/3217522692/Configuring+SSL+HTTPs+certificate+docker) 

- 
[Setup Centralised Logging (docker)](/wiki/spaces/BAH/pages/3119120445/Setup+Centralised+Logging)
