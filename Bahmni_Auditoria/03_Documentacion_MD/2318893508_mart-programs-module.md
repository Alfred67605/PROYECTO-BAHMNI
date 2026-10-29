---
id: "2318893508"
title: "Mart Programs Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893508/mart-programs-module"
version: 2
updated: "2021-04-05T09:20:13.343Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:22.906Z"
---

# Mart Programs Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893508)  
> **Versión del documento:** v2 (2021-04-05T09:20:13.343Z) | **Autor/Editor:** Bavisetti Venkatesh

---

This module is similar to the Clinical module present in the product. 
 
### Configuration

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

##### **ColumnsToIgnore apply for this module ( Refer  **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

```
"jobs": [
{
      "name": "Programs",
      "type": "programs",
      "chunkSizeToRead": "500"
      "groupedJobConfigs": [
        {
          "tableName": "program_outcomes_default",
          "columnsToIgnore": [     
          ]
        }
      ]
}
```

### Existing OpenMRS tables

```
Program
Concept
Concept_set
Concept_name
Concept_view
Patient_program
Episode_patient_program
Location
Patient
Patient_state
Program_workflow_state
Program_workflow
```

### Flattened Mart Tables

```
programs_default
program_outcomes_default
patient_program_data_default
program_workflow_default
program_workflow_states_default
program_attributes
```

#### **Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#3.-Programs-Job:) section on how to enable/disable incremental config for specific mart tables.

a) **programs_default*** - *This table gives all the programs in an implementation

Openmrs tables used: **program**

| **Column Name** | **Description** |
| --- | --- |
| program_id | Program id as in Openmrs |
| program_name | Name of the Program |
| program_description | Description of the Program |
| creator_id | Creator ID of the Program |
| creator_name | Name of the Creator |
| date_created | Date on which the Program was created |
| date_changed | If any modifications to the Program is done, the date the changes were done is captured here |
| changed_by_id | ID by whom the change was done |
| changed_by_name | Name by whom the change was done |

**b) program_outcomes_default ***- *This table lists all the outcomes for a program. Each outcome of a program will be a separate row
Openmrs tables used: program, concept, concept_set, concept_name

| **Column Name** | **Description** |
| --- | --- |
| program_id | Program id as in Openmrs |
| program_name | Name of the Program |
| program_outcome | Outcome of the program |

**c)  patient_program_data_default **- This table gives the data about when the patient is enrolled into a program, completion date of the program and other information like location at which the patient enrolled into a program etc.
Openmrs tables used: patient_program, episode_patient_program, concept_name, location

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Database id of patient |
| program_id | Program id as in Openmrs |
| patient_program_id | Unique id generated when a patient is enrolled in to a program from Openmrs table patient_program |
| date_enrolled | Date enrolled in to the program |
| age_during_enrollment | Age of the patient during program enrollment (Date difference of birth date and program enrollment date ) |
| date_completed | Date when the patient completed the program |
| age_during_completion | Age of the patient during program completion (Date difference of birth date and program completion date) |
| location_id | Id of the location where the patient is enrolled to a program |
| location_name | Name of the location where the patient is enrolled to a program |
| program_outcome | Outcome of the program for patient |
| creator_id | Id of the user who enrolled the patient in to program |
| creator _name | Name of the user who enrolled the patient in to program |
| date_created | Date on which the entry was made |
| date_changed | If any modifications to the patient program enrolment is done, the date the changes were done |
| changed_by_id | ID by whom the change was done |
| changed_by_name | Name by whom the change was done |
| voided | If patient information is deleted, voided shows true. (From Openmrs table patient_program) |

**d) program_workflow_default*** - *This table lists all the workflows in a program. This is a metadata table that does not capture any user entered information. Every program can have a workflow that determines all the states a patient can transition to in that program*.*

Openmrs tables used: program_workflow, concept_view

| **Column Name** | **Description** |
| --- | --- |
| program_id | Program id as in Openmrs |
| program_workflow_id | Id of the workflow |
| program_workflow_name | Name of the workflow |

**f) program_workfow_states_default** *-* This table lists all the states in workflows in a program. This is a metadata table that does not capture any user entered information. Every program can have a workflow that determines all the states a patient can transition to in that program.

Openmrs tables used: program_workflow_state, program_workflow, users, concept_view

| **Column Name** | **Description** |
| --- | --- |
| program_workflow_state_id | Unique id generated for a program workflow state |
| program_workflow_id | Unique id generated for program workflow |
| state_name | Name of the state |
| program_workflow_name | Name of the program workflow |
| initial | True if the state is initial state else False |
| terminal | True if the state is terminal state else False |
| creator_id | Id of the creator of the state |
| creator_name | Name of the creator of the state |
| date_created | Date on which the state was created |
| date_changed | Date on which if any changes are made |
| changed_by_id | Id of the user who made changes |
| changed_by_name | Name of the user who made changes |

g) **program_attributes -**This table gives all the program attributes enrolled for a particular patient.

Openmrs tables used: program_attribute_type, patient_program_attribute

**Mart Table:- program_attributes**

| **Column Name** | **Description** |
| --- | --- |
| patient_program_id | Unique id generated in DB when a patient is enrolled to a program |
| program_attribute 1 |  |
| program_attribute 2 |  |

###                                                                                Mart Views
a)     **patient_program_view**

This view gives all the person details along with the program details that patient has been enrolled to. If a patient is enrolled into 2 programs (or twice in to the same program), there will be 2 rows corresponding to that patient id. The data related to programs will be different in two rows where as the person details data will be duplicated. This gives person details like gender, birthdate, person address, person attributes captured in registration page and program data like date enrolled in to the program, date of completion and program outcome. Patient details also includes  (Patient’s age during program enrollment) and age_group_at_progage_at_programram (Patient’s age group during program enrollment).

Mart tables used: person_details,  person_address, person_attributes, patient_program_data

b)**   patient_program_state_view**

This view gives all the person details along with the program details that patient has been enrolled to. If a patient is enrolled into 2 programs (or twice in to the same program), there will be 2 rows with different patient_program_id corresponding to that patient id. The data related to programs will be different in two rows where as the person details data will be duplicated. This gives person details like gender, birthdate, person address, person attributes captured in registration page and program data like date enrolled in to the program, date of completion and program outcome. Patient details also includes  (Patient’s age during program enrollment) and age_group_at_progage_at_programram (Patient’s age group during program enrollment).

Mart tables used: person_details,  person_address, person_attributes, patient_program_data

Note: **patient_program_view** doesn’t have state transition rows where as **patient_program_state_view** have it.

c)     **patient_program_info_view**

This view gives all the programs a patient is enrolled in to and all the state transitions that a patient has undergone as part of the program. Every patient state that details state name, start date of the state and end date of the state will be a different row and all the program related information like program name, date enrolled in to program will be duplicated.* *

Mart tables used: programs, patient_program_data, patient_state
