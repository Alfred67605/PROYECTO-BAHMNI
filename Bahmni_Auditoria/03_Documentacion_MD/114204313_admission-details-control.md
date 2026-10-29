---
id: "114204313"
title: "Admission Details Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114204313/admission-details-control"
version: 10
updated: "2023-11-30T05:20:58.418Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:41.488Z"
---

# Admission Details Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114204313)  
> **Versión del documento:** v10 (2023-11-30T05:20:58.418Z) | **Autor/Editor:** Riya Kumari

---

## Purpose

Admission Details Control is used to list the details of the patient like Bed and Ward number where the patient got assigned, Admission Date and Notes, Discharge Date and Notes details.
**
## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114204313/Screen%20Shot%202016-05-25%20at%204.29.54%20PM.png?version=1&modificationDate=1484657191520&cacheVersion=1&api=v2)

## Configuration
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"admissionDetails": {
    "title": "Admission Details",
    "translationKey":"DASHBOARD_TITLE_ADMISSION_DETAILS_KEY",
    "type": "admissionDetails",
    "displayOrder": 19,
    "hideEmptyDisplayControl": false
}
```

**

On this Page
 
 
 
 
Related Display Controls**

 

- [Admission Details Control](/wiki/spaces/BAH/pages/114204313/Admission+Details+Control)
- [Disposition Control](/wiki/spaces/BAH/pages/114204754/Disposition+Control)
