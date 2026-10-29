---
id: "114929369"
title: "IPD App and Tab Setup"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114929369/ipd-app-and-tab-setup"
version: 1
updated: "2017-02-23T09:16:00.495Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:31.056Z"
---

# IPD App and Tab Setup

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114929369)  
> **Versión del documento:** v1 (2017-02-23T09:16:00.495Z) | **Autor/Editor:** teresa gracias

---

## Configuration

### 1. Configure the In-Patient App

Add the configuration in extension.json file in home folder [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/extension.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/extension.json) to view the app. 

```
"adt": {
    "id": "bahmni.adt",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "MODULE_LABEL_INPATIENT_KEY",
    "url": "../adt/",
    "icon": "icon-bahmni-inpatient",
    "order": 4,
    "requiredPrivilege": "app:adt"
  }
```

### 2. Configure Tabs

Add the configuration in extension.json file in the adt folder here [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/adt/extension.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/adt/extension.json) : 

#### Configure "To Admit" Tab

    This tab is used to view the the list of patients who are asked to admit.

```
"bahmniAdtPatientsSearchPatientsToAdmit":{
        "id": "bahmni.adt.patients.search.patientsToAdmit",
        "extensionPointId": "org.bahmni.patient.search",
        "type": "config",
        "extensionParams": {
            "searchHandler": "emrapi.sqlSearch.patientsToAdmit",
            "translationKey": "MODULE_LABEL_TO_ADMIT_KEY",
            "forwardUrl":"#/patient/{{patientUuid}}/visit/{{visitUuid}}/admit"
        },
        "label": "To Admit",
        "order": 1,
        "requiredPrivilege": "app:adt"
    }
```

#### Configure Admitted Tab

    This tab is used to view the the list of patients who are already admitted.

```
"bahmniAdtPatientsSearchPatientsAdmitted":{
        "id": "bahmni.adt.patients.search.patientsAdmitted",
        "extensionPointId": "org.bahmni.patient.search",
        "type": "config",
        "extensionParams": {
            "searchHandler": "emrapi.sqlSearch.admittedPatients",
            "translationKey": "MODULE_LABEL_ADMITTED_KEY",
            "forwardUrl" : "#/patient/{{patientUuid}}/visit/{{visitUuid}}/transfer"
        },
        "label": "Admitted",
        "order": 2,
        "requiredPrivilege": "app:adt"
    }
```

#### Configure "To Discharge" Tab

This tab is used to view the the list of patients who have to be discharged.

```
"bahmniAdtPatientsSearchPatientsToDischarge":{
        "id": "bahmni.adt.patients.search.patientsToDischarge",
        "extensionPointId": "org.bahmni.patient.search",
        "type": "config",
        "extensionParams": {
            "searchHandler": "emrapi.sqlSearch.patientsToDischarge",
            "translationKey": "MODULE_LABEL_TO_DISCHARGE_KEY",
            "forwardUrl" : "#/patient/{{patientUuid}}/visit/{{visitUuid}}/discharge"
        },
        "label": "To Discharge",
        "order": 3,
        "requiredPrivilege": "app:adt"
    }
```

#### Configure "All" Tab

This tab is used to view the the list of patients who have to be admitted.

```
"bahmniAdtPatientsSearchAllPatients":{
        "id": "bahmni.adt.patients.search.allPatients",
        "extensionPointId": "org.bahmni.patient.search",
        "type": "config",
        "extensionParams": {
            "translationKey": "MODULE_LABEL_ALL_KEY",
            "forwardUrl" : "#/patient/{{patientUuid}}/visit/{{visitUuid}}/admit"
        },
        "label": "All",
        "order": 4,
        "requiredPrivilege": "app:adt"
    }
```

On this Page

 
 
 
**Related Links**

[Admit, Discharge and Transfer Patients](/wiki/spaces/BAH/pages/114923665/Admit+Discharge+and+Transfer+Patients)

[Ward Management](/wiki/spaces/BAH/pages/16908311/Ward+Management)

**Feature Details**

[In-Patient Management (IPD) - Feature Guide](/wiki/spaces/BAH/pages/32604214/In-Patient+Management+IPD)

**Usage Details**

[In-Patient Management (IPD) - User Guide](/wiki/spaces/BAH/pages/32014373/In-Patient+Management)
