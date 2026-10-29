---
id: "114627969"
title: "OpenERP Syncing Config"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114627969/openerp-syncing-config"
version: 8
updated: "2019-08-06T05:04:58.354Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:56.775Z"
---

# OpenERP Syncing Config

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114627969)  
> **Versión del documento:** v8 (2019-08-06T05:04:58.354Z) | **Autor/Editor:** Angshuman Sarkar

---

## Introduction

To sync the orders from OpenMRS to Odoo we need to configure the Order type shop mapping and units to be synced in Odoo.  Currently Bahmni supports syncing of the following order types:

- Drug Order
- Lab Order
- Radiology Order

## Steps

Prerequisite
 
The Shop should have already been created in Odoo.

**

    
**

**Video Walkthrough**

**1. Login to Odoo and navigate to "Sales" tab. Under configuration click on "Order Type - Shop mapping".**

![](https://bahmni.atlassian.net/wiki/download/attachments/114627969/image2017-2-13_14-55-30.png?version=1&modificationDate=1486978472307&cacheVersion=1&api=v2)

**Order type - shop mapping**

******

**2. Click on "Create" button to create a new mapping. Keep the "Local Shop"  and "Location Name" as blank.**

![](https://bahmni.atlassian.net/wiki/download/attachments/114627969/image2017-2-13_14-57-54.png?version=1&modificationDate=1486978471737&cacheVersion=1&api=v2)

**Drug Order and Pharmacy shop mapping.**

**3. Similar to the above create the mapping for Lab and Radiology orders.**

![](https://bahmni.atlassian.net/wiki/download/attachments/114627969/image2017-2-13_15-2-14.png?version=1&modificationDate=1486978470763&cacheVersion=1&api=v2)

**Drug Order, Lab Order and Radiology order mapping**

**4. To configure the Units of measure click on the option "Units to be synced".**

**![](https://bahmni.atlassian.net/wiki/download/attachments/114627969/image2017-2-13_15-5-46.png?version=1&modificationDate=1486978549250&cacheVersion=1&api=v2)**

**Units to be synced**

**
**

**5. Click on create and add the unit which needs to be synced for the drug.**

**![](https://bahmni.atlassian.net/wiki/download/attachments/114627969/image2017-2-13_15-7-59.png?version=1&modificationDate=1486978683054&cacheVersion=1&api=v2)**

**Configuring "Tablet" for syncing of drug orders**

**
**

**6. Similar to this add all other units of measurements which are used in the OpenMRS in the medication tab.**

**![](https://bahmni.atlassian.net/wiki/download/attachments/114627969/image2017-2-13_15-10-56.png?version=1&modificationDate=1486978859470&cacheVersion=1&api=v2)**

**All the units used in OpenMRS configured in Odoo**

Related Pages**

[Troubleshooting steps for ERP sync](/wiki/spaces/BAH/pages/111411208/Troubleshooting+steps+for+ERP+sync)

- [OpenERP Basic Configurations](/wiki/spaces/BAH/pages/21790747/OpenERP+Basic+Configurations)
- [OpenERP Syncing Config](/wiki/spaces/BAH/pages/114627969/OpenERP+Syncing+Config)
- [OpenERP Custom fields](/wiki/spaces/BAH/pages/28311588/OpenERP+Custom+fields)
- [OpenERP Custom Filters](/wiki/spaces/BAH/pages/5570574/OpenERP+Custom+Filters)
