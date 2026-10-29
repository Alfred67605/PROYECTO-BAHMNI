---
id: "36700210"
title: "medication.json"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36700210/medication-json"
version: 62
updated: "2016-11-03T17:50:36.897Z"
author: "Sravanthi N. S. CH."
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:22.513Z"
---

# medication.json

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36700210)  
> **Versión del documento:** v62 (2016-11-03T17:50:36.897Z) | **Autor/Editor:** Sravanthi N. S. CH.

---

# Context:

The medication tab layout is configurable. Available configurations:

- The implementer can define a selected list of drugs that belong to a concept set to be displayed on the top portion.
- The fields on the drug order form can be configured at the tab level.
- The display of drugs below the drug order form is configurable as the default view or custom view. The custom view can be defined as per the configuration below.
- The actions that are available in each section of the custom view are also configurable.

 Click here to expand and view sample config...

```
{
  "commonConfig": {
    "doseFractions": [
      {
        "value": 0.50,
        "label": "&frac12;"
      },
      {
        "value": 0.33,
        "label": "⅓"
      },
      {
        "value": 0.25,
        "label": "&frac14;"
      },
      {
        "value": 0.75,
        "label": "&frac34;"
      }
    ]
  },
  "tabConfig": {
    "": {
	  "hideBulkChangeDurationButton": true, //configuration to hide the bulk change duration button while adding drug orders.
      "inputOptionsConfig": {
        "allowOnlyCodedDrugs":true,
        "drugConceptSet": "",
        "isDropDown": true,
		"hideOrderSet" : true,
        "doseUnits": [
          "mg",
          "ml"
        ],
        "frequencies": [
          "Alternate Days",
          "Twice a week"
        ],
        "showDoseFractions": true,
        "doseFractions": [
          "&frac12;",
          "⅓"
        ],
        "dosingInstructions": [
          "As directed",
          "Before meals"
        ],
        "routes": [
          "Oral",
          "Intramuscular"
        ],
        "dosePlaceHolder": "CUSTOM_DOSE_PLACEHOLDER",
        "hiddenFields": [
          "duration",
          "quantity"
        ],
        "simpleDrugForm": true,
        "duration": {
          "required": true
        },
        "defaultStartDate": false,
        "defaultDurationUnit": "Day(s)",
        "defaultInstructions": "As directed",
        "frequencyDefaultDurationUnitsMap": [
          {
            "minFrequency": 5,
            "maxFrequency": null,
            "defaultDurationUnit": "Hour(s)"
          },
          {
            "minFrequency": "1/7",
            "maxFrequency": 5,
            "defaultDurationUnit": "Day(s)"
          }
        ],
        "drugFormDefaults": {
          "Syrup": {
            "doseUnits": "ml",
            "route": "Oral"
          },
          "Tablet": {
            "doseUnits": "Tablet(s)",
            "route": "Oral"
          }
        },
        "routesToMakeDoseSectionNonMandatory" : ["Topical"],
        "labels": {
          "dose": "MEDICATION_LABEL_DOSE_FOR_TAB",
          "doseUnitsPlaceHolder": "MEDICATION_LABEL_DOSE_UNITS_PLACEHOLDER_FOR_TAB",
          "dosingInstructions": "MEDICATION_LABEL_DOSING_INSTRUCTIONS_FOR_TAB",
          "additionalInstructions": "MEDICATION_LABEL_ADDITIONAL_INSTRUCTIONS_FOR_TAB",
          "dosingInstructionsPlaceHolder": "MEDICATION_LABEL_DOSING_INSTRUCTIONS_PLACEHOLDER_FOR_TAB"
        },
      },
      "drugOrderHistoryConfig": {
        "view": "custom",
        "numberOfVisits": 4,
        "showOnlyActive": true,
        "sections": {
          "allTBDrugs": {
            "title": "Active Drugs",
            "actions": [
              "revise",
              "stop",
              "refill",
			  "void"
            ],
            "captureStopReason": false,
            "active": true,
            "includeConceptSet": "",
            "excludeConceptSet": "",
            "columns": [
              "frequency",
              "route",
              "duration",
              "instructions"
            ]
          }
        }
      }
    },
    "": { // Include your configurations for second tab here.
      "inputOptionsConfig": {},
      "drugOrderHistoryConfig": {}
    }
  }
}

```

# Multiple medication/treatment tabs 

Multiple medication tabs can be configured. Each block under tab config contains configuration for each medication tab to be displayed in Consultation screen. 

### tabConfig
 
**tabConfigName** that is specified as extensionParams of treatment/medication tab in clinical/*extension.json *will be the key for each section specified under **"tabConfig".**

Each tab config contains two sections  "**inputOptionsConfig"  **and "**drugOrderHistoryConfig".**

#### inputOptionsConfig

 This section of config under *tabConfig* contains configuration for drug order form where drugs are prescribed under medication/treatment tab. The configuration that can go under *inputOptionsConfig*** ** is listed below:

| Key | Description | Default value |
| --- | --- | --- |
| drugConceptSet | Concept set name of drugs that need to be displayed as a quick pick. Optional field |  |
| ``` allowOnlyCodedDrugs ``` | Configuring free text drug ordering. This field is applicable only when isDropDown is false. | false |
| isDropDown | Toggles between drop down and autocomplete views.  This field is applicable only when drugConceptSet is specified. Possible values are true and false. Optional field | false |
| ``` hideOrderSet ``` | To hide Orderset widget set this field to true. | false |
| doseUnits | List of fully specified concept names of dose units that need to be displayed in drug form. Optional field. |  |
| frequencies | List of frequencies that need to be displayed in drug form. Optional field. |  |
| showDoseFractions | This field is applicable only when list of dose fractions is specified in commonConfig. Option to determine whether to display dose fractions dropdown in drug form for uniform dosing type. Optional field. | false |
| doseFractions | List of dose fractions to be displayed from the master list specified in **doseFractions** in CommonConfig. Optional field. |  |
| dosingInstructions | List of dosing instructions to be displayed in the drug form. Optional field. |  |
| routes | List of routes that need to be displayed in the drug form. Optional field. |  |
| dosePlaceHolder | Placeholder text for the dose text box. Optional field. |  |
| hiddenFields | Fields that can be disabled in the drug form . Optional field. Possible values are additionalInstructions, duration, dosingInstructions, quantity, quantityUnits, durationUnits, sos, dosingTypeToggle |  |
| labels | A key value pair that has the field name as key and translation key as value. Translation key should be defined in the locale.json file. The labels that can be configured are drugName, drugNamePlaceHolder, units, dose, doseUnitsPlaceHolder, frequency, frequencyUnitsPlaceHolder, route, routePlaceHolder, startDate, duration, quantity, quantityUnitsPlaceHolder, additionalInformation, asNeeded, asNeededButton, asNeededButtonAccessKey, dosingInstructions and additionalInstructions. If any field label is not configured, then default value will be taken. If multiple tabs are configured, then the translation keys should be unique across tabs. |  |
| simpleDrugForm | Display or Hide Total Qty and Total Qty Units fields in drug form. Option al field. |  |
| " duration " : { " required " : false }, | Option to specify whether duration has to be made mandatory or not. Optional field. Possible values are true and false | true |
| defaultStartDate | Option to specify whether the start date of treatment in drug form is to be defaulted to today. Optional field.   Possible values are true and false | true |
| defaultDurationUnit | Default duration unit to be pre populated in the duration units dropdown. Full specified concept name of duration unit is to be specified. Optional field. |  |
| defaultInstructions | Default dosing instruction to be populated in the dosing instructions dropdown in drug form. Optional field. |  |
| frequencyDefaultDurationUnitsMap |  |  |
| drugFormDefaults | List of dosage forms with it default dose unit and default route. Optional field. |  |
| routesToMakeDoseSectionNonMandatory |  List of routes for which the dose and dose units will be made non-mandatory. |  |

#### drugOrderHistoryConfig

This section of config under *tabConfig* contains configuration for drug order history section (which contacts the history of prescriptions) that will be displayed in medication/treatment tab. The configuration that can go under *drugOrderHistoryConfig* is listed below:

| Key | Description | Default value |
| --- | --- | --- |
| view | Two views are available to display drug order history. Possible values are ' *default* ' and ' *custom* ' All sections in 'custom' view are customisable. | "default" |
| showOnlyActive | This flag is applicable only for *default* view. This flag determines whether to display only active and schedule drugs. |  |
| numberOfVisits | This flag is applicable only for *default* view. C onfiguration to specify number of previous visits to be shown as tabs in drug order history section. If the number of visits mentioned is **Zero** then only the recent tab should be shown | 3 |
| sections | Contains the configuration for list of sections to be displayed in custom view of drug order history. This block is applicable when **view** is set to '*custom*'. Key | Description |
| title | Label for the section to be displayed in custom view. |  |
| actions | Possible actions to be performed on each drug order (or each medication provided). Possible values are *refill*, *revise*, *stop*, *void*. |  |
| captureStopReason | When true, stop order reason fields will be displayed on stopping the order. This is an optional field. Default value is **false **which means stop reason fields are not displayed. |  |
| active | Filter for active/inactive drugs. Possible values are true and false. Default behaviour If nothing is specified, all the drugs prescribed (including active and inactive) will be displayed. |  |
| includeConceptSet | Filter for drugs to be displayed. This holds a string which is fully specified name of the concept set. Only drug orders for the drugs present in the concept set will be displayed in the section. |  |
| excludeConceptSet | Filter for drugs to be excluded. This holds a string which is fully specified name of the concept set. Drug orders for the drugs present in the concept set will not be displayed (excluded) in the section. |  |
| columns | Configure the columns that should be displayed in this section. Mandatory fields drugName, dosage and startDate are mandatory fields, these are not configurable. Additional columns that can be configured In addition to above mentioned columns, other columns that can be configurable are *route, duration, frequency, stopDate, stopReason, quantity, instructions.* Default columns If this property is not specified, drugName, dosage, startDate, frequency, route will be shown by default. If columns are specified, it will be shown along with drugName, dosage and startDate. |  |

On this page
