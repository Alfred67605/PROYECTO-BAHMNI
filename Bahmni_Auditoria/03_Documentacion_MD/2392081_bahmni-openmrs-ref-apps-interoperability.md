---
id: "2392081"
title: "Bahmni - OpenMRS Ref Apps Interoperability"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2392081/bahmni-openmrs-ref-apps-interoperability"
version: 5
updated: "2014-04-14T06:23:26.364Z"
author: "Mujiruddin Shaikh (Deactivated)"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:30.262Z"
---

# Bahmni - OpenMRS Ref Apps Interoperability

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2392081)  
> **Versión del documento:** v5 (2014-04-14T06:23:26.364Z) | **Autor/Editor:** Mujiruddin Shaikh (Deactivated)

---

In general, Bahmni stores data in OpenMRS recommended conventions (so there is data level integration and any OpenMRS module can understand the data that Bahmni stores and vice versa) and, sits in the same web application (so no single sign-on issues). This means to integrate any OpenMRS Reference Application App with Bahmni, we could just hyperlink between the two. We don't need tight integration between the two.
There are some variations (from the OpenMRS conventions) in the way Bahmni stores data.

- Ruled out diagnosis (stored as observations, and not as diagnosis, as agreed with OpenMRS community). 
One variation is we force clinicians to create 'presumed' diagnosis if they want to rule-out a diagnosis.
- 'Ruled Out' is stored as a 'Diagnosis Status' within the diagnosis obs group.
- We also need to store the first diagnosis for that concept. Initial Diagnosis Observation Id goes as an observation in the observation group for later diagnosis.

- Lab test results/radio results - stored as obs group (with isabnormal flag)
- Accession Notes (after lab manager validates the lab results in an accession)
- Xcompound observations
