---
id: "114188767"
title: "Observation Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114188767/observation-control"
version: 15
updated: "2025-01-06T09:13:14.254Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:35.697Z"
---

# Observation Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114188767)  
> **Versión del documento:** v15 (2025-01-06T09:13:14.254Z) | **Autor/Editor:** Rahul Ramesh

---

# Purpose

Observation Control can be configured to display all the observation values captured against the configured concepts (and within the configured number of visits). This control also has a provision to add **initial** and **latest** observation value (across all visits). The control can display values in a grid (tabular format, one column for each visit) or in section format (one for each visit).**

# Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114188767/Screen%20Shot%202017-03-03%20at%205.07.13%20PM.png?version=1&modificationDate=1488541086334&cacheVersion=1&api=v2)

# ![](https://bahmni.atlassian.net/wiki/download/attachments/114188767/Screen%20Shot%202017-03-03%20at%205.07.28%20PM.png?version=1&modificationDate=1488541143150&cacheVersion=1&api=v2)

# Configuration

### Sample Configuration
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"someNiceName": { // Any unique name
  "translationKey": "Vitals", // Mandatory. Should be a key from translation file, or just english text to show as title of the control
  "type":"observation", 
  "isObservation": true,
  "dashboardConfig": {   
    "conceptNames": ["Height", "Weight", "BMI", "BMI STATUS"],
    "scope": "latest" or "numberOfVisits": "4", //use either scope attribute or numberOfVisits attribute
    "showGroupDateTime": false   
  } ,
  "expandedViewConfig": {
    "conceptNames": ["Height", "Weight", "BMI", "BMI STATUS"],
    "showDetailsButton": true,
    "pivotTable": {
      "numberOfVisits": "4",
      "groupBy": "encounters",
      "obsConcepts": ["Vitals", "Height", "Weight", "Pathology"],
      "drugConcepts": "",
      "labConcepts": ""
    }
  },
  "hideEmptyDisplayControl": false
}
```

**

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| translationKey | The name/translation Key(Internationalization) of the control to be displayed as Widget Title in the UI. | Y |
| conceptNames | The concept names of the concepts that need to be displayed in this widget. | Y |
| scope | Can be latest/initial/blank. If "latest", then the latest value of the observation across visits is shown. If "initial", then the first value across visits is shown. If a scope is not mentioned, then the number of visits has to be mentioned (numberOfVisits). Otherwise if the scope is blank, then the observation values across all visits are displayed. | N |
| isObservation | Specifies whether the given section is an observation control or a disease template control. If this is set to true then the section behaves as an observation control. | Y |
| numberOfVisits | Specifies the number of previous visits for which data has to be displayed on the pivot table | N |
| groupBy | Can be encounters/visits. If grouped by the **encounter**, then the data is displayed per encounter in the pivot table. (A patient may have more than one doctor encounter within a visit). If grouped by the **visit**, then the latest value of the observations in each visit is displayed in the pivot table. | Y |
| obsConcept | Specify the concept names of the observations that need to be displayed in the pivot table | Y |
| drugConcept | Specify the concept names of the **drugs** that need to be displayed in the pivot table | Y |
| labConcept | Concept names of the **lab tests** that need to be displayed in the pivot table | Y |
| dashboardConfig | Indicates the configuration for the dashboard (Section Sub-Group) | Y |
| expandedViewConfig | Indicates the configuration for the details page (All Observations Page) | Y |
| showDetailsButton | Configuration to display audit information when '+ ' sign is clicked. If set to false, the '+' button will not be displayed. | N |
| showGroupDateTime | Configuration to display grouped encounter date time. If set to false, it is hidden. Default value is true (which means it is treated as true, if nothing specified). Should be separately configured for both dashboard and allDetails page | N |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |

## **Initial And Latest Observations**

**Sample configuration**

```
"atAdmission": {
 "type": "observation",
 "title": "At Admission",
 "config": {
 "conceptNames": ["Weight", "Height", "BMI"],
 "scope": "initial"
 }
}
"atDischarge": {
 "type": "observation",
 "title": "At Discharge",
 "config": {
 "conceptNames": ["Weight"],
 "scope": "latest"
 }
}
```

## **
Nutritional Values Control**

This is an example of an Observation Control

**![](https://bahmni.atlassian.net/wiki/download/attachments/114188767/Screen%20Shot%202016-05-25%20at%203.56.37%20PM.png?version=1&modificationDate=1484560443237&cacheVersion=1&api=v2)
**

**Sample configuration**

```
"nutritionalValues": {
	"type": "observation",
	"isObservation": true,
	"dashboardConfig": {
		"conceptNames": ["Height (cm)","Weight (kg)","BMI Data"],
		"numberOfVisits": 1
	},
	"displayOrder": 1,
	"translationKey": "DASHBOARD_TITLE_NUTRITIONAL_VALUES_KEY",
     "hideEmptyDisplayControl": false
},

```

Please refer to [https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json) for further information.

**Key Field Table**

| Key | Info | Mandatory |
| --- | --- | --- |
| type | Indicates type of control. This attribute is not being used in this control and can be set to any value. Recommend using value '**observation**' for clarity that this is an observation control. | Y |
| isObservation | Specifies whether the given section is an observation control or a disease template control. If this is set to true then the section behaves as an observation control | Y |
| dashboardConfig | Indicates the configuration for the dashboard | Y |
| conceptNames | Specify the concept names of the concepts that need to be displayed in this section. (Required) | Y |
| numberOfVisits | The number of visits for which data has to be displayed (alternatively you can use **scope** attribute and set it to value **initial** or **latest **value) | numberOfVisits or scope is required |
| displayOrder | The order in which the display control will be displayed | N |
| translationKey | Internationalizes the display control (picks the display title from a translation file) | Y |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |

On this page**

 
 
 

**Related Display Controls**

 

- [Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control)
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control)
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control)
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control)
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet)
