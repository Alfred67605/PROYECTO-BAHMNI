---
id: "32014566"
title: "Configure Consultation UI"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014566/configure-consultation-ui"
version: 19
updated: "2016-04-06T07:15:07.220Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:15.363Z"
---

# Configure Consultation UI

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014566)  
> **Versión del documento:** v19 (2016-04-06T07:15:07.220Z) | **Autor/Editor:** Teresa Gracias

---

## Purpose and Benefits

The Consultation User Interface allows the User to:

- Capture observations about the patient.
- Confirm or determine diagnoses and view past diagnoses (including X-rays, Documents, et al.) for the patient.
- Make dispositions.
- Enter consultation notes.
- Create laboratory orders.
- Order drugs and view past and active medications.
- Create Bacteriology test orders.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014566/Consultation%20UI.png?version=1&modificationDate=1447336906048&cacheVersion=1&api=v2)

**Consultation User Interface**

## Steps

The Consultation module is provided out-of-the-box (OOTB) with Bahmni. However, to further configure tabs for Consultation User Interface such as Observations, Diagnosis, etc. refer to the code snippet below:

```
{
  "observations": {
    "id": "bahmni.clinical.consultation.observations",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Observations",
    "translationKey":"OBSERVATIONS_BOARD_LABEL_KEY",
    "url": "concept-set-group/observations",
    "default": true,
    "icon": "fa-user-md",
    "order": 1,
    "requiredPrivilege": "app:clinical:observationTab"
  },
  "diagnosis": {
    "id": "bahmni.clinical.consultation.diagnosis",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Diagnosis",
    "translationKey":"DIAGNOSIS_BOARD_LABEL_KEY",
    "url": "diagnosis",
    "icon": "fa-user-md",
    "order": 2,
    "requiredPrivilege": "app:clinical:diagnosisTab"
  },
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

For further information refer to [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/clinical/extension.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/clinical/extension.json)

On this Page

 
 
 
**Feature Details**

[Capturing Consultation Data - Feature Guide](/wiki/spaces/BAH/pages/37945475/Capturing+Consultation+Data)
