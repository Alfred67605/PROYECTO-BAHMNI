---
id: "23789603"
title: "Program Management"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/23789603/program-management"
version: 22
updated: "2016-02-04T12:49:07.149Z"
author: "Hanisha Potturi (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:02.333Z"
---

# Program Management

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/23789603)  
> **Versión del documento:** v22 (2016-02-04T12:49:07.149Z) | **Autor/Editor:** Hanisha Potturi (Deactivated)

---

# Configure Programs tab in Clinical Patient Search

Add the following configuration to the extension.json file present in the clinical apps config folder.

 
**config/openmrs/apps/clinical/extension.json**

```
"bahmniCLinicalPatientsSearchActicePatientsForPrograms" : {
  "id": "bahmni.clinical.patients.search.allPatients",
  "extensionPointId": "org.bahmni.patient.search",
  "type": "config",
  "extensionParams": {
    "searchHandler": "emrapi.sqlSearch.activePatientsByProvider",
    "display":"Programs",
    "forwardUrl" : "#/programs/patient/{{patientUuid}}/consultationContext"
 },
  "label": "Programs",
  "order": 1,
  "requiredPrivilege": "app:clinical"
}
```

A new tab "Programs" will be shown in the clinical patient search page

![](https://bahmni.atlassian.net/wiki/download/attachments/23789603/Screen%20Shot%202015-10-05%20at%206.46.09%20pm.png?version=1&modificationDate=1444051054502&cacheVersion=1&api=v2)

 

# Configuring Programs app in dashboard

 

Implementer can configure a separate app for 'programs' on the application dashboard. The program app would be the same as the clinical app with separate configuration for patient queues.

 

The name of the extension config will be picked up from app's url. The convention to introduce is that the first param after # in the app's url would be the name of the extension config that needs to be picked up.
 
As an example, The app's url should look like https://172.18.2.10/bahmni/clinical/#/{{extension_name}}/patient/search
**home/extension.json**

```
"programs": {
  "id": "bahmni.programs",
  "extensionPointId": "org.bahmni.home.dashboard",
  "type": "link",
  "label": "Programs",
  "url": "../clinical/#/programs/patient/search",
  "icon": "fa-tasks",
  "order": 2,
  "requiredPrivilege": "app:clinical"
}
```

**

And the programs can have its own configuration
clinical/extension-PROGRAMS.json**

```
{
  "bahmniClinicalPatientsSearchActivePatientsForPrograms": {
    "id": "bahmni.clinical.patients.search.activePatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "searchHandler": "emrapi.sqlSearch.activePatients",
      "display": "Programs",
      "forwardUrl": "#/programs/patient/{{patientUuid}}/consultationContext"
    },
    "label": "Active",
    "order": 1,
    "requiredPrivilege": "app:clinical"
  },
  "bahmniClinicalPatientsSearchAllPatients": {
    "id": "bahmni.clinical.patients.search.allPatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "display": "All",
      "forwardUrl": "#/programs/patient/{{patientUuid}}/dashboard"
    },
    "label": "All",
    "order": 2,
    "requiredPrivilege": "app:clinical"
  }
}
```

 

# Creating new Programs in OpenMRS

Programs creation is done in OpenMRS app as shown in the gif below. 

![](https://bahmni.atlassian.net/wiki/download/attachments/23789603/programs%20creation%20flow.gif?version=1&modificationDate=1439279145702&cacheVersion=1&api=v2)
 
Having more than one workflow for a program is not supported
 
Initial & terminal states flags should not be used as they are not supported by Bahmni

# Associating program to encounter type

To associate program to encounter type, Bahmni uses the generic entity mapping concept which can be configured as explained below

- 
In the entity_mapping_type table, add a record to define the mapping between program and encounter type
**entity_mapping_type entry**

```
insert into entity_mapping_type(name, uuid, entity1_type, entity2_type, date_created) 
values ('program_encountertype', uuid(), 'org.openmrs.Program', 'org.openmrs.EncounterType', now())
```

- 
In the entity_mapping table, insert a record to create the mapping between a specific program and the specific encounter type
**entity_mapping entry**

```
insert into entity_mapping(uuid, entity_mapping_type_id, entity1_uuid, entity2_uuid, date_created) 
values (uuid(), , , , now()) 
```

 

# Associating program to observation template

To associate program to observation template (concept), Bahmni uses the same generic entity mapping as above

- 
In the entity_mapping_type table, add a record to define the mapping between program and concept
**entity_mapping_type entry**

```
insert into entity_mapping_type(name, uuid, entity1_type, entity2_type, date_created) 
values ('program_obstemplate', uuid(), 'org.openmrs.Program', 'org.openmrs.Concept', now())
```

- 
In the entity_mapping table, insert a record to create the mapping between a specific program and the specific concept
**entity_mapping entry**

```
insert into entity_mapping(uuid, entity_mapping_type_id, entity1_uuid, entity2_uuid, date_created) 
values (uuid(), , , , now()) 
```

# Configuring the dashboard and Medication tab to show data within program enrollment date range

 To view all the data in dashboard and medication tab  within the program enrollment date range add this config to clinical/app.json.
**entity_mapping entry**

```
"config" : {
	"program": {
		"showDetailsWithinDateRange" : true,
	}
}
```

 

 
 
To associate programs to patients, please see [this user guide](/wiki/spaces/BAH/pages/27000864/Programs)
