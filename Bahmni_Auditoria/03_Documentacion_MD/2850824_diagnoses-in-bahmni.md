---
id: "2850824"
title: "Diagnoses in Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2850824/diagnoses-in-bahmni"
version: 1
updated: "2014-04-16T09:11:43.234Z"
author: "Vinay Venu"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:29.840Z"
---

# Diagnoses in Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2850824)  
> **Versión del documento:** v1 (2014-04-16T09:11:43.234Z) | **Autor/Editor:** Vinay Venu

---

EMR-API has a domain object called Diagnosis that has several fields. 
- CodedAnswer 
- NonCodedAnswer - if the diagnosis is not yet coded
- Order (primary vs secondary) 
- Certainty (presumed vs confirmed). 
In the database this is stored as an observation group called Diagnosis with each member as an observation group member.

For Bahmni, we needed to track the lifecycle of a diagnosis. To achieve this, we added three new fields. 
- Status (Ruled out, Cured)
- Initial (uuid of the initial observation) 
- isRevised(true and false).

Status is not mandatory, but provides interesting modifiers to the diagnosis like "ruled out", "cured" etc. 
IsRevised will be set to true when a diagnosis is revised.
