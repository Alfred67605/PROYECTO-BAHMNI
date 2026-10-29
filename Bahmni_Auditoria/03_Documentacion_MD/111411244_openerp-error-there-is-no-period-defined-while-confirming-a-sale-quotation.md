---
id: "111411244"
title: "OpenERP error "There is no period defined" while confirming a sale quotation"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/111411244/openerp-error-there-is-no-period-defined-while-confirming-a-sale-quotation"
version: 2
updated: "2017-01-02T07:06:38.272Z"
author: "Ravinder Deolal"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:08.374Z"
---

# OpenERP error "There is no period defined" while confirming a sale quotation

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/111411244)  
> **Versión del documento:** v2 (2017-01-02T07:06:38.272Z) | **Autor/Editor:** Ravinder Deolal

---

## How to resolve OpenERP error "There is no period defined" 

OpenERP is throwing this error because there are no periods defined in the system for this date. This usually happens when the year changes. Users will get the below error message when confirming the sales quotation.

![](https://bahmni.atlassian.net/wiki/download/attachments/111411244/image2017-1-2_12-19-40.png?version=1&modificationDate=1483340761108&cacheVersion=1&api=v2)

**Error message shown while confirming the quotation.**

## Steps

**1. Log in to OpenERP with Admin level privilege account.**

**2. Navigate to “Accounting” tab. Click on the option “Periods” under “Configuration” from the left panel.**

**![](https://bahmni.atlassian.net/wiki/download/attachments/111411244/image2017-1-2_12-24-52.png?version=1&modificationDate=1483340760083&cacheVersion=1&api=v2)**

**3. Click on the “Fiscal Years” option.**

**![](https://bahmni.atlassian.net/wiki/download/attachments/111411244/image2017-1-2_12-25-46.png?version=1&modificationDate=1483340759521&cacheVersion=1&api=v2)**

**4. Click on “Create” button. Define the fiscal year as shown in the example below.**

**![](https://bahmni.atlassian.net/wiki/download/attachments/111411244/image2017-1-2_12-27-8.png?version=1&modificationDate=1483340759154&cacheVersion=1&api=v2)**

**6. Click on “Create Monthly Periods” and it will generate the periods as shown below.**

**![](https://bahmni.atlassian.net/wiki/download/attachments/111411244/image2017-1-2_12-28-30.png?version=1&modificationDate=1483340758114&cacheVersion=1&api=v2)**

**7. Click on “Save” button to save the periods and fiscal year. There should not be any error now while confirming the quotations.**
