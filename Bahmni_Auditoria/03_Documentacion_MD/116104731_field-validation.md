---
id: "116104731"
title: "Field Validation"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116104731/field-validation"
version: 6
updated: "2022-11-20T11:22:47.436Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:18.164Z"
---

# Field Validation

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116104731)  
> **Versión del documento:** v6 (2022-11-20T11:22:47.436Z) | **Autor/Editor:** Gurpreet Luthra

---

## Description

We can have custom validations written in javascript for Registration Fields. 

For achieving this, need to do the following

- Add a file called fieldValidation.js and put it under "/var/www/bahmni_config/openmrs/apps/registration/" directory.
- Add the functions required to validate the field.
- Include fieldValidation.js in bahmniapps/registration/index.html.

The format of the validator should be like below
**Config**

```
  "" : {
           method: function (name, value, attributeDetails) {
          if (.......) {
            return true;
          }
          return false;
       },
       errorMessage: "Error Message"
     }
};
```

The fieldName details can be obtained from the openmrs administration module (Patient Attributes). The validators will work for non-attributes as well. For non attributes, you will need to get the field names using some html debuggers.

### **Patient Name Related Custom Field Validation Configurations**

If the format of the patient names need to be changed, the global property patient.nameValidationRegex needs to be updated. This field is used in server side validations by openmrs.

Note
 
 Error message is displayed only when return is false.  The specified field should be of non coded value type. If the field is not a patient attribute, the attributeDetails will not be given.

 The attribute details contain the below fields,

| Property | Description |
| --- | --- |
| description | Its a description |
| format | java class of the attribute |
| name | name of the attribute |
| uuid | uuid of the attribute |

**Example Fields:**

```
description: "मरीज़ का उपनाम"
format: "java.lang.String"
name: "familyNameLocal"
required: false
uuid: "b4f44ade-c79a-11e2-b284-107d46e7b2c5"
```

**Code Snippet**

```
Bahmni.Registration.customValidator = {
    "age.days": {
        method: function (name, value) {
            return value >= 0;
        },
        errorMessage: "REGISTRATION_AGE_ERROR_KEY"
    },
    "Telephone Number": {
        method: function (name, value, personAttributeDetails) {
            return value && value.length> 6;
        },
        errorMessage: "REGISTRATION_TELEPHONE_NUMBER_ERROR_KEY"
    },
    "caste": {
        method: function (name, value, personAttributeDetails) {
            return value.match(/^\w+$/);
        },
        errorMessage: "REGISTRATION_CASTE_TEXT_ERROR_KEY"
    }
};
```
