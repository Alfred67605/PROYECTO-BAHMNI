---
id: "32014353"
title: "Using Bed Details Service"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014353/using-bed-details-service"
version: 1
updated: "2015-11-02T09:18:20.609Z"
author: "padmavati"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:31.610Z"
---

# Using Bed Details Service

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014353)  
> **Versión del documento:** v1 (2015-11-02T09:18:20.609Z) | **Autor/Editor:** padmavati

---

If any implementation need to get the bed details based on visit, that particular implementation can use the bedDetailsService.js. We have to call  bedDetailsService.getBedDetailsByVisit method  by passing the visitUuid. For now that method will return the wardName and bedNumber. If we want more details we can modify the method constructBedDetails, to return whatever details we want.
