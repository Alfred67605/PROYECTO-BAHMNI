---
id: "28311588"
title: "OpenERP Custom fields"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/28311588/openerp-custom-fields"
version: 6
updated: "2022-03-13T15:04:23.671Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:57.208Z"
---

# OpenERP Custom fields

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/28311588)  
> **Versión del documento:** v6 (2022-03-13T15:04:23.671Z) | **Autor/Editor:** Gurpreet Luthra

---

## Steps
 
OpenERP/Odoo sync will fail if Patient Attributes are not created in Odoo in the `res.partner.attributes` table. Please see this thread to understand the steps: [https://talk.openmrs.org/t/bahmni-implementation-creating-robust-deployment/36034/8?u=gsluthra](https://talk.openmrs.org/t/bahmni-implementation-creating-robust-deployment/36034/8?u=gsluthra)

In order to sync a new patient attribute from OpenMRS to OpenERP, a new column has to be added in 'res.partner.attributes' model of OpenERP.

Column name has to be same as the patient attribute name in OpenMRS.

Column name can be added to a table in OpenERP via UI in the following way

![](https://bahmni.atlassian.net/wiki/download/attachments/28311588/openerp.gif?version=1&modificationDate=1441954666975&cacheVersion=1&api=v2)
