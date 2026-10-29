---
id: "37945359"
title: "Configure Visit Dashboard"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945359/configure-visit-dashboard"
version: 16
updated: "2022-11-20T11:35:17.120Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:08.665Z"
---

# Configure Visit Dashboard

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945359)  
> **Versión del documento:** v16 (2022-11-20T11:35:17.120Z) | **Autor/Editor:** Gurpreet Luthra

---

**

## Purpose and Benefits

The Visit Dashboard displays all details about a visit of the patient. On the top, a Visit Dashboard has a date control, that can allow the provider to browse visit details in the past for a patient. One can choose various "Display Controls" to configure what information is visible on the patient dashboard.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945359/Screen%20Shot%202016-04-22%20at%201.04.05%20pm.png?version=1&modificationDate=1461310649571&cacheVersion=1&api=v2)

                                                           **                   Visit Dashboard**

**
**

## Steps

### Configure Visit Display Control on Patient Dashboard
 
To reach visit dashboard, one has to configure this control on patient dashboard. Please follow the instructions to [configure the visit control](/wiki/spaces/BAH/pages/100139014/Visit+Control)

![](https://bahmni.atlassian.net/wiki/download/attachments/37945359/Visit%20Control%20on%20Patient%20Dashboard.png?version=1&modificationDate=1478851693144&cacheVersion=1&api=v2)

### Configure Visit Dashboard

Any display control can be configured in visit dashboard under sections in the config. Check [Display Controls](/wiki/spaces/BAH/pages/37945573/Display+Controls) to know how to configure display controls. The following is the example config for patient visit dashboard.
Sample Visit Dashboard Configuration**

```
{
    "general":{
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

| Field Name | Description |
| --- | --- |
| translationKey | Name of the visit tab. This will be displayed as the tab label |
| displayByDefault | Will always show this tab by default on load |
| printing | Header information when printing a visit tab |
| defaultSections | When set to false, will exclude the default pre-configured patient visit widgets, and only show the ones you configure in this tab. **Note**: *At least one dashboard/tab should have this as true. See this [discussion](https://talk.openmrs.org/t/configure-clinical-visit-page/6125/15)**.* |
| sections | An array that lists all the widgets (and its configs) to be displayed in this tab. When 'defaultSections' is set to true, these sections will be append at the end of the default sections |

******

On this page**

 
 
 

**Related Links**

[Display Controls](/wiki/spaces/BAH/pages/37945573/Display+Controls)

[Visit Control](/wiki/spaces/BAH/pages/100139014/Visit+Control)
