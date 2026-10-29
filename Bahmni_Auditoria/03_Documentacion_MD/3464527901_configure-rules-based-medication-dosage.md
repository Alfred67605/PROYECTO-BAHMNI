---
id: "3464527901"
title: "Configure rules based medication dosage"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3464527901/configure-rules-based-medication-dosage"
version: 8
updated: "2024-08-29T07:02:59.958Z"
author: "Parvathy Babu"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:19.055Z"
---

# Configure rules based medication dosage

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3464527901)  
> **Versión del documento:** v8 (2024-08-29T07:02:59.958Z) | **Autor/Editor:** Parvathy Babu

---

**Business context :**

The ability of the doctor to specify certain rules like calculation of dosage based on the weight of the patient currently exist in the order set. We would like to extend the feature when the doctor is prescribing individual medication as well. 

To calculate medication dosage prescribed for a patient based on weight of the patient (mg/kg).

Step 1 : Capture weight of the patient. 

Step 2: Choose rule “mg/kg” . 

Step 3 : Enter dose . For example “2” . This implies that 2mg per kg of total patient’s weight should be administered . For example, if the weight of the patient is 30 kg and the rule selected is mg/kg and the dose entered is 2 , then the system will multiple 30*2 = 60 mg which needs to be administered to the patient.  
   

So here the dose is calculated based on the patient weight.
[drug calculation.mov](/wiki/download/attachments/3464527901/drug%20calculation.mov?version=1&modificationDate=1714717567746&cacheVersion=1&api=v2&width=760)
#### 
**Steps: (To Enable the rule field and the dropdown values)**

- 
In config file openmrs/apps/clinical/medication.json include this `“showRulesInMedication”: true`. This config enables the Dosage Rule field in Medication Page in Order Drug accordion.

- 
To enable the drop-down. Follow this:[Order Set Rules](/wiki/spaces/BAH/pages/35586092/Order+Set+Rules) 

Include the below values in **rulesengine-concept.properties **file

**concept.weight.uuid**=${WEIGHT_CONCEPT_UUID}

- 
**concept.height.uuid**=${HEIGHT_CONCEPT_UUID}

- 
We have provided ability to set units for the dosage rules we select. If no units are mentioned then we will see all the units by default for that dosage rule.

 **For Example:**  “mg/kg“ has “mg” and “ml” as their **dosageRuleUnitsMap. **Then in the medication dose units dropdown we will get only these two as the dropdown values.
![](https://bahmni.atlassian.net/wiki/download/attachments/3464527901/Screenshot%202024-05-29%20at%202.42.23%E2%80%AFPM.png?version=1&modificationDate=1716973958910&cacheVersion=1&api=v2)

**Note: **

In the medications Page, if you wish to prescribe a medication keeping frequency, duration and duration unit as optional, the route of those medication can be added in `continuousMedicationRoutes` configuration as shown below as an example.

```
{
  ...
  "tabConfig": {
    ...
      },
  "inputOptionsConfig": {    
    "continuousMedicationRoutes": ["Intravenous", "Inhalation"]
  }
}
```
