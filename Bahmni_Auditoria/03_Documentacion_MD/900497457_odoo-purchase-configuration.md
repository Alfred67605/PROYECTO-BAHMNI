---
id: "900497457"
title: "Odoo Purchase Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900497457/odoo-purchase-configuration"
version: 8
updated: "2024-08-12T17:45:51.830Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:13.951Z"
---

# Odoo Purchase Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900497457)  
> **Versión del documento:** v8 (2024-08-12T17:45:51.830Z) | **Autor/Editor:** Mohankumar Thangavel

---

# Price Markup 

Bahmni provides a customized module for Odoo, through which you can define markup percentages to be applied over a product's cost price to be determined as unit price. 

To define the ranges and applicable markups, you need to do the following:

- 
Navigate to Menu → Bahmni → Bahmni Masters → Sale Price Markup Rule

- 
Define the ranges of Cost Price and the percentage that needs to be applied for that range.

![](https://bahmni.atlassian.net/wiki/download/attachments/900497457/image-20240812-173523.png?version=1&modificationDate=1723484128403&cacheVersion=1&api=v2)
 

 Odoo 10 Markup Configuration
- 
Go to "Menu / Purchases / Configuration / Price Markup Table"

- 
Define ranges of price, and applicable markup percentages for each range

![](https://bahmni.atlassian.net/wiki/download/attachments/900497457/Odoo_Price_Markup_Table_Ranges.png?version=1&modificationDate=1565365906556&cacheVersion=1&api=v2)
Now when you receive a product, and if the product was configured for **“Tracking By Lots”, **then you will find that Sales price will be calculated based on the above configuration.

![](https://bahmni.atlassian.net/wiki/download/attachments/900497457/image-20240812-173908.png?version=1&modificationDate=1723484352971&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/900497457/Odoo_receive_product_lots_with_markup.png?version=1&modificationDate=1565599174605&cacheVersion=1&api=v2)

In the above screenshot, the "Sale Price" is calculated based on the markup percentage defined over "Cost Price" (in this case 10%)

### Enable using the markup price as Unit Price in Sale Quotations
**NOTE: **Setting up the markup percentages and receiving the products, does not mean that the lots/Serial based costs calculated through markups will apply by default.

- 
Navigate to `Menu -> Settings -> Bahmni`

- 
Under Sale Configurations, toggle the **Sale Price Markup Rule** option to use the markup price as Unit price for Sale Quotations.

![](https://bahmni.atlassian.net/wiki/download/attachments/900497457/image-20240812-174418.png?version=1&modificationDate=1723484662262&cacheVersion=1&api=v2)

- Note: Enabling this feature will restrict the rules of pricelist being applied on that specific order line item. 

 Odoo 10
 If you want the “sale price” of the Lots/Serial to reflect on “Sale order”, you will need to enable **“Determine sale price based on cost price markup”** option under “Menu / Sales / Configuration / Settings / Markup”. 

 
![](https://bahmni.atlassian.net/wiki/download/attachments/900497457/image-20240812-174312.png?version=1&modificationDate=1723484596218&cacheVersion=1&api=v2)
