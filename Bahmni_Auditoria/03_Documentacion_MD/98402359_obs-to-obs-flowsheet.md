---
id: "98402359"
title: "Obs To Obs FlowSheet"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/98402359/obs-to-obs-flowsheet"
version: 56
updated: "2023-11-30T05:22:25.000Z"
author: "Riya Kumari"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:36.760Z"
---

# Obs To Obs FlowSheet

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/98402359)  
> **Versión del documento:** v56 (2023-11-30T05:22:25.000Z) | **Autor/Editor:** Riya Kumari

---

# Purpose

Obs To Obs Flowsheet is configured to view the observation data in tabular format. It will display the observation value vs multiple observation values. There is a provision to configure editing observations from this control.**

**Screenshot**

![](https://bahmni.atlassian.net/wiki/download/attachments/98402359/Screen%20Shot%202016-06-28%20at%2010.09.37%20AM.png?version=1&modificationDate=1478858705319&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/98402359/Screen%20Shot%202016-06-28%20at%2010.09.49%20AM.png?version=1&modificationDate=1478858705800&cacheVersion=1&api=v2)

# Configuration

## Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"Bacteriology Resultseriology Concept Set": {
    "translationKey": "DASHBOARD_TITLE_BACTERIOLOGY_RESULTS_KEY",
    "type": "obsToObsFlowSheet",
    "displayOrder" : 4,
    "displayType" : "Full-Page",
    "rotateInPrint" : false,
    "headingConceptSource" : "Abbreviation",
    "dataConceptSource" : "Abbreviation",
    "dashboardConfig": {
        "numberOfVisits": 1,
        "initialCount": 3,
        "latestCount": 4,
        "pivotOn": "column",
        "templateName": "BACTERIOLOGY CONCEPT SET",
        "groupByConcept": "Specimen Collection Date",
        "type": "DstExtension",
        "conceptNames": [
            "Specimen Id"
        ],
        "isEditable": true,
		"obsDelimiter": "\n"
    },
    "expandedViewConfig": {
        "templateName": "BACTERIOLOGY CONCEPT SET",
        "groupByConcept": "Specimen Collection Date"
    },
    "hideEmptyDisplayControl": false
}
```

## Key Field Table

| Key | Info | Required |
| --- | --- | --- |
| translationKey | The key (whose value is defined in locale files) to provide the name to be displayed for this display control | Yes |
| type | type of the section (control) type should be "obsToObsFlowSheet" to configure this control. | Yes |
| displayOrder | Order of the display in the dashboard. Value is a whole number | No |
| displayType | This to set the width of the display control. Possible Values are Full-Page, Half-Page, LAYOUT_25_75, LAYOUT_75_25 | Yes |
| rotateInPrint | This is to set the vertical vs horizontal view of the display in print Possible values are *true* or *false*. | No |
| headerConceptSource | This is to display the headers as the abbreviation which is mentioned as reference term for each of the header. If no reference term available, it will fall back to shortname | No |
| dataConceptSource | This is to display the answer value as the abbreviation which is mentioned as reference term for each of the header. If no reference term available, it will fall back to shortname | No |
| numberOfVisits | Which is used to see specific number of visits data. **If this is not configured, all the visit data is displayed by default.** | No |
| initialCount | Initial set of observations to be displayed within number of visits | No |
| latestCount | Latest set of observations to be displayed within number of visits | No |
| templateName | Name of the concept set (can be a template) which has to be shown in the display | Yes |
| groupByConcept | The member of template(concept set) which is used for grouping the values. | Yes |
| type (inside dashboardConfig) | The value is a file name(groovy extension), so that you can configure extensions for individual obsToObsFlowSheet (DST, ECG READINGS, CHEST X-RAY etc) to support month calculation. | No |
| conceptNames | The concept names which you want to see in that table. By default, all the leaf members in the template are shown. | No |
| pivotOn | The value defines orientation of the table. By default it will display row oriented table. Possible Values are row, column | No |
| isEditable | The configuration that enables you to edit the each line entry of the flow sheet If edit is enabled, pencil icon will be displayed. | No  ** |
| obsDelimiter | This configuration enables the user to define the delimiter to be used in case of multiple values for a concept (multiSelect). **If it's not configured, "*,"* will be displayed by default on the dashboard.** | No |
| hideEmptyRecords | true or false. This configuration will hide the column if the column is empty across row. This needs to be configured within '*dashboardConfig*' / '*expandedViewConfig*' elements.     | No |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | No |

# Drug Susceptibility Test (DST) Control

This is an example of Obs To Obs FlowSheet Control. Below are different ways of configuring.

- **pivotOn: row**: Here all the headers on the columns and their values will be based on the rows. **This is the default behavior.**

![](https://bahmni.atlassian.net/wiki/download/attachments/98402359/dst%20pivotOn%20row.png?version=1&modificationDate=1484890575577&cacheVersion=1&api=v2)

- **pivotOn: column**- Here the headers are based on the first column and for each observation, there is a column. **This behavior is configurable.**

![](https://bahmni.atlassian.net/wiki/download/attachments/98402359/dst%20pivotOn%20column.png?version=1&modificationDate=1484890635658&cacheVersion=1&api=v2)

## Sample Config

 
  Add to clinical/dashboard.json for it to appear on the patient dashboard** Expand source 
 
 
  
```
"dstResults": {
    "translationKey": "DST Results",
    "type": "obsToObsFlowSheet",
    "displayType": "Full-Page",
    "displayOrder": 9,
    "rotateInPrint" : true,
    "showOnlyInPrint" : true,
	"headingConceptSource":"Abbreviation",
	"dataConceptSource": "Abbreviation",
    "dashboardConfig": {
        "groupByConcept": "Specimen Collection Date",
        "name": "DstExtension",
		"pivotOn": "column",	
        "templateName": "BACTERIOLOGY CONCEPT SET",
        "conceptNames": [
            "Bacteriology, Isoniazid 0.2 &micro;g/ml result",
            "Bacteriology, Isoniazid 1 &micro;g/ml result",
            "Bacteriology, Rifampicin result",
            "Bacteriology, Ethambutol result",
            "Bacteriology, Pyrazinamide result"
        ]
    }
}
```

 

## Key Field Table

| Key | Use | Mandatory |
| --- | --- | --- |
| expandedViewConfig | Indicates the configuration for the details page (All Observations Page). | N |
| conceptNames | Specifies the concept names of the concepts that need to be displayed in this section. | N |
| dashboardConfig | Indicates the configuration for the dashboard. | Y |
| drugConcept | Concept names of the drugs that need to be displayed in the pivot table. | Y |
| groupBy | Can be encounters/visits. If grouped by the encounter, then the data is displayed per encounter in the pivot table. If grouped by the visit, then the latest value of the observations in each visit is displayed in the pivot table. | Y |
| isObservation | Specifies whether the given section is an observation control or a disease template control. If this is set to true then the section behaves as an observation control. | Y |
| labConcept | Concept names of the lab tests that need to be displayed in the pivot table. | Y |
| type | The name/id for the control that needs to be picked from the code. | Y |
| numberOfVisits | Specifies the number of visits for which data has to be displayed on the pivot table. | N |
| obsConcept | Concept names of the observations that need to be displayed in the pivot table. | Y |
| observationGraph | Indicates the configuration for the pivot table/flowsheet. | N |
| ** |  |  |
| showDetailsButton | Configuration to display audit information when 'V' sign is clicked. If set to false, the 'V' button will not be displayed. | N |
| showGroupDateTime | Configuration to display grouped encounter date time. If set to false, it is hidden. Default value is true(which means it is treated as true, if nothing specified). Should be separately configured for both dashboard and allDetails page. | N |
| Title | Indicates the title that will be displayed on the dashboard/visit page for the section. | Y |
| displayType | Configuration to display "Half-Page" , "Full-Page", "LAYOUT_25_75" - 25% or one-fourth of the page width or "LAYOUT_75_25" - 75% or three-fourth of the page width. | N |
| showOnlyInPrint | Configure to display only in print view not in display | N |
| displayOrder | Configuration to control the order of sections | N |
| headingConceptSource ``` ``` | Configuration to display the &ldquo;ReferenceTerm&rdquo; of the Concept configured as per the Concept Source( Abbreviation ) in the display controls for header names. |  |
| dataConceptSource | Configuration to display the "ReferenceTerm" of the Concept(Coded) configured as per the Concept Source(Abbreviation) in the display controls for coded answers. |  |
| personAttributes | List of person attributes to be displayed. Names of person attributes have to be specified. | N |
| programAttributes | List of program attributes to be displayed. Names of program attributes have to be specified. | N |
| preferredIdentifier | It can be name of either a person attribute or a program attribute. The value of that attribute will be displayed instead of patient identifer. If configured, that attribute will be removed from the other patient data displayed. If both person and program attributes have the same name, program attribute takes precedence. | N |

# Groovy Extensions

This control has an ability to configure custom Groovy extensions.
 
Read more about the custom extensions and the configurations at [Groovy Scripts](/wiki/spaces/BAH/pages/97812538/Groovy+Scripts)

Some of the example scenarios where a groovy extension can be used in the context of obs to obs control are:

- Month Extension
- Displaying the Highest Observation Value

## **Month** Extension

If you want the month column to be shown in chronicTreatmentChart, then add the following groovy extension.

Sample Groovy Code: TreatmentRegimenExtension.groovy ([https://github.com/Bahmni/endtb-config/blob/master/openmrs/treatmentRegimenExtension/TreatmentRegimenExtension.groovy](https://github.com/Bahmni/endtb-config/blob/master/openmrs/treatmentRegimenExtension/TreatmentRegimenExtension.groovy))

This file should copied into config under the **/openmrs/treatmentRegimenExtension/** package.
 
Make sure that the extension file is copied to "/home/**Username**/.OpenMRS/bahmni_config/openmrs/treatmentRegimenExtension/" directory.

## Highest Observation Value

This is another example of a groovy extension that can be added to Obs to Obs Flowsheet Control. 

**Use Case**

Display highest value in the Obs to Obs FlowSheet Control. Assume the observation values are captured as text or strings (usually configured as answers for coded concept). So the order of values to identify the highest value is specified in the [groovy file](https://github.com/Bahmni/endtb-config/blob/master/openmrs/flowsheetExtension/DstExtension.groovy) itself. In the below example, values are mentioned in **descending** order. In this case, the Obs To Obs Flowsheet control will display only the highest value among all the captured observation values for a concept. 

Sample code to specify the highest order **

```
List cultureResultObsValueInDescendingOrder = Arrays.asList("Positive for M. tuberculosis", "Negative for M. tuberculosis", "Contaminated",
                "Only positive for other mycobacterium", "Other")
```

**Complete sample code**

```
List cultureResultObsValueInDescendingOrder = Arrays.asList("Positive for M. tuberculosis", "Negative for M. tuberculosis", "Contaminated",
                "Only positive for other mycobacterium", "Other")
  
ArrayList** cultureResultObs = pivotRow.getColumns().get("Bacteriology, Culture results");
if(cultureResultObs != null && cultureResultObs.size() > 1) {
                Collections.sort(cultureResultObs, new obsValueComparator(cultureResultObsValueInDescendingOrder));
                pivotRow.getColumns().remove("Bacteriology, Culture results");
                pivotRow.addColumn("Bacteriology, Culture results", cultureResultObs.get(0));
}
```

**Key Field Table**

| Key | Info |
| --- | --- |
| cultureResultObsValueInDescendingOrder | Variable that holds the fully specified names of coded answers in the descending order |
| Bacteriology, Culture results | Question concept fully specified name |

On this Page
 
 
 
 
Related Display Controls**

 

- [Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control)
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control)
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control)
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control)
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet)

 

**Related Links**

[Groovy](/wiki/spaces/BAH/pages/97812538/Groovy+Scripts)

[dashboard.json](/wiki/spaces/BAH/pages/37945569/dashboard.json)
