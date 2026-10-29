---
id: "2316239398"
title: "Metadata Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239398/metadata-job"
version: 1
updated: "2021-04-05T09:33:49.780Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:31.111Z"
---

# Metadata Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239398)  
> **Versión del documento:** v1 (2021-04-05T09:33:49.780Z) | **Autor/Editor:** Himabindu Thungathurty

---

### **Configuration**

```
{
      "name": "MetaData Dictionary",
      "type": "metadata",
      "conceptReferenceSource": ""
}

```

**Existing OpenMRS tables**

```
concept
concept_set
concept_name

```

**Flattened Mart Tables**

```
meta_data_dictionary
```

**a) meta_data_dictionary- **The metadata dictionary table displays all the information of concept sets that are mapped to **All Observation Templates** OpenMrs table. If there is a concept set ‘Disposition’ and two concept set members are mapped to it, below are the sample entries in the meta_data_dictionary mart table.

| **fully_specified_name** | **question** | **question_datatype** | **description** | **answer** | **answer_code** |
| --- | --- | --- | --- | --- | --- |

| **fully_specified_name** | **question** | **question_datatype** | **description** | **answer** | **answer_code** |
| --- | --- | --- | --- | --- | --- |
| Disposition | Disposition | Coded |  | Answerconcept-1 |  |
| Disposition | Disposition | Coded |  | Answerconcept-2 |  |

| **Column Name** | **Description** |
| --- | --- |
| fully_specified_name | Full Name of concept from concept_name table in openmrs |
| question | Short Name of concept from concept_name table in openmrs |
| question_datatype | Data type of the concept |
| description | Description/ helptext of a concept |
| answer | answers mapped to the coded question concepts |
| answer_code | answer code |

**Note**: Both Form 1 and Form2 uses concepts, concept_set and concept_name.
