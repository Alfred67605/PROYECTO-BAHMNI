---
id: "8912909"
title: "Reporting from OpenMRS database"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8912909/reporting-from-openmrs-database"
version: 6
updated: "2014-08-30T16:34:20.911Z"
author: "VivekV"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:39.530Z"
---

# Reporting from OpenMRS database

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8912909)  
> **Versión del documento:** v6 (2014-08-30T16:34:20.911Z) | **Autor/Editor:** VivekV

---

Reporting from OpenMRS database is challenging for following reasons:

- It is normalised transactional database. This means that a lot of joins have to be made most of the time.
- Few things work in key-value fashion like concepts+observations and patient attributes. Observations/Concepts especially pose a big challenge because of so many things key things have to be modelled as observation in OpenMRS - e.g. diagnosis, chief complaints, disposition, treatment types, lab results. A key-value stored model in relational database is not amenable for reporting easily.
- Reporting is usually done using certain dimensions in mind. Again normalised database is not best suited for it.
- Concept data in OpenMRS when organised in hierarchical fashion makes it harder to query information based on parent of a particular concept. e.g. want to know all the people who were diagnosed with infectious diseases.

To get around some of the issues to make reporting easier we could do the following:

- Define views which join related tables together e.g. Person, Patient, Patient Attributes could be put together in one view; Concept, Obs, Concept_Name could be put together as one view.
- On these de-normalised views (from 1) we could create some domain specific views for diagnosis, chief complaints, disposition, lab result etc.
- On views from 1 and 2 we could create views which introduces dimensions (see the dimension list below).
- Explore the possibility of organising diagnosis in a flatter structure and use reference term mapping.

**Dimensions**

Hospital level --> Date, Location

Patient level --> Age, Gender, Tribe, *Socio-Economic status, *

Program level -> Program outcome, Program name

Visit level --> Visit Type

Encounters level --> Treatment type (surgery, treatment, procedure), Treatment outcome

 

Any view at a particular level would be able to provide columns for dimensions their and higher level. For example a program view should not only provide program outcome, program name with every program instance but also age, gender, tribe, date and location. All the views can be defined such that they repeat the applicable dimensions for every row.

**Questions**

Should referred-in and referred-out be handled using visit attributes.

Do we have lab department information in OpenMRS? Should we maintain this as location instead of concept?

**References**

[http://stratosprovatopoulos.com/web-development/mysql/pivot-table-with-dynamic-columns/](http://stratosprovatopoulos.com/web-development/mysql/pivot-table-with-dynamic-columns/)
