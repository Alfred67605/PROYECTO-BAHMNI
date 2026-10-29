---
id: "2306540158"
title: "Bacteriology Data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540158/bacteriology-data"
version: 1
updated: "2021-04-05T09:31:21.775Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:28.847Z"
---

# Bacteriology Data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540158)  
> **Versión del documento:** v1 (2021-04-05T09:31:21.775Z) | **Autor/Editor:** Himabindu Thungathurty

---

All observations recorded against the concept Bacteriology Concept Set and it&rsquo;s children will be in one table.** **All multi select and add more sections under this concept will become separate tables.

 

### **configuration**

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

Currently bacteriology job is running with full load

```
{
      "name": "Bacteriology Data",
      "conceptReferenceSource": "",
      "type": "bacteriology",
      "columnsToIgnore": [
        "Image",
        "Video"
      ]
    }

```

 
**If any modification done to existing bacteriology post encounter ends then it won&rsquo;t sync to mart with incremental config**

### Existing OpenMRS tables

```
Obs
visit
program
patient_program
location

```

### Flattened Mart Tables

Since we do not have add mores/ multi-selects in bacteriology form in demo environment, there will be only one table :- **bacteriology_concept_set** which will have all the details.

```
bacteriology_concept_set
```

Some of the columns in this table are as follows. Others columns are not mentioned here

| **Column Name** | **Description** |
| --- | --- |
| id_bacteriology_concept_set | Id reference to bacteriology concept set from   |
| patient_id |  Id reference to patient from patient table in openmrs |
| visit_id | Id reference for a visit |
| encounter_id | In which encounter data is captured |
| obs_datetime | Observation date and time |
| date_created | Date when Bacteriology details are filled for the first time |
| date_modified | Date of recent Bacteriology details updation |
| location_id | Location code |
| location_name | Location name |
| program_id | Program code |
| program_name | Name of the program |
| patient_program_id | Id reference to patient program from patient_program table in openmrs |
| Specimen_collection date | Date of collection of the specimen |
| specimen_sample_source_noncoded | Free text answers for sample source not available in DB |
| specimen_sample_source | Predefined answers for sample source available in DB |
| specimen_id | Unique id for specific observation |

 

### **Translations**

if we need to get those values as per the translations we need to add the below **locale tag** in the &ldquo;**/var/www/bahmni_config/bahmni-mart/bahmni-mart.json**&ldquo; file.

```
{
      "name": "Bacteriology Data",
      "conceptReferenceSource": "",
      "type": "bacteriology",
      "locale" : "fr"
    }

```
