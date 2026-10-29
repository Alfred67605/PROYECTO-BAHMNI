---
id: "137953304"
title: "Set up Services & Specialities"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/137953304/set-up-services-specialities"
version: 5
updated: "2017-11-23T16:51:26.276Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:33.212Z"
---

# Set up Services & Specialities

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/137953304)  
> **Versión del documento:** v5 (2017-11-23T16:51:26.276Z) | **Autor/Editor:** Sruti Sridhar

---

### Create a Service

For creating a new Service, only ‘**Service Name**’ is mandatory.

- **Service Name: **It is mandatory and should unique. You will be notified with message if a service with the same name(case insensitive) already exists. **
![](https://bahmni.atlassian.net/wiki/download/attachments/137953304/Screen%20Shot%202017-07-24%20at%207.34.52%20PM.png?version=1&modificationDate=1510722611061&cacheVersion=1&api=v2)

- **Description**: You can add description to the service.
- **Duration of service: **It is the consultation time required to offer the service to a patient. It is in minutes. Negative values are not allowed. 
- **Start Time & End time**: The working hours for a service. Service is available on all days of the week, if no availability is defined. Start time must be less than end time. If it is wrong time sequence, you will be notified with a message

![](https://bahmni.atlassian.net/wiki/download/attachments/137953304/Screen%20Shot%202017-07-24%20at%207.39.38%20PM.png?version=1&modificationDate=1510722611315&cacheVersion=1&api=v2)

- **Max Load**: This indicates the maximum number of appointments that can be booked for a service. Negative values are not allowed 
- 
**Speciality: **Please refer to section below.** **

- **Location: ** All locations tagged with ‘Appointment Location’ appears in this dropdown.
 To tag a location as Appointment Location: In openmrs,
 Administration -> ManageLocations -> Select a location -> Check ‘Appointment Location’ -> Save location.

*![](https://bahmni.atlassian.net/wiki/download/attachments/137953304/Screen%20Shot%202017-07-24%20at%207.31.57%20PM.png?version=1&modificationDate=1510722611574&cacheVersion=1&api=v2)*
*
*
- **Label Colour: **Colours can be assigned to different services so they are indicated differently on the Calendar view. Details on how to configure label colours can be found here .
- **Service Appointment Types: **Service appointment types are sub types under a service, with a specific duration. details on how to configure a Service appointment type can be found here.
- 
**Service availability: **If you define a service availability it overrides the service level startTime, endTime and MaxLoad and service is only available on selected days within mentioned timings.
**Start Time & End time: **working hours for a service on selected days of that availability.Start time must be less than end time. If it is wrong time sequence, you will be notified with a message.
**Max Load: **This indicates the maximum number of appointments that can be booked for a service availability. Negative values are not allowed. 
**Days: **By default week starts from MONDAY. You can configure the start day of week by assigning a number ranging from [1-7] which indicates [SUNDAY-SATURDAY] to“**startOfWeek**” in config file. 
Ex: If you configure,

```
"startOfWeek": 4
```

![](https://bahmni.atlassian.net/wiki/download/attachments/137953304/Screen%20Shot%202017-07-24%20at%207.43.22%20PM.png?version=1&modificationDate=1510722612069&cacheVersion=1&api=v2)

Display names of the days in a week are internationalized. 

**Add a new availability:**
For adding a new availability Start time, End time and at least one day must be selected to get the ‘Add’ button enabled. After it got added, it will be in non-editable mode. You can see two buttons to edit and delete.

![](https://bahmni.atlassian.net/wiki/download/attachments/137953304/Screen%20Shot%202017-07-24%20at%207.51.40%20PM.png?version=1&modificationDate=1510722612338&cacheVersion=1&api=v2)

To delete an availability:
Click on delete button, it will ask for confirmation. If you click on ok, that particular availability will be deleted. If you hit cancel, it will stay as is.
To edit an availability:
Click on edit button, which enables that availability to make changes.

Multiple availabilities can be tied to one service. All the availabilities are displayed in order they got added. 

When you try to navigate with unsaved changes, a dialog box will be shown to confirm or cancel the navigation.

![](https://bahmni.atlassian.net/wiki/download/attachments/137953304/Screen%20Shot%202017-07-24%20at%208.05.00%20PM.png?version=1&modificationDate=1510722612595&cacheVersion=1&api=v2)

If you click on **Don't save **, you will be navigated to the target page and all changes will be lost. If you click on **Stay on page,** all changes persist and you will be on the same page.** **

### **Create a Speciality**

This field is configurable . By default it is turned on and visible on the UI. You can show/hide this by setting “**enableSpecialities**” to true/false.

```
"enableSpecialities": true
```

To add a speciality we can run the following query.

```
INSERT INTO appointment_speciality (name, date_created, creator, uuid) VALUES ('Cardiology', NOW(), 1, UUID());
```

Please Note that there is no UI to add specialties. Implementers have to run the above query to create the necessary specialities. 

### **Configure label colour for a service**

While creating a new service, with this feature, we can able to assign a color to it. This meant that whenever we are creating an appointment under this service, the appointment color on calendar view will be the same as we mentioned for the service.

With this color feature, one can easily find that all the appointments that are in specific color, are booked for the same service.

This is not a mandatory field.

By default(if there are no colors mentioned in config), color will be “Green”. 

All the colors for services are configurable.

In order to configure new color to services, one need to add color to below code in app.json

```
“config”:{
"colorsForAppointmentService": [
“”
]
}
Example:
“config”:{
"colorsForAppointmentService": [
“#006400 ”, “#DC143C ”, “#00008B ”, “#3F51B5 ", “#B8860B ”,“#A9A9A9 ", “#BDB76B ”,“#8B008B ”,“#556B2F ”,“#FF8C00 ", “#9932CC ”,“#8B0000 ",“#8FBC8F ”,“#483D8B ”,“#2F4F4F ”, “#3E2723 ",“#00CED1 ”,“#9400D3 ",“#FF1493 ”, “#00BFFF ”
]
}
```

By default we recommend a list of 20 (above mentioned) colours. Users can choose to either add/ change the colours in this list. There is no limit on total number of colours to be added into config. 

### Configure Service appointment Types for a service

**Turn on/off Service appt. Type**

Every service can have multiple service appointment types. Every service type in a service must have unique combination of name and duration. Service type is not a mandatory property of service. It can be turned on/off as per the implementation's needs. 

Administrators adding/editing services can configure service types from Admin page, only if configuration is enabled to add service types.

In order to enable service appointment types, use the below configuration in app.json of appointments module:

```
"config": {
"enableServiceTypes": true
}

In order to disable service appointments types, use the below configuration in app.json:

"config": {
"enableServiceTypes": false 
}
```

enableServiceTypes : enables/disables service types. The default value is true.

When service types are enabled, administrators can add/edit/delete service types for a service from the Admin tab in Appointments module.

On This Page**
