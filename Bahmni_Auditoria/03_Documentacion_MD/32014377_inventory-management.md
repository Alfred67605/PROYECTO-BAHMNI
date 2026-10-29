---
id: "32014377"
title: "Inventory Management"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014377/inventory-management"
version: 12
updated: "2020-04-14T11:31:26.503Z"
author: "Rahul Kumrawat"
category: "Manual_Usuario_Sub"
download_date: "2026-10-20T21:02:45.775Z"
---

# Inventory Management

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014377)  
> **Versión del documento:** v12 (2020-04-14T11:31:26.503Z) | **Autor/Editor:** Rahul Kumrawat

---

The following steps and screenshots are explained as per Odoo 10, available on Bahmni 0.92 release.
 
Since Odoo (OpenERP with Bahmni v0.91 and earlier) is an open source product with thousands of existing customers and a community – its own online documentation is also available online (see Related Links). You can also refer to the documentation to understand ERP functions better, or in cases where you need more clarity than the documentation provided by Bahmni on ERP features.

## About the Feature

Bahmni uses [Odoo](https://www.odoo.com/) predominantly for Sales Management, Purchase Management, and for Inventory and Accounting. Odoo has also been adapted for healthcare management, to work seamlessly with Bahmni. 

## Used By

Stock/Inventory Management is used by the Pharmacist/Hospital Admin and is used to purchase orders, for Stock Movement and to generate Inventory Status Reports.

## How is it Used?

- 
Internal moves - Please see documentation on [Stock Transfer](/wiki/spaces/BAH/pages/32014364/Pharmacy)

- Initial Physical Stock entry

For each product, it is possible to configure batch numbers and sale price. When a quotation for sale is created, the following is provided-

- Depending on how you have setup pricing (Basic Sale Price, Pricelists, Lots Markup etc), the unit price for order lines would be calculated. 
- For each item in the quotation, the user can select the batch number from an available list of batch numbers. This will ensure that invalid batch numbers are not entered.**![](https://bahmni.atlassian.net/wiki/download/attachments/32014377/Odoo_Quotation_Select_Product_Batch.png?version=1&modificationDate=1565789985226&cacheVersion=1&api=v2)

- Note in OpenERP 7, for each item in the quotation, the price entered is validated against the sale price configured for the product to ensure that price more than sale price is not entered. This is not yet available with Odoo (with Bahmni v0.92)

 OpenERP7 Sale Price Validation
![](https://bahmni.atlassian.net/wiki/download/attachments/32014377/image2016-4-5%2011:36:46.png?version=1&modificationDate=1490245439934&cacheVersion=1&api=v2)

- Stock Location for delivery: When a Shop is selected for the quotation, the mapped Stock Location would be set. (See section Shops in [Odoo Sales Configuration](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration)). This information is available in the "Other Information" tab. (see also below). The validations of the stock levels, availability are done against this particular stock location, and the customer delivery order will be created with this stock location and subsequently inventory adjusted at the stock location. 

 ![](https://bahmni.atlassian.net/wiki/download/attachments/32014377/Odoo_Customer_Quotation_Associated_Stock_Location.png?version=1&modificationDate=1565790575772&cacheVersion=1&api=v2) 

 
**Bahmni configuration for each implementation can vary drastically. As the screens and workflows are not constant across all installations of Bahmni, we have refrained from prescribing them. **

**Please refer to the Guides below for further details about the feature.**
**
**Feature Details**

[Stock / Inventory Management - Feature Guide](/wiki/spaces/BAH/pages/32604221/Stock+Inventory+Management)

**Implemnentation Details**

[Stock / Inventory Management - Implementer's Guide](/wiki/spaces/BAH/pages/32014610/Inventory+Management+System)

[Inventory Configuration - Implementer's Guide](/wiki/spaces/BAH/pages/900530225/Odoo+Inventory+Configuration) (Odoo)

[Sales Configuration - Implementer's Guide](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration) (Odoo)

**Related Links**

[O](/wiki/spaces/BAH/pages/32014610/Inventory+Management+System)[penERP7 Documentation](https://doc.odoo.com/book/#books-link)

[Odoo 10 Documentation](https://www.odoo.com/documentation/10.0/)
