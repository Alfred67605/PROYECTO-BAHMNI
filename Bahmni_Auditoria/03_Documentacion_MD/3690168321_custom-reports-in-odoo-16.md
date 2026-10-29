---
id: "3690168321"
title: "Custom Reports in Odoo 16"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3690168321/custom-reports-in-odoo-16"
version: 1
updated: "2024-08-12T15:26:02.066Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:15.429Z"
---

# Custom Reports in Odoo 16

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3690168321)  
> **Versión del documento:** v1 (2024-08-12T15:26:02.066Z) | **Autor/Editor:** Mohankumar Thangavel

---

These reports are available only from Odoo 16 integration.

With Odoo 16 Integration, custom reports have been created to gather data on various areas such as sales, inventory, and discounts. The reports primarily use Excel format, with a few also available in PDF. These reports are consolidated within a module called [Bahmni Custom Reports](https://github.com/Bahmni/bahmni-odoo-modules/tree/main/bahmni_reports) and are preinstalled in the `bahmni/odoo-16` docker image.

### Accessing the reports

All of the custom reports can be accessed from `Menu -> Reports --> Custom Reports` navigation.
![](https://bahmni.atlassian.net/wiki/download/attachments/3690168321/image-20240812-152230.png?version=1&modificationDate=1723476156918&cacheVersion=1&api=v2)
Every report necessitates particular inputs. For instance, stock movement reports require details on the source stock location and destination stock location. Additionally, the reports can be filtered for a specific product or drug within the reports.
