---
id: "900530225"
title: "Odoo Inventory Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530225/odoo-inventory-configuration"
version: 12
updated: "2024-08-12T16:10:55.966Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:14.937Z"
---

# Odoo Inventory Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530225)  
> **Versión del documento:** v12 (2024-08-12T16:10:55.966Z) | **Autor/Editor:** Mohankumar Thangavel

---

This page describes Odoo inventory relevant setup and configuration, following which you can effectively manage inventory integrated with Bahmni Clinical features.    

# Warehouse & Locations

In Odoo 16, Storage Location tracking needs to be enabled. The same can be enabled or disabled from `Menu -> Settings -> Inventory -> Warehouse`. In the screen enable the Storage Locations toggle to track stock by locations.
![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/image-20240812-155927.png?version=1&modificationDate=1723478375162&cacheVersion=1&api=v2)
 Odoo 10 Warehouse and Location ConfigurationGo to "Menu / Inventory / Configuration / Settings", and find setting for &ldquo;Location & Warehouse&rdquo;. Check for configuration element **"Warehouses and Locations usage level"** and choose your option.

- 
Manage only 1 Warehouse with only 1 stock location - this is the simplest of setup

- 
Manage only 1 Warehouse, composed by several stock locations - our examples in WIKI, assumes such a setup. 

- 
Manage several Warehouses, each one composed by several stock locations - for advanced and more complicated setup. 

If you have chosen multiple warehouse/locations, you should see it reflect under your &ldquo;Inventory&rdquo; landing page. 

You can define different &ldquo;Internal&rdquo; inventory locations like "Main Stock Room", &ldquo;OPD Pharmacy&rdquo;, &ldquo;IPD Pharmacy&rdquo;, &ldquo;Procedure Room&rdquo;, "Samples Stock" under the a warehouse**. **So the hierarchy may be

- 
WH (Warehouse Name)

WH/Stock = the main stock room (this would be created by default, usually). 

- 
WH/OPD Pharmacy   = OPD Pharmacy stock room

- 
WH/IPD Pharmacy     = IPD Pharmacy stock room

- 
WH/Procedure Room = Surgery Stock Room

- 
WH/Samples Stock    = Maybe Doctor's received samples stock room where doctors may give away meds at his/her discretion.  

You can setup Warehouses and Locations by accessing configuration of Inventory module at `Menu -> Inventory -> Configuration`
![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/image-20240812-160048.png?version=1&modificationDate=1723478453447&cacheVersion=1&api=v2)

# Product Relevant Configuration
Go to "Menu / Inventory / Configuration / Settings". The most relevant configurations are described below, but you should review other configuration elements that might apply for your implementation

## Traceability Settings

- 
Enable **&ldquo;Track lots or serial numbers&rdquo;. **This will enable product tracking by lot or serial number, which is relevant for medications or other consumables. Note: You may still decide to have &ldquo;no tracking&rdquo; (by lots/serial number) at individual product level. 

- 
Enable **&ldquo;Expiration Dates&rdquo; **to specify expiration for each serial numbers

![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/image-20240812-160149.png?version=1&modificationDate=1723478513873&cacheVersion=1&api=v2)

## Products Settings

- **&ldquo;Units of Measure&rdquo; :** Choose &ldquo;Some products may be sold/purchased in different units of measure (advanced)&rdquo;.  

You should be able to see some predefined &ldquo;Units of Measure&rdquo; already present under "Configuration / Units of measure" menu. 

- 
**"Product Variants": **choose option "No variants" or "Products can have several attributes, defining variants" as applicable.

## Product Categories

Go to "Menu / Inventory / Configuration / Products / Product Categories".

- 
You should see some predefined category hierarchy. for example: you may want to create a category called &ldquo;Fees and Charges&rdquo; under &ldquo;All / Services&rdquo; for any type of Service that you may define, like Specialist Fee, Minor Dressing Fee etc. 

- 
You may also want to re-organize the product categories in hierarchies. Typically, the product categories are hierarchized as "All / Saleable" and "All / Services". Your category hierarchy may look like below 

![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/image-20240812-160437.png?version=1&modificationDate=1723478682329&cacheVersion=1&api=v2)
## Individual Product Specification

Once the products are synchronized from OpenMRS, you may want to configure each products.  

Go to &ldquo;Menu / Inventory / Products&rdquo; and search for a product and edit. e.g &ldquo;Ibuprofen 400mg&rdquo;

- 
Usually, Drugs etc will be synced as product type &ldquo;Saleable Product&rdquo; that can be stocked, and Lab tests/Radiology tests etc will be synced as &ldquo;Service&rdquo;. 

- 
In &ldquo;General information&rdquo; tab, configure properties like &ldquo;Sales Price&rdquo;, &ldquo;Cost Price&rdquo;, &ldquo;MRP&rdquo;, &ldquo;Units of Measure&rdquo; etc

- 
In &ldquo;Inventory&rdquo; tab, configure properties like Routes (Buy or Make to order), tracking options (No tracking, by serial number, by lots&rdquo;, vendors for this product etc (especially for stockable product)

NOTE: Tracking options are important, especially if you are managing purchases through Odoo and dispensing drugs by lots or serial number. 
![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/Screenshot%202024-08-12%20at%209.35.23%E2%80%AFPM.png?version=1&modificationDate=1723478786810&cacheVersion=1&api=v2)

# Customize Product Lots/Serial list view (only for Odoo 10)

This is needed only in Odoo 10. Odoo 16 comes preconfigured with this extension fields displayed.

If you have enabled product tracking by &ldquo;lots/serial number&rdquo;, and you follow a purchase/receive process for that product, you can define sale price for each lot while receiving the products. 

List of lots/serial information can be viewed form &ldquo;Menu / Inventory / Inventory Control / Lots/Serial Number&rdquo;. By default the screen shows up with a table showing fields - &ldquo;lot/serial number&rdquo;, &ldquo;reference&rdquo;, &ldquo;product&rdquo;. 
![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/Odoo_default_Lots_Serial_View.png?version=1&modificationDate=1565365060919&cacheVersion=1&api=v2)
If you would like to see fields like &ldquo;cost price&rdquo;, &ldquo;sale price&rdquo; and &ldquo;expiry date&rdquo;, you need to customize the odoo default view. To do this see follow instructions below

- 
Enable developer mode

- 
Go to&ldquo;Menu / Inventory / Inventory Control / Lots/Serial Number&rdquo;, and from Odoo developer tools (top right corner), select &ldquo;edit treeview&rdquo;, edit the XML view definition and add the following fields. 

**Losts TreeView**

```
    ....
    
    
    
```

- Save and reload the page. You should see the view like below with additional columns
![](https://bahmni.atlassian.net/wiki/download/attachments/900530225/Odoo_customized_Lots_Serial_View.png?version=1&modificationDate=1565365403253&cacheVersion=1&api=v2)

 
### On this Page
 **Related Links**
[Odoo Inventory, Warehouse Management](https://www.youtube.com/watch?v=9KPeGFyWa18) (Odoo webinar)

[Inventory 10 Management, Products](https://www.youtube.com/watch?v=Zj8_8Uh3EAo) (Odoo webinar)

[Odoo 16 Inventory Management](https://www.odoo.com/documentation/16.0/applications/inventory_and_mrp/inventory.html) (Official Docs)
