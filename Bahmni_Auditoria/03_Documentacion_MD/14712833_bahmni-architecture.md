---
id: "14712833"
title: "Bahmni Architecture"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/14712833/bahmni-architecture"
version: 18
updated: "2024-01-10T05:27:57.005Z"
author: "Gurpreet Luthra"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:23.698Z"
---

# Bahmni Architecture

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/14712833)  
> **Versión del documento:** v18 (2024-01-10T05:27:57.005Z) | **Autor/Editor:** Gurpreet Luthra

---

Bahmni is made up of four services which are integrated with each other. All integration happens using the atom (this RSS) feeds exposed by the individual services and consumed by the background threads in consuming processes. The first two slides below are for application and reporting architecture (This excludes all of OpenERP and canned OpenELIS reports)
 
Please see this training video on Bahmni Architecture also: [Bahmni - Starting off the Bahmni Journey - Dec 2021 (Training)](/wiki/spaces/BAH/pages/2955345944/Bahmni+-+Starting+off+the+Bahmni+Journey+-+Dec+2021+Training)

**

/wiki/download/attachments/14712833/Bahmni%20EDA.pptx?version=1&modificationDate=1503551866604&cacheVersion=1&api=v2

 

### Integration between application services

Each service publishes the key state changes via a RSS kind of feed (ATOM). The services also run background jobs which consume the feed published by other services. (e.g. When a patient is registered in OpenMRS then it captures the event for it. Both OpenERP and OpenELIS consume these events via the OpenMRS's change feed)

**Integrations**

| Source | Destination | Source Resource | Destination Resource |
| --- | --- | --- | --- |
| OpenMRS | OpenELIS | Patient | Patient |
| OpenMRS | OpenERP | Patient | Customer |
| OpenMRS | OpenELIS | Lab Order | Draft Accession |
| OpenMRS | OpenERP | Orders | Quotation |
| OpenELIS | OpenMRS | Accession, Sample & Results | Encounter (lab results) |
| OpenMRS | OpenELIS | Concept | Sample types, Lab Test, Panel |
| OpenMRS | OpenERP | Concept | Drug |

** **

**For Bahmni PACS design, please refer to this document: [Bahmni PACS Roadmap](/wiki/spaces/BAH/pages/22380584/Bahmni+PACS+Roadmap)**

Related Links**

[Atom Feed Integration Design](https://sharedhealth.atlassian.net/wiki/display/docs/Atom+Feed)

[Server Deployment Architecture](/wiki/spaces/BAH/pages/1310730/Bahmni+Server+Deployment+Architecture)

[Bahmni PACS Setup](/wiki/spaces/BAH/pages/22380584/Bahmni+PACS+Roadmap)
