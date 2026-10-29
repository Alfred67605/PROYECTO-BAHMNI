---
id: "50921523"
title: "Configure Disposition Concepts"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/50921523/configure-disposition-concepts"
version: 17
updated: "2016-04-07T09:12:26.894Z"
author: "Hanisha Potturi (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:13.287Z"
---

# Configure Disposition Concepts

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/50921523)  
> **Versión del documento:** v17 (2016-04-07T09:12:26.894Z) | **Autor/Editor:** Hanisha Potturi (Deactivated)

---

### Description

          Disposition is to enter the status of the patient like admit patient or discharge patient or transfer to another ward. All these should be  concepts in OpenMRS (Example: Admit Patient should be a concept) .

### Steps

- **Create a concept Disposition**

Add new Concept with name Disposition.
- Add concepts Admit Patient, Discharge Patient... concepts as coded answers to disposition concept set.
- Add Mapping source as **org.openmrs.module.emrapi **and code as **Disposition.**
- Save the concept.

         Below screenshot displays an instance of the same

                 ![](https://bahmni.atlassian.net/wiki/download/attachments/50921523/image2016-4-7%2014:15:23.png?version=1&modificationDate=1460018728102&cacheVersion=1&api=v2)

- **Create a concept Disposition Notes(Optional):**
**           ** if some extra information is needed to added while entering disposition we can configure disposition notes concepts.

Add new Concept with name Disposition Note  .
- Select data type as **Text**.
- Add Mapping source as **org.openmrs.module.emrapi **and code as **DispositionNote.**
- Save the concept.

         Below screenshot displays an instance of the same

                ![](https://bahmni.atlassian.net/wiki/download/attachments/50921523/image2016-4-7%2014:22:26.png?version=1&modificationDate=1460019151152&cacheVersion=1&api=v2)
- 
**Create a concept Disposition Set:****   **

Create a concept Disposition Set.
- Add concepts Disposition, Disposition Note.. concepts as Set members to Disposition Set concept set.
- Add Mapping source as **org.openmrs.module.emrapi **and code as **Disposition Concept Set.**
- Save the concept.

              Below screenshot displays an instance of the same

**                 ![](https://bahmni.atlassian.net/wiki/download/attachments/50921523/image2016-3-23%2015:10:58.png?version=1&modificationDate=1460015169439&cacheVersion=1&api=v2)**

** [ ](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Disposition+Tab)**

On this Page
