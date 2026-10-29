---
id: "8585221"
title: "Concept Classes"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8585221/concept-classes"
version: 3
updated: "2014-09-15T16:23:26.795Z"
author: "VivekV"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:57.664Z"
---

# Concept Classes

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8585221)  
> **Versión del documento:** v3 (2014-09-15T16:23:26.795Z) | **Autor/Editor:** VivekV

---

Misc - Currently used for patient attribute options, some are added by openmrs core/emr-api, drugs, drug order options. Except for one added by openmrs/emr-api we should move all the others to their own classes. For drug it should just use Drug class.

Symptom - Currently used for COMMENT in registration. This would go away when we change it to visit attribute.

Abnormal/Duration - Discuss with openmrs. [https://trello.com/c/wprlqqi7/19-marking-an-observation-as-abnormal-capturing-duration](https://trello.com/c/wprlqqi7/19-marking-an-observation-as-abnormal-capturing-duration)

Intake Set/Progress Set - Use these as classes to identify these disease specific concept sets
