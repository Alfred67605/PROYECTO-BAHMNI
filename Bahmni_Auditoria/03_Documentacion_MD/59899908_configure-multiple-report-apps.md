---
id: "59899908"
title: "Configure Multiple Report Apps"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/59899908/configure-multiple-report-apps"
version: 8
updated: "2021-03-22T06:56:48.635Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:05.324Z"
---

# Configure Multiple Report Apps

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/59899908)  
> **Versión del documento:** v8 (2021-03-22T06:56:48.635Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

The steps below show how you can add an additional "Bahmni App" for reporting purposes, with its own report configuration.

## Steps

To configure a new app for reports,

- 
in home/extension.json add a new module with parameter appName=“new_reports_name"

```
"bahmni_exports": {
    "id": "bahmni.reports",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "MODULE_LABEL_EXPORTS_KEY",
    "url": "../reports/#/dashboard?appName=new_reports_name,
    "icon": "icon-bahmni-reports",
    "order": 6,
    "requiredPrivilege": "app:reports"
}
```

-  Create a  new directory with name “new_reports_name”  under  openmrs/apps directory.  Add reports.json to this directory.
- For internationalization, create a directory under openmrs/i18n with the name "new_reports_name".**

On this Page
 
 
 
 
Feature Details**

[Reports Module - Feature Guide](/wiki/spaces/BAH/pages/32604223/Reporting)

**Usage Details**

[Reports Module - User Guide](/wiki/spaces/BAH/pages/32604225/Report+Management)
