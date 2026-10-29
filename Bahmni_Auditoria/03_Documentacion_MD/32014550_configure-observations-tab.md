---
id: "32014550"
title: "Configure Observations Tab"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014550/configure-observations-tab"
version: 81
updated: "2022-11-20T11:54:30.408Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:13.424Z"
---

# Configure Observations Tab

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014550)  
> **Versión del documento:** v81 (2022-11-20T11:54:30.408Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits
 
The panel view is the default and the only view from release-0.87.

The Observations Tab captures one or multiple clinical observations for a patient.

The below screenshot displays an instance of an Observation Tab:

![](https://bahmni.atlassian.net/wiki/download/attachments/32014550/Screen%20Shot%202016-12-20%20at%202.22.33%20PM.png?version=1&modificationDate=1482223990148&cacheVersion=1&api=v2)

### **Configure Observations Tab**

To configure the Observations Tab (editing or discarding it), refer to the code snippet below: 
**Sample Configuration**

```
{
  "observations": {
    "id": "bahmni.clinical.consultation.observations",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Observations",
    "url": "concept-set-group/observations",
    "default": true,
    "icon": "fa-user-md",
    "order": 1,
    "requiredPrivilege": "app:clinical:observationTab"
  },
 

```

Example File
 
 [https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/extension.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/extension.json)

**

## Key Fields 

| Key | Use | Mandatory |
| --- | --- | --- |
| id | Unique identifier for the configuration | - |
| extensionPointId | Search Filter | - |
| type | Search filter | - |
| label | Displayed name of the tab | - |
| url | URL of the tab | - |
| default | If true, makes the tab displayed by default & vice versa | - |
| icon | Fetches the icon to be displayed (if present in code) | - |
| order | The order in which the tab will be displayed | - |
| requiredPrivilege | Bahmni privilege required for accessing the tab | - |

## Data Setup

No Observation forms are provided Out of the Box in Bahmni. 

There are two ways to create Observation Forms. 

- Forms 2.0 - The new ReactJS based Forms
- Forms 1.0 - Using older "ConceptSet UI" based definitions.  Please refer to [Create a New Observation Form](/wiki/spaces/BAH/pages/32014552/Create+a+New+Observation+Form) for details on adding and/or configuring OpenMRS Observation forms.

Version 0.90 update
 
The following sections are applicable only for Forms 1.0

## Display Formats for Observation Forms

Observation Forms/ Templates under Observation Tab can be configured to be displayed in different formats listed below.
 
- This is the default view for now. No configuration or using the configuration below will enable this view.
- The panel view is the default and the only view from release-0.87. The config is not applicable from release-0.87 onwards.

### Traditional full page view

 
- Applicable only for v 0.86 or earlier. 

In this traditional full page view, all the added Observation forms/templates will be displayed as a sequence in a single page. 

Add to clinical/app.json under "conceptSetUI" to configure Full Page View**

```
"conceptSetUI": {
  "All Observation Templates": {
     "showPanelView": false
  }
  
 
```

**

### Panel view

In this view, there will be left panel with all the added Observation forms. By clicking on particular form displayed on the left panel, the full form will load on right panel of the page. Hence one can choose to show only selected form at any particular instance.

Errors in the Form/Template
 
- On Consultation Save, the forms with errors will be indicated with Error Indication(![](https://bahmni.atlassian.net/wiki/download/attachments/32014550/ErrorIndication.png?version=1&modificationDate=1474013217991&cacheVersion=1&api=v2)) on left panel. Clicking on the Error Indication of the active form will highlight the error by scrolling to the error field with error message popped up.
- All the saved forms will have the *form (or template) saved date* beside the name on left panel to indicate the saved forms.
- The unsaved newly added forms using *add more* can be removed using the Cross button(![](https://bahmni.atlassian.net/wiki/download/attachments/32014550/Remove%20button.png?version=1&modificationDate=1474013312218&cacheVersion=1&api=v2)) on right top of the form section header in right panel.

Add to clinical/app.json under conceptSetUI section to configure 'Panel view'**

```
"conceptSetUI": {
    "All Observation Templates": {
       "showPanelView": true
    }
   
```

![](https://bahmni.atlassian.net/wiki/download/attachments/32014550/Screen%20Shot%202016-12-20%20at%202.18.52%20PM.png?version=1&modificationDate=1482223883773&cacheVersion=1&api=v2)

Example file with configuration
 
[https://github.com/Bahmni/default-config/blob/master/openmrs/apps/clinical/app.json#L63](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/clinical/app.json#L63)

## Configure Default Observation forms on the left panel

One can configure a list of forms to appear on the left panel of the observations tab. For that we need to add below configuration in the clinical/extension.json file with relevant observation form concept name. For multiple forms we need to add multiple configurations.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014550/Screen%20Shot%202017-04-24%20at%201.26.54%20PM.png?version=1&modificationDate=1493020634264&cacheVersion=1&api=v2)**
Sample Config**

```
"bahmniClinicalConceptSetGroupObservationsVitals": {
   "id": "bahmni.clinical.conceptSetGroup.observations.vitals",
   "extensionPointId": "org.bahmni.clinical.conceptSetGroup.observations",
   "type": "config",
   "extensionParams": {
      "default": true,
      "conceptName": "Vitals" /* Observation Form Concept Name */
   },
   "order": 1,
   "requiredPrivilege": "app:clinical"
}
```

**

On this Page

 
 
 
Feature Details**

[Observations Form - Feature Guide](/wiki/spaces/BAH/pages/40501363/Capturing+Observations)
