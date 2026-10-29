---
id: "98402409"
title: "Drug Order / Treatment Details Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/98402409/drug-order-treatment-details-control"
version: 13
updated: "2022-11-20T11:15:38.582Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:47.016Z"
---

# Drug Order / Treatment Details Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/98402409)  
> **Versión del documento:** v13 (2022-11-20T11:15:38.582Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

This control can be configured to view the drug order details (prescription details) for a particular patient.

## Screenshot

***![](https://bahmni.atlassian.net/wiki/download/attachments/98402409/Screen%20Shot%202016-06-28%20at%2010.26.54%20AM.png?version=1&modificationDate=1479103913484&cacheVersion=1&api=v2)
*

## Configuration

### Sample Config

Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"treatmentsDetails": {
    "title":"Treatments Details",
    "translationKey" : "DASHBOARD_TITLE_TREATMENT_DETAIL",
    "type": "drugOrderDetails",
    "displayOrder": 3,
    "dashboardConfig": {
    "showOnlyActive":true,                     
    "drugConceptSet": "All TB Drugs",
    "showDetailsButton": true
   }
}
```

**

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| title | Indicates the title that will be displayed on the dashboard for the section | Y |
| type | type of the section or control. **type should be "drugOrderDetails"** | Y |
| drugConceptSet | Drug orders will be filtered upon the concepts specified as part of this concept set. If not specified, it will display all drug orders. | N |
| dashboardConfig | Indicates the configuration for the patient dashboard | Y |
| showOnlyActive | Determines if to display only active drug orders or not. Possible values are true or false. Set this to "true" to display only active drug orders. If "false" or not configured, will show all the drugs | N |
| showDetailsButton | Configuration to display audit information when arrow sign is clicked. If set to false, the arrow button will not be displayed. | N |

On this Page
 
 
 
 
Related Display Controls**

 

- [Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control)
- [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control)
- [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control)
- [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control)
- [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients)
