---
id: "2306736675"
title: "Observations Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736675/observations-job"
version: 1
updated: "2021-04-05T09:31:53.688Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:29.453Z"
---

# Observations Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736675)  
> **Versión del documento:** v1 (2021-04-05T09:31:53.688Z) | **Autor/Editor:** Himabindu Thungathurty

---

### 
**Configuration**

##### **ColumnsToIgnore, , ignoreAllFreeTextConcepts, separateTableConfig, enableForAddMoreAndMultiSelect apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Obs Data",
      "type": "obs",
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      },
      "separateTableConfig": {
        "enableForAddMoreAndMultiSelect": true,
        "separateTables": [
        ]
      },
      "conceptReferenceSource": "",
      "ignoreAllFreeTextConcepts": true,
      "columnsToIgnore": [
      ]
}

```

### **Existing OpenMRS tables**

```
Obs
```

### Flattened Mart Tables

All forms that are under the concept ALL OBSERVATION TEMPLATES will become separate tables in the mart database. Any multi select or add more sections under these forms will become separate tables by default. One can also choose the concepts they want to have as separate tables using separate Tables configuration in obs job.

Since we have 51 forms under All Observation Template of demo environment currently, there will be 51 separate tables. Additionally all multi select, add more sections and concepts from seperateTables config will become separate tables.

Below are the columns that are common in every form table

| **Column Name** | **Description** |
| --- | --- |
| patient_id |  Id reference to the patient from patient table |
| encounter_id | In which encounter data is captured |
| obs_datetime | Observation date and time |
| location_id | Location code |
| location_name | Location name |
| program_id | Program code |
| program_name | Name of the program |
| date_created  | Date of form creation (When filled for the first time) |
| date_modified | Date of recent form updation (When any form fields are filled again or modified in same encounter) |
| visit_id | In which visit data is captured |

### Translations

if we need to get those values as per the translations we need to add the below **locale tag** in the &ldquo;**/var/www/bahmni_config/bahmni-mart/bahmni-mart.json**&ldquo; file.

```
{
      "name": "Obs Data",
      "type": "obs",
      "locale": "fr"
      }

```

 

### **Changing form name in production**

Whenever we update the form name ( by updating concept set name in form1 and updating form name from implementer interface in form2 ) and run mart with incremental load a new table is created in mart with new form name. It also migrates the existing observation in old table to new table and any modifications to old observations or new observations are reflected/loaded into new form table only. This makes the old form table useless and inconsistent with current data in system. The old table can only be deleted by running mart on Full load.

**Note: **To avoid confusion it is always recommended to run mart on full load after the form name is updated. 

### Use-Cases

Some Additional information in use-case view:-

- 
**When a form has a multi select coded answer**

Separate table with the question name is created and the multi select answers are inserted in each row

- 
If the same question is used in a separate form, then the data is inserted in the same table if the table is created for the multi select question.

- 
**When a form has a section which is not add more**

The section data is inserted in the same form table without creating a new table

- 
**When a form has a section which is add more**

Section data is inserted in a separate table.

- 
Table name will be formname_Section name

- 
**When a form has a section which is not add more and a multi select coded answer**

Section data is inserted in Form table

- 
Multi select answer is inserted in a separate table

- 
**When a form has a section which is add more and a multi select coded answer**

Section data is inserted in a separate section table

- 
Multi select answer is inserted in a separate table

- 
**When the data is voided from the patient observation**

The data is removed from the table column

- 
**When the form has translations added (From form builder implementer interface) and the mart is run in english**

Data is inserted according to the english translations

- 
**When the form has translations added and the mart is run in french**

Data is inserted according to the french translations

- 
Previous data is also changed according to french translations

- 
**When the column name is added in columns to ignore, (Fully specified name of the concept)**

The column is removed from the table

- 
The entire table data is removed when there is only one column in the table and the same concept is added in columns to ignore.

- 
**When the entire form is reconstructed, (All the form fields are removed and now concepts are added)**

Existing data is removed from the table, and the new columns are added to the table

- 
New data is added to the form table when the observation is filled to a patient
