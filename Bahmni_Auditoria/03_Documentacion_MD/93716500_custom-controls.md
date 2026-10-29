---
id: "93716500"
title: "Custom Controls"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/93716500/custom-controls"
version: 20
updated: "2022-11-18T04:17:35.006Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:37.891Z"
---

# Custom Controls

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/93716500)  
> **Versión del documento:** v20 (2022-11-18T04:17:35.006Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

Bahmni allows implementers to create their own Custom Controls. The examples include:

- [Birth Certificate](https://bahmni.atlassian.net/wiki/display/BAH/Birth+Certificate?src=contextnavpagetreemode)
- [Patient Monitoring Tool](https://bahmni.atlassian.net/wiki/display/BAH/Patient+Monitoring+Tool?src=contextnavpagetreemode)

## Configuration

Where to Configure ?
 
Add to *clinical/dashboard.json* for it to appear on the *patient dashboard* or Add to *clinical/visit.json* for it to appear on the* visit dashboard*.

**

### Sample Configuration
Config**

```
"customControl": {
            "type": "custom",
            "config": {
                "title": "Title of the Control",
                "template": ""
            }
       }
```

### Key Field Table

| Key | Information | Mandatory |  |
| --- | --- | --- | --- |
| type | type of the section or control. **type should be "custom"** | Yes |  |
| config | Configuration for the custom display control. key | Information | Mandatory |
| title | title to be displayed | Yes |  |
| template | the directive to be used to show the control | Yes |  |

Yes
**

Bahmni allows implementers to create their own custom display control.

#### Custom Control on Visit Dashboard

The following configuration needs to be added in **visit.json** (openmrs/apps/clinical/visit.json) to display the custom display control in different visit tabs.

Consider the following example to configure the birth certificate:

```
"birthCertificate": {
    "title": "Birth Certificate",
    "printing": {
        "title": "Bahmni",
        "header": "Certificate",
        "logo": "../images/bahmniLogo.png"
    },
    "sections": {
        "Birth Certificate": {
            "type": "custom",
            "config": {
                "title": "Birth Certificate",
                "template": ""
            }
        }
    }
}
```

| Key | Information |  |
| --- | --- | --- |
| title | Title of the visit tab. | Y |
| printing | Add printing section to enable the print button on visit page. | Y |
|  | title - Title in print out. |  |
|  | header - Header in print out. |  |
|  | logo - Logo to display in print out. |  |
| type | "custom" (Required and should always be custom) | Y |
| config | configuration for the custom display control. |  |
|  | title - title of the custom directive | Y |
|  | template - the directive which you want to show. | Y |

#### **Custom control on Patient Dashboard**

The following configuration needs to be added under **sections** in **dashboard.json** (openmrs/apps/clinical/dashboard.json) to display the custom display control in different dashboard tabs.

Consider the following example to configure the birth certificate:

```
"General": {
    "translationKey": "DASHBOARD_TAB_GENERAL_KEY",
    "sections": {
        "Birth Certificate": {
            "type": "custom",
            "config": {
                "title": "Birth Certificate",
                "template": ""
            }
        }
    }
}
```

| Key | Information | Mandatory |  |
| --- | --- | --- | --- |
| type* | "custom" (Required and should always be custom) | Y |  |
| config | configuration for the custom display control. key | Information |  |
| title | title of the custom directive | Y |  |
| template | the directive which you want to show | Y |  |

Bahmni provides **customDisplayControl** module which provides basic connection between the application and configuration.

You can add new directives as per your requirement in the "**openmrs/apps/customDisplayControl/js/customControl.js**" file. (***Make sure you can create new custom directives only in the existing file***)

New directives should be under the same module. (**"bahmni.common.displaycontrol.custom"**). The scope of the new directive will have **patient, visitUuid and config**.

 
1. Make sure you don't create a different file for new directives (**all custom directives should be in the same file.**)
2. Don't forget to change the **contentUrl** to the html file you are referring to.

Sample Custom Controls**

- [Appointments Display Control](/wiki/spaces/BAH/pages/700088324/Appointments+Display+Control)
- [Birth Certificate](/wiki/spaces/BAH/pages/114217801/Birth+Certificate)
- [Patient Monitoring Tool](/wiki/spaces/BAH/pages/99647502/Patient+Monitoring+Tool)

**List of All Display Controls**

- [Clinical Observation Controls](/wiki/spaces/BAH/pages/114186103/Clinical+Observation+Controls)
[Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control)
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control)
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control)
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control)
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet)

- [Show/Hide Display Controls based on data](/wiki/spaces/BAH/pages/115973098/Show+Hide+Display+Controls+based+on+data)
- [Custom Controls](/wiki/spaces/BAH/pages/93716500/Custom+Controls)
[Appointments Display Control](/wiki/spaces/BAH/pages/700088324/Appointments+Display+Control)
- [Birth Certificate](/wiki/spaces/BAH/pages/114217801/Birth+Certificate)
- [Patient Monitoring Tool](/wiki/spaces/BAH/pages/99647502/Patient+Monitoring+Tool)

- [In-Patient Department (IPD) Controls](/wiki/spaces/BAH/pages/114204226/In-Patient+Department+IPD+Controls)
[Admission Details Control](/wiki/spaces/BAH/pages/114204313/Admission+Details+Control)
- [Disposition Control](/wiki/spaces/BAH/pages/114204754/Disposition+Control)

- [Lab and Radiology Controls](/wiki/spaces/BAH/pages/114206048/Lab+and+Radiology+Controls)
[Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control)
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control)
- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control)
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control)

- [Medication Controls](/wiki/spaces/BAH/pages/114207149/Medication+Controls)
[Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control)
- [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control)
- [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control)
- [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control)
- [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients)

- [Miscellaneous Controls](/wiki/spaces/BAH/pages/114218923/Miscellaneous+Controls)
[Navigation Links Control](/wiki/spaces/BAH/pages/114219028/Navigation+Links+Control)

- [Patient Controls](/wiki/spaces/BAH/pages/114227069/Patient+Controls)
[Patient Context Display Control](/wiki/spaces/BAH/pages/114227194/Patient+Context+Display+Control)
- [Patient Profile Control](/wiki/spaces/BAH/pages/114227474/Patient+Profile+Control)
- [Visit Control](/wiki/spaces/BAH/pages/100139014/Visit+Control)

- [Tracking Controls](/wiki/spaces/BAH/pages/114227604/Tracking+Controls)
[Flowsheet Control](/wiki/spaces/BAH/pages/114227756/Flowsheet+Control)
- [Programs Display Control](/wiki/spaces/BAH/pages/100139061/Programs+Display+Control)
- [Graph Control](/wiki/spaces/BAH/pages/114228167/Graph+Control)
