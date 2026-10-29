---
id: "114729037"
title: "Backup/Restore commands"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114729037/backup-restore-commands"
version: 94
updated: "2024-01-05T05:45:42.498Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:51.043Z"
---

# Backup/Restore commands

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114729037)  
> **Versión del documento:** v94 (2024-01-05T05:45:42.498Z) | **Autor/Editor:** Gurpreet Luthra

---

## About the Feature
 
- If you are using Bahmni with Docker Lite/Standard, then the `bahmni -i` command no longer exists. See this documentation instead: [Performing a Backup / Restore of Container Data & Files (docker)](/wiki/spaces/BAH/pages/3222601729/Performing+a+Backup+Restore+of+Container+Data+Files+docker).
- A training was conducted in Dec-2023, on how to perform a backup of all data from Bahmni on Centos V0.92/0.93. That will be very useful too. Please see the videos in the training guide here: [Migrating Bahmni from CentOS to Docker (Training)](/wiki/spaces/BAH/pages/3298590813/Migrating+Bahmni+from+CentOS+to+Docker+Training)
- The page below is a bit outdated, although useful still to understand backup concepts. 

**
 
This feature has been introduced in V0.88 of Bahmni. Please look at [Known Issues with DB Backup and Restore](/wiki/spaces/BAH/pages/114895287/Known+Issues+with+DB+Backup+and+Restore) in case there is an issue.

Bahmni has different artifacts in the system like patient documents, patient images, DB data etc. There is a possibility that unwanted events may happen such as hard drive failure or data loss due to some wrong SQL (eg: delete sql) mistakenly run by an user. Bahmni as a product should provide mechanism to backup all the artifacts so that if any unwanted event happen then we should be able to recover from the backup so that business continue as usual at the earliest.

Where to store / keep backup files
 
It is **highly recommended** that you keep the backup files in a separate external disk and away from the hospital location if possible – to avoid loss of all data in case of a Natural disaster like floods or earthquakes. You can provide the destination path for an external disk as long as you mount it successfully. It is also highly recommended to encrypt the external disk. Please refer [Performing a Backup of Bahmni Data on USB or External Drive](/wiki/spaces/BAH/pages/92111010/Performing+a+Backup+of+Bahmni+Data+on+USB+or+External+Drive).
 
If you are more comfortable with perform your own direct backups, then you can also look at the following documentation on how to perform DB backups here:

- MySQL backup: [https://blog.devart.com/mysql-backup-tutorial.html](https://blog.devart.com/mysql-backup-tutorial.html)
- Postgres backup: [https://www.postgresql.org/docs/current/backup-dump.html](https://www.postgresql.org/docs/current/backup-dump.html)
- Sample script on how to restore bahmni db: [https://github.com/Bahmni/bahmni-scripts/tree/master/demo/db-backups/v0.93](https://github.com/Bahmni/bahmni-scripts/tree/master/demo/db-backups/v0.93) (see dbRestore.sh)
- For Patient Files, bahmni_config folder, etc,  you will need to create your backups using `cp` or `rcp` commands.
- You can then create a cron job to run the backup periodically. See this: [https://www.geeksforgeeks.org/cron-command-in-linux-with-examples/](https://www.geeksforgeeks.org/cron-command-in-linux-with-examples/)

Right now Bahmni backup mechanism supports two categories name **file** backup and **database** backup.  Below is the list of supported items

- 
Patient images

- 
Document images

- 
Uploaded files

- 
Uploaded lab results

- 
PACS images

- 
Report module generated files by Queue feature

- 
MySQL databases

- Postgres databases

## Old Way of Backup and Restore

### Old Way Backup
 
**This will perform ONLY the DB backup and NOT of the other files (artifacts).**

When the backup tools for MySQL and Postgres are not installed then the backup will fall back to [old way of DB backups](/wiki/spaces/BAH/pages/3997698/Automated+DB+backups+of+Bahmni) by using following commands. The following commands will achieve same as mentioned in old way of DB backups.

Please replace the *inventory_file_name* with appropriate file name. For example, in the below examples **local** is the inventory file name.

Full Openelis/clinlims DB Backup (Old way)**

```
bahmni -i local backup --backup_type=db  --options=clinlims

```

**Full Openerp DB Backupup (Old way)**

```
bahmni -i local backup --backup_type=db  --options=openerp
```

**Full Openmrs DB Backup (Old Way)**

```
bahmni -i local backup --backup_type=db  --options=openmrs
```

**Uninstall Backup Tools**

```
If backrest tools are already installed, then uninstall them to perform oldway backup.
To uninstall pgsql backup tool, execute the following commands

sudo rm -f /usr/bin/pgbackrest
sudo rm -f /usr/bin/pg_backrest
sudo rm -rf /usr/lib/perl5/BackRest
sudo rm -rf /usr/share/perl5/BackRest
sudo rm -rf /usr/lib/perl5/pgBackRest
sudo rm -rf /usr/share/perl5/pgBackRest

To uninstall mysql backup tool, execute the following command
yum list installed | grep xtrabackup|xargs yum remove -y
```

**

### Old Way Restore

Please replace the *inventory_file_name* with appropriate file name. For example, in the below examples **local** is the inventory file name.
Restore clinlims/openelis database**

```
 bahmni -i local restore --restore_type=db --options=clinlims  --strategy=dump --restore_point=clinlims_dump_20170215-150418.sql.gz
```

**Restore openerp database**

```
 bahmni -i local restore --restore_type=db --options=openerp  --strategy=dump --restore_point=openerp_dump_20170215-150418.sql.gz
```

**Restore openmrs db (old way)**

```
bahmni -i local restore --restore_type=db --options=openmrs --strategy=dump   --restore_point=openmrs_dump_20170221084218.sql.gz
```

## Complete / Full Backup
 
The backup tools for MySQL, Postgres and Artifacts have to be installed for the following commands. The Bahmni installation will take care of installing these tools based on provided configuration. Please refer [Configure backup](/wiki/spaces/BAH/pages/114728763/Configure+backup).

In order to backup all the possible files and databases, please use the below mentioned command. 

```
bahmni -i  backup --backup_type=all --options=all 
```

Please replace the *inventory_file_name* with appropriate file name. For Example, in the below example **local** is the inventory file name.
**Command to backup everything (databases, files)**

```
  bahmni -i local backup --backup_type=all --options=all
```

## Schedule Backup:

In order to schedule a backup one can use *--schedule* option available in command line which adds cron entry for the user to run the command as per schedule.

Example Scenario
 
*--schedule "30 2 * * 0"* is an example schedule option that can be added to any of the backup commands. The backup in this case is scheduled for every Sunday 2.30 am
**Sample command**

```
 bahmni -i  backup --backup_type= --options= --strategy= --schedule "* * * * *"
```

**Example Scheduling Full Backup command for Openmrs Database**

```
  bahmni -i local backup --backup_type=db --options=openmrs --strategy=full --schedule "30 2 * * 0"

    # Use the hash sign to prefix a comment
    # +---------------- minute (0 - 59)
    # |  +------------- hour (0 - 23)
    # |  |  +---------- day of month (1 - 31)
    # |  |  |  +------- month (1 - 12)
    # |  |  |  |  +---- day of week (0 - 7) (Sunday=0 or 7)
    # |  |  |  |  |
    # *  *  *  *  *  command to be executed
```

**

## Mysql Backup: 
 
Taking Backup of all the Mysql Databases with single command is not supported yet.

There are different configurations for mysql database backup command as mentioned below

| Key | Default value | Available options | Mandatory |
| --- | --- | --- | --- |
| backup_type | all | This value should be **db **for database backup | No |
| options | all | This Value can be either** openmrs **or** bahmni-reports** while taking mysql database backup. | No |
| strategy | full | Possible values are **full**,** incr.** | No |

### Mysql Full Backup

One can take full backup of particular mysql database by mentioning the database name.
 
For example, in the below sample command DBName should be replaced with the actual database name. Possible values supported right now are "openmrs" or "bahmni-reports".
Sample command for Full backup of MySQL database**

```
  bahmni -i  backup --backup_type=db --options=
```

Please replace the *inventory_file_name* with appropriate file name and *DBName* with the database name. For example, in the below examples **local** is the inventory file name.
**Openmrs Database Full Backup**

```
bahmni -i local backup --backup_type=db --options=openmrs 
```

**Bahmni Reports Database Full Backup**

```
bahmni -i local backup --backup_type=db --options=bahmni_reports 
```

### **Mysql Incremental Backup:**

Apart from the full backup, there is an option to take incremental backup. In case of incremental backup, strategy should be "**incr**"
**Sample Command for Incremental Backup**

```
bahmni -i  backup --backup_type=db --options=  --strategy=incr
```

Please replace the *inventory_file_name* with appropriate file name and *DBName* with the database name. For example, in the below examples **local** is the inventory file name.
**Openmrs Database Incremental Backup**

```
  bahmni -i local backup --backup_type=db --options=openmrs  --strategy=incr
```

**Bahmni Reports Database Incremental Backup**

```
  bahmni -i local backup --backup_type=db --options=bahmni_reports  --strategy=incr
```

**

## Mysql Database Restore:
 
Restoring all the mysql databases with single command is not supported yet.

One can restore to any point (either full or incremental) in database given that the chosen restore points/files are available in configured restore path.

How to find restore path ?
 
Restore Path is configured in /etc/bahmni-backrest.conf file. More about the configurations, please read [Configure backup](/wiki/spaces/BAH/pages/114728763/Configure+backup)
Sample Mysql restore command**

```
bahmni -i  restore --restore_type=db --options= --strategy= --restore_point=**
```

Please replace the *inventory_file_name* with appropriate file name and *DBName* with the database name (either *openmrs* or *bahmni_reports*). For example, in the below examples **local** is the inventory file name. 

There are different configurations for mysql database backup command as mentioned below. Please note that there are no default values for the below configurations

| Key | Description | Mandatory |
| --- | --- | --- |
| restore_type | Value should be "**db**" (in case of database restore) | Yes |
| options | Available options for mysql database restore are "**openmrs**" or "**bahmni_reports**" | Yes |
| strategy | Two types of strategies are available as explained below. Strategy | Description |
| pitr | If the restore point value is the folder name of the backup. |  |
| dump | If the restore point value is database entire dump gunzip file. |  |

Yesrestore_point
- Value should be folder name of the backup file(It could be either incr/full).
- If the strategy is dump, then value should be dump file name.

Yes
### Mysql Dump Restore

One can restore the database by providing dump gunzip file.
Openmrs Database Dump Restore**

```
bahmni -i local restore --restore_type=db --options=openmrs --strategy=dump   --restore_point=openmrs_dump_20170221084218.sql.gz
```

### Mysql Full Restore

One can restore the database by providing full backup file.
**Openmrs Database FULL PITR (Point In Time Restore)**

```
bahmni -i local restore --restore_type=db --options=openmrs --strategy=pitr   --restore_point=20170220103125_full 
```

**Bahmni Reports Database FULL PITR (Point In Time Restore)**

```
bahmni -i local restore --restore_type=db --options=bahmni_reports --strategy=pitr   --restore_point=20170220103125_full 

```

 
In above examples, please replace **20170220103125_full (**in case of full restore**) **with appropriate* backup folder name* available in the configured restore path and **local **with relevant *inventory* file name.
 
 If the file is not available in the restore path, it is expected that the restore command will fail.

### Mysql Incremental Restore

One can restore the database by providing incremental backup file.
**Openmrs Database INCREMENTAL PITR (Point In Time Restore)**

```
bahmni -i local restore --restore_type=db --options=openmrs --strategy=pitr   --restore_point=20170330103125_incr  
```

**Bahmni Reports Database INCREMENTAL PITR (Point In Time Restore)**

```
bahmni -i local restore --restore_type=db --options=bahmni_reports --strategy=pitr   --restore_point=20170330103125_incr  
```

 
In above examples, please replace **20170330103125_incr ****(**in case of incremental restore**) **with appropriate* backup folder name* available in the configured restore path and **local **with relevant *inventory* file name.
 
If the file is not available in the restore path, it is expected that the restore command will fail.

## Pgsql Database Backup:
 
In this approach of taking backup of postgres database, we can't take individual postgres database backup (like clinlims or openerp).

There are different configurations for postgres database backup command as mentioned below

| Key | Default value | Available options | Mandatory |
| --- | --- | --- | --- |
| backup_type | all | This value should be **db **for database backup | No |
| options | all | This Value can be either** postgres ** while taking pgsql database backup. | No |
| strategy | full | Possible values are **full**,** incr.** | No |

### Postgres Full Backup

One can take full backup of particular postgres database by mentioning the database name under *options* which is **postgres**.
**Sample command for Full backup of Postgres database**

```
  bahmni -i  backup --backup_type=db --options=
```

Please replace the *inventory_file_name* with appropriate file name and *DBName* with the database name (**postgres**). For example, in the below examples **local** is the inventory file name.
**Postgres Databases Full Backup**

```
bahmni -i local backup --backup_type=db --options=postgres 
```

 
If the file is not available in the restore path, it is expected that the restore command will fail.

### **Postgres Incremental Backup:**

Apart from the full backup, there is an option to take incremental backup. In case of incremental backup, strategy should be "**incr**"
**Sample Command for Incremental Backup**

```
bahmni -i  backup --backup_type=db --options=  --strategy=incr
```

Please replace the *inventory_file_name* with appropriate file name and *DBName* with the database name. For example, in the below examples **local** is the inventory file name.
**Postgres Database Incremental Backup**

```
  bahmni -i local backup --backup_type=db --options=postgres  --strategy=incr
```

 
If the file is not available in the restore path, it is expected that the restore command will fail.

## Pgsql Database Restore:

One can restore the entire pgsql backup at a time. In case of restoring an **empty** *postgres database*, first the db has to be restored using a **full backup and **then the desired **incremental** backup has to be applied on it.
 
In the newer way of restoring the pgsql backup, we can't restore individual databases (for elis and erp).
**Pgsql restore**

```
bahmni -i  restore --restore_type=db --options=postgres --strategy=
     --restore_point=
```

**

There are different configurations for pgsql database backup command as mentioned below. Please note that there are no default values for the below configurations

| Key | Description | Mandatory |
| --- | --- | --- |
| restore_type | Value should be "**db**" (in case of database restore) | Yes |
| options | value in case of pitr startegy is "**postgres**". value in case of dump strategy is "**clinlims**" or **"openerp".** | Yes |
| strategy | Two types of strategies are available as explained below. Strategy | Description |
| pitr | If the restore point value is the folder name of the backup. |  |
| dump | If the restore point value is database entire dump gunzip file. |  |

Yesrestore_point
- Value should be folder name of the backup file(It could be either incr/full).
- If the strategy is dump, then value should be dump file name.

Yes
### Postgres Dump Restore

Please replace the *inventory_file_name* with appropriate file name. For example, in the below examples **local** is the inventory file name.

#### Openerp Dump Restore

One can restore the database by providing dump gunzip file.
Openerp Database Dump Restore**

```
bahmni -i local restore --restore_type=db --options=openerp --strategy=dump   --restore_point=openerp_dump_20170221084218.sql.gz
```

#### Openelis Dump Restore
**OpenELIS (clinlims) Database Dump Restore**

```
bahmni -i local restore --restore_type=db --options=openerp --strategy=dump   --restore_point=openerp_dump_20170221084218.sql.gz
```

### Postgres Full Restore

One can restore the database by providing full backup file.
**Postgres Database FULL PITR (Point In Time Restore)**

```
bahmni -i local restore --restore_type=db --options=postgres --strategy=pitr  --restore_point=20170221-120904F
```

 
In above examples, please replace 20170221-120904F** (**in case of full restore**) **with appropriate* backup folder name* available in the configured restore path and **local **with relevant *inventory* file name.
 
If the file is not available in the restore path, it is expected that the restore command will fail.

### Postgres Incremental Restore

One can restore the database by providing incremental backup file.
**Postgres Database Incremental PITR (Point In Time Restore)**

```
bahmni -i local restore --restore_type=db --options=postgres --strategy=pitr   --restore_point= 20170221-121423F_20170222-124131I  
```

 
In above examples, please replace  20170221-121423F_20170222-124131I** ****(**in case of incremental restore**) **with appropriate* backup folder name* available in the configured restore path and **local **with relevant *inventory* file name.
 
If the file is not available in the restore path, it is expected that the restore command will fail.

**

## Artifacts Backup

We can either take backup of all artifacts or individual artifacts. There are different configurations available as listed below

| Key | Description | Mandatory |
| --- | --- | --- |
| backup_type | This Value should be "**file**" incase of artifact backup | yes |
| options | all available values are listed below Value | Description |
| all | backup all artifacts |  |
| patient_images | backup patient images only |  |
| document_images | backup document images only |  |
| uploaded-files | backup uploaded files only |  |
| uploaded_results | backup uploaded results only |  |
| reports | backup reports only |  |
| pacs_images | backup pacs images only |  |

yes
### Artifacts Full Backup

Please replace **local** with appropriate inventory file name. For example, in the below examples **local** is the inventory file name.
Command to backup all artifacts**

```
bahmni -i local backup --backup_type=file  --options=all 
```

### Artifacts Individual/Specific Backup

Please replace the *inventory_file_name* with appropriate file name and *artifact_name* with the relevant value. 
**Backup specific files**

```
bahmni -i  backup --backup_type=file  --options=
```

**Commands to Backup specific files**

```
bahmni -i local backup --backup_type=file  --options="patient_images" //for patient images
bahmni -i local backup --backup_type=file  --options="document_images" //for document images
bahmni -i local backup --backup_type=file  --options="uploaded-files" //for uploaded files
bahmni -i local backup --backup_type=file  --options="uploaded_results" //for uploaded results
bahmni -i local backup --backup_type=file  --options="reports" //for reports
bahmni -i local backup --backup_type=file  --options="pacs_images" //for pacs images 

```

 
Backing up multiple artifacts (giving comma separated values without using all) is not supported right now. But, this can be achieved with a custom script with all the individual/specific backup commands.

**

## Artifacts Restore

We can either restore all artifacts or individual artifacts.There are different configurations available as listed below

| Key | Description | Mandatory |
| --- | --- | --- |
| restore_type | This Value should be "**file**" incase of artifact restore | yes |
| options | all available values are listed below Value | Description |
| all | restore all artifacts |  |
| patient_images | restore patient images only |  |
| document_images | restore document images only |  |
| uploaded-files | restore uploaded files only |  |
| uploaded_results | restore uploaded results only |  |
| reports | restore reports only |  |
| pacs_images | restore pacs images only |  |

yes
### Artifacts** Full Restore**

Please replace **local** with appropriate inventory file name. For example, in the below examples **local** is the inventory file name.
Command to restore all artifacts**

```
bahmni -i local restore --restore_type=file  --options=all 
```

******

### Artifacts Individual/Specific Restore

Please replace the *inventory_file_name* with appropriate file name and *artifact_name* with the relevant value. 
Restore specific files**

```
bahmni -i  restore --restore_type=file  --options=
```

**Example Commands to Restore specific files**

```
bahmni -i local restore --restore_type=file --options="patient_images" //for patient images
bahmni -i local restore --restore_type=file  --options="document_images" //for document images
bahmni -i local backup --restore_type=file  --options="uploaded-files" //for uploaded files
bahmni -i local restore --restore_type=file  --options="uploaded_results" //for uploaded results
bahmni -i local restore --restore_type=file  --options="reports" //for reports
bahmni -i local restore --restore_type=file  --options="pacs_images" //for pacs images 

```

**

On this Page
 
 
 
 
Feature Details**

[Feature Guide](/wiki/spaces/BAH/pages/114725340/Backup+artifacts)

**Implemnentation Details**

[Implementer's Guide](/wiki/spaces/BAH/pages/114728763/Configure+backup)

**Related Links**

[Discussion on Backup/Restore tool (OpenMRS Talk)](https://talk.openmrs.org/t/bahmni-backup-not-working/10499/5)
