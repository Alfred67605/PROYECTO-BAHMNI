---
id: "100139061"
title: "Programs Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/100139061/programs-display-control"
version: 9
updated: "2023-11-30T05:20:07.845Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:54.027Z"
---

# Programs Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/100139061)  
> **Versión del documento:** v9 (2023-11-30T05:20:07.845Z) | **Autor/Editor:** Riya Kumari

---

## Purpose

A patient can be enrolled into one or more programs such as TB, Malaria, HIV, ANC, etc. The programs display control will show all the list of active and inactive programs for a patient.**This control cannot be configured on Visit dashboard.**

# Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/100139061/Screen%20Shot%202016-05-25%20at%204.24.31%20PM.png?version=1&modificationDate=1479378823360&cacheVersion=1&api=v2)

# Configuration

### Sample Configuration
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"programs": {
               "title":"Programs",
               "translationKey": "DASHBOARD_TITLE_PROGRAMS_KEY",
               "type": "programs",
               "displayOrder": 5,
               "hideEmptyDisplayControl": false
           }
```

**

### Key Field Table

| Key | Information | Mandatory |
| --- | --- | --- |
| title | The title to be shown in the display control | N |
| translationKey | Internationalizes the display control | Y |
| type | Indicates the type of the control **type should be "programs"** | Y |
| displayOrder | The order in which the display control will be displayed | N |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |

On this Page
 
 
 
 
Related Display Controls**

 

- [Programs Display Control](/wiki/spaces/BAH/pages/100139061/Programs+Display+Control)
- [Flowsheet Control](/wiki/spaces/BAH/pages/114227756/Flowsheet+Control)
- [Graph Control](/wiki/spaces/BAH/pages/114228167/Graph+Control)
