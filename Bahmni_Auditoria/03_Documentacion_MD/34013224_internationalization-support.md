---
id: "34013224"
title: "Internationalization Support"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013224/internationalization-support"
version: 27
updated: "2016-03-28T04:50:22.635Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:27.399Z"
---

# Internationalization Support

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013224)  
> **Versión del documento:** v27 (2016-03-28T04:50:22.635Z) | **Autor/Editor:** Teresa Gracias

---

## Purpose and Benefits

Internationalization provides a way to make the application available in multiple languages.  Internationalization is also referred to as **i18n** because there are 18 characters between 'i' and 'n' in the word 'internationalization'. Bahmni provides support for internationalization with minimal configuration changes.

All Bahmni pages (Login page, home dashboard, registration etc.) support internationalization through the app config files and Bahmni configurations support internationalization through the locale files.

**

For Bahmni work in different languages, different parts of it can be configured to offer internationalization support. 

- [Product Internationalization](/wiki/spaces/BAH/pages/34439351/Product+Internationalization) - Bahmni application code has several static labels that need to be changed to support a different language.
- [Configuration Internationalization](/wiki/spaces/BAH/pages/34439353/Config+Internationalization) - There are two kinds of configuration types that support internationalization in Bahmni - the bahmni_config files, and OpenMRS data (mainly the concepts).

General Guidelines for Internationalization Support**

- Internationalization support in Bahmni is available only for languages written from "left to right".
- The Bahmni modules that support Internationalization have the key field "*translationKey" *in configuration files.

Sections
 
 

- [Product Internationalization](/wiki/spaces/BAH/pages/34439351/Product+Internationalization)
- [Config Internationalization](/wiki/spaces/BAH/pages/34439353/Config+Internationalization)
[Concept.csv](/wiki/spaces/BAH/pages/35291237/Concept.csv)

 
**Feature Details**

[Internationalization Support - Feature Guide](/wiki/spaces/BAH/pages/34013352/Multi-Lingual+Support)
