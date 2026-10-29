---
id: "114895287"
title: "Known Issues with DB Backup and Restore"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114895287/known-issues-with-db-backup-and-restore"
version: 7
updated: "2017-03-03T06:27:15.609Z"
author: "Jayasuganthi"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:52.733Z"
---

# Known Issues with DB Backup and Restore

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114895287)  
> **Versión del documento:** v7 (2017-03-03T06:27:15.609Z) | **Autor/Editor:** Jayasuganthi

---

**Artifacts**

**    **  Backing up multiple artifacts (giving comma separated values without using all) is not supported right now. But, this can be achieved with a custom script with all the individual/specific backup commands.
 
This issue is fixed and will be working from release-0.89 onwards.Please refer the section Issues Fixed here [Configure backup](/wiki/spaces/BAH/pages/114728763/Configure+backup)

**Postgres**

      Backing up and restoring a single db(eg openerp or openelis) is not supported right now.This can be achieved using the old way of backup and restore i.e. by creating a db dump.
