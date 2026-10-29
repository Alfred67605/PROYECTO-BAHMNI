---
id: "32604219"
title: "Accounting Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604219/accounting-configuration"
version: 12
updated: "2017-04-13T06:26:44.090Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:59.483Z"
---

# Accounting Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604219)  
> **Versión del documento:** v12 (2017-04-13T06:26:44.090Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

Bahmni integrates OpenMRS with OpenERP which is a an open source ERP product. It is useful in Billing, Stock management. Any patient registered in OpenMRS is automatically synced as a customer in OpenERP. 

## Steps

1. [Configure OpenERP/Odoo](/wiki/spaces/BAH/pages/21790747/OpenERP+Basic+Configurations).

2. [Setup Syncing](/wiki/spaces/BAH/pages/114627969/OpenERP+Syncing+Config) between Odoo and Bahmni.

**3. Set up Fiscal Year and Period**
 
This is required to be done on an annual basis.

1. Log in to OpenERP with Admin level privilege account.

2. Navigate to the “*Accounting*” tab. Click on the option “*Periods*” under “*Configuration*” from the left panel.

**![](https://bahmni.atlassian.net/wiki/download/attachments/32604219/image2017-1-2_12-24-52.png?version=1&modificationDate=1488173158108&cacheVersion=1&api=v2)**

3. Click on the “*Fiscal Years*” option.

**![](https://bahmni.atlassian.net/wiki/download/attachments/32604219/image2017-1-2_12-25-46.png?version=1&modificationDate=1488173158426&cacheVersion=1&api=v2)**

4. Click on “*Create*” button. Define the fiscal year as shown in the example below

**![](https://bahmni.atlassian.net/wiki/download/attachments/32604219/image2017-1-2_12-27-8.png?version=1&modificationDate=1488173158827&cacheVersion=1&api=v2)**

6. Click on “*Create Monthly Periods*” and it will generate the periods as shown below.

**![](https://bahmni.atlassian.net/wiki/download/attachments/32604219/image2017-1-2_12-28-30.png?version=1&modificationDate=1488173159379&cacheVersion=1&api=v2)**

7. Click on “*Save*” button to save the periods and fiscal year. There should not be any error now while confirming the quotations.
 
Note that if the fiscal year and period is not set on an annual basis, users will get the error message below when confirming the sales quotation.

OpenERP throws this error because there are no periods defined in the system for this date. 

**

![](https://bahmni.atlassian.net/wiki/download/attachments/32604219/image2017-1-2_12-19-40.png?version=1&modificationDate=1488173157536&cacheVersion=1&api=v2)

**Error message shown while confirming the quotation**

On this Page
 
 
 
 

On this Page
 
 
 
 
Feature Details**

[Billing and Accounting System - Feature Guide](/wiki/spaces/BAH/pages/32014379/Billing+and+Accounting)

**Usage Details**

[Billing and Accounting System - User Guide](/wiki/spaces/BAH/pages/32604217/Patient+Billing+and+Accounting)

**Related Links**

[Oddo/OpenERP Quotations/Invoicing/Sales Order](https://www.erponline.vn/en/documentation/user-manuals/88-accounting-financial/216-customer-invoicing-payments).

[O](https://doc.odoo.com/book/#books-link)[penERP Documentation](https://doc.odoo.com/book/#books-link)

[Billing/Pharmacy App: For the pharmacist to easily dispense Medications](/wiki/spaces/BAH/pages/115777052/Billing+Pharmacy+App)
