---
id: "299958294"
title: "List View of Appointments"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/299958294/list-view-of-appointments"
version: 5
updated: "2021-04-27T19:08:32.125Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Usuario_Sub_Sub_Sub"
download_date: "2026-10-20T21:02:26.710Z"
---

# List View of Appointments

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/299958294)  
> **Versión del documento:** v5 (2021-04-27T19:08:32.125Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

## About the Feature

The List View in the appointment scheduling Module is the view that lists all the appointments for a particular day. Its a tabular view of the appointments with details of Time, Service/Service appointment Type, Provider, Notes etc. This view can also be printed. 

## How is it used

### List View

- This view can either be accessed form the 'Appointments List' Tab or by clicking on the numbers (load) on the [Weekly summary page](/wiki/spaces/BAH/pages/299958302/Weekly+Summary+View). It lists all the appointments for the current day by default. For each appointment one can see the following details:
Patient  - Name and ID
- Appointment slot (Date and time)
- Service, Service Appointment Type
- Provider, Location  - Tagged to the appointment 
- Notes entered during creating appointment
- Status - Scheduled, Checked in, Completed, Missed or Cancelled. 
- Appointment Type: Walk in, Scheduled 

 ![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/List%20view.png?version=1&modificationDate=1511528215258&cacheVersion=1&api=v2)

2. It is only a Daily View with a date picker on top. One can navigate across days using the data navigator. The List View also has a [Patient Search](/wiki/spaces/BAH/pages/299368645/Patient+s+Appointments+Search) field.  

3. Users can also filter the appointments on the list view. You can read more about filters below. 

![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/listview-other%20fields.png?version=1&modificationDate=1511528491852&cacheVersion=1&api=v2)

4. There are also a list of actions that present on the bottom of the list view. These are Check in/Undo Check in, Edit, Complete and Cancel. They will get enabled based on the status of the appointment selected.

![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/Screen%20Shot%202017-11-24%20at%2012.57.25%20PM.png?version=1&modificationDate=1511531584274&cacheVersion=1&api=v2)

### Filters on the List View

User will be able to filter the appointments based on Speciality/ Service/Service appt. Type, Provider and status. 

#### Using the Filter

- The filter parameters are available on the left hand side of the screen. The filter panel is open by default. Can be closed/hidden by clicking on the blue arrows of the filter section.

- ![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/Screen%20Shot%202017-11-24%20at%203.04.58%20PM.png?version=1&modificationDate=1511532546952&cacheVersion=1&api=v2)If filters are applied then that icon will be shown in blue colour, else in black.**

![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/Screen%20Shot%202017-11-24%20at%203.05.09%20PM.png?version=1&modificationDate=1511532327911&cacheVersion=1&api=v2)

2. The following fields are available for a user to filter the list of appointments:

- Specialty/ Service/ Service Appointment Type
- Provider
- Status of the appointment 

3. The Speciality, Services and Service appointment types are shown in a hierarchical fashion in the filter.  The Speciality will show services and the services will show the sub types below them. Services with no speciality will all be grouped under “No speciality”. If the implementation does not have Speciality or Sub types [configured](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities) then that particular level in hierarchy will not be visible. 

![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/Screen%20Shot%202017-11-24%20at%203.27.02%20PM.png?version=1&modificationDate=1511533658913&cacheVersion=1&api=v2)

4. There is a Search field common for all the three ( Speciality, Service, Service Appt. Type) : User can search for any of them in this field

5. There is a Toggle called "Show Selected”. Turning it on will display all the selected filter criteria 

![](https://bahmni.atlassian.net/wiki/download/attachments/299958294/Screen%20Shot%202017-11-24%20at%203.24.05%20PM.png?version=1&modificationDate=1511533481553&cacheVersion=1&api=v2)

6. Provider and Appointment status are multi-select dropdown fields. Users can select multiple status and Providers 

7. Click on "Apply Filter" button to filter the appointments as per the parameters selected and "Reset" to clear the applied filters.
 
These filters are available both on the List View and the calendar View. The behaviour described is the same for both views. Except that cancelled appointments are not shown on the calendar view

### Show Language of the patient in ListView, Appointments module

we would like to see the Language of the patient that we capture as a patient attribute, in the list view page. This information is important in the context of appointments because the Interpreters in the hospital plan their schedule based on the appointments & the patient’s language.

The following approach has been decided for the above mentioned problem.The gist of the discussion and the use cases implemented are given below - The same has been updated in the talk thread too.

1. A new configuration element say “additionalInfoColumns” will be introduced which contains the names of the columns to be displayed. example “additionalColumns” : [“language”, “spouse_number”]

2. Assuming the following details comes as the additional information from the custom_module,

_{ “language” : “English”, 
“otherLanguage” : “Hindi”, 
“spouse_name”: “Name1”, 
“spouse_number”: “12345678” } _

Based on additionalInfoColumns list [Refer step 1], new columns with names “language” and “spouse_number” will be added to the appointment list view and the respective values[as got in additional Information] will be shown under the respective columns. --**It is to be noted that additionalInfo column will not be shown in case we are adding new columns.**

3 In case there are no column names given - eg: “additionalColumns” : [ ], then no new columns will be shown and all the values coming as additional information, will be shown as comma separated values under additionalInfo column.

On This Page**
