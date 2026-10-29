---
id: "20643979"
title: "Bahmni / OpenMRS related"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643979/bahmni-openmrs-related"
version: 3
updated: "2015-05-22T08:05:40.801Z"
author: "Mujiruddin Shaikh (Deactivated)"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:06.475Z"
---

# Bahmni / OpenMRS related

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643979)  
> **Versión del documento:** v3 (2015-05-22T08:05:40.801Z) | **Autor/Editor:** Mujiruddin Shaikh (Deactivated)

---

- 
### Accessing OpenMRS redirects to initial db setup page.

Has tomcat been started as 'bahmni' user.
- Check tomcat startup logs (catalina.out) to see if tomcat started before mysql. If it did, connection pool setup at tomcat start would have failed. Restart tomcat to fix. This would be fixed as part of [this](https://trello.com/c/08tDK7xT/2282-at-times-tomcat-starts-before-mysql-has-started-this-messes-up-openmrs) story.

- 
### Saving 'Consultation' in Bahmni returns an empty page (does not show the data you'd entered)

Ensure user in OpenMRS is associated with a provider.
