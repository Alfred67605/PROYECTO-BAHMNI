---
id: "114728763"
title: "Configure backup"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114728763/configure-backup"
version: 41
updated: "2017-03-03T06:25:49.029Z"
author: "Jayasuganthi"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:51.823Z"
---

# Configure backup

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114728763)  
> **Versión del documento:** v41 (2017-03-03T06:25:49.029Z) | **Autor/Editor:** Jayasuganthi

---

## Purpose and Benefits
 
This feature has been introduced in V0.88 of Bahmni. Please look at [Known Issues with DB Backup and Restore](/wiki/spaces/BAH/pages/114895287/Known+Issues+with+DB+Backup+and+Restore) incase there is an issue.

Bahmni has different artifacts in the system like patient documents, patient images, DB data etc. There is a possibility that unwanted events may happen such as hard drive failure or data loss due to some wrong SQL (eg: delete sql) mistakenly run by the user. Bahmni provides mechanism to backup all the artifacts so that if any unwanted event happen then we should be able to recover from the backup so that usage of Bahmni continues as usual at the earliest.
 
Back up of artifacts like Patient Documents, Patient Images, Databases are supported right now.

**

## Configure MySQL Databases Backup/Restore

###  Install Tool    

 The **Xtrabackup **tool is used for MySQL database backup. This tool can be installed during the Bahmni installation. Change the inventory file to have the below configuration and rerun the Bahmni installation. The hosts specified in the inventory under **mysql-backup-tool** will be used to install tools in that particular hosts.
Sample Inventory config**

```
[mysql-backup-tool]
192.168.33.13
```

 
In the above sample configuration,192.168.33.13 is the ip of the machine the backup tool has to be installed. Please change it to appropriate IP.

Where is the inventory file ?
 
Location of inventory file is /etc/bahmni-installer

### Configurable parameters

Below are some of the configurable parameters. 

| Key | Description | Default Value |
| --- | --- | --- |
| path | Path to backup the files. Backed up files are stored in this path. | **/data/openmrs** (for openmrs database) **/data/reports** (for bahmni_reports database) |
| restore_path | Path from where the restore files are picked up. In order to restore a file, it has to be present in this configured location | **/data/openmrs** (for openmrs database) **/data/reports** (for bahmni_reports database) |
| retention_limit | Maximum number of files maintained. Beyond this, the system automatically replaces the old files with the new backed up files. | 2 |

 
The above mentioned parameters can be changed from the file **bahmni-backrest.conf**. Location of the file is /etc/bahmni-backrest.conf

 
  **Sample Config for Openmrs** Expand source 
 
 
  
```
openmrs:
  path: /data/openmrs/
  retention_limit: 2
  restore_path: /data/openmrs/
```

 

 
  **Sample Config for Bahmni Reports** Expand source 
 
 
  
```
bahmni_reports:
  path: /data/reports/
  retention_limit: 2
  restore_path: /data/reports/
```

 

## Configure Postgres Databases Backup/Restore

###  Install Tool    

 The **Pgbackrest**** **tool is used for Postgres database backup. This tool can be installed during the Bahmni installation. Change the inventory file to have the below configuration and rerun the Bahmni installation. The hosts specified in the inventory under **postgres-backup-tool** will be used to install tools in that particular hosts.
**Sample Inventory config**

```
[postgres-backup-tool]
192.168.33.13
```

 
In the above sample configuration,192.168.33.13 is the ip of the machine the backup tool has to be installed. Please change it to appropriate IP.

Where is the inventory file ?
 
Location of inventory file is /etc/bahmni-installer

### Configurable parameters

Below are some of the configurable parameters. 

| Key | Description | Default Value |
| --- | --- | --- |
| path | Path to backup the files as well as restore the files from. Backed up files are stored in this path. The file to be restored should be present in this location configured. | /var/lib/pgbackrest |
| retention_limit | Maximum number of files maintained. Beyond this, the system automatically replaces the old files with the new backed up files. ** | 2 |

 
The above mentioned parameters can be changed from the file **bahmni-backrest.conf**. Location of the file is /etc/bahmni-backrest.conf

 
  Sample Config** Expand source 
 
 
  
```
postgres:
  path: /var/lib/pgbackrest/
  retention_limit: 2
```

 

**

## Configure Artifacts Backup/Restore

The host specified in the inventory under **bahmni-backup-artifacts** will be used to take backup in that particular host.Only one host can be specified to take backup
Sample Inventory config**

```
[bahmni-backup-artifacts]
192.168.33.13
```

 
In the above sample configuration,192.168.33.13 is the ip of the machine from where artifacts backup will be taken. Please change it to appropriate IP.

Where is the inventory file ?
 
Location of inventory file is /etc/bahmni-installer

### Configurable parameters

Below are some of the configurable parameters

| Key | Description | Default Value |
| --- | --- | --- |
| ``` async_timing ``` | restore and backup can be done asynchronously. This timing is the maximum runtime for which the job will run in background. value has to be specified in seconds. | ``` 86400 ``` |
| ``` backup_to_path ``` | path to store the backedup artifacts | ``` /mymount ``` |
| ``` backup_from_path ``` | path from where backup has to be taken | ``` /home/bahmni/patient_images ``` ``` /home/bahmni/document_images ``` ``` /home/bahmni/uploaded-files ``` ``` /home/bahmni/uploaded_results ``` ``` /home/bahmni/pacs_images ``` ``` /home/bahmni/reports ``` |
| ``` restore_from_path ``` | path from where backup files that has to be restored will be taken | ``` /mymount ``` |
| ``` restore_to_path ``` | path to restore artifacts | ``` /home/bahmni/ ``` |
| ``` retention_limit ``` | Maximum number of files maintained for each artifact. Beyond this, the system automatically replaces the old files with the new backed up files. | 2 |

Where to change the configuration ?
 
The above mentioned parameters can be changed from the file **bahmni-backrest.conf**. Location of the file is /etc/bahmni-backrest.conf.

 
  **Sample Config** Expand source 
 
 
  
```
patient_images:
     backup_to_path: /mymount
     backup_from_path: /home/bahmni/patient_images
     restore_from_path: /mymount
     restore_to_path: /home/bahmni/
     retention_limit: 2
```

 

**

**Issues Fixed:**

**     **The issue** **mentioned here** [Known Issues with DB Backup and Restore](/wiki/spaces/BAH/pages/114895287/Known+Issues+with+DB+Backup+and+Restore) **related to artifacts is fixed** **as part of release-0.89.

Change in the structure of the configuration
 
There is a change in the structure of the config and this will work with **release-0.89 onwards**. Location of the file is /etc/bahmni-backrest.conf. With the new structure only the artifacts that are configured will be backed up/restored and no default values will be picked.

 
  Sample Config** Expand source 
 
 
  
```
all_artifacts:
   - name: patient_images
     backup_to_path: /mymount
     backup_from_path: /home/bahmni/patient_images
     restore_from_path: /mymount
     restore_to_path: /home/bahmni/
     retention_limit: 2
```

 

On this Page

 
 
 
**Feature Details**

[Feature Guide](/wiki/spaces/BAH/pages/114725340/Backup+artifacts)

**Usage Details**

[User Guide](/wiki/spaces/BAH/pages/114729037/Backup+Restore+commands)
