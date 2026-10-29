---
id: "34013226"
title: "Configure Bacteriology Tab"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013226/configure-bacteriology-tab"
version: 39
updated: "2018-05-03T13:29:34.377Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:20.068Z"
---

# Configure Bacteriology Tab

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013226)  
> **Versión del documento:** v39 (2018-05-03T13:29:34.377Z) | **Autor/Editor:** Sruti Sridhar

---

## Purpose and Benefits

This tab captures Bacteriology test results for the patient, which differ from laboratory tests. Bacteriology test results include smear test results, culture test results and drug-sensitivity test results.

                                  ![](https://bahmni.atlassian.net/wiki/download/attachments/34013226/Screen%20Shot%202015-11-24%20at%201.33.14%20pm.png?version=1&modificationDate=1448352261675&cacheVersion=1&api=v2)

**Bacteriology Tab**

## Steps

### Configure the tab (Bacteriology)

Below is the sample code snippet to configure the tab under clinical consultation. Add the configuration under *clinical/extension.json.*

```
 "bahmniClinicalConsultationBacteriology": {
  "id": "bahmni.clinical.consultation.bacteriology",
  "extensionPointId": "org.bahmni.clinical.consultation.board",
  "type": "link",
  "label": "Bacteriology",
  "translationKey":"BACTERIOLOGY_BOARD_LABEL_KEY",
  "url": "bacteriology",
  "icon": "icon-user-md",
  "order": 7
}
```

 
Please refer to the following link to know more about this configuration: [https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/extension.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/extension.json)
 
Please make sure to configure the value of ***url***** **to be "***bacteriology***" and ***extensionPointId*** to be "***o****rg.bahmni.clinical.consultation.board ***"***.***

**

### Define the Core Fields and Result Capturing Forms

Configure Bacteriology [Concept Set](/wiki/spaces/BAH/pages/50921567/Configure+Concept+or+Concept+Set) in **OpenMRS** by performing the following steps:

#### Add core fields

These are the fields that help the page to be populated. All these fields be set members of concept set "BACTERIOLOGY CONCEPT SET".
 
For Example, in the below screenshot, *Specimen Collection Date*,*Specimen Sample Source *and *Specimen ID *are the fields (concepts) added as members of concept set ("BACTERIOLOGY CONCEPT SET).
 
Use Openmrs UI to edit the concept

![](https://bahmni.atlassian.net/wiki/download/attachments/34013226/Screen%20Shot%202015-11-24%20at%202.04.19%20pm.png?version=1&modificationDate=1448354127186&cacheVersion=1&api=v2)

#### Add the Bacteriology Results forms

These forms are for capturing the test results for bacteriology.
 
To add a form, please follow the steps mentioned in [create a new observation form](/wiki/spaces/BAH/pages/32014552/Create+a+New+Observation+Form).

 Sample CSVs (concepts and concept_sets) are given below.
 
If any concept which is given in the below sample CSVs already exists, it will be updated with the given parameters for that concept in the CSV.

 /wiki/download/attachments/34013226/bacteriology_concepts_new.csv?version=1&modificationDate=1525354039636&cacheVersion=1&api=v2/wiki/download/attachments/34013226/bacteriology_concept_sets.csv?version=1&modificationDate=1461577227309&cacheVersion=1&api=v2

#### Add Additional fields

In order to configure additional fields in this Bacteriology page, add those fields as members to **Bacteriology Additional Attributes** Concept Set 

 
Use Openmrs UI, to add these fields (concepts)

Example
 
In below screenshot, Laboratory Name is one of the Additional Field added

![](https://bahmni.atlassian.net/wiki/download/attachments/34013226/Screen%20Shot%202016-01-14%20at%2012.26.51%20pm.png?version=1&modificationDate=1452754644329&cacheVersion=1&api=v2)

### Display Bacteriology Results 

One can choose to view the Bacteriology results on a Dashboard Page in two ways :-

- Obs to Obs Flow Sheet 
- Bacteriology results Display control

#### Obs to Obs Flow Sheet
 
More about the control [Display Controls#ObsToObsFlowSheet](/wiki/spaces/BAH/pages/37945573/Display+Controls#DisplayControls-ObsToObsFlowSheet)

For example, add the configuration below in *clinical/dashboard.json*

```
"Bacteriology Concept Set": {
    "displayType": "Full-Page",
    "translationKey": "DASHBOARD_TITLE_BACTERIOLOGY_RESULTS_KEY",
    "name": "obsToObsFlowSheet",
    "dashboardConfig": {
        "numberOfVisits": 1,
        "initialCount": 3,
        "latestCount": 4,
        "templateName": "BACTERIOLOGY CONCEPT SET",
        "groupByConcept": "Specimen Collection Date",
        "conceptNames": [
            "Specimen Id"
        ]
    },
    "expandedViewConfig": {
        "templateName": "BACTERIOLOGY CONCEPT SET",
        "groupByConcept": "Specimen Collection Date"
    }
}
```

The Bacteriology results will be visible on the Patient Dashboard as shown in the screenshot below:

![](https://bahmni.atlassian.net/wiki/download/attachments/34013226/Screen%20Shot%202015-11-24%20at%203.56.20%20pm.png?version=1&modificationDate=1448360814634&cacheVersion=1&api=v2)

#### Bacteriology Results Display Control
 
More about this control [Display Controls#BacteriologyResultsControl](/wiki/spaces/BAH/pages/37945573/Display+Controls#DisplayControls-BacteriologyResultsControl)

For example, add the configuration below in *clinical/dashboard.json*

```
"bacteriologyResults": {
    "translationKey": "DASHBOARD_TITLE_BACTERIOLOGY_RESULTS_KEY",
    "type": "bacteriologyResultsControl",
    "scope": "All",
    "orderType": "",
    "dashboardConfig": {
        "conceptNames": [
            "BACTERIOLOGY CONCEPT SET"
        ]
    }
}
```

The Bacteriology results will be visible on the Patient Dashboard as shown in the screenshot below:

![](https://bahmni.atlassian.net/wiki/download/attachments/34013226/Screen%20Shot%202016-04-07%20at%202.35.39%20PM.png?version=1&modificationDate=1460019975264&cacheVersion=1&api=v2)

                  

On this Page

 
 
 
Feature Details**

[Bacteriology Tab - Feature Guide](/wiki/spaces/BAH/pages/40501380/Capturing+Bacteriology+Test+Results)
