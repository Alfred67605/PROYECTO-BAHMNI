---
id: "28311564"
title: "Encounter Matching"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/28311564/encounter-matching"
version: 12
updated: "2016-01-12T16:22:50.702Z"
author: "Preethi"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:31.144Z"
---

# Encounter Matching

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/28311564)  
> **Versión del documento:** v12 (2016-01-12T16:22:50.702Z) | **Autor/Editor:** Preethi

---

Visit is selected by the visitUuid sent in the EncounterTransaction. Within the visit, the encounter is **filtered** based on the following logic for regular encounters, retrospective encounter, on behalf of encounters and encounter edits. , in that order

**Regular Consultation & Retrospective Consultation**

- by encounterUuid if sent by the client.
- by encounterType
- by sessionTime (for retrospective entry, the client should send the date as 12:00)
- by provider if provider or on behalf of provider
- by user if not a provider

**Visit Document**

- by encounterType
- by provider

## **Encounter Type Matching**

**Regular Consultation Encounter & Retrospective Consultation Encounter**

Encounter type to be used for finding an encounter or creating a new encounter for regular consultation or retrospective consultation is based on **either** of the following logic in the given order,

- 
by location uuid - mapping present in entity_mapping table with entity_mapping_type as '**l****ocation_encountertype**'  (OR)**    - Location encounter type mapping can be inserted using the following query:
      
location_encountertype**

```
insert into entity_mapping(uuid, entity_mapping_type_id, entity1_uuid, entity2_uuid, date_created) 
values (uuid(), , , , now())
```

- by default encounter type provided in global property (** bahmni.encounterType.****default**).

**Program Consultation Encounter**

Encounter type to be used for finding an encounter or creating a new encounter for program consultation is based on **either** of the following logic in the given order,

- by programUuid - mapping present in entity_mapping table with entity_mapping_type as '[program_encountertype](https://bahmni.atlassian.net/wiki/display/BAH/Program+Management#ProgramManagement-Associatingprogramtoencountertype)' (OR)
- by default encounter type provided in global property (** bahmni.encounterType.****default**).

For other encounters, following encounter types are picked irrespective of location:

- Registration Encounter - 'REG'
- Radiology Upload Encounter - 'RADIOLOGY'
- Patient Document Encounter - 'Patient Document'
- Admission Encounter - 'ADMISSION'
- Discharge Encounter - 'DISCHARGE'
- Transfer Encounter - 'TRANSFER'
