---
id: "37945364"
title: "Configure Advanced Settings"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945364/configure-advanced-settings"
version: 14
updated: "2017-02-14T05:55:46.064Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:13.799Z"
---

# Configure Advanced Settings

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945364)  
> **Versión del documento:** v14 (2017-02-14T05:55:46.064Z) | **Autor/Editor:** teresa gracias

---

## Description

OpenMRS allows Users to set global properties, which are configuration variables that the User can set via Advanced Settings under Administration Menu, without restarting or recompiling the application.

OpenMRS provides a way to add custom configuration in the form of key-value pairs. Several Bahmni functionalities that are just a key-value pair are implemented using Advanced Settings in OpenMRS.

## Where to add ?

One can add new global property via OpenMRS Administration UI or using a SQL query

Openmrs Administration UI
 
- These can be added/modified in OpenMRS using the *Administration, Advanced Settings* screen ([/openmrs/admin/maintenance/globalProps.form](https://local/openmrs/admin/maintenance/globalProps.form))
- Use a sql query to update the *global_property* table

**Some examples of Global Properties are:**

| Name | Description | Value |
| --- | --- | --- |
| mrs.genders | List of gender and gender codes used across MRS | {"M":"Male", "F":"Female","O":"Other"} |
| bahmni.encounterType.default | Default encounter type | 'Consultation' |

![](https://bahmni.atlassian.net/wiki/download/attachments/37945364/Screen%20Shot%202016-01-18%20at%2011.18.39%20am.png?version=1&modificationDate=1453096182313&cacheVersion=1&api=v2)

On this Page
