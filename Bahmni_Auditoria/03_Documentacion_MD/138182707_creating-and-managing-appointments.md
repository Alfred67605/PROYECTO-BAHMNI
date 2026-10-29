---
id: "138182707"
title: "Creating and Managing Appointments"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138182707/creating-and-managing-appointments"
version: 11
updated: "2018-07-31T06:50:42.253Z"
author: "krishnanspace"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:25.029Z"
---

# Creating and Managing Appointments

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138182707)  
> **Versión del documento:** v11 (2018-07-31T06:50:42.253Z) | **Autor/Editor:** krishnanspace

---

## About the Feature

With the help of appointment scheduling users will be able to create and manage appointments against a service for a patient. 

For example, An appointment is created for a Patient for the Diabetes Clinic on Monday at 11.20 AM. Once the patient reaches the hospital, the patient would be checked in. The patient will be guided to the assigned provider. The appointment will be deemed completed after consultation with the care provider. Alternately the appointment can also get cancelled or rescheduled to another date due to unavailability of the doctor. Also it is possible that the patient misses the appointment. 

With the "Manage Appointments" Tab the user will be able to replicate these activities and track appointments effectively.

Used By

Some of the possible users: 

- 
Registration Clerk: To assign appointments and to check in patients. 

- 
Provider: To view and schedule appointments for patients. Can also compete appointments post consultation

How is it Used?

Click on the Appointment Scheduling App on the Home page. Under the "Manage Appointments" tab of the app, click on Appointments List tab.

##### Create Appointments

- 
Click on the "Add new Appointment" on the Appointments list Tab

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/create%20appt.%20button.png?version=1&modificationDate=1505742756621&cacheVersion=1&api=v2)

2. The user will have to fill the details of the appointment in the Add new Appointment slider 

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/Create%20appt..png?version=1&modificationDate=1505742547145&cacheVersion=1&api=v2)

The following details are required to create an appointment:

Note: Selecting a Patient, Service/service type and Date is mandatory to create an appointment.**1. **Patient** : The Patient can be searched for using Patient name or ID
2. **Speciality**: The speciality can be selected from a dropdown to filter the services. 
3. **Service**: The service is selected from the dropdown. This will further filter the appointment types under it. 
4. **Service Appointment Type**: The service appt. type will be selected from a dropdown. 
 
Note: Speciality and Service appointments can be turned off by configuration. Click [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities)for more details. 

5. **Walk-in Appointment** : Users can mark an appointment as a walk-in. By default appointments are marked as Scheduled. 
6. **Date of Appointment: **This will be chosen from a date picker. Only current and future dates are allowed.
7. **Time slot** : Select the time slot for an appointment.

- 
The dropdown will suggest possible slot times based on service availability.

- 
End time will auto populate based on the duration of the service/ service appointment type. Default of 30 mins if no durations are mentioned.

- 
Users can override the suggested times.

8. **Providers: **Select the provider for the appointment from the dropdown. Only those providers with provider attribute Available for appointments set to true will be shown. This setting is available in OpenMRS>Administration>Providers>Manage Providers. 

**Note: **This feature only available from version 0.91 onwards.

`![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/image2018-7-31_12-17-32.png?version=1&modificationDate=1533019656272&cacheVersion=1&api=v2)`

9. **Location : ** By default the location will  be Service location. User can change the location as applicable. 

To know how to tag locations as appointment locations, click [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities). 

##### Warnings to the user 

- 
If service availability is defined, if the user chooses a day or timings outside the availability, there will be a warning to the user. 

- 
Booking a patient simultaneously in overlapping times will warn the user of the conflict. 

- 
In both cases mentioned above, the user can still go ahead and book an appointment by ignoring the warning.

Edit Appointments

- 
Click on the appointment that you want to edit.

- 
Click on the edit button on the Button below 

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/image2017-9-18_19-34-4.png?version=1&modificationDate=1505743448639&cacheVersion=1&api=v2)

3. For scheduled and checked-in appointments one can edit the Service appointment type, Location, Provider and the Date/time of the appointment. 
4. In case of past appointments or appointments that have been marked as Missed/Canceled/Completed, only Notes field can be edited.

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/Screen%20Shot%202017-09-19%20at%204.24.36%20PM.png?version=1&modificationDate=1505818502073&cacheVersion=1&api=v2)
 
Note: Edit of services for an appointment is turned off by default. Click [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities) to know how turn on edit of services for an appointment.

##### Slots Information:

When appointments are being booked or rescheduled the user will be prompted with the information of

- Open Slots : No. of Slots available for booking for a service
- Total Slots: Total No. Slots permitted for the service 
- Booked Slots: Slots booked for the service 

This information is calculated from either the Max load or the Availability of the service that is specified during defining the service.

The table below explains how the Open slots and Total slots calculations are done:

| **Duration of service** | **Start Time & End time of Service** | **Max Load ** | **&lsquo;Slots&rsquo; Calculation** |
| --- | --- | --- | --- |
| Present | Present | Not Specified | The Duration and Start/end time is used for calculating the total no. of slots for the defined service availability. |
| Not specified | Present | Present | The Max load is used to show total no. of slots available.  |
| Present | Not specified | Present | The Max load is used to show total no. of slots available.  |
| Present | Present | Present | The max load for the defined service availability will be displayed.  |
| Not specified | Present | Not specified | Total slots information will not be displayed. Only no. of patients booked for that particular availability is displayed. |
| Present | Not specified | Not specified | Total slots information will not be displayed. Only no. of patients booked for that particular service is displayed. |
| Not specified | Not specified | Not specified | Total slots information will not be displayed. Only no. of patients booked for that particular service is displayed. |

This is only an indicative information for the user and will not stop the user from overbooking. 

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/image2017-9-19_16-37-53.png?version=1&modificationDate=1505819277059&cacheVersion=1&api=v2)      ![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/image2017-9-19_17-47-10.png?version=1&modificationDate=1505823433378&cacheVersion=1&api=v2)        ![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/image2017-9-19_17-49-0.png?version=1&modificationDate=1505823544253&cacheVersion=1&api=v2)

##### Status of Appointment

Appointments can be marked as Checked-in, Cancelled or Complete. 

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/calendar-status.png?version=1&modificationDate=1505825609978&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/image2017-9-19_18-25-50.png?version=1&modificationDate=1505825753436&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/checkin-list.png?version=1&modificationDate=1505825459402&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/complete-list.png?version=1&modificationDate=1505825535402&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/138182707/Screen%20Shot%202017-09-19%20at%206.22.23%20PM.png?version=1&modificationDate=1505825556477&cacheVersion=1&api=v2)

Schedulers can mark appointments as Complete or Missed at the end of defined frequency. 

**Validations for Appointment Status**

- 
A &lsquo;Cancelled&rsquo; , &lsquo;Completed&rsquo; and a &lsquo;Missed&rsquo; Appointment should not be available for editing to change to any other status.

- 
A Scheduled appointment can move to any of the statuses.

- 
A &lsquo;checked in&rsquo; appointment can only be marked as Completed, Missed or Cancelled.

- 
A checked-in Appointment if rescheduled, the status must go back to being &lsquo;Scheduled&rsquo; until checked-in again for the rescheduled time. 

On This page**
