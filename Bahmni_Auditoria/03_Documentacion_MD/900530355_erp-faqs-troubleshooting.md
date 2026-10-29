---
id: "900530355"
title: "ERP FAQs & Troubleshooting"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530355/erp-faqs-troubleshooting"
version: 8
updated: "2019-08-22T13:30:56.324Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:20.821Z"
---

# ERP FAQs & Troubleshooting

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530355)  
> **Versión del documento:** v8 (2019-08-22T13:30:56.324Z) | **Autor/Editor:** Angshuman Sarkar

---

# Migration Guide

There has been significant change from OpenERP7 to Odoo10. Hence an automated migration is not possible. 

In addition, if you have added any additional module, custom or stock, then it can further complicate the migration.   

- You can find a comprehensive technical guide relevant to Migration from OpenERP7 to Odoo10 in the attached document ["Final_OpenERP_to_Odoo_v10_Migration.pdf"](/wiki/download/attachments/900530355/Final_OpenERP_to_Odoo_v10_Migration.pdf?version=1&modificationDate=1565078815435&cacheVersion=1&api=v2)
- For data migration, please refer to the attached document ["Data Migration from OpenERP7 to Odoo 10.pdf"](/wiki/download/attachments/900530355/Data%20Migration%20from%20OpenERP7%20to%20Odoo%2010.pdf?version=1&modificationDate=1565078813997&cacheVersion=1&api=v2)

**

**Caution**: Please do not try this on production system. Its advisable that you test out first on your test/staging environments before you proceed with data migration. 

We would advise that you look at Odoo as a completely different system and start afresh. There are significant changes in model and migrating data even if possible will require additional/custom scripting. 

We would suggest

- Plan for closure of OpenERP
- Setup Odoo as described in configuration/setup pages
- Import master data (using CSV or Excel) - export from OpenERP, cleanup, import in Odoo. 

# Not ready to upgrade to Odoo, what can I do?

There might be plenty of reasons for you not to upgrade to Odoo 10 yet. For example, you are middle of the Financial Year and you maintain your accounting in OpenERP. 

Bahmni 0.92 works perfectly fine with OpenERP 7. So you can install Bahmni 0.92 in a separate machine (without Odoo) and then configure settings to connect to older OpenERP 7 running separately. 

To connect to older OpenERP7, you need to change a few properties of "Bahmni ERP Connect". 

## Using bahmni erp-connect v0.92

- 
Install **bahmni-erp-connect** on a the new system (see [Advanced Installation](/wiki/spaces/BAH/pages/35291242/Install+Bahmni+on+CentOS+Advanced+Installation+Options) on how to install specific component's rpm installation). 

- Find and edit the file "**/opt/bahmni-erp-connect/bahmni-erp-connect/WEB-INF/classes/erp-atomfeed.properties**". Change the following properties
**jdbc.url**=jdbc:postgresql://[OpenERP Machine IP Address or FQDN]/openerp 
- **openerp.port**=8069
- **openerp.host**=[OpenERP machine IP Address or FQDN of the ]
- **openerp.database**=openerp
- **openerp.user**=[openerp login user]
- **openerp.password**=[openerp login user password]

**Note:** For "Bahmni-erp-connect" to talk to OpenERP7 running on another machine, you need to ensure

- The old machine is visible from the new machine over HTTP
- The old machine's port 8069 is allowed/accessible from the new machine
- Postgres Openerp database allows connection from the old machine

## Using bahmni erp-connect v0.91

- On the old environment, where OpenERP7 is running, file and edit the file **"/opt/bahmni-erp-connect/bahmni-erp-connect/WEB-INF/classes/atomfeed.properties"**
customer.feed.generator.uri=http://[OpenMRS Machine IP Address or FQDN]:8050/openmrs/ws/atomfeed/patient/recent
- saleorder.feed.generator.uri=http://[OpenMRS Machine IP Address or FQDN]:8050/openmrs/ws/atomfeed/encounter/recent
- drug.feed.generator.uri=http://[OpenMRS Machine IP Address or FQDN]:8050/openmrs/ws/atomfeed/drug/recent
- lab.feed.generator.uri=http://[OpenMRS Machine IP Address or FQDN]:8050/openmrs/ws/atomfeed/lab/recent
- openmrs.auth.uri=http://[OpenMRS Machine IP Address or FQDN]:8050/openmrs/ws/rest/v1/session
- openelis.saleorder.feed.generator.uri=http://[OpenELIS Machine IP Address or FQDN]:8052/openelis/ws/feed/patient/recent
- openelis.uri=http://[OpenELIS Machine IP Address or FQDN]:8052/openelis

**Note:** For "Bahmni-erp-connect" 0.91 to work with Bahmni 0.92 on new machine, you need to ensure

- The new machine is visible to the old machine over HTTP for ports of OpenMRS and OpenELIS (8050, 8052 by default)

# Troubleshooting

Lots of things can go wrong if things are not configured properly. Below are some tips that will help you in investigating and troubleshooting issues.

## Change Odoo log level

By default, upon installation, Odoo log level would be set to "error", meaning only errors would be logged. If you are trying to figure out, troubleshoot issues, change the log level to "debug" to get more information. For this, 

- Edit odoo configuration file - **/etc/odoo.conf**,  and change log level to “debug”. 
log_level = debug

- After changing the file, you will need to restart Odoo
service odoo restart

- Odoo log file can be found here -  /var/log/odoo/odoo.log

## Change erp-connect log level

A specific microservice "bahmni-erp-connect" is responsible for integration between OpenMRS & Odoo. You can get additional info by looking at this service's log and additionally changing the log level of this service. 

- bahmni-erp-connect log file location: /var/log/bahmni-erp-connect/bahmni-erp-connect.log
- Edit log level by editing file, f/opt/bahmni-erp-connect/bahmni-erp-connect/WEB-INF/classes/log4j.xml
change specific logger's log level to DEBUG, root logger level to DEBUG

- After editing the file, you will need to restart bahmni-erp-connect

service bahmni-erp-connect restart

On this Page
 
 
 
 
Related Links**

[Upgrade To Bahmni 0.92](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/103350284/Upgrade+to+Latest+Bahmni+Release#UpgradetoLatestBahmniRelease-UpgradetoBahmni0.92)
