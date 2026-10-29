---
id: "927432705"
title: "Appointment Request"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/927432705/appointment-request"
version: 1
updated: "2019-12-11T13:30:23.807Z"
author: "Mritunjay Dubey (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:36.476Z"
---

# Appointment Request

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/927432705)  
> **Versión del documento:** v1 (2019-12-11T13:30:23.807Z) | **Autor/Editor:** Mritunjay Dubey (Deactivated)

---

Appointment Request is a new feature added as part of the 0.93 release of Bahmni. This comes along with the new appointment scheduling module.

#### About the feature

This feature enables users to request appointments for providers. Before this feature, all the appointments which are created as **Scheduled **appointment. Once this feature is enabled the appointments will go as **Requested** appointment. The appointment moves to the **Scheduled** state when at least one provider accepts the appointment invite.

#### Enabling the feature

To enable this feature we need to set the below toggle to `true` in `app.json`.

```
"enableAppointmentRequests": true
```

#### Creating service for a requested appointment:

We can choose for which services the appointments should go as requested appointments and for which services these should still go as scheduled appointments. To change a service to be able to have **Requested Appointments**, we need to set the **Initial Appointment Status **as **Requested** for that service.

######  Define a service with Requested Initial Appointment Status:
![](https://bahmni.atlassian.net/wiki/download/attachments/927432705/image-20191206-035900.png?version=2&modificationDate=1575605032286&cacheVersion=1&api=v2)

#### Accepting an appointment invite:
If a provider is selected for a requested appointment, that provider will be able to accept the appointment invite. 

######  Accept button(leftmost) to accept the invite from the calendar view:
![](https://bahmni.atlassian.net/wiki/download/attachments/927432705/image-20191206-045701.png?version=1&modificationDate=1575608224376&cacheVersion=1&api=v2)
###### 
Accept button(3rd button) to accept the invite from the listview:
![](https://bahmni.atlassian.net/wiki/download/attachments/927432705/image-20191206-054930.png?version=1&modificationDate=1575611374284&cacheVersion=1&api=v2)

#### Deciding the status of Appointment and Provider Response:
In the default implementation, when we save an appointment for a requested appointment the status and provider responses are decided as below:

- 
If the appointment has no providers, the Appointment Status will be **Scheduled**.

- 
If the appointment has one or more providers, the Appointment Status will be **Requested**. Every provider will get an option to accept the appointment invite(i.e. **Provider Response => AWAITING**).

- 
If the appointment creator is part of the appointment, the Appointment Status will be **Scheduled**. Every provider other than the creator will get an option to accept the appointment invite.

- 
If the appointment is rescheduled(change in time), all the providers have to again accept the invite.

To change the above behavior we have provided a javascript hook, which gets invoked on click of save of appointment. To change this behavior we can edit the `/var/www/bahmniapps/appointments/appointmentStatusHandler.js`** **and provide a different implementation of `getUpdatedStatusAndProviderResponse` function.

**Appointment Request Demo:**

Here is a link for the demo for the Appointment Request.

[https://drive.google.com/drive/u/1/folders/1tZdYZaqS0E7loEpukYpnhBqwwv1CsoLe](https://drive.google.com/drive/u/1/folders/1tZdYZaqS0E7loEpukYpnhBqwwv1CsoLe)
