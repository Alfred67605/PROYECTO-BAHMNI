---
id: "3168075832"
title: "Configuration to enable SMS alerts for Appointments"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168075832/configuration-to-enable-sms-alerts-for-appointments"
version: 2
updated: "2023-04-10T11:52:32.734Z"
author: "Kavitha S"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:37.157Z"
---

# Configuration to enable SMS alerts for Appointments

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168075832)  
> **Versión del documento:** v2 (2023-04-10T11:52:32.734Z) | **Autor/Editor:** Kavitha S

---

# Purpose
In cases where the medical facility would want to notify the patients upon scheduling/updating any type of appointment, then it should trigger an SMS with appointment details like time, date, location of the appointment, etc to the phone number added to the patient.

Currently Bahmni supports sending an SMS notification upon appointment scheduling/updation of any patient based on configurations.

Note : If the patient is not registered with phone number, then one can't send SMS notification for appointments.

| **IMPORTANT** |
| --- |
| One needs to bring up the `sms-service` docker container in order for SMS sending functionality to work. Please refer [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168010241/SMS+Service+Configuration+docker) to know how to setup the container. |

## Configuration to enable sending SMS option
One can enable sending SMS option upon appointment scheduling/updation of any patient in the medical facility. For this we have to update the global property values.

- 
Go to **OpenMRS &rarr; Admin &rarr; Advance Settings** and set `sms.endpoint` global property value as `/sms-service/notification/sms`.  If the property is not available in the Advance Settings, create one and set the value. 

- Go to **OpenMRS &rarr; Admin &rarr; Advance Settings** and set `sms.enableAppointmentBookingSMSAlert` global property value as `true`. By default, the value will be `false` and the SMS won't get triggered upon scheduling any appointments to a patient. If the property is not available in the Advance Settings, create one and set the value. Once this is enabled, the SMS will get triggered automatically.

One needs to have the privilege `Send SMS` for sending any SMS. For this we have to assign the privilege to user&rsquo;s role.

- 
Go to **OpenMRS &rarr; Manage Roles &rarr; **Select Role which needs to have the privilege for sending SMS** &rarr;** assign the privilege `Send SMS` **&rarr;** save the role. The SMS won&rsquo;t be sent if the user who are triggering the SMS doesn&rsquo;t have this privilege.

- One needs to configure the attribute name where the phone number of the patients are getting stored in the database since attributes may vary in different environments. To configure the same, please add the following configurations under config section in the [appointments/app.json](/wiki/spaces/BAH/pages/117677537/Appointments+Scheduling+Module) file.

```
"smsAttribute": "phoneNumber"
```

Here `"phoneNumber"` is a `person_attribute_type` whose value will have the contact number of the patient. In some other cases, it may be stored as `"primaryContact"` in the table `person_attribute_type`

## Configuration for Message Content

To configure the message content for appointments SMS alerts, please add the following configurations under config section in the [appointments/app.json](/wiki/spaces/BAH/pages/117677537/Appointments+Scheduling+Module) file.

| ``` "appointmentBookingMessage": "APPOINTMENT_BOOKING_MESSAGE", "recurringAppointmentBookingMessage": "RECURRING_APPOINTMENT_BOOKING_MESSAGE", "teleconsultationAppointmentBookingMessage": "TELECONSULTATION_APPOINTMENT_BOOKING_MESSAGE" ``` |
| --- |

Here 

- 
`"APPOINTMENT_BOOKING_MESSAGE"` - is a translation key for `scheduled` appointment type's message

- 
`"RECURRING_APPOINTMENT_BOOKING_MESSAGE"` - is a translation key for `recurring` appointment type's message

- 
`"TELECONSULTATION_APPOINTMENT_BOOKING_MESSAGE"`  - is a translation key for `teleconsultation` appointment type's message

Below are key value pairs that needs to be updated in configuration folder ***bahmni-config/openmrs/i18n/appointment/locale_en.json**.* To know more about what and how to configure translations, please refer [internationalization support](/wiki/spaces/BAH/pages/34013224/Internationalization+Support).

| ``` "APPOINTMENT_BOOKING_MESSAGE": "Appointment for #patientName, #patientId on #dateTime for #service is booked at #clinicName. For any queries call us on #helpDeskNumber.", "RECURRING_APPOINTMENT_BOOKING_MESSAGE": "A recurring appointment for #patientName, #patientId for #service is booked for every #frequency at #clinicName. Your next appointment is at #dateTime. For any queries call us on #helpDeskNumber.", "TELECONSULTATION_APPOINTMENT_BOOKING_MESSAGE": "A teleconsultation appointment for #patientName, #patientId on #dateTime for #service is booked at #clinicName. Please click on the link #meetingLink on #dateTime to join the consultation. For any queries call us on #helpDeskNumber." ``` |
| --- |

Note : The words start with '#' will be replaced with respective medical facility, patient details and appointment details dynamically and #helpDeskNumber needs to be configured.

## Configure Helpdesk Contact Info

One can configure helpdesk contact info of the medical facility to be sent along with the message. For this we have to update the global property value.

- 
Go to **OpenMRS &rarr; Admin &rarr; Advance Settings** and set `clinic.helpDeskNumber` global property value to the medical facility's contact info (phone number/email). By default, the value will be***"+919999999999". ***If the property is not available in the Advance Settings, create one and set the value. 

| On this Page |
| --- |
|  |

| **Related Pages** |
| --- |
| [Set up Services & Specialities](/wiki/spaces/BAH/pages/137953304/Set+up+Services+Specialities) [Manage Appointments](/wiki/spaces/BAH/pages/138313802/Manage+Appointments) [Configure Views of Appointments](/wiki/spaces/BAH/pages/137953307/Configure+Views+of+Appointments) [User Roles and Privileges for Appointment Scheduling](/wiki/spaces/BAH/pages/144801828/User+Roles+and+Privileges+for+Appointment+Scheduling) [Integration Points](/wiki/spaces/BAH/pages/299597962/Integration+Points) [Appointment Request](/wiki/spaces/BAH/pages/927432705/Appointment+Request) [Configuration to enable SMS alerts for Appointments](/wiki/spaces/BAH/pages/3168075832/Configuration+to+enable+SMS+alerts+for+Appointments) [Setup Teleconsultation Feature](/wiki/spaces/BAH/pages/3738796112/Setup+Teleconsultation+Feature) |

| Feature Guide |
| --- |
| [Appointment Scheduling - Feature Guide](/wiki/spaces/BAH/pages/32604198/Appointment+Scheduling) |
