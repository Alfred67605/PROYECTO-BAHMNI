---
id: "1172668475"
title: "Adjusting / Updating the Product Quantity in Inventory"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1172668475/adjusting-updating-the-product-quantity-in-inventory"
version: 3
updated: "2020-04-01T12:20:24.682Z"
author: "Arun Paul"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:46.853Z"
---

# Adjusting / Updating the Product Quantity in Inventory

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1172668475)  
> **Versión del documento:** v3 (2020-04-01T12:20:24.682Z) | **Autor/Editor:** Arun Paul

---

## About the Feature

Adjusting / Updating the quantity of a products in inventory.

The following steps are explained as per Odoo 10 available on Bahmni 0.92 release.

## Used By

This feature is used by Pharmacist/Hospital Admin.

## How is it Used?

### 1. Updating the product quantity on hand at product level

- 
Click on the “Inventory” menu appearing in the navigation menu at the top of the screen.

- 
Click on the “Products” option in the left panel appearing under the “Inventory Control” section, which will be listing all the products.

- 
Search the desired product by entering the product name in the search field appearing at the top right of the screen.

- 
Click on the searched product record and view various details of the respective product.

- 
Click on the “Update Qty On Hand” button appearing at the top left side of the screen, which will open “Update Product Quantity” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1172668475/image-20200331-080003.png?version=1&modificationDate=1585641607337&cacheVersion=1&api=v2)

- Select the desired “Location”, “New Quantity on Hand” & “Lot/Serial Number”, in which you want to update the quantity, in respective fields.
![](https://bahmni.atlassian.net/wiki/download/attachments/1172668475/image-20200331-075241.png?version=1&modificationDate=1585641164237&cacheVersion=1&api=v2)
- 
You can also create a new lot/serial number from here by selecting the “Create and Edit” option in the “Lot/Serial Number” field.

- 
Click on the “Apply” button to apply the given quantity update details.

### 2. Adjusting the quantity of products using “Inventory Adjustments”

- 
Under the “Inventory” module, go to the “Inventory Adjustments” option in the left panel from “Inventory Control” section.

- 
Click on the “Create” button appearing at the top left side of the screen.

- 
Enter the “Inventory Reference”(For example March 2020 Stock from St.John’s Hospital) and select the desired “Inventory Location”, where you want to make the adjustments, in respective fields.
![](https://bahmni.atlassian.net/wiki/download/attachments/1172668475/image-20200331-081418.png?version=1&modificationDate=1585642461787&cacheVersion=1&api=v2)
- 
Now accordingly select the desired “Inventory of” option-

Select “All products” option, if you want to adjust all the products in selected inventory.

- 
Select “One Product Category” option, if you want to adjust products of a particular category and then select the respective category in “Inventoried Category”.

- 
Select “One Product Only” option, if you want to adjust a particular product and then select the respective product in “Inventoried Product”.

- 
Select “Select products manually” option, if you want to adjust the products of your choice selecting them manually after starting the Inventory.

- 
Select “One Lot/Serial Manually” option, if you want to adjust the products of your choice selecting them manually after starting the Inventory.

- 
Click on the “Start Inventory” button appearing at the top left side of the screen.

- 
Verify and update the adjustment details in the “Inventory Details” grid according to the selected “Inventory of” option.
![](https://bahmni.atlassian.net/wiki/download/attachments/1172668475/image-20200331-082257.png?version=1&modificationDate=1585642980771&cacheVersion=1&api=v2)

- You can also create a new batch and update the quantity for the desired item by clicking in the “Lot/Serial Number” field under the grid and choosing the “Create and Edit” option.

- 
Click on the “Validate Inventory” button to apply the adjusted inventory.

### 3. Inventory Adjustment in bulk using CSV file upload

- 
To adjust the inventory using file upload, first create a csv file with respective details as shown below. Refer attached file (Adjustment Upload Sample.csv) for better understanding.
![](https://bahmni.atlassian.net/wiki/download/attachments/1172668475/image-20200331-091720.png?version=1&modificationDate=1585646244350&cacheVersion=1&api=v2)

- Click on the “Import” button appearing at the top left corner of the “Inventory Adjustments“ screen and load the csv file.

- 
Click on the “Validate” button and then on the “Import” button, if everything seems valid.
![](https://bahmni.atlassian.net/wiki/download/attachments/1172668475/x7O0-J-yPTuqFMpIJYM4AdHXhCP1o0lPjK2dYn3JLZP3f5VRtJvrn0L8OwxmxjXWXq1MHQGtcuKf-ysSSQyUVVimy2axnTms-ZtPHB3XnOE8kkLUi6womZUSK-Y2HmRguiukHXzU?version=1&modificationDate=1585646464138&cacheVersion=1&api=v2)

- Once imported, a new record will appear in the grid with given Inventory Reference & “Draft” status.

- 
Click on the respective record, which will open the details of the imported records.

- 
Click on the “Start Inventory” button appearing at the top left side of the screen, which will bring the product details grid listing all the products added in the imported sheet.

- 
After verifying the details click on the “Validate Inventory” button and the adjustment will be done successfully.

/wiki/download/attachments/1172668475/Adjustment%20Upload%20Sample.csv?version=2&modificationDate=1585647020150&cacheVersion=1&api=v2

  
**Feature Details**

[Feature Guide - Stock / Inventory Management](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604221) 
 
**Implementation Details**

[Implementer's Guide - Odoo Modules - Odoo Inventory Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530225/Odoo+Inventory+Configuration)
