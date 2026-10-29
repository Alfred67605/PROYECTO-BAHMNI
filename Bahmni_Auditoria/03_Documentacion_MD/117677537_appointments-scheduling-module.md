---
id: "117677537"
title: "Appointments Scheduling Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/117677537/appointments-scheduling-module"
version: 24
updated: "2020-09-26T01:23:27.361Z"
author: "Mihir Shrestha"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:32.765Z"
---

# Appointments Scheduling Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/117677537)  
> **Versión del documento:** v24 (2020-09-26T01:23:27.361Z) | **Autor/Editor:** Mihir Shrestha

---

The Appointment Scheduling feature will be available from release 0.90. 

The appointment scheduling module is for enabling the users to primarily Create and Manage Appointments across services and providers. The links below will provide the steps to configure and set up the appointment scheduling module for an implementation. You will find the steps to use the module in the user guide [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/117679771/Appointment+Scheduling+in+Bahmni).

- [Set up Services & Specialities](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities)
- [Manage Appointments](/wiki/spaces/BAH/pages/138313802/Manage+Appointments)
- [Configure Views of Appointments](/wiki/spaces/BAH/pages/137953307/Configure+Views+of+Appointments)
- [User Roles and Privileges for Appointment Scheduling](/wiki/spaces/BAH/pages/144801828/User+Roles+and+Privileges+for+Appointment+Scheduling)
- [Integration Points](/wiki/spaces/BAH/pages/299597962/Integration+Points)
- [Appointment Request](/wiki/spaces/BAH/pages/927432705/Appointment+Request)
- [Configuration to enable SMS alerts for Appointments](/wiki/spaces/BAH/pages/3168075832/Configuration+to+enable+SMS+alerts+for+Appointments)
- [Setup Teleconsultation Feature](/wiki/spaces/BAH/pages/3738796112/Setup+Teleconsultation+Feature)
[Bahmni Tele-consultation Feature Setup on v0.92 or v0.93](/wiki/spaces/BAH/pages/2140045317/Bahmni+Tele-consultation+Feature+Setup+on+v0.92+or+v0.93)

Appointment Scheduling app onto Bahmni Clinical Home Page is configured through the following extension in "extension.json" of home as configured [here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/extension.json#L113).

```
"appointmentScheduling": {
    "id": "bahmni.appointment.scheduling",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "MODULE_LABEL_APPOINTMENT_SCHEDULING_KEY",
    "url": "../appointments",
    "icon": "fa fa-calendar",
    "order": 14,
    "requiredPrivilege": "app:appointments"
  }
```

Also, please note that you may have to specify your user's permissions to allow appointment scheduling. To grant the user permission, please head over to your OpenMRS settings, then in manage users, type in your user, and grant it the permissions "appointmentmanage" and "appointments:fullaccess."

**Feature Details **

[Appointment Scheduling](/wiki/spaces/BAH/pages/32604198/Appointment+Scheduling)

**Usage Details**

[Using Appointment Scheduling in Bahmni](/wiki/spaces/BAH/pages/117679771/Appointment+Scheduling+in+Bahmni)
