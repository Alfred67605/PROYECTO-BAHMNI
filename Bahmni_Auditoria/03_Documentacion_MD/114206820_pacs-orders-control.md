---
id: "114206820"
title: "PACS Orders Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206820/pacs-orders-control"
version: 5
updated: "2025-04-18T12:23:15.829Z"
author: "Satish Viswanathan"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:44.854Z"
---

# PACS Orders Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206820)  
> **Versión del documento:** v5 (2025-04-18T12:23:15.829Z) | **Autor/Editor:** Satish Viswanathan

---

## Purpose

This Control is used to list all the Pacs Orders and the corresponding results for a particular patient.

## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114206820/Screen%20Shot%202016-06-28%20at%2010.40.10%20AM.png?version=1&modificationDate=1484670225959&cacheVersion=1&api=v2)

## Configuration

### Sample Config
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"allPacsOrders": {
    "orderType": "Radiology Order",
    "name": "pacsOrders",
    "title": "ALL PACS ORDER",
    "dashboardParams":{
        "pacsImageUrl":"http://10.0.0.10:8080/oviyam2/viewer.html?patientID={{patientID}}&accessionNumber={{orderNumber}}",
        "numberOfVisits":4
  }
}
```

### Key Field Table

| Key | Information | Mandatory |  |
| --- | --- | --- | --- |
| title | The title to be shown in the display control | Y |  |
| type | Should be **'pacsOrders'** | Y |  |
| orderType | Only the orders of this type will shown in the display control | Y |  |
| dashboardConfig | Key | Information | ** |
| pacsImageurl | The **url template **of the pacs image link. (For ex. It could be the Oviyam2 DICOM image viewer link) Placholders | Replaced with |  |
| {{patientID}} | The identifier of the patient |  |  |
| {{orderNumber}} | The order number of the order |  |  |

These placholders has to be parts of the **url template**
YnumberOfVisitsIt is the number of visits for which data has to be displayedN

On this Page
 
 
 
 
Related Display Controls**

 

- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control)
- [Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control)
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control)
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control)
