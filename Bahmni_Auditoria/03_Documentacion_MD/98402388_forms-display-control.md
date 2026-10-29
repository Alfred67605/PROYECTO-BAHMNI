---
id: "98402388"
title: "Forms Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/98402388/forms-display-control"
version: 33
updated: "2023-11-29T13:03:17.993Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:33.973Z"
---

# Forms Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/98402388)  
> **Versión del documento:** v33 (2023-11-29T13:03:17.993Z) | **Autor/Editor:** Riya Kumari

---

# Purpose

It is used to list the Forms or Observation Templates that have been created within the configured number visits with a provision to view details and edit from/template from this control.

# Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/98402388/Screen%20Shot%202016-11-11%20at%2010.15.24%20pm.png?version=1&modificationDate=1478882829121&cacheVersion=1&api=v2)

Note
 
In the above screenshot, Baseline and Treatment Initiation are the two forms filled. The other templates that are configured in the below sample config are "Baseline","Treatment Initiation","Serious Adverse Events Template","Pregnancy Report Form Template"

How to Edit the Template/Form ?
 
To edit a particular form/template from this control, click on the **pencil** icon displayed against a particular form/template. Please refer above screenshot.

How to View the Form/Template ?
 
To view a particular form and the observations captured for that form via this control, click on the **eye** icon against a particular form. Please refer above screenshot.

**

# Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"adverseEventsForms": {
	"type": "forms",
    "displayOrder": 6,
    "dashboardConfig": {
        "maximumNoOfVisits": 10
    },
    "formGroup":["Baseline","Treatment Initiation","Serious Adverse Events Template","Pregnancy Report Form Template"],
    "translationKey": "DASHBOARD_TITLE_BASELINE_FORMS",
    "hideEmptyDisplayControl": false
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| type | Indicates the display control. **For Forms Control, value of type should be "forms"** | Y |
| maximumNoOfVisits | Specifies the maximum number of visits for which to display data | N |
| dashboardConfig | Indicates that all the configurations mentioned under this are for the patient dashboard | Y |
| displayOrder | The order in which the display control will be displayed | N |
| translationKey | Internationalizes the display control | Y |
| formGroup | Observation templates that will be visible. | N |
| hideEmptyDisplayControl | Hides the display control if no value is present for it when set to true, default value is set to false | N |

## Display only date without time

### Purpose

This configuration is used to display just date with out time on Forms Display Control.

Default behaviour
 
By default it will show both date and time.

Where to Configure ?
 
Add the configuration in* clinical,app.json* under the *config* section.

### Sample Config
**To be added in clinical, app.json under config section**

```
"config" : {
"showFormsDate" : true
}
```

### Key Field Table

| Key | Description | Note |
| --- | --- | --- |
| showFormsDate | Determines whether only date (without time) is to be displayed or not | By default both date and time are shown. If value is set to false, *only* date is shown |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control)
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control)
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control)
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control)
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet)
