---
id: "114923665"
title: "Admit, Discharge and Transfer Patients"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114923665/admit-discharge-and-transfer-patients"
version: 10
updated: "2017-03-01T05:21:39.086Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:31.518Z"
---

# Admit, Discharge and Transfer Patients

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114923665)  
> **Versión del documento:** v10 (2017-03-01T05:21:39.086Z) | **Autor/Editor:** teresa gracias

---

## Configuration

### Setup Default Visit Type
 
- 
The configuration for this field is mandatory.

- 
The config will set the default visit type of the patient when the user attempts to admit the patient.

- 
**

Sample Config**

```
"defaultVisitType": "IPD"
```

![](https://lh3.googleusercontent.com/9ONU0nfNHtkggmjCKU3iNd9PSE1fTrkOAwbL2YbCxFUxnxZxAVstVSYksdD6Ln_vVkdqAV6wfD7MXwDF001ayeZjW6apkla3ywT5hK9_W709LAoWXb_mxWZfRGz8aG7lh7uOuO8y)

### Patient Movement Redirects
 
The following configurations have to be added to app.json

#### On Admission

This config will redirect to the configured page in the app while trying to admit the patient

```
"onAdmissionForwardTo": "#/patient/{{patientUuid}}/encounter/{{encounterUuid}}/bed"
```

**![](https://lh6.googleusercontent.com/U7Gy01NQmnn5gULEF52R3wBRnRWTlFztt7vzIGIUfW3rGtOx4HjCBVULnwRqvAOvd1AJEXMQ1fRJ661NKSi7mUC5EpQm9RuK01CLRRxnrN1FAh5971EiPGEPqMM2wt8MbIgCa-7k)

#### On Transfer

This config will redirect to the configured page in the app while trying to transfer the admitted patient

```
"onTransferForwardTo": "#/patient/{{patientUuid}}/encounter/{{encounterUuid}}/bed"
```

![](https://lh5.googleusercontent.com/rMP7XzXCos4IPgj2QCYfNMMx72X2NICpo55iTHwzYnD1AEaScMxs_1dmFkPQoVNWg1ZNkLQ8tj38FsoJJ6OTDmvcwi6GAhfFC50Lk6lAWHlBMdru4DXa10pKvfxOPmJ7EcO3cVnD)

#### On Discharge

This config will redirect to the configured page in the app while trying to discharge the admitted patient

```
"onDischargeForwardTo": "#/patient/search"
```

![](https://lh6.googleusercontent.com/35-dt34WJGq9UPgitLHfZ9MeSjfS2jvHqpebGXKmYYrJ-gADLM90BpVnW7acposa4IOyklh_LVxAonajpd2LTq_tkPhpJrt5U2egXk3TcVCbAf_dMJDFcC6Fscg24gbIoL0fqipG)

### Setup Max Patients per Bed

The config is to define the number of patients a bed can accommodate at once.

![](https://bahmni.atlassian.net/wiki/download/attachments/114923665/Pasted%20image%20at%202017_02_23%2003_21%20PM.png?version=1&modificationDate=1488344952392&cacheVersion=1&api=v2)
 
The config is not mandatory and the default value is set to 3.

```
"maxPatientsPerBed" : 2
```

### Capture Data on Patient Movement

Bahmni supports configuration to capture data on selecting the Patient Movement.
 
- The configuration needs to be added under the dashboard section.
- The concept name should be defined in openMRS.
- Only one concept can be defined at a time.

```
"dashboard":{
                               "conceptName": "Adt Notes",
}
```

![](https://lh3.googleusercontent.com/83vDWouefkOcEGKD23pRShUJodZ9FM6_tU9528EUZaaWHqr5Xxk_wi4-wdZ2HutWUe_tyoYOAX_l29uIX76ac1OORACaTY-ZOCbOSwDWfEntKDXmjK0qRoUBQNje3C_U8GGnJZtP)

### Configure Display Controls on IPD Dashboard

[Display controls](/wiki/spaces/BAH/pages/37945573/Display+Controls) can be configured on the IPD module to give a snapshot of the captured observations.
 
The configuration should be added under the “dashboard" section
Sample Config**

```
     "dashboard":{
               "translationKey": "DASHBOARD_TAB_GENERAL_KEY",
               "sections": {
               "vitals":{
                    "translationKey":"DASHBOARD_TITLE_VITALS_KEY",
                    "type": "vitals",
                   "displayOrder": 0,
                   "isObservation": true,
                   "dashboardConfig": {
                        "conceptNames": ["Vitals"],
                    "numberOfVisits": 2
                    }
           }
}
```

On this Page

 
 
 
**Related Links**

[Ward Management](/wiki/spaces/BAH/pages/16908311/Ward+Management)

**Feature Details**

[In-Patient Management (IPD) - Feature Guide](/wiki/spaces/BAH/pages/32604214/In-Patient+Management+IPD)

**Usage Details**

[In-Patient Management (IPD) - User Guide](/wiki/spaces/BAH/pages/32014373/In-Patient+Management)
