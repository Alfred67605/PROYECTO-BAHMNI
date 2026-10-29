---
id: "114746475"
title: "Treatment Details Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114746475/treatment-details-control"
version: 2
updated: "2022-11-20T11:16:45.910Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:48.018Z"
---

# Treatment Details Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114746475)  
> **Versión del documento:** v2 (2022-11-20T11:16:45.910Z) | **Autor/Editor:** Gurpreet Luthra

---

# Purpose

Treatment/Drug Details Control can be configured to display all the the prescription or drug order details (for configured number of visits).

# Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114746475/Medication%20Tab.png?version=1&modificationDate=1487319762729&cacheVersion=1&api=v2)**

# Configuration

Where to Configure ?
 
Add to *clinical/dashboard.json* for it to appear on the *patient dashboard* or Add to *clinical/visit.json* for it to appear on the* visit dashboard*.

### Sample Config
Add to dashboard.json (under sections) for it to appear on the patient dashboard**

```
"sections":{ 
  "treatmentsDetails": {
    "title":"Treatments Details",
    "translationKey" : "treatmentsDetails",
    "name": "drugOrderDetails",
    "displayOrder": 1,
    "displayType":"Full-Page",
    "dashboardParams": {
            "drugNames":["Isoniazid","Paracetamol 500mg", "Sodium Thiosulphate Camical 500gm", "Isosorbide Mononitrate"],
            "showDetailsButton":true
     }
   }
 }
```

On this Page
 
 
 
 
**Related Display Controls**

 

- [Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control)
- [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control)
- [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control)
- [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control)
- [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients)
