---
id: "2316239302"
title: "Visits and Encounters"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239302/visits-and-encounters"
version: 1
updated: "2021-04-05T09:27:42.231Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:26.581Z"
---

# Visits and Encounters

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239302)  
> **Versión del documento:** v1 (2021-04-05T09:27:42.231Z) | **Autor/Editor:** Himabindu Thungathurty

---

- 
[Configuration](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#Configuration)

[ColumnsToIgnore apply for this module ( Refer https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#ColumnsToIgnore-apply-for-this-module-(-Refer--%5BinlineCard%5D-))

- 
[incrementalUpdateConfig is applicable ( Refer https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#incrementalUpdateConfig-is-applicable-(-Refer-%5BinlineCard%5D-))

- 
[Existing OpenMRS tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#Existing-OpenMRS-tables)

- 
[Flattened Mart Tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#Flattened-Mart-Tables)

[Incremental Config:](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#Incremental-Config%3A)

- 
[Mart Views](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678956/Visits+and+Encounters#Mart-Views)

### Configuration

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Visits And Encounters",
      "type": "visitsAndEncounters",
      "chunkSizeToRead": "500"
}

```

### Existing OpenMRS tables

```
visit_type
visit
visit_attribute
visit_attribute_type
encounter
encounter_type
encounter_provider
encounter_role
episode_encounter
provider
person_name
patient
location

```

### Flattened Mart Tables

```
patient_visit_details_default
visit_attribute_details_default
visit_attributes
patient_encounter_details_default

```

#### **Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#7.-Visits-and-Encounters-Job:) section on how to enable/disable incremental config for specific mart tables.

**a)** **Visits**

    i)  **patient_visit_details_default**

| **Column Name** | **Description** |
| --- | --- |
| visit_id | Id reference for a visit |
| patient_id | Id reference for a patient |
| visit_type_id | Id reference for visit type |
| visit_type_name | Name of visit [ IPD/ OPD/ Special OPD / Emergency etc] |
| visit_type_description | Description of visit type |
| visit_start_date | Start date of visit |
| visit_end_date | End date of visit |
| indication_concept_id | indication_concept_id from visit table in openmrs |
| location_id | Id reference for location |
| location_name | Name of location [general ward / Registration Desk, Labor ward etc] |

 ii)   **visit_attribute_details_default**

| **Column Name** | **Description** |
| --- | --- |
| visit_id | Id reference for a visit |
| visit_attribute_id | Id reference for a visit attribute |
| value_reference | Value for the attribute [OPD / IPD] |
| visit_attribute_type_id | Id reference for a visit attribute type |
| visit_attribute_type_name | Visit type [ Visit status / Admission status] |
| visit_attribute_type_description | visit attribute type description from visit_attribute_type openmrs table |
| visit_attribute_type_datatype | visit_attribute_type_datatype from visit_attribute_type openmrs table |
| visit_attribute_type_datatype_config | visit_attribute_type_datatype_config from visit_attribute_type openmrs table |
| visit_attribute_type_preferred_handler | visit_attribute_type_preferred_handler from visit_attribute_type openmrs table |
| visit_attribute_type_handler_config | visit_attribute_type_handler_config from visit_attribute_type openmrs table |
| visit_attribute_type_min_occurs | visit_attribute_type_min_occurs from visit_attribute_type openmrs table |
| visit_attribute_type_max_occurs | visit_attribute_type_min_occurs visit_attribute_type openmrs table |

**  iii)   visit_attributes**

| **Column Name** | **Description** |
| --- | --- |
| visit_id | Id reference for a visit |
| Visit_Status | Status of visit [OPD / IPD ] |
| Admission_Status | Status of admission [Admitted / Discharged etc] |

**b)    Encounter**

**    i) patient_encounter_details_default**

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Id reference for a patient |
| visit_id | Id reference for a visit |
| episode_id | Id reference for a episode |
| encounter_id | Id reference for a encounter |
| encounter_type_id | Id reference for a encounter type |
| encounter_type_name | Type of encounter [Consultation / REG etc] |
| encounter_type_description | Description of encounter [ Consultation encounter/Registration encounter etc] |
| edit_privilege | edit_privilege from encounter_type table in openmrs |
| view_privilege | view_privilege from encounter_type table in openmrs |
| location_name | Name of location [ Labour ward/ General ward] |
| form_id | form_id from encounter table in openmrs |
| encounter_datetime | Date and time of encounter |
| encounter_role_id | Id reference for encounter role from encounter_role table in openmrs |
| encounter_role_name | name of encounter role encounter_role in openmrs |
| provider_id | Id reference of provider from encounter_provider table in openmrs |
| provider_name | provider name from provider table in openmrs |
| encounter_role_description | description of encounter role from encounter_role description table. |

### Mart Views

a) **Patient_visits_encounters_view**

This view allows the user to see the patient details data along with with all the visit and its details. It has also has the details of all the encounters at every encounter location. Each patient might have multiple visits hence the view have may have multiple rows of same patient data.
