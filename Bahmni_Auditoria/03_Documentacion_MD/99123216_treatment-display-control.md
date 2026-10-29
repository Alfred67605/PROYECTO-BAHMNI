---
id: "99123216"
title: "Treatment Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/99123216/treatment-display-control"
version: 20
updated: "2023-11-30T05:12:07.493Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:47.512Z"
---

# Treatment Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/99123216)  
> **Versión del documento:** v20 (2023-11-30T05:12:07.493Z) | **Autor/Editor:** Riya Kumari

---

**

# Purpose

Treatment/Drug Order Control can be configured to display all the the prescription or drug order details (for configured number of visits) for particular patient.

# Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/99123216/Screen%20Shot%202016-06-28%20at%2010.44.29%20AM.png?version=1&modificationDate=1479235996719&cacheVersion=1&api=v2)

# Configuration

Where to Configure ?
 
Add to *clinical/dashboard.json* for it to appear on the *patient dashboard* or Add to *clinical/visit.json* for it to appear on the* visit dashboard*.

### Sample Config
Config**

```
"treatment": {
 "title": "Treatments",
 "type": "treatment",
 "dashboardConfig": {
   "showFlowSheet": false,
   "showListView": true,
   "showRoute": false,
   "showDrugForm": false,
   "numberOfVisits": 2,
   "showOtherActive": true,
   "showDetailsButton": false
 },
 "expandedViewConfig": {
   "title": "Treatments",
   "showFlowSheet": false,
   "showListView": true,
   "showRoute": true,
   "showDrugForm": true,
   "numberOfVisits": 5,
   "showOtherActive": true,
   "showDetailsButton": true
 },
 "hideEmptyDisplayControl": false
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| title | Indicates the title that will be displayed on the dashboard/visit page for the section | Y |
| type | The type of the control. **value of type for this control should be treatment** | Y |
| showFlowSheet | Configuration to display the flowsheet (treatment chart). If it is on, the flowsheet will be displayed along with the treatment details for IPD patients. | N |
| showListView | Configuration to display the treatment details list. If set to false along with showFlowSheet, only the header will be displayed. | N |
| showRoute | Configuration to display the route information. If you don't specify the "showRoute" in the treatment section, the default value will be false. | N |
| showDrugForm | Configuration to display the drug form information. If you don't specify the "showDrugForm" in the treatment section, the default value will be false. | N |
| numberOfVisits | The number of visits for which data has to be displayed | N |
| showOtherActive | If set to true, then a separate section "Other Active Drugs" is displayed with a list of active drugs from other visits. | N |
| showDetailsButton | Configuration to display audit information. If set to false, the audit information will not be displayed. | N |
| dashboardConfig | Indicates the configuration for the dashboard | Y |
| expandedViewConfig | Indicates the configuration for the details or expanded page (All Treatments Page/) | N |
| `hideEmptyDisplayControl` | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |

**

```

```

On this Page
 
 
 
 
Related Display Controls**

 

- [Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control)
- [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control)
- [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control)
- [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control)
- [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients)
