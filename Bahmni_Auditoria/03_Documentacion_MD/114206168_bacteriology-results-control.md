---
id: "114206168"
title: "Bacteriology Results Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206168/bacteriology-results-control"
version: 6
updated: "2023-11-30T05:17:18.742Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:43.240Z"
---

# Bacteriology Results Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206168)  
> **Versión del documento:** v6 (2023-11-30T05:17:18.742Z) | **Autor/Editor:** Riya Kumari

---

# Purpose

Bacteriology results control is used to list the bacteriology samples and the corresponding results captured against those samples (for a particular patient)

# Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114206168/Screen%20Shot%202016-05-25%20at%203.37.34%20PM.png?version=1&modificationDate=1484669472228&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/114206168/Screen%20Shot%202016-05-25%20at%203.37.50%20PM.png?version=1&modificationDate=1484669471423&cacheVersion=1&api=v2)

# Configuration

### Sample Config
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"bacteriologyResults": {
    "translationKey": "DASHBOARD_TITLE_BACTERIOLOGY_RESULTS_KEY",
    "type": "bacteriologyResultsControl",
    "displayOrder": 4,
    "dashboardConfig": {
        "conceptNames": ["BACTERIOLOGY CONCEPT SET"]
    },
    "hideEmptyDisplayControl": false
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| title | Indicates the title that will be displayed on the dashboard for the section | Y |
| type | The name/type of the display control that needs to be picked from the code | Y |
| ``` dashboardConfig ``` | Indicates the configuration for the dashboard | Y |
| conceptNames | Concepts of observations to be chosen for display | N |
| displayOrder | Relative position of the display control with respect to other display controls on the patient dashboard. | N |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control)
- [Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control)
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control)
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control)
