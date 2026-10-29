---
id: "32014595"
title: "Configure Patient Registration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014595/configure-patient-registration"
version: 171
updated: "2024-05-17T13:25:47.878Z"
author: "Kavitha S"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:59.482Z"
---

# Configure Patient Registration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014595)  
> **Versión del documento:** v171 (2024-05-17T13:25:47.878Z) | **Autor/Editor:** Kavitha S

---

## Purpose and Benefits

The Registration module allows a patient's information to be captured and maintained. It also acts as a starting point for the patient through the medical facility's workflow. It supports a flexible configuration of patient attributes to suit several types of implementations. The patient's address hierarchy, patient relationships, visit details and death reasons can also be configured. 
 
You can also watch this Youtube Playlist which shows how to configure the registration screens in Bahmni: [Registration Configuration Playlist](https://www.youtube.com/playlist?list=PLzknGpbejfSzabj6Gj5YWwAXTaYHOXLqb)

**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/Screen%20Shot%202016-01-18%20at%2011.20.58%20am.png?version=1&modificationDate=1453096295281&cacheVersion=1&api=v2)

## Steps

### 1. Configure Core Fields

Certain core fields such as **name, gender and age **come out of the box with Bahmni and do not need to be set up. However, the Patient Identifier needs to be setup.

#### **Setup Patient Identifier**

Bahmni comes pre-installed with the [OpenMRS idgen module](https://wiki.openmrs.org/display/docs/Idgen+Module) and a patient identifier type called "Bahmni Id". In order to modify the dropdown for ids, identifier sources for the Bahmni Id need to be edited. [Here](/wiki/spaces/BAH/pages/37945392/Configure+Patient+Identifiers) are the steps to edit the identifier sources for Bahmni. 

#### Configure Patient Identifier:

In Bahmni, patient identifiers are configurable. The default patient identifier prefix can be configured on the Registration page. 

#### Add or Edit a Patient Identifier

To add a new patient identifier or edit an existing one, please refer to this document: [Patient Identifier](https://bahmni.atlassian.net/wiki/display/BAH/Patient+Identifier)

#### Display the Default Identifier Prefix for Primary Identifier Type

On the Patient Registration page if you want to display a default identifier prefix for primary identifier type , please add the following configuration under config section in the [registration/app.json](https://bahmni.atlassian.net/wiki/display/BAH/Registration+App) file.
Config**

```
"defaultIdentifierPrefix”:source name of identifier/prefix
```

**
Sample Config**

```
“config”:{
  "defaultIdentifierPrefix”:”GAN”
}
```

If the default identifier prefix is not provided, or if it is empty or invalid, Bahmni will pick the first patient identifier prefix after sorting the available identifier prefixes in alphabetical order, as the default identifier prefix.

Note: this configurations works only for the primary identifier type, not for the extra identifier types.

#### Make extra identifiers read only in registration page:

On the Patient Registration page if you want to make extra Identifier fields non-editable, please add the following configuration under config section in the [registration/app.json](https://bahmni.atlassian.net/wiki/display/BAH/Registration+App) file. And specify the extra Identifiers that needs to be non-editable, for example ("National Id") in below config. By default extra Identifier fields are editable.
**Sample Config**

```
“config”:{
  "readOnlyExtraIdentifiers": ["National ID"]
}
```

Note: This configurations works only for the extra identifier types, not for the primary identifier types.

**Configure Gender**

If you need custom values under the gender dropdown, add/edit an [advanced settings property](/wiki/spaces/BAH/pages/37945364/Configure+Advanced+Settings) "mrs.genders" to have a custom value specified by a json structure. For example:

```
{"M": "Male", 
"F": "Female", 
"O": Other}
```

**Pre-fill Address details based on login location**

To use this functionality location needs to be configured as a login location in openmrs. The below configuration need to be added in registration/app.json is 
**Sample Config**

```
{ 
    "config": {
             "prepopulateFields" : ["Division", "Zilla", "Upazilla"]
        }
}
```

The fields specified in the configuration need to be the address fields labels as seen on the registration page. This data will only be pre-filled when new patients are being created.

### 2. Configuration to Enter Patient Name Fields in Multi-language

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/Screen%20Shot%202017-05-17%20at%204.56.00%20PM.png?version=1&modificationDate=1495020384654&cacheVersion=1&api=v2)

One can enter the patient name fields like First Name, Middle Name, Last Name in multi language in Registration Page. For this we have to delete the regular expression that validates the English alphanumeric characters. 

- Go to **Openmrs → Admin → Advance Settings** and delete *patient.nameValidationRegex* global property value
- Delete the familyName, givenName, middleName lines under *fieldValidation* section from [/var/www/bahmni_config/openmrs/registration/app.json](https://github.com/Bahmni/default-config/blob/master/offline/openmrs/apps/registration/app.json#L97-L99) file.

```
"familyName" : {"pattern" : "[a-zA-Z]{0,}", "errorMessage" : "Should contain characters"},
"givenName" : {"pattern" : "[a-zA-Z]{0,}", "errorMessage" : "Should contain characters"},
"middleName" : {"pattern" : "[a-zA-Z]{0,}", "errorMessage" : "Should contain characters"},
```

This will allow you to enter patient name in more than one language.

### 3. Configure Photo Capture
**Configuration to Disable Photo Capture**

```
"disablePhotoCapture": true
```

Photo capture can be disabled in Bahmni registration based on implementation specific needs. Default behavior is to display photo capture in Registration page.The configuration must be applied to ***app.json in registration*** to disable photo capture. From Bahmni 0.90v, uploading the patient profile pic feature from registration page is also supported. We need to have global properties configuration(emr.personImagesDirectory) for Photo Capture to get stored. Like this **emr.personImagesDirectory = /home/bahmni/patient_images**

### 4. Configure Address Information
 
This step is not mandatory.

Addresses can be configured to be populated from a dictionary using the [Address Hierarchy configuration in OpenMRS](/wiki/spaces/BAH/pages/37945505/Configure+Address+Hierarchy). An address hierarchy is maintained in the application to ensure that addresses are codified and human errors can be prevented while entering patient addresses. 

To ensure that these address fields get synced to correct Labels in OpenELIS, refer to these steps [Address Mapping between OpenELIS and Bahmni / OpenMRS](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=4915202)

### 5.** Configure Additional Patient Information**
 
This step is not mandatory.

Additional patient attributes that need to be captured can be configured by adding/changing [OpenMRS' PersonAttributes](/wiki/spaces/BAH/pages/37945360/Configure+Person+Attributes). Further customizations can be performed on the Registration page via custom [Bahmni configuration](/wiki/spaces/BAH/pages/34013806/Registration+App). Features include custom field level validations (mandatory fields, field value restrictions etc), show/hide fields, autocomplete, etc. See the [Registration App Configuration section](/wiki/spaces/BAH/pages/34013806/Registration+App) for more details.

Fields on the Additional Patient information section can also be configured using OpenMRS person attributes with some additional [Bahmni configuration](/wiki/spaces/BAH/pages/34013806/Registration+App). 

**

### 6. Configure Patient Relationships
 
This step is not mandatory.

The patient relationship functionality is used to maintain relationship information between various players within the application (Doctors, Nurses, Patients and Patient's relatives). There are three types of relationships that can be defined in the application

- **Self relationship**: This applies to patients who are registered into a program and then subsequently registered for another program. Consider a patient who is registered into a program with the ID GAN200013. If the the patient is the registered for another program, then during that subsequent registration, the patient can be linked with the initial ID GAN200013.
- **Provider relationship:** A doctor/nurse who administers to a patient can be added in the relationship field as a provider to the patient .
- **Patient relationship: **A patient can have a relationship with another patient such as father, mother, brother, sister, etc. This helps in tracking and screening prospective patients of communicable diseases like TB, HIV, etc.

In order to use the registration module to capture patient relationships, we need to:

- [Add relationship types](/wiki/spaces/BAH/pages/32014499/Configure+Patient+Relationships) using the OpenMRS Admin UI. 
- Configure a property called '*bahmni.relationshipTypeMap'  in* OpenMRS [Advanced Settings](/wiki/spaces/BAH/pages/37945364/Configure+Advanced+Settings) to contain a json file that maps relationships to relationship types. A typical value would look like this ***{"provider":["Doctor"],"patient":["Parent","Sibling"]}.***The list helps Bahmni identify how to autocomplete values for the field on the screen. 

### 7. Configure Visits

Bahmni uses Visits as a way to record a patient's admittance to the hospital and also to track the various consultations the patient goes through during a round of admission.

Bahmni supports Visits to be categorized into different types. Having multiple types of visits is useful for: 

- Reporting based on the number of visits per type.
- Configuring queues in other apps such as Clinical or Radiology. 

#### **Visit Setup**

It is **mandatory** to set up at least one Visit type for an implementation. Visit types are shown as dropdown options when creating or editing a patient in Registration. Visit types can be added via the [OpenMRS Admin screen](/wiki/spaces/BAH/pages/37945530/Configure+Visit+Types). All visit types added show up in the Patient Registration screen (see the screenshot below). 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/visittype.png?version=1&modificationDate=1447815043583&cacheVersion=1&api=v2)

#### **"Default Visit Type" setup based on Login Location**
 
Available from release 0.78 onwards

Bahmni supports default visit types to be set based on login location. The implementer will be able to set *defaultVisitType* for Location by adding entries to the *entity_mapping* table. 

For example for Location** Registration Desk**, if the default visit type has to be **OPD, **it can be configured in the following way:

Run the queries below to set the default visit type:

```
entity1_uuid - "SELECT uuid FROM location where name = 'Registration Desk';" .
entity2_uuid -"SELECT uuid FROM visit_type where name = 'OPD;"  
entity_mapping_type_id -"SELECT id FROM entity_mapping_type  where name = 'loginlocation_visittype';"
```

Insert the UUID's and id in to entity_mapping tables:

```
"INSERT INTO entity_mapping ( uuid, entity_mapping_type_id , entity1_uuid , entity2_uuid , date_created) VALUES (uuid(),9,'c5854fd7-3f12-11e4-adec-0800271c1b75','c2402997-3f10-11e4-adec-0800271c1b75','2015-11-25 14:43:56.0');"
```

Doing this will ensure that when a user tries to create a new patient on the Registration page, the 'start OPD visit' will be displayed as the default visit type.

### **
8. Configure Visit Details form:**

Once user starts a visit page will redirect to visit details form(see the screenshot below).

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/Screen%20Shot%202016-05-03%20at%204.28.15%20PM.png?version=1&modificationDate=1462273131946&cacheVersion=1&api=v2)

On the visit details form user can configure what data he/she want to capture as part of registration process.Those configurations will go under extension.json  file. For reference please follow the link [Default Config](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/extension.json). 

To add new section similar to Fee Information, user should create a new concept set. For more information please refer to the links below.  

[https://wiki.openmrs.org/display/docs/Create+and+Edit+Concepts](https://wiki.openmrs.org/display/docs/Create+and+Edit+Concepts) 

[https://wiki.openmrs.org/display/docs/Managing+Concept+Sets](https://wiki.openmrs.org/display/docs/Managing+Concept+Sets)

And then add the following configuration to extension.json file.

```
"conceptSet":{
        "id": Unique id for the section, //Eg:"bahmni.registration.conceptSetGroup.feeInformation"
        "extensionPointId": "org.bahmni.registration.conceptSetGroup.observations",
        "type": "config",
        "extensionParams": {
            "conceptName": Concept set group name //Eg:"Fee Information"
            "translationKey": "FEE_INFORMATION_LOCALE_KEY", //For internationalization, not mandatory
            "required":true // true, if it mandatory otherwise false
        },
        "order": 2, 
        "requiredPrivilege": "Edit Visits"
}
```

From Bahmni release version-0.90 onwards, users are allowed to configure the new forms(created by form builder app) on the visit details page. Add the following configuration to the extension.json file.

```
"formName":{
        "id": Unique id for the section, //Eg:"bahmni.registration.conceptSetGroup.feeInformation"
        "extensionPointId": "org.bahmni.registration.conceptSetGroup.observations",
        "type": "forms",
        "extensionParams": {
            "formName": "Nutritional Values", // Name of the form created using form builder
            "conceptNames": ["Height", "Weight", "BMI Data", "BMI Status Data"],
            "required":true,
            "showLatest": true
        },
        "order": 3,
        "requiredPrivilege": "Edit Visits"
    }
```

#### **Display more than only 1 latest record in the registration 2nd page:**

In the registration second page, for whatever the forms that we configured we will be able to see the latest observations captured for the concepts in the "latest" section as shown below. For now this is hardcoded to latest one record. To change that to more than one record, we don't have configuration property available for now. This requires adding **numberOfVisits:5** inside config section in the [visit.html](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/master/ui/app/registration/views/visit.html#L44) file.

**Before Change:**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/image2020-12-7_5-21-54.png?version=1&modificationDate=1607298717634&cacheVersion=1&api=v2)

**After Change:**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/image2020-12-7_5-23-20.png?version=1&modificationDate=1607298803008&cacheVersion=1&api=v2)

#### **Configure "Close Visit" Button**

In scenarios where either a visit was accidentally started, or was not closed due to some procedural lapse, the hospital needs a capability to be able to "Close a Visit". A button can be added to the "Visit Details" page in the Registration module to allow Bahmni Users to close a visit. However, this button is visible only to those users who have been assigned the privilege "*app:common:closeVisit*". To assign this privilege, follow these steps:

- Go to the OpenMRS Admin page.
- Go to "*Manage Roles*".
- Select the role to which this privilege can be added. For e.g. "*RegistrationClerk-Advanced*".
- Assign the privilege "*app:common:closeVisit*" and click Save.
- 
Ensure that the person who is supposed to perform this operation is assigned to this role.

### 9. Configuring 2nd page availability based on Visit type

Earlier if a single visit is configured, the registration second page can be configured to appear or not. However, if multiple visits are configured, the registration second page always comes up and there is no way to bypass it.
 From 0.89 onwards, users can configure registration second page availability even when multiple visits are configured.
On **registration/app.json**, add this config, under **"config"** section

```
"forwardUrlsForVisitTypes": [
               {
                   "visitType": "First Stage Validation",
                   "forwardUrl": "../clinical/#/programs/patient/{{patientUuid}}/consultationContext",
                   "translationKey": "Enter Visit page details",
                   "shortcutKey": "c"
               },
               {
                   "visitType": "Follow-Up Validation",
                   "forwardUrl": "../document-upload/?encounterType=RADIOLOGY&topLevelConcept=Radiology#/patient/{{patientUuid}}/document",
                   "translationKey": "Enter Documents upload",
                   "shortcutKey": "d"
               }
           ]
```

### 10. Death Information

Death Information has only one field that is configurable. To set it:

- Log into OpenMRS.
- Go to *Concept Dictionary*, and Add a new Concept Set that contains all possible death reasons. The reasons themselves will also be individual *concepts.*
- Add/Edit a property in [Advanced Settings](/wiki/spaces/BAH/pages/37945364/Configure+Advanced+Settings) called *concept.reasonForDeath *with the **fully qualified name** of the concept set that was just created. 

In summary the expectation is that the *concept.reasonForDeath* global property should store fully specified name of the concept set having reasons as set members.

Hide Death Information Section
 
If the *concept.reasonForDeath* global property is not configured or configured with invalid concept name (which doesn't exist), then the death information section is hidden

### **11. Configure Date of Birth**
On the registration page, both 'age' and 'date of birth' fields are available. They are both dependent fields, which means that populating one field automatically populates the other with appropriate values. One of these fields can be set as mandatory. For example, if 'age' is mandatory, it will automatically place the 'age' field above the 'date of birth' field and highlight it as a mandatory field by placing a '*' mark beside it. To specify which field is mandatory for your implementation, follow these steps:
- Go to *bahmni-config* (an implementation-specific configuration folder). The settings are available at *bahmni-config/openmrs/apps/registration/app.json*.
- Add the following piece of configuration in the 'config' section of the file.

Configuration for data of birth**

```
"dobMandatory": true
```

### 12. Configure to Hide Birth Time
On the registration page, 'birth time' field is available. This field can be configured to be hidden. Default behaviour(i.e.. when the configuration is not available) is to show the field always.To hide 'birth time' field, follow these steps:
- Go to *bahmni-config* (an implementation-specific configuration folder). The settings are available at *bahmni-config/openmrs/apps/registration/app.json*.
- Add the following piece of configuration in the 'config' section of the file.

**
Configuration to hide birth time**

```
"showBirthTime": false
```

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/Patient%20Registration%20Birth%20Time.png?version=1&modificationDate=1467281620385&cacheVersion=1&api=v2)

### 13. Configure Enter ID field

We have Enter Id option if user wants to manually enter the patientId for the patient. By default this option is enabled.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/Screen%20Shot%202016-08-18%20at%2010.53.45%20AM.png?version=1&modificationDate=1471497956453&cacheVersion=1&api=v2)

To restrict the users from manually entering the id, add the following configuration in app.json file under registration folder. Add the following under config section.
**Hiding Enter Id option**

```
    "showEnterID":false
```

### 14. Configure Display Order of Sections in Registration

The various sections under patient Information will be shown in the order of the "order" value that is present in the configuration. If some of the sections have an order value and other sections do not have the order value then all the sections with order value will be shown, while default behavior for the remaining sections will function As-Is. If none of the sections have order value, then default behavior(that is the order in which sections are entered) will be displayed.

- Go to *bahmni-config* (an implementation-specific configuration folder). The settings are available at *bahmni-config/openmrs/apps/registration/app.json*.
- 
Add the following piece of configuration in the each section under 'patientInformation' of the file.

**Configuration for display order of sections in registration**

```
"order" : 1 // order number specifies the sequence in which the section should be displayed
```

### 15. Configure After Save Forward Url in Registration Visit Page

The Registration visit page save button action can be controlled through configuration. When one clicks the save button, one will be navigated to the configured url. Default behaviour is to stay on the same page (i.e.. visit page of registration), when there is no configuration available.

- Go to *bahmni-config* (an implementation-specific configuration folder). The settings are available at *bahmni-config/openmrs/apps/registration/app.json*.
- 
Add the following piece of configuration  under 'config'  section of the file.
**Configuration for after save url in Registration Visit Page**

```
"afterVisitSaveForwardUrl" : "../clinical/#/default/patient/{{patientUuid}}/dashboard" // forward url to navigate after save (In this example after save one will be navigated to patient dashboard
```

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/Screen%20Shot%202016%2006%2030%20at%2011.56.50%20am.png?version=1&modificationDate=1467268142181&cacheVersion=1&api=v2)

### 16. Show/Hide sections in Registration create patient page.

There can be many patient attribute sections in the registration page. We can show or hide each section based on a condition. This condition can be based on age, gender or any of the patient attributes.

For example:- 

If  age is less than 18, only then show the "Gaurdian Details" section.

Follow the steps given in this [link](/wiki/spaces/BAH/pages/81592373/Conditional+Attributes).

**

### 17.  Hide visit start button

On registration page, in case you would like to hide the 'start visit' button, you may disable it by doing the following in the "config" section. 

```
"config": { 
   "showStartVisitButton": false
}
```

Note that, turning off the visit start button is probably not very useful, as without a visit open, you may not record information for a patient. However, there are certain use cases like

- You are using Bahmni for just registration
- You are doing a phase wise rollout where you intend to start visit in subsequent phases. 
- You are capturing data for the patient in [retrospective mode](/wiki/spaces/BAH/pages/114529011/Retrospective+Entry+of+Data)

### 18.  Configure display order of Patient Name fields 

```
"patientNameDisplayOrder": ["firstName", "middleName", "lastName"]
```

Patient Name field can be configured only in Registration Page, by specifying the order in "patientNameDisplayOrder" setting in **app.json**

- 
This configuration should include all the three fields in desired order.

- 
If any invalid configuration is provided, the default behaviour is to display **FirsName, MiddleName and LastName**.

- 
Use existing hide/show options of configuration for **middleName and lastName**.

- 
Default behaviour is to display FirstName, MiddleName and LastName if specific configuration is not specified in **app.json in registration.**

### 19. Localisation to the placeholder for Local language name

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/image2023-1-30_11-11-52.png?version=1&modificationDate=1675057315315&cacheVersion=1&api=v2)

The placeholders for "Name in local language" field is localised. Below are key value pair that needs to be updated in configuration folder *bahmni-config/openmrs/i18n/registration/locale_en.json*
Sample Config**

```
{
  "PATIENT_ATTRIBUTE_GIVEN_NAME_LOCAL": "First Name in Arabic",
  "PATIENT_ATTRIBUTE_FAMILY_NAME_LOCAL": "Last Name in Arabic",
  "PATIENT_ATTRIBUTE_MIDDLE_NAME_LOCAL": "Middle Name in Arabic"
}
```

### 20. Configure Pre-Patient attribute in Registration Page**

 The attribute will allow a registration user to mark a patient as pre-patient or patient. In a facility, the potential patient undergoes triage and is then determined by the doctor whether the patient can be treated in facility or not . Pre- patients should not be seen in other modules , since they were not accepted into facility. Thus filtering out the pre-patients is required.The pre-patient attribute will determine which patients would show up in other modules like clinical, OT, patient documents, Lab entry, Reporting etc. Also, the triage program queue would be populated on the basis of pre-patient attribute.

**Example for a generic use case :** Field health workers generally visit remote areas and gather information of patients/ conduct community health clinics . In this case, they would register the patients without checking the checkbox. Some of these cases in the remote areas need medical attention in the hospital. So , once the patient actually reports to the hospital, the checkbox can be checked which will enable doctors to start consultation with the patient. Until the patient reports, they can still be enrolled into an “outreach program”. The patients are still searchable under appointments so that the hospital can set up appointments for the patients from these remote areas and ask them to report to the hospital on the appointment date

Once the patient is marked as “Confirmed Patient”, we are hiding the attribute to make the action irreversible. We can’t make the confirmed patient as pre-patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014595/image-20240430-055119.png?version=1&modificationDate=1715943673114&cacheVersion=1&api=v2)

The below config should be added in openmrs/apps/adt/app.json, openmrs/apps/clinical/app.json, openmrs/apps/documentUpload/app.json, openmrs/apps/ipd/app.json, openmrs/apps/ot/app.json, openmrs/apps/registration/app.json
Config for pre-patient attribute on registration page**

```
"relatedIdentifierAttribute": {
"name": "confirmedPatient",
"hideOrDisable": "hide", // can be 'hide' or 'disable'
"hideOnValue": "true"
}
```

`'confirmedPatient'` - name of the person_attribute_type of type boolean that decides if the registered patient is an actual patient or potential patient. The below translation key can be used to override the label for the pre registration attribute in the registration page

`'hideOrDisable'` is used to decide whether we need to hide or disable the checkbox in the registration page once it is fulfilled.

`'hideOnValue'` is used to decide when the checkbox should be hidden. For eg. when the value of the attribute type is true, the checkbox will be hidden from the registration page once it is checked.

**

On this page: **

 
 
 

**Feature Details**

[Patient Registration - Feature Guide](/wiki/spaces/BAH/pages/32604190/Patient+Registration)

**Usage Details**

[Registration - User Guide](/wiki/spaces/BAH/pages/32014347/Registration)

**Related Links**

[Patient Photos and Related Workflow (OpenMRS Discussion)](https://talk.openmrs.org/t/patient-identification-at-registration/1417)

[Patient ID Configuration](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Patient+Identifiers)

[Person Attribute Configuration](/wiki/spaces/BAH/pages/37945360/Configure+Person+Attributes)

Configure Display Order of Patient Names
