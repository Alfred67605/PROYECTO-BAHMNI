---
id: "21790747"
title: "OpenERP Basic Configurations"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/21790747/openerp-basic-configurations"
version: 11
updated: "2019-01-29T07:59:18.686Z"
author: "Sanjaya Poudel"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:56.320Z"
---

# OpenERP Basic Configurations

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/21790747)  
> **Versión del documento:** v11 (2019-01-29T07:59:18.686Z) | **Autor/Editor:** Sanjaya Poudel

---

## Steps

Post installation of [Bahmni with OpenERP](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=35291242#InstallBahmnionCentOS(AdvancedInstallationOptions)-Step5:SetupdeploymentConfiguration), the following configuration steps need to be done to get the Pharmacy, Billing & Accounting and Inventory Modules setup

1. Remove the line "`update --all`" from the "`sudo vi /etc/init.d/openerp`" file.

2. Install the following Modules

-   Warehouse Management Module 
-   Sales Management Module
-   Purchase Management Module 
-   Accounting and Finance Module 
-   SEARCH Reports Module (if you want these Accounting reports)

When asked about the Financial Account system choose: (INR, 0, 0, Indian Account System)

3.  Enable the following in Setting → config → warehouse :

- Track Serial Number on Products
- Expiry Date on Serial Number
- Manage Multiple Location
- Manage different unit of measures on Products

3) Settings → config → General Settings -> Allow user to import data from CSV files

4) Settings → Users → Administrator choose (Edit) — Access rights → enable Technical Features.

5) Logout from OpenERP and then re-Login

6) Go to Settings → Modules → Update Module List (Updated)

7) Restart OpenERP: '`sudo service openerp stop`', and then '`sudo service openerp start`*'*

8) Install the following modules required for Bahmni. Just search with the given name and install them.

- `base`
- `auth_crypt`
- `product`
- `account`
- `account_voucher`
- `purchase`
- `account_accountant`
- `stock`
- `sale`
- `sale_stock`
- `purchase`
- `product_expiry`
- `bahmni_web_extensions`
- `bahmni_pharmacy_product`
- `bahmni_stock_batch_sale_price`
- `bahmni_sale_discount`
- `bahmni_customer_payment`
- `bahmni_internal_stock_move`

**9) Uninstall Bahmni Logger. Ensure these are also installed:

- Bahmni Purchase flow enhancement
- Bahmni Print Bill
- Don't install Bahmni Seed Data install (Since it is JSS specific)
- Don’t install Lab seed data
- Don’t install DHIS2 stock export

10) Go to Settings → Companies → Edit and add your hospital details: name, logo, address, etc.

11) Go to Warehouse → Configurations/Warehouses → Edit/Add a warehouse (keep settings default).

12) Go to Sales → Shop → Edit/Add your shop (and choose Warehouse). Shop name must be "Pharmacy".

13) To add a Billing User, go to Settings -> Users -> Add User.

Give access rights to:

-  Sales: Manager Warehouse: `None` or `User` (One of the authorization: Warehouse or Purchases Needs to be `User` to make bills) 
- Account & Finance: Accountant Purchases: `None` or `User` (One of the authorization: Warehouse or Purchases Needs to be User to make bills) 
- Human Resources: Employee 
- Sharing: Blank
- Administration: Blank

14) In Technical settings change:

- Manage Multiple Units of Measure 
- Manage Serial Numbers Enabled adding final SaleOrder charge 
- Manage Multiple Locations and Warehouses

14) Go to to Sales > Configuration > Products (Drop Down) > Product Categories. Create a product category named "Drug" under "All products / Saleable". 

Related Pages**

 

- [OpenERP Basic Configurations](/wiki/spaces/BAH/pages/21790747/OpenERP+Basic+Configurations)
- [OpenERP Syncing Config](/wiki/spaces/BAH/pages/114627969/OpenERP+Syncing+Config)
- [OpenERP Custom fields](/wiki/spaces/BAH/pages/28311588/OpenERP+Custom+fields)
- [OpenERP Custom Filters](/wiki/spaces/BAH/pages/5570574/OpenERP+Custom+Filters)
