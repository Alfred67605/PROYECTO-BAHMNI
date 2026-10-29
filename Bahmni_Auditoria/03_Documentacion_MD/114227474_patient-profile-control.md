---
id: "114227474"
title: "Patient Profile Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114227474/patient-profile-control"
version: 6
updated: "2022-11-20T11:18:24.557Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:51.185Z"
---

# Patient Profile Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114227474)  
> **Versión del documento:** v6 (2022-11-20T11:18:24.557Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

Patient Profile Control can be configured to show all the patient related information such as name, gender, date of birth, identifier, address, relationships, patient or person attributes etc.**

## Screenshot

**![](https://bahmni.atlassian.net/wiki/download/attachments/114227474/Screen%20Shot%202016-05-25%20at%204.11.10%20PM.png?version=1&modificationDate=1484806313166&cacheVersion=1&api=v2)**

## Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"patientInformation": {
 "title" : "Patient Information",
 "type" : "patientInformation",
 "patientAttributes" : ["caste", "class", "education", "occupation"],
 "addressFields": ["cityVillage", "stateProvince"],
 "showDOB" : false,
 "ageLimit" : 100
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| patientAttributes | List of patient attributes to be displayed | N |
| addressFields | List of address fields to be displayed | N |
| showDOB | Indicates whether date of birth should be displayed in the control. Default value is true if nothing mentioned | N |
| ageLimit | Displays age in the format of (years, days) when it is less than the number configured else displays it in format (years). | N |

On this Page
 
 
 
 
**Related Display Controls**

 

- [Patient Context Display Control](/wiki/spaces/BAH/pages/114227194/Patient+Context+Display+Control)
- [Patient Profile Control](/wiki/spaces/BAH/pages/114227474/Patient+Profile+Control)
- [Visit Control](/wiki/spaces/BAH/pages/100139014/Visit+Control)
