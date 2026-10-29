---
id: "703922251"
title: "Operation Theatre Scheduling Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703922251/operation-theatre-scheduling-module"
version: 8
updated: "2020-02-10T00:40:49.776Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:39.492Z"
---

# Operation Theatre Scheduling Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703922251)  
> **Versión del documento:** v8 (2020-02-10T00:40:49.776Z) | **Autor/Editor:** Himabindu Thungathurty

---

## Description

Scheduling of surgeries in any care setting is a challenging task. There are multiple variables that go into consideration - Surgeon’s availability, the patient’s condition, availability of the OT and the right medical devices/ surgical instruments etc among other things. And if done rightly, it contributes to improving the operational efficiency of the hospital and also ensures timely care to patients with minimal waiting time. Hence it is important that the staff are supported with the right tool to make efficient schedules. 

OT scheduling in Bahmni allows the users to manage several operating rooms, in which they can schedule patient's surgeries with the appropriate Surgical Team. It comes with both a List as well as a Calendar view for the schedule to be managed. 

Operation Theatre module comes out of the box with the Bahmni installation.

### **Prerequisite:**

To use OT module in any specific implementation, We need to configure at least one location as operation theatre

**Steps to add a operation theatre location:**

- Go to Openmrs → Administration → Manage locations
- Add a new location or tag existing location as "Operation Theater". This tag comes with Bahmni installation
Its a good practice to organise locations inline with hospital setups. For example, you may want to have  an 'Operation Theater' organised within a location representing a department. For more information around locations and relevance to Bahmni please see ["Visit Location"](/wiki/spaces/BAH/pages/77758507/Visit+Location)

            ![](https://bahmni.atlassian.net/wiki/download/attachments/703922251/Screen%20Shot%202018-08-20%20at%202.58.34%20PM.png?version=1&modificationDate=1534757348919&cacheVersion=1&api=v2)

### **Surgical Appointment Display Control in Patient Summary Dashboard: **

A custom display control has been set up for a user to view patient surgery details on the dashboard.

     ![](https://bahmni.atlassian.net/wiki/download/attachments/703922251/Screen%20Shot%202018-08-20%20at%205.46.57%20PM.png?version=1&modificationDate=1534767442888&cacheVersion=1&api=v2)

**

### **Calendar Color Configuration:**

The calendar view of the Operation Theatre module supports a color to be configured against a surgeon. For this, you need to have a specific provider attribute "otCalendarColor" configured in the system. 

- Go to Openmrs → Administration → Manage Provider Attribute Types
- Check the list if an attribute "otCalendarColor" exists, if not then we need to define that. 
- To define, click "Add Provider Attribute Type" link
- In the form thats displayed, mention Name: otCalendarColor, Data type: Free Text. Save the form. 

Now, you can assign a value for the "otCalendarColor" for a provider. 

- NOTE: **0 **(default color)** to 359** is the recommended configuration values

## Data Model for OT module

![](https://bahmni.atlassian.net/wiki/download/attachments/703922251/image2020-2-10_6-9-35.png?version=1&modificationDate=1581295177471&cacheVersion=1&api=v2)

 
This module is available only from release 0.91 onwards.
Usage Details**

[Operation Theatre Scheduling in Bahmni](/wiki/spaces/BAH/pages/676986891/Operation+Theatre+Scheduling+in+Bahmni)

**Feature Guide**

[Operation Theatre in Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/676069378/Operation+Theatre)
