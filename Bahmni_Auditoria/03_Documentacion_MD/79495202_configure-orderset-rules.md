---
id: "79495202"
title: "Configure Orderset rules"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/79495202/configure-orderset-rules"
version: 20
updated: "2016-09-01T08:46:28.265Z"
author: "Lipika Jaskaran Dugar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:18.243Z"
---

# Configure Orderset rules

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/79495202)  
> **Versión del documento:** v20 (2016-09-01T08:46:28.265Z) | **Autor/Editor:** Lipika Jaskaran Dugar

---

## Purpose

Orderset rules to be applied to calculate the dosage that can vary from implementation to implementation. To facilitate that, Rules engine is designed with extensibility in mind. By default Bahmni provides two rules "mg/kg" and "mg/m2" out of the box and these rules can also be configured with the help of csv file. Please check [Using rules](/wiki/spaces/BAH/pages/79495184/Using+rules) link for further information.

## **Extending rules engine with new rules:**

Rules engine can be extended by writing appropriate groovy scripts and deploying at rules engine folder. Rules engine does nothing but transferring calls to its appropriate dosage calculator rule. Dosage calculator rule should adhere to the following interface in order to pickup automatically by the rules engine and apply the calculation.
**DosageRule interface**

```
public interface DosageRule {
     Dose calculateDose(DosageRequest request) throws Exception ;
    }
```

## **A sample groovy rule:**

The following groovy rule is only for illustration purpose. Write a groovy class implementing DosageRule interface and attribute the class with "RuleName" attribute to assign a name for this particular rule. Rule assigned here will automatically populated at the drug order set creation Rules dropdown. If No rule name is assigned using "RuleName" attribute, then class name will be chosen as the rule name by default.
 Expand to see NewRule.groovy

```
package org.openmrs.module.rulesengine.rule 
import org.openmrs.module.rulesengine.domain.DosageRequest 
import org.openmrs.module.rulesengine.domain.Dose 
import org.openmrs.module.rulesengine.domain.RuleName 
@RuleName(name = "testrule") 
class NewDosageRule implements DosageRule 
{ 
@Override 
Dose calculateDose(DosageRequest request) throws Exception
 { // write the new logic for calculating dosage and return Dose object. 
		Patient patient = PatientService.getPatientByUuid(request.getPatientUuid());

       	Double weight = ObservationService.getLatestObsValueNumeric(patient, ObservationService.ConceptRepo.WEIGHT);

       Double roundUpValue = BahmniMath.getTwoDigitRoundUpValue(weight * request.getBaseDose());
       return new Dose(request.getDrugName(),roundUpValue, Dose.DoseUnit.mg);
	} 
}
```

After writing the rule, the same has to be deployed in the appropriate place for the rule engine to pickup automatically.

Rules location
 
All the new rules written in groovy language should be deployed at:

```
/opt/openmrs/bahmni_config/openmrs/rulesengine/rulesengineextension
```
 
After deploying the rules at the above location, restart openmrs for the rules engine to pickup new rules.Existing default rules that are already part of rules engine should already be populated. System must be restarted only for new groovy file based rules.

**

On this Page

 
 
 
Feature Details**

[Using rules](/wiki/spaces/BAH/pages/79495184/Using+rules)

**Related Links**

[Authoring Order Sets](/wiki/spaces/BAH/pages/49545249/Authoring+Order+Sets)
