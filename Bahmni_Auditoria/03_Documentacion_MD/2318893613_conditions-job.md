---
id: "2318893613"
title: "Conditions Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893613/conditions-job"
version: 1
updated: "2021-04-05T09:30:53.417Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:28.398Z"
---

# Conditions Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893613)  
> **Versión del documento:** v1 (2021-04-05T09:30:53.417Z) | **Autor/Editor:** Himabindu Thungathurty

---

- 
[ColumnsToIgnore apply for this module ( Refer Appendix )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678937/Conditions#ColumnsToIgnore-apply-for-this-module-(-Refer--%5BinlineCard%5D-))

- 
[Existing OpenMRS tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678937/Conditions#Existing-OpenMRS-tables)

- 
[Mart Tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678937/Conditions#Mart-Tables)

If one implementation has Conditions, **conditions **table will get created with existing data otherwise an empty table will be created since **Conditions** comes with Bahmni product by default.

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

To generate this table we took product dump as reference

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
Conditions
Concept_view : For concept name

```

### Mart Tables

a) **conditions_default**

| **Column Name** | **Description** |
| --- | --- |
| condition_id | Unique id for the table |
| previous_condition_id |  |
| patient_id | To know for which patient these details are entered |
| status |  |
| condition_name | Will have only one column for non-coded and coded condition names. Openmrs has two columns one is for coded and other is for non-coded |
| is_coded_condition_name | This column tell us whether a condition is coded or not |
| onset_date |  |
| additional_detail |  |
| end_date |  |
| end_reason |  |
| creator | Who has entered these conditions |
| date_created | Date of creation of these conditions |
