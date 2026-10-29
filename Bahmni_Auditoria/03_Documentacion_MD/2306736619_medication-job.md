---
id: "2306736619"
title: "Medication Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736619/medication-job"
version: 1
updated: "2021-04-05T09:28:24.278Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:27.020Z"
---

# Medication Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736619)  
> **Versión del documento:** v1 (2021-04-05T09:28:24.278Z) | **Autor/Editor:** Himabindu Thungathurty

---

- 
[Configuration](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137747/Medication#%5BhardBreak%5DConfiguration)

[ColumnsToIgnore apply for this module ( Refer https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137747/Medication#ColumnsToIgnore-apply-for-this-module-(-Refer--%5BinlineCard%5D-))

- 
[incrementalUpdateConfig is applicable ( Refer https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137747/Medication#incrementalUpdateConfig-is-applicable-(-Refer-%5BinlineCard%5D-))

- 
[Existing OpenMRS tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137747/Medication#Existing-OpenMRS-tables)

- 
[Flattened mart tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137747/Medication#Flattened-mart-tables)

[Incremental Config:](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137747/Medication#Incremental-Config%3A)

The medicines ordered for the patients will be flattened into one table namely **medication_data**.

### 
Configuration

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Medication And Orders",
      "type": "medicationAndOrders",
      "chunkSizeToRead": "500",
      "groupedJobConfigs": [
        {
          "tableName": "medication_data_default",
          "columnsToIgnore": [
          ]
        }
      ]
}

```

### Existing OpenMRS tables

```
Drug_order
Drug
Orders
Order_frequency
Patient
Patient_program
Program
Encounter
Provider
Person_name
Obs
Concept
Concept_name
Location

```

### Flattened mart tables

```
medication_data_default
```

#### **Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#8.Medication-And-Orders-Job:) section on how to enable/disable incremental config for specific mart tables.

a) **medication_data_default**

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Patient id |
| program_id | Program Id of the patient for which he is enrolled to. |
| patient_program_id | Patient program id |
| patient_program_name | Patient program name Eg: Reconstructive Surgery |
| order_id | Drug order id |
| coded_drug_name | Drug coded name Eg: FERROUS sulphate 256mg (=80 mg iron) |
| non_coded_drug_name | Drug non-coded name Eg: Candesartan |
| dose | Dose of the drug Eg: 1, 500 |
| dose_units | Dosage units Eg: Tablets(s), mg |
| frequency | Drug consumption frequency Eg: Twice a day |
| route | Drug consumption route Eg: Oral, Intravenous |
| start_date | Medication start date |
| calculated_end_date | Medication end date |
| date_stopped | Medication stopped date |
| stop_reason | Medication stopped reason |
| duration | Medication duration(in quantity_units) |
| duration_units | Duration units Eg: Week(s), Day(s) |
| quantity | Drugs quantity for whole duration(in quntity_units) Eg: 14, 4800 |
| quantity_units | Drugs quantity in units Eg: Tablet(s), mg |
| additional_instructions | Any other instructions given on medication |
| dispense | Whether drugs dispensed or not Eg: Yes |
| encounter_id | Id reference to encounter from encounter table in openmrs |
| orderer_id | Id reference to orderer from orders table in openmrs |
| orderer_name | name of orderer from order_type table in openmrs |
| visit_id | Id reference to the visit from visit table in openmrs |
| visit_type | Type of visit from visit_type table in openmrs |
| encounter_type_id | Id reference to encounter type from encounter_type table in openmrs |
| encounter_type_name | name of encounter type from encounter_type table in openmrs |
