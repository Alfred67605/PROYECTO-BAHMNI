---
id: "114529259"
title: "Clinical App - Retrospective Data Entry"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114529259/clinical-app-retrospective-data-entry"
version: 6
updated: "2017-06-20T12:36:19.853Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:26.952Z"
---

# Clinical App - Retrospective Data Entry

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114529259)  
> **Versión del documento:** v6 (2017-06-20T12:36:19.853Z) | **Autor/Editor:** Sruti Sridhar

---

**

## Purpose and Benefits

The retrospective entry mode feature is currently supported only within the clinical app. It is a useful feature that allows data to be entered into Bahmni that was captured on paper by a doctor or that was missed due to a system/network outage.

## Note

Things to Remember
 
- 
**Bulk** retrospective data entry is currently NOT supported.

- 
 The feature is available only on the following tabs

Observations (Forms)

- 
Diagnosis

- 
Consultation

- 
Medications

- 
Retrospective Mode is not available on tabs like Orders, Disposition and Bacteriology. 

## Steps

1. Click on Registration Desk

2. On clicking the above button, the below pop up dialog appears to choose date, location and on behalf of (provider).

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/retro-2.png?version=1&modificationDate=1497960280782&cacheVersion=1&api=v2)

User with appropriate privilege can change the following:

- 
Date - choose a past date for which data is to be entered

- 
Location - record data against a particular login location

- 
Provider - inform Bahmni of the actual provider to record data with

3. On selecting an older date the system enters into retrospective entry mode. All the data recorded in this mode will get recorded with the selected date, location and provider. 
 
In Retrospective Mode, the corner button displays the selected details and **the title strip turns blue** to keep the user informed that it is in retrospective entry mode.

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/patient%20listing-retro.png?version=1&modificationDate=1497961465315&cacheVersion=1&api=v2)

**Retrospective Mode: Patient Listing**

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/dashboard-retro.png?version=1&modificationDate=1497961656770&cacheVersion=1&api=v2)

**Retrospective Mode: **Patient Dashboard

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/ObsTab-retro.png?version=1&modificationDate=1497961497809&cacheVersion=1&api=v2)

**Retrospective Mode: **Observations Tab

4. When the data is recorded retrospectively, the data is recorded with the selected location, date, provider and default visit type.

The data in display control shows up date and provider information like below:

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/dashboard-retro-12.00am.png?version=1&modificationDate=1497961506209&cacheVersion=1&api=v2)

**Note that the time shown is start of the day (12:00 am) -- see screenshot above. **

4. Retrospective Mode is not available on tabs like Orders, Disposition and Bacteriology. When entry from a particular tab is not available a message is displayed to indicate the same

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/orderentry-denied.png?version=1&modificationDate=1497961511283&cacheVersion=1&api=v2)

     ** Retrospective Mode**: **Orders Tab**

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/Disposition%20denied.png?version=1&modificationDate=1497961837475&cacheVersion=1&api=v2)

         **Retrospective Mode: Disposition**

![](https://bahmni.atlassian.net/wiki/download/attachments/114529259/bacteriology%20denied.png?version=1&modificationDate=1497961838509&cacheVersion=1&api=v2)

                                                   **                                            Retrospective Mode: Bacteriology**

## Configuration

The visit type for retrospective entries can be configured in clinical/app.json of config.

```
"config" : {
       "visitTypeForRetrospectiveEntries": "OPD"
}
```

On this Page

 
  
 
Feature Details**

[Retrospective Data - Feature Guide](/wiki/spaces/BAH/pages/114539569/Retrospective+Data+Support)
