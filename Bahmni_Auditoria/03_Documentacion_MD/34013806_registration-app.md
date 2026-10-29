---
id: "34013806"
title: "Registration App"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013806/registration-app"
version: 27
updated: "2022-11-20T11:25:41.511Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:17.248Z"
---

# Registration App

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013806)  
> **Versión del documento:** v27 (2022-11-20T11:25:41.511Z) | **Autor/Editor:** Gurpreet Luthra

---

## Description

Registration app configuration needs an *app.json* and an *extension.json* files.
 
Look at [Patient Registration Module](/wiki/spaces/BAH/pages/32014487/Patient+Registration+Module) for more details about the registration module.

Path of Configuration files
 
Configuration files should be under bahmni_config/openmrs/apps/registration of the web server.

**

## App Configuration

### Configure app.json
 
The id, instanceOf, description, extensionPoints and contextModel should look almost exactly like the snippet below. 

However, the config object can have multiple configurations that can be tuned per implementation. They include the app.json constant section and the app.json config object.

#### app.json Constant Section
Code Snippet**

```
{
        "id": "bahmni.registration",
        "instanceOf":"bahmni.template.registration",
        "description": "Bahmni Patient Registration App",
        "extensionPoints": [
            {
                "id": "org.bahmni.registration.patient.search.result.action",
                "description": "Bahmni Patient Search Result Action"
            },
            {
                "id": "org.bahmni.registration.patient.next",
                "description": "After Bahmni Patient Registration, forward url configuration"
            }
        ],
        "contextModel": [
            "patientUuid",
            "activeVisitUuid"
        ],
        "config" : {}
}
```

#### app.json Configuration
**Code Snippet**

```
"config" : {
            "patientInformation": { // Configuration for the Patient Information and Additional Patient Information on the Patient Information page (New Patient registration or edit pages)
                "additionalPatientInformation": { // Optional. Configuration for the Additional Patient Information section
                    "title": "Additional Patient Information", //Title of Additional Patient Information section
                    "attributes": [] // Array of person attribute names to be shown under the Additional Patient Information Section
                },
                "defaults":  { //Default value for person attributes
                    "attributeName": "Attribute Value",
                }
            },
            "addressHierarchy": { // Optional. Configurations possible for address hierarchy
                "showAddressFieldsTopDown": false, // Optional. Determines order of address fields
                "freeTextAddressFields": ["address2", "address1"]
            },
            "relationshipTypeMap": { //Map of relationship type name to the relationship type. Relationship Name should be a valid Relationship in OpenMRS. Relationship type can be either "provider" or "patient"
                "relationshipName":"provider | patient"
            },

            "autoCompleteFields":["givenName | familyName | personAttribute Type name"], // Array of fields that can be autocompleted. Autocompletion is based on values already available in the OpenMRS database for that field. Note that address fields cannot be set to autocomplete here. Use the address hierarchy instead
            "defaultIdentifierPrefix": "GAN", // Default identifier prefix
            "defaultVisitType": "OPD", // Default Visit Type on the visit types dropdown
            "searchByIdForwardUrl": "/patient/{{patientUuid}}", //Url to go to when a patient is selected on the search page
            "showMiddleName": true, // Show/hide middle name
			"showLastName": true, // Show/hide last name
			"isLastNameMandatory": true, // Make last name as mandatory/non-mandatory field. If we make showLastName as false, then this config is not require
            "printOptions": [
                {
                    "label": "Title" // Title of print
                    "translationKey": "REGISTRATION_PRINT_REG_CARD_LOCAL_KEY", //Optional key for internationalization
                    "templateUrl": "/url/of/custom/print/html/file", // Url to look for custom print html file
                    "shortcutKey": "l" // Shortcut key to print 
                }
            ],
            "conceptSetUI": { // Configuration for concepts on the concept set UI page. See conceptSetUI configuration on clinical app.json for more information
            },
            "fieldValidation" : { // Regex pattern based validation for fields on Patient Registration screen
                "givenName | middleName | familyName | addressFieldNames | personAttributeName | " : {"pattern" : "some nice regex", "errorMessage" : "When pattern not matched"},
            }
        }
```

 
From 0.90, users will be able to show/hide Last Name and also make it non mandatory. See config above.

### Show / Hide sections in Registration

This configuration allows users to show or hide sections in registration create new patient page based on conditions. Configuration has to be made to attributesConditions.js which is located in bahmni_config/openmrs/apps/registration

For example: If  age is less than 18, only then show the "Guardian Details" section.
**Code Snippet**

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

Here, 'patientContact' and 'guardian' are the sections. Below is the javascript that is needed to show the guardian section if age is greater than 18.

Note:

- 'age' is the field on which the condition has to be written. 
- A function has to be written which takes in 'patient' as parameter. The patient is the object that contains all the values that are filled in the form. 
- The values can be accessed like 'patient["<attribute name>"]'. 
- This function will be called whenever the value changes of the particular patient attribute(age in this example). 
- The function has to return an object with 'show' and 'hide' as variables. 
- These variables are the arrays that contains the name of the sections to be hidden or shown. 
- The conditions can be written based on age, gender, birthdate, birthtime, birthdateEstimated and any other patient attribute. For example, in the third function, 'isGuardianRequired' is a patient attribute. If 'isGuardianRequired' is checked, then it will show "Guardian Details" section otherwise hide. Notice that in '**returnValues.show.push("guardian")**', 'guardian' is the key of the section(refer the first code block above).

**Code Snippet**

```
var showOrHideGuardianSection = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };
    if (patient["age"].years 
### Prompt while navigating away from Patient Registration

Just as the existing functionality in [Clinical module](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945352/Capture+Consultation+Data) prompts the user to save any unsaved data, a prompt now appears in the Registration module which prevents the user from navigating away from the current Patient Registration **First** page. Unlike its Clinical counterpart, the prompt in Registration module does not allow saving the form for now. This functionality is configurable and can be set by adding the following in the config section of app.json in the registration module. You can pass **true/false** to this config. The default value is **false**.
**Sample Config**

```
“config” : { 
    .....
    “showSaveConfirmDialog” : true 
}
```

On this Page

 
 
 

See also
 
 

- [Conditional Attributes](/wiki/spaces/BAH/pages/81592373/Conditional+Attributes)
- [Field Validation](/wiki/spaces/BAH/pages/116104731/Field+Validation)
- [Registration Page Extension Points](/wiki/spaces/BAH/pages/2989817858/Registration+Page+Extension+Points)
