---
id: "3692167169"
title: "Odoo 16 System Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3692167169/odoo-16-system-configuration"
version: 2
updated: "2024-08-13T10:09:47.778Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:12.205Z"
---

# Odoo 16 System Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3692167169)  
> **Versión del documento:** v2 (2024-08-13T10:09:47.778Z) | **Autor/Editor:** Mohankumar Thangavel

---

While initiating the use of Odoo for your implementation, several fundamental system configurations must be completed before recording any sales, inventory transactions, or payments. Although some features and processes may not be utilized extensively based on your implementation requirements, we strongly advise configuring these settings for accuracy and optimal system utilisation. In addition to the below essential areas, we highly recommend going through the [Official Odoo 16 setup guide](https://bahmni.atlassian.net/wiki/pages/resumedraft.action?draftId=3692167169&draftShareId=bf061c0e-f72e-4a5a-96cf-e5944af6316a) to understand more about the configuration.

Community Session on Odoo 16 integration and migration from older versions has been conducted in accordance with Bahmni Standard 1.0.0 release. Refer [this video](https://youtu.be/8Vch26gSAsA?si=StwmOpADR2p6dk6S).

 
On this page
 

### Setup a Master Password

Odoo allows managing multiple databases within a single instance of Odoo and also allows backing up, duplicating and deleting any database from the UI. This page can be accessed by clicking the `Manage Databases` link on the login page or from this URL `http:///web/database/manager`. All of the database operations are protected by a Master Password. As a one-time setup, click on the **Set Master Password** button and configure a strong master password for your database.

### Setup Company Information

Odoo tracks all transactions under a concept of Company. Configure your implementation organisation information under  Menu → Settings → Users & Companies → Companies. The configuration elements include the following

- 
Company Name

- 
Address

- 
Currency (this is important and cannot be changed later)

- 
Round off value (the round off value that is used in Sale quotations)

### Date formatting and localisation

Odoo supports localisation capabilities. The same can be accessed through debug mode and navigating to Menu → Settings → Translations. Selecting an option will give additional configurable localisation options.

![](https://bahmni.atlassian.net/wiki/download/attachments/3692167169/image-20240813-095912.png?version=1&modificationDate=1723543158081&cacheVersion=1&api=v2)
### General Settings and User Configuration
Before rolling out for users, we recommend going through all the general settings once in the Menu → Settings → General Settings. Few of these properties cannot be updated once a transactional entry has been made. Also setup users with appropriate roles from Menu → Settings → Users & Companies → Users.

It is also very important to go through the accounting configuration. Refer [this page](/wiki/spaces/BAH/pages/900530219/Odoo+Accounting+Configuration) for more details.

### Additional Apps and Custom Apps

Odoo supports adding additional apps as per your implementation requirements. Refer [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117482082/Odoo+Configurations+docker#Loading-Additional-Addons-to-Odoo) on how to mount additional apps downloaded from community or your custom developed apps. Refer [this section](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117482082/Odoo+Configurations+docker#Development-setup-for-Bahmni-Odoo-Modules) to mount the modules shipped out of the box in bahmni/odoo-16 docker image and extend any customisations.

Also, [this page](/wiki/spaces/BAH/pages/3690725380/Optional+Community+Modules+for+Odoo+16) has information about few optional addons that are bundled on the image that are available for implementation to install and use on a need basis.
