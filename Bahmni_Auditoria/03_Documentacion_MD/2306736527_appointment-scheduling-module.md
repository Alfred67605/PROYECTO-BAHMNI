---
id: "2306736527"
title: "Appointment Scheduling - Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736527/appointment-scheduling-module"
version: 2
updated: "2021-04-05T09:21:23.776Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:23.864Z"
---

# Appointment Scheduling - Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306736527)  
> **Versión del documento:** v2 (2021-04-05T09:21:23.776Z) | **Autor/Editor:** Bavisetti Venkatesh

---

### Configuration

##### **ColumnsToIgnore apply for this module ( Refer  **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Appointments",
      "type": "appointments",
      "chunkSizeToRead": "500",
      "groupedJobConfigs": [
        {
          "tableName": "appointment_service_default",
          "columnsToIgnore": [
          ]
        }
      ]
}
```

### Existing OpenMRS tables

```
Patient_appontment
Appointment_service
appointment_speciality
patient_appointment_provider
```

### Flattened Mart Tables

##### Note : The below Mart tables are created by customSql job type.

```
patient_appointment_default
appointment_service_default
appointment_speciality_default
service_availability_default
```

#### **Incremental Config:** 

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#4.-Appointments-Job:) section on how to enable/disable incremental config for specific mart tables.

**a)  patient_appointment_default**

| **Column Name** | **Description** |
| --- | --- |
| patient_id | Patient identification number. |
| appointment_id | Id reference for an appointment |
| appointment_location | Location where the appointment is created |
| appointment_provider | Creator of the appointment |
| appointment_service | Service of the appointment |
| appointment_service_duration | Service duration of the appointment |
| appointment_service_type | Service type of the appointment |
| appointment_service_type_duration | Service type duration of the appointment |
| appointment_speciality | Speciality of the appointment |
| appointment_start_time | Start_time of the appointment |
| appointment_status | Status of the appointment |
| appointment_end_time | End time of the appointment |
| appointment_kind | Refers whether it is WalkIn or Scheduled appt. |
| comments | Comments given during appointment creation |

**b) appointment_service_default**

| **Column Name** | **Description** |
| --- | --- |
| appointment_service_id | Id of appointment service |
| location_name | Location of the appointment |
| service_description | Description of the service |
| service_duration | Duration of the service |
| service_starttime | Start time of the service |
| service_endtime | End time of the service |
| service_max_load | Max load of the service |
| service_name | Name of the service |
| service_type | Type of the service |
| service_type_duration | Duration of service type |
| speciality | Speciality of the service |

**c) appointment_speciality_default**

| **Column Name** | **Description** |
| --- | --- |
| speciality_id | Id of speciality |
| speciality | Appointment speciality |

**d) service_availability_default**

| **Column Name** | **Description** |
| --- | --- |
| appointment_service_id | Id of appointment_service |
| availability_start_time | Start time of the availability |
| availability_end_time | End time of the availability |
| availability_day_of_week | Day on which service is available |
| availability_max_load | Max load of the availability |
| service_location | Location of the service |
| service_name | Name of the service |

### Mart views
**a ) patient_appointment_view **

This view combines person_details_default, person_attributes and patient_appointment_default tables. Additionally, age_during_appointment (Date difference between patient_appointment_startdate and  birthdate) and the corresponding age group.

**b ) appointment_admin_panel_view **

This view combines appointment_service_default and service_availability_default
