---
id: "114228167"
title: "Graph Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114228167/graph-control"
version: 5
updated: "2022-11-20T11:20:12.904Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:53.432Z"
---

# Graph Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114228167)  
> **Versión del documento:** v5 (2022-11-20T11:20:12.904Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

Observation Graph Control is configured to display the observations values as a graph against observation date time, age or any other concept for configured number of visits.**

## Screenshot

*![](https://bahmni.atlassian.net/wiki/download/attachments/114228167/Screen%20Shot%202016-05-25%20at%204.17.29%20PM.png?version=1&modificationDate=1484808606019&cacheVersion=1&api=v2)*

## Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"temperature": {
 "type": "observationGraph",
 "title": "Temperature",
 "config": {
    "yAxisConcepts": ["Temperature"],
    "xAxisConcept" : "observationDateTime",
    "numberOfVisits": 3
  }
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| type | The name/id for the control that needs to be picked from the code. | Y (in Visit Page) |
| title | Indicates the title that will be displayed on the dashboard/visit page for the section. | Y |
| yAxisConcepts | Array of concepts for which observations need to be plotted on the graph. | Y |
| xAxisConcepts | Concept on X Axis (observationDateTime, age or any concept). | Y |
| numberOfVisits | Specifies the number of visits for which data has to be displayed. | N |

## Graph With Reference Data Control

Graph Control Config becomes Chart With Reference Data Config with the addition of the **'referenceData'** in the config section referring to the .csv file as shown below

## Screenshot

**![](https://bahmni.atlassian.net/wiki/download/attachments/114228167/growth%20chart.png?version=1&modificationDate=1484808605513&cacheVersion=1&api=v2)****

## Configuration

### Sample Config

```
"growthChart": {
   "type": "observationGraph",
   "title": "Growth Chart",
   "config": {
      "yAxisConcepts": [ "Weight" ],
      "referenceData": "growthChartReference.csv",
      "numberOfVisits": 20
  }
}
```

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| yAxisConcepts | It can be any Numeric Concept name. It has to be a single value. It can't be multiple values or empty. (Required) | Y |
| referenceData | It would be name of the csv file to be loaded. The csv file has to be in the same folder as this config file. (Required**) **If the referenceData is not mentioned, the config will become Graph Control Config. Then, Graph Control Config specifications are applicable. | Y |
| numberOfVisits | It is the number of visits for which data has to be displayed. | N |

### Sample Reference Data CSV file

```
Gender, Age, Ref1, Ref2
M, 1, 10.5, 12.5
M, 2, 20.5, 22.5
F, 1, 9.5, 12
F, 2, 19.5, 22
```

In the example above:

- The first row is the header row.
- Age, Gender column name should always have 'Age', 'Gender' labels.
- Age, Gender columns are mandatory.
- Age is always assumed to be months (you can give decimals to represent days).
- Other columns will correspond to the each reference line.

On this Page
 
 
 
 
Related Display Controls**

 

- [Programs Display Control](/wiki/spaces/BAH/pages/100139061/Programs+Display+Control)
- [Flowsheet Control](/wiki/spaces/BAH/pages/114227756/Flowsheet+Control)
- [Graph Control](/wiki/spaces/BAH/pages/114228167/Graph+Control)
