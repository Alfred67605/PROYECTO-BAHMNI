---
id: "2316239350"
title: "Diagnosis Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239350/diagnosis-job"
version: 1
updated: "2021-04-05T09:29:42.841Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:27.967Z"
---

# Diagnosis Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239350)  
> **Versión del documento:** v1 (2021-04-05T09:29:42.841Z) | **Autor/Editor:** Himabindu Thungathurty

---

- 
[ColumnsToIgnore, ignoreAllFreeTextConcepts apply for this module ( Refer Appendix )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875680/Diagnosis#ColumnsToIgnore%2C-ignoreAllFreeTextConcepts-apply-for-this-module-(-Refer--%5BinlineCard%5D-))

- 
[Existing OpenMRS tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875680/Diagnosis#Existing-OpenMRS-tables)

- 
[Mart Tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875680/Diagnosis#Mart-Tables)

[Incremental Config:](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875680/Diagnosis#Incremental-Config%3A)

- 
[Mart Views](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875680/Diagnosis#Mart-Views)

If one implementation has Diagnosis, **Visit_diagnosis **table will get created with existing data otherwise an empty table will be generated since **Visit Diagnosis **comes with Bahmni product by default.

Will get all the child concepts of **Visit Diagnosis **as columns.

##### **ColumnsToIgnore, ignoreAllFreeTextConcepts apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

 To generate this table we took product dump as reference.

**Configuration**

```
{
      "name": "Diagnoses And Conditions",
      "type": "diagnosesAndConditions",
      "chunkSizeToRead": "500"
}

```

### Existing OpenMRS tables

```
Obs
Concept
Concept_name
location
visit
patient_program

```

### Mart Tables

```
visit_diagnoses
```

#### **Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#9.-Diagnoses-And-Conditions-Job:) section on how to enable/disable incremental config for specific mart tables.

a) **visit_diagnoses**

| **Column Name** | **Description** |
| --- | --- |
| id_visit_diagnoses | Obs id |
| patient_id | Id reference for patient from patient table in openmrs |
| encounter_id | In which encounter data is captured |
| visit_id | Id reference to visit from visit table in openmrs |
| obs_datetime | Obs date time from obs table in openmrs |
| date_created | date_created from visit table in openmrs |
| date_modified | date_created from visit table in openmrs |
| location_id | Id reference to location from location table. |
| location_name | Name of location from location table in openmrs |
| program_id | Id reference to program from program table in openmrs |
| program_name | Name of program from program table in openmrs |
| patient_program_id | Id reference to patient program from patient_program table in openmrs |
| bahmni_diagnosis_status |  |
| bahmni_diagnosis_revised |  |
| bahmni_initial_diagnosis |  |
| coded_diagnosis | Diagnosis name which exists in database |
| non_coded_diagnosis | Free text diagnosis name which is not part of database |
| diagnosis_certainty |  |
| diagnosis_order |  |

## Mart Views

**a) patient_diagnosis_condition_view**

| **Column Name** | **Description** |
| --- | --- |
| age_at_condition | Age of patient |
| age_group_at_condition | Age group under which the patient falls |
| birth_date | Birth date of patient |
| coded_diagnosis | Diagnosis value |
| condition_date_created | Date on which condition was recorded |
| condition_end_date | Date on which condition was removed |
| condition_id | Id reference for condition |
| condition_name | Type of condition |
| condition_onset_date | When condition was set in |
| creator | Who created the record |
| dead |  |
| diagnosis_certainty |  |
| diagnosis_order |  |
| encounter_id | Id reference for encounter |
| end_reason |  |
| gender | Gender for patient |
| nationalIdentificationNumber | ID for patient (such as passport) |
| non_coded_diagnosis | Free text diagnosis name which is not part of database |
| obs_datetime | time when observation is captured |
| patient_id | Reference ID for the patient |
| patientAddress | Patient Address |
| patientAddressLine2 | Patient Address |
| patientCountry | Patient Address |
| patientDistrict | Patient Address |
| person_id | Reference ID for the person |
| previous_condition_id | ID for previous condition |
| status | Condition status |
| telephoneNumber |  |
