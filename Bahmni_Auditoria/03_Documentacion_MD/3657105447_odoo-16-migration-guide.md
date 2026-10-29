---
id: "3657105447"
title: "Odoo 16 Migration Guide"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105447/odoo-16-migration-guide"
version: 7
updated: "2024-07-31T04:50:35.180Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:15.889Z"
---

# Odoo 16 Migration Guide

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105447)  
> **Versión del documento:** v7 (2024-07-31T04:50:35.180Z) | **Autor/Editor:** Mohankumar Thangavel

---

Starting with Bahmni Standard 1.0.0, Odoo 16 is the default version integrated and shipped out of the box with Bahmni Docker. Further details about this initiative can be found [here](/wiki/spaces/BAH/pages/3293478913/Upgrade+Bahmni+to+Odoo+v16).
 
**Note:** The migration to Odoo 16 will differ from a typical backup and restore process. This guide outlines the approach of setting up a fresh Odoo 16 environment and subsequently importing the necessary metadata/master data, along with minimal transactional data such as stock information and outstanding invoices. If your implementation includes additional Odoo modules or customizations, we recommend thoroughly reviewing the features available in Odoo 16 to identify and incorporate relevant modules in the new version.

Related Links

- 
[Bahmni Odoo 16 Extension Modules Code Repository](https://github.com/Bahmni/bahmni-odoo-modules)

- 
[Odoo 16 Documentation](https://www.odoo.com/documentation/16.0/applications.html)

- 
[Shareback session about OpenERP 7 to Odoo 16 Migration](https://youtu.be/y4QmUx0oFSU?si=Xa74jmA4RoXDKkw_)

This guide is Work in Progress

## Preparation for upgrade

- 
**Explore and get familiarised with Odoo 16: **Before beginning the migration, take time to explore and understand the new features and enhancements in Odoo 16. This includes reviewing the user interface changes, new functionalities, and any updates to existing modules. Familiarising yourself with the new version will help in identifying the benefits and potential impacts on your business processes. Refer this [page](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117744129/Getting+Started+Quickly+with+Bahmni+on+Docker#Running-Bahmni-Standard) quickly setup a local environment using docker or you can try out on one of the demo environments.

- 
**Understand the data that needs to be imported: **Identify the specific data sets that need to be transferred to the new Odoo 16 instance. This includes essential metadata, master data such as customer and vendor information, company information, and key transactional data like stock levels and outstanding invoices. Understanding what data is critical will help in planning the migration process and ensuring data integrity.

- 
** Think of a timeline for migration: **As Odoo primarily supports billing and accounting operations, it's crucial to plan a timeline for the migration and rollout. This will ensure that reporting and other business functions remain uninterrupted. Careful planning will help in managing the transition to Odoo 16 smoothly, avoiding disruptions in daily operations and maintaining continuity in financial activities.

- 
**Prepare additional hardware: **To carry out the upgrade, we recommend setting up a test, pre-prod environment to verify the import process, sync with EMR and data validation. This will help migration with minimal downtime.

## Basic Configurations in Odoo

Spin up only Odoo and Odoo DB (without starting Odoo connect) with a fresh database by following the steps below:

```
Update your .env file to use a fresh postgres database:
ODOO_DB_IMAGE_NAME=postgres:16.1

docker compose up -d odoo

Odoo should be accessible at http://localhost:8069 (or) http://:8069
```

Before commencing the data migration process, it is advisable to review the additional child pages within the Odoo Modules section to set up the necessary basic configurations for the Odoo system. This process should encompass, at the very least, the following essential items:

- 
Company Information → Company Name, Currency, Round Off Value

- 
Odoo Default Module Level Configurations → Sales Configurations (UoM, Price-lists), Invoicing Configurations (Default Sales, Purchase Tax), Inventory Configurations (Enabling Tracking by Lots, Stock Locations, Warehouses, Payment Methods)

- 
Install any additional modules and configure those if your implementation uses/needs it.

Accounting Module by Odoo has been made available only in Enterprise version of Odoo. So a community module by Cybrosys Technologies has been [added](https://github.com/Bahmni/bahmni-odoo-modules/tree/main/community_modules/base_accounting_kit) as an optional module for implementers to install and try out. If your implementation uses extensive accounting features, we recommend installing this module and exploring the features. 

***Note:** This is an external community module, and not maintained by Bahmni community.*

## Data Migration and rollout

Migration of essential data from your current Odoo implementations can be executed from both OpenERP 7 and Odoo 10. The migration procedure should be conducted in two distinct phases: first transferring the metadata and master data, then proceeding with the import of transactional data. It is recommended to go through the below guides sequentially to ensure a smooth migration.

### Step 1: [Masterdata Migration](/wiki/spaces/BAH/pages/3657105576/Odoo+16+Masterdata+and+Metadata+Migration)

### Step 2: [Transactional Data Migration](/wiki/spaces/BAH/pages/3657465931/Odoo+16+Transactional+Data+Migration)

### Step 3: [Starting Odoo Connect and Sync with Bahmni](/wiki/spaces/BAH/pages/3657138340/Starting+the+Odoo+Connect+and+sync+with+EMR)

### Step 4: Rollout to users

**Tips for a Smooth Migration Process**

- 
Initiate the master data migration process at least one day prior to going live.

- 
Ensure to create backups of the database at every stage of the migration process. This practice enables a quick rollback to the previous step instead of restarting the entire process.

- 
Schedule the migration to take place outside of regular working hours. This allows for the synchronization to be paused and resumed seamlessly on the new system.

- 
Maintain the pre-production or test environment operational for a few days post-live migration. This approach facilitates the replication of any potential scenarios and aids in finding effective solutions.
