---
id: "2306540078"
title: "Bed Management - Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540078/bed-management-module"
version: 2
updated: "2021-04-05T09:22:04.185Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:24.354Z"
---

# Bed Management - Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540078)  
> **Versión del documento:** v2 (2021-04-05T09:22:04.185Z) | **Autor/Editor:** Bavisetti Venkatesh

---

### **Configuration**

##### **ColumnsToIgnore apply for this module ( Refer  **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Bed Management",
      "type": "bedManagement",
      "chunkSizeToRead": "500"
}
```

### Existing OpenMRS tables

```
Bed
Bed_tag_map
Bed_tag
Bed_patient_assignment_map
Bed_type
Bed_location_map
Location
Encounter
Visit
Visit_type
```

### Flattened Mart Tables

Note : The below Mart tables are created by customSql job type.

```
bed_patient_assignment_default
bed_tags_default
current_bed_details_default
```

#### **Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#5.-Bed-Management-Job:) section on how to enable/disable incremental config for specific mart tables.

a) **bed_patient_assignment_default**

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Patient identification number. |
| bed_id | Id reference for a bed |
| bed_number | Number assigned by hospital for a bed for their identification. |
| date_started | Date time column that gives occupancy duration of patient on different encounters |
| date_stopped | Date time column that gives occupancy duration of patient on different encounters |
| location | location of the patient in bed management module |
| encounter_id | Encounter on which the bed was occupied by the patient |
| encounter_datetime | Time of encounter |
| visit_id | Id of the visit |
| visit_type | Type of visit of the patient |

**b) bed_tags_default**

| **Column Name** | **Description** |
| --- | --- |
| bed_tag_map_id | Id reference for bed tag map |
| bed_id | Id reference for a bed |
| bed_location | Location of bed in the hospital |
| bed_number | Number assigned by hospital for a bed for their identification |
| bed_status | Status of the bed (eg :Available, Occupied ) |
| bed_tag_name | Tag for bed (eg : Lost, Isolation, Strict Isolation, Reserved for CT) |
| date_created | tag start date |
| date_changed | tag changed date |
| date_stopped | Date stopped is date voided |

**c) current_bed_details**

| **Column Name** | **Description** |
| --- | --- |
| bed_id | Id reference for a bed |
| bed_location | Location of bed in the hospital |
| bed_number | Number assigned by hospital for a bed for their identification. |
| bed_type | Type of bed |

###  Mart Views

**a)** **bed_management_view**

This view provides the details of all the beds that a patient had been assigned to along with details like start and end date & time. It also provides information about the status of each bed when assigned to the patient and its location in the hospital. Since a patient may be assigned to different beds at different times there will be multiple rows for same patient.

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Patient identification number. |
| visit_id | Id reference for visit |
| bed_number | Number assigned by hospital for a bed for their identification. |
| date_started | Date time column that gives occupancy duration of patient on different encounters |
| date_stopped | Date time column that gives occupancy duration of patient on different encounters |
| location | location of the patient in bed management module |
| encounter_type_name | Encounter on which the bed was occupied by the patient |
| bed_tag_name | tag name assigned to the bed |
| tag_start_date | tag start date |
| tag_end_date | tag end date |

**b)** **patient_bed_tags_history_view**

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Id reference for a patient |
| visit_id | Patient visit id |
| encounter_id | Id reference for an encounter |
| bed_number | Bed number |
| location | Location in hospital |
| age_at_bed_assignment | Age of patient |
| age_group_at_bed_assignment | Under which age range the patient belongs |
| action | action performed ( Movement/Discharge etc..) |
| assigned_on | Assigned date |
| discharged_on | Patient discharge date |
| bed_tags | Bed tag, if tagged |
| bed_tag_created | Date bed was tagged |
| bed_tag_removed | Date bed tag was removed |

**  c)** **patient_bed_view**

| **Column Name** | **Description** |
| --- | --- |
| age_at_bed_assignment | Age of the patient during bed assignment |
| bed_assigned_date | Date of bed assignment |
| bed_discharged_date | Date of discharge from bed |
| birth_year | Year of birth of the patient |
| dead | True (Patient is Dead) False(Patient is not Dead) |
| gender | Gender of the patient |
| location | Location of the bed |
| nationalIdentificationNumber | Patient attribute |
| patient_id | Id of the Patient |
| patientAddress | Patient attribute |
| patientAddressLine2 | Patient attribute |
| patientCountry | Patient attribute |
| patientDistrict | Patient attribute |
| person_id | Person id of the patient |
| telephoneNumber | Patient Attribute |
| visit_id | Visit id of the patient |
