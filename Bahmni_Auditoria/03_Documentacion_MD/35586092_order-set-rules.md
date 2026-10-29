---
id: "35586092"
title: "Order Set Rules"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/35586092/order-set-rules"
version: 5
updated: "2017-11-08T01:03:12.043Z"
author: "Himabindu Akkinepalli"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:38.714Z"
---

# Order Set Rules

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/35586092)  
> **Versión del documento:** v5 (2017-11-08T01:03:12.043Z) | **Autor/Editor:** Himabindu Akkinepalli

---

|   |   | e.g. | managed |
| --- | --- | --- | --- |
| Concepts | Concepts involved in the calculated observations | Weight, Height | standardised using CIEL dictionary the concept have same UUID as in CIEL dictionary the concepts should be provided by a project called bahmni-clinical-content the implementation should be able to choose the concepts they want to use |
| Order Set |   | CAF Cancer Regimen | should be provided from bahmni-content to be chosen by the implementations individually depend on concepts and calculated observations |
| Rules |   | for now small snippets of groovy functions | these should be present in the order set member for simple rules which are based on concepts or calculated observations the java code should do an eval on these functions it should look for the calculated observations already present for the patient |
| Calculated Observations |   |   |   |

**Rules Engine:
In order to calculate dosage, this module expects specific concepts to be present in the system. The concepts that are currently used are Weight and Height. Rules Engine identifies these concepts by their UUIDs.
By default, they are identified by the CEIL dictionary concept uuids.
There are 2 options:
1) Update existing concepts with CIEL dictionary UUIDs:
     For this, an Implementation can update specific and existing concepts to have the CEIL dictionary uuids.
     SQL for updating existing concepts:
          If you already have "Weight" and "Height" concepts, you can run the below SQLs. Note, the names must be exactly the same in the below specified SQLs.
             update concept set uuid="5090AAAAAAAAAAAAAAAAAAAAAAAAAAAA" where concept_id in (
             select concept_name.concept_id from concept_name where name="Height" and concept_name_type="FULLY_SPECIFIED");
             update concept set uuid="5089AAAAAAAAAAAAAAAAAAAAAAAAAAAA" where concept_id in (
             select concept_name.concept_id from concept_name where name="Weight" and concept_name_type="FULLY_SPECIFIED");
2) Implementation can specify the existing concepts UUIDs. To do this, you need a properties file specifying the concept UUIDs.
    Path of the properties file: /opt/openmrs/rulesengine-concept.properties or /<user.home>/.OpenMRS/rulesengine-concept.properties
    Content of the properties file:
       Key: concept.<name of the concept>.uuid
       Value: <uuid of the concept in the implementation>
       Example:          concept.weight.uuid=b5449362-1f23-4d28-b787-51d8a77aa325
                                concept.height.uuid=55d28a7i9-a325-1f23-4d28-b787b5449362

3) By default latest Height and Weight captured across visits will be taken for calculating the dosage. If one want the Height and Weight values to be used from the current visit then set the below value to *true* in *medication.json*

 
   ** Expand source 
 
 
  
```
"orderSet": {
        "calculateDoseOnlyOnCurrentVisitValues": false
      }
```
