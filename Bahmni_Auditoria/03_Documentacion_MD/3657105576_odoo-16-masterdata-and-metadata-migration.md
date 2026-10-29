---
id: "3657105576"
title: "Odoo 16 Masterdata and Metadata Migration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105576/odoo-16-masterdata-and-metadata-migration"
version: 7
updated: "2024-07-29T08:06:18.356Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:16.368Z"
---

# Odoo 16 Masterdata and Metadata Migration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105576)  
> **Versión del documento:** v7 (2024-07-29T08:06:18.356Z) | **Autor/Editor:** Mohankumar Thangavel

---

Master data for the Odoo system includes fundamental elements like product categories, products, customers, suppliers, unit of measure (UoM) categories, UoMs, stock locations, and various other metadata associated with synchronization, such as shops, order types, order type shop mapping, and syncable unit mapping.

Before proceeding ensure you have made basic Odoo configurations as mentioned [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657105447/Odoo+16+Migration+Guide#Basic-Configurations-in-Odoo)

## Automated Migration using Custom Odoo Module

There are two custom modules developed for migrating the following data from [OpenERP 7](https://github.com/Bahmni/bahmni-odoo-modules/tree/main/openerp7_data_import) or [Odoo 10](https://github.com/Bahmni/bahmni-odoo-modules/tree/main/odoo10_data_import) implementations.

- 
Unit of Measure Categories

- 
Unit of Measure

- 
Product Categories

- 
Products

- 
Customers (Patients)

- 
Suppliers

If your current implementation is running on **Odoo 10**, then take a look at [this page](https://bahmni.atlassian.net/wiki/x/PIAA2g) for the steps on migration using migration module.

If your current implementation is running on **OpenERP 7**, then take a look at [this page](https://bahmni.atlassian.net/wiki/x/XYD62Q) for the steps on migration using migration module.

## Manual Migration using Excel/CSV based import

Once you have completed the above steps, you can import a few other metadata using CSV-based import.

### Stock Location Configuration

Odoo stock locations can be either manually created or can be imported. Create a CSV with the below format and import from `Menu -> Inventory -> Configurations -> Locations -> Favorites -> Import Records`

| **name** | **usage** | **location_id** |
| --- | --- | --- |
| Pharmacy | internal | WH |

### Shop Configuration

Bahmni's custom module introduces a concept known as a "shop," which facilitates the synchronization of quotations to specific stock locations based on Order Location and Order Types for order placed from Bahmni. This functionality can be accessed and utilised by navigating to `Menu -> Bahmni -> Bahmni Masters -> Shop` and importing the required data using the provided template.

| **Location** | **Shop Name** | **Warehouse** |
| --- | --- | --- |
| WH/Pharmacy | Pharmacy | My Company |

### Order Type Shop Configuration

The correlation between Order types and Bahmni Order Location names, along with Odoo shops, is accessible through `Menu -> Bahmni -> Bahmni Masters -> Order Type - Shop Mapping`. The import template is outlined below.

| **Order Type** | **Order Location Name** | **Shop** | **Location Name** |
| --- | --- | --- | --- |
| Drug Order |  | Pharmacy | WH/Pharmacy |
| Drug Order | General Ward | IPD Store | WH/IPD Store |

### Syncable Units Mapping Configuration

The drug orders placed in Bahmni may have different units of measure stored in stock, which will be configured in Odoo. To facilitate the synchronization of quantities, a mapping can be established through `Menu -> Bahmni -> Bahmni Masters -> Syncable Units Mapping`. The template CSV for the import is provided below.

| **Bahmni Unit Name** | **Unit of measure** |
| --- | --- |
| Unit | Units |
| Tablet(s) | Unit(s) |

**Migration Tip: **Masterdata can be migrated a day/two before the go-live and a database backup can be taken which can be restored quickly on the day of go-live and sync from Bahmni can be started.

**Next Step: **Once you have completed the masterdata and metadata migration, proceed to transactional data migration as specified [here](/wiki/spaces/BAH/pages/3657465931/Odoo+16+Transactional+Data+Migration).
