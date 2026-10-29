---
id: "36077645"
title: "Using Concept Groups to Display Unknown and Abnormal Indicators"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36077645/using-concept-groups-to-display-unknown-and-abnormal-indicators"
version: 11
updated: "2016-04-22T08:54:35.347Z"
author: "Abishek Anand"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:11.772Z"
---

# Using Concept Groups to Display Unknown and Abnormal Indicators

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36077645)  
> **Versión del documento:** v11 (2016-04-22T08:54:35.347Z) | **Autor/Editor:** Abishek Anand

---

## Purpose and Benefits

Unknown and abnormal indicators in forms are used to provide additional information to the observation. In the case of unknown it can be used when accurate measurements cannot be made. The abnormal indicator will be automatically checked for numeric concepts if the value entered is outside the Normal High and Normal Low limits defined in Openmrs as shown in the screenshots below.

## Sections

### Using Concept Groups to display Unknown Indicator

In order to configure unknown indication for any concept, there is a specific way of grouping the concepts.

- Create a root concept set of class "**Concept Details**" and Datatype **"N/A"** . Example: **Diastolic Data**
- Root concept should have 2 set members
Original concept that you want to see on the page. Example: **Diastolic(Can be any concept or concept set)**
- Unknown concept of type "**Boolean**" and class "**Unknown**". Example: **Diastolic Unknown********

![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/image2015-12-29%2017:8:42.png?version=1&modificationDate=1451389645149&cacheVersion=1&api=v2)

**
**

![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/image2015-12-29%2017:12:48.png?version=1&modificationDate=1451389645117&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/image2015-12-29%2017:18:18.png?version=1&modificationDate=1451389699917&cacheVersion=1&api=v2)

This is how it appears on the page :

![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/image2015-12-29%2017:14:47.png?version=1&modificationDate=1451389645108&cacheVersion=1&api=v2)

### Using Concept Groups to display Abnormal Indicator

In order to configure abnormal indication for any concept, there is a specific way of grouping the concepts.

- Create a root concept set of class "**Concept Details**". Example: **Pulse Data**
- Root concept should have 2 set members
Original concept that you want to see on the page. Example: **Pulse (Can be any concept or concept set)**
- Abnormal concept of type "**Boolean**" and class "**Abnormal**". Example: **Pulse Abnormal**

![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/Screen%20Shot%202015-12-03%20at%2010.31.39%20am.png?version=1&modificationDate=1451389645178&cacheVersion=1&api=v2)

**![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/Screen%20Shot%202015-12-03%20at%2010.32.11%20am.png?version=1&modificationDate=1451389645169&cacheVersion=1&api=v2) **

**![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/Screen%20Shot%202015-12-03%20at%2010.31.58%20am.png?version=1&modificationDate=1451389645160&cacheVersion=1&api=v2)**

**
**

```
This is how it appears on the page :
```

**![](https://bahmni.atlassian.net/wiki/download/attachments/36077645/Screen%20Shot%202015-12-03%20at%2010.33.18%20am.png?version=1&modificationDate=1452165260830&cacheVersion=1&api=v2)
**

## **Hiding Abnormal Button on Forms:**

 1) Showing the abnormal  button on observations is configurable. To hide the abnormal button in the entire template use the following configuration format.

              FullySpecifiedNameOfTemplate : {

                    "hideAbnormalButton" : true

              }

### Example:

 

```
 "Lab Results Hemotology Template" :{
   "hideAbnormalButton" : true
 }
```

2) To hide the abnormal button for a particular group of concepts under particular concept set, following is the format.

            FullySpecifiedNameOfConceptGroup : {

                     "hideAbnormalButton" : true

            }

### Example:

 

```
"Lab, Haematology" : {
    "hideAbnormalButton" : true
 }
```

3)To hide the abnormal button at the leaf level  concept, following is the format.

            FullySpecifiedNameOfLeafConcept : {

                          "hideAbnormalButton" : true

              }

### Example:

```
"Absolute Neutrophil Count" : {
       "hideAbnormalButton" : true
  }
```

4)Leaf level concept configuration will override the template level or it's parent concept configuration. For example if you want to hide all the abnormal buttons in ** Lab Results Haematology template** except  

 **Absolute Neutrophil Count** leaf concept following is the required configuration.

### Example:

```
"Lab Results Hemotology Template" :{
   "hideAbnormalButton" : true
} 
"Absolute Neutrophil Count" : {
       "hideAbnormalButton" : false
 }

```

If you don't mention any configuration abnormal button will display by default.https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=34439344

On this Page

 
 
 
Feature Details**

[Observations Form - Feature Guide](/wiki/spaces/BAH/pages/40501363/Capturing+Observations)
