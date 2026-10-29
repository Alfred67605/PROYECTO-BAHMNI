---
id: "9633805"
title: "OpenMRS meta data management"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/9633805/openmrs-meta-data-management"
version: 3
updated: "2014-09-14T07:21:15.410Z"
author: "VivekV"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:38.246Z"
---

# OpenMRS meta data management

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/9633805)  
> **Versión del documento:** v3 (2014-09-14T07:21:15.410Z) | **Autor/Editor:** VivekV

---

| Type | Current Mechanism | Desired Mechanism |
| --- | --- | --- |
| **Beds** | SQL | OpenMRS Admin UI |
| Care Setting | ? | - |
| **Clinical content** . Obs Concepts, Drugs, Procedures, Lab Concepts, Diagnoses, Chief Complaints . Observation templates . Order templates | Ruby, CSV Legacy UI Reference Data (not including pre-packaged concept sets provided via liquibase by Bahmni e.g. All Observation Templates) | . Meta Data Sharing (MDS) . OpenMRS Admin UI and CSV file import via OpenMRS Admin UI if not managed by MDS (Price managed via OpenERP) |
| **Reference Terms** ICD Reference terms ICD drug references | CSV file imported by implementer | CSV file imported by implementer Bahmni to package ICD csv file in default_config |
| **Concept Classes** | Using defaults from OpenMRS New classes added by Bahmni Legacy UI | Using defaults from OpenMRS **Delete** classes added by Bahmni Legacy UI |
| **Providers** Providers, Users Their roles and privileges | Legacy UI | OpenMRS Admin UI |
| **Services** Encounter Types Location (Their mapping) | . In Patient ET provided by EMR API . Bahmni provides (Registration, Radiology, **Investigation**, LAB_RESULT, Patient Document, **VALIDATION_NOTES**) . Location managed via Legacy UI . Mapping created via SQL by implementer | . In Patient ET provided by EMR API . Bahmni provides (Registration, Radiology, LAB_RESULT, Patient Document) . Implementer creates ET, Locations, mapping via OpenMRS Admin UI |
| **Patient** Patient identifier Patient attributes Patient address |  | OpenMRS Admin UI |
| **Program** . Program . Observation Template, Program mapping, Patient attributes, Drug order templates | Legacy UI | OpenMRS Admin UI |
| Scheduled Jobs | Legacy UI | Legacy UI |
| **Visit** Visit Type Visit Attributes New visit creation on admission | Legacy UI | OpenMRS Admin UI |
