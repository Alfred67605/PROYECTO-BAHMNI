---
id: "2306540197"
title: "Registration Second Page"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540197/registration-second-page"
version: 1
updated: "2021-04-05T09:33:14.233Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:30.591Z"
---

# Registration Second Page

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540197)  
> **Versión del documento:** v1 (2021-04-05T09:33:14.233Z) | **Autor/Editor:** Himabindu Thungathurty

---

- 
[Configuration](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#Configuration)

[ColumnsToIgnore apply for this module ( Refer Appendix )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#ColumnsToIgnore-apply-for-this-module-(-Refer--%5BinlineCard%5D-))

- 
[incrementalUpdateConfig is applicable ( Refer Incremental Update )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#incrementalUpdateConfig-is-applicable-(-Refer-%5BinlineCard%5D-))

- 
[Existing OpenMRS tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#Existing-OpenMRS-tables)

- 
[Mart Tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#Mart-Tables)

- 
[Mart Views](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#Mart-Views)

- 
[Translations](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329678902/Registration+Second+Page#Translations)

Registration on the second page is a default Bahmni feature.

### **Configuration**

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Registration Second Page",
      "type": "reg",
      "columnsToIgnore": [],
      "separateTableConfig": {
        "enableForAddMoreAndMultiSelect": true,
        "separateTables": []
      },
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      }
}

```

### Existing OpenMRS tables

```
Obs
visit
program
patient_program
location

```

### Mart Tables

```
reg_nutritional_values
reg_fee_information

```

In mart** **database, there will be two tables based on the configuration defined as part of the Bahmni config. The default Bahmni has the config as mentioned in the Appendix . As per the configuration following tables will be created. Any other concept can be defined in the same config. To configure Registration second page in Bahmni  UI check the[documentation](/wiki/spaces/BAH/pages/3506184/Registration+Page).

a) **reg_nutritional_values **(For **Nutritional Values)**

| **Column Name** | **Column Description** |
| --- | --- |
| id_reg_nutritional_values | Observation Id same as obs table of openmrs database |
| patient_id | For which patient the data was captured |
| encounter_id | In which encounter the data was captured |
| visit_id | Id reference of visit from visit table in openmrs |
| obs_datetime | obs date and time from obs table in openmrs |
| date_created | visit date created from visit table in openmrs |
| date_modified | visit date changed from visit table in openmrs |
| location_id | Id reference to location from location table in openmrs |
| location_name | Name of location from location table in openmrs |
| program_id | Id reference to the program from program table in openmrs |
| program_name | Name of program from program table in openmrs |
| patient_program_id | Id reference to patient program from patient_program table in openmrs |
| height | For given encounter and patient what is the value of height |
| weight | For given encounter and patient what is the value of weight |

b) **reg_fee_information **( **Fee Information**)

| **Column name** | **Column Description** |
| --- | --- |
| id_reg_fee_information | Observation Id same as obs table of openmrs database |
| patient_id | For which patient the data was captured |
| encounter_id | In which encounter the data was captured |
| visit_id | Id reference of visit from visit table in openmrs |
| obs_datetime | obs date and time from obs table in openmrs |
| date_created | visit date created from visit table in openmrs |
| date_modified | visit date changed from visit table in openmrs |
| location_id | Id reference to location from location table in openmrs |
| location_name | Name of location from location table in openmrs |
| program_id | Id reference to the program from program table in openmrs |
| program_name | Name of program from program table in openmrs |
| patient_program_id | Id reference to patient program from patient_program table in openmrs |
| registration_fees | For given encounter and patient what is the value of registration fees |
| comments | For given encounter and patient what is the value of comments |

**Note:- **If a concept is present both in Observation form and in the registration second page, and the data for the concept is added from the Registration second page as well as one of the forms then the table under registration second page will have both the values  under separate encounters.

However if a value is added from forms the same will only reflect under the obs table and not in the registration second page table.

### **Mart Views**

There will be a separate table for each concept set configured in extension.json. To make it easily accessible there will be a view named as **registration_second_page_view** combining all the tables related to registration second page in mart database

| patient_id | For which patient the data was captured |
| --- | --- |
| encounter_id | In which encounter the data was captured |
| visit_id | Id reference of visit from visit table in openmrs |
| obs_datetime | obs date and time from obs table in openmrs |
| date_created | visit date created from visit table in openmrs |
| date_modified | visit date changed from visit table in openmrs |
| location_id | Id reference to location from location table in openmrs |
| location_name | Name of location from location table in openmrs |
| program_id | Id reference to the program from program table in openmrs |
| program_name | Name of program from program table in openmrs |
| patient_program_id | Id reference to patient program from patient_program table in openmrs |
| reg_fee_information_registration_fees | Fee collected from that patient from obs table in openmrs |
| reg_nutritional_values_height | Height mentioned in the RSP from obs table in openmrs |
| reg_nutritional_values_weight | Weight of patient mentioned in the RSP from obs table in openmrs |

### **Translations**

if we need to get those values as per the translations we need to add the below **locale tag** in the &ldquo;**/var/www/bahmni_config/bahmni-mart/bahmni-mart.json**&ldquo; file.

```
{
      "name": "Registration Second Page",
      "type": "reg",
      "locale" :"fr",
}  

```
