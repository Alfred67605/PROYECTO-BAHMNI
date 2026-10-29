---
id: "34013647"
title: "Configuration 101"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013647/configuration-101"
version: 23
updated: "2017-04-10T09:00:44.542Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub"
download_date: "2026-10-20T21:03:01.568Z"
---

# Configuration 101

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013647)  
> **Versión del documento:** v23 (2017-04-10T09:00:44.542Z) | **Autor/Editor:** teresa gracias

---

## Introduction

Bahmni EMR is a user interface layer that is built on top of OpenMRS. Where possible, Bahmni depends on configuration that can be performed directly in OpenMRS.

For example, OpenMRS provides a mechanism to define custom attributes for a patient. Bahmni uses this underlying facility to show custom attributes for the patient on the Registration app. However, on Bahmni, there is also a way to define mandatory attributes for a patient. This cannot directly be achieved by configurations in OpenMRS. Such extended customizations are achieved in Bahmni using configuration files.

Any feature that is to be configured in Bahmni will typically need a combination of OpenMRS configuration and modifying the Bahmni configuration files. 

 
### Oops, Diagram Unavailable
This diagram can't be displayed. It may have been moved or deleted, or the page's access settings may be preventing it from loading. Pages with restricted access must also include Gliffy Diagrams in their allowed list.

**In this Section**

- [Configurations: What goes where?](/wiki/spaces/BAH/pages/412811291/Configurations+What+goes+where)
- [OpenMRS configuration](/wiki/spaces/BAH/pages/34013673/OpenMRS+configuration) — Configuring certain OpenMRS attributes such as users, patient attriibutes, locations, drugs, concepts and concept sets, etc. are required for every installation of Bahmni. Most OpenMRS configuration can be done using the OpenMRS Administration UI https://192.168.33.10/openmrs/admin/index.htm.
- [Bahmni App Configuration](/wiki/spaces/BAH/pages/34013676/Bahmni+App+Configuration) — Bahmni configuration files are deployed under /bahmni_config/openmrs/apps of the Bahmni web server. Each implementation should have its own copy of configuration files. The configuration files are largely simple json https://en.wikipedia.org/wiki/JSON files.
- [OpenERP Configuration](/wiki/spaces/BAH/pages/114398427/OpenERP+Configuration) — Bahmni integrates OpenMRS with OpenERP which is a an open source ERP product. It is useful in Billing, Pharmacy and Stock management. Any patient registered in OpenMRS is synced by Bahmni as a customer in OpenERP.
