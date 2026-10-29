---
id: "3657465931"
title: "Odoo 16 Transactional Data Migration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657465931/odoo-16-transactional-data-migration"
version: 3
updated: "2024-07-30T02:06:55.510Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:18.451Z"
---

# Odoo 16 Transactional Data Migration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3657465931)  
> **Versión del documento:** v3 (2024-07-30T02:06:55.510Z) | **Autor/Editor:** Mohankumar Thangavel

---

When considering transactional data migration, it is recommended to approach Odoo 16 as a new system and begin from scratch. There have been substantial changes in the model, and migrating data, even if feasible, will necessitate additional or custom scripting.

Our recommendations include:

- 
Prepare for the discontinuation of older versions (Odoo 10 or OpenERP 7).

- 
Configure Odoo according to the guidelines provided in the setup pages.

- 
Transfer the master data

- 
Think about the essential transactional data required for the new version to guarantee seamless operations.

Accounting Module by Odoo has been made available only in Enterprise version of Odoo. So a community module by Cybrosys Technologies has been [added](https://github.com/Bahmni/bahmni-odoo-modules/tree/main/community_modules/base_accounting_kit) as an optional module for implementers to install and try out. If your implementation uses extensive accounting features, we recommend installing this module and exploring the features and validate if it fits to your needs and then proceed with the migration.

***Note:** This is an external community module, and not maintained by Bahmni community.*

 
***Note: ***These guides serve as a reference for importing essential data. If your implementation includes additional modules or extensions, we recommend thoroughly investigating and expanding the import process accordingly. We also welcome the community to propose new pages if you have attempted a different import process.

The following pages offer a guide on importing stock information and patient outstanding information into Odoo 16 by using the CSV/Excel based import process.

- 
[Importing Stock Data into Odoo 16](/wiki/spaces/BAH/pages/3662872598/Importing+Stock+Data+into+Odoo+16) 

- 
[https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3662839815/Importing+patient+outstanding+data+into+Odoo+16](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3662839815/Importing+patient+outstanding+data+into+Odoo+16)
