---
id: "32014610"
title: "Inventory Management System"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014610/inventory-management-system"
version: 14
updated: "2017-03-16T05:47:35.051Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:01.436Z"
---

# Inventory Management System

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014610)  
> **Versión del documento:** v14 (2017-03-16T05:47:35.051Z) | **Autor/Editor:** teresa gracias

---

## Purpose and Benefits

Bahmni uses [Odoo](https://www.odoo.com/) mostly for Sales Management, Purchase Management, and for Inventory and Accounting. OpenERP has been adapted for health facilities to work seamlessly with Bahmni.
 
Since Bahmni is based on Odoo/OpenERP, you can also refer to the Odoo documentation for in-depth information on [Warehouse Management](https://www.erponline.vn/en/documentation/user-manuals/92-warehouse-management/257-managing-physical-inventory-structure). Or here: [https://doc.odoo.com/book/#books-link](https://doc.odoo.com/book/#books-link)

## Steps

### 1. Configure OpenERP/Odo

Please [refer to this link](/wiki/spaces/BAH/pages/21790747/OpenERP+Basic+Configurations) on details to Configure OpenERP/Odoo.

### 2. Setup Syncing between Odoo and Bahmni

Please [refer to this link](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=114627969) to setup Syncing between OpenERP/Odoo and Bahmni.

### 3. Configure Location, Warehouse and Shop

Please [refer to this link](https://bahmni.atlassian.net/wiki/display/BAH/Pharmacy+System#PharmacySystem-5.ConfigureLocation,WarehouseandShop) to configure locations, warehouses and shops.

### 4. View Inventory at Different Locations

Since we have different locations we can analyze the current inventory or inventory over a date-range. 

To do this navigate to Warehouse → Choose location →  Select the required option.

A new location can be created by clicking on the "Create" button and giving appropriate parameters.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014610/Screen%20Shot%202016-03-08%20at%2016.31.37.png?version=1&modificationDate=1457434913500&cacheVersion=1&api=v2)

**Creating a New Location in OpenERP**

**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014610/Screen%20Shot%202016-03-08%20at%2016.01.17.png?version=1&modificationDate=1457433103694&cacheVersion=1&api=v2)

**Current Inventory at Pharmacy Location**

### 5. View** Product Quantity at a Particular Location**

Search for the product in the search bar to view the actual stock and the future stock for the particular location.
 
- Future stock equals actual stock once the stock units are delivered.
- Drug Orders created in openMRS sync as products in openERP.

### **
![](https://bahmni.atlassian.net/wiki/download/attachments/32014610/Screen%20Shot%202016-03-08%20at%2016.04.43.png?version=1&modificationDate=1457433307796&cacheVersion=1&api=v2)**

**Aceclofenac Stock at Pharmacy Location**

### 6. View Batch Level Stock Units Per Location

Navigate to "Serial Number by Location" to view batch level stock units per location. 
 
openERP does a double entry of drugs. 

For example, when a drug is ordered, it is reduced at the stock location, and increases correspondingly at the customer location so that the drug quantities balance-out.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014610/Screen%20Shot%202016-03-08%20at%2016.11.42.png?version=1&modificationDate=1457433780533&cacheVersion=1&api=v2)

**Batch Level Stock Units of Aceclofenac across Locations**

### 7. Move Stock across Locations

This is used to move stock units across locations, such as X units of Aceclofenac from Stock Room to Pharmacy. This can be achieved by creating a new internal move from a configured source location to a configured destination location.

**![](https://bahmni.atlassian.net/wiki/download/attachments/32014610/Screen%20Shot%202016-03-08%20at%2016.21.46.png?version=1&modificationDate=1457434328729&cacheVersion=1&api=v2)**

**Moving Acyclovir Stock Units Across Locations**

On this Page

 
 
 
Feature Details**

[Stock / Inventory Management - Feature Guide](/wiki/spaces/BAH/pages/32604221/Stock+Inventory+Management)

**Usage Details**

[Stock / Inventory Management - User Guide](/wiki/spaces/BAH/pages/32014377/Inventory+Management)
