---
id: "3242590216"
title: "Bahmni and openIMIS Integration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3242590216/bahmni-and-openimis-integration"
version: 6
updated: "2024-01-18T07:51:34.076Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub"
download_date: "2026-10-20T21:05:43.191Z"
---

# Bahmni and openIMIS Integration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3242590216)  
> **Versión del documento:** v6 (2024-01-18T07:51:34.076Z) | **Autor/Editor:** Gurpreet Luthra

---

**openIMIS** is a versatile open source software which supports the administration of health financing, claims and social protection schemes. It is recognised as a digital public good by the Digital Public Goods Alliance and is listed in Digital Square’s Global Goods Guidebook as an emergent global good in digital health. Read more at [https://openimis.org/](https://openimis.org/)  

## Bahmni & openIMIS Integration for Nepal
 
This integration has **not** yet been tested with latest Bahmni v1.0 Standard/Lite docker instances, and is not packaged out-of-the-box with Bahmni. This is a community implementation by the NepalEHR team that has customized Bahmni a bit, and written the integration pieces (which are all opensource). 

- 
**Brief overview of Nepal implementation of Bahmni + openIMIS**: [https://openimis.org/nepal-health-insurance](https://openimis.org/nepal-health-insurance) 

- 
**Architecture:** Of Bahmni → OpeIMIS integation over FHIR can be seen here: [https://openimis.atlassian.net/wiki/spaces/OP/pages/773652496/Bahmni-OpenIMIS+Integration+Architecture](https://openimis.atlassian.net/wiki/spaces/OP/pages/773652496/Bahmni-OpenIMIS+Integration+Architecture) (utilizes a new omod, integration-feed-service and an odoo-plugin).

- 
**Demo: **A demo video of how Bahmni → OpenIMIS integration looks (along with Eligibility Check and Claim Submissions in Nepal version of Bahmni) can be seen here: [https://talk.openmrs.org/t/lessons-learnt-from-integration-of-bahmni-with-openimis/26350/4?u=gsluthra](https://talk.openmrs.org/t/lessons-learnt-from-integration-of-bahmni-with-openimis/26350/4?u=gsluthra)

- 
**User Guide** documentation: [https://openimis.atlassian.net/wiki/spaces/OP/pages/909246472/Bahmni-OpenIMIS+Integration+User+guide](https://openimis.atlassian.net/wiki/spaces/OP/pages/909246472/Bahmni-OpenIMIS+Integration+User+guide) 

- 
**System Installation** guide: [https://openimis.atlassian.net/wiki/spaces/OP/pages/909344769/Bahmni-OpenIMIS+Integration+System+Installation+guide](https://openimis.atlassian.net/wiki/spaces/OP/pages/909344769/Bahmni-OpenIMIS+Integration+System+Installation+guide) 

- 
Code for insurance-connect: [https://github.com/Bahmni/bahmni-insurance-connect/tree/master](https://github.com/Bahmni/bahmni-insurance-connect/tree/master) 

![](https://bahmni.atlassian.net/wiki/download/attachments/3242590216/image-20240118-074840.png?version=1&modificationDate=1705564125145&cacheVersion=1&api=v2)
