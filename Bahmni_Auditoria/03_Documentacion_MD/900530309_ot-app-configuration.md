---
id: "900530309"
title: "OT App Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530309/ot-app-configuration"
version: 7
updated: "2024-05-13T13:08:52.930Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:41.671Z"
---

# OT App Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/900530309)  
> **Versión del documento:** v7 (2024-05-13T13:08:52.930Z) | **Autor/Editor:** Rahul Ramesh

---

You can do additional configuration of OT application through "app config".  

These configuration must be done in your implementation specific "bahmni_config". 

Path on server:  **/var****/www/bahmni_config/openmrs/apps/ot/app.json**

**Example: [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/ot/app.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/ot/app.json)****

# Key Fields

| Key | Use | Mandatory |
| --- | --- | --- |
| id | Some unique ID for this block. | Yes |
| **Extension Params** |  |  |
| ``` ignoredTabularViewHeadings ``` | To ignore columns when viewing patient search queues in tabular view | No |
| defaultViewAsSurgeonBased | Setting below config as `true` would show the “provider” view as the default view in the calendar view, otherwise it will be OT view. | No |
| ``` identifierHeadings ``` | To set a particular column as an identifier when viewing patient search queue in tabular view | Yes |
| ``` patientDashboardUrl ``` | When user wants to edit a surgical appointment, the link can be configured to any url configured with additional context passed through query parameters. | Yes |
| primarySurgeonsForOT | The configuration is an array of surgeon names. The name correspond to the person name of the provider that you have configured in OpenMRS provider management module. | No |
| printListViewTemplateUrl | The print html is configurable to allow to custom print the columns or information needed. | Yes |
| calendarView | The start time, end time and the interval of the calendar are configurable. The start time and end time are in 24 hr formats with hours and minutes separated by ‘:’. The dayViewSplit is the interval to be configured in minutes. | No |
| startOfWeek | Start day of the week ("Monday") | No |
| additionalCustomParam | To exhibit the primary diagnosis of a patient in list view, where a patient has multiple primary diagnoses recorded | No |

# Configure patient dashboard link for the Patient Id
Config**

```
“patientDashboardUrl”:{
   “Link”: ”link to patient dashboard”,
   “errorMessage”: ”custom error message”
}
```

When user wants to edit a surgical appointment, the link can be configured to any url configured with additional context passed through query parameters. See a sample configuration below:
**Config**

```
"patientDashboardUrl": {
   "link": "/bahmni/clinical/#/programs/patient/{{patientUuid}}/dashboard?dateEnrolled={{dateEnrolled}}&programUuid={{programUuid}}&enrollment={{enrollment}}&currentTab=DASHBOARD_TAB_PATIENT_SUMMARY_KEY"
  "errorMessage": "The patient is not enrolled to the program"
}
```

# Configure surgeons available for OT scheduling

Surgeon names in OT module are configurable. The configured surgeon names are listed while creating a new OT block and also in the surgeon filter. The configuration is an array of surgeon names. 

The name correspond to the person name of the provider that you have configured in OpenMRS provider management module. 
**Config**

```
"primarySurgeonsForOT" : ["Yogesh Jain","Anjali Sharma"]
```

# Custom HTML template for printing

The list view in "OT Scheduling" has a print button for users to print the appointments listed. The print html is configurable to allow to custom print the columns or information needed. 
**Config**

```
"printListViewTemplateUrl" : "/bahmni_config/openmrs/apps/ot/printListView.html"
```

# Autofill Planned procedures and estimated time

While creating a new appointment, the procedure and estimated times can be auto filled from information filled in the forms. Currently these are pulled from surgeon Pre-Op Assessment and Treatment Plan and Surgeon Follow-up form. The values to be selected in the SQL are ‘all_procedures’, ‘esthrs’, ‘estmins’. Users can write custom SQLs to return select these values and add the custom sql in this configuration. The sample is as below:
**Config**

```
"procedureSQLGlobalProperty" : "bahmni sql query handler name"
```

**example**: 

```
"procedureSQLGlobalProperty": "emrapi.sqlSearch.plannedProcedureForPatient"
```

See code: [https://github.com/bahmni-msf/amman-config/blob/d040b87dd44e9269648c3f0f92bfaa0dc5ed8a95/openmrs/migrations/operationTheater/plannedProcedureForPatient.sql](https://github.com/bahmni-msf/amman-config/blob/d040b87dd44e9269648c3f0f92bfaa0dc5ed8a95/openmrs/migrations/operationTheater/plannedProcedureForPatient.sql)

# Calendar view start time, end time and interval

The start time, end time and the interval of the calendar are configurable. The start time and end time are in 24 hr formats with hours and minutes separated by ‘:’. The dayViewSplit is the interval to be configured in minutes. The sample configuration is as below:
**Config**

```
“calendarView”: {
   “dayViewStart”: ”08:00”,
   “dayViewEnd”  : ”18:00”,
   “dayViewSplit”: ”60”
}
```

# Primary Diagnosis Information in the OT list view

Incorporating the provided configuration, the list view can now exhibit the primary diagnosis of a patient. In cases where a patient has multiple primary diagnoses recorded, all of them will be showcased within the OT list view. Below is a sample configuration to enable this functionality:
**Config**

```
"additionalCustomParam": "patientObservations"
```

Note
 
This feature is accessible only if the operation theatre backend supports reading this value. To enable this functionality, set the `obs.conceptMappingsForOT` parameter to `"org.openmrs.module.emrapi:Coded Diagnosis,org.openmrs.module.emrapi:Non-coded Diagnosis"`. This parameter is a comma-separated list of key-value pairs in the format of source:code for concept mappings, determining which observations are to be displayed in the OT module List view.

For instance, if we aim to retrieve observations recorded under the concept mappings with the source "org.openmrs.module.emrapi" and code "Coded Diagnosis," and another with the source "org.openmrs.module.emrapi" and code "Non-coded Diagnosis," the parameter value should be set as follows: `"org.openmrs.module.emrapi:Coded Diagnosis,org.openmrs.module.emrapi:Non-coded Diagnosis"`. Note that the source and code key-value pairs are separated by a colon symbol.
