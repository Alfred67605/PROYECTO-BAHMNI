---
id: "115414301"
title: "Using Conditions List"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115414301/using-conditions-list"
version: 5
updated: "2017-11-07T12:12:45.526Z"
author: "Sruti Sridhar"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:20.407Z"
---

# Using Conditions List

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115414301)  
> **Versión del documento:** v5 (2017-11-07T12:12:45.526Z) | **Autor/Editor:** Sruti Sridhar

---

## About the Feature

Conditions list is a list of conditions that the patients has suffered or is suffering from which will have a long term impact on the health-care delivery decisions for the patient.

Conditions is the most important clinical information of a patient. Bahmni provides the ability to capture and edit conditions for patients on the diagnoses tab inside clinical consultation. Clinicians can use this feature to capture conditions of patients and manage their old conditions. In the database these conditions can be mapped to ICD-10 codes for reporting purposes.

## Used By

It is used by the doctors for recording conditions for the patient.

## How is it used?

On the Diagnoses page, there is a separate box for recording conditions. The doctor has to search for the condition through this autocomplete search box and select the condition they want to record for the patient. The doctor then has to select the status of the condition (Active, Inactive, History-of), the start date (optional) and they can also add a note (optional) to the condition and click on "Add". On clicking "Save", the condition is added to the patient's condition list.

Also, a confirmed encounter diagnosis can be moved to the conditions list. Once a diagnosis is recorded with the status as confirmed, "Add as Condition" button appears in front of that diagnosis. Clicking on this adds the corresponding condition to the patient's condition list.

![](https://bahmni.atlassian.net/wiki/download/attachments/115414301/Screen%20Shot%202017-03-14%20at%2011.55.38%20AM.png?version=1&modificationDate=1489472785173&cacheVersion=1&api=v2)

There is also an ability to associate encounters with one or more conditions to mark the purpose/reason of the visit as “Follow-up” to those conditions. A condition can span multiple visits as long as its status is active. Doctors can now mark an encounter as a follow-up encounter for one or more conditions. When a patient comes to the hospital for follow-up of one of their conditions, the doctor has to click on the "Follow-up" button that is highlighted to depict that the encounter is marked as a follow-up encounter of that condition.

You can find information about hiding condition Lists [here](/wiki/spaces/BAH/pages/32014556/Configure+Diagnosis+Tab).

**Feature Details**

[Conditions List - Feature Guide](https://bahmni.atlassian.net/wiki/display/BAH/Recording+Conditions)
