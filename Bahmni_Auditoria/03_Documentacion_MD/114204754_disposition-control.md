---
id: "114204754"
title: "Disposition Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114204754/disposition-control"
version: 6
updated: "2023-11-30T05:18:28.459Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:41.985Z"
---

# Disposition Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114204754)  
> **Versión del documento:** v6 (2023-11-30T05:18:28.459Z) | **Autor/Editor:** Riya Kumari

---

## Purpose

Disposition Control is used to list the actions/instructions given to that patient by the doctors. The instructions are like "Admit to the hospital", "Discharge from the hospital", "Transfer to a different ward/bed”..etc

## Screenshot

**![](https://bahmni.atlassian.net/wiki/download/attachments/114204754/Screen%20Shot%202016-05-25%20at%204.12.51%20PM.png?version=1&modificationDate=1484659700487&cacheVersion=1&api=v2)**

## Configuration
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"disposition": {
 "title": "Disposition",
 "type":"disposition",
 "numberOfVisits": 2,
 "hideEmptyDisplayControl": false
}
```

On this Page
 
 
 
 
**Related Display Controls**

 

- [Admission Details Control](/wiki/spaces/BAH/pages/114204313/Admission+Details+Control)
- [Disposition Control](/wiki/spaces/BAH/pages/114204754/Disposition+Control)
