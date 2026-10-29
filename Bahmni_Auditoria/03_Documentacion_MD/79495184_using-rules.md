---
id: "79495184"
title: "Using rules"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/79495184/using-rules"
version: 18
updated: "2016-12-01T23:38:39.095Z"
author: "Arjun"
category: "Manual_Usuario_Sub_Sub_Sub"
download_date: "2026-10-20T21:02:50.869Z"
---

# Using rules

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/79495184)  
> **Versión del documento:** v18 (2016-12-01T23:38:39.095Z) | **Autor/Editor:** Arjun

---

Each order set can further be customized with 'Rules' to automate the dosage calculation per patient. Applying rule to each drug is facilitated by a separate dropdown called 'Rules'. Existing rules named 'mg/kg' and 'mg/m2' are moved out of 'Base Dose' and populated as part of Rules dropdown. When no rule is chosen from the rules dropdown, which is the default option, the corresponding order set will be applied as it is from the original set.
 
All the existing order sets with **mg/kg** and **mg/m2** rules created prior to the introduction of drug order rules are now *invalid*. **Admin or implementer must edit these order sets to choose the same rules from rules dropdown and save them.**
**
 
All the existing medications prescribed with the help of above order sets stand valid and no migration required.

System provides two rules out of the box as follows and it can be extended further.

**mg/kg:**

User choses 'mg/kg' as the rule to calculate dosage as the product of patient's weight and base dose. When this rule is chosen, base dose unit dropdown disables as the dosage is now always mg/kg.

**mg/m2:**

User choses 'mg/m2' as the rule to calculate dosage with base dose value from the current drug item and the individual patient's BSA (body surface area). base dose unit drop down disables for this rule as well.

**Custom Rule:**

User choses 'CustomRule' to calculate dosages that are completely driven by the external configuration values from a CSV file. Administrator specifies customized dosages for patients whose weights and ages falls in certain ranges. 

| Name | min_weight | max_weight | min_age | max_age | dosage | rule |
| --- | --- | --- | --- | --- | --- | --- |
| drug1 | 1 | 5 | 1 | 12 | 10 | mg/kg |
| drug2 | 20 | 60 | 20 | 40 | 8 | mg/m2 |
| drug3 | 20 | 25 | 15 | 60 | 150 | block |

The above table data is only illustration purpose only and the real configuration will be done by the administrator per implementation. From the above table, the first drug 'drug1' is configured to apply 'mg/kg' rule for the patient whose weight rage is 1 to 5 and age range is 1 to 12. Base dose to be used is 10 mg. when the clinician choses the order set with the item values as drug1, the patient's weight is 4 and his/her age is 5, the final dosage will be 10x5=50mg. The specific rule called 'block' is used to directly apply the given dosage for the patient without any calculation.

while configuring custom rule, orderset name from bahmni admin page and its corresponding csv file name should match, otherwise system will throw error saying  csv file with the name as orderset name is not found.
 
**CSV file for applying dosage rules must be stored at the folder path: /opt/openmrs/bahmni_config/openmrs/rulesengine/drugorderrules**

**Please note:**

** 1. csv file name must match exactly with the bahmni orderset name.**

** 2. Rule definition must be present from the csv file for all the "drugs" from the order set thats being used, otherwise system throws error as "rule not defined". **
**
**
when the system is extended with new rules as the requirement of the individual hospital, the new rule can dynamically configured in the csv file and rules engine will automatically pickup the corresponding rule to apply while creating medication.

 
**Please note that Bahmni configuration for each implementation can vary drastically. The rules and its corresponding dosage values can be customized appropriately to the individual implementation.**
**
**Feature Details**

[Order Sets - Feature Guide](/wiki/spaces/BAH/pages/47022141/Order+Sets)

**Implementation Details**

[Configure Orderset rules](/wiki/spaces/BAH/pages/79495202/Configure+Orderset+rules)

**Related Links**

[Authoring Order Sets](/wiki/spaces/BAH/pages/49545249/Authoring+Order+Sets)
