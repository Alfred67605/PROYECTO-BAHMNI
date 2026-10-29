---
id: "32014590"
title: "Pharmacy Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014590/pharmacy-configuration"
version: 19
updated: "2017-05-01T05:52:42.288Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:00.045Z"
---

# Pharmacy Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014590)  
> **Versión del documento:** v19 (2017-05-01T05:52:42.288Z) | **Autor/Editor:** teresa gracias

---

## Purpose and Benefits

Bahmni integrates OpenMRS with OpenERP which is a an open source ERP product. It is useful in Billing, Stock management. Any patient registered in OpenMRS is synced as a customer in OpenERP. Any Drugs, LabTests added in OpenMRS is synced as product / service in OpenERP. When Doctors place any order, it syncs in OpenERP as Sales Quotation so that the patient can be billed.
 
Bahmni provides a Billing/Pharmacy app to enable the pharmacist to easily dispense Medications. Please [refer to this](/wiki/spaces/BAH/pages/115777052/Billing+Pharmacy+App) to configure the app.

**

## Steps

### 1. Configure OpenERP/Odo

Please [refer to this link](/wiki/spaces/BAH/pages/21790747/OpenERP+Basic+Configurations) on details to Configure OpenERP/Odoo.

### 2. Setup Syncing between Odoo and Bahmni

Please [refer to this link](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=114627969) to setup Syncing between Odoo and Bahmni.

This includes syncing all the Drug Units which needs to be synced as part of a Drug Order, configuring Order Types and Shop Mapping.

### 3. Add Medications/Drugs 

Refer to these steps to add medications/drugs either via [OpenMRS](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Medication+Data#ConfigureMedicationData-AddMedication/DrugDatainOpenMRS) or [CSV upload](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Medication+Data#ConfigureMedicationData-SetupDrugDatausingCSVimportinBahmni)

### 4. Delete Medications/Drugs

Refer to [these steps](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Medication+Data#ConfigureMedicationData-DeleteMedication/DrugData) to add medications/drugs.

### 5. Configure Location, Warehouse and Shop

    

**Video walkthrough to configure Location, Warehouse and Shop**

**Quick Steps**

**Configure Location*
***

- Goto Warehouse > Locations > Create
- Enter Location name, choose Parent Location (e.g. Physical Locations / Your Company / Stock)
- Choose Location type to be "Internal Location"
- Save

**Configure Warehouse**

- Goto Warehouse > Warehouses > Create
- Enter Warehouse name
- Choose Location Input (Stock received via purchase order will be added to this location)
- Choose Location Stock (Stock delivered via Sales order will be reduced from this location)
- Save

**Configure Shop**

- Goto Sales > Shop > Create
- Enter Shop name
- Choose Warehouse. Sales from this shop will reduce stock from this "Location Stock" of this warehouse.
- Choose Default Payment term as "Immediate Payments"
- Save

### 6. Configure Discount heads

    

**Video walkthrough to configure Create Discount Heads**

**Quick Steps**

- Goto Accounting > Accounts > Accounts
- Search for "Discounts". If not present, create it - 

- Goto Accounting > Accounts > Accounts > Create
- Enter Account Code e.g. 222
- Enter Account Name - Discounts
- Choose Parent e.g. Overheads
- Internal Type - View
- Account Type - Expense View
- Save

- Now we can create different Discount Account heads as follows - 

- Goto Accounting > Accounts > Accounts > Create
- Enter Account Code e.g. D01
- Enter Account Name e.g. WHO Cancer fund
- Choose Parent - Discounts
- Internal Type - Regular
- Account Type - Expense
- Save

On this Page
 
 
 
 
Feature Details**

[Pharmacy Management - Feature Guide](/wiki/spaces/BAH/pages/32604205/Pharmacy+Management)

**Usage Details**

[Pharmacy Management - User Guide](/wiki/spaces/BAH/pages/32014364/Pharmacy)
