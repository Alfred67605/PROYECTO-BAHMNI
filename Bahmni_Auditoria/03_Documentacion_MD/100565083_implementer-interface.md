---
id: "100565083"
title: "Implementer Interface"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/100565083/implementer-interface"
version: 11
updated: "2018-01-19T08:57:42.017Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub"
download_date: "2026-10-20T21:04:43.711Z"
---

# Implementer Interface

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/100565083)  
> **Versión del documento:** v11 (2018-01-19T08:57:42.017Z) | **Autor/Editor:** Sruti Sridhar

---

**A stable version of Form builder (part of the Implementer's Interface) is available from version 0.90. Please note that Bahmni will continue to support the older method of building the form via  [JSON Configuration](/wiki/spaces/BAH/pages/32014552/Create+a+New+Observation+Form)**

## Purpose and Benefits

The Implementer's Interface is a UI driven way to configure Bahmni. It helps to:

- 
Reduce implementer's time.

- 
Eg: 70% of implementers’ time goes into reports

- 
Easy configurations of templates and patient dashboards

- 
Reduce barrier of entry (lesser technically able people should be able to configure Bahmni)

- 
Entry into a json and a csv and a UI is not ideal

- 
Improve ability to manage the system

- 
Monitoring failures and resolving them

- 
Upgrades

### Configure the Icon in home dashboard

Add new icon in home dashboard for navigating to implementer interface. 

In* home/extension.json*, add the configuration as shown below
**Sample Configuration**

```
"implementerInterface": {
     "id": "bahmni.implementer.interface",
     "extensionPointId": "org.bahmni.home.dashboard",
     "type": "link",
     "translationKey": "MODULE_LABEL_IMPLEMENTER_INTERFACE_KEY",
     "url": "/implementer-interface",
     "icon": "fa fa-pencil-square-o",
     "order": 12
}

```

Supported configuration for key Url
 
- In above example configuration, make sure the value configured for key **url** to be* "**/implementer-interface**" (this is the supported value and can't be changed)*
- For further configurations, please refer [Home App](/wiki/spaces/BAH/pages/34013780/Home+App)****

Note
 
Please note that the new forms that are created through implementer interface can't be configured to see in Patient Dashboard. But the observations that are captured for a concept from the form can be seen in the Patient Dashboard.

Example concepts : HEIGHT, WEIGHT

Sections**

 

- [Form Builder](/wiki/spaces/BAH/pages/100565092/Form+Builder)
[Add Controls](/wiki/spaces/BAH/pages/115085295/Add+Controls)
- [Edit a Published Form](/wiki/spaces/BAH/pages/115085335/Edit+a+Published+Form)
- [Rename a Form](/wiki/spaces/BAH/pages/115085378/Rename+a+Form)
- [Form Builder Internationalization](/wiki/spaces/BAH/pages/237338635/Form+Builder+Internationalization)
- [Import & Export](/wiki/spaces/BAH/pages/239796253/Import+Export)
- [Form Conditions / Form Events](/wiki/spaces/BAH/pages/237437004/Form+Conditions+Form+Events)
[Single editor for form event and control event](/wiki/spaces/BAH/pages/2318893296/Single+editor+for+form+event+and+control+event)
- [API to display form builder forms(forms 2.0) for a patient in dashboard](/wiki/spaces/BAH/pages/2306539867/API+to+display+form+builder+forms+forms+2.0+for+a+patient+in+dashboard)
- [Copy the translations of form (2.0) from one version to the next version in implementer-interface](/wiki/spaces/BAH/pages/2318893278/Copy+the+translations+of+form+2.0+from+one+version+to+the+next+version+in+implementer-interface)

- [Preview the form2 form before publishing in Implementer interface](/wiki/spaces/BAH/pages/2435710977/Preview+the+form2+form+before+publishing+in+Implementer+interface)

 

**Feature Details**

[Implementer's Interface](/wiki/spaces/BAH/pages/100565086/Implementer+s+Interface)
