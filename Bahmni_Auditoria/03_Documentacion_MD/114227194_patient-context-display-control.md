---
id: "114227194"
title: "Patient Context Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114227194/patient-context-display-control"
version: 8
updated: "2022-11-20T11:17:57.877Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:50.660Z"
---

# Patient Context Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114227194)  
> **Versión del documento:** v8 (2022-11-20T11:17:57.877Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

It helps the clinician to easily view patient information on all the pages in clinical app. It can also be configured to display core patient data like name, identifier, gender, age by default.**

## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/114227194/image2016-2-10%2016:25:32.png?version=1&modificationDate=1484805627387&cacheVersion=1&api=v2)

## Configuration

### Sample Config
Add to clinical/app.json **

```
"patientContext": {
    "programAttributes": [
        "Registration Number",
        "Registration Facility"
    ],
	"personAttributes": [
		"class",
		"caste"
	],
	"additionalPatientIdentifiers": [
		"National ID"
	],
    "preferredIdentifier": "Registration Number"
},
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| programAttributes | List of program attributes to be displayed. The names of program attributes have to be specified. | N |
| personAttributes | List of person attributes to be displayed. The names of person attributes have to be specified | N |
| additionalPatientidentifiers | List of additional patient identifiers to be displayed. | N |
| preferredIdentifier | It can be the name of either a person attribute or a program attribute. The value of that attribute will be displayed instead of the patient identifier. If configured, that attribute will be removed from the other patient data displayed. If both person and program attributes have the same name, program attribute takes precedence. | N |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Patient Context Display Control](/wiki/spaces/BAH/pages/114227194/Patient+Context+Display+Control)
- [Patient Profile Control](/wiki/spaces/BAH/pages/114227474/Patient+Profile+Control)
- [Visit Control](/wiki/spaces/BAH/pages/100139014/Visit+Control)
