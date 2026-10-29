---
id: "32014572"
title: "Configure Patient Dashboard"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014572/configure-patient-dashboard"
version: 83
updated: "2018-08-27T11:15:00.687Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:07.576Z"
---

# Configure Patient Dashboard

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014572)  
> **Versión del documento:** v83 (2018-08-27T11:15:00.687Z) | **Autor/Editor:** Angshuman Sarkar

---

**

## Purpose and Benefits

The Patient Dashboard displays a quick view of all patient's medical and personal details. This is achieved by adding various display controls to a dashboard.  One can also configure multiple dashboards which show up as separate tabs. For instance in the screenshot below different dashboards have been added: General, Patient Summary, Trends, etc, each with its own set of display controls. 

Bahmni supports various [display controls](https://bahmni.atlassian.net/wiki/display/BAH/Display+Controls) that can be added and configured to display relevant patient information. A display control takes in configuration that specifies the context (patient, visit, etc.) and other parameters (display specific feature toggles), retrieves relevant data on its own and displays it based on where it is placed on the application. 

One can also configure "[Print](/wiki/spaces/BAH/pages/37945569/dashboard.json)" for any dashboard. 

                                 ![](https://bahmni.atlassian.net/wiki/download/attachments/32014572/Patient%20Dashboard2.png?version=2&modificationDate=1449141819251&cacheVersion=1&api=v2)

**Patient Dashboard - General Tab**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014572/Patient%20Summary.png?version=1&modificationDate=1447318119774&cacheVersion=1&api=v2)

**Patient Dashboard - Patient Summary Tab**

## Configuration

### Configure a Dashboard Tab

To configure a dashboard tab called *General*, refer to the code snippet below:
 
This is sample documentation for *General *Tab. One can name the tab anything they deem as suitable.

```
  {  
    "general": { //First tab that is called general
        "translationKey": "DASHBOARD_TAB_GENERAL_KEY",
        "displayByDefault": true,
        "maxRecentlyViewedPatients": 10,
        "sections": {
			// Put appropriate display controls here. 
            // Read documentation: https://bahmni.atlassian.net/wiki/display/BAH/Display+Controls	
          }
     }, 
    "patientSummary": { //Second tab called patientSummary begins here......
    }
  }         
```

| Field Name | Description |
| --- | --- |
| ``` translation Key ``` | Name of the dashboard tab. This will be displayed as the tab label |
| displayByDefault | Will always show this tab by default on load of the dashboard. Possible values are *true* or *false*. It is mandatory to have at least one tab with *displayByDefault* set to *true*. |
| maxRecentlyViewedPatients | Number of patients to show in the "Recent Patients" dropdown |
| sections | List of all the widgets (and its configs) to be displayed in this tab |

Please refer to [https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json) for further information. You can similarly configure other tabs such as the Patient Summary, in the Patient Dashboard.

### Navigation Configuration

#### Configuring "Go To IPD Dashboard"
 
This is available only from version 0.91 onwards

The "Go To IPD Dashboard" button can be configured as per implementation . To do so, in Clinical Module's *`app.json `*`file`, add configuration element called "*adtNavigationConfig" *within the "*config*" section. There are 3 key-value pairs that can be modified accordingly.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014572/IPD.png?version=1&modificationDate=1534148005065&cacheVersion=1&api=v2)

The **privilege** describes the privileges required to view the button

The **forwardUrl** specifies the Url the user would be taken to on clicking the button

The **title **specifies what should be displayed when the mouse is hovered over the button
Sample Config**

```
"adtNavigationConfig": {
    "privilege": "app:adt",
    "forwardUrl": "../bedmanagement/#/bedManagement/patient/{{patientUuid}}",
    "title": "Go to IPD dashboard"
}
```

On this Page

 
 
 
**Related Links**

[Display Controls List & Configuration](/wiki/spaces/BAH/pages/37945573/Display+Controls)

[dashboard.json configuration](/wiki/spaces/BAH/pages/37945569/dashboard.json)

**Feature Details**

[Clinical Services - Feature Guide](/wiki/spaces/BAH/pages/32014350/Clinical)
