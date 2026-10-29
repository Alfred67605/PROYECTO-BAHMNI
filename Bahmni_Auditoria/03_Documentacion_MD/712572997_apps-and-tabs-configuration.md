---
id: "712572997"
title: "Apps and Tabs Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/712572997/apps-and-tabs-configuration"
version: 10
updated: "2021-09-25T07:45:14.231Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:42.769Z"
---

# Apps and Tabs Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/712572997)  
> **Versión del documento:** v10 (2021-09-25T07:45:14.231Z) | **Autor/Editor:** Angshuman Sarkar

---

## Enabling the new Bed Management Module

You can enable the new BM by configuring it as an extension in *bahmni_config/home/extension.json *like below or as configured in [default config here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/extension.json#L42)
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

## App Configuration

The new Bed Management Application is configured by typical app config in form a app.json file placed within "*bahmni_config/openmrs/apps/ipd/". *You can refer to [this file](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/ipd/app.json) as an example

**

### Ward List View 
 
The configuration for this field is mandatory

```
"wardListSqlSearchHandler": "bedManagement.sqlGet.patientListForAdmissionLocation"
```

The above configuration fetches the data that is shown in the list view of a ward. You may modify the SQL query relevant to the above Global Property defined in OpenMRS. You can do this via OpenMRS Admin UI

- Administration => Maintenance => Bed Management => edit property 'SQL Get Patient List For Admission Location'

### Default Visit Type
 
The configuration for this field is mandatory

```
"defaultVisitType": "IPD"
```

The above config will set the default visit type of the patient when the user attempts to admit the patient. Note, by default a prompt is shown when the patient's current visit type is different from what is set above. You can hide the prompt by setting the configuration below. 

### Hide Alert for New Visit 

```
"hideStartNewVisitPopUp": false
```

### Expected Date of Discharge

```
"expectedDateOfDischarge": "IPD Intended Discharge"
```

The above configuration lets you define and capture details relevant to 'Expected Date of Discharge' for a patient. To use this, you may set the above configuration to a concept (type: ConvSet, Is Set = true) with FULLY SPECIFIED NAME as *'IPD Intended Discharge'*.  For example, you may create the concept as shown in example below

![](https://bahmni.atlassian.net/wiki/download/attachments/712572997/OpenMRS_-_Editing_Concept_IPD_Intended_Discharge.png?version=1&modificationDate=1535971734792&cacheVersion=1&api=v2)

In the above *Concept Set*, the member 'Expected Date of Discharge' is of data type *date*, and 'Reason For Change in Discharge' is of data type *text. *

You may further configure the 'Concept',  as below

```
"config": {
	"expectedDateOfDischarge": "IPD Intended Discharge",
	"conceptSetUI": {
    	"Expected Date of Discharge": {
       	"disableAddNotes": true,
       	"allowFutureDates": true
    } 
}
```

### Navigation Controls 
 
The following configuration elements are mandatory to define. They are intended to be used in future release for navigation to defined URLs through these configuration elements. 

```
"onAdmissionForwardTo": "#",
"onTransferForwardTo": "#",
"onDischargeForwardTo": "#"
```

"diagnosisStatus": "Inactive",

### Configure IPD Dashboard

You can create a [dashboard](/wiki/spaces/BAH/pages/37355639/Patient+Dashboard) with configuration just like in any other place which allows dashboard setup. 

[Display controls](/wiki/spaces/BAH/pages/37945573/Display+Controls) can be configured on the dashboards to give a snapshot of the captured information. You may even create your own custom display control. You can see an IPD relevant example [here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/ipd/app.json)
 
The configuration should be added under the &ldquo;dashboard" section
Sample Config**

```
"dashboard": {
	"translationKey": "DASHBOARD_TAB_GENERAL_KEY",
	"sections": {
		"patientInformation": {
			"translationKey": "DASHBOARD_TITLE_PATIENT_INFORMATION_KEY",
			"type": "patientInformation",
			"displayOrder": 0,
			"patientAttributes": ["education", "occupation", "familyIncome"],
			"addressFields": ["address1","address2","cityVillage","countryDistrict"]
		},
		"navigationLinksControl": {
			"translationKey": "DASHBOARD_TITLE_NAVIGATION_LINKS_CONTROL_KEY",
			"type": "navigationLinksControl",
			"displayOrder": 1,
			"showLinks": ["home","registration","enrolment"],
			"customLinks": [
				{
					"name": "bedManagement",
					"translationKey": "PATIENT_BED_MANAGEMENT_PAGE_KEY",
					"url": "../bedmanagement/#/bedManagement/patient/{{patientUuid}}"
				}
			]
		}, 
		"vitals": {
			"translationKey":"DASHBOARD_TITLE_VITALS_KEY",
			"type": "vitals",
			"displayOrder": 0,
			"isObservation": true,
			"dashboardConfig": {
			"conceptNames": ["Vitals"],
			"numberOfVisits": 2
		}
	}
	.....
	.....
}

```

**

## Configure Patient Lists/Queues

Add the configuration in extension.json file in the *ipd* folder here [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/adt/extension.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/adt/extension.json)

The extension that you need to implement is *"org.bahmni.patient.search"*

### Configure "To Admit" Tab

This tab is used to view the the list of patients who are asked to admit.

```
"bahmniAdtPatientsSearchPatientsToAdmit":{
    "id": "bahmni.adt.patients.search.patientsToAdmit",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "searchHandler": "emrapi.sqlSearch.patientsToAdmit",
      "translationKey": "MODULE_LABEL_TO_ADMIT_KEY",
      "forwardUrl":"#/bedManagement/patient/{{patientUuid}}"
    },
    "label": "To Admit",
    "order": 1,
    "requiredPrivilege": "app:adt"
  }
```

### Configure Admitted Tab

This tab is used to view the the list of patients who are already admitted.

```
"bahmniAdtPatientsSearchPatientsAdmitted":{
    "id": "bahmni.adt.patients.search.patientsAdmitted",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "searchHandler": "emrapi.sqlSearch.admittedPatients",
      "translationKey": "MODULE_LABEL_ADMITTED_KEY",
      "forwardUrl" : "#/bedManagement/patient/{{patientUuid}}"
    },
    "label": "Admitted",
    "order": 2,
    "requiredPrivilege": "app:adt"
}
```

### Configure "To Discharge" Tab

This tab is used to view the the list of patients who have to be discharged.

```
"bahmniAdtPatientsSearchPatientsToDischarge":{
    "id": "bahmni.adt.patients.search.patientsToDischarge",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "searchHandler": "emrapi.sqlSearch.patientsToDischarge",
      "translationKey": "MODULE_LABEL_TO_DISCHARGE_KEY",
      "forwardUrl" : "#/bedManagement/patient/{{patientUuid}}"
    },
    "label": "To Discharge",
    "order": 3,
    "requiredPrivilege": "app:adt"
}
```

### Configure "All" Tab

This tab is used to view the the list of patients who have to be admitted.

```
"bahmniAdtPatientsSearchAllPatients":{
    "id": "bahmni.adt.patients.search.allPatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "translationKey": "MODULE_LABEL_ALL_KEY",
      "forwardUrl" : "#/bedManagement/patient/{{patientUuid}}"
    },
    "label": "All",
    "order": 4,
    "requiredPrivilege": "app:adt"
}
```

### Print current list of patients in wards (0.93+)

You can enable the configuration in "*bahmni_config/openmrs/apps/ipd/app.json". *See example [here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/ipd/app.json#L15). 
Enable Print of Ward List**

```
config: {
     "wardListPrintEnabled": true,
     "wardListPrintViewTemplateUrl": "/bahmni_config/openmrs/apps/ipd/wardListPrint.html",
     "wardListPrintAttributes":[],
     ...
}
```

You can customize your print layout by using a custom template. You can see an example usage [here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/ipd/wardListPrint.html). If you do not mention the templateUrl, then a default print layout is used. 

On this Page

 
 
 
**Related Links**

[Ward Management Admin Console](/wiki/spaces/BAH/pages/712507393/Ward+Management+Admin+Console)

**Feature Details**

[Bed Management - Feature Guide](/wiki/spaces/BAH/pages/699400201/Bed+Management+BM)

**Usage Details**

[Bed Management - User Guide](/wiki/spaces/BAH/pages/707559542/Bed+Management)
