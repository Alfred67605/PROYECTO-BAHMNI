---
id: "3997698"
title: "Automated DB backups of Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3997698/automated-db-backups-of-bahmni"
version: 24
updated: "2024-01-05T05:46:56.631Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:50.358Z"
---

# Automated DB backups of Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3997698)  
> **Versión del documento:** v24 (2024-01-05T05:46:56.631Z) | **Autor/Editor:** Gurpreet Luthra

---

Geographically Separate Locations 
 
If you are considering a backup strategy for Production Data, do consider storing the backup offsite. A geographically different location ensures that events like flooding or fire, don't destroy all the backups too!

Please read this document on how to perform an [encrypted backup on a USB](/wiki/spaces/BAH/pages/92111010/Performing+a+Backup+of+Bahmni+Data+on+USB+or+External+Drive).
 
- This section of Bahmni backups is for Legacy version of Bahmni that runs on CentOS (prior to Bahmni Lite v1.0). These commands "bahmni -i <action>" are not available on Docker/Kubernetes version of Bahmni. For Docker version of Bahmni, see Docker documentation: [Performing a Backup / Restore of Container Data & Files (docker).](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3222601729/Performing+a+Backup+Restore+of+Container+Data+Files+docker)
- A training was conducted in Dec-2023, on how to perform a backup of all data from Bahmni on Centos V0.92/0.93. That will be very useful too. Please see the videos in the training guide here: [Migrating Bahmni from CentOS to Docker (Training)](/wiki/spaces/BAH/pages/3298590813/Migrating+Bahmni+from+CentOS+to+Docker+Training)

 
**Please read this document on overall Bahmni BACKUP/RESTORE from V0.88 onwards of Bahmni:** [Backup/Restore commands](/wiki/spaces/BAH/pages/114729037/Backup+Restore+commands)

### DB Backup using bahmni command line tool (available from v0.81 onwards)

'bahmni' command line tool will be available in the machine where we install the 'bahmni-installer' rpm -[Install Bahmni on CentOS#Step2:PerformthefollowingstepstoinstalltheRPMs](/wiki/spaces/BAH/pages/33128505/Install+Bahmni+on+CentOS#InstallBahmnionCentOS-Step2:PerformthefollowingstepstoinstalltheRPMs)

To take db-backup, following command has to be executed:

```
bahmni -i local db-backup
```

If custom inventory file is setup, following command has to be executed:

```
bahmni -i  db-backup
```

**

The command will take the backup of each database into a seperate file in the machine where the databases are present at file location **/db-backup** as below:

![](https://bahmni.atlassian.net/wiki/download/attachments/3997698/Screen%20Shot%202016-05-25%20at%203.55.00%20pm.png?version=1&modificationDate=1464171951139&cacheVersion=1&api=v2)

Optionally, it would also allow you to copy the backup to the machine from where the command is executed by shooting the following question:

```
Do you want to copy db backup to local machine in /db-backup directory? y/N: y
```

This would be useful in multi-machine setup where databases are present at different location. When all databases are present in the same machine from which command is executed, 'N' can be given as the answer to the above question.

### DB Restore using bahmni command line tool (available from v0.81 onwards)

To restore the database, `db-restore` command from bahmni command line tool can be used. The command can restore only one database at a time and it will drop the database if already present and then restore the specified dump file.

The syntax of db-restore command is as follows:

```
bahmni -db  -path  db-restore
 
# If custom inventory file is present
bahmni -i  -db  -path  db-restore

#Examples:
bahmni -i jss -db openmrs -path /db-backup/openmrs_dump_20160525-155357.sql.gz db-restore
bahmni -i jss -db clinlims path /db-backup/clinlims_dump_20160525-155359.sql.gz db-restore
```

## Automated db-backup

#### Download the backup script 

```
wget  https://gist.githubusercontent.com/sravanthi17/27e239bfe1e0773d982f7b715fa582b3/raw/178ccc164693d9c134dd3324387ce38b3dd7783b/db-backup.sh {path_to_save_script}
```

 
replace {path_to_save_script} with the proper value. This is where the script will be downloaded to.

#### Create a crontab

If you want to setup an automated schedule to backup, then you can create a crontab entry to trigger this command periodically. For example:
Auto-schedule backups of DB**

```
# Edit the crontab file of root user
crontab -u root -e 
 
# Make entry as (for running twice a day at 2PM, and 10PM)
00 14,22 * * * sudo {path_to_save_script}/backup.sh 

00 14,22 * * * sudo {path_to_save_script}/backup.sh 
 
# eg. 00 14,22 * * * sudo {path_to_save_script}/backup.sh 
# eg. 00 14,22 * * * sudo {path_to_save_script}/backup.sh 
```

crontab may fail for sudo
 
cron may fail silently for above command on some installations, since we use the** sudo** command in our scripts. To enable sudo commands to run in cron, you need to disable **requiretty**. Run **visudo** command, and comment out the line: **Defaults requiretty**

For more details on this read: [http://unix.stackexchange.com/questions/49077/why-does-cron-silently-fail-to-run-sudo-stuff-in-my-script](http://unix.stackexchange.com/questions/49077/why-does-cron-silently-fail-to-run-sudo-stuff-in-my-script)
**Auto delete of old files**

```
# Add this entry in crontab to delete files older than 15 days from /db-backup folder (every evening at 6 PM)
00 18 * * * /usr/bin/find /db-backup -type f -mtime +15 -exec /bin/rm -f {} \;
```

**

For more examples on crontab entries read this: [crontab](http://www.thegeekstuff.com/2009/06/15-practical-crontab-examples/)

Related Links**

- [H](https://talk.openmrs.org/t/how-do-i-copy-migrate-all-the-bahmni-setup-done-on-one-machine-to-another-machine/4519)[ow do I copy all the setup / data from one machine to another?](https://talk.openmrs.org/t/how-do-i-copy-migrate-all-the-bahmni-setup-done-on-one-machine-to-another-machine/4519)
- [(Discussion) Starting with a fresh database](https://talk.openmrs.org/t/how-to-start-with-a-fresh-clean-database-for-bahmni/4139)
- [(Discussion) How to manage credentials for Bahmni?](https://talk.openmrs.org/t/database-related-questions-access-change-password-backup/4513)
