---
id: "32014625"
title: "Configure Patient Graphs and Trends"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014625/configure-patient-graphs-and-trends"
version: 19
updated: "2022-11-20T11:34:46.581Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:08.083Z"
---

# Configure Patient Graphs and Trends

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014625)  
> **Versión del documento:** v19 (2022-11-20T11:34:46.581Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

The Trends Tab allows the user to view Observations for a patient across visits. The observations displayed in this tab can be configured.
 
The *Trends* tab is "just-another-tab" on the Patient Dashboard, with name as *Trends*. One can name it anything, and use chart related display controls to create this dashboard.

**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014625/Trends.png?version=1&modificationDate=1447334514814&cacheVersion=1&api=v2)

**Trends Tab**

## Steps

### 1. Display Trends/Graphs tab

To configure or discard Trends/Graphs tab refer to the configuration snippet below:
Sample Configuration**

```
"trends": {
        "displayByDefault": true,
        "maxRecentlyViewedPatients": 10,
        "sections": {
            "patientInformation": {
                "type": "patientInformation",
                "patientAttributes": [],
                "addressFields": [],
                "displayOrder": 0,
                "translationKey": "DASHBOARD_TITLE_PATIENT_INFORMATION_KEY"
            }
}
```

Example
 
[https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json)

**

### 2. Add Observations to Trends Tab

To configure Observations to be displayed in the tab refer to the configuration snippet below:
Sample Configuration**

```
   "weight/BMI": {
                "type": "observationGraph",
                "config": {
                    "yAxisConcepts": [
                        "Body mass index"
                    ],
                    "xAxisConcept": "observationDateTime",
                    "numberOfVisits": 10
                },
                "displayOrder": 6,
                "title": "BMI"
            },
            "Lab, Hemoglobin test result": {
                "type": "observationGraph",
                "config": {
                    "yAxisConcepts": [
                        "lab, Hemoglobin test result"
                    ],
                    "xAxisConcept": "observationDateTime",
                    "numberOfVisits": 10
                },
                "displayOrder": 6,
                "title": "Hemoglobin"
            },
            "AST": {
                "type": "observationGraph",
                "config": {
                    "yAxisConcepts": [
                        "Lab, AST"
                    ],
                    "xAxisConcept": "observationDateTime",
                    "numberOfVisits": 10
                },
                "displayOrder": 8,
                "title": "AST"
            }
        },
        "translationKey": "DASHBOARD_TAB_TRENDS_KEY"
    }
}
```

Example
 
[https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json)

On this Page

 
 
 
**Feature Details**

[Clinical Services - Feature Guide](/wiki/spaces/BAH/pages/32014350/Clinical)

**Usage Details**

[Clinical Services - User Guide](/wiki/spaces/BAH/pages/32604195/Clinical+Services)

**Related Links**

[Observation Graph Control](/wiki/spaces/BAH/pages/37945573/Display+Controls#DisplayControls-GraphControl)
