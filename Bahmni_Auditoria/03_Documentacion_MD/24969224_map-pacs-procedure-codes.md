---
id: "24969224"
title: "Map PACS procedure codes"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/24969224/map-pacs-procedure-codes"
version: 6
updated: "2026-02-09T04:00:40.690Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:25.533Z"
---

# Map PACS procedure codes

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/24969224)  
> **Versión del documento:** v6 (2026-02-09T04:00:40.690Z) | **Autor/Editor:** Mohankumar Thangavel

---

## Purpose and Benefits

Bahmni PACS-Integration is Bahmni's Radiology System that can send Radiology Orders to digital X-Ray machines and in turn receive X-Ray images that can be viewed in Bahmni. This is the part of the first step in the process to be able to create a Radiology order and send it to the digital X-Ray machines (Modality).

Bahmni will have a set of Radiology X-Ray Concepts and the Client's machine will have a set of X-Rays. We need to map both to ensure that the ordered X-Ray is properly picked at client-side following PACS procedure code mapping detailed below 

## Configuring Priority of Concept Source
 
This feature is available only starting version 1.1.0 of pacs-integration builds.

To better support standardised terminology dictionaries like CIEL, where concept codes are often pre-packaged, the `pacs-integration` service now includes a configurable environment variable: `CONCEPT_CODE_RESOLVER_SOURCE_PRIORITY`. This update provides implementers with the flexibility to resolve PACS codes across multiple coding systems by defining a prioritized, comma-separated list of sources.

Add a new environment variable to the pacs-integration service named as `CONCEPT_CODE_RESOLVER_SOURCE_PRIORITY`. It can take comma separated values in the order of priority to resolve the concept sources from.

Example: `CONCEPT_CODE_RESOLVER_SOURCE_PRIORITY= "PACS Procedure Code,CIEL,LOINC"`  When configured, the system first looks for SAME-AS mappings with Concept Source Pacs Procedure Code → CIEL → LOINC.**
Note: The default value is PACS Procedure Code.

## Steps

A common reference code has to be setup for each test in both modality and OpenMRS so that modality can understand the order that is to be created. The steps to setup the procedure code in OpenMRS are detailed below:

### 1. Create a new concept source in OpenMRS

To create a new concept source do the following:

- 
In OpenMRS administration UI, click on "Manage Concept Sources" under Concepts section.

- 
Click on "Add new Concept Source"

- 
Add a new concept source with name as 'PACS Procedure Code' and hl7 code as ''LOINC"

### 2. Add Concept mapping for each test concept

For example, to add a concept mapping for "abdomen ap" test,

- 
Search for "abdomen ap" in concept dictionary and click on Edit.

- 
Scroll down to the "Mappings" and click on "Add Mappings"

- 
Select "ASSOCIATED-WITH" or "SAME-AS" as Relationship

- 
Select "PACS Procedure Code" as Source

- 
Click on "Create New Term"

- 
Enter a code (for ex: 1234, same code has to be setup in modality for 'abdomen ap') and select "PACS Procedure Code" as Source and save.

- 
Now back on the 'Mappings' section in 'Edit Concept screen', search for the added reference term '1234' and save the concept.

 Step 2 has to be repeated for all the test concepts.

![](https://bahmni.atlassian.net/wiki/download/attachments/24969224/pacs.gif?version=4&modificationDate=1437580705770&cacheVersion=1&api=v2)
**Steps to add Concept Mapping**

 
**On this Page**
 Feature Details**

[Radiology and PACS - Feature Guide](/wiki/spaces/BAH/pages/32604202/Radiology+and+PACS)

**Usage Details**

[Radiology and PACS - User Guide](/wiki/spaces/BAH/pages/32014360/Radiology)
