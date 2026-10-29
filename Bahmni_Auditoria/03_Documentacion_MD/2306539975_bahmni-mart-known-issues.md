---
id: "2306539975"
title: "Bahmni-mart Known Issues"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306539975/bahmni-mart-known-issues"
version: 1
updated: "2021-04-05T08:42:50.985Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:20.091Z"
---

# Bahmni-mart Known Issues

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306539975)  
> **Versión del documento:** v1 (2021-04-05T08:42:50.985Z) | **Autor/Editor:** Bavisetti Venkatesh

---

- 
**CentOS Physical Machine(GUI):**

If we have physical CentOS GUI machine and docker-engine version 1.7 installed, the would lead to mounting of some filesystems ( /sys, /sysfs etc) as read only and it stops server to boot completely.
