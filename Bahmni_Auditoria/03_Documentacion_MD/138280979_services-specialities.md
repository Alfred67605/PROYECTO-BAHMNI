---
id: "138280979"
title: "Services & Specialities"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138280979/services-specialities"
version: 12
updated: "2017-11-26T08:16:42.991Z"
author: "Sruti Sridhar"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:24.274Z"
---

# Services & Specialities

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138280979)  
> **Versión del documento:** v12 (2017-11-26T08:16:42.991Z) | **Autor/Editor:** Sruti Sridhar

---

About the Feature

Users will be able to create and edit services and specialities offered at their hospital/clinic. 

***Service ***

A service is that entity which is offered to a patient by a care provider. Users are expected to select a service when scheduling their appointment.Eg: Chemotherapy, X-ray, Dental, Diabetic Clinic, Dialysis, Nutritional Counseling  etc

***Speciality ***

Speciality is a branch of medicine as being provided by a hospital. E.g Cardiology, Oncology, Orthopaedics, Endocrinology etc. It could also be referred to as various departments in a hospital.Under the umbrella of a speciality, multiple services will be offered to the patients. 

## Used By

Typically creating/updating services and specialities are Admin activities. The person with appropriate privileges will be allowed to Add or edit services. You can find more details on roles and privileges [here](/wiki/spaces/BAH/pages/144801828/User+Roles+and+Privileges+for+Appointment+Scheduling).

There is a UI for adding and editing services, which is described below. For specialities, the implementers are expected to run a script as described [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities) to create specialities in a hospital/clinic. 

## How is it used?

Click on the Appointment Scheduling App on the Home page. Under the Admin tab of the app, the user will be able to define and edit services.

![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/Admin-Tab.png?version=1&modificationDate=1505134202466&cacheVersion=1&api=v2)

### **Adding a new Service****
1. Click on the "Add new Service" button on the screen to access the Services Screen 
![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/Add%20service.png?version=1&modificationDate=1505134494553&cacheVersion=1&api=v2)

2. The User would be required to provide the following details to create a new service:

- 
**Name**: Unique name for the service. Mandatory field. 

- 
**Description**: Describe the service

- 
**Duration of service**: Consultation time required to offer the service to a patient.

- 
**Start Time & end time**: The working hours for a service or availability of a service

For example, if the diabetes clinic operates from 9.00 AM to 11.00 AM, then start time would be 9.00 AM and end time would be 11.00 AM

- 
**Max Load:** This is the indicative maximum no. of appointments that can be booked for a service, for a given availability (start and end time mentioned above)

For example, the clinic can take a maximum of 10 patients between 9.00 AM - 11.00 AM  

- 
**Location**: A default location where a service is expected to be offered to the patients. 

For example, OPD1 

- 
All locations marked as "appointment locations" in openMRS will be available in the dropdown to choose from.

- 
**Speciality**: A service will be associated with a broader speciality.

For example, X-Ray as a service under Radiology.

- 
**Label Colour: **The services can be assigned colours. On the calendar view, all the appointments booked for this service, will be displayed in this chosen colour.

This is available to users only when calendar view is turned on. Learn more it [here](/wiki/spaces/BAH/pages/137953307/Configure+Views+of+Appointments) and [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities).**
**

- 
**Service Appointment Type:**

Service appointment types are the further granular categories under a service. One service may have different types of appointment types under a service 
For example,  Initial assessments, Follow-Up Consultations, Nutrition counseling, General Consultation etc under Diabetic service. 
Different types of scans under Ultrasound as a service etc Eg: Anomaly Scan(1 hr), Viability Scan(15 min) and Growth Scan(1 hr)
- 
Duration: Each of these types are associated with a particular duration. This will override the duration mentioned in Point c above.

- 
Service Appointment types can also be deleted, by clicking on the cross button beside the Service appt. type.  

Info
 
The ability to have service appointment types will be a configuration. You can find more information [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities).

-  **Service Availability** :
One can either mention a global availability for a service as mentioned in point d above or could specify a more granular availability.
- By Default, a service is available on all days of the week at all times, if no availability is defined. Multiple availabilities can be tied to one service.
- Example of service availability:

A diabetes clinic in a Hospital is available on Monday and Friday from 10 - 5 pm and on Wednesday from 2-5 pm.
Then the user will have 2 availabilities defined:
For Monday & Friday ; with a start and end time of 10am and 5pm
For Wednesday; with a start and end time of 2pm and 5pm

- Each availability of a service will have the following attributes:
Days of the week : Monday to Sunday. Configuration to select the start of the week can be found *[here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities)*. 
- Start time and end Time : The start and the end time will decide the time ranges that will be available to the user for booking appointments. 
- Max load for that availability (day) : 

The max number of patients that can be scheduled for a service for a defined duration in the day i.e limit to the no.of appointments that can be booked. This will override the value in point e mentioned above. 
- This value will be displayed to the user when they are booking an appointment for the service.

The screenshot below shows the Service availabilities and the Service Appointment Types defined: 

![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/availability%2BSub%20types.png?version=1&modificationDate=1505731527766&cacheVersion=1&api=v2)

After a successful save, the user will be able to see the newly added service in the list of services screen.

![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/List%20of%20services.png?version=1&modificationDate=1505732986141&cacheVersion=1&api=v2)

### **Editing a Service**

- Click on the Edit link to edit a service

**![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/image2017-9-18_17-6-4.png?version=1&modificationDate=1505734567879&cacheVersion=1&api=v2)**

2**. **Do the necessary edits and "Save" the Service

**![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/edit%20service.png?version=1&modificationDate=1505734522454&cacheVersion=1&api=v2)**

3. Confirm the Edit: Editing the service will require the user to confirm the edits, as editing a service might affect the existing appointments

**![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/confirm%20edit.png?version=1&modificationDate=1505735382743&cacheVersion=1&api=v2)**

### **Deleting a Service**

- Click on the Edit link to delete a service

**![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/image2017-9-18_17-3-36.png?version=1&modificationDate=1505734420589&cacheVersion=1&api=v2)**

2. Confirm the delete 

**![](https://bahmni.atlassian.net/wiki/download/attachments/138280979/delete%20a%20service.png?version=1&modificationDate=1505734396789&cacheVersion=1&api=v2)**

 
A service or a service appointment type cannot be deleted if there are scheduled future appointments. The user will be asked to cancel/reschedule such appointments before deleting the service or service appointment type.  

### Adding Specialities

There is no UI to add Speciality. Also implementations can choose to not have specialities. Click [here](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities) to know how to configure a speciality. 

On this Page**
