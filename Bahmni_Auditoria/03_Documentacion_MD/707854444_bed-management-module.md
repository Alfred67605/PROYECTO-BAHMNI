---
id: "707854444"
title: "Bed Management Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/707854444/bed-management-module"
version: 9
updated: "2021-03-15T06:57:32.148Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:42.185Z"
---

# Bed Management Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/707854444)  
> **Versión del documento:** v9 (2021-03-15T06:57:32.148Z) | **Autor/Editor:** Gurpreet Luthra

---

## Enabling the new Bed Management Module

You can enable the new BM by configuring it as an extension in *bahmni_config/home/extension.json *like below or as configured in [default config here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/extension.json#L42)
**App Extension Definition**

```
"newBedManagement": {
    "id": "bahmni.ipd",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "MODULE_LABEL_BED_MANAGEMENT_KEY",
    "label": "InPatient",
    "url": "../bedmanagement/#/home",
    "icon": "fa-bed",
    "order": 7,
    "requiredPrivilege": "app:adt"
 }
```

**NOTE:** For Ward Layout, bed management and bed-types please refer this documentation: [Ward Management (Admin)](/wiki/spaces/BAH/pages/712507393/Ward+Management+Admin+Console)

On this Page

 
 
 

Sections

 

- [Apps and Tabs Configuration](/wiki/spaces/BAH/pages/712572997/Apps+and+Tabs+Configuration)

 
**Related Links**

[Ward Management Admin Console](/wiki/spaces/BAH/pages/712507393/Ward+Management+Admin+Console)

**Feature Details**

[Bed Management - Feature Guide](/wiki/spaces/BAH/pages/699400201/Bed+Management+BM)

**Usage Details**

[Bed Management - User Guide](/wiki/spaces/BAH/pages/707559542/Bed+Management)
