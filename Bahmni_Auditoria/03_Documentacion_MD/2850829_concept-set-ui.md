---
id: "2850829"
title: "Concept Set UI"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2850829/concept-set-ui"
version: 11
updated: "2017-07-08T14:50:46.853Z"
author: "Dominic Surrao"
category: "Arquitectura_Sub_Sub"
download_date: "2026-10-20T21:06:30.725Z"
---

# Concept Set UI

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2850829)  
> **Versión del documento:** v11 (2017-07-08T14:50:46.853Z) | **Autor/Editor:** Dominic Surrao

---

We are dealing with OpenMRS Concepts for various purposes by different types of users.**- Diagnoses: search and specify during consultation
- Tests: (Radiology/Lab) search and specify during consultation
- Drugs: search and specify treatment
- Notes by doctors/nurses
- Obs: as observations. e.g. Vitals recording by nurse, nurse/doctor noting down complaints/symtoms, screens noting down preliminary observations, intake/outtake etc.

The storage of such observations are done as below.
- Drugs/tests as Orders (Order table), results as observations (Obs table) tied to orders
- Others are stored as observations within encounters - diagnoses, vitals, any other notes, intake/outtake etc.

This document specifically discusses setup/display/behavior/storage of observations that should be recorded through a "Concept-set-UI"

**Setup:**
- the setup of the schema is defined in OpenMRS.

For example: observations to be done in a Vitals recording UI can be defined in OpenMRS as a VITALS_CONCEPT of class 'ConvSet'

***VITALS_CONCEPT*** (is set = true, Class = ConvSet or Misc, Datatype = N/A, with set members below)

-  BP (is set = true, Class = Finding or Symptom/Finding, Datatype = N/A, with set members below)
  Systolic (Class = Finding, Datatype = Numeric, Absolute High = 160, Normal High = 120, Absolute low = 90)
-   Diastolic (Class = Finding, Datatype = Numeric, Absolute High = 110, Normal High = 120, Absolute low = 70)

-  Temperature  (Class = Finding, Datatype = Numeric)
-  Last Visit (Class = Misc, Datatype = Date)

The above concept-set (VITALS_CONCEPT) can be used in Bahmni Apps to records vitals for a patient.
Usually, through configuration. For example in clinical->consultation the vitals tab can be configured as an extension

```
{
    "id": "bahmni.clinical.consultation.vitals",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Vitals",
    "url": "concept-set/vitals_concept",
    "icon": "icon-user-md",
    "order": 6,
    "requiredPrivilege": "app:clinical"
}
```

In the above example, the url can be routed to a handler of "concept-set" with "vitals_concept" as argument indicating the concept-set to render.

While rendering the UI, we need to read and interpret the schema defined above. In addition to this, we also need the UI to be capable of doing the following UI level interactions.
* Input kind - numeric, text, date time, single select, multi select
* Validation - default, supported only for numeric datatypes in OpenMRS. Overridable or not?
* Display - group by sections, group by observation, display description and how
* required - whether mandatory or not

To configure all the above, we will have definitions associated with concepts that will govern the display and behavior in "Concept-set" UIs.
For each concept to be rendered on UI, we will have an associated configuration. All such configurations will be in a single file.

```
{
    "Symptoms" : {
        "autocomplete": true,
        "multiselect": {
           "type" : grid
        },
        "abnormalIndicator": true
        "validator": null
    },
    "Temperature": {},
    "BP" : {

       "required":true,
        "validator": {
            "validate": function(context) {
                //implementation specific
                //if context.patient.age > 18 and context.patient.gender = 'F', return [false, "blood pressure too high"]
            }
        }
    },
    "Chief Complaints" : {
        "dropdown": true
      },
```

```
 "defaults" : {
      "Number of living children" : 1,
      "Accepted Family Planning methods": ["Condoms", "Pills"],
      "Pain management given": true,
      "Safe Abortion, Remarks": "Remarks",
      "Malaria, Death Date": "2015-12-01"
   }
```

```
}
```

NOTE: "abnormalIndicator" is under discussion and maybe changed if we decide to move it as part of schema definition (OpenMRS concept definition).

Default behaviors:
select : for any concept-set member of datatype "Coded", the answers are given as options in a single select dropdown.
multi-select : must be mentioned in configuration like above for a given concept. The control by default is a dropdown. For grid, we will have a special control.
autocomplete: for any concept-set member of datatype "Coded", the answers are eligible for autocomplete.
dropdown: for any concept-set member of datatype "Coded", the answers are eligible for dropdown.

"**defaults**" section contains the default values that concept can contain in the form. Key must be concept full name and value is the default value for each concept.

**Persistence:**

All observations are stored against an encounter by a provider. For observations coming out of a Concept-set interface, there would be several observation groups created depending on how a concept-set is defined in OpenMRS.

For example, think of an UI through which some observations maybe done in Cardiology

C**ardiology_Questionaire > CardiologyConceptSet**

- Temperature (Numeric) > TemperatureConcept
- Allergies (DataType: Coded,  answers: Dust, pollen, Shrimp) > AllergiesConcept
- BP (ConceptSet ) > BPConceptSet
Systolic > SystolicConept
- Diastolic > DiastolicConept

###  

Observations for an Encounter : E1, maybe stored in database using ObsGroup structure as below (NOTE: there would be another level of obsgroup when combined with abnormal observation)

**Obs1 > CardiologyConceptSet**

- Obs2 > Parent:Obs1 - Value:101 > TempConcept
- Obs3 > Parent:Obs1 - Value:Dust > AllergiesConcept
- Obs4 > Parent:Obs1 - Value:Pollen > AllergiesConcept
- Obs5 > Parent:Obs1 - > BPConceptSet
Obs6 > Parent:Obs5 - value:79   > SystolicConept
- Obs7 > Parent:Obs5 - value:120  > DiastolicConept

**Ability to configure future dates as permissible on date fields:**

To allow future dates in the concepts of datatype "date" or "datetime" , set the allowFutureDates to true in the conceptSetUI in app.json. By default future dates are not allowed in date fields.

For example in clinical/app.json

```
"config": {
		"conceptSetUI" : {
					"Tuberculosis, Next Followup Visit": {
    					"allowFutureDates": true
						},
					"Datetime" : {
						"allowFutureDates": false
						}
				}

}
```

**Ability to Disable the Notes  for particular concept in Observation Form**

**  **Currently Notes icon is by default displayed for all the concepts. Concepts of dataType Text and Image are exceptional. In order to configure the notes to be disabled for particular concept in the observation form use the below configuration. Default behaviour is to show the notes always.

For example: In clinical/app.json

```
"config": {
		"conceptSetUI" : {
			
				"Visual acuity, left eye" : {
						   "disableAddNotes": true
						}
		}
}
```

| Key | Value |
| --- | --- |
| Visual acuity, left eye | Fully specified name of the concept |
| ``` disableAddNotes ``` | Configuration to disable notes (default is to show the notes) |

https://bahmni.atlassian.net/wiki/display/BAH/app.json

https://bahmni.atlassian.net/wiki/display/BAH/app.json

Related links**

[app.json](https://bahmni.atlassian.net/wiki/display/BAH/app.json)
