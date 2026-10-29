---
id: "900464675"
title: "Odoo Sales Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900464675/odoo-sales-configuration"
version: 18
updated: "2024-08-13T03:17:35.617Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:13.454Z"
---

# Odoo Sales Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900464675)  
> **Versión del documento:** v18 (2024-08-13T03:17:35.617Z) | **Autor/Editor:** Mohankumar Thangavel

---

Bahmni provides addOns that enable and enhance sales, delivery, invoicing features of Odoo. e.g automatic quotation generation, pricing determinations for medications, delivery automation etc. In addition, Bahmni also tries to provide convenient features, optimizations etc, and tries to do so non-intrusively and without changing core Odoo process/workflows. 

Before you start registering sale, you should setup and configure your sales settings first.

Go to "Menu / Sales/ Configuration / Settings" and review configuration relevant for products, pricing, customer, sales, shipping etc. For example, you might want to enable "Allow discounts on sales order lines" for discounts settings. 

The default Odoo workflow for finalizing a sales transaction for a deliverable consists of a two-step process. The initial step involves confirming the quotation, confirming the delivery order, while the subsequent step involves posting the invoice and recording a payment for the invoice.

In most implementations, the entire process typically occurs at a pharmacy and is often handled by one or two users. To streamline these steps, automation can be achieved by activating specific toggles integrated through custom module extensions. Below, you will find detailed descriptions of Bahmni's pertinent features, setups, and configurations.

From Odoo 16, all of these configurations can be found at `Menu -> Settings -> Bahmni`
![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-021211.png?version=1&modificationDate=1723515137366&cacheVersion=1&api=v2)

 On this Page
 
**Related Links**
[Odoo 10 documentation - Product, Pricing](https://www.odoo.com/documentation/user/10.0/sales/products_prices/prices/pricing.html)

[Odoo 16 Sales Documentation](https://www.odoo.com/documentation/16.0/applications/sales/sales.html)

# Order Types
These reflect the different Order types from Bahmni Clinical Systems. Currently Bahmni supports syncing of the following Order Types

- 
Drug Order

- 
Lab Order

- 
Radiology Order

Orders are processed for matching order types. If a matching order&rsquo;s &ldquo;Order type&rdquo; is not found in Odoo, that particular order will be skipped. You can find out the order type names in OpenMRS database using the following query

```
$ mysql -uroot -p
 openmrs 
> select name from order_type;
```

Corresponding the Order Type names discovered above, you need to create corresponding Order Types in Odoo. To do that:

- 
In Odoo 16, Go to Menu &rarr; Bahmni &rarr; Bahmni Masters &rarr; Order Type

- 
In Odoo 10, Go to "Menu / Sales / Configuration /Order Types"

- 
Create the Order Types if not already present.  

***Note:*** The Order Type names must match **exactly** (casing, spaces etc) correspond to the Order Types defined in OpenMRS. 

# Shop

&ldquo;Shops&rdquo; help to specify stock locations by billing stations/counters, also so that the inventory can be managed well in Odoo, and also to define default payment terms and price list association. This is achieved by mapping stock login location to shops. The quotation gets created for the shop (e.g. OPD Billing) that is mapped to the stock location (OPD Pharmacy) from where the drug is delivered/dispensed from. 

To define shops, Goto Menu &rarr; Bahmni &rarr; Bahmni Masters &rarr; Shop for Odoo 16 (or) go to "Menu / Sales / Configuration / Shop" for Odoo 10.

For example, to create a OPD Billing Shop, create as shop as below: 

- 
Shop Name = OPD Billing. (Similarly consider creating other shops like &ldquo;IPD Pharmacy&rdquo; or &ldquo;Special Billing&rdquo; etc).

- 
Specify Warehouse = Main WH (Select the warehouse where your stocks are managed) 

- 
Location = WH/OPD Pharmacy (Select the Internal stock location wherefrom products will be delivered) 

- 
Default Payment Term : Immediate Payment (select from dropdown)

- 
Pricelist = Select or a create price list applicable at this shop. If you specify a pricelist, then the pricelist will be associated and potentially form the basis for sale price, if products are associated with this pricelist. *(Note: This will be available only when Advanced Pricelist feature is enabled in Sales settings)*

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Odoo_Shop_Special_Discounted_Billing.png?version=1&modificationDate=1565368955097&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-022304.png?version=1&modificationDate=1723515788126&cacheVersion=1&api=v2)

# Order Type - Shop Mapping
Once you have defined &ldquo;Order Types&rdquo; and "Shops", you should then go about configuring what types of orders are processed where and what stock location any drugs/consumables will be delivered from. This is done through Order Type & Shop mapping, and this mapping can be further associated with the orderer's location, i.e where a care provider orders from. 

- 
***For Odoo 16, ***Go to Menu &rarr; Bahmni &rarr; Bahmni Masters &rarr; Order Type - Shop mapping

- 
***For Odoo 10,*** Go to "Menu / Sales / Configuration / Order Type - Shop mapping".  

You should start from default mappings and then go about defining more specific maps corresponding to orderer's location. 

Add entries as below:

- 
Order Type = select from dropdown

- 
Shop = select from dropdown. 

- 
Location Name = select stock location from drop down. This gets defaulted when you choose a shop and if that shop has an associated stock location, but you can mention a different stock location here. 

- 
Order Location Name = type in the &ldquo;order location&rdquo; name.  Orderer's location corresponds to Login location in Bahmni Clinical.  

Suppose, you have 2 shops (stations or counters), "OPD Billing", "IPD BIlling" associated with stock locations "OPD Pharmacy", "IPD Pharmacy" respectively, you may want to start as follows. 

- 
By default, all orders of all types be be processed at 'OPD Billing' where 'OPD Pharmacy' would be the default stock location for delivery.

- 
If ordered from 'General Ward' or 'Labour Ward' or 'Operation Theatre' - to be processed at 'IPD Billing', where 'IPD Pharmacy' would be the default stock location for delivery.

You can even split the 'Order Types' to be processed by different shops and to be delivered from different locations. For example: You can setup a mapping such that &ldquo;Drug Order&rdquo; by a doctor from &ldquo;Special OPD&rdquo; login location,  should be processed at &ldquo;Special Billing&rdquo; shop and delivered from local stock room where &ldquo;Doctor's Samples Stock&rdquo;. (And while defining "Special Billing" shop, maybe you have associated a "Discounted Price List" - then a different pricing can be applied)

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Odoo_Order_Type_Shop_Mapping_Example.png?version=1&modificationDate=1565433671144&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-023405.png?version=1&modificationDate=1723516450700&cacheVersion=1&api=v2)

When a care provider orders drugs, lab tests or radiology tests or procedures,  corresponding orders are raised from OpenMRS. While these orders are processed, Bahmni tries to first an Order type matching 'Order Location Name' and 'Order Type', if not then it would identify the first matching mapping for the 'Order Type'.

 ***Note: If an Order Type shop mapping is not provided for a specific Order Type then the first shop defined is used for creating the specific sale quotation.***

# Syncable Units Mapping
This is used for synchronizing ordered quantity units from OpenMRS to Odoo. It is also important to define the required Unit Of Measures under proper categories in Odoo with correct ratio to have efficient stock tracking. Also remember to update the UoM for the product before adding any stock entries.

### In OpenMRS, verify the list of units available

Order quantity units are specified via the *Dosing Units* concept set in OpenMRS

- 
Go to the OpenMRS concept dictionary and search for &ldquo;Dosing Units&rdquo;

- 
Click the result entry, which would show the "Dosing Units" concepts and all its associated "Set Members"

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Screenshot%202021-03-17%20at%2016.21.41.png?version=2&modificationDate=1616597566633&cacheVersion=1&api=v2)
### In Odoo, activate the extended support for Units

First the extended support units must be activated in Odoo by clicking the appropriate setting:

Navigate to Menu &rarr; Settings &rarr; Sales, and enable the `Unit of Measure` toggle.
![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-023941.png?version=1&modificationDate=1723516785267&cacheVersion=1&api=v2) UoM Configuration in Odoo 10
As a system developer role, go to "Menu / Sales / Configuration / Settings" and tick: `Some products may be sold/purchased in different units of measure (advanced)`
![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Screenshot%202021-03-24%20at%2015.53.33.png?version=1&modificationDate=1616597646146&cacheVersion=1&api=v2)
### In Odoo, set the mappings between OpenMRS Units and Odoo Units

- 
***For Odoo 16, ***Go to Menu &rarr; Bahmni &rarr; Bahmni Masters &rarr; Syncable Units Mapping

- 
***For Odoo 10,*** Go to "Menu / Sales / Configuration / Syncable Units Mapping".  

Create entries that match the OpenMRS quantity units with **exactly the concept FSN** (in the default locale) and associate to it the equivalent found from Odoo. Create the Odoo unit if needed.

For instance:

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Screenshot%202021-03-24%20at%2015.49.46.png?version=1&modificationDate=1616597407810&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-024527.png?version=1&modificationDate=1723517132107&cacheVersion=1&api=v2)

### In Odoo, update the product units to match their stocking unit
Make sure to also update your products units to their stocking unit. Note that they do not have to exactly match the ordering units from OpenMRS, but they must be **in the same Unit Of Measure Category**, such as Volume, Length, Weight...

For instance:

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Screenshot%202021-03-24%20at%2015.57.13.png?version=1&modificationDate=1616597941701&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-025219.png?version=1&modificationDate=1723517544230&cacheVersion=1&api=v2)

# Sale Price for Products
Odoo provides multiple ways to define sale price(s) of a product. Even at specific product level, you can define different options. A comprehensive guide to pricing is beyond our scope, so only the essence is covered here. You should checkout Odoo webinars for pricing and sales. 

- 
***For Odoo 16, ***Go to Menu &rarr; Settings &rarr; Sales &rarr; Pricing and enable `Pricelists` toggle.

- 
***For Odoo 10,*** Go to &ldquo;Menu / Sales / Configuration / Settings&rdquo;, and check pricing options.  

In addition, Bahmni allows an addon with which you can define a markup percentage over cost price to arrive at sale price. This feature is applicable for products which have tracking enabled (lots/serial number). While receiving products, sale prices are calculated based on the markup percentage defined for product cost price. See "Price Markup" Section in ["Odoo Purchase Configuration"](/wiki/spaces/BAH/pages/900497457/Odoo+Purchase+Configuration). If markup configuration is enabled, within a quotation/sale order, if you select a lot/serial for a product, the markup based sale price will be applied.  

Eventually the 'Unit price' that is applied at a line item in a Quotation/Sale order, is arrived in the following order, based on configuration and setup:

- 
Basic Product Single Sale Price

- 
Price list based Sale Price - if such a pricelist is applied on a quotation

- 
Cost Markup based Sale price - if &ldquo;**Sale Price Markup Rule**&rdquo; configuration is enabled. 

 

# Validate delivery when sale is confirmed

By default, whenever a "sale order" is confirmed, Odoo will create &ldquo;delivery orders&rdquo; to be processed. Often, there are scenarios, where the dispension happens from the same place as 'billing' (e.g. a pharmacy in a small hospital) and if you would want to simplify and activate through a single workflow, you  may choose to enable automatic validation of delivery order. 

- 
***For Odoo 16, ***Go to Menu &rarr; Settings &rarr; Bahmni &rarr; Sale Configurations and enable the `Enable auto delivery on sale order confirm action` toggle

- 
***For Odoo 10,*** Go to &ldquo;Menu / Sale / Configuration / Settings&rdquo; and enable the configuration element.   

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Odoo_Configure_Sales_Validate_Delivery_Option.png?version=1&modificationDate=1565436847637&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-025801.png?version=1&modificationDate=1723517885837&cacheVersion=1&api=v2)

If the &ldquo;Validate delivery when order confirmed&rdquo; is not enabled, then the default process of &ldquo;Delivery Order&rdquo; creation is followed, meaning then you will need to go to &ldquo;Menu / Inventory / Delivery Orders&rdquo; and manually validate the delivery order for the sale.  

# Invoicing Option

Once a order is confirmed, you can click "Create Invoice" button, and Odoo default flow will show different invoicing options . 

- 
**Invoiceable lines/Invoiceable lines (deduct down payments)**: Choose this option if you both want to invoice the lines and deduct any down payments you have received. This is the default option. 

- 
Using **Invoiceable lines** without deducting down payments will simply ignore any of those payments when producing the invoice.

- 
**Down payment (percentage)**: You will be prompted to enter the percentage amount of the down payment.

- 
**Down payment (fixed amount)**: You will be prompted to enter a fixed amount for the down payment.

Once you choose an invoice option, you will have to go through the process of confirming the invoice, and registering payment. 

If your implementation does not have different multiple invoicing options like above, then it might make sense for you to skip the invoice options.

To enable automatic invoice creation and posting

- 
Go to Menu &rarr; Settings &rarr; Bahmni &rarr; Sale Configurations and enable the `Enable auto invoice on sale order confirm action` toggle

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/image-20240813-030527.png?version=1&modificationDate=1723518332595&cacheVersion=1&api=v2)
 

 Odoo 10 Invoicing Process Automation
You can do this by configuring a user level settings. 

Go to "Menu / Settings / Users /", edit an user from the list, and under "Technical Settings", check for
![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Odoo_Skip_Invoice_Option_For_User.png?version=2&modificationDate=1565438241891&cacheVersion=1&api=v2)
 

There is also a configuration which can be done at the User level to automatically redirect to Payments page on confirming a sale order. In order to enable the configuration, 

- 
Enable Developer Mode. This can be done by adding `?debug=1` to the URL param. Example: [http://localhost:8069/web?debug=1](http://localhost:8069/web?debug=1)

- 
Navigate to Menu &rarr; Settings &rarr; Users & Companies &rarr; Users

- 
Select the User for which the config needs to be enabled.

- 
Scroll down to the `Technical` section and Enable `Redirect to Payments on Sale Order Confirmation` toggle.

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Screenshot%202024-08-13%20at%208.45.47%E2%80%AFAM.png?version=1&modificationDate=1723519025848&cacheVersion=1&api=v2)
 

Once you have enabled this configuration for a user, then when the user confirms a sale, then it will automate the Invoice option and generation and validation process, and directly take the user to register the payment. 

- 
User Confirms Sale Order.

- 
Invoice will be created and validated automatically. The default is &ldquo;invoiceable lines&rdquo; (deduct down payments). 

- 
Register Payment screen will appear in front of user so she can simply fill the amount.

# Allowing Negative Stock
 
This is by default allowed in Odoo 16. When the products are tracked by lots, then the system will throw an error on Sale Order confirmation

In the process above, delivery orders will not be automatically validated if there is not enough stock at the specified stock location mentioned in the &ldquo;sale order&rdquo;.  If you want to force negative stock in the process, you need to enable the confirmation &ldquo;Allow negative stock&rdquo; as shown in the screenshot above. Note, if the product is tracked in lots/Serial No, then on unavailability of stock, this would not be satisfied, and the delivery order will not be marked as 'Done' and will require manual intervention. 

# Medication Dispensing Setup
 
Note: This feature is available only till Odoo 10 integration. It is not yet available on Odoo 16.

This feature is useful when the care provider himself/herself dispenses medicine during consultation and wants the inventory and payments to be automated as well. This is useful in small or single doctor clinics, where the care provider dispenses medicines, receives payment after the consultation - while in the system automating sale, delivery, order, payment etc  

This feature works in conjunction with Bahmni order features in clinical apps, and in relevant for medications and consumables. Whenever a medication is marked as dispensed (e.g. D button against a medication order in Bahmni Clinical) by a provider, depending on configuration and settings, you may automate the following 

- 
Confirm sale order for the dispensed drugs/medications

- 
Validate delivery of product to customers, and inventory adjustments at dispensed stock locations

- 
Generate Invoice for the dispensed drugs/medications

- 
Register payment for the generated invoice

To do so, you need to enable the following configuration is &ldquo;Menu / Sales / Configuration / Settings&rdquo;

![](https://bahmni.atlassian.net/wiki/download/attachments/900464675/Odoo_Configure_Sale_Dispension.png?version=1&modificationDate=1565441037451&cacheVersion=1&api=v2)
- **&ldquo;Allow to automatically convert quotation to sale order if drug is dispensed from local shop&rdquo;**: will enable &ldquo;Confirmation of Sale&rdquo; and &ldquo;Validation of Delivery of Product&rdquo; (1 & 2) above. 

- 
**&ldquo;Automatically register payment for dispensed order invoice&rdquo;**: will enable auto generation of invoice for the dispensed products and subsequently register payment (in cash) for the invoices.

Note, this feature does not auto validate delivery of medications if medication is tracked by Lots/Serial No. So such medications delivery orders will be in "Partially Available", "Available" status, and will require manual reconciliation. Also, there is no provision of partial dispense of medications for an order.
