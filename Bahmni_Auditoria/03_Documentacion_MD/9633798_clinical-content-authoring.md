---
id: "9633798"
title: "Clinical content authoring"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/9633798/clinical-content-authoring"
version: 3
updated: "2014-09-10T05:38:41.538Z"
author: "VivekV"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:37.328Z"
---

# Clinical content authoring

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/9633798)  
> **Versión del documento:** v3 (2014-09-10T05:38:41.538Z) | **Autor/Editor:** VivekV

---

To create observation templates we would be using CURL instead of liquibase. This would give us version control but would also keep the content (template and its details) accessible to someone who is not very technical. This would allow many more people to be able to author these templates. CURL would be used to post JSON documents to Bahmni(OpenMRS) REST endpoints. For these JSON documents to be easily editable the data contract should be as simple as possible.

**Concept
**{
  "Unique Name" : "P/A Presenting Part - Cephalic",
  "Display Name" : "Cephalic", //maps to short name
  "Description" : "I don't know...",  //not mandatory
  "Class" : "Finding",
  "Data Type" : "N/A",
  "ICD Code" : "" //not mandatory
},

{
  "Unique Name" : "P/A Presenting Part - Breech",
  "Display Name" : "Breech", //maps to short name
  "Description" : "I don't know...",
  "Class" : "Finding",
  "Data Type" : "N/A",
  "ICD Code" : "" //not mandatory
},

{
  "Unique Name" : "P/A Presenting Part",
  "Display Name" : "Presenting Part", //maps to short name
  "Description" : "I don't know...",  //not mandatory
  "Class" : "Finding",
  "Data Type" : "Coded",
  "Answers" : ["P/A Presenting Part - Cephalic", "P/A Presenting Part - Breech"],
  "ICD Code" : "" //not mandatory
}

**Concept Set
**{ 
  "Unique Name" : "P/A (per abdomen)",
  "Display Name" : "P/A",
  "Description" : "I don't know...", //not mandatory
  "Members" : ["P/A Presenting Part", "Fundal Height"] ,
  "ICD Code" : "" //not mandatory
}

** **
