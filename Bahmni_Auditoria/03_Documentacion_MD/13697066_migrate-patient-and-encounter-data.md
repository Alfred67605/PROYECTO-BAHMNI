---
id: "13697066"
title: "Migrate Patient and Encounter Data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/13697066/migrate-patient-and-encounter-data"
version: 48
updated: "2024-09-29T14:09:52.652Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:45.693Z"
---

# Migrate Patient and Encounter Data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/13697066)  
> **Versión del documento:** v48 (2024-09-29T14:09:52.652Z) | **Autor/Editor:** Mohankumar Thangavel

---

## Purpose and Benefits

Bahmni supports data migration via CSV files. There are two types of data you can create, patient and encounter. With patient you can create patient attributes, address details, patient identity amount with core patient fields. Patient import allows you to specify the patient identity matching logic using a groovy script. Encounter import allows you to create encounters with observations (we don't support orders yet). The import automatically creates the visits for you based on the days supplied.

Sample CSV formats for Data Import
 
You can see some sample import CSV file formats in github here: [https://github.com/Bahmni/banyan-config/tree/master/openmrs/referencedata](https://github.com/Bahmni/banyan-config/tree/master/openmrs/referencedata)

**

Note
 
From v0.90 Bahmni, We are supporting the CSV import of special characters/non-english characters. This is done as part of [this](https://bahmni.atlassian.net/browse/BAH-344) Jira card.

## Types of CSV Imports

Bahmni has 4 different types of imports for transactional data. For each type of import we have attached a sample file  with some example rows. 

### **1. Patient**

Patient Data - This is just to create the patients with their identifiers (used by the hospital). [patient.csv](/wiki/download/attachments/13697066/patient.csv?version=1&modificationDate=1434089576295&cacheVersion=1&api=v2)

Registration Number,Registration Date,First Name,Middle Name,Last Name,Gender,Birth Date,Address.Village,Address.Tehsil,Address.District,Address.State

To import implementation-specific [Patient Attributes](/wiki/spaces/BAH/pages/14286874/Patient+Attributes), the column heading should be "Attribute.nameOfTheAttribute".

From 0.90v Bahmni, we are supporting CSV import of **org.openmrs.util.AttributableDate **type**. **It is** **a** **implementation-specific person attribute which can be configured from openmrs admin.

From 0.94v, it also supports for validating mandatory fields in patient registration page.

### **2. Encounters**

Encounter import meant for importing all clinical information about the patient. This is meant for observations, diagnosis, lab order/results and drug orders. We do not support the last two yet. The visit and encounters are also imported via this same file. Here is a sample file [encounter_import.csv](/wiki/download/attachments/13697066/encounter_import_sample-1%20(2).csv?version=1&modificationDate=1487243328443&cacheVersion=1&api=v2). The encounter fields reference:

 

| Key | Use | Mandatory |
| --- | --- | --- |
| **Registration Number** |  The identifier for the patient, for example GAN200189 |  Y |
| **Patient.Name** |  |  N |
| **Patient.AGE** |  |  N |
| **Patient.Gender** |  | N |
| **Patient.Village** |  | N |
| **encounterType** | Name of encounter type, for example Consultation. | N (Encounter level) |
| **visitType** | Name of the visit type, for example Outpatient. | N |
| **Visit Start Date** | If visit dates are not provided the encounter date would be used to create a visit for just one day. If there is already a visit in the database for that date then the import would use that visit. | N |
| **Visit End Date** |  | N |
| **EncounterDate** |  | N (Encounter level) |
| **Obs.Obs Path** | In *obs path* you can provide the complete concept-set+concept path. For example: Diabetes Template.Nutritional Values.Height | N (Encounter level, Multiple allowed) |
| **Diagnosis** | The name of diagnosis concept. It assumes all diagnosis to be be primary and confirmed. | N (Encounter level, Multiple allowed) |

 
- The date format is yyyy-mm-dd
- (*has multiple)* fields can be provided more than once like Diagnosis.1, Diagnosis.2 for a every encounter
- (encounter level) fields should be prefixed with Repeat.1., Repeat.2. and so on when using multiple fields.
- You can enter multiple encounters by prefixing the column headers with of diagnosis, observations with Repeat.x. For example your columns could be named as Repeat.1.Obs.History, Repeat.1.Diagnosis.1 and Repeat.2.Obs.History, Repeat.2.Obs.History.
- You can provide observations by providing the ConceptSet+Concept hierarchy. You can see an example in the attached file.

Bahmni also supports following features for **forms 2** (Use **Form2 Encounter (With Validations)**)

- checks for mandatory fields (Validate all mandatory fields and provide error message if field is empty.)
- check for future dates 
- loading of multiple entries for *multi select* observations (suffixing column headings with attribute MultiSelect=true; Default Delimiter is **|** or configure global property *bahmni.admin.csv.upload.obs.multiSelect.splitter*)
- loading of multiple entries for *Add more* observations (suffixing column headings with attribute AddmoreConcept=true; Default Delimiter is **|** or configure global propertybahmni.admin.csv.upload.obs.addmore.splitter)
- loading of multiple entries for observation in *Add more* section (suffixing column headings with attribute AddmoreSection=true)

Refer [this](https://talk.openmrs.org/t/bahmni-pat-call-17-feb-2021/32228/2) talk thread for more info.

Sample CSV file for Form 2 Encounter Import can be found [here](/wiki/download/attachments/13697066/encounters_form2_sample.csv?version=1&modificationDate=1727618958852&cacheVersion=1&api=v2).

![](https://bahmni.atlassian.net/wiki/download/attachments/13697066/image2023-5-9_13-7-53.png?version=1&modificationDate=1683617875285&cacheVersion=1&api=v2)

### 3. Lab Results

Please refer to the sample import [file](/wiki/download/attachments/13697066/lab-results-import.csv?version=2&modificationDate=1465230343541&cacheVersion=1&api=v2).

 

| Key | Use | Mandatory |
| --- | --- | --- |
| **Registration Number** |  The identifier for the patient, for example GAN200189 |  Y |
| **Patient.Name** |  |  N |
| **Patient.AGE** |  |  N |
| **Patient.Gender** |  | N |
| **Patient.Village** |  | N |
| **Date** | Visit starting date | N |
| **Visit Type** | Name of the visit type, for example LAB_VISIT. | N |
| **Test** | Test name | N |
| **Result** | Result for the lab test | N |

Test,Result can be repeated multiple times to upload multiple lab results.

### **4. Relationships**

The CSV Relationship Import/Upload provides an ability to import/upload relationship information for patients using a CSV file.

Consider two assumptions:

- We have an existing patient (Person A) for whom we would like to add relationships, whose registration number should be entered in the Registration_Number field.
We should populate the Related_To_Registration_Number field for relationships between 2 persons in the system. We should populate the Provider_Name field for relationships between a person and provider. Relationship_StartDate  and  Relationship_EndDate are optional fields. If the are not specified then Relationship_StartDate will be saved as today's date and Relationship_EndDate will be null.

- There will be a global property **"bahmni.relationshipTypeMap"**, which provides all required mapping for all possible relationships. This is used to validate information provided in the CSV file in the Relationship_Type column. 

The following is an example for a global property relationship mapping:

```
{
 "patient": ["Sibling", "Parent", "Child", "Uncle"],
 "provider": ["Doctor", "Nurse", "Care Taker"]
} 
```

Data in the CSV file to be uploaded must be as per the following required order and names of columns:

- **Registration_Number**
- **Relationship_Type**
- **Related_To_Registration_Number**
- **Provider_Name**
- **Relationship_StartDate**
- **Relationship_EndDate**. 

The first four columns are mandatory. The dates should be provided in the following format: yyyy-mm-dd. [Here](/wiki/download/attachments/13697066/relationship_csv.csv?version=1&modificationDate=1440409460301&cacheVersion=1&api=v2) is an example of a relationship CSV file.

On this Page

 
 
 
Other Types of Data Migration**

- [Migrate Concept Reference Terms](/wiki/spaces/BAH/pages/3017015299/Migrate+Concept+Reference+Terms)
- [Migrate Configurations](/wiki/spaces/BAH/pages/116152757/Migrate+Configurations)
- [Migrate Programs](/wiki/spaces/BAH/pages/53313567/Migrate+Programs)

**Feature Details**

[Configure CSV Import - Feature Guide](/wiki/spaces/BAH/pages/53313592/Data+Migration+-+Import)

**Usage Details**

[Configure CSV Import - User Guide](/wiki/spaces/BAH/pages/53313590/Import+Data)
