---
id: "49545249"
title: "Authoring Order Sets"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545249/authoring-order-sets"
version: 17
updated: "2022-01-19T12:31:26.999Z"
author: "Gurpreet Luthra"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:50.038Z"
---

# Authoring Order Sets

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545249)  
> **Versión del documento:** v17 (2022-01-19T12:31:26.999Z) | **Autor/Editor:** Gurpreet Luthra

---

## About the Feature

Order sets is a feature in the Medications tab of Bahmni's Clinical module. It enables clinicians to group drugs which are frequently ordered together and prescribe the entire set instead of adding each drug. An order set be added, edited, stopped or refilled using the Treatments tab. This feature has been designed to save the users time and effort, by ordering a set of drugs with predefined dosages, routes and frequencies.

### **Used By**

Order sets will be authored by the Hospital Administrator. They will create order sets based on the practices followed in the hospital. Once authored, the order sets will be ready to be used by the doctors to prescribe medicines.

## How is it Used?

Go to Bahmni Admin page and click on Order Sets. This opens the order set authoring page.

![](https://bahmni.atlassian.net/wiki/download/attachments/49545249/Screen%20Shot%202016-04-07%20at%201.01.58%20PM.png?version=1&modificationDate=1460029073860&cacheVersion=1&api=v2)

The name and description of the order set can be defined here. The order set members (drugs) will also be selected and the dose, dose units, frequency, route etc. will also be defined.

 

Auto-calculation
 
While authoring the Order Set, if the base dose of the drug is set to dosage units "mg/kg" or "mg/m2", then while ordering the order sets, the dose of the drug to be given to the patient is automatically calculated based on the patient's weight or body surface area (BSA).

New Enhancement
 
With the introduction of dosage calculation rules, now dosage units "mg/kg" and "mg/m2" are moved to rules dropdown.

Known Issue
 
The Height and weight required for the dosage calculations are taken only from the second page of registration. These values are not picked up if entered in other observation forms. The system must be able to use the latest values recorded for calculating the dosage.

This will be fixed in release 0.90.

**

Examples
 
Example of Order Sets which have been configured at JSS Hospital: [https://github.com/JanSwasthyaSahyog/jss-config/blob/master/openmrs/ordertemplates/templates.json](https://github.com/JanSwasthyaSahyog/jss-config/blob/master/openmrs/ordertemplates/templates.json)

#### Changing sequence of drugs with in an order set

The arrows are used to move the order set members to set a sequence of the drugs in an order set.

![](https://bahmni.atlassian.net/wiki/download/attachments/49545249/Screen%20Shot%202016-04-07%20at%201.03.29%20PM.png?version=1&modificationDate=1460029163938&cacheVersion=1&api=v2)

#### Saving Order Set:

Click on *save* to save the order set to be used from the medication screen.

![](https://bahmni.atlassian.net/wiki/download/attachments/49545249/Pasted%20image%20at%202016_06_22%2012_21%20PM.png?version=1&modificationDate=1466578431021&cacheVersion=1&api=v2)

#### Retiring Order Set

Click on the "X" button against the order set to retire that order set. 

![](https://bahmni.atlassian.net/wiki/download/attachments/49545249/Screen%20Shot%202016-04-07%20at%201.02.09%20PM.png?version=1&modificationDate=1460029161921&cacheVersion=1&api=v2)

 
**Please note that Bahmni configuration for each implementation can vary drastically. The screens and workflows below may not apply to your specific implementation.**

On this Page
 
** **
 

 
**
**Feature Details**

[Order Sets - Feature Guide](/wiki/spaces/BAH/pages/47022141/Order+Sets)

**Related Links**

[Using rules](/wiki/spaces/BAH/pages/79495184/Using+rules)
