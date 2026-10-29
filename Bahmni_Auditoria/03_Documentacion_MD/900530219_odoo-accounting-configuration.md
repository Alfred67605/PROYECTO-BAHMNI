---
id: "900530219"
title: "Odoo Accounting Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530219/odoo-accounting-configuration"
version: 12
updated: "2024-08-12T15:46:10.172Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:14.424Z"
---

# Odoo Accounting Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530219)  
> **Versión del documento:** v12 (2024-08-12T15:46:10.172Z) | **Autor/Editor:** Mohankumar Thangavel

---

Before you register any sale, purchase any products, or do anything finance relevant, we suggest that you setup accounting first. Even if you are not managing your finance and accounting in Odoo, we would still recommend that for basic correctness of transactions for billing/purchasing, you setup accounting with a bare minimum Chart of Account, define Currencies etc. 

This section only tries to cover the bare minimum configuration for getting Odoo setup and functional with Bahmni systems.
 
Odoo 16 Accounting Module is not included in the Community version by default. Therefore, a community module has been incorporated as an optional add-on to the bahmni/odoo-16 docker image for implementers to install and test. It is strongly advised to install the module and assess its suitability for your implementation.**
**Note:** The module is a Odoo community module and not maintained by Bahmni community.

# Setup

You need to setup accounting to reflect your implementation and appropriate to your country's regulations/schedules. Bahmni demonstration websites has the accounting configured by means of an addon app (India - Schedule VI accounting). 

- 
Go to the "Menu / Apps", remove the "apps" filter, and search for “Accounting” or “<your country>” (e.g. Accounting, Indian, Kenya, Accounting etc). We have "Indian - Schedule VI Accounting" app installed on demo sites. If you plan to manage accounting in Odoo, you should consult with your implementation, and look for country specific app/module on Odoo website or custom define yourself.  

- 
Usually, after installing such an app/module, your system will have basic accounts chart setup with types like Payable, Receivable, Income, Expense, Liabilities, Assets, Bank And Cash etc, ready. These would be ready for use in  Customers and Vendors form, and also you can post the accounting entries with invoices.

Go to “Menu / Accounting / Configuration / Settings” and check the “Chart of Accounts”. You might have to install from templates, the dropdown should show you options.  

# Chart of accounts

As explained above, if you have installed a local accounting module, it will setup sensible default, but you should make sure that the COA reflects your implementation needs. 

# Chart of accounts hierarchy

Odoo accounting by default does not provide a hierarchical CoA. If you need a hierarchy of accounts, look for so, in the Odoo website / app store. 
 Odoo 10 Reference Links
For example: [This module](https://apps.odoo.com/apps/modules/10.0/chart_of_account_hierarchy/) provides a simple CoA Hierarchy, but does not provide a view or report as such. This module needs to be downloaded and installed the same way 'Web preview' module was installed, as explained in the [System Configuration](/wiki/spaces/BAH/pages/900530238/Odoo+10+System+Configuration) page, see section "Installing add-on Apps or Modules" 

# Currencies

Go to `Menu -> Settings -> Invoicing -> Currencies`

- 
Set the Main Currency for your company

- 
Click on the Currencies link to enable the required currencies.

![](https://bahmni.atlassian.net/wiki/download/attachments/900530219/image-20240812-154529.png?version=1&modificationDate=1723477536232&cacheVersion=1&api=v2)
 

 Odoo 10 Currency Configuration
Go to "Menu / Accounting / Configuration / Settings" 

- 
Accounting & Finance: Ensure “Default Company Currency” is set appropriately. (e.g INR)

- 
Multiple Currencies: Enable configuration for “**allow multiple currencies**” if needed. 

# Fiscal Year
For Odoo 16 refer to the accounting module that you are installing and its configurations

For Odoo 10, Go to "Menu / Accounting / Settings"

- 
Fiscal Year: specify the “Fiscal Year Last Day” applicable (e.g. For India: 31 March). 

# Discount Accounts
If you would like to give discounts, you would probably want to configure accounts specific for discounts

Go to "Menu / Accounting / Chart of Accounts /" and click create

- 
Specify Account Code (e.g. 800100, you may want to check what code prefix or numbers you should assign)  

- 
Name : Discounts

- 
Account Type : Expense

- 
Account currency : [ default currency ] (e.g. INR)

If you have installed an app that supports hierarchy, you may want to configure specific discount accounts, like below

- 
Account Name : WHO Cancer FUND

- 
Parent : Discounts

- 
Account Type - Expense

 
### On this Page
 Related Links**
[Odoo 10 Accounting Documentation](https://www.odoo.com/documentation/user/10.0/accounting.html) (Odoo.com)

[Example - defining a CoA](https://www.youtube.com/watch?v=dusZw9f64qM)(Youtube)

[Odoo documentation - Fiscal Year](https://www.odoo.com/documentation/user/10.0/accounting/others/adviser/fiscalyear.html)

[Odoo 16 Accounting](https://bahmni.atlassian.net/wiki/pages/resumedraft.action?draftId=900530219) (Community Page)
