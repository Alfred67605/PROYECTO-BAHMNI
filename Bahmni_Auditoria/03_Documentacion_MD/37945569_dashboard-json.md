---
id: "37945569"
title: "dashboard.json"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945569/dashboard-json"
version: 34
updated: "2017-03-30T10:44:45.458Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:20.166Z"
---

# dashboard.json

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945569)  
> **Versión del documento:** v34 (2017-03-30T10:44:45.458Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Description

The dashboard.json contains configurations that allows different display controls to be displayed on the patient dashboard.
**Sample dashboard config**

```
{
  "general": {
    "translationKey": "DASHBOARD_TAB_GENERAL_KEY",
    "displayByDefault": true,
    "maxRecentlyViewedPatients": 10,
    "sections": {},
	"printing" :{}
  },
  "trends": {
    "label": "Trends",
    "maxRecentlyViewedPatients": 10,
    "sections": {},
	"printing" :{}
  },
  "patientSummary": {
    "translationKey": "DASHBOARD_TAB_PATIENT_SUMMARY_KEY",
    "maxRecentlyViewedPatients": 10,
    "sections": {},
	"printing" :{}
  }
}

```

### Key Fields

| Key | Info | Value Type |
| --- | --- | --- |
| translationKey | Internationalizes the dashboard title. You can provide the key or the title itself. | Text |
| label | If internationalization is not required, then the title of the dashboard can be directly given in label.**Either *translationKey* or a label is mandatory. | Text |
| displayByDefault | True/false. Opens the dashboard tab by default if given as true. At least one dashboard should mandatorily have this as *true*. | True/false |
| maxRecentlyViewedPatients | Configure the number of patients in "recently viewed patients" under the patient switch button | Number |
| sections | Any display control can be configured in this section. To configure display controls see [Display Controls](/wiki/spaces/BAH/pages/37945573/Display+Controls) | {} |
| printing | This is optional parameter. This can be defined when print functionality is needed Key | Info |
| ``` title ``` | name of organisation |  |
| ``` header ``` | name of document |  |
| ``` logo ``` | path of hospital logo file |  |
| ``` showNameAndImage ``` | If set to false, will hide patient name and image on the print page. By default, patient name and image are displayed on the print page |  |
| **Below keys are considered only when [QuickPrint](#dashboard.json-QuickPrint) is enabled ** |  |  |
| ``` label ``` | name to be displayed on the QuickPrint dropdown. Default value when no configuration for label If label is not configured, then **header** is considered |  |
| ``` shortcutKey ``` | character to be used as keyboard short cut |  |

 

 
 Sample configuration for printing 
```
"printing": {
           "title": "ABC Hospital",
           "header": "General Report",
           "logo": "../images/bahmniLogo.png",
```

```
			"showNameAndImage": true,
```

```
		   "label": "General"
```

```
           "shortcutKey":"g"
       }
```

{}

 

## Adding Printing Capability to Patient Dashboard

One can add a *Print* button on any of the dashboard *tabs. * For instance, see below, Print button has been added to two of the tabs (by adding the *printing* element to the json). 

 
Sample dashboard config**

```
{
  "general": {
    "translationKey": "DASHBOARD_TAB_GENERAL_KEY",
    "displayByDefault": true,
    "maxRecentlyViewedPatients": 10,
    "printing": {
           "title": "ABC Hospital",
           "header": "General Report",
           "logo": "../images/bahmniLogo.png",
		   "showNameAndImage": true
       },
    "sections": {}
  },
  "trends": {
    "label": "Trends",
    "maxRecentlyViewedPatients": 10,
    "sections": {}
  },
  "patientSummary": {
    "translationKey": "DASHBOARD_TAB_PATIENT_SUMMARY_KEY",
    "maxRecentlyViewedPatients": 10,
    "printing": {
           "title": "ABC Hospital",
           "header": "Summary Report",
           "logo": "../images/bahmniLogo.png",
		   "showNameAndImage": false
       },
    "sections": {}
  }
}

```

 

![](https://bahmni.atlassian.net/wiki/download/attachments/37945569/Print%20Key.png?version=1&modificationDate=1465917450489&cacheVersion=1&api=v2)

 

 

![](https://bahmni.atlassian.net/wiki/download/attachments/37945569/Print%20Preview.png?version=1&modificationDate=1465917544504&cacheVersion=1&api=v2)

## Hiding patient name and image 

If "showNameAndImage" is set to false, the patient name and image are hidden on the print page as below.

## ![](https://bahmni.atlassian.net/wiki/download/attachments/37945569/Screen%20Shot%202016-08-23%20at%204.41.32%20PM.png?version=1&modificationDate=1471950799588&cacheVersion=1&api=v2)

## Quick Print

Quick Prints will give the ability to print any dashboard / tab (either patient dashboard / tab or visit dashboard / tab) from patient dashboard. This functionality is extension to the normal print behaviour where one can print the page one is currently on.To enable quick prints, the configuration should be added in clinical, app.json. The default behaviour is to print the tab or page one is landed i.e.., page one has clicked print from. If quick prints is enabled, then one can choose to print any patient dashboard (if configured multiple) and any visit dashboard (if configured one or many).

 ![](https://bahmni.atlassian.net/wiki/download/attachments/37945569/printing_option_at_hedder.jpg?version=1&modificationDate=1469629983729&cacheVersion=1&api=v2) 

To enable quick print functionality, follow these steps

- Go to *bahmni-config* (an implementation-specific configuration folder). The settings are available at *bahmni-config/openmrs/apps/clinical/app.json*.
- Add the following piece of configuration in the 'config' section of the file.

**Configuration to enable quick print**

 
**Enable Quick Print**

```
"quickPrints": true
```

##  Adding Patient Attributes to Patient Dashboard

One can add below configuration on any of the dashboard *tabs *under *sections* category. And this shows patient's age only in years on patient dashboard.

```
    "general":{  
        "translationKey":"DASHBOARD_TAB_GENERAL_KEY",
        "displayByDefault":true, 
        "maxRecentlyViewedPatients":10,
        "sections":{  
            "patientInformation":{  
                "translationKey":"DASHBOARD_TITLE_PATIENT_INFORMATION_KEY",
                "type":"patientInformation",
                "displayOrder":0,
                "ageLimit":23
             }
        }
      }   
```

![](https://bahmni.atlassian.net/wiki/download/attachments/37945569/Screen%20Shot%202017-03-30%20at%204.13.22%20PM.png?version=1&modificationDate=1490870644520&cacheVersion=1&api=v2)

 

**On this page**

 
 
 

**Related Links**

[All Display Controls (Full Index)](/wiki/spaces/BAH/pages/37945573/Display+Controls)

[Patient Dashboard](/wiki/spaces/BAH/pages/37355639/Patient+Dashboard)
