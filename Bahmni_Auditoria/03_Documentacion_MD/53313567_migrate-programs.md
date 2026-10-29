---
id: "53313567"
title: "Migrate Programs"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313567/migrate-programs"
version: 5
updated: "2018-04-13T13:44:37.986Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:46.668Z"
---

# Migrate Programs

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313567)  
> **Versión del documento:** v5 (2018-04-13T13:44:37.986Z) | **Autor/Editor:** Sruti Sridhar

---

## Context

Patients can be enrolled in Bahmni into programs and subsequently tracked and monitored under that program. Similar to the process of  importing patients and encounter data into the Bahmni via CSV files , one can also enrol a large no.of patients into programs using the Programs CSV import feature. 

Not Supported
 
Programs CSV import is only for supporting enrolments of patients into Programs. Bahmni currently does not support the upload of patient encounter data in the program context through CSV files. 

## Steps

Please refer to the sample import file :  [programs.csv](/wiki/download/attachments/53313567/programs.csv?version=1&modificationDate=1523626332245&cacheVersion=1&api=v2). 

Follow the steps as mentioned [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313590/Import+Data) to perform the import. 

## Key Fields 

| Key | Use | Mandatory |
| --- | --- | --- |
| **Registration Number*** |  The identifier for the patient, for example GAN200189 |  Y |
| **Patient.Name** | ** |  N |
| **Patient.AGE** |  |  N |
| **Patient.Gender** |  | N |
| **Patient.Village** |  | N |
| **Program*** | Concept name of the Program - TB, HIV | Y |
| **EnrollmentDate*** | Name of the visit type, for example LAB_VISIT. | Y |

After the successful import of the CSV file, an entry will be made for each patient enrolment in the "patient_program" table in the openMRS DB. 

On this Page**

 
 
 

**Other Types of Data Migration**

- [Migrate Patient and Encounter Data](/wiki/spaces/BAH/pages/13697066/Migrate+Patient+and+Encounter+Data)
- [Migrate Concept Reference Terms](/wiki/spaces/BAH/pages/3017015299/Migrate+Concept+Reference+Terms)
- [Migrate Programs](/wiki/spaces/BAH/pages/53313567/Migrate+Programs)

**Feature Details**

[Configure CSV Import - Feature Guide](/wiki/spaces/BAH/pages/53313592/Data+Migration+-+Import)

**Usage Details**

[Configure CSV Import - Implementer's Guide](/wiki/spaces/BAH/pages/53313590/Import+Data)
