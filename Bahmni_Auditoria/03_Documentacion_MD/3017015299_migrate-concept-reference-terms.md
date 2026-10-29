---
id: "3017015299"
title: "Migrate Concept Reference Terms"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3017015299/migrate-concept-reference-terms"
version: 1
updated: "2022-06-01T10:49:36.256Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:47.584Z"
---

# Migrate Concept Reference Terms

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3017015299)  
> **Versión del documento:** v1 (2022-06-01T10:49:36.256Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Purpose and Benefits
Bahmni supports import of 

- 
Concept reference terms 

- 
Add new Reference Terms to Existing Concepts

#### 1. Concept reference terms 

New Concept reference terms can be created by uploading a 

/wiki/download/attachments/3017015299/conceptReferenceTerms.csv?version=1&modificationDate=1654078604378&cacheVersion=1&api=v2

 file containing the below mentioned fields:

| Key | Use | Mandatory |
| --- | --- | --- |
| **Code** | Reference Term Code | ** Y** |
| **Source** | Name of the Reference Source | ** Y** |
| **Name** | Name of the concept reference term | **N** |
| **description** | ** ** | **N** |
| **Version** |  | **N** |

#### 2. Add new Reference Terms to Existing Concepts
User should be able to add new concept reference mapping for a pre-existing concept by uploading a

/wiki/download/attachments/3017015299/AddRefTermToConcept.csv?version=1&modificationDate=1654080363969&cacheVersion=1&api=v2

file  containing the below mentioned fields:

| Key | Use | Mandatory |
| --- | --- | --- |
| **concept-name** | Existing Concept Name | ** Y** |
| **reference-term-source** | Name of the Reference Source | ** Y** |
| **reference-term-code** | Reference term code | **Y** |
| **reference-term-relationship** | Reference Term Mapping | **Y** |
