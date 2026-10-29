---
id: "11665409"
title: "Go automation at hospital"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/11665409/go-automation-at-hospital"
version: 14
updated: "2015-08-18T13:33:36.407Z"
author: "VivekV"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:52.271Z"
---

# Go automation at hospital

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/11665409)  
> **Versión del documento:** v14 (2015-08-18T13:33:36.407Z) | **Autor/Editor:** VivekV

---

Below are the activities to be able to perform via GO.

**Upgrade**

Upgrade the platform (to be used under directions from technical team)

**Deploy**

Deploy everything or just the configuration to a particular environment, flexibility to deploy on pre-prod and prod.

**Operate**

 

- (background) Take backup from passive to a well known location or configuration provided by the user
- Clear http cache
- Prepare production logs on demand. These logs are published as an artefact in Go after the job finishes.
- Switch from active to passive
- [TO DO LATER] Periodically delete orphan images uploaded (applicable to JSS, script not available yet for this)

 

**Implementation Support**

Task to be triggered manually. Extract database dump, anonymise and publish the link.
Same as above except publish an empty database.
