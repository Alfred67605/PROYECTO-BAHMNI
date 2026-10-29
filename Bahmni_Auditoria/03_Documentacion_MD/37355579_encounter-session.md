---
id: "37355579"
title: "Encounter Session"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37355579/encounter-session"
version: 2
updated: "2016-01-12T17:56:20.311Z"
author: "Ranjan Sakalley"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:20.480Z"
---

# Encounter Session

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37355579)  
> **Versión del documento:** v2 (2016-01-12T17:56:20.311Z) | **Autor/Editor:** Ranjan Sakalley

---

Bahmni is designed to be used at point of care as well as data entry mode. In point of care scenario the user goes into consultation mode and potentially captures data into different tabs (medications, observations, diagnosis etc). To support the users being able to enter data in forms, save, enter some data, save and so on - Bahmni has a concept of encounter session. This session is the duration for which an encounter is alive (via Bahmni) for a user. Within this session duration, the data will be available in the application for the user to change it. (Important to note here that a different user would not see the data within consultation, edit mode, even if they open the same observation form). This session duration is controlled by *bahmni.encountersession.duration *global property in set in OpenMRS. The unit for this property is in minutes. After this duration the user will see a blank form.
