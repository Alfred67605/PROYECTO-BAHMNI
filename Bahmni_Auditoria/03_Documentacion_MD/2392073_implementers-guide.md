---
id: "2392073"
title: "Implementer's Guide"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2392073/implementers-guide"
version: 55
updated: "2017-04-10T06:20:05.891Z"
author: "teresa gracias"
category: "Manual_Implementador"
download_date: "2026-10-20T21:02:55.450Z"
---

# Implementer's Guide

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2392073)  
> **Versión del documento:** v55 (2017-04-10T06:20:05.891Z) | **Autor/Editor:** teresa gracias

---

![](https://bahmni.atlassian.net/wiki/download/attachments/2392073/Glyph%20Inventory%201_ebook-2.jpg?version=1&modificationDate=1449041813729&cacheVersion=1&api=v2)
**Implementer's Guide:** This guide describes various steps and configurations required to setup and implement Bahmni.

**Feature Guide:** Please refer to the [Feature Guide](/wiki/spaces/BAH/pages/32604183/Feature+Guide) for an overview of Bahmni's features.

**User Guide:** Please refer to the [User Guide](/wiki/spaces/BAH/pages/32014338/User+Guide) for detailed user workflows and documentation of Bahmni from an end-user's perspective.

**Table of Contents**

- [Implementation Overview](/wiki/spaces/BAH/pages/18415732/Implementation+Overview)
[Bahmni Implementation Scenarios & Factors to Consider](/wiki/spaces/BAH/pages/69304335/Bahmni+Implementation+Scenarios+Factors+to+Consider)
- [Phases of an implementation](/wiki/spaces/BAH/pages/7110661/Phases+of+an+implementation)
- [Implementation Checklist](/wiki/spaces/BAH/pages/32604693/Implementation+Checklist)
- [EHR Standards across various countries](/wiki/spaces/BAH/pages/2983165963/EHR+Standards+across+various+countries)
- [Job description for Bahmni Implementation Engineer](/wiki/spaces/BAH/pages/7110686/Job+description+for+Bahmni+Implementation+Engineer)
- [What happens in a hospital?](/wiki/spaces/BAH/pages/8192018/What+happens+in+a+hospital)
- [Chrome OS and Bahmni](/wiki/spaces/BAH/pages/7110700/Chrome+OS+and+Bahmni)

- [Configuration 101](/wiki/spaces/BAH/pages/34013647/Configuration+101)
[Configurations: What goes where?](/wiki/spaces/BAH/pages/412811291/Configurations+What+goes+where)
- [OpenMRS configuration](/wiki/spaces/BAH/pages/34013673/OpenMRS+configuration)
- [Bahmni App Configuration](/wiki/spaces/BAH/pages/34013676/Bahmni+App+Configuration)
- [OpenERP Configuration](/wiki/spaces/BAH/pages/114398427/OpenERP+Configuration)

- [EMR Modules](/wiki/spaces/BAH/pages/115975705/EMR+Modules)
[Patient Registration Module](/wiki/spaces/BAH/pages/32014487/Patient+Registration+Module)
- [Clinical Module](/wiki/spaces/BAH/pages/32014548/Clinical+Module)
- [Programs Module](/wiki/spaces/BAH/pages/32014506/Programs+Module)
- [Order Fulfillment & Procedures](/wiki/spaces/BAH/pages/18415632/Order+Fulfillment+Procedures)
- [Appointments Module of OpenMRS](/wiki/spaces/BAH/pages/32014577/Appointments+Module+of+OpenMRS)
- [PACS Integration and Radiology Upload](/wiki/spaces/BAH/pages/49545427/PACS+Integration+and+Radiology+Upload)
- [Patient Documents Module](/wiki/spaces/BAH/pages/32014592/Patient+Documents+Module)
- [In-Patient Management Module](/wiki/spaces/BAH/pages/32014606/In-Patient+Management+Module)
- [Appointments Scheduling Module](/wiki/spaces/BAH/pages/117677537/Appointments+Scheduling+Module)
- [Operation Theatre Scheduling Module](/wiki/spaces/BAH/pages/703922251/Operation+Theatre+Scheduling+Module)
- [Bed Management Module](/wiki/spaces/BAH/pages/707854444/Bed+Management+Module)
- [SMS Notification](/wiki/spaces/BAH/pages/3202613249/SMS+Notification)

- [Implementer Interface](/wiki/spaces/BAH/pages/100565083/Implementer+Interface)
[Form Builder](/wiki/spaces/BAH/pages/100565092/Form+Builder)

- [Laboratory Module](/wiki/spaces/BAH/pages/32014586/Laboratory+Module)
[Configure Laboratory Management System (OpenELIS)](/wiki/spaces/BAH/pages/109314082/Configure+Laboratory+Management+System+OpenELIS)
- [OpenELIS Basic Configurations](/wiki/spaces/BAH/pages/3506202/OpenELIS+Basic+Configurations)
- [Advanced Lab Configuration](/wiki/spaces/BAH/pages/107708437/Advanced+Lab+Configuration)
- [OpenELIS Manuals](/wiki/spaces/BAH/pages/34439278/OpenELIS+Manuals)
- [OpenElis Department Wise Results Entry](/wiki/spaces/BAH/pages/791937027/OpenElis+Department+Wise+Results+Entry)
- [Configuring print of lab reports](/wiki/spaces/BAH/pages/2256011271/Configuring+print+of+lab+reports)
- [Types of test status](/wiki/spaces/BAH/pages/2306539608/Types+of+test+status)
- [Show provider from OpenMRS to OpenELIS as a requester](/wiki/spaces/BAH/pages/2432401410/Show+provider+from+OpenMRS+to+OpenELIS+as+a+requester)
- [Importing Result Range Data into OpenELIS PostgreSQL: Step-by-Step Guide](/wiki/spaces/BAH/pages/3638329345/Importing+Result+Range+Data+into+OpenELIS+PostgreSQL+Step-by-Step+Guide)

- [ERP Modules](/wiki/spaces/BAH/pages/116004323/ERP+Modules)
[Accounting Configuration](/wiki/spaces/BAH/pages/32604219/Accounting+Configuration)
- [Pharmacy Configuration](/wiki/spaces/BAH/pages/32014590/Pharmacy+Configuration)
- [Billing/Pharmacy App](/wiki/spaces/BAH/pages/115777052/Billing+Pharmacy+App)
- [Inventory Management System](/wiki/spaces/BAH/pages/32014610/Inventory+Management+System)
- [Quotation and Invoices](/wiki/spaces/BAH/pages/116200817/Quotation+and+Invoices)

- [Crater Billing & Invoice](/wiki/spaces/BAH/pages/3111157761/Crater+Billing+Invoice)
[Crater Customization](/wiki/spaces/BAH/pages/3110207654/Crater+Customization)

- [Reports Module](/wiki/spaces/BAH/pages/32604227/Reports+Module)
[Configure Reports App](/wiki/spaces/BAH/pages/82837529/Configure+Reports+App)
- [Configure Multiple Report Apps](/wiki/spaces/BAH/pages/59899908/Configure+Multiple+Report+Apps)
- [Configure Reports](/wiki/spaces/BAH/pages/18415871/Configure+Reports)
- [Configure Reports in OpenERP](/wiki/spaces/BAH/pages/111411310/Configure+Reports+in+OpenERP)

- [Bahmni Mart](/wiki/spaces/BAH/pages/695959553/Bahmni+Mart)
[Overview](/wiki/spaces/BAH/pages/2316239023/Overview)
- [Modules](/wiki/spaces/BAH/pages/2318893458/Modules)
- [Incremental Update](/wiki/spaces/BAH/pages/2318893479/Incremental+Update)
- [Email Configuration for Notification Regarding Failed Jobs](/wiki/spaces/BAH/pages/2306540025/Email+Configuration+for+Notification+Regarding+Failed+Jobs)
- [Appendix](/wiki/spaces/BAH/pages/2316239181/Appendix)
- [Frequently Asked Questions(FAQs) - Bahmni Mart](/wiki/spaces/BAH/pages/2306540032/Frequently+Asked+Questions+FAQs+-+Bahmni+Mart)

- [Bahmni Connect App](/wiki/spaces/BAH/pages/94535684/Bahmni+Connect+App)
[Installing and Configuring Bahmni Connect](/wiki/spaces/BAH/pages/94535704/Installing+and+Configuring+Bahmni+Connect)
- [Bahmni Connect Performance Baseline](/wiki/spaces/BAH/pages/108494885/Bahmni+Connect+Performance+Baseline)

- [Bahmni - DHIS2 Integration](/wiki/spaces/BAH/pages/116694133/Bahmni+-+DHIS2+Integration)
- [Bahmni and openIMIS Integration](/wiki/spaces/BAH/pages/3242590216/Bahmni+and+openIMIS+Integration)
- [Bahmni Administration](/wiki/spaces/BAH/pages/53313563/Bahmni+Administration)
[Importing and Exporting Data](/wiki/spaces/BAH/pages/116004566/Importing+and+Exporting+Data)
- [Configure Atomfeed Console App](/wiki/spaces/BAH/pages/74154021/Configure+Atomfeed+Console+App)
- [Bahmni Server Administration](/wiki/spaces/BAH/pages/18415804/Bahmni+Server+Administration)
- [Connecting to various databases](/wiki/spaces/BAH/pages/49545219/Connecting+to+various+databases)
- [Resources](/wiki/spaces/BAH/pages/18415833/Resources)
- [Configuring OWA in Bahmni](/wiki/spaces/BAH/pages/506986528/Configuring+OWA+in+Bahmni)
- [Bahmni and CIEL dictionary](/wiki/spaces/BAH/pages/3311534130/Bahmni+and+CIEL+dictionary)

- [FAQs / Troubleshooting](/wiki/spaces/BAH/pages/20643938/FAQs+Troubleshooting)
[Bahmni / OpenMRS related](/wiki/spaces/BAH/pages/20643979/Bahmni+OpenMRS+related)
- [Network / Infrastructure Related Problems](/wiki/spaces/BAH/pages/15597584/Network+Infrastructure+Related+Problems)
- [MySQL Replication Problems](/wiki/spaces/BAH/pages/20643941/MySQL+Replication+Problems)
- [Troubleshooting postgresql replication issues](/wiki/spaces/BAH/pages/20643953/Troubleshooting+postgresql+replication+issues)
- [OpenERP error "There is no period defined" while confirming a sale quotation](/wiki/spaces/BAH/pages/111411244/OpenERP+error+There+is+no+period+defined+while+confirming+a+sale+quotation)
- [OpenERP client error “Unexpected end of JSON Input” when printing the purchase order](/wiki/spaces/BAH/pages/111411249/OpenERP+client+error+Unexpected+end+of+JSON+Input+when+printing+the+purchase+order)
- [Troubleshooting steps for ERP sync](/wiki/spaces/BAH/pages/111411208/Troubleshooting+steps+for+ERP+sync)
- [Reconnection error messages in Bahmni Connect App](/wiki/spaces/BAH/pages/116592883/Reconnection+error+messages+in+Bahmni+Connect+App)

- [OpenMRS Reports OWA Configuration](/wiki/spaces/BAH/pages/671744003/OpenMRS+Reports+OWA+Configuration)
- [Template: New IG Feature](/wiki/spaces/BAH/pages/32014639/Template+New+IG+Feature)
- [Odoo modules](/wiki/spaces/BAH/pages/899973149/Odoo+modules)
[Odoo 16 System Configuration](/wiki/spaces/BAH/pages/3692167169/Odoo+16+System+Configuration)
- [Odoo 10 System Configuration](/wiki/spaces/BAH/pages/900530238/Odoo+10+System+Configuration)
- [Odoo Sales Configuration](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration)
- [Odoo Purchase Configuration](/wiki/spaces/BAH/pages/900497457/Odoo+Purchase+Configuration)
- [Odoo Accounting Configuration](/wiki/spaces/BAH/pages/900530219/Odoo+Accounting+Configuration)
- [Odoo Inventory Configuration](/wiki/spaces/BAH/pages/900530225/Odoo+Inventory+Configuration)
- [Custom Reports in Odoo 16](/wiki/spaces/BAH/pages/3690168321/Custom+Reports+in+Odoo+16)
- [Odoo 16 Migration Guide](/wiki/spaces/BAH/pages/3657105447/Odoo+16+Migration+Guide)
- [Optional Community Modules for Odoo 16](/wiki/spaces/BAH/pages/3690725380/Optional+Community+Modules+for+Odoo+16)
- [ERP FAQs & Troubleshooting](/wiki/spaces/BAH/pages/900530355/ERP+FAQs+Troubleshooting)
- [Viewing Odoo Payments in Clinical screens in Bahmni](/wiki/spaces/BAH/pages/2136473610/Viewing+Odoo+Payments+in+Clinical+screens+in+Bahmni)

- [In-Patient Department](/wiki/spaces/BAH/pages/3721953281/In-Patient+Department)

**Search Implementer Guide**

    
    

     
    
        
            
                
                            
                        
                
                    
 
                
                Search
            
                        
            
            
            
        
    

 

![](https://bahmni.atlassian.net/wiki/download/attachments/2392073/cc-by-sa.png?version=1&modificationDate=1491053326043&cacheVersion=1&api=v2)

The Bahmni documentation is licensed under **[Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/). **
