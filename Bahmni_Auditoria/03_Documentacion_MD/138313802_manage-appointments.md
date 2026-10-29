---
id: "138313802"
title: "Manage Appointments"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138313802/manage-appointments"
version: 12
updated: "2021-09-27T10:43:08.786Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:33.694Z"
---

# Manage Appointments

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138313802)  
> **Versión del documento:** v12 (2021-09-27T10:43:08.786Z) | **Autor/Editor:** Himabindu Thungathurty

---

### **Create Appointments - ****Patient search Field**

**                                        ![](https://bahmni.atlassian.net/wiki/download/attachments/138313802/Screen%20Shot%202018-02-02%20at%2012.28.30%20PM.png?version=1&modificationDate=1517554755478&cacheVersion=1&api=v2)**

Appointments are booked against a service for a patient. The web API that searches for the patient is configurable.

If the url is not configured it is defaulted to the end point in bahmni core: [openmrs/ws/rest/v1/bahmnicore/search/patient?loginlocation=?&q=?&startIndex=0.](https://192.168.33.10/openmrs/ws/rest/v1/bahmnicore/search/patient?loginlocation=?&q=?&startIndex=0.)  If an implementation wants to leverage the lucene API or search patient by some other field, they can configure the appropriate URL here. 

{{loginLocationUuid}} and {{searchValue}} are the context variables which will be provided at run time. {{searchValue}} is the user input on the create appointment screen.

```
"patientSearchUrl": "/bahmnicore/search/patient/lucene?loginLocationUuid={{loginLocationUuid}}&identifier={{searchValue}}" 
```

By default, as soon as the user enters the search term in the search field, the search gets triggered. However this length at which search is triggered is configurable. So in case the usual identifier length is longer and if we want to reduce the number API calls we can override this to a greater value.

Go to app.json for appointment module (/var/www/bahmni_config/openmrs/apps/appointments) and specify the character length

```
"minCharLengthToTriggerPatientSearch": 5
```

### **Edit Appointments - Allow Services to Edit**

Appointments are created against a service for a patient. Sometimes it is required of the user to edit this service at a later point in time. While in some cases, the implementation might choose to not allow this. In the latter case it is expected of the user to cancel the appointment and create a new one. 

Users will be able to turn on the ability to edit services in previously created appointments based on this configuration:

Go to app.json for appointment module (/var/www/bahmni_config/openmrs/apps/appointments) and set

```
"isServiceOnAppointmentEditable": true,
```

When this is set to true, the user is allowed to edit both &lsquo;Service&rsquo; and &lsquo;Speciality&rsquo; (as services are tied to a speciality).

To turn off edit service for Edit Appointment Go to app.json for appointment module (/var/www/bahmni_config/openmrs/apps/appointments) and set 

```
"isServiceOnAppointmentEditable": false,
```

Then the fields &lsquo;Speciality&rsquo; and &lsquo;Service&rsquo; appear non editable. Please note that the patient name will not be editable in both the cases. 

### **Appointment Status Change Validation**

A given appointment can have the following statuses:

- **Scheduled**: Appointment is scheduled for a patient.
- **CheckedIn**: Patient with the appointment has checkedIn to the hospital/clinic.
- **Missed**: Patient has missed the appointment.
- **Completed**: Patient has completed the appointment with the care provider.
- **Cancelled**: Appointment has been cancelled.

The change of appointment status from one status to another can be controlled by configuration.

```
&ldquo;Config&rdquo;: {
    &ldquo;allowedActionsByStatus&rdquo;: {
        &ldquo;&rdquo;: []
    }
}
```

Example:

```
&ldquo;Config&rdquo;: {
   "allowedActionsByStatus": {
      "Scheduled": ["CheckedIn", "Missed", "Cancelled"],
      "CheckedIn": ["Completed", "Missed", "Cancelled"]
    }
}
```

**

In the above example, it is configured that appointment with current status as &ldquo;Scheduled&rdquo; can be changed to &ldquo;CheckedIn&rdquo;, &ldquo;Missed&rdquo; and &ldquo;Cancelled&rdquo;. An appointment with current status as &ldquo;CheckedIn&rdquo; can be changed to &ldquo;Completed&rdquo;, &ldquo;Missed&rdquo; and &ldquo;Cancelled&rdquo;

### **Allowed actions for a status**

allowedActionsByStatus: Object with all the allowed actions for a status. << To be added >>

### **Reset Appointment Status**

This feature is available from Bahmni 0.93. In Bahmni we allow the undo of the Check-in action. However, for actions like Missed or complete, we cannot undo this change. In case of manual error in changing the status, one can undo the status change from "Missed"/"Checkin"/"Cancelled" state to "Scheduled" state. 

A new privilege &ldquo;Reset Appointment Status&rdquo;  is added for this purpose. This privilege has to be assigned to the users to allow reset the status. If the user doesn&rsquo;t have this privilege they will not be able to reset the status. They will be able to see the "Reset" button but button will not be enabled if the user doesn't have privilege.

The feature is behind the toggle. To enable it please add below configuration in **/bahmni_config/openmrs/apps/appointments/app.json** file

```
"enableResetAppointmentStatusesFor": [&ldquo;CheckedIn&rdquo;, &ldquo;Missed&rdquo;, &ldquo;Cancelled&rdquo;]
```

- In the list we have to mention all the statuses from which we want to move back to scheduled.
- In order to see the Reset button enabled on screen, &ldquo;Reset Appointment Status&rdquo; privilege must be assigned to the user
- Existing users of Undo check-in must follow these steps:
Add the privilege &ldquo;Reset Appointment Status&rdquo; to all roles that you want to assign this ability to reset. If you do not add this to the config, the &ldquo;Undo-checkin&rdquo; action will be disabled on screen.
- If along with Checkin, you would want to allow other statuses to be reset, then add the above config and mentioned the respective statuses in the list as shown above.
- If this is not added to the config, as long as the user has the &ldquo;Reset Appointment Status&rdquo; privilege assigned, they will be able to do &ldquo;Undo Check-In&rdquo;.

           ![](https://bahmni.atlassian.net/wiki/download/attachments/138313802/image2021-9-27_16-12-34.png?version=1&modificationDate=1632739356224&cacheVersion=1&api=v2)

                 

**Note**: The Reset Appointment feature is available only on the appointment List view page. Its not available in the Appointment Calendar View page

### **Scheduler for Complete or Missed Appointments:**

Depending on the implementation, you can mark appointments either with missed or complete status manually or you can configure the scheduler to do so. 

If you want the scheduler to mark appointments complete, enable the scheduler through **global property i**n OpenMRS Advanced settings:

```
SchedulerMarksComplete:true
```

Similarly you can use the scheduler to mark appointments as missed by marking the global property as true

```
SchedulerMarksMissed:true
```

If they are false then you have mark appoinment as missed or completed manually from UI. 

You will find the user guide for creating and managing appointments [here](/wiki/spaces/BAH/pages/138182707/Creating+and+Managing+Appointments). 

On This Page**

 
 
 

[ ](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138182707/Creating+and+Managing+Appointments)
