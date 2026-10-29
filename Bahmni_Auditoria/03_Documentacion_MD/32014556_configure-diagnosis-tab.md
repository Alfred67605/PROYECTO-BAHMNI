---
id: "32014556"
title: "Configure Diagnosis Tab"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014556/configure-diagnosis-tab"
version: 30
updated: "2018-08-23T12:02:48.280Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:14.400Z"
---

# Configure Diagnosis Tab

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014556)  
> **Versión del documento:** v30 (2018-08-23T12:02:48.280Z) | **Autor/Editor:** Angshuman Sarkar

---

## Purpose and Benefits

The Diagnosis Tab allows the User to capture new diagnoses for the patient. It also displays the past and active diagnoses for the patient. The screenshot below displays an instance of the same.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014556/Display%20Diagnosis%20Tab.png?version=1&modificationDate=1447311729876&cacheVersion=1&api=v2)

## Steps

### **Configure Diagnosis Tab**

To configure Diagnosis Tab refer to the code snippet below and add it in [openmrs/app/clinical/extension.json](/wiki/spaces/BAH/pages/37945559/extension.json):

```
"diagnosis": {
        "id": "bahmni.clinical.consultation.diagnosis",
        "extensionPointId": "org.bahmni.clinical.consultation.board",
        "type": "link",
        "label": "Diagnosis",
        "translationKey": "DIAGNOSIS_BOARD_LABEL_KEY",
        "url": "diagnosis",
        "icon": "fa-user-md",
        "order": 2,
        "requiredPrivilege": "app:clinical:diagnosisTab"
    },
```

Diagnosis "RULED OUT" label is used in different ways. It can be configured in clinical -> app.json as shown below. If it is not configured, **the default value is "RULED OUT"**

**

```
"config" : {
 "diagnosisStatus": "Inactive"
}
```

### **Configure Diagnosis Status**

There is a concept set called "Visit Diagnoses". If the "Bahmni Diagnosis Status" concept is removed from the set members, then the Ruled Out/Inactive option will not be shown while entering the diagnosis in the clinical module.

###  Configure New Diagnosis Concepts

To classify the diagnoses into different groups, one has to define multiple concept sets under the "Diagnosis Set of Sets" in **OpenMRS**. To know more about concept sets and configuring them in OpenMRS, please refer to [Configure Concept or Concept Set](/wiki/spaces/BAH/pages/50921567/Configure+Concept+or+Concept+Set). For example, one can put diagnoses of all communicable diseases under a concept set called "All Communicable Diseases".

The screenshot below displays an instance of the same:

![](https://bahmni.atlassian.net/wiki/download/attachments/32014556/Diagnosis%20Set%20of%20Sets.png?version=1&modificationDate=1447400491234&cacheVersion=1&api=v2)

Here is an example of a hierarchy of Diagnoses Concept sets.

Diagnosis Set of Sets

- Diagnosis Concept Set 1
Diagnosis Concept 1
- Diagnosis Concept 2

- Diagnosis Concept Set 2
Diagnosis Concept 1
- Diagnosis Concept 2

A Diagnosis concept can be mapped to a Reference term if needed. For example: Measles can be mapped to the ICD 10 B05 Code.

To do this, one should define the Concept Reference Terms before hand through Concept Reference Term Management (Administration > Manage Reference Terms). This mapping can be created by editing the corresponding concept and adding the new mapping to it.

#### **Map a Set of Concepts as Diagnoses**

After creating "Diagnosis Set of Sets" concept (either by using CSV import in Bahmni or manually creating it in OpenMRS), make sure to add a global property with the name "emr.concept.diagnosisSetOfSets"  and the value as the uuid of "Diagnosis Set of Sets" concept in Bahmni.

#### **Setup Diagnoses using CSV Upload**

The process explained above can be simplified by using the CSV upload feature in Bahmni. This is particularly useful if one has to define diagnoses in bulk. Use the CSV upload feature at Bahmni > Administration > CSV Upload 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014556/CSVUpload.png?version=1&modificationDate=1447400491265&cacheVersion=1&api=v2)

- Create and upload the Concept Reference Terms.
 While uploading, choose the option for Concept Reference Term 
Sample file:  [Diagnosis_Reference_Terms.csv](https://bahmni.atlassian.net/wiki/download/attachments/18415846/Diagnosis_Reference_Terms.csv?version=1&modificationDate=1429082024307&api=v2)
- Create and upload the Diagnosis concepts.
While uploading, choose the option for Concepts
Sample file:  [Diagnosis_concepts.csv](https://bahmni.atlassian.net/wiki/download/attachments/18415846/Diagnosis_concepts.csv?version=1&modificationDate=1429081991471&api=v2)
- Create and upload the Diagnosis concept sets.
While uploading, choose the option for Concepts
Sample file: [Diagnosis_concept_sets.csv](https://bahmni.atlassian.net/wiki/download/attachments/18415846/Diagnosis_concept_sets.csv?version=1&modificationDate=1429082004946&api=v2)

### **Hiding condition lists**

If an implementations choose to use condition lists, they can configure to hide this feature from UI. 

It can be configured in clinical -> app.json as shown below. By default conditions list will be visible on the Diagnosis Tab.

```
"config" : {
 "hideConditions": true
}
```

You can find more about conditions list [here](/wiki/spaces/BAH/pages/115414301/Using+Conditions+List). 

### **Configuring Diagnosis Search by Code**
 
This feature is available only from version 0.91

If you want to search Diagnosis by reference terms (e.g. ICD 10 or SNOMED), then you will need to do the following

- Change the property "Concept Sources For Diagnosis Search" in *OpenMRS Admin Console => Settings => emrapi*
*The default is ICD-10-WHO, and your concept source name might be different. Lets assume you changed to "ICD 10 - WHO".*
- *The property defined must be the name of a defined Concept Source. *
- For configuration and setup of concept sources and reference terms, see [here](/wiki/spaces/BAH/pages/37945591/Configure+Reference+Terms) for details

- Ensure that the [diagnosis concept setup](#ConfigureDiagnosisTab-diagnosis_concept_configuration) is mapped to appropriate reference term of the source configured. During search, only the mapping with "SAME-AS" relationship is searched. 

Example:

- Assuming that you already have a concept source "ICD 10 - WHO" defined, create a reference term "Bitten by a cow" with code as "W55.21"
- Create a diagnosis concept and map to the "W55.61" of  "ICD 10 - WHO" source with "SAME-AS" relationship.
- Configure property "Concept Sources For Diagnosis Search" to "ICD 10 - WHO".
Note: You can configure multiple concept sources to search - you may enter comma separated list of source names. 

- In clinical module, for a patient, open consultation and go to diagnosis tab and search by "W55.61"
Note that the entire code must match during a search. Partial search of code is not allowed.  

On this Page

 
 
 
Feature Details**

[Diagnosis Tab - Feature Guide](/wiki/spaces/BAH/pages/40501367/Recording+Diagnosis)
