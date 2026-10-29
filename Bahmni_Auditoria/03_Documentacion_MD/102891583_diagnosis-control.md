---
id: "102891583"
title: "Diagnosis Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/102891583/diagnosis-control"
version: 29
updated: "2023-11-29T13:09:09.334Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:31.802Z"
---

# Diagnosis Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/102891583)  
> **Versión del documento:** v29 (2023-11-29T13:09:09.334Z) | **Autor/Editor:** Riya Kumari

---

## Purpose

It is used for the clinician to easily view a list of all diagnoses (with in configured number of visits) that the patient is diagnosed.

# Screenshot

# ![](https://bahmni.atlassian.net/wiki/download/attachments/102891583/Screen%20Shot%202016-05-25%20at%204.09.52%20PM.png?version=1&modificationDate=1480485422883&cacheVersion=1&api=v2)

## Configuration

### Sample Configuration
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"diagnosis": {
   "translationKey": "DIAGNOSIS_KEY",
   "type": "diagnosis",
   "showRuledOutDiagnoses": false,
   "showCertainty": true,
   "showOrder": true,
   "showDetailsButton":true,
   "hideEmptyDisplayControl": false
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| translationKey | Internationalizes and displays the title for the display control. | Y |
| type | Indicated the type of the control. **type should be "diagnosis"** | Y |
| ** showRuledOutDiagnoses | Indicates whether to filter out ruled out diagnoses or not. If set to false, ruled out diagnoses will not be displayed in the display control. | N |
| showCertainty | Indicates whether certainty(CONFIRMED/PRESUMED) of the diagnosis should be displayed for each diagnosis in the display control. If set to false, certainty of the diagnosis will not be displayed for the diagnoses. | N |
| showOrder | Indicates whether order(PRIMARY/SECONDARY) of the diagnosis should be displayed for each diagnosis in the display control. If set to false, orders for the diagnosis will not be displayed for the diagnoses. | N |
| showDetailsButton | Configuration to display audit information when '+ ' sign is clicked. If set to false, the '+' button will not be displayed. | N |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |

[Refer this](/wiki/spaces/BAH/pages/72581122/Configure+Display+Controls+in+Print)to configure this display control in print

On this Page
 
 
 
 
Related Display Controls**

 

- [Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control)
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control)
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control)
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control)
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet)
