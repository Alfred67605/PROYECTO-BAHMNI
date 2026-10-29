---
id: "100139014"
title: "Visit Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/100139014/visit-control"
version: 14
updated: "2022-11-20T11:19:11.223Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:51.702Z"
---

# Visit Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/100139014)  
> **Versión del documento:** v14 (2022-11-20T11:19:11.223Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

It displays the visit information of a patient along with start date, end date and the type of the visit. The active/current visit is marked with an asterisk (*).

Note
 
- Clicking on a particular visit will navigate to [Visit Dashboard](/wiki/spaces/BAH/pages/37945359/Configure+Visit+Dashboard)displaying the information for that visit.
- On clicking the title "Visits" in the below sample screenshot, a pop up showing all the visits of a patient will appear.
- An example use case is viewing the latest 8 visits of a patient.

**

## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/100139014/Visit%20Control%20on%20Patient%20Dashboard.png?version=1&modificationDate=1479366013883&cacheVersion=1&api=v2)

## Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"visits": {
            "translationKey": "DASHBOARD_TITLE_VISITS_KEY",
            "type": "visits",
            "displayOrder": 17,
            "dashboardConfig": {
                 "maximumNoOfVisits": 8
                }
         }
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| type | Indicates the type of the display control. **type should be "visits".** | Y |
| maximumNoOfVisits | Specifies the maximum number of visits for which to display data If it is empty, then by default all the visits for the patient are displayed. | N |
| dashboardConfig | Indicates that all the configurations mentioned under this are for the patient dashboard | Y |
| displayOrder | The order in which the display control will be displayed | N |
| translationKey | Internationalizes the display control | Y |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Patient Context Display Control](/wiki/spaces/BAH/pages/114227194/Patient+Context+Display+Control)
- [Patient Profile Control](/wiki/spaces/BAH/pages/114227474/Patient+Profile+Control)
- [Visit Control](/wiki/spaces/BAH/pages/100139014/Visit+Control)
