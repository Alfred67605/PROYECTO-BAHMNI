---
id: "49545424"
title: "Manual Radiology Upload"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545424/manual-radiology-upload"
version: 4
updated: "2017-04-14T10:24:01.143Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:29.724Z"
---

# Manual Radiology Upload

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545424)  
> **Versión del documento:** v4 (2017-04-14T10:24:01.143Z) | **Autor/Editor:** teresa gracias

---

## Purpose and Benefits

 Bahmni also supports manual uploads of Radiology documents.

## Steps

### **Configure Radiology Upload Module/App**

To configure the radiology upload module/app on the Bahmni Home page, add the config below to the path

*/bahmni/default-config/openmrs/apps/home/extension.json*
**Config to add to extension.json**

```
"radiologyDocumentUpload": {
   "id": "bahmni.radiology.document.upload",
   "extensionPointId": "org.bahmni.home.dashboard",
   "type": "link",
   "translationKey": "MODULE_LABEL_RADIOLOGY_UPLOAD_KEY",
   "url": "../document-upload/?encounterType=RADIOLOGY&topLevelConcept=Radiology&defaultOption=Chest, 1 view (X-ray)”,
   "icon": "icon-bahmni-radiology",
   "order": 5,
   "requiredPrivilege": "app:radiology-upload"
 },
```

**

URL in the code snippet above
 
The url is :  "url": "../document-upload/?encounterType=**<****X>**&topLevelConcept=**<Y>**&defaultOption=**<Z>**”,

- The extension filepath should be: extension-**<****X>**.json
- **<Y>** is the top level concept in openMRS. This enables an auto-complete set while selecting Upload type:  Assign concept set name to "topLevelConcept" in the url.
- **<Z>** has to be a set member of ’**<Y>**’ which is the top level concept. It is the default option that appears in the UI for upload type.

On this Page

 
 
 
Feature Details**

[Radiology and PACS - Feature Guide](/wiki/spaces/BAH/pages/32604202/Radiology+and+PACS)

**Usage Details**

[Radiology and PACS - User Guide](/wiki/spaces/BAH/pages/32014360/Radiology)
