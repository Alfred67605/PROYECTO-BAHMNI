---
id: "3202613249"
title: "SMS Notification"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3202613249/sms-notification"
version: 4
updated: "2023-11-29T13:58:36.068Z"
author: "Anubhav Bansal"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:43.204Z"
---

# SMS Notification

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3202613249)  
> **Versión del documento:** v4 (2023-11-29T13:58:36.068Z) | **Autor/Editor:** Anubhav Bansal

---

Since Bahmni Lite v1.0, Bahmni provides the ability to send SMS notification to patients for events like Patient Registered, or Appointment Scheduled, etc. This requires Bahmni to make use of a 3rd party SMS Gateway, which needs to be configured, for sending SMS. For more details read: [SMS Service Configuration (docker)](/wiki/spaces/BAH/pages/3168010241/SMS+Service+Configuration+docker) 

**To send sms we have to ensure that following global properties should enable:**

**. **When we send sms during registration we have to make sure that global properties like “`sms.enableRegistrationSMSAlert`", “`sms.enableRegistrationSMSAlert`" or “`sms.enableRegistrationSMSAlert`" should be enable true based on the requirement of sending sms.

**Communication module is added :**

. It generate the message which we have to send to the clients. sms-service generate authentication token and communication module use this token to send message with the help of sms-service. [git repo](https://github.com/Bahmni/openmrs-module-communication)
