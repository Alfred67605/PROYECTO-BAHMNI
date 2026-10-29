---
id: "1177321536"
title: "Manual Billing - Creating Quotation in Odoo"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1177321536/manual-billing-creating-quotation-in-odoo"
version: 4
updated: "2020-04-08T07:35:06.741Z"
author: "Rahul Kumrawat"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:44.822Z"
---

# Manual Billing - Creating Quotation in Odoo

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1177321536)  
> **Versión del documento:** v4 (2020-04-08T07:35:06.741Z) | **Autor/Editor:** Rahul Kumrawat

---

## About the Feature

Orders placed by doctors from Clinical Services like Laboratory, Radiology, Medications gets synced to Odoo in form of Draft Quotations, which can be confirmed as sale orders and invoice will be created for the same. For other services that need to be manually billed such as Registration, Visit / Consultation, Nursing Care etc, front desk, the authorised user has to newly create a bill / quotation manually and then confirm it as a sale order.

The following steps and screenshots are explained as per **Odoo 10**, available on **Bahmni 0.92** release.

## Used By

This feature is used by hospital receptionists, front desk or other authorised user in the hospital.

## How is it Used?

### 1. Creating quotation and confirming the same

- 
Go to “Quotations” screen under “Sales” section from “Sales” menu in “Odoo”.

- 
Click on the “Create” button appearing at the top left corner of the screen.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177321536/zIX1YL9wa6HajQT0FwOO31T3WG2IdO4i3eFBLjl-uLlWv1goU9hhli78nmhbNt6b_z1EL1685xD2ztMPmnuU2QBJjZtfEiRsn-aUDE1mcWm1oJdfoZ0qd_X8qWMPoanl0nz6iGtf?version=1&modificationDate=1585728685314&cacheVersion=1&api=v2)

- Search & Select the desired patient entering the Patient ID or Name in “Customer” field in the “Quotations / New” screen.

- 
Enter the Provider Name in the respective field if needed.

- 
Click on the “Add an Item” link in the “Order Lines” grid.

- 
Search and select the desired service entering the Service ID or Name in the Product column field.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177321536/image-20200401-081218.png?version=1&modificationDate=1585728740882&cacheVersion=1&api=v2)

- Click on the “Confirm Sale” button appearing at the top of the screen, which will confirm the sales.

### 2. Create Invoice for a confirmed sale order

- 
To create invoice, click on “Create Invoice“ button appearing at the top left corner of the screen in a confirmed Sale Order.

- 
Select desired invoice option in the popup and click on “Create Invoices” button.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177321536/e8309498-25ae-4a00-90a2-74b2863d57f1?version=1&modificationDate=1585729403452&cacheVersion=1&api=v2)
- 
Click on “Invoices“ icon appearing at the top right corner of the quotation, which will navigate to the Invoice screen displaying the Invoice details.

- 
Click on “Validate” button appearing at the top left corner of the sale order and then on the “Register Payment” button, which will open “Register Payment” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177321536/image-20200401-083010.png?version=1&modificationDate=1585729812840&cacheVersion=1&api=v2)

- Select the payment type, enter the payment amount and click on “Validate” button in the popup.

- 
Invoice will get created and payment get registered successfully. Invoice print can be taken by clicking the “Print” button at the top middle of the screen and selecting the “Invoices” option from the drop down.

When “**Skip Invoice Options**” flag in Settings > Users > Users > Technical Settings is kept checked for logged in user, Invoice will get created automatically on “Confirm Sale” action and “Register Payment” popup will appear for payment details.

  
**Feature Details**

[Feature Guide - Patient Billing and Accounting](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604217/Patient+Billing+and+Accounting) 
 
**Implementation Details**

[Implementer's Guide - Odoo modules - Odoo Sales Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration)
