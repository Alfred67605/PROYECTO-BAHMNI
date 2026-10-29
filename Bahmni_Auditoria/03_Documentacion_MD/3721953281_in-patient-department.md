---
id: "3721953281"
title: "In-Patient Department"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3721953281/in-patient-department"
version: 2
updated: "2024-08-29T16:36:21.543Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub"
download_date: "2026-10-20T21:06:22.646Z"
---

# In-Patient Department

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3721953281)  
> **Versión del documento:** v2 (2024-08-29T16:36:21.543Z) | **Autor/Editor:** Rahul Ramesh

---

## Overview

The advancement of Electronic Medical Record (EMR) systems has transformed healthcare by enhancing the management of patient information and optimizing clinical processes. Among the various components of an EMR, the In-Patient Department (IPD) module is particularly critical. It plays a pivotal role in elevating the standard of care for in-patients, ensuring that healthcare providers can deliver comprehensive, efficient, and coordinated care throughout a patient’s stay.

## IPD Dashboard

The In-Patient Department (IPD) Dashboard is a critical component in the clinical workflow, providing a centralized interface for managing patient data. It displays comprehensive patient information such as vitals, allergies, diagnoses, treatments, nursing tasks, and drug administration schedules. This guide provides detailed explanations of the configuration settings available for the IPD Dashboard, allowing implementers to tailor the dashboard to meet specific clinical needs.

### Key Fields 
 
The IPD Dashboard configurations should be added to the `app.json` file located in the `standard-config/openmrs/apps/ipdDashboard` subfolder.
 Sample In-Patient Department (IPD) Dashboard Configuration

```
{
  "config": {
    "contactDetails": ["phoneNumber"],
    "enable24HourTimers": true,
    "drugChartScheduleFrequencies": [
      {
        "name": "Twice a day",
        "frequencyPerDay": 2,
        "scheduleTiming": [
          "6:00",
          "18:00"
        ]
      },
      {
        "name": "Thrice a day",
        "frequencyPerDay": 3,
        "scheduleTiming": [
          "6:00",
          "14:00",
          "22:00"
        ]
      },
      {
        "name": "Four times a day",
        "frequencyPerDay": 4,
        "scheduleTiming": [
          "6:00",
          "12:00",
          "18:00",
          "23:45"
        ]
      }
    ],
    "drugChartStartTimeFrequencies": [
      "Immediately",
      "Once a day",
      "Every Hour",
      "Every 2 hours",
      "Every 3 hours",
      "Every 4 hours",
      "Every 6 hours",
      "Every 8 hours",
      "Every 12 hours",
      "On alternate days",
      "Once a week",
      "Twice a week",
      "Thrice a week",
      "Every 2 weeks",
      "Every 3 weeks",
      "Once a month",
      "Five times a day",
      "Four days a week",
      "Five days a week",
      "Six days a week"
    ]
  },
  "sections": [
    {
      "title": "Vitals and Nutritional Values",
      "componentKey": "VT",
      "displayOrder": 1,
      "refreshKey": 1
    },
    {
      "title": "Allergies",
      "componentKey": "AL",
      "displayOrder": 2,
      "refreshKey": 2
    },
    {
      "title": "Diagnosis",
      "componentKey": "DG",
      "displayOrder": 3,
      "refreshKey": 3
    },
    {
      "title": "Treatments",
      "componentKey": "TR",
      "displayOrder": 4,
      "refreshKey": 4
    },
    {
      "title": "Nursing Tasks",
      "componentKey": "NT",
      "displayOrder": 5,
      "refreshKey": 5
    },
    {
      "title": "Drug Chart",
      "componentKey": "DC",
      "displayOrder": 6,
      "refreshKey": 6
    }
  ],
  "nonMedicationTaskTypes": ["Measurement procedure", "Medication administration assessment", "Multidisciplinary assessment"],
  "nursingTasks": {
    "timeInMinutesFromNowToShowTaskAsRelevant": 30,
    "timeInMinutesFromNowToShowPastTaskAsLate": 60,
    "timeInMinutesFromStartTimeToShowAdministeredTaskAsLate": 60
  },
  "drugChart": {
    "timeInMinutesFromNowToShowPastTaskAsLate": 60,
    "timeInMinutesFromStartTimeToShowAdministeredTaskAsLate": 60
  },
  "drugChartSlider": {
    "timeInMinutesToDisableSlotPostScheduledTime": 60
  },
  "enable24HourTime": false,
  "medicationTags": {
    "asNeeded": "Rx-PRN",
    "Immediately": "Rx-STAT",
    "default": "Rx",
    "emergency": "EMERG"
  },
  "shiftDetails": {
    "1": { "shiftStartTime": "08:00", "shiftEndTime": "19:00" },
    "2": { "shiftStartTime": "19:00", "shiftEndTime": "08:00" }
  },
  "intakeOutputConfig": {
    "periodDetails": {
      "startTime": "08:00",
      "durationInHours": "24"
    },
    "normalHighValue": 10000,
    "normalLowValue": 0,
    "timeConceptNames": ["Intake Date & Time", "Output Date & Time"],
    "intakeRouteConcept": "Intake Route",
    "intakeQuantityConcept": "Intake Quantity",
    "outputRouteConcept": "Output Route",
    "outputQuantityConcept": "Output Quantity",
    "dashboardConfig": {
      "numberOfVisits": 10,
      "conceptNames": ["Intake Section", "Output Section"]
    }
  },
  "vitalsConfig": {
    "latestVitalsConceptValues": {
      "spO2": "Arterial Blood Oxygen Saturation (Pulse Oximeter)",
      "weight": "Weight (kg)",
      "bmi": "Body mass index",
      "respiratoryRate": "Respiratory Rate",
      "systolicPressure": "Systolic blood pressure",
      "diastolicPressure": "Diastolic blood pressure",
      "temperature": "Temperature",
      "pulse": "Pulse",
      "height": "Height (cm)"
    },
    "vitalsHistoryConceptValues": {
      "spO2": "Arterial Blood Oxygen Saturation (Pulse Oximeter)",
      "weight": "Weight (kg)",
      "bmi": "Body mass index",
      "respiratoryRate": "Respiratory Rate",
      "systolicPressure": "Systolic blood pressure",
      "diastolicPressure": "Diastolic blood pressure",
      "temperature": "Temperature",
      "pulse": "Pulse",
      "height": "Height (cm)",
      "muac": "Mid-upper arm circumference"
    }
  }
}

```

#### General Configuration

```
{
  "config": {
      "contactDetails": ["phoneNumber"],
      "enable24HourTimers": true,
  }
}
```

| **Key** | **Uses** | **Mandatory** |
| --- | --- | --- |
| contactDetails | Defines the contact details that are displayed on the Patient Header section, such as phone numbers or other relevant patient communication methods. | False |
| enable24HourTime | A boolean flag that determines whether timers are displayed in a 24-hour format. | False |

#### Drug Chart Configuration

##### drugChartScheduleFrequencies

Specifies predefined medication schedule frequencies that appear in the Drug Chart section. 

```
"drugChartScheduleFrequencies": [
      {
        "name": "Twice a day",
        "frequencyPerDay": 2,
        "scheduleTiming": [
          "6:00",
          "18:00"
        ]
      },
]
```

| **Key** | **Uses** | **Mandatory** |
| --- | --- | --- |
| name | Name of the frequency | True |
| scheduleTiming | When the medication is to be administered in 24 hour format. |  |
| frequencyPerDay | Number of times the medication is to be administered per day | True |

##### drugChartStartTimeFrequencies

Lists available options for when to start a medication administration schedule. 

```
"drugChartStartTimeFrequencies": [
      "Immediately",
      "Once a day",
      "Every Hour",
      "Every 2 hours",
      "Every 3 hours",
      "Every 4 hours",
      "Every 6 hours",
      "Every 8 hours",
      "Every 12 hours",
      "On alternate days",
      "Once a week",
      "Twice a week",
      "Thrice a week",
      "Every 2 weeks",
      "Every 3 weeks",
      "Once a month",
      "Five times a day",
      "Four days a week",
      "Five days a week",
      "Six days a week"
]
```

#### Section Configuration

This part of the configuration determines the layout and content of the IPD Dashboard. Each section corresponds to a key area of patient management. You can read more about the different sections in IPD Dashboard [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3719102466/IPD+Dashboard#Overview-of-IPD-Dashboard-Sections).

```
"sections": [
    {
      "title": "Vitals and Nutritional Values",
      "componentKey": "VT",
      "displayOrder": 1,
      "refreshKey": 1
    },
    {
      "title": "Allergies",
      "componentKey": "AL",
      "displayOrder": 2,
      "refreshKey": 2
    }
  ]
```

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| title | The display name of the section on the dashboard. | Yes |
| componentKey | A unique identifier for the section, used internally to distinguish between different components. | Yes |
| displayOrder | Defines the order in which the section appears on the dashboard. A lower number places the section higher up. | Yes |
| refreshKey | A unique identifier that allows for refreshing the section's data. | Yes |

Here are the `title` and `componentKey` pairs available in the IPD Dashboard:

- 
**Vitals and Nutritional Values**: `VT`

- 
**Allergies**: `AL`

- 
**Diagnosis**: `DG`

- 
**Treatments**: `TR`

- 
**Nursing Tasks**: `NT`

- 
**Drug Chart**: `DC`

#### Nursing Task Configuration

This part of the configuration determines the various configurable elements of the Nursing Tasks Section of the IPD Dashboard.

##### nonMedicationTaskTypes

Lists the tasks type concepts that are not related to medication but are important for patient care, such as assessments or procedures.

```
"nonMedicationTaskTypes": ["Measurement procedure", "Medication administration assessment", "Multidisciplinary assessment"]
```

 
All non-medication task types should be added under the concept set named "All Nursing Tasks." This concept set serves as a convenient placeholder for various nursing-related tasks, which is to be defined and managed by the implementer. To add non-medication task types via the initializer, please refer to the sample provided [here](https://github.com/Bahmni/standard-config/blob/master/masterdata/configuration/concepts/taskTypes_example.csv).

##### nursingTasks

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| timeInMinutesFromNowToShowTaskAsRelevant | The window in minutes before a task is due that it should be highlighted as relevant. | True |
| timeInMinutesFromNowToShowPastTaskAsLate | The window in minutes after which a past task is marked as late. | True |
| timeInMinutesFromStartTimeToShowAdministeredTaskAsLate | The window in minutes after the start time within which a task must be administered before it is marked as late. | True |

#### Drug Chart Configuration

This part of the configuration determines the various configurable elements of the Drug Chart Section of the IPD Dashboard.

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| timeInMinutesFromNowToShowPastTaskAsLate | This defines the time window after which past drug administration tasks are marked as late. | Yes |
| timeInMinutesFromStartTimeToShowAdministeredTaskAsLate | Time window in minutes after which an administered drug task is marked as late if not completed. | Yes |
| timeInMinutesToDisableSlotPostScheduledTime | Defines the time after the scheduled time when the slot for administering a medication becomes disabled. | Yes |

#### Medication Tags Configuration

Defines labels or tags used to categorize medications on the dashboard.

```
"medicationTags": {
    "asNeeded": "Rx-PRN",
    "Immediately": "Rx-STAT",
    "default": "Rx",
    "emergency": "EMERG"
}
```

#### Shift Details Configuration

Defines the start and end times of shifts within the hospital, which is crucial for scheduling tasks and medication administration.

```
"shiftDetails": {
    "1": { "shiftStartTime": "08:00", "shiftEndTime": "19:00" },
    "2": { "shiftStartTime": "19:00", "shiftEndTime": "08:00" }
},
// This configuration creates two shifts: one from 08:00 to 19:00 and another from 19:00 to 08:00.
```

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| shiftStartTime | Specifies the shift start time for a particular shift. | True |
| shiftEndTime | Specifies the shift end time for a particular shift. | True |

#### Intake/Output Configuration

Defines the configurations related to Input/Output display control.

```
"intakeOutputConfig": {
    "periodDetails": {
      "startTime": "08:00",
      "durationInHours": "24"
    },
    "normalHighValue": 10000,
    "normalLowValue": 0,
    "timeConceptNames": ["Intake Date & Time", "Output Date & Time"],
    "intakeRouteConcept": "Intake Route",
    "intakeQuantityConcept": "Intake Quantity",
    "outputRouteConcept": "Output Route",
    "outputQuantityConcept": "Output Quantity",
    "dashboardConfig": {
      "numberOfVisits": 10,
      "conceptNames": ["Intake Section", "Output Section"]
    }
}
```

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| periodDetails | Configures the period timings for intake and output measurements, including the start time (`startTime`) and duration (`durationInHours`). | Yes |
| normalHighValue | Defines the normal high value for intake/output measurements. | Yes |
| normalLowValue | Defines the normal low value for intake/output measurements. | Yes |
| timeConceptNames | The names of the concepts used to track the time of intake and output events. | Yes |
| intakeRouteConcept | Configures the concept names used to capture intake routes. | Yes |
| intakeQuantityConcept | Configures the concept names used to capture output quantities. | Yes |
| outputRouteConcept | Configures the concept names used to capture output routes. | Yes |
| outputQuantityConcept | Configures the concept names used to capture output quantities. | Yes |
| dashboardConfig | Additional configurations related to how intake and output data is displayed on the dashboard. | Yes |

##### dashboardConfig

Additional configurations related to how intake and output data is displayed on the dashboard.

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| numberOfVisits | Defines how many visits' data are to be show. | Yes |
| conceptNames | Configures the concept names used to capture intake and output data. | Yes |

#### Vitals Configuration

##### latestVitalsConceptValues

Maps the latest vital signs to their corresponding concept names.

```
"vitalsConfig": {
    "latestVitalsConceptValues": {
      "spO2": "Arterial Blood Oxygen Saturation (Pulse Oximeter)",
      "weight": "Weight (kg)",
      "bmi": "Body mass index",
      "respiratoryRate": "Respiratory Rate",
      "systolicPressure": "Systolic blood pressure",
      "diastolicPressure": "Diastolic blood pressure",
      "temperature": "Temperature",
      "pulse": "Pulse",
      "height": "Height (cm)"
    }
}
```

##### vitalsHistoryConceptValues

Maps historical vital sign data to their corresponding concept names, allowing the display of historical trends.

```
"vitalsConfig": {
   "vitalsHistoryConceptValues": {
      "spO2": "Arterial Blood Oxygen Saturation (Pulse Oximeter)",
      "weight": "Weight (kg)",
      "bmi": "Body mass index",
      "respiratoryRate": "Respiratory Rate",
      "systolicPressure": "Systolic blood pressure",
      "diastolicPressure": "Diastolic blood pressure",
      "temperature": "Temperature",
      "pulse": "Pulse",
      "height": "Height (cm)",
      "muac": "Mid-upper arm circumference"
    }
}
```

# Events Config

Non-Medication Tasks are specific actions required to be performed for a patient that do not involve administering medication. These tasks are critical for patient care and can include a wide range of activities, such as monitoring vital signs, repositioning patients, or other care-related duties.

There are two primary methods through which Non-Medication Tasks are created:

- 
**Manually Created Tasks**: Initiated by nursing staff to address specific care needs of an admitted patient.

- 
**Automated Tasks**: System-generated tasks triggered by events such as patient admission, shift changes, or patient movement.

 
To generate system-generated tasks triggered by events such as patient admission, shift changes, or patient movement add the following configuration to the `openmrs/apps/ipdDashboard/eventsConfig.json`.

```
[
  {
    "event": "PATIENT_ADMIT",
    "tasks": [
      {
        "name": "Collect patient history",
        "type": "Multidisciplinary assessmen"
      }
    ]
  }
]
```

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| event | Defines the event which will trigger the following tasks to be created for the patient | Yes |
| tasks | Defines the an array of tasks that gets created when an event occurs | Yes |
| name | Name of the event | Yes |
| type | Defines the tasks type concept that the task is related to | No |

# Care View Dashboard

The Careview Dashboard, also referred to as the Ward Level Dashboard, is a centralized interface designed to streamline patient management within a specific ward. This dashboard consolidates relevant patient information, including medication and non-medication tasks, for in-patient department (IPD) patients admitted to a particular ward. 

This guide provides a detailed explanation of the configuration options available in the `app.json` file under the `/openmrs/apps/careViewDashboard` directory. Each key and its functionality are explained in detail to ensure that implementers can effectively customize the dashboard. 

Below is the JSON structure and an explanation of each key.

```
{
  "pageSizeOptions": [10,20,30,40,50],
  "defaultPageSize": 10,
  "timeframeLimitInHours": 2
}
```

| **Key** | **Usage** | **Mandatory** |
| --- | --- | --- |
| pageSizeOptions | Defines the available options for the number of patient records displayed per page | Yes |
| defaultPageSize | Specifies the default number of patient records that will be displayed per page when the dashboard is loaded. | Yes |
| timeframeLimitInHours | Configures the time window, in hours, for which the dashboard will display medication and non medication tasks | Yes |

## Conclusion

The IPD is highly customizable, allowing healthcare facilities to tailor the interface to their specific workflows. By understanding and utilizing the configuration settings detailed in this guide, implementers can ensure the dashboard meets the clinical needs of the institution, improving both usability and patient care.
