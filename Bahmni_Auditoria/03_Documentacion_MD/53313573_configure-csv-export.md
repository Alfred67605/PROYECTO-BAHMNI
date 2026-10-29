---
id: "53313573"
title: "Configure CSV Export"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313573/configure-csv-export"
version: 7
updated: "2016-04-21T11:41:08.386Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:48.063Z"
---

# Configure CSV Export

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313573)  
> **Versión del documento:** v7 (2016-04-21T11:41:08.386Z) | **Autor/Editor:** Teresa Gracias

---

## Purpose and Benefits

The CSV export feature is used for data migration to and from Bahmni. The user has to have app:admin privilege to use this feature.

## Steps

### 1. Configure CSV Export Tab

To make CSV export appear in the Admin module, add the following configuration to the extension.json file. The file can be found in the "/config/openmrs/apps/admin/"  folder.

Modify the "**extension.json" **to contain the snippet below:

![](https://bahmni.atlassian.net/wiki/download/attachments/53313573/image2016-4-15%2013:13:17.png?version=1&modificationDate=1460706200100&cacheVersion=1&api=v2)

```
"csvExport":{
    "id": "bahmni.admin.csvExport",
    "extensionPointId": "org.bahmni.admin.dashboard",
    "type": "link",
    "extensionParams": {
    },
    "label": "CSV Export",
    "url": "#/csvExport",
    "icon": "fa-download",
    "order": 1,
    "requiredPrivilege": "app:registration"
},
```

 

## Key Fields 

| Key | Use | Mandatory |
| --- | --- | --- |
| ``` url ``` | Points the app to the csv export state | Yes |
| ``` icon ``` | The icon that will be displayed on the button | No |
| ``` label ``` | The text that will be rendered on the button | Yes |

**

On this Page

 
 
 
Feature Details**

[CSV Export - Feature Guide](/wiki/spaces/BAH/pages/53313626/Data+Migration+-+Export)

**Usage Details**

[CSV Export - User Guide](/wiki/spaces/BAH/pages/53313622/Export+Data)
