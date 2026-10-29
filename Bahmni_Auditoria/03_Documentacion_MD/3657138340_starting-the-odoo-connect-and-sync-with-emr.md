---
id: "3657138340"
title: "Starting the Odoo Connect and sync with EMR"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657138340/starting-the-odoo-connect-and-sync-with-emr"
version: 3
updated: "2024-07-31T04:44:31.523Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:19.852Z"
---

# Starting the Odoo Connect and sync with EMR

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657138340)  
> **Versión del documento:** v3 (2024-07-31T04:44:31.523Z) | **Autor/Editor:** Mohankumar Thangavel

---

Bahmni facilitates the synchronization of patient data and generates quotations in Odoo for orders processed on the EMR. To enable this atomfeed synchronization, a service called `odoo-connect` has been incorporated into our Bahmni Docker Compose specification.

Before proceeding with the steps below, ensure you have completed the masterdata migration and required transactional data migration process as mentioned [here](/wiki/spaces/BAH/pages/3657105576/Odoo+16+Masterdata+and+Metadata+Migration) and validated it.

Also go through Sales Module Configuration to understand the required metadata setup for proper atomfeed sync. This includes order types, shops, order type shop maps, syncable units maps.

## Step 1: Backing up Markers information

As we have already migrated the product, customer and outstanding information, the atomfeed markers should be set to the position from where the migration has been initiated. Run the below query in OpenERP or Odoo 10 database to get a dump output of the markers table entries.

*OpenERP 7:*

`pg_dump -U openerp --column-inserts --data-only --table=markers openerp`

*Odoo 10:*

`pg_dump -U odoo --column-inserts --data-only --table=markers odoo`

Copy the insert statements from the output to a text file. Replace the host IP and port in the URLs as `openmrs:8080`. (Example: [http://openmrs:8080/openmrs/ws/atomfeed/drug/108](http://openmrs:8080/openmrs/ws/atomfeed/drug/108))

## Step 2: Initialising atomfeed schema in Odoo database

Since the Odoo database is a fresh database, the `markers` table will not exist on the database. Follow the steps below to start the atomfeed service to initialise the required schema.

- 
Update the .env file for the variables `OPENMRS_ATOMFEED_USER`, `OPENMRS_ATOMFEED_USER` and set the value as `dummy`. This is important so that the sync would not start from the first position

- 
Bring up odoo-connect service
`docker compose up -d odoo-connect`

- 
Wait for the odoo connect service to come up and it to execute the liquibase migrations.

- 
Check the logs until it completes liquibase migrations.

- 
Now stop the service
`docker compose stop odoo-connect`

- 
Reset the atomfeed credentials as it was before.

## Step 3: Inserting the markers information

- 
Now exec into the odoodb container and connect to Odoo database.

- 
Execute the insert queries that we acquired from Step 1;

- 
Run `select * from markers`; to verify all the markers information is populated

## Step 4: Starting the sync

Now the odoo-connect service can be started again so that the sync will resume from the position it was added.

```
docker compose --profile odoo up -d
```

 Now you should have the sync resuming and any new order on EMR should sync to Odoo as it was before.
