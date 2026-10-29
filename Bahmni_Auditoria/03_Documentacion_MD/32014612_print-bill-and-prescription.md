---
id: "32014612"
title: "Print Bill and Prescription"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014612/print-bill-and-prescription"
version: 7
updated: "2020-04-20T15:14:37.215Z"
author: "Rahul Kumrawat"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:44.329Z"
---

# Print Bill and Prescription

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014612)  
> **Versión del documento:** v7 (2020-04-20T15:14:37.215Z) | **Autor/Editor:** Rahul Kumrawat

---

The following steps and screenshots are explained as per **Odoo 10**, available on **Bahmni 0.92** release.

### 1. Search a confirmed sale order and Print the Invoice in Odoo

- 
Go to “Sales Order” screen under “Sales” section from “Sales” menu in “Odoo”.**
![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/image2020-4-20_20-43-18.png?version=1&modificationDate=1587395600890&cacheVersion=1&api=v2)

- 
Search a desired confirmed sale order record and click on the same to view the details.

- If the invoice has already been created for the order, an "Invoices" icon/button will appear in the top right corner of the screen.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/image2020-4-20_20-34-18.png?version=1&modificationDate=1587395060989&cacheVersion=1&api=v2)

- Click on the "Invoices" icon/button to view the Invoice Details
- Now to print the Invoice/Bill, click on "Print" button appearing at the top of the screen and chose "Invoices" option from the drop down.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/image2020-4-20_20-29-46.png?version=1&modificationDate=1587394788667&cacheVersion=1&api=v2)
- This will download the Invoice in PDF format as shown in below screenshot.![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/image2020-4-20_20-20-52.png?version=1&modificationDate=1587394255319&cacheVersion=1&api=v2)

 
The following steps and screenshots are explained as per **OpenERP**, available on releases before **Bahmni 0.92**.

**1. Login to OpenERP application**

Click on “Sales” from the top menu. Choose “Quotations” from the left panel.

If the bahmni-erp-connect service is running and the OpenMRS to ERP sync is functional, then the screen will display the patient in the list for whom medications and test were orders as in screenshot below.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/Screen%20Shot%202017-06-18%20at%2011.05.04%20PM.png?version=1&modificationDate=1497808798763&cacheVersion=1&api=v2)

2. Select “Sales Order” from the left panel a display as in screenshot below is presented.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/Screen%20Shot%202017-06-18%20at%2011.28.30%20PM.png?version=1&modificationDate=1497808810005&cacheVersion=1&api=v2)

3. Select the patient from the list to “View Invoice”.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/Screen%20Shot%202017-06-18%20at%2011.28.48%20PM.png?version=1&modificationDate=1497808811049&cacheVersion=1&api=v2)

4. From the “View Invoice” screen choose “Print Invoice” to print the bill for the customer.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014612/Screen%20Shot%202017-06-18%20at%2011.29.11%20PM.png?version=1&modificationDate=1497808811998&cacheVersion=1&api=v2)

Related Links**

 

- [Manage Orders](/wiki/spaces/BAH/pages/32014614/Manage+Orders)
- [Print Bill and Prescription](/wiki/spaces/BAH/pages/32014612/Print+Bill+and+Prescription)
- [Manual Billing - Creating Quotation in Odoo](/wiki/spaces/BAH/pages/1177321536/Manual+Billing+-+Creating+Quotation+in+Odoo)
- [Refunding the Invoice](/wiki/spaces/BAH/pages/1177354370/Refunding+the+Invoice)

 

**Feature Details**

[Billing and Accounting - Feature Guide](/wiki/spaces/BAH/pages/32604217/Patient+Billing+and+Accounting)

**Implementation Details**

[Billing and Accounting - Implementer's Guide](/wiki/spaces/BAH/pages/32604219/Accounting+Configuration) (OpenERP7)

[Accounting Configuration - Implementer's Guide](/wiki/spaces/BAH/pages/900530219/Odoo+Accounting+Configuration) (Odoo)

[Sales Configuration - Implementer's Guide](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration) (Odoo)
