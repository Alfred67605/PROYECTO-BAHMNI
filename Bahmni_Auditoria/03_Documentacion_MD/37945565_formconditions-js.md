---
id: "37945565"
title: "formConditions.js"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945565/formconditions-js"
version: 28
updated: "2017-12-14T07:00:03.469Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:21.949Z"
---

# formConditions.js

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945565)  
> **Versión del documento:** v28 (2017-12-14T07:00:03.469Z) | **Autor/Editor:** Sruti Sridhar

---

## Description

Forms 1.0
 
This section is relevant for Form 1.0, forms that are built using "ConceptSetUI". 

[FormConditions.js](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/clinical/formConditions.js) is located under *bahmni_config/openmrs/apps/clinical*.

This configuration allows users to enable or disable observation fields as well as show errors based on specific conditions or inputs on the form.

Some sections of the form are only filled when a particular set of information is needed. So, if we disable such fields, it simplifies the form.

Consider for example the case where there are two dates being entered in a form and one of the date should be always lesser than the other one. This condition can be checked in this JavaScript file and an appropriate error message can be shown upon validation.

## Steps

The following function takes two inputs (formName and formFieldValues) and returns an object that contains array of enable and disable field/s and an error message if any.This code snippet will make "Posture" option disabled on initial rendering. Once data is entered for "Systolic Data" field, "Posture" option is enabled.

### Example

```
'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        if (systolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"],
				error: "Error message here if any"
            }
        }
	}

 
```

 In this case, the returned object will be-

```
{
      enable: ["Posture"],
      disable: [],
      error: "Error message here if any"
}
```

**Passing Patient Context:**
 
From version 0.90, the form condition function takes an extra input (patient) which can be used to get patient's age, identifier or gender. See example below.

Example

```
'ANC' : function (formName, formFieldValues, patient) {
        if (patient.gender === "F") {
            return {
                enable: ["LMP", "Delivery Date"]
            }
        } else {
            return {
                disable: ["LMP", "Delivery Date"]
				error: "Error message here if any"
            }
        }
	}

 
```

 In this case, the returned object will be-

```
{
      enable: ["LMP", "Delivery Date"],
      disable: [],
      error: "Error message here if any"
}
```

## Function signature which needs to be used

```
 : function (formName, formFieldValues, patient) { }
```

## **Overriding Form Conditions:**

Over-riding form conditions is needed when a particular implementation needs to override the master Bahmni config to support varied implementation specific needs.

Existing form conditions can be overriden by the formConditions.js file in /implementation_config/openmrs/apps/clinical folder.
 
The .JS file to override master form conditions to suffice implementation requirements resides in the client

 Bahmni.ConceptSet.FormConditions.*rulesOverride* is used as variable.

```
Bahmni.ConceptSet.FormConditions.rulesOverride	= {
'Systolic Data' : null,
'Diastolic Data' : function (formName, formFieldValues, patient) {
        var diastolic = formFieldValues['Diastolic'];
        if (diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"],
				error: "Error message here if any"
            }
        }
	}
}
```

 
The  form field based on which conditional enabling and disabling is done should be above the fields that are getting disabled or enabled.
 
For example if we are disabling Blood Pressure based on Pulse Data, then Pulse Data should be above the Blood Pressure. Please refer the image below.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945565/Screen%20Shot%202016-08-31%20at%203.25.48%20PM.png?version=1&modificationDate=1472637376565&cacheVersion=1&api=v2)

On this Page
