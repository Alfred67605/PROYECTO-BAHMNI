---
id: "32014561"
title: "Configure Disposition Tab"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014561/configure-disposition-tab"
version: 21
updated: "2016-04-07T07:56:30.192Z"
author: "Hanisha Potturi (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:14.886Z"
---

# Configure Disposition Tab

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014561)  
> **Versión del documento:** v21 (2016-04-07T07:56:30.192Z) | **Autor/Editor:** Hanisha Potturi (Deactivated)

---

## Purpose and Benefits

Disposition Tab is used by the doctor to enter the status of the patient. It does not explicitly trigger a workflow, but instead can be used to determine if an action needs to be taken with respect to the disposition.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014561/Disposition%20Tab.png?version=1&modificationDate=1447329183759&cacheVersion=1&api=v2)

**The Disposition tab in the patient dashboard**

## Steps

To configure Disposition Tab, place the below code in clincal/extension.json:

```
"disposition": {
    "id": "bahmni.clinical.consultation.disposition",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Disposition",
    "translationKey":"DISPOSITION_BOARD_LABEL_KEY",
    "url": "disposition",
    "icon": "fa-user-md",
    "order": 3,
    "requiredPrivilege": "app:clinical:dispositionTab"
  },
```

 

### Configure Disposition Concepts:

     To configure disposition concepts in openmrs refer to the [Configure Disposition Concepts](/wiki/spaces/BAH/pages/50921523/Configure+Disposition+Concepts)

On this Page

 
 
 
**Feature Details**

[Disposition Tab - Feature Guide](/wiki/spaces/BAH/pages/40501369/Disposition)
