---
id: "32014373"
title: "In-Patient Management"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014373/in-patient-management"
version: 33
updated: "2023-09-08T07:25:17.184Z"
author: "Gurpreet Luthra"
category: "Manual_Usuario_Sub"
download_date: "2026-10-20T21:02:40.763Z"
---

# In-Patient Management

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014373)  
> **Versión del documento:** v33 (2023-09-08T07:25:17.184Z) | **Autor/Editor:** Gurpreet Luthra

---

## About the Feature

In-patient feature provides the ability to admit, discharge and transfer a patient. Also, the patient can be assigned to a selected bed. A summary of patient information can also be viewed. Example: vitals, diagnosis.
 
**Sep-2023:** Bahmni team is undertaking brand new development of IPD Features. This is an exciting phase, and you can read more about this work here: [In-Patient Features (IPD) in Bahmni - Active Development](/wiki/spaces/BAH/pages/3221946369/In-Patient+Features+IPD+in+Bahmni+-+Active+Development)

**

This is an Old Feature
 
With 0.91 release, a **new** [Bed Management feature](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/707559542/Bed+Management) is available. While the older feature (detailed below) is also available, we strongly advice any existing implementation to transition to the new feature soon. Going forward, this module will be **deprecated**. The deprecation is intended for Release 0.93

## Used By

 This feature is used by the nurses to monitor the in-patients.

## How is it Used?

Configure In-Patient App on Bahmni home page by following [this](https://bahmni.atlassian.net/wiki/display/BAH/In-Patient+Management+Module).

Once you are done with configuring In-Patient App, you can see link to the app on your home page.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.37.02%20PM.png?version=2&modificationDate=1459494663086&cacheVersion=1&api=v2)

If you click on In-Patient module, you will be landed on patient queue page where you can see the WardLists, patients to be admitted, patients who are already admitted and patients who are ready to be discharged.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.44.15%20PM.png?version=1&modificationDate=1459494895320&cacheVersion=1&api=v2)

On the WardList page you can see the list of wards in hospital and patients admitted in those wards.

By Clicking on any patient's ID in ward list you will land on patient movement page where you can transfer patient from one bed to other or one ward to other or discharge a patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.49.40%20PM.png?version=1&modificationDate=1459495232657&cacheVersion=1&api=v2)

By Clicking on any patient on "To Admit" tab, you will go to patient movement page where you can admit a patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.52.29%20PM.png?version=1&modificationDate=1459495477224&cacheVersion=1&api=v2)

By clicking on admit button, you will see a popup where you can close the OPD visit and open a new IPD visit if needed.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.56.50%20PM.png?version=1&modificationDate=1459495641348&cacheVersion=1&api=v2)

On admit you will be landed on ward list page where you can choose a bed on which the patient will be admitted.By clicking on any bed icon you will see a popup where you can assign a bed to a patient.

The beds which are already assigned to patients will be show in yellow color. But still you can go ahead and assign a patient to a bed which is already assigned to some other patient. This feature is enabled to assign bed to new born baby with mother.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%201.00.24%20PM.png?version=1&modificationDate=1459495843013&cacheVersion=1&api=v2)

By clicking on any patient in Admitted tab you will land on patient movement page where you can transfer patient from one bed to other or one ward to other or discharge a patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.49.40%20PM.png?version=1&modificationDate=1459495232657&cacheVersion=1&api=v2)

By clicking on any patient in To Discharge tab you will land on patient movement page where you can discharge a patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014373/Screen%20Shot%202016-04-01%20at%2012.49.40%20PM.png?version=1&modificationDate=1459495232657&cacheVersion=1&api=v2)

On this Page

 
  
 
Implementation Details**

[In-Patient Management (IPD) - Implementer's Guide](/wiki/spaces/BAH/pages/32014606/In-Patient+Management+Module)
