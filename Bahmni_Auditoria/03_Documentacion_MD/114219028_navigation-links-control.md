---
id: "114219028"
title: "Navigation Links Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114219028/navigation-links-control"
version: 7
updated: "2022-11-20T11:17:26.181Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:49.602Z"
---

# Navigation Links Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114219028)  
> **Versión del documento:** v7 (2022-11-20T11:17:26.181Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

Navigation Links Control can be configured to list the links of required pages. Clicking on the link will help navigate to that particular page. One can use the default links that are provided or can also configure custom links.

## Screenshot

**![](https://bahmni.atlassian.net/wiki/download/attachments/114219028/Screen%20Shot%202016-05-25%20at%203.45.13%20PM.png?version=1&modificationDate=1484738516198&cacheVersion=1&api=v2)

## Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"navigationLinksControl": {
                "title":"Navigation Links Control",
                "translationKey": "DASHBOARD_TITLE_NAVIGATION_LINKS_CONTROL_KEY",
                "type": "navigationLinksControl",
                "displayOrder": 10,
                "showLinks" : ["home", "visit", "registration"],
                "customLinks": [
                    {
                        "translationKey": "CONSULTATION_PAGE_KEY",
                        "url": "../clinical/#/default/patient/{{patientUuid}}/concept-set-group/observations"
                    },
                    {
                        "translationKey": "OpenELIS",
                        "url": "/openelis"
                    }
                ]
            },
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| type | Name of the display control | Y |
| translationKey | Internationalizes and displays the title. | Y |
| title | The label that will be displayed on the display control (If translationKey is present no need to give it) | N |
| displayOrder | The order in which the display control will be displayed. if not specified the display is shown after the displays which have an order specified | N |
| showLinks | List of links user would like to inherit from default links provided by the Bahmni. **Please [refer to this file](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/master/ui/app/common/displaycontrols/navigationlinks/directives/navigationLinks.js) to see the Key Names for Internationalization.** | N |
| ** | **"home"** (Enables link to navigate to Home Page/Dashboard) |  |
|  | **"visit"** (Enables link to navigate to current patient's Active Visit Page) |  |
|  | **"registration"** (Enables link to navigate to current patient's Registration Page) |  |
|  | **"inpatient"** (Enables link to navigate to current patient's Inpatient/ADT Page/Dashboard) |  |
|  | **"enrolment" ** (Enables link to navigate to current patient's Program Page/Dashboard) |  |
|  | **"visitAttribute"** (Enables link to navigate to current patient's Visit Attributes Page (second page of registration or visit page of registration)) |  |
| customLinks | List of links that the user would like to add which are not provided by product. If specified, then below attributes are mandatory. | N |
|  | **translationKey **: Internationalizes and displays the Text in the link | Y |
|  | **url**: Url to navigate (on click of the link) | Y |

On this Page
 
 
 
 
Related Display Controls**

 

- [Navigation Links Control](/wiki/spaces/BAH/pages/114219028/Navigation+Links+Control)
