---
id: "99647502"
title: "Patient Monitoring Tool"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/99647502/patient-monitoring-tool"
version: 28
updated: "2022-11-18T04:20:28.443Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:40.324Z"
---

# Patient Monitoring Tool

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/99647502)  
> **Versión del documento:** v28 (2022-11-18T04:20:28.443Z) | **Autor/Editor:** Gurpreet Luthra

---

**

## Purpose

There are several programs that require the patient to adhere to a particular order of visits, tests or other checks as per a schedule.  In such scenarios, the patient monitoring flowsheet is helpful.It gives a visual representation of the planned treatment schedule for the patient, the patient's current position in the treatment schedule and missed or erroneously captured data.This flowsheet is driven by a trigger that would define the beginning of the schedule. For instance, this could be a date like the date of enrolling the patient into a program or it could be an event, for instance birth of a child.

## Configuration

Patient Monitoring Flowsheet can be configured in two ways based on the requirement

- Patient monitoring flowsheet for Treatment
- Patient monitoring flowsheet for Drugs

### Configuring Patient monitoring flowsheet for Treatment
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"patientMonitoringWithTreatmentStartDate": {
  "displayByDefault": true,
  "maxRecentlyViewedPatients": 1,
  "printing": {
    "title": "EndTB General Patient Monitoring",
    "header": "Patient Monitoring",
    "logo": "../images/bahmniLogo.png",
    "showNameAndImage": true
  },
  "sections": {
    "patientMonitoring": {
      "type": "custom",
      "displayType": "Full-Page",
      "config": {
        "startDateObsConcept" : "TUBERCULOSIS DRUG TREATMENT START DATE",
        "endDateConcept": "EOT, End of Treatment Outcome date",
        "title": "SUMMARY_TITLE_PATIENT_OBSERVATION_CHART",
        "template": "
"
      }
    }
 
  },
  "translationKey": "DASHBOARD_TAB_PATIENT_MONITORING_TREATMENT_START_DATE_KEY"
}
```

| Key | Info | Value Type |
| --- | --- | --- |
| startDateObsConcept | Fully specified name of the concept like treatment start date or the new drug start date. This is the trigger for the normal milestones of the Flowsheet. | Text |
| endDateConcept | Fully specified name of the concept that would mark the end of the flowsheet monitoring. After this the data would no longer be monitored for the patient for the normal milestones. | Text |

### Screenshot of the Patient Monitoring Flowsheet for Treatment
![](https://bahmni.atlassian.net/wiki/download/attachments/99647502/Screen%20Shot%202017-04-18%20at%203.46.27%20PM.png?version=1&modificationDate=1492510626758&cacheVersion=1&api=v2)

### ******

### Configuring Patient monitoring flowsheet for Drugs

Multiple flowsheets can be created on the patient dashboard, each with a different start date concept. In the config below, the drug start date has been used as the start date concept.
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"patientMonitoringWithDrugsStartDate": {
  "displayByDefault": true,
  "maxRecentlyViewedPatients": 1,
  "printing": {
    "title": "EndTB General Patient Monitoring",
    "header": "Patient Monitoring",
    "logo": "../images/bahmniLogo.png",
    "showNameAndImage": true
  },
  "sections": {
    "patientMonitoring": {
      "type": "custom",
      "displayType": "Full-Page",
      "config": {
        "startDateDrugConcepts": ["Bedaquiline"],
        "endDateConcept": "EOT, End of Treatment Outcome date",
        "title": "SUMMARY_TITLE_PATIENT_OBSERVATION_CHART",
        "template": "
"
      }
    }
  },
  "translationKey": "DASHBOARD_TAB_PATIENT_MONITORING_DRUGS_START_DATE_KEY"
}
```

| Key | Info | Value Type |
| --- | --- | --- |
| name | This is the name that will be displayed on the flowsheet rows | Text |
| concepts | Fully specified names of concepts whose observations are required to be present for the question to be marked as available (green) | Text |
| type | "Obs" for all observations and bacteriology results. "Drugs" for drugs | Text |

### Screenshot of the Patient Monitoring Flowsheet for Drugs
![](https://bahmni.atlassian.net/wiki/download/attachments/99647502/Screen%20Shot%202017-04-18%20at%203.48.11%20PM.png?version=1&modificationDate=1492510722657&cacheVersion=1&api=v2)

******

**Milestones:** There are two types of milestones in the config: Fixed milestones and floating/variable milestones.

For fixed milestones, we define the upper and lower bound with respect to the  date "startDateObsConcept". 

Floating milestones get activated or start tracking questions only after a "handler" is specified. For such milestones, we define the upper and lower bound with respect to a "handler". Also, the floating milestones are independent of this "endDateConcept".

| Key | Info | Value Type |
| --- | --- | --- |
| name | This is the name that will be displayed on the flowsheet columns | Text |
| min,max | The upper and lower bound of with respect to the handler/startDateObsConcept | Numeric |
| handler | Currently we support only two handlers: "org.bahmni.flowsheet.definition.impl.TreatmentEndDateHandler" for the End of Treatment milestone. The handler gives the value of " EOT, End of Treatment Outcome date" . "org.bahmni.flowsheet.definition.impl.SixMonthPostTreatmentOutcomeHandler" for the Post treatment 6 months outcome milestone. This handler gives a date 180 days after the end of treatment date, if it is present. | Text |
| questions | "name" of the questions we want to track for the particular milestone | Text |

Add the configurations in openmrs/apps/*clinical/patientMonitoringConfig.json*, 

Below is the content of sample configuration file
patientMonitoringConfig.json file**

```
{
  "questions": [
    {
      "name": "BMI",
      "concepts": [
        "Height (cm)",
        "Weight (kg)"
],
      "type": "Obs"
},
    {
      "name": "Delamanid",
      "concepts": [
        "Delamanid"
],
      "type": "Drug"
},
    {
      "name": "Prison",
      "concepts": [
        "Baseline, Prison"
],
      "type": "Obs"
},
    {
      "name": "MTBDRsl Fluoroquinolone",
      "concepts": [
        "Bacteriology, Fluoroquinolone"
],
      "type": "Obs"
},
    {
      "name": "Isoniazid",
      "concepts": [
        "Isoniazid"
],
      "type": "Drug"
},
    {
      "name": "Hemoglobin g/l",
      "concepts": [
        "Lab, Hemoglobin g/dl"
],
      "type": "Obs"
},
    {
      "name": "Culture result",
      "concepts": [
        "Bacteriology, Culture results"
],
      "type": "Obs"
}
  ],
  "milestones": [
    {
      "name": "M1",
      "config": {
        "min": 0,
        "max": 30
},
      "questions" : [
        "BMI", "Culture result", "Delamanid", "Prison","MTBDRsl Fluoroquinolone","Isoniazid", "Hemoglobin g/l"
]
    },
    {
      "name": "M2",
      "config": {
        "min": 31,
        "max": 60
},
      "questions": [
        "BMI", "Culture result", "Delamanid"
]
    },
    {
      "name": "M3",
      "config": {
        "min": 61,
        "max": 90
},
      "questions": [
        "BMI", "Culture result", "Delamanid", "Prison","MTBDRsl Fluoroquinolone","Isoniazid"
]
    },
    {
      "name": "M4",
      "config": {
        "min": 91,
        "max": 120
},
      "questions": [
        "BMI", "Culture result", "Delamanid","Isoniazid"
]
    },
    {
      "name": "M5",
      "config": {
        "min": 121,
        "max": 150
},
      "questions": [
        "BMI", "Culture result", "Delamanid"
]
    },
    {
      "name": "M6",
      "config": {
        "min": 151,
        "max": 180
},
      "questions": [
        "BMI", "Culture result", "Delamanid"
]
    },
    {
      "name": "MTx",
      "config": {
        "min": -15,
        "max": 15
},
      "handler": "org.bahmni.flowsheet.definition.impl.TreatmentEndDateHandler",
      "questions": [
        "BMI", "Culture result", "Delamanid", "Isoniazid"
]
    },
    {
      "name": "M6M",
      "config": {
        "min": -30,
        "max": 30
},
      "handler": "org.bahmni.flowsheet.definition.impl.SixMonthPostTreatmentOutcomeHandler",
      "questions": [
        "BMI", "Culture result", "Delamanid", "Isoniazid"
]
    }
  ]
}

```

###  Internationalisation of Flowsheet Tab name

Add the value for key in respective home/ locale_${en,fr, .. }.json.
**Add to home/locale_en.json**

```
{
   "DASHBOARD_TAB_PATIENT_MONITORING_TREATMENT_START_DATE_KEY": "Patient Monitoring (T)",
   "DASHBOARD_TAB_PATIENT_MONITORING_DRUGS_START_DATE_KEY": "Patient Monitoring (D)"
}
```

### ** Internationalisation of column headers**

**
Add the values for the following keys in respective clinical/locale_${en, fr, .. }.json. Sample values for the keys are provided below:

In clinical/locale_en.json**

```
{
     "PATIENT_MONITORING_SCHEDULE_TOOL_TITLE": "Patient Monitoring Schedule Tool",
     "PATIENT_MONITORING_REGISTRATION_NUMBER": "Registration Number",
     "PATIENT_MONITORING_REPORT_DATE": "Report Date",
     "PATIENT_MONITORING_EMR_ID": "Patient EMR ID",
     "PATIENT_MONITORING_START_DATE_OF_NEW_DRUG_TREATMENT": "Start date of new drug treatment",
     "PATIENT_MONITORING_START_DATE_OF_MDRTB_TREATMENT": "Start date of MDRTB Treatment",
     "PATIENT_MONITORING_ACTIVE_DRUG_REGIMEN": "Active Drug Regimen",
     "PATIENT_MONITORING_CURRENT_MONTH_OF_NEW_DRUG_TREATMENT": "Current Month of new drug treatment",
     "PATIENT_MONITORING_CURRENT_MONTH_OF_MDRTB_TREATMENT": "Current Month of MDRTB treatment",
     "PATIENT_MONITORING_CURRENT_MONTH": "Current Month",
     "PATIENT_MONITORING_END_OF_TREATMENT": "End of Treatment",
     "PATIENT_MONITORING_PLANNED_MONITORING_SCHEDULE": "Planned Monitoring Schedule",
     "PATIENT_MONITORING_DATE_ADDED": "Data Added",
     "PATIENT_MONITORING_PENDING_DATA_ENTRY": "Pending Data Entry",
     "PATIENT_MONITORING_LEGENDS": "Legends"
 
}
```

On this Page
 
 
 
 

**

Feature Details**

[Patient Monitoring Flowsheet - Feature Guide](/wiki/spaces/BAH/pages/92111338/Patient+Monitoring+Flowsheet)

**Related Display Controls**

 

- [Clinical Observation Controls](/wiki/spaces/BAH/pages/114186103/Clinical+Observation+Controls)
- [Show/Hide Display Controls based on data](/wiki/spaces/BAH/pages/115973098/Show+Hide+Display+Controls+based+on+data)
- [Custom Controls](/wiki/spaces/BAH/pages/93716500/Custom+Controls)
- [In-Patient Department (IPD) Controls](/wiki/spaces/BAH/pages/114204226/In-Patient+Department+IPD+Controls)
- [Lab and Radiology Controls](/wiki/spaces/BAH/pages/114206048/Lab+and+Radiology+Controls)
- [Medication Controls](/wiki/spaces/BAH/pages/114207149/Medication+Controls)
- [Miscellaneous Controls](/wiki/spaces/BAH/pages/114218923/Miscellaneous+Controls)
- [Patient Controls](/wiki/spaces/BAH/pages/114227069/Patient+Controls)
- [Tracking Controls](/wiki/spaces/BAH/pages/114227604/Tracking+Controls)
