---
id: "2989817858"
title: "Registration Page Extension Points"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2989817858/registration-page-extension-points"
version: 12
updated: "2023-07-25T11:29:04.314Z"
author: "Sanofer Sameera S"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:18.640Z"
---

# Registration Page Extension Points

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2989817858)  
> **Versión del documento:** v12 (2023-07-25T11:29:04.314Z) | **Autor/Editor:** Sanofer Sameera S

---

## Description

Bahmni Registration module provides an extension for linking/verifying other identifiers for patients. Implementers can plugin in their custom requirements leveraging this extension. 

## Extensions

Implementers are expected to leverage the extension point “`org.bahmni.registration.identifier`". As of now, only “link” type are supported. This means that an implementer can specify an URL to a 
sub-system/UI and Bahmni will launch in an IFRAME. It is expected that such an extension will return a basic FHIR patient resource (JSON) and send that as a message to the parent window. 

#### Defining Extensions points on Registration page:
File to be updated: openmrs/apps/registration/extension.json

| Example of adding an Extension |
| --- |
| ``` "IdentifierLookup":{ "id": "org.bahmni.registration.identifier.your_identifier_id", "extensionPointId": "org.bahmni.registration.identifier", "type": "link", "src" : "/sample/index.html", "extensionParams": { "identifierType": [ "sampleIdentifier1", "sampleIdentifier2" ], "nonEditable": ["givenName","middleName","familyName","gender","birthDate","age"], "linkDisplay": "Verify SampleIdentifier", "addressMap": { "city": "cityVillage", "state": "stateProvince", "postalCode": "postalCode", "line": ["address1"] } "requiredPrivilege": "app:registration" } ``` |

| key | description | Mandatory |
| --- | --- | --- |
| id | Unique identifier for extension | Y |
| extensionPointId | "`org.bahmni.registration.identifier`" | Y |
| type | link | Y |
| src | The source to be loaded on click of defined button | Y |
| extensionParams | Contains additional parameters which include extra identifier’s name, button name and so on | Y |
| extensionParams.identifierType | one or more identifier type name. Note, if different identifier types require different source integration, define separate extensions. | Y |
| extensionParams.nonEditable | defines attributes which needs to be non-editable after extra Identifier linkage | N |
| extensionParams.linkDisplay | defines button display name | Y |
| extensionParams.addressMap | address map that maps the address FHIR object (returned from the link to registration page) to field in registration page | N |

![](https://bahmni.atlassian.net/wiki/download/attachments/2989817858/Screenshot%202022-03-31%20at%201.28.36%20PM.png?version=1&modificationDate=1648713875752&cacheVersion=1&api=v2)
## **Assumptions**

- The link specifies the path to the UI that needs to be rendered on click of the link identifier button.

- 
The external link returns an FHIR patient object to be mapped to Registration Page fields.

The returned payload is expected as a simple FHIR Patient resource. 

Note: A complete patient resource is not required - only fields like identifier(s), name, birthdate, gender and address, those you want to be updated with a value from FHIR patient in registration page are expected. 

If you provide patientUuid in FHIR patient id field, it will redirect to that patientUuid dashboard and update the respective details passed as a part of FHIR object. If id not defined, it will redirect and update details in the create new patient dashboard.

For example: consider the following FHIR Patient object

```
{
  id: 'patientUuid',
  identifiers: [
    {
      type: {
        text: "identifierType1"
      },
      value: "hina@xyz"
    },
    {
      type: {
        text: "identifierType2"
      },
      value: "57-0517-6745"
    }
  ],
  names: [
    {
      familyName: 'Patel',
      givenName: [
        'Hina',
        ''
      ],
      use: ''
    }
  ],
  gender: "F",
  birthDate: "2000-10-21",
  isBirthDateEstimated: false
  contactPoint: [
    {
      system: 'phone',
      value: '+919800083232'
    }
  ],
  address: [
    {
      city: "",
      country: "IN",
      district: "Bhopal",
      line: [
        'A-12, Dholakpur'
      ],
      postalCode: "212021",
      state: "Madhya Pradesh",
      
    }
  ] 
}
```
