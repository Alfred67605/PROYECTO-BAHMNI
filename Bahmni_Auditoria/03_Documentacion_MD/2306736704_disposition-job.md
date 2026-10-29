---
id: "2306736704"
title: "Disposition Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736704/disposition-job"
version: 1
updated: "2021-04-05T09:34:18.593Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:31.591Z"
---

# Disposition Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736704)  
> **Versión del documento:** v1 (2021-04-05T09:34:18.593Z) | **Autor/Editor:** Himabindu Thungathurty

---

### **Configuration**

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
 {
      "name": "Disposition Data",
      "type": "disposition",
      "columnsToIgnore": [],
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      }
    }
]

```

### Existing OpenMRS tables

```
concept
concept_set
concept_name
patient
visit
obs
location
program
patient_program
ecnounter

```

**Flattened Mart Tables**

```
disposition_set
```

**a) dispostion_set- **This table provides the information about the disposition of the patient enrolled from programs/clinical module.

| **Column Name** | **Description** |
| --- | --- |
| id_disposition_set | Id reference to the disposition set |
| patient_id | Id reference to the patient from patient table in openmrs |
| encounter_id | Id reference to the encounter from encounter table in openmrs |
| visit_id | Id reference to the visit from the visit table in openmrs |
| obs_datetime | obs date time from obs table in openmrs |
| date_created | date of disposition got created |
| date_modified | date of disposition got modified |
| location_id | location id of the patient |
| location_name | location name |
| program_id | Id reference to what program that particular patient is assigned to |
| program_name | Name of the program assigned |
| patient_program_id | patient_program_id from patient_program openmrs table |
| disposition_note | Disposition note entered while enrolling for disposition |
| disposition | Disposition of which the patient enrolled to |

 

### **Translations**

if we need to get those values as per the translations we need to add the below **locale tag** in the &ldquo;**/var/www/bahmni_config/bahmni-mart/bahmni-mart.json**&ldquo; file.

```
{
      "name": "Disposition Data",
      "type": "disposition",
      "locale": "fr"     
}

```
