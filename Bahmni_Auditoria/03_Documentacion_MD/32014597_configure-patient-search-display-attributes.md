---
id: "32014597"
title: "Configure Patient Search & Display Attributes"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014597/configure-patient-search-display-attributes"
version: 29
updated: "2023-08-25T12:50:59.538Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:59.924Z"
---

# Configure Patient Search & Display Attributes

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014597)  
> **Versión del documento:** v29 (2023-08-25T12:50:59.538Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

Bahmni supports searching of registered patients based on configurable criteria. This could range from amongst the name of the patient (including local names), addresses, phone numbers or other IDs that the patient may have. 

Bahmni also gives implementers the freedom to separately configure the search display attributes, which can be person attributes and address attributes. These are in addition to the attributes which are displayed out-of-the-box in Bahmni such as Patient ID, Name, Gender, Village, etc. *Program attributes* if configured for patient search will be displayed by default in the search results. Note that display of program attributes is non-configurable for now, i.e. if they are configured to be searched by, they will be displayed by default in the display section.

## Steps to Configure Patient Search Attributes

Registration search appears in the registration module as shown below : 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014597/Screen%20Shot%202015-11-18%20at%2012.11.14%20PM.png?version=1&modificationDate=1447828897832&cacheVersion=1&api=v2)

The criteria with which a registered patient can be searched is configured as per the implementation. The configurations are maintained in json files. Bahmni allows configuring search by:

- Address fields
- Custom patient attributes like local name, caste, etc
- Program attributes such as program registration ID, registration facility, etc.

**
 
If you enter "%" in the Name field, then Bahmni searches and displays ALL the patients.

 An example of this configuration for the JSS implementation can be found at the location: [https://github.com/Bhamni/jss-config/tree/master/openmrs/apps/registration](https://github.com/Bhamni/jss-config/tree/master/openmrs/apps/registration)

To configure search parameters, add the following to  **app.json's ****"config"** section.

```
"patientSearch": {
  "address": {
    "label": "Rural Ward",
    "placeholder": "Enter ward",
    "field": "address2"
  },
  "customAttributes": {
    "label": "रुग्णाचे नाव",
    "placeholder": "रुग्णाचे नाव",
    "fields": ["givenNameLocal", "middleNameLocal", "familyNameLocal", "caste"]
  },
  "programAttributes": {
    "label": "Registration Number",
    "placeholder": "Enter Reg Number",
    "field": "Registration Number"
  },
  "searchByPatientIdentifier": true
}
```

Example: [https://github.com/Bahmni/clinic-config/blob/663671fd4738054d04e966491b54ca668479d443/openmrs/apps/registration/app.json#L36](https://github.com/Bahmni/clinic-config/blob/663671fd4738054d04e966491b54ca668479d443/openmrs/apps/registration/app.json#L36)
 
**NOTE:** Patient search by Patient attributes of format "org.openmrs.Concept" is not supported right now.

### Key Fields

| **Field** | **Description** |
| --- | --- |
| **Address** | Defines the block to configure the address search details |
| **Field** | **Description** |
| label | The label to be displayed on the patient search page |
| placeholder | The label to be displayed inside the search text box |
| field | The patient address table field upon which the search will be performed |

| **Custom Patient Attributes** | Defines the block to configure the patient's custom attributes search |
| --- | --- |
| **Field** | **Description** |
| label | The label to be displayed on the patient search page |
| placeholder | The label to be displayed inside the search text box |
| fields | List of fields upon which the search will be performed |

If the fields is a falsy value, customAttributes search will be disabled.

| **Program Attributes** | Defines the block to configure the patient's program attributes search |
| --- | --- |
| **Field** | **Description** |
| label | The label to be displayed on the patient search page |
| placeholder | The label to be displayed inside the search text box |
| field | Field upon which the search will be performed, should be one among several program attribute types |

| ``` searchByPatientIdentifier ``` ** ** | If this field is not configured, then by default Patient ID search box will be shown on the page. If it is configured |
| --- | --- |
| **Value** | **Description** |
| true | Patient ID search text box shown on the page, default behavior |
| false | Patient ID search text box not shown on the page |

## Steps to Configure Search Display Attributes

To configure patient search results parameters, add the following to  **app.json's ****config** section.If we provide this config patient search results will now show only the fields under "patientSearchResults" section and not the patient search config. If "patientSearchResults" is not given, patient search results will show the fields configured under "patientSearch" section. 

```
"patientSearchResults": {
    "address": {
        "fields" : ["address1", "address2" , "address3"]
    },
    "personAttributes": {
        "fields": ["landHolding", "education","givenNameLocal","familyNameLocal" ]
    }
}
```

### Key Fields

| Field | Description |  |
| --- | --- | --- |
| **address** | Defines the block to configure the address fields for patient search results. Value | Description |
| fields | The patient address table fields to be displayed in patient search results. |  |

| Field | Description |  |
| --- | --- | --- |
| **personAttributes** | Defines the block to configure custom attributes for patient search results. Value | Description |
| fields | Patient Attributes to be displayed in patient search results. |  |

 
Patient results will display at most 10 fields and the number of configurable fields is 4 since we have 5 fixed fields and 1 program attribute. If we configure more than 4 fields, first 4 fields in the configured order will be displayed. In the above case all the address fields and one person attribute will be displayed.

Please note that if the Program Attribute is not configured to be searched by, it will not be displayed in the search results and we will have 5 configurable fields for the display section of the page.

On this Page

 
 
 
Feature Details**

[Patient Registration - Feature Guide](/wiki/spaces/BAH/pages/32604190/Patient+Registration)

**Usage Details**

[Patient Registration - User Guide](/wiki/spaces/BAH/pages/32014347/Registration)
