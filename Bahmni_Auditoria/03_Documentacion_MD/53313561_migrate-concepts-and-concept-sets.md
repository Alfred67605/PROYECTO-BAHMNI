---
id: "53313561"
title: "Migrate Concepts and Concept Sets"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313561/migrate-concepts-and-concept-sets"
version: 7
updated: "2017-11-20T06:29:58.951Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:46.191Z"
---

# Migrate Concepts and Concept Sets

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53313561)  
> **Versión del documento:** v7 (2017-11-20T06:29:58.951Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Purpose and Benefits

Bahmni supports import of concepts via CSV files. There are two types of data you can create via CSV import:

- Concept  
- Concept Set. 

With Concept Set import, multiple Concepts or Concept Sets can be grouped under a parent concept. 

Note
 
From v0.90 Bahmni, We are supporting the CSV import of special characters/non-english characters. This is done as part of [this](https://bahmni.atlassian.net/browse/BAH-344) Jira card.

## Types of CSV Imports

Bahmni has different CSV formats for import of Concepts and Concept Sets. For each type of import we have attached a sample file with some example rows.

### **1. Concept**

New concepts can be created by uploading a [concepts.csv](/wiki/download/attachments/53313561/concepts.csv?version=1&modificationDate=1464172156309&cacheVersion=1&api=v2) file containing the below mentioned fields:

 

| Key | Use | Mandatory |
| --- | --- | --- |
| **uuid** | Concept will created with this uuid | ** Y** |
| **name** | Name of the Concept | ** Y** |
| **description** | ** ** | **N** |
| **class** | Class can be Misc/Abnormal depending on the concept type. | **Y** |
| **shortname** | Bahmni will use shortname while showing the concept. | **Y** |
| **datatype** | Datatype can be Numeric/Boolean/Coded or N/A | **Y** |
| **units** | Can mention for Numeric datatype | **N** |
| **High Normal** | Can mention for Numeric datatype | **N** |
| **Low Normal** | Can mention for Numeric datatype | **N** |
| **locale** | ** ** | **N** |
| **synonym.1** |  | **N** |
| **answer.1/2/3** | Should be the fully specified name of concept. The datatype should be Coded. | **N** |
| **reference-term-source** |  | **N** |
| **reference-term-code** |  | **N** |
| **reference-term-relationship** |  | **N** |

 
Before putting a Concept value in answer(s) section make sure that the Concept already exists in the system. If not, then put a row/section before the parent Concept row in CSV. This is done to ensure that the child Concept information gets imported before the parent Concept is imported. Otherwise, the parent Concept will not be able to refer to a non-existent child Concept.

 

 

### 2. Concept Set

New concept set can be created by uploading the [concept_sets.csv](/wiki/download/attachments/53313561/concept_sets.csv?version=1&modificationDate=1464174638003&cacheVersion=1&api=v2) and filling up the below fields:

| Key | Use | Mandatory |
| --- | --- | --- |
| **uuid** | Concept-Set will created with this uuid | ** Y** |
| **name** | Name of the Concept-Set | ** Y** |
| **description** | ** ** | **N** |
| **class** | Class can be Misc/Concept Details depending on the concept-set type. | **Y** |
| **shortname** | Bahmni will use shortname while showing the concept-set | **Y** |
| ** child.1/2/3/4 ** | Should be the fully specified name of concept or concept-set. | ** Y ** |
| **reference-term-source** |  | **N** |
| **reference-term-code** |  | **N** |
| **reference-term-relationship** |  | **N ** |

 
Before putting a Concept or Concepts or Concept Set as child make sure that the Concept(s) or Concept Set(s) already exists in the system. If not, then put a row/section before the parent Concept Set row in CSV. This is done to ensure that the child Concept Set information gets imported before the parent Concept Set is imported. Otherwise, the parent Concept Set will not be able to refer to a non-existent child Concept.

Also, it is suggested to import all Concepts first, and then import Concept Sets, since sets cannot refer to non-existent concepts.
**

On this Page

 
 
 
Other Types of Data Migration**

- [Migrate Configurations](/wiki/spaces/BAH/pages/116152757/Migrate+Configurations)
- [Migrate Concepts and Concept Sets](/wiki/spaces/BAH/pages/53313561/Migrate+Concepts+and+Concept+Sets)
- [Migrate Programs](/wiki/spaces/BAH/pages/53313567/Migrate+Programs)

**Feature Details**

[Configure CSV Import - Feature Guide](/wiki/spaces/BAH/pages/53313592/Data+Migration+-+Import)

**Usage Details**

[Configure CSV Import - Implementer's Guide](/wiki/spaces/BAH/pages/53313590/Import+Data)
