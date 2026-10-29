---
id: "81592373"
title: "Conditional Attributes"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/81592373/conditional-attributes"
version: 4
updated: "2019-04-08T06:48:04.659Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:17.707Z"
---

# Conditional Attributes

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/81592373)  
> **Versión del documento:** v4 (2019-04-08T06:48:04.659Z) | **Autor/Editor:** Angshuman Sarkar

---

## Description

This configuration allows users to show or hide sections in registration create new patient page based on conditions. For this a specific file named "attributesConditions.js" must be defined. 

This file "attributesConditions.js" should be located in "/var/www/bahmni_config/openmrs/apps/registration/" directory. 

**

For example: If  age is less than 18, only then show the "Guardian Details" section.
Config for sections**

```
            "patientInformation": {
                "patientContact": {
                    "title": "Patient Contact",
                    "translationKey": "Patient Contact",
                    "attributes": [
                        "phoneNumber1",
                        "phoneNumber2",
                        "emailAddress",
                    ]
                },
                "guardian": {
                    "title": "Guardian Details",
                    "translationKey": "Guardian Details",
                    "attributes": [
                        "guardianNameEnglish",
                        "guardianGender",
                        "guardianDob",
                        "guardianAge",
                        "guardianNationality"
                    ]
                },
            }
```

Here, 'patientContact' and 'guardian' are the sections. Below is the javascript that is needed to show the guardian section if patient's age is less than 18.
**attributesConditions.js**

```
var showOrHideGuardianSection = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };
    if (patient["age"].years 
- Here, 'age' is the field on which the condition has to be written. 
- A function has to be written which takes in 'patient' as parameter. The patient is the object that contains all the values that are filled in the form. 
- The values can be accessed like 'patient["<attribute name>"]'. 
- This function will be called whenever the value changes of the particular patient attribute(age in this example). 
- The function has to return an object with 'show' and 'hide' as variables. 
- These variables are the arrays that contains the name of the sections to be hidden or shown. 
- The conditions can be written based on age, gender, birthdate, birthtime, birthdateEstimated and any other patient attribute. For example, in the third function, 'isGuardianRequired' is a patient attribute. If 'isGuardianRequired' is checked, then it will show "Guardian Details" section otherwise hide. Notice that in '**returnValues.show.push("guardian")**', 'guardian' is the key of the section(refer the first code block above).
