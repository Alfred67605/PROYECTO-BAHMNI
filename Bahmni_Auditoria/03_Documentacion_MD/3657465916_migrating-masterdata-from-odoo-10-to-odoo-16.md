---
id: "3657465916"
title: "Migrating masterdata from Odoo 10 to Odoo 16"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657465916/migrating-masterdata-from-odoo-10-to-odoo-16"
version: 4
updated: "2024-07-29T08:45:34.401Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:17.342Z"
---

# Migrating masterdata from Odoo 10 to Odoo 16

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657465916)  
> **Versión del documento:** v4 (2024-07-29T08:45:34.401Z) | **Autor/Editor:** Mohankumar Thangavel

---

To facilitate the migration of master data from Odoo 10 to Odoo 16, a custom module named `Odoo 10 Data Import` has been developed. This module functions by establishing a connection with the legacy Odoo 10 database and transferring the data accordingly into the new Odoo 16.

Before proceeding ensure you have made basic Odoo configurations as mentioned [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105447/Odoo+16+Migration+Guide#Basic-Configurations-in-Odoo)

### Step 1: Verifying the connectivity of Odoo 10 Database

As the module works by connecting to Odoo 10 database, the Odoo container should be able to connect to the database. In order to verify that, run the below command from inside the docker host.

```
psql -h  -U 
```

### Step 2: Installing the module

- 
Now login to Odoo v16 as admin user and Navigate to Menu &rarr; Apps

- 
Remove the default filter for `Apps` and search for `Odoo 10`

- 
You will find a module named as `Odoo 10 Data Import`

- 
Click on Activate to install the module.

![](https://bahmni.atlassian.net/wiki/download/attachments/3657465916/image-20240729-083117.png?version=1&modificationDate=1722241881370&cacheVersion=1&api=v2)
 

### Step 3: Configuring Database connection details

- 
Once the module is installed, proceed to Menu &rarr; Bahmni &rarr; Bahmni Masters. Locate and select the menu titled "Odoo 10 Data Import."

![](https://bahmni.atlassian.net/wiki/download/attachments/3657465916/image-20240729-083502.png?version=1&modificationDate=1722242107094&cacheVersion=1&api=v2)
- 
Now Click on New.

- 
In the following screen, configure the Database connnection information of the Odoo 10 database and click on `Test Connection`

![](https://bahmni.atlassian.net/wiki/download/attachments/3657465916/image-20240729-083627.png?version=1&modificationDate=1722242191888&cacheVersion=1&api=v2)
 

- 
If the connection information is correct then you should get a `DB Connection successful!` message.

### Step 4: Running the migration jobs

Now run each of the jobs by clicking on the job name button.

- 
UoM Category Migration

- 
UoM Migration

- 
Product Category Migration

- 
Product Migration

- 
Supplier Migration

- 
Customer Migration

**Note: For supplier and customer migration a user input is needed to specify the range of ids to be migrated. This has been done to avoid out of memory errors in large implementations. The starting ID and ending ID should be given in the respective input fields. We recommend going with 20000 increments for each cycle.**

![](https://bahmni.atlassian.net/wiki/download/attachments/3657465916/image-20240729-084316.png?version=1&modificationDate=1722242600568&cacheVersion=1&api=v2)
**Next Step: **Once you have completed the masterdata import process, verify the data in their respective menus and then go back to the parent page here and continue with other metadata import from [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105576/Odoo+16+Masterdata+and+Metadata+Migration#Manual-Migration-using-Excel%2FCSV-based-import).
