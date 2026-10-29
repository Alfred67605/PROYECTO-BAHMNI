---
id: "92111010"
title: "Performing a Backup of Bahmni Data on USB or External Drive"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/92111010/performing-a-backup-of-bahmni-data-on-usb-or-external-drive"
version: 7
updated: "2016-10-14T06:08:04.672Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:53.380Z"
---

# Performing a Backup of Bahmni Data on USB or External Drive

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/92111010)  
> **Versión del documento:** v7 (2016-10-14T06:08:04.672Z) | **Autor/Editor:** Gurpreet Luthra

---

It is recommended to perform a daily / periodic backup of Bahmni data and store it offsite to avoid complete loss of data during a natural disaster, etc. 

## Steps to be Performed
 
Note:

- These steps were tested on a CentOS v6.7 machine.
- This could cause IO load on the machine, so please perform this on the Slave Machine, or when the EMR is not under load.

Known issue with encryption step
 
There is a known issue in Linux Kernel with the above encryption step because of which system needs to be shutdown after copying backup to the external hard drive, then only hard drive gets detached. Read here: [https://bugzilla.redhat.com/show_bug.cgi?id=809188](https://bugzilla.redhat.com/show_bug.cgi?id=809188). Please test before proceeding.

- Encrypt USB/External drive using steps mentioned in [https://miguelmenendez.pro/en/articles/encrypt-usb-storage-device-linux-unified-key-setup-luks.html](https://miguelmenendez.pro/en/articles/encrypt-usb-storage-device-linux-unified-key-setup-luks.html). Note down the password in a secret location. And don't keep a password that is shared / re-used / easy-to-guess. This is a ONE TIME activity for the drive. Encrypting the USB has the advantage that even if you lost it, you will feel a little better that it will be very difficult for someone to get to the data.
- Mount the hard drive at **/media/USB**.
- 
Create directories in the USB (use the [mkdir](http://www.cyberciti.biz/faq/linux-make-directory-command/) command): 

```
# Folder struture
emr_backup
   |____ database
   |____ patient_images
   |____ document_images
   |____ uploaded-files
   |____ uploaded_results
   |____ pacs_images
       |____archive

```

- 
Unlock it with the command ‘cryptsetup luksOpen LUKS0001’ with passphrase/password.

- 
Mount the hard drive using command ‘mount /dev/mapper/LUKS0001 /media/USB'

- 
Copy the backups as per the below steps (**NOTE:**[rsync](http://www.tecmint.com/rsync-local-remote-file-synchronization-commands/) is a command line program for doing delta updates / copy. Read more about it [here](http://www.tecmint.com/rsync-local-remote-file-synchronization-commands/)): 

```
# Take database backup using the DB backup scripts for MySQL and PostGreSQL DBs

cd ~/bahmni-environment/scripts
./backup-mysql.sh password
./backup-psql.sh
cp /backup/ /media/USB/emr_backup/database/

# Backup image files - patient images, document images, pacs images, uploaded_results, uploaded-files (depending on what features of Bahmni you are using) 

rsync -rh --progress -i --itemize-changes --update /home/bahmni/patient_images /media/USB/emr_backup/patient_images/../
rsync -rh --progress -i --itemize-changes --update /home/bahmni/document_images /media/USB/emr_backup/document_images/../
rsync -rh --progress -i --itemize-changes --update /home/bahmni/uploaded-files /media/USB/emr_backup/uploaded-files/../
rsync -rh --progress -i --itemize-changes --update /home/bahmni/uploaded_results /media/USB/emr_backup/uploaded_results/../
rsync -rh --progress -i --itemize-changes --update /var/lib/bahmni/dcm4chee-2.18.1-psql/server/default/archive /media/USB/emr_backup/pacs_images/archive/../
```

- 
Umount the disk using ‘umount /media/USB'.

- 
Lock the drive again with ‘cryptsetup luksClose LUKS0001'.

- 
Disconnect the hard drive and keep it in a safe, secure and remote place from the production environment.

**

Related Links**

[Automated DB Backup](/wiki/spaces/BAH/pages/3997698/Automated+DB+backups+of+Bahmni)
