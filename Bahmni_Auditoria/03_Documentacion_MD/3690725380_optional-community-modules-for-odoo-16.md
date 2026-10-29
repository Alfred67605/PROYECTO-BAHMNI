---
id: "3690725380"
title: "Optional Community Modules for Odoo 16"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3690725380/optional-community-modules-for-odoo-16"
version: 1
updated: "2024-08-12T17:15:17.029Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:20.330Z"
---

# Optional Community Modules for Odoo 16

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3690725380)  
> **Versión del documento:** v1 (2024-08-12T17:15:17.029Z) | **Autor/Editor:** Mohankumar Thangavel

---

Starting with Odoo 16 integration for Bahmni, the `bahmni/odoo-16` docker image includes optional community modules to help implementers install them as needed. Please note these are community modules either downloaded from [Odoo App store](https://apps.odoo.com/apps) or [Odoo Community Association Github](https://github.com/OCA) or other opensource forums.

If you have developed or utilised a community module in your implementation, we invite you to submit pull requests to the [bahmni-odoo-modules](https://github.com/Bahmni/bahmni-odoo-modules) repository under the community_modules directory. This will allow for the review and potential inclusion of these modules in the Bahmni Odoo 16 image, benefiting other community implementers.

There are numerous modules accessible on Odoo Community Association (OCA) [Github](https://github.com/OCA) that address specific business needs. So we recommend leveraging those modules if you are in need of an extension.

### 1. base_accounting_kit, base_account_budget

With Odoo 16, Accounting features are not available by default in Community version and needs enterprise license to use the module. So a community module by Cybrosys Technologies named as Odoo 16 Full Accounting Kit has been bundled. **Note: **We highly recommend installing and exploring this module on a test / pre-prod instance before installing on your production environment.
![](https://bahmni.atlassian.net/wiki/download/attachments/3690725380/image-20240812-165946.png?version=1&modificationDate=1723481992475&cacheVersion=1&api=v2)
### 2. report_pdf_options

When Print action is used on any menu of Odoo 16, by default the PDF gets downloaded. In order to open a print preview or view the file, this module can be used to configure the default options. This module is downloaded from [here](https://apps.odoo.com/apps/modules/16.0/report_pdf_options).
![](https://bahmni.atlassian.net/wiki/download/attachments/3690725380/image-20240812-170436.png?version=1&modificationDate=1723482281029&cacheVersion=1&api=v2)
### 3. br_custom_list_view

This module supports adding of Serial Numbers to different tree views across Odoo screens. You can install this module to have serial numbers shown across screens of Odoo 16. This module is downloaded from [here](https://apps.odoo.com/apps/modules/16.0/br_custom_list_view).
![](https://bahmni.atlassian.net/wiki/download/attachments/3690725380/image-20240812-170823.png?version=1&modificationDate=1723482506676&cacheVersion=1&api=v2)
### 4. stock_picking_filter_lot

This module is used to filter the Lots/Serial Numbers that are shown in Inventory transfers / Sale Quotations. This module can be installed to list only the lot numbers that are available in the specified source location. This module has been pulled from [here](https://github.com/OCA/stock-logistics-workflow/tree/16.0/stock_picking_filter_lot).
![](https://bahmni.atlassian.net/wiki/download/attachments/3690725380/image-20240812-171126.png?version=1&modificationDate=1723482690446&cacheVersion=1&api=v2)
