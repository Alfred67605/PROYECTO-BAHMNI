---
id: "37945563"
title: "visit.json"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945563/visit-json"
version: 11
updated: "2024-02-01T12:48:00.398Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:23.016Z"
---

# visit.json

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945563)  
> **Versión del documento:** v11 (2024-02-01T12:48:00.398Z) | **Autor/Editor:** Mohankumar Thangavel

---

**

## Description

Visit dashboard page can be defined in this visit.json. There can be multiple visit dashboards.

First visit dashboard is the default dashboard that comes with Bahmni. It has predefined set of display controls to be shown. 
visit.json**

```
{
    "general":{ // Configuration for one visit dashboard. There can be multiple of its kind
        "translationKey": "DASHBOARD_TAB_GENERAL_KEY", 
        "displayByDefault": true,
        "printing": {
            "title": "Bahmni",
            "header": "Visit",
            "logo": "../images/bahmniLogo.png"
        },
        "defaultSections": true,
        "sections": {
            "pivotTable":{
                "type": "pivotTable",
                "displayOrder": 0,
                "title": "Vitals Flowsheet",
                "config": {
                    "groupBy": "encounters",
                    "obsConcepts": [
                        "Vitals",
                        "Pulse",
                        "Diastolic",
                        "Systolic",
                        "Temperature",
                        "RR",
                        "SPO2",
                        "Height",
                        "WEIGHT",
                        "M/C Days"
                    ],
                    "labConcepts": ""
                }
            },
            "pacsOrders":{
                "type":"pacsOrders",
                "displayOrder": 1,
                "translationKey": "PACS_ORDERS_VISIT_PAGE_KEY",
                "config":{
                    "orderType": "Radiology Order"
                }
            }
        }
    },
    "dischargeSummary":{
        "translationKey": "DASHBOARD_TAB_DISCHARGE_SUMMARY_KEY",
        "printing": {
            "title": "Bahmni",
            "header": "Discharge Summary",
            "logo": "../images/bahmniLogo.png"
        },
        "sections": {
            "PatientInformation":{
                "type": "patientInformation",
                "displayOrder": 0,
                "config": {
                    "title": "PatientInformation",
                    "patientAttributes": ["caste", "class", "education", "occupation", "debt", "distanceFromCenter", "isUrban", "cluster","RationCard", "familyIncome"],
                    "addressFields": ["address1", "address2", "cityVillage", "countryDistrict"]
                }
            },
            "admissionDetails":{
                "type": "admissionDetails",
                "displayOrder": 1,
                "config": {
                    "showDetailsButton": true,
                    "translationKey": "DISCHARGE_SUMMARY_ADMISSION_DETAILS_KEY"

                }
            },
            "weightInitial":{
                "type": "observation",
                "displayOrder": 2,
                "translationKey":"DISCHARGE_SUMMARY_AT_ADMISSION_KEY",
                "config": {
                    "conceptNames": ["WEIGHT"],
                    "scope": "initial"
                }
            },
            "weightLatest": {
                "type": "observation",
                "displayOrder": 3,
                "translationKey":"DISCHARGE_SUMMARY_AT_DISCHARGE_KEY",
                "config": {
                    "conceptNames": ["WEIGHT"],
                    "scope": "latest"
                }
            },
            "diagnoses":{
                "type": "diagnosis",
                "displayOrder": 4,
                "config": {
                    "translationKey" : "DISCHARGE_SUMMARY_DIAGNOSIS_KEY",
                    "showCertainty": false,
                    "showOrder": false,
                    "showDetailsButton": true
                }
            },
            "clinicalNotes":{
                "type": "observation",
                "displayOrder": 5,
                "translationKey": "DISCHARGE_SUMMARY_CLINICAL_NOTES_KEY",
                "config": {
                    "conceptNames": [
                        "History and Examination Notes",
                        "Discharge Summary",
                        "Lab Investigation Notes",
                        "Radiology Notes",
                        "Other Notes"
                    ],
                    "scope": "latest",
                    "numberOfVisits": "1"
                }
            },
            "labInvestigations":{
                "type": "investigationResult",
                "displayOrder": 6,
                "config": {
                    "translationKey":"LAB_INVESTIGATION",
                    "showChart": true,
                    "showTable": false,
                    "showNormalLabResults": true,
                    "showCommentsExpanded": true,
                    "showAccessionNotes": true,
                    "numberOfVisits": 10,
                    "initialAccessionCount": 1,
                    "latestAccessionCount": 1
                }
            },
            "Treatments": {
                "type": "treatment",
                "displayOrder": 6,
                "config": {
                    "translationKey": "VISIT_TITLE_TREATMENTS_KEY",
                    "showFlowSheet": true,
                    "showListView": true,
                    "showOtherActive": false,
                    "showDetailsButton": true,
                    "showRoute": true,
                    "showDrugForm": true,
                    "showProvider":false
                }
            },
            "adviceOnDischarge":{
                "type": "observation",
                "displayOrder": 8,
                "translationKey":"DISCHARGE_SUMMARY_ADVICE_ON_DISCHARGE_KEY",
                "config": {
                    "conceptNames": [
                        "Additional Advice on Discharge",
                        "Follow up Date",
                        "Discharge Summary, Plan for follow up"
                    ],
                    "scope": "latest"
                }
            }
        }
    },
    "orders":{
      "translationKey": "DASHBOARD_TAB_ORDERS_KEY",
      "sections": {
          "Radiology Orders": {
              "type": "order",
              "displayOrder": 0,
              "translationKey": "Radiology Orders",
              "config": {
                  "translationKey": "Radiology Orders",
                  "name": "ordersControl",
                  "orderType": "Radiology Order",
                  "conceptNames": [
                      "Summary"
                  ]
              }
          }
      }

    }
}

```

In the config above,

general, dischargeSummay and orders are the multiple visit dashboards in which general is the default dashboard. 

| Visit.json |  |
| --- | --- |
| translationKey | This is required to give the name for the visit dashboard. This value for this key should be defined in the locale.json |
| displayByDefault (true/false) | Only one dashboard will be shown by default and others dashboards will come under '+' button. If there is a need to open multiple dasboards by default on loading the page, this config has to be set to true for those dashboard. |
| printing | This can be defined when visit dashboard print functionality is needed. Refer printing section under [dashboard.json](/wiki/spaces/BAH/pages/37945569/dashboard.json) page for configuration. With Bahmni Lite release, the provider name is added to the bottom of the visit page print for signature purposes. In case of multi-provider scenario, this can be confusing and you can hide it. To hide the provider name in the end of visit print page, hideProviderName property can be set to true. Example: "printing": { "title": "Bahmni", "header": "Discharge Summary", "logo": "../images/bahmniLogo.png" "hideProviderName": true }, |
| defaultSections (true/false) | Default visit page will come with a set of display controls. If you want to define more display controls on default dashboard like flowsheet and pacs, this config has to set to true. Display controls should be defined in 'sections' of the dashboard config. There should be at least one tab / dashboard that has **"defaultSections": true** |
| sections | Only certain display controls can be defined here to be shown in the **visit dashboard**, and they are not defined the same as in the **patient dashboard**. There is no **Forms Display Control** available, so to display a list of observation forms, the following must be used: ``` "obsForms" :{ "type" : "observation" , "displayOrder" : 2, "translationKey" : "Observations" , "config" : { "conceptNames" : [ "Obs1 Form" , "Obs2 Form" , "Obs3 Form" ] } } ``` |

```

```
