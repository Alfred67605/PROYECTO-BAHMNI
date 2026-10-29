---
id: "114207086"
title: "Radiology Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114207086/radiology-control"
version: 5
updated: "2022-11-20T11:14:21.539Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:45.338Z"
---

# Radiology Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114207086)  
> **Versión del documento:** v5 (2022-11-20T11:14:21.539Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

Radiology Control is used to list the Radiology Orders given to the patient for that particular visit. 

## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114207086/Screen%20Shot%202017-03-03%20at%204.24.24%20PM.png?version=1&modificationDate=1488538737614&cacheVersion=1&api=v2)

## Configuration

### Sample Config
**Add to clinical/visit.json for it to appear on the patient dashboard**

```
"radiologyOrderControl":  {
        "type": "order",
        "title": "Radiology Order Display Control",
        "config": {
                           "title": "Radiology Order Display Control",
                           "name": "ordersControl",
                          "orderType": "Radiology Order",
                          "conceptNames":["Systolic", "Diastolic", "Posture", "Temperature"]
          }
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| title | Indicates the title that will be displayed on the dashboard for the section | Y |
| type | The name/type of the display control that needs to be picked from the code | Y |
| OrderType | Only the orders of this type will shown in the display control | Y |
| ConceptNames | Concepts of observations to be chosen for display | N |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control)
- [Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control)
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control)
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control)
