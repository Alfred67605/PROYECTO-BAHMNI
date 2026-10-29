---
id: "1177354370"
title: "Refunding the Invoice"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1177354370/refunding-the-invoice"
version: 4
updated: "2020-04-01T11:29:27.547Z"
author: "Arun Paul"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:45.317Z"
---

# Refunding the Invoice

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1177354370)  
> **Versión del documento:** v4 (2020-04-01T11:29:27.547Z) | **Autor/Editor:** Arun Paul

---

## About the Feature

Invoice created for a service such as registration fees or consultation fees can be refunded back through “Refund Invoice” feature in Odoo. This feature is used by hospital receptionist, front desk or any authorised billing clerk in the hospital.

To refund invoice of a stockable product such as drug or consumable the steps are a bit different because it involves return of the products as well. Refer to [Returning the delivered medicine and Refunding the Invoice](/wiki/spaces/BAH/pages/1177190402/Returning+the+delivered+medicine+and+Refunding+the+Invoice) 

The following steps and screenshots are explained as per Odoo 10, available on Bahmni 0.92 release.

## How is it Used?

- 
To refund the invoice, click on the “Invoices” button appearing at the top right side of the screen for a confirmed sales order in Odoo.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177354370/image-20200401-085542.png?version=1&modificationDate=1585731344342&cacheVersion=1&api=v2)

- Click on the “Refund Invoice” button appearing at the top left side of the screen.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177354370/image-20200401-090004.png?version=1&modificationDate=1585731607742&cacheVersion=1&api=v2)

- Select the desired “Refund Method” in the “Refund Invoice” popup.

- 
Enter the Refund Reason and Date in the respective fields accordingly and click on the “Create Refund” button at the bottom left side of the popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177354370/image-20200401-090418.png?version=1&modificationDate=1585731861320&cacheVersion=1&api=v2)

- Open the Draft Refund record, click on the “Validate” button appearing at the top right side of the screen and then click on the “Register Payment” button.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177354370/image-20200401-090809.png?version=1&modificationDate=1585732092768&cacheVersion=1&api=v2)

- Select the Payment Journal and enter the Payment Amount in the respective fields under “Register Payment” popup and then click on “Validate” button appearing at the bottom left side of the popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/1177354370/image-20200401-091253.png?version=1&modificationDate=1585732376470&cacheVersion=1&api=v2)

- You can print the Refund Invoice by clicking the “Print” button and selecting the “Invoices” option.

  
**Feature Details**

[Feature Guide - Patient Billing and Accounting](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604217/Patient+Billing+and+Accounting) 
 
**Implementation Details**

[Implementer's Guide - Odoo modules - Odoo Sales Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration)
