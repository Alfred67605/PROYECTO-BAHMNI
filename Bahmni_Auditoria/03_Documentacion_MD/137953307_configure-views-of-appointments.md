---
id: "137953307"
title: "Configure Views of Appointments"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/137953307/configure-views-of-appointments"
version: 5
updated: "2018-07-24T13:28:06.522Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:34.206Z"
---

# Configure Views of Appointments

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/137953307)  
> **Versión del documento:** v5 (2018-07-24T13:28:06.522Z) | **Autor/Editor:** Angshuman Sarkar

---

## Calendar View 

This view provides the user the ability to view appointments for different providers in a given day, in a calendar. Users can further filter appointments using a filter panel available on this view.  To know more about using the calendar view, please see the [User guide](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/138117151/Views+of+Appointments).** **

### **Enabling Calendar View**

To Enable calendar view in Appointments Scheduling Module, please add below config in openmrs/apps/appointments/app.json

```
"config": {
   "enableCalendarView": true       // To enable calendar view make it as true    
 }
```

By default the calendar view is enabled. You can turn it off using the above config.

### Configuring the Calendar 

The calendar view allows the following things to be configured:

- Label Interval : This is the interval between the times/labels displayed on the calendar
- Slot duration : This is duration of a slot on which a user can click to create an appointment
- Start & end time of the day: The working hours of a clinic/hospital can be set here. And the times outside of these are greyed out. However it doesn't stop the user from booking appointments against them

Navigate to openmrs/apps/appointments/app.json and modify the values of below attributes. Below is default configuration for setting interval duration to 30 minutes, slot duration to 10 minutes, start of the day to 9:00 AM and end of the day to 7:00 PM .

```
"config": {
"calendarSlotLabelInterval": "01:00:00",
"calendarSlotDuration": "00:30:00",
"startOfDay":"09:00",
"endOfDay":"19:00"
}
```

Screenshot of the example configuration 

![](https://bahmni.atlassian.net/wiki/download/attachments/137953307/Screen%20Shot%202017-11-18%20at%208.43.05%20PM.png?version=1&modificationDate=1511518097610&cacheVersion=1&api=v2)

## List View 

List View is available by default with the appointment scheduling Module. 

### Print List View 

To configure the html for printing appointments on list view, provide the html location as below in appointments/app.json

```
"printListViewTemplateUrl": "/bahmni_config/openmrs/apps/appointments/printListView.html"
```

Sample html file with all the columns configured : [printListView.html](https://bahmni.atlassian.net/wiki/download/attachments/135233558/printListView.html?version=1&modificationDate=1504695455310&cacheVersion=1&api=v2)

The following conditions can be put on the columns:

- To show specialities, only when enableSpecialities is configured to true.
- To show serviceTypes, only when enableServiceTypes is configured to true

Column Sort/Order:**On the list view when click on the column name, up arrow will display beside column name and column will sort in ascending order. If you click on column name again, now you will see down arrow and sort will be in descending order. You can do sort on any column in the list.

## Weekly Summary View

The summary view is a weekly view. Users can configure the view to begin with either Sunday or Monday using the config below

To Configure start of week, please add following config in openmrs/apps/appointments/app.json

```
weekStart: “week”  //the weekly summary view will show from Sunday to Saturday of the current week
weekStart: "isoWeek” //the weekly summary view will show from Monday to Sunday of the current week

```

On This Page**
