---
id: "33456359"
title: "Auto-Calculation of Observations"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/33456359/auto-calculation-of-observations"
version: 22
updated: "2023-12-15T07:13:34.517Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:12.235Z"
---

# Auto-Calculation of Observations

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/33456359)  
> **Versión del documento:** v22 (2023-12-15T07:13:34.517Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

Bahmni supports auto-calculation of observations in forms. One can use this feature for calculated fields like BMI (Body Mass Index). 

Refer to the screenshot below, where BMI and BMI values (Calculated Values) are shown in the Nutritional Values Display Control in the Patient Dashboard:

![](https://bahmni.atlassian.net/wiki/download/attachments/33456359/Calculated%20Values.png?version=1&modificationDate=1448262708133&cacheVersion=1&api=v2)

**Patient Dashboard**

## Steps

Below are mentioned the steps to be followed for *BMI* calculation. Similar steps can be used to capture any other Auto-Calculated observations.

1) Setup the BMI Data concept in OpenMRS, as a container for BMI and BMI Abnormal concepts. Refer to the screenshot below:

![](https://bahmni.atlassian.net/wiki/download/attachments/33456359/BMI%20Data.png?version=1&modificationDate=1448272053554&cacheVersion=1&api=v2)**BMI Data Setup in OpenMRS**

2) Setup BMI (For BMI Values) and BMI Status (For BMI Statuses such as Normal, Underweight, etc.) Concepts. Choose Class as "Computed" as these are Calculated Values. The screenshot below displays the BMI and BMI Status concepts setup in OpenMRS:

 **![](https://bahmni.atlassian.net/wiki/download/attachments/33456359/BMI.png?version=1&modificationDate=1448268364702&cacheVersion=1&api=v2)**Setting up BMI Concept in OpenMRS**

![](https://bahmni.atlassian.net/wiki/download/attachments/33456359/BMI%20Status.png?version=1&modificationDate=1448268632890&cacheVersion=1&api=v2)**Setting up BMI Status Concept in OpenMRS**

3) Configure Calculated Concepts as concept names in the dashboard.json config. Refer to the code snippet below:

```
 "nutritionalValues": {
                "title":"Nutritional Values",
                "translationKey":"DASHBOARD_TITLE_NUTRITIONAL_VALUES_KEY",
                "name": "vitals",
                "isObservation": true,
                "displayOrder": 11,
                "dashboardParams": {
                    "conceptNames": [
                        "HEIGHT",
                        "Weight",
                        "BMI",
                        "BMI STATUS"
                    ],
                    "numberOfVisits": 2
                },
```

Refer to [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/clinical/dashboard.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/dashboard.json) for further information.

4) For auto-calculation of BMI, the latest instance of Height and Weight will be calculated from the [groovy script](https://bahmni.atlassian.net/wiki/display/BAH/Groovy+Scripts) and validated by referencing them with the BMI_chart. For further information refer to [https://github.com/Bahmni/default-config/tree/master/openmrs/obscalculator](https://github.com/Bhamni/default-config/tree/master/openmrs/obscalculator).

Here are sample groovy script and BMI charts: [BMI_chart.csv](/wiki/download/attachments/33456359/BMI_chart.csv?version=1&modificationDate=1448271083482&cacheVersion=1&api=v2)    [BahmniObsValueCalculator.groovy](https://github.com/Bahmni/default-config/blob/master/openmrs/obscalculator/BahmniObsValueCalculator.groovy)

 
See this discussion and video also (how to auto-calculate fields in Forms): [https://talk.openmrs.org/t/auto-calculate-using-implementers-interface/15783](https://talk.openmrs.org/t/auto-calculate-using-implementers-interface/15783)

On this Page

 
 
 
Feature Details**

[Observations Form - Feature Guide](/wiki/spaces/BAH/pages/40501363/Capturing+Observations)

[Groovy Scripts](https://bahmni.atlassian.net/wiki/display/BAH/Groovy+Scripts)
