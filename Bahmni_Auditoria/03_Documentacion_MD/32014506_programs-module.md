---
id: "32014506"
title: "Programs Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014506/programs-module"
version: 95
updated: "2024-09-10T12:02:38.265Z"
author: "Parvathy Babu"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:21.405Z"
---

# Programs Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014506)  
> **Versión del documento:** v95 (2024-09-10T12:02:38.265Z) | **Autor/Editor:** Parvathy Babu

---

## Purposes and Benefits

The Programs module is used to monitor and keep track of patients who need to be treated for conditions that require periodic monitoring to ensure recovery. The Programs module can be used to:

- Create Programs pertaining to diseases or conditions.
- Enroll patients in programs specific to their condition.
- Configure Program Attributes specific to installations.
- Monitor a patient's progress through the program.
- Remove a patient from the program.

## Steps
**General Guidelines**

- Having more than one workflow for a program is not supported.
- Initial and terminal states flags in a program are not supported by Bahmni.

### **1. Configure Programs app in Bahmni Home page**

The implementer can configure a separate app for "Programs" on the application dashboard. The "Programs" app is the same as the Clinical app with a separate configuration for patient queues.

The name of the extension config is picked up from app's url as follows: the first parameter after # in the app's url is the name of the extension config that needs to be picked up. For example, the app's url should look like https://<IP_or_domain_name>/bahmni/clinical/#/{{extension_name}}/patient/search

Edit the **home/extension.json** as shown below:

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

The programs app has its own configuration at **/var/www/bahmni_config/openmrs/apps/clinical/extension-programs.json** . To configure specific search tabs and observation display controls put the related config in extension-programs.json.

#### **Configure Patient Queues (search tabs)**
To configure the first tab to search amongst active patients enrolled in programs:

```
{
  "bahmniClinicalPatientsSearchActivePatientsForPrograms": {
    "id": "bahmni.clinical.patients.search.activePatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "searchHandler": "emrapi.sqlSearch.activePatients",
      "display": "Programs",
      "forwardUrl": "#/patient/{{patientUuid}}/consultationContext"
    },
    "label": "Active",
    "order": 1,
    "requiredPrivilege": "app:clinical"
  }
```

To configure the second tab to search amongst  all enrolled patients:

```
{
  "bahmniClinicalPatientsSearchAllPatients": {
    "id": "bahmni.clinical.patients.search.allPatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "display": "All",
      "forwardUrl": "#/patient/{{patientUuid}}/consultationContext"
    },
    "label": "All",
    "order": 2,
    "requiredPrivilege": "app:clinical"
  }
```

### 2. Configure "Programs" Tab in the Clinical Module

To make the "Programs" tab appear in the Clinical module, add the following configuration to /var/www/bahmni_config/openmrs/apps/clinical/extension.json file.

Modify the "**extension.json" **to contain the snippet present below:

```
"bahmniCLinicalPatientsSearchActicePatientsForPrograms" : {
  "id": "bahmni.clinical.patients.search.allPatients",
  "extensionPointId": "org.bahmni.patient.search",
  "type": "config",
  "extensionParams": {
    "searchHandler": "emrapi.sqlSearch.activePatientsByProvider",
    "display":"Programs",
    "forwardUrl" : "#/default/patient/{{patientUuid}}/consultationContext"
 },
  "label": "Programs",
  "order": 1,
  "requiredPrivilege": "app:clinical"
}
```

When the json file is configured as mentioned above, a new tab "Programs" will be shown in the clinical patient search page.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014506/Screen%20Shot%202015-10-05%20at%206.46.09%20pm.png?version=1&modificationDate=1448210754814&cacheVersion=1&api=v2)

**Programs tab on the Patient Search Page**
******
### 3. Create new Programs in OpenMRS

Please refer [Configure Programs](/wiki/spaces/BAH/pages/37945598/Configure+Programs)

### 4. Associate a Program to an Encounter Type

To associate a program to an encounter type, Bahmni uses the generic entity mapping concept which can be configured as explained below. 

a) In the entity_mapping_type table, add a record to define the mapping between program and encounter type:

```
insert into entity_mapping_type(name, uuid, entity1_type, entity2_type, date_created) values ('program_encountertype', uuid(), 'org.openmrs.Program', 'org.openmrs.EncounterType', now()); 
```

b) In the entity_mapping table, insert a record to create the mapping between a specific program and the specific encounter type

```
insert into entity_mapping(uuid, entity_mapping_type_id, entity1_uuid, entity2_uuid, date_created) values (uuid(), , , , now()); 
```

### 5. Associate an Observation template to a Program 

To associate an observation template (as a concept) to a program, Bahmni uses the same generic entity mapping as above. To do this, follow the below steps

a) In the entity_mapping_type table, add a record to define the mapping between program and concept

```
insert into entity_mapping_type(name, uuid, entity1_type, entity2_type, date_created) values ('program_obstemplate', uuid(), 'org.openmrs.Program', 'org.openmrs.Concept', now()); 
```

b) In the entity_mapping table, insert a record to create the mapping between a specific program and the specific concept

```
insert into entity_mapping(uuid, entity_mapping_type_id, entity1_uuid, entity2_uuid, date_created) values (uuid(), , , , now());
```

### 6. Configure Program Attributes

For a patient is enrolled in a program, there can be some additional attribute types that are specific to the patient’s enrollment into the program. These attribute types are called Program Attributes but have various values based on the patient. Examples of Program Attribute types are Program Identifier, Date of Enrollment, Facility of Enrollment, etc.

Bahmni supports the ability to capture values for Program Attribute types. These attributes can be captured or edited during the start or course of the Program and are configurable based on usage needs.

To configure program attributes for the installation,use the SQL query below to add a program attribute. The datatype can be one of the following :

```
org.openmrs.customdatatype.datatype.FreeTextDatatype
org.openmrs.customdatatype.datatype.BooleanDatatype 
org.openmrs.customdatatype.datatype.DateDatatype 
org.openmrs.customdatatype.datatype.RegexValidatedTextDatatype
org.openmrs.customdatatype.datatype.ConceptDatatype
```

Note
 
- For org.openmrs.customdatatype.datatype.RegexValidatedTextDatatype Attribute Type, datattype_config column should have the valid Regex Pattern.
- For org.openmrs.customdatatype.datatype.ConceptDatatype Attribute Type, datattype_config column should have Concept Id of the Concept which has the Concept Answers that you want to configure.

Adding program attributes**

```
insert into program_attribute_type(name, description, datatype, min_occurs, creator, date_created, uuid) values('Sample attribute1','This is a test attribute', 'org.openmrs.customdatatype.datatype.FreeTextDatatype', 0, 1, NOW(), UUID());
 
insert into program_attribute_type(name, description, datatype, datatype_config, min_occurs, creator, date_created, uuid) values('Sample attribute3','This is a NumericRegex attribute', 'org.openmrs.customdatatype.datatype.RegexValidatedTextDatatype', '[0-9]*', 0, 1, NOW(), UUID());

insert into program_attribute_type(name, description, datatype, datatype_config, min_occurs, creator, date_created, uuid) values('Sample attribute2','This is a CodedConcept attribute', 'org.openmrs.customdatatype.datatype.ConceptDatatype', 123, 0, 1, NOW(), UUID());

******* 123 is Concept Id
```

### 7. Configuring Mandatory Program Attributes

In the** app.json** of the **clinical** module, add the following configuration:
**Configuring mandatory program attributes**

```
"config" : {
    "program": {
        "programAttributeName" : {
            "required" : true
        }
    }
}
```

### **8. Hiding specific Program Attributes For Program

In the **app.json** of the **clinical** module, add the following configuration to hide specific Program Attributes based on Program selected. This feature is available from release-0.90.
Hiding specific Program Attributes**

```
"config" : {
    "program": {
        "programAttributeName" : {
            "excludeFrom" : ["ProgramName"]
        }
    }
}
```

### 9. Configure Patient Attributes to Show Age in Years

In the app.json of the clincal module, add the following configuration. This shows the patient age only in years on program management page.

```
"config" : {
	"program": {
    	"patientInformation": {
     		"ageLimit":100
    	}
	}
}
```

### 10. Configuring display control for Program Attributes 

In the app.json of the clinical module, add the following configuration:
**Configuring mandatory program attributes**

```
"config" : {
    "programDisplayControl": {
    	"showProgramStateInTimeline": true,
    	"programAttributes": [
        	"Treatment_Date",
			"Doctor",
			"Id"
    	]
	}
}
```

 
- If *showProgramStateInTimeline* is false or not configured, the program states are displayed in tabular format, else it switches to the timeline view.
- To configure which program attributes are to be displayed, they have to be added to the list called *programAttributes*. If the list is empty or the whole key itself is missing, the display control defaults to displaying all program attributes.
- If some the attributes are wrongly configured, they will not show up in the UI. 
- If some attributes don't have any value but are configured, they will show up with just the label and no value. 
- To hide all the values specify a blank list in the programAttributes.

### 11. Retire a Program

Refer [Retire Programs](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Programs#ConfigurePrograms-2.RetireaProgram)

### 12. Adding observations for Past Programs

We can add observations against a program. Whenever you end a program, that program will be listed under past programs. So if you go to patient dashboard through past programs and add some observations, they will be added against that program. In this way you can add observations against past programs.

### 13. Configure Forms Display Control

We can display the Forms Display Control in the Program Enrolment page. A patient is initially triaged by the nurse and then the form is reviewed by the doctor and the doctor indicates the category of the patient . For the nurse , the steps would include

- Enrolling the patient into the program (Eg: pre-patient triage)
- Filling out the triage form

Whereas, for a doctor, the steps would include

- Reviewing the triage form 
- Updating the program state and speciality. 

To make navigation easier for both the nurses and the doctors, we are showing the forms in the program enrolment page.**
In the **clinical/app.json**, add the following configuration in the config section:

```
"observationForms": {
     "numberOfVisits": 10
}
```

On this Page

 
 
 
Feature Details**

[Hospital Programs - Feature Guide](/wiki/spaces/BAH/pages/32604193/Treatment+Programs)

**Usage Details**

[Programs - User Guide](/wiki/spaces/BAH/pages/27000864/Programs)
