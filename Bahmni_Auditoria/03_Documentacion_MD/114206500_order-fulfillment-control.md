---
id: "114206500"
title: "Order Fulfillment Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206500/order-fulfillment-control"
version: 9
updated: "2022-11-20T11:11:17.510Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:44.319Z"
---

# Order Fulfillment Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206500)  
> **Versión del documento:** v9 (2022-11-20T11:11:17.510Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

It displays all the orders (for configured number of visits) and their corresponding fulfillment details for an orderType configured.
 
ELIS results don't sync with this display control. It's only configured for order fulfillment flow within EMR.

## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114206500/Lab%20order%20display%20Control.png?version=1&modificationDate=1484669950562&cacheVersion=1&api=v2)

## Configuration

### Sample Config
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"labOrdersControl": {
 "orderType": "Lab Order",
 "type": "ordersControl",
 "title": "Lab Orders Display Control",
 "dashboardConfig": {   
    "conceptNames": ["Systolic", "Diastolic", "Posture", "Temperature"],
    "numberOfVisits": "4",
	"showHeader": true,
	"obsIgnoreList" : ["Supine"]
  } ,
 "expandedViewConfig": {
      "conceptNames": ["Systolic", "Diastolic", "Posture", "Temperature"],
	   "showHeader": true
  }
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| orderType | type of the order you want to display (Required) | Y |
| type | the name/id for the control that needs to be picked from the code. (Required) | Y |
| title | indicates the title that will be displayed on the dashboard/visit page for the section. (Required) | Y |
| conceptNames | Specify the concept names of the concepts that need to be displayed in this section. (Required) | Y |
| numberOfVisits | specifies the number of visits for which orders has to be displayed. (Optional) | N |
| dashboardConfig | indicates the configuration for the dashboard | Y |
| expandedViewConfig | Indicates the configuration for the details page (All Orders Page) | N |
| showHeader | If set to true, the headers will be displayed; otherwise the headers will be displayed only when observations are captured for the order . Default value : true .(Optional) | N |
| obsIgnoreList | Specify the concept names whose observations can be ignored in this section (Optional) | N |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control)
- [Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control)
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control)
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control)
