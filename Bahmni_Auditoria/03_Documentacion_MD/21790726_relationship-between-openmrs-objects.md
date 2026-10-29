---
id: "21790726"
title: "Relationship between OpenMRS objects"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/21790726/relationship-between-openmrs-objects"
version: 4
updated: "2015-06-02T09:10:11.630Z"
author: "VivekV"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:39.121Z"
---

# Relationship between OpenMRS objects

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/21790726)  
> **Versión del documento:** v4 (2015-06-02T09:10:11.630Z) | **Autor/Editor:** VivekV

---

Considering each encounter type as a type of service provided to patient. It is possible that more such relationships would be required. Since the data volume is less should we model this in a single table instead of separate table for each type of relationship. There should services around this data which can answer questions like as provided in the description below.

| Object | Object | Name | Description |
| --- | --- | --- | --- |
| Location | Program (m) | Program Departments | On user login to a location, narrow down the programs which are serviced from that location |
| Program | Encounter Type (m) | Program Services | Each program could have a list of encounter types and when saving an encounter the type is derived from it |
| Location | Encounter Type (m) | Department Services | Each location could have a list of encounter types, **if no program is used** then encounter type is picked based on the location |
| Program | Form (m) | Program Forms | In the context of a program, provide only the choice of forms associated to it. If it is less that 7 forms then we can display all of them instead of expecting user to favourite it |
| Location | Order Type (m) | Order Points | Each location may be responsible for fulfilling certain orders. On login to a location, order fulfilment application should be presented to the user. |

Location, Program, ET, VT, Obs Forms, Order Type, Order Class, Provider

[https://talk.openmrs.org/t/should-we-link-encounters-to-programs-using-encounter-types/2029](https://talk.openmrs.org/t/should-we-link-encounters-to-programs-using-encounter-types/2029)
