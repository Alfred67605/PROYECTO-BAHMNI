---
id: "427229196"
title: "Creating a New Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/427229196/creating-a-new-display-control"
version: 3
updated: "2018-01-24T17:28:43.238Z"
author: "Himabindu Akkinepalli"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:28.896Z"
---

# Creating a New Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/427229196)  
> **Versión del documento:** v3 (2018-01-24T17:28:43.238Z) | **Autor/Editor:** Himabindu Akkinepalli

---

Note
 
Its a Work in Progress Document

**

Display controls are widgets that can be added to various pages to better configure them. They can be customised to show specific information and will automatically align to the context of the screen. Check [this](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945573/Display+Controls) page to see the list of display control that comes out of box with Bahmni.

There are two different types of display controls that we support in Bahmni.

### 1. Generic Bahmni Display Controls

Generic display controls come out of the box with Bahmni product and if you want to add a display control to the core product, it needs code change in [bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps). Any Bahmni implementation can use this display control. Let’s take [Diagnosis](https://github.com/Bahmni/default-config/blob/release-0.90/openmrs/apps/clinical/dashboard.json#L22) display control as an example.

- Add a new html file in [bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps/tree/master/ui/app/common/displaycontrols/dashboard/views/sections). The value of **type** is name of the html file. **type** is mandatory field in any display control.

```
  "type":"diagnosis" 
```

The below is the code snippet for diagnosis.html file.

```

   
## 
        {{::section | titleTranslate}} 
       **
   

```

A html file will have a directive which will handle the rendering part. **<bahmni-diagnosis>** is an angular directive.To know more about angular directives check [this](https://docs.angularjs.org/guide/directive) page.

Once we done with the changes, we can add below display control config in *openmrs/apps/clinical/dashboard.json* file.

```
"diagnosis":{ 
   "translationKey":"DASHBOARD_TITLE_DIAGNOSIS_KEY",
   "type":"diagnosis",
   "showCertainty":true,
   "showOrder":true,
   "showDetailsButton":true,
   "displayOrder":1
}
```

In the above example, diagnosis config got saved as **[section](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/master/ui/app/common/displaycontrols/dashboard/controllers/patientDashboardDiagnosisController.js#L6)** and being sent as a parameter to** **<bahmni-diagnosis> directive. This is how the config detail gets picked from dashboard.json file.

We can also send the concept names in the display control. The observations for that concept will be displayed. These concept names are configurable and gets picked from the display control config dynamically as mentioned [here](https://github.com/Bahmni/default-config/blob/release-0.90/openmrs/apps/clinical/dashboard.json#L149).

Info
 
If you are working on a ticket where it needs to add a new display control to core product, then we need to follow above steps to configure Generic Display Control.

### 2. Custom Display Controls

Bahmni provides **customDisplayControl** module which provides basic connection between the application and configuration. These are the display controls which can be customised by the implementer/developer and don't need any code change in bahmniapps. Anyone who has their API exposed, can directly create their custom directive and configure the display controls. And these are mostly specific to implementation configuration. [Custom Display Control](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/93716500/Custom+Controls) wiki page has detailed steps on how to configure the display controls.

Let’s take Appointments display controls in the patient clinical dashboard. This is a custom directive and specific to implementation(default-config). It has [patient-appointments-dashboard](https://github.com/Bahmni/default-config/blob/release-0.90/openmrs/apps/clinical/dashboard.json#L397) directive configured.

On this Page
 
 
 
 
Implementation Details**

[Display Controls](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945573/Display+Controls)

[Custom Display Controls](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/93716500/Custom+Controls)
