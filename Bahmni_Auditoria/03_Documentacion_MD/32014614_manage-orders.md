---
id: "32014614"
title: "Manage Orders"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014614/manage-orders"
version: 17
updated: "2019-08-14T13:53:54.038Z"
author: "Angshuman Sarkar"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:43.769Z"
---

# Manage Orders

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014614)  
> **Versión del documento:** v17 (2019-08-14T13:53:54.038Z) | **Autor/Editor:** Angshuman Sarkar

---

# View Sale Orders
 
The Orders/Quotations that appear in ERP as shown below have to first be ordered by the provider using [these steps](/wiki/spaces/BAH/pages/115217943/Order+Medications+and+or+Tests).

In ERP application (Odoo or OpenERP) go to “Sales” from the top menu, and “Quotations” from the left panel.

**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014614/Odoo_Customer_Quotations_list.png?version=1&modificationDate=1565782395752&cacheVersion=1&api=v2)

(For the above to appear on ERP side, `bahmni-erp-connect` service needs to be running and the OpenMRS to ERP sync is functional).

# Add Discounts or Pay in Instalments

Select a quotation for a patient, and then click on “Edit”  to add or modify the contents of the bill as in screenshot below. 

Discount on Order lines
 
From Bahmni 0.92 onwards, ERP functions are handled by Odoo 10, where you can even mention discount at line level. See [Odoo Sales Configuration](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration) for more info

The quotations can also be edited to accommodate discounts.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014614/Odoo_Customer_Quotation_Fixed_Discount.png?version=1&modificationDate=1565786527744&cacheVersion=1&api=v2)

See below for OpenERP7 specific view. 
 OpenERP7 View
![](https://bahmni.atlassian.net/wiki/download/attachments/32014614/Screen%20Shot%202017-06-18%20at%2011.06.49%20PM.png?version=1&modificationDate=1497807816336&cacheVersion=1&api=v2)

# Confirm Order

Select the quotation, click on “Confirm Sale” to proceed towards payment. Once the order is Confirmed edits are no longer possible. 

Once sale is confirmed, a delivery order (for any stockable line item) will be created. You can then create invoice and register payment. 

Odoo 10
 
Bahmni Odoo extensions (for v0.92) provide several enhancements to provide "Auto confirmation of Delivery", "Skipping Invoice Options", "Determination of Sale Price based on purchase price markups" etc.  Please refer to the [Odoo Sales Configuration](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration) page for more details on such options. 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014614/Odoo_Register_Invoice_Payment.png?version=1&modificationDate=1565787121023&cacheVersion=1&api=v2)

See below for OpenERP7 specific view. 
 OpenERP7 View
![](https://bahmni.atlassian.net/wiki/download/attachments/32014614/Screen%20Shot%202017-06-18%20at%2011.08.00%20PM.png?version=1&modificationDate=1497807817320&cacheVersion=1&api=v2)

On this Page
 
 
 
 
Related Links**

[Print Bill and Prescription](/wiki/spaces/BAH/pages/32014612/Print+Bill+and+Prescription)

**Feature Details**

[Billing and Accounting - Feature Guide](/wiki/spaces/BAH/pages/32604217/Patient+Billing+and+Accounting)

**Implementation Details**

[Billing and Accounting - Implementer's Guide](/wiki/spaces/BAH/pages/32604219/Accounting+Configuration) (OpenERP7)

[Accounting Configuration - Implementer's Guide](/wiki/spaces/BAH/pages/900530219/Odoo+Accounting+Configuration) (Odoo)

[Sales Configuration - Implementer's Guide](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration) (Odoo)
