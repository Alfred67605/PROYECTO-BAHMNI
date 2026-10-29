---
id: "2316239418"
title: "EAV (Entity Attribute Value) Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239418/eav-entity-attribute-value-job"
version: 3
updated: "2022-07-08T05:31:25.252Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:32.846Z"
---

# EAV (Entity Attribute Value) Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239418)  
> **Versión del documento:** v3 (2022-07-08T05:31:25.252Z) | **Autor/Editor:** Himabindu Akkinepalli

---

We have EAV job in mart to get the attributes for Provider, Programs, Person, Visits and Operation Theatre. Also the identifier values for Patient. Below is the list of mart tables for the same.

#### 1. Provider Attributes

`provider_attributes` table gives all the provider attribute information in an implementation.

Openmrs tables used: provider, provider_attribute, provider_attribute_type

##### **Existing OpenMRS tables**

```
provider
provider_attribute
provider_attribute_type

```

**provider.json:**

```
{
      "name": "Provider Attributes",
      "type": "eav",
      "tableName": "provider_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "provider_attribute_type",
        "attributeTableName": "provider_attribute",
        "valueTableJoiningId": "attribute_type_id",
        "typeTableJoiningId": "provider_attribute_type_id",
        "valueColumnName": "value_reference",
        "primaryKey": "provider_id"
      }
    }

```

#### 2. **Patient Identifier**

`patient_identifier` is the mart table and the columns are the pivoted values in identifier_type table.

Openmrs tables used: patient, person, patient_identifier

##### Existing OpenMRS tables

```
patient
person
patient_identifier

```

The `patient_identifier` mart table has all the columns from `patient_identifier_type` openmrs table,

`patient_id` from `patient_identifier`;

**patients.json:**

```
{
      "name": "Patient identification",
      "type": "eav",
      "tableName": "patient_identifier",
      "eavAttributes": {
        "attributeTypeTableName": "patient_identifier_type",
        "attributeTableName": "patient_identifier",
        "valueTableJoiningId": "identifier_type",
        "typeTableJoiningId": "patient_identifier_type_id",
        "valueColumnName": "identifier",
        "primaryKey": "patient_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "patient_id",
        "eventCategory": "patient",
        "openmrsTableName": "person"
      }
    }

```

#### 3. Person Attributes

`person_attributes` table contains  all the patient attributes that where used in the registration page. Columns will be generated dynamically based on the attributes that were used as a part of that specific implementation.

Eg : givenName, familyName, isCaretakerRequired, caretakerGender

##### Existing OpenMRS tables

```
person
person_name
Patient_identifier
person_attribute
person_attribute_type

```

**person.json:**

```
{
      "name": "Person Attributes",
      "type": "eav",
      "tableName": "person_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "person_attribute_type",
        "attributeTableName": "person_attribute",
        "valueTableJoiningId": "person_attribute_type_id",
        "typeTableJoiningId": "person_attribute_type_id",
        "valueColumnName": "value",
        "primaryKey": "person_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "person_id",
        "eventCategory": "patient",
        "openmrsTableName": "person"
      }
    }

```

#### 4. Program Attributes:

`program_attributes` table gives all the program attributes enrolled for a particular patient.

Openmrs tables used: program_attribute_type, patient_program_attribute

##### Existing OpenMRS tables

```
Program
patient_program_attribute
patient_program

```

**programs.json:**

```
{
      "name": "Program Attributes",
      "type": "eav",
      "tableName": "program_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "program_attribute_type",
        "attributeTableName": "patient_program_attribute",
        "valueTableJoiningId": "attribute_type_id",
        "typeTableJoiningId": "program_attribute_type_id",
        "valueColumnName": "value_reference",
        "primaryKey": "patient_program_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "patient_program_id",
        "eventCategory": "programenrollment",
        "openmrsTableName": "patient_program"
      }
    }

```

#### 5. Visit Attributes:

`visit_attributes` table gives all the visit attributes for that particular visit type.

##### Existing OpenMRS tables

```
visit_type
visit
visit_attribute
visit_attribute_type

```

 

**visitsAndEncounters.json:**

```
{
      "name": "Visit Attributes",
      "type": "eav",
      "tableName": "visit_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "visit_attribute_type",
        "attributeTableName": "visit_attribute",
        "valueTableJoiningId": "attribute_type_id",
        "typeTableJoiningId": "visit_attribute_type_id",
        "valueColumnName": "value_reference",
        "primaryKey": "visit_id"
      }
    }

```

#### 6. OT Attributes:

`surgical_appointment_attributes` gives all the surgical attributes created for a surgery.

##### Existing OpenMRS tables

```
Surgical_appointment
Surgical_appointment_attribute
Surgical_appointment_attribute_type

```

 

**operationTheatre.json:**

```
{
      "name": "Surgical Appointment Attributes",
      "type": "eav",
      "tableName": "surgical_appointment_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "surgical_appointment_attribute_type",
        "attributeTableName": "surgical_appointment_attribute",
        "valueTableJoiningId": "surgical_appointment_attribute_type_id",
        "typeTableJoiningId": "surgical_appointment_attribute_type_id",
        "valueColumnName": "value",
        "primaryKey": "surgical_appointment_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "surgical_appointment_id",
        "eventCategory": "surgicalappointment",
        "openmrsTableName": "surgical_appointment"
      }
    }
```
