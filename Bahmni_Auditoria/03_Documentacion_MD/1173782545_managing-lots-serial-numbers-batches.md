---
id: "1173782545"
title: "Managing Lots / Serial Numbers (Batches)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1173782545/managing-lots-serial-numbers-batches"
version: 4
updated: "2020-04-01T11:34:12.204Z"
author: "Arun Paul"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:46.270Z"
---

# Managing Lots / Serial Numbers (Batches)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1173782545)  
> **Versión del documento:** v4 (2020-04-01T11:34:12.204Z) | **Autor/Editor:** Arun Paul

---

## About the Feature

Adding the lots / serial numbers (batches) one by one for each product (Consumables / Stockable) and in bulk by uploading a CSV file. 

The following steps and screenshots are explained as per Odoo 10, available on Bahmni 0.92 release.

## Used By

This feature is used by Pharmacist or Hospital Admin or Stock Manager.

## How is it Used?

### 1. Adding the Lots / Serial Numbers for each product one by one

- 
Click on the “Inventory” menu appearing in the navigation menu at the top of the screen.

- 
Click on the “Lots/Serial Numbers” option in the left panel appearing under the “Inventory Control” section, which will be listing the Lots/Serial Numbers i.e. batches of available in inventory of various products.

- 
To create a new lot, click on the “Create” button appearing at the top left side of the screen.

- 
Enter the Lot/Serial Number in respective field, search and select the desired product entering the name of the same in the “Product” field. 

- 
Enter other details like Cost Price, Sale Price, MRP and Dates in respective fields. Sale price is what is being used to sell the product, not MRP.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173782545/Fuh81dfssi4-16JuIAivas8dI7RcD2YBT_wrb8iRrWr99uWss2nHz2fD626sjzmEKIVcaYS8HFKx6ZjiF18pnGDRL78Mh8qRm6mST29txsYaXVTwUtG7JXcNqNemhvWvhjxEXIVc?version=1&modificationDate=1585637084316&cacheVersion=1&api=v2)
- 
Click on the “Save” button to save the new lot / batch with entered details.

Quantity cannot be specified while adding / editing a lot. Quantity can be updated at product level or through Inventory Adjustments feature. For more details refer the next section i.e. [Adjusting / Updating the Product Quantity in Inventory](/wiki/spaces/BAH/pages/1172668475/Adjusting+Updating+the+Product+Quantity+in+Inventory) 

### 2. Exporting the existing Lots

- 
Go to the “Lots/Serial Numbers” screen.

- 
To get a list of existing lots/serial numbers, select the desired records in the grid to export.

- 
Click on the “Action” button at the top of the screen and select “Export” option.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173782545/kvjuhY4f5oUxlSK1q5kswDiM3blfWaEiOM-VrCH6eL6hrI0-QSgrLrbhXwcTiR7rXwtiVZg4VG3VChAcz7C1WbGvKN4E3t8GjhyEiKgO26xX41YTLMX5RdemxrMs6khL_Uz1_s7u?version=1&modificationDate=1585637697494&cacheVersion=1&api=v2)
- 
Now select and add the desired fields, which you need to export, from “Available fields” to the “Fields to export” section in the “Export Data” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173782545/image-20200331-070223.png?version=1&modificationDate=1585638146441&cacheVersion=1&api=v2)
- 
Click on the “Export to File” button appearing at the bottom left corner of the popup, which will download a CSV file consisting of the added field values.

### 3. Adding / Importing lots (batch), through CSV file upload

- 
To import the new batches, first you need to Create a CSV file with some mandatory details as shown in below image. Refer attached file (Lots_Serial Numbers Upload Sample.csv) for better understanding.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173782545/image-20200331-090040.png?version=1&modificationDate=1585645243232&cacheVersion=1&api=v2)

- Click on the “Import” button and load the CSV file (created with the mandatory details as per above) in the “Lots/Serial Numbers” screen.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173782545/NrLJ7Lfjgvts7jRg3XrfmG3rT_btN4a7nFX8T4_T7MVgTsOQsnAbRasmjfEpa9FGuIaLEmfaa9nqwIDcN-U26YyBjfHzvlMgdjNXI8m8i1bSh9fgtzmbWJ1cpyDXzPdVSCI053Cz?version=1&modificationDate=1585638399263&cacheVersion=1&api=v2)
- 
Click on the “Validate” button and then on the “Import” button, if everything seems valid. Once imported, all the lots/serial numbers listed in the CSV sheet will get created.

/wiki/download/attachments/1173782545/Lots_Serial%20Numbers%20Upload%20Sample.csv?version=2&modificationDate=1585645747548&cacheVersion=1&api=v2

  
**Feature Details**

[Feature Guide - Stock / Inventory Management](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604221) 
 
**Implementation Details**

[Implementer's Guide - Odoo Modules - Odoo Inventory Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530225/Odoo+Inventory+Configuration)
