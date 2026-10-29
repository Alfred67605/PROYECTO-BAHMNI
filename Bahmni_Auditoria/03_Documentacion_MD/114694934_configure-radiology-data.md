---
id: "114694934"
title: "Configure Radiology Data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114694934/configure-radiology-data"
version: 8
updated: "2017-02-20T10:02:40.123Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:26.017Z"
---

# Configure Radiology Data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114694934)  
> **Versión del documento:** v8 (2017-02-20T10:02:40.123Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Description

Radiology Order is used to place orders/worklists in dcm4chee and reflect the status of the order. Orders added are stored as modality worklists in dcm4chee. Doctors can add Radiology Orders, View the Radiology Orders in the System and can edit the Orders. 

### Bodyparts

Radiology Orders concept has a list of concept sets which are body parts like Chest, Neck, Head..etc. And each Concept Set has list of concepts of various X-ray types of that body part. Each X-ray concept should be of class type "Radiology". As soon as a radiology order created using the OpenMRS Admin UI or the CSV Concept set import, an atom feed event is published from OpenMRS.

### Procedure Codes

The X-ray machine will have a set of X-rays. We need to map both Radiology X-Ray concepts with Client machine X-rays to ensure that the ordered X-Ray is properly picked at client side.

-  Procedure codes can be added manually from[OpenMRS UI](https://bahmni.atlassian.net/wiki/display/BAH/Map+PACS+procedure+codes#MapPACSprocedurecodes-1.CreateanewconceptsourceinOpenMRS) or we can use CSV Reference Term import.
- Once the procedure codes added to OpenMRS we need to map them to Radiology X-Ray concepts. That can be done manually from [OpenMRS UI](https://bahmni.atlassian.net/wiki/display/BAH/Map+PACS+procedure+codes#MapPACSprocedurecodes-2.AddConceptmappingforeachtestconcept) or we can use CSV Concepts import.

### Setup Radiology data using CSV Upload

- Bodyparts
Sample file with [Organs_Group_concept_sets.csv](/wiki/download/attachments/32014568/Organs_Group_concept_sets.csv?version=1&modificationDate=1458048926152&cacheVersion=1&api=v2).
- Reference Terms for X-Ray mapping
Sample file with [PACS_Procedure_Codes_Reference_Terms.csv](/wiki/download/attachments/32014568/PACS_Procedure_Codes_Reference_Terms.csv?version=1&modificationDate=1458049011268&cacheVersion=1&api=v2)
- Xrays
Sample file with all [X-ray_concepts.csv](/wiki/download/attachments/32014568/X-ray_concepts.csv?version=1&modificationDate=1458048986183&cacheVersion=1&api=v2)
- Procedure Codes
Sample file with all the [XRay_ProcedureCode_Mapping.xlsx](/wiki/download/attachments/32014568/XRay_ProcedureCode_Mapping.xlsx?version=1&modificationDate=1458049059400&cacheVersion=1&api=v2) to be mapped at Clients PACS Server.
