---
id: "37945559"
title: "extension.json"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945559/extension-json"
version: 16
updated: "2017-05-01T11:42:52.726Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:20.930Z"
---

# extension.json

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945559)  
> **Versión del documento:** v16 (2017-05-01T11:42:52.726Z) | **Autor/Editor:** Himabindu Akkinepalli

---

**

## Description

This file contains configuration for patient search tabs and consultation tabs in the Clinical App.

## Steps

### Configure Patient Search Queues

On navigating to Clinical app, the Patient Search queue is displayed. It contains a list of patient queues based on the configuration.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945559/Screen%20Shot%202016-03-23%20at%203.17.16%20pm.png?version=1&modificationDate=1458726476163&cacheVersion=1&api=v2)

**Patient Search Queue on the Clinical Home Page**

Basic configuration for patient search tab is as follows:
Another example for patient search tab**

```
"bahmniBillingPatientsSearchActivePatients": {
  "id": "bahmni.billing.patients.search.allPatients",
  "extensionPointId": "org.bahmni.patient.search",
  "type": "config",
  "extensionParams": {
    "searchHandler": "emrapi.sqlSearch.activePatients",
    "translationKey": "SEARCH_PATIENTS_ACTIVE_LABEL",
    "forwardUrl": "#/default/patient/{{patientUuid}}/dashboard/treatment"
 },
  "order": 1,
  "requiredPrivilege": "app:billing"
}
```

Configuration for patient search with additional params: (for example, search tab for high risk hiv patients)
**Sample Patient Search tab configuration **

```
"bahmniClinicalPatientsSearchHighRiskPatients": {
  "id": "bahmni.clinical.patients.search.allPatients",
  "extensionPointId": "org.bahmni.patient.search",
  "type": "config",
  "extensionParams": {
    "searchHandler": "emrapi.sqlSearch.highRiskPatients",
    "forwardUrl": "#/default/patient/{{patientUuid}}/dashboard?encounterUuid=active",
    "translationKey": "High Risk",
    "additionalParams": {
      "tests": "'HIV ELISA (Blood)', 'HIV ELISA (Serum)', 'ZN Stain (Sputum)', 'HbsAg ELISA'"
    }
  },
  "order": 5,
  "requiredPrivilege": "app:clinical"
}
```

| key | description | Mandatory |
| --- | --- | --- |
| id | Unique identifier for patient search queue | N |
| extensionPointId | "org.bahmni.patient.search" | Y |
| type | config** | Y |
| searchHandler | This is the global property in OpenMRS. Its value is the SQL markup to fetch the patients for this queue. If not configured default search will be enabled. | N |
| translationKey | This can be used to configure a label for the search tab. The key and value should be defined in the locale.json and key should be assigned to this translationKey. If Key is configured and value is not defined in the locale.json, then it will show the key itself as the label. Here the key is ``` SEARCH_PATIENTS_ACTIVE_LABEL. ``` | Y |
| forwardUrl | The URL which the page is redirected to on clicking on the patients listed in this queue. | Y |
| additionalParams | Contains tests that signify the high-risk patients. Only the patients that have negative results for the tests mentioned in this section will be displayed.(For high risk patients, additional params are mandatory. These are not mandatory for other patient search queues). | N |
| Order | Order of the queue to be displayed. | N |
| requiredPrivilege | Privilege required for the user to be able to access this clinical app. | N |

### **Configure Various Consultation Tabs**

Following are the possible consultation tabs that can be configured:

- Observations
- Diagnosis
- Disposition
- Consultation
- Orders
- Medication

![](https://bahmni.atlassian.net/wiki/download/attachments/37945559/Screen%20Shot%202016-03-23%20at%203.19.33%20pm.png?version=1&modificationDate=1458726677381&cacheVersion=1&api=v2)

**Various Consultation Tabs**

Configuration for various Consultation tabs**

```
"observations": {
  "id": "bahmni.clinical.consultation.observations",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "translationKey": "Observations",
  "url": "concept-set-group/observations",
  "default": true,
  "order": 1,
  "requiredPrivilege": "app:clinical:observationTab"
},
"diagnosis": {
  "id": "bahmni.clinical.consultation.diagnosis",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "translationKey": "Diagnosis",
  "url": "diagnosis",
  "order": 2,
  "requiredPrivilege": "app:clinical:diagnosisTab"
},
"disposition": {
  "id": "bahmni.clinical.consultation.disposition",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "translationKey": "Disposition",
  "url": "disposition",
  "order": 3,
  "requiredPrivilege": "app:clinical:dispositionTab"
},
"consultationSummary": {
  "id": "bahmni.clinical.consultation.summary",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "translationKey": "Consultation",
  "url": "consultation",
  "order": 4,
  "requiredPrivilege": "app:clinical:consultationTab"
},
"bahmniClinicalConsultationOrders": {
  "id": "bahmni.clinical.consultation.orders",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "translationKey": "Orders",
  "url": "orders",
  "order": 5,
  "requiredPrivilege": "app:clinical:diagnosisTab"
},
"bahmniClinicalBillingTreatmentMedicationTab": {
  "id": "bahmni.clinical.billing.treatment",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "label": "Medications",
  "translationKey": "Medications",
  "extensionParams": {
    "tabConfigName": "allMedicationTabConfig"
  },
  "url": "treatment",
  "order": 6,
  "requiredPrivilege": "app:clinical:consultationTab"
}
 
```

| Key | Description | Mandatory |
| --- | --- | --- |
| id | unique identifier for the consultation tab | N |
| extensionPointId | org.bahmni.clinical.consultation.board | Y |
| type | link | Y |
| label | Label of the tab. This will be shown only if translationKey is not specified. Mandatory if translationKey is not specified. | N |
| translationKey | This key is used for internationalization of the label. Mandatory if label is not specified. | N |
| url | Url of the tab. Refer to the above configuration for url of respective tabs. | Y |
| order | Order of the tab to be displayed | N |
| tabConfigName | It is applicable only to treatment tabs. Multiple treatment tabs can be configured but each should have a unique tabConfigName | N |
| requiredPrivilege | Privilege required for the user to access this tab. | N |

### Display Observation Templates by Default

If default is set to true in the extensionParams, then that template will be shown by default as soon as the observations page is opened.

Please refer the following example config.
**Config**

```
"bahmniClinicalConceptSetGroupObservationsHistory": {
  "id": "bahmni.clinical.conceptSetGroup.observations.history",
  "extensionPointId": "org.bahmni.clinical.conceptSetGroup.observations",
  "type": "config",
  "extensionParams": {
    "conceptName": "History and Examination",
    "default": true
  },
  "requiredPrivilege": "app:clinical:history"
}
```

| Key | Description | Mandatory |
| --- | --- | --- |
| id | unique id for the config | N |
| extensionPointId | ``` "org.bahmni.clinical.conceptSetGroup.observations" ``` | Y |
| type | config | Y |
| extensionParams | This contains two variables conceptName and default.**conceptName is the name of the template. If default is set to true then this template will come by default in observation page | Y |
|  |  |  |

![](https://bahmni.atlassian.net/wiki/download/attachments/37945559/Screen%20Shot%202016-04-15%20at%201.50.31%20PM.png?version=1&modificationDate=1460708505109&cacheVersion=1&api=v2)

### 

On this Page
 
 
  
 
Related Links**

[Clinical Module - Implementer's Guide](/wiki/spaces/BAH/pages/32014548/Clinical+Module)
[Clinical App - JSON files](/wiki/spaces/BAH/pages/36700208/Clinical+App)
