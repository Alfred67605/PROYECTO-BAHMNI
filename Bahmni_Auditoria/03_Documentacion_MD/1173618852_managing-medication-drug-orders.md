---
id: "1173618852"
title: "Managing Medication / Drug Orders"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1173618852/managing-medication-drug-orders"
version: 3
updated: "2020-04-01T11:31:01.277Z"
author: "Arun Paul"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:37.349Z"
---

# Managing Medication / Drug Orders

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1173618852)  
> **Versión del documento:** v3 (2020-04-01T11:31:01.277Z) | **Autor/Editor:** Arun Paul

---

## About the Feature

Once a Medication / Drug or prescription ordered by the doctor from Clinical Services app, same can be seen as a quotation in Odoo with Draft status. This section describes about confirming and delivering the ordered drugs.

The following steps and screenshots are explained as per Odoo 10, available on Bahmni 0.92 release.

## Used By

This feature is used by Pharmacist.

## How is it Used?

### 1. Updating & confirming the drug order

- 
Click on the “Sales” menu appearing in the navigation menu at the top of the screen in **Odoo** application.

- 
Click on the “Quotations” option in the left panel appearing under the “Sales” to navigate to the “Quotations” screen, which will be listing the Draft Quotations of various patients.

- 
Search the quotation of the desired patient entering the patient name or identifier in the search field appearing at the top right of the screen.

- 
Click on the searched quotation to view the prescription order sent from the service unit for the respective patient.

- 
Click on the “Edit” button appearing at the top left side of the screen.

- 
Update the quantity of drugs in the “Order Lines” if required.

- 
Select the desired batch in the Batch No. column field for each product. Once the batch is selected, accordingly the sale price will get populated in the “Unit Price”. 
![](https://bahmni.atlassian.net/wiki/download/attachments/1173618852/SQmBBt_ol9EfxOkZTHqk7NVctVjozca_bmTKaDn77iyVRDEa7tPq1gUuPxpaj0Kwr3OAZzGSD1SBifMCPhHmC04LwX2LR1vsGJWzVCkMmPHwManwRPZ6TND3Iez7nbevZDTRoqwS?version=1&modificationDate=1585651160824&cacheVersion=1&api=v2)

- Click on the “Confirm Sale” button, which will confirm the sales.

“Unit Price“ will populate on select the batch for a product only when the “**Markup - Determine sale price based on cost price markup**“ flag kept checked under   Sales > Configuration > Settings > Quotations & Sales.

### 2. Create Invoice for a confirmed sale order

- 
To create invoice, click on “Create Invoice“ button appearing at the top left corner of the screen in a confirmed Sale Order.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173618852/image-20200331-104816.png?version=1&modificationDate=1585651700876&cacheVersion=1&api=v2)

-  Select desired invoice option in the popup and click on “Create Invoices” button.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173618852/image-20200331-105146.png?version=1&modificationDate=1585651909670&cacheVersion=1&api=v2)

- Click on “Invoices“ icon appearing at the top right corner of the quotation, which will navigate to the Invoice screen displaying the Invoice details.

- 
Click on “Validate” button appearing at the top left corner of the sale order and then on the “Register Payment” button, which will open “Register Payment” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173618852/image-20200331-105620.png?version=1&modificationDate=1585652183582&cacheVersion=1&api=v2)

- Select the payment type, enter the payment amount and click on “Validate” button in the popup. 

When “**Skip Invoice Options**” flag in Settings > Users > Users > Technical Settings is kept checked for logged in user, Invoice will get created automatically on “Confirm Sale” action and “Register Payment” popup will appear for payment details. 

### 3. Deliver the drug(s) from the confirmed drug sale order

- 
Once sale is confirmed, a delivery order (for any stockable line item) will be created and can be accessed by clicking the “Delivery” icon appearing in the right side of the screen.

- 
In the delivery screen, you can view the available quantity of the drug in the selected lot.

- 
Click on the list icon appearing in the product grid and enter the delivered quantity of drug in the “Done” field under the “Lot/Serial Number Details” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173618852/image-20200331-110550.png?version=1&modificationDate=1585652754427&cacheVersion=1&api=v2)

- Click on the “Validate” button appearing at the top left side of the screen to deliver the Done quantity of drugs and the same quantity will get reduced from the selected batch of inventory.
![](https://bahmni.atlassian.net/wiki/download/attachments/1173618852/LURsdJ4ozIdsxXP-XlBpZfO64OAkU4lwuoe3z4etANEbBE7PqMG9JAuinMxuqdsVHIw1MxnpLMbIEs10gamENnSzBkSeP4KEEte2K4-n-IUcmdA8HW0wTA64MSeUqC28Vy2FV3Pc?version=1&modificationDate=1585651140104&cacheVersion=1&api=v2)

When “**Delivery - Validate delivery when order confirmed**” flag kept checked under   Sales > Configuration > Settings > Quotations & Sales, the drug will get delivered automatically on “Confirm Sale” option if demanded quantity is available.

  
**Feature Details**

[Feature Guide - Pharmacy Management](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604205/Pharmacy+Management) 
 
**Implementation Details**

[Implementer's Guide - ERP Modules - Pharmacy Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014590/Pharmacy+Configuration)
