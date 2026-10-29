---
id: "3337715723"
title: "Migrating masterdata from OpenERP 7 to Odoo 16"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3337715723/migrating-masterdata-from-openerp-7-to-odoo-16"
version: 4
updated: "2024-07-29T08:44:49.122Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:16.838Z"
---

# Migrating masterdata from OpenERP 7 to Odoo 16

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3337715723)  
> **Versión del documento:** v4 (2024-07-29T08:44:49.122Z) | **Autor/Editor:** Mohankumar Thangavel

---

To facilitate the migration of master data from OpenERP 7 to Odoo 16, a custom module named `OpenERP 7 Data Import` has been created. This module functions by establishing a connection with the legacy OpenERP 7 database and transferring the data accordingly into the new Odoo 16.

Before proceeding ensure you have made basic Odoo configurations as mentioned [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105447/Odoo+16+Migration+Guide#Basic-Configurations-in-Odoo)

### Step 1: Verifying the connectivity of OpenERP 7 Database

As the module works by connecting to OpenERP 7 database, the Odoo container should be able to connect to the database. In order to verify that, run the below command from inside the docker host.

```
psql -h  -U 
```

### Step 2: Installing the module

- 
Now login to Odoo v16 as admin user and Navigate to Menu &rarr; Apps

- 
Remove the default filter for `Apps` and search for `OpenERP`

- 
You will find a module named as `OpenERP 7 Data Import`

- 
Click on Activate to install the module.
![](https://bahmni.atlassian.net/wiki/download/attachments/3337715723/image-20240729-044408.png?version=1&modificationDate=1722236442159&cacheVersion=1&api=v2)

### Step 3: Configuring Database connection details

The database connection information needs to be configured as environment variables for Odoo 16 service. Add the following environment variables under `environment` section of Odoo service in docker-compose.yml

```
OPENERP_DB_HOST: 
OPENERP_DB_PORT: 5432
OPENERP_DB_NAME: openerp
OPENERP_DB_USER: 
OPENERP_DB_PASSWORD: 
```

 Once you have added the configuration, update the Odoo 16 service by running `docker compose up -d odoo`

### Step 4: Enable Developer Mode to execute the migration jobs

Odoo 16 debug mode needs to be enabled to run the jobs for migration. In order to enable debug mode, login as admin and then add `?debug=1` to the URL. Example URL would look like `http://localhost:8069/web?debug=1`

### Step 5: Running the migration jobs

Now with the developer mode enabled, navigate to `Menu -> Settings -> Technical`. On the menu select `Scheduled Actions`
![](https://bahmni.atlassian.net/wiki/download/attachments/3337715723/image-20240729-045746.png?version=1&modificationDate=1722236442174&cacheVersion=1&api=v2)
On the Scheduled Actions page add a group by for `Model`. Now you will see a model named as `OpenERP 7 Data Import`, under which you find 7 different jobs configured.
![](https://bahmni.atlassian.net/wiki/download/attachments/3337715723/image-20240729-064617.png?version=1&modificationDate=1722236442181&cacheVersion=1&api=v2)
Now run each of the jobs manually by clicking each job name and pressing the `Run Manually` button. The jobs should be run in the following order.

- 
UoM Category Migration

- 
UoM Migration

- 
Product Category Migration

- 
Product Migration

- 
Product Update Inactive Products

- 
Supplier Migration

- 
Customer Migration

**Note: For supplier and customer migration a user input is needed to specify the range of ids to be migrated. This has been done to avoid out of memory errors in large implementations. The starting ID and ending ID should be given in the** `Python Code` **tab of the job window. We recommend going with 20000 increments for each cycle.**
![](https://bahmni.atlassian.net/wiki/download/attachments/3337715723/image-20240729-065300.png?version=1&modificationDate=1722236442189&cacheVersion=1&api=v2)

**Next Step: **Once you have completed the masterdata import process, now go back to the parent page here and continue with other metadata import from [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105576/Odoo+16+Masterdata+and+Metadata+Migration#Manual-Migration-using-Excel%2FCSV-based-import).
