---
id: "114227756"
title: "Flowsheet Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114227756/flowsheet-control"
version: 14
updated: "2024-05-17T11:01:32.053Z"
author: "Gokul Kuppan"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:52.884Z"
---

# Flowsheet Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114227756)  
> **Versión del documento:** v14 (2024-05-17T11:01:32.053Z) | **Autor/Editor:** Gokul Kuppan

---

## Purpose

It is a tabular control for showing Observations, Lab Tests and Drugs/Prescriptions (for configured concepts) across time, grouped by Visit or Encounter for a particular patient.**The Flow Sheet Control documented here is different from the [Patient Monitoring Flowsheet](/wiki/spaces/BAH/pages/92111338/Patient+Monitoring+Flowsheet) control.**
**

| Vitals Flow Sheet - groupBy:visits | Vitals Flow Sheet - groupBy:obstime | Vitals Flow Sheet - groupBy:encounters |
| --- | --- | --- |
| ![](https://bahmni.atlassian.net/wiki/download/attachments/114227756/Screenshot%202024-05-16%20at%207.23.33%E2%80%AFPM.png?version=1&modificationDate=1715867625926&cacheVersion=1&api=v2) | ![](https://bahmni.atlassian.net/wiki/download/attachments/114227756/Screenshot%202024-05-16%20at%207.05.31%E2%80%AFPM.png?version=1&modificationDate=1715866539415&cacheVersion=1&api=v2) | ![](https://bahmni.atlassian.net/wiki/download/attachments/114227756/Screenshot%202024-05-16%20at%207.20.19%E2%80%AFPM.png?version=1&modificationDate=1715867514341&cacheVersion=1&api=v2) |

## Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"flowsheet": {
  "type": "flowSheet",
  "title": "Vitals Flow Sheet",
  "dashboardConfig": {
	"latestCount": "5",
    "numberOfVisits": "5",
    "groupBy": "visits",
	"rowHeading": "Visit Details",
    "obsConcepts": [
		"Pulse",
        "RR",
        "Temperature"
    ]
    "labConcepts": [
      "RBS",
      "FBS"
    ]
  },
  "allFlowSheetDetails": {
	"latestCount": "10",
	"numberOfVisits": "5",
    "groupBy": "obstime",
	"rowHeading": "Observation Time",
    "obsConcepts": [
      "Diabetes, Blood Pressure",
      "Diabetes, A1C"
    ],
    "labConcepts": [
      "RBS",
      "FBS"
    ],
    "drugConcepts": [
        "Metformin"
    ]
  }
}
```

### Key Field Table

| Key | Information | Mandatory |  |
| --- | --- | --- | --- |
| title | Title to be displayed. | Y |  |
| dashboardConfig | Parameters of display control on the dashboard. Key | Information | Mandatory |
| ``` numberOfVisits ``` | Specifies the number of visits for which data has to be displayed | N |  |
| ``` groupBy ``` | Can be encounters/visits/obstime.. If grouped by the encounter, then the data is displayed per encounter in the flowsheet. If grouped by the visit, then the latest value of the observations in each visit is displayed in the flowsheet.If grouped by obstime then the value of observation will be displayed in separate column grouped by observation start time. | Y |  |
| ``` obsConcepts ``` | Set of Concepts whose observations have to be displayed. The concepts will be listed in the order they are added to the obsConcepts. | Y |  |
| ``` labConcepts ``` | Set of Concepts of lab tests whose results have to be displayed. | Y |  |
| ``` drugConcepts ``` | Set of Concepts of drugs whose drug orders or prescriptions against the configured concepts have to be displayed. | Y |  |
| latestCount | Specifies the number of columns for which data has to be displayed | N |  |
| rowHeading | Specifies a name (top-left cell) for the header row. | N |  |

Y allFlowSheetDetails
Parameters of control in the expanded view. Elements inside have the same format as elements inside dashboardParams.
N

On this Page
 
 
 
 
**Related Display Controls**

 

- [Programs Display Control](/wiki/spaces/BAH/pages/100139061/Programs+Display+Control)
- [Flowsheet Control](/wiki/spaces/BAH/pages/114227756/Flowsheet+Control)
- [Graph Control](/wiki/spaces/BAH/pages/114228167/Graph+Control)
