---
id: "37945352"
title: "Capture Consultation Data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945352/capture-consultation-data"
version: 12
updated: "2016-06-16T11:07:02.708Z"
author: "Hemanth S R"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:10.754Z"
---

# Capture Consultation Data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945352)  
> **Versión del documento:** v12 (2016-06-16T11:07:02.708Z) | **Autor/Editor:** Hemanth S R

---

## Displaying a Prompt when Navigating Away Consultation/Closing the Browser/Webpage

### Displaying a Prompt when Navigating Away From Consultation

 

This is undesirable as the User can lose any unsaved information for the current patient. To improve usability, the user is shown a prompt asking to save any unsaved changes. This is configurable for an installation.

Please find the code snippet below:

### Display Pop-up Message to Save Data when Closing the Browser/Webpage

Similar to what functions above, there is a checkpoint to prompt the User to save any unsaved changes when he navigates within the Consultation section, stays on the same patient and tries to close the browser/webpage. This checkpoint is configurable.

Please find the code snippet below: 

For example , in Clinical/app.json

```
 

“config” : {
“showSaveConfirmDialog” : true
}
```

 

### **Show recent patient button on consultation**

Currently we have ability to switch recent patients as well as search active patients on patient dashboard. If you want the same functionality on consultation page you can configure as follows:

You can configure "**allowPatientSwitchOnConsultation**" on config section of app.json in clinical module. You can pass **true/false** to this config. The default value is **false**.
**Sample Config**

```
"config": {
	"allowPatientSwitchOnConsultation": true
}
```

 

 

**In this section**

 

- [Create a New Observation Form](/wiki/spaces/BAH/pages/32014552/Create+a+New+Observation+Form)
- [Configure Observations Tab](/wiki/spaces/BAH/pages/32014550/Configure+Observations+Tab)
- [Configure Diagnosis Tab](/wiki/spaces/BAH/pages/32014556/Configure+Diagnosis+Tab)
- [Configure Disposition Tab](/wiki/spaces/BAH/pages/32014561/Configure+Disposition+Tab)
- [Configure Consultation UI](/wiki/spaces/BAH/pages/32014566/Configure+Consultation+UI)
- [Configure Orders Tab for Lab and Radiology](/wiki/spaces/BAH/pages/32014568/Configure+Orders+Tab+for+Lab+and+Radiology)
- [Configure Medication Tab](/wiki/spaces/BAH/pages/32014570/Configure+Medication+Tab)
- [Configure Bacteriology Tab](/wiki/spaces/BAH/pages/34013226/Configure+Bacteriology+Tab)
- [Encounter Session](/wiki/spaces/BAH/pages/37355579/Encounter+Session)

 

**Related Links**

[(Discussion) Relationship between Observation, Diagnosis, Orders](https://talk.openmrs.org/t/understanding-observations-diagnosis-and-consultation-tabs/3811)
