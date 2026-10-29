---
id: "1177190402"
title: "Returning the delivered medicine and Refunding the Invoice"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1177190402/returning-the-delivered-medicine-and-refunding-the-invoice"
version: 3
updated: "2020-04-01T11:30:45.352Z"
author: "Arun Paul"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:37.850Z"
---

# Returning the delivered medicine and Refunding the Invoice

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1177190402)  
> **Versión del documento:** v3 (2020-04-01T11:30:45.352Z) | **Autor/Editor:** Arun Paul

---

## About the Feature

After confirming and delivering a medication order, same can be returned back partially or fully to the respective inventory in the desired batch. User can refund the invoice for the returned medicines too.

The following steps and screenshots are explained as per Odoo 10, available on Bahmni 0.92 release.

## Used By

This feature is used by Pharmacists and Cashiers in a hospital pharmacy.

## How is it Used?

### 1. Returning the medicine

- 
Go to the Odoo - “Sales Order” screen under the “Sales” menu, which will be listing the confirmed medication sale orders.

- 
Search for the desired patient’s sale order and click on the same, to view the respective details.

- 
Click on the “Delivery” button appearing at the top right side.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-061526.png?version=1&modificationDate=1585721730943&cacheVersion=1&api=v2)

- In the “Delivery” screen, you can view the delivered quantity in the “Done” column for the listed products.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-062430.png?version=1&modificationDate=1585722274654&cacheVersion=1&api=v2)

- Click on the “Return” button appearing at the top left side of the screen.

- 
Update the quantity of drug to return in the “Quantity” field under the “Reverse Transfer” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-062822.png?version=1&modificationDate=1585722505818&cacheVersion=1&api=v2)

- Click on the “Return” button appearing at the bottom left corner of the popup.

- 
Click on the “Force Availability” button appearing at the top left side of the screen.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-063339.png?version=1&modificationDate=1585722823491&cacheVersion=1&api=v2)

- Open “Operations” tab and click on the list icon  appearing in the product grid.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-064422.png?version=1&modificationDate=1585723466475&cacheVersion=1&api=v2)
- 
Click on “Add an Item” link in the “Lot/Serial Number Details” popup, select the desired lot in which you want to add the returned quantity of drugs and enter the same quantity in the “Done” field.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-065406.png?version=1&modificationDate=1585724050050&cacheVersion=1&api=v2)
- 
Click on the “Save” button in the popup and then click on “Validate” button in the top left side of the screen.

### 2. Refunding the Invoice

- 
To refund the invoice, click on the “Invoices” button appearing at the top right side for the confirmed sales order.

- 
Click on the “Refund Invoice” button appearing at the top left side of the screen.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-070547.png?version=1&modificationDate=1585724752247&cacheVersion=1&api=v2)

- Select the desired “Refund Method” in the “Refund Invoice” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-071052.png?version=1&modificationDate=1585725055993&cacheVersion=1&api=v2)

- Enter the Refund Reason and Date in the respective fields accordingly and click on the “Create Refund” button at the bottom left side of the popup.

- 
Open the Draft Refund record, click on the “Validate” button appearing at the top right side of the screen and then click on the “Register Payment” button.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177190402/image-20200401-071839.png?version=1&modificationDate=1585725523100&cacheVersion=1&api=v2)

-  Select the Payment Journal and enter the Payment Amount in the respective fields under “Register Payment” popup and then click on “Validate” button appearing at the bottom left side of the popup.

- 
You can print the Refund Invoice by clicking the “Print” button and selecting the “Invoices” option.
 

  
**Feature Details**

[Feature Guide - Pharmacy Management](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604205/Pharmacy+Management) 
 
**Implementation Details**

[Implementer's Guide - ERP Modules - Pharmacy Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014590/Pharmacy+Configuration)
