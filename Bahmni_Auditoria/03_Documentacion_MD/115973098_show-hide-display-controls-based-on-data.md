---
id: "115973098"
title: "Show/Hide Display Controls based on data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115973098/show-hide-display-controls-based-on-data"
version: 6
updated: "2023-11-30T14:33:34.165Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:37.223Z"
---

# Show/Hide Display Controls based on data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115973098)  
> **Versión del documento:** v6 (2023-11-30T14:33:34.165Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

The patient dashboard contains display controls that show specific data in sections. When the dashboard contains a lot of information, it fails to display in a single page and requires the user to scroll through the page to get to the information they want to see.

Further, these display controls show up with just the header and a blank section if there is no data to display. In order to better optimise what is displayed in the patient dashboard, we might want to display only those sections (display controls) which contain data. The other sections would not appear on the dashboard at all. This can be advantageous in situations where the dashboard should only show "disease specific" data. For instance we may only want to see "specific information" for "diabetes" patient, and some other data for patients with "TB", etc. If there is diabetes centric data logged for the patient, the dashboard will show up those widgets, while TB ones won't show up (since concept names for diabetes may be different from TB ones). You can also consider to add more "TABS" in the dashboard, for creating alternative dashboards, rather than use one dashboard with lots of widgets. 

An alternative use case is that, in some implementations, the visibility of an empty section on the patient dashboard will prompt the user to record the data to be displayed in that section. Therefore, an empty display control serves as a reminder for the user to record information.

You may need to experiment a bit to decide if you want a specific widget to be always shown, or hidden (when it has no data).

## Configuration:

Add this property "hideEmptyDisplayControl" to individual display control sections in default config/openmrs/apps/ clinical/ dashboard.json 
**Configuration for show/hide display control**

```
"sectionName": { //Should be a unique name
    "translationKey": "Internationalization key or Title", //Title of the display control
    "displayType": "Full-Page | Half-Page", //Default is Half-Page
    "displayOrder": 0, // All display controls are show in the order mentioned here
    "showOnlyInPrint": true/false, //Show this display control only when printing. Default false.
    "hideEmptyDisplayControl": true/false //Show this display control only when data is available. Default false.
}

```

## **Display Controls that are supporting this property

**

- 
Diagnosis Control 

- 
Treatment Display Control

- 
Lab Order Control

- 
Observation control

- 
Disposition Control

- 
Programs Display Control

- 
Radiology

- 
Bacteriology Results Control

- 
Admission Details Control 

- 
Obs To Obs FlowSheet

- 
Forms Display Control
