---
id: "3738796112"
title: "Setup Teleconsultation Feature"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3738796112/setup-teleconsultation-feature"
version: 4
updated: "2024-09-08T15:51:05.655Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:37.940Z"
---

# Setup Teleconsultation Feature

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3738796112)  
> **Versión del documento:** v4 (2024-09-08T15:51:05.655Z) | **Autor/Editor:** Mohankumar Thangavel

---

Teleconsultation in Bahmni is a remote way of connecting Patients and Doctors who cannot connect face to face. Bahmni teleconsultation is web-connected with the existing system which supports patients and doctors to join in a video call together. Read more about the feature [here](/wiki/spaces/BAH/pages/1961918491/Teleconsultation).
 
Bahmni leverages Jitsi as a platform to enable video consultations between patients and doctors. The default setup uses [meet.jitsi.si](http://meet.jitsi.si) which can be used for testing/demo purposes. For production use-cases we highly recommend self hosting the jitsi service. Read more about setting up Jitsi in the following pages.

Detailed guide - [https://jitsi.github.io/handbook/docs/devops-guide/](https://jitsi.github.io/handbook/docs/devops-guide/)

On Docker - [https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker)

Once you self-host Jitsi, update the URL pattern in OpenMRS → Administration → Settings → Bahmni → `Appointment Tele Consultation Server Url Pattern` property with your domain name.

 
Related Pages

- 
[Feature Guide and Demo Video](/wiki/spaces/BAH/pages/2140045317/Bahmni+Tele-consultation+Feature+Setup+on+v0.92+or+v0.93)

- 
[Setup Guide for Old versions](/wiki/spaces/BAH/pages/2140045317/Bahmni+Tele-consultation+Feature+Setup+on+v0.92+or+v0.93)

## Enabling Teleconsultation Appointments

Bahmni Appointment Scheduling module allows marking an appointment as Teleconsultation appointment upon which a teleconsultation link will be generated and the provider and the patient can join.

### Enable Teleconsultation Appointments Feature

In your implementation specific configuration, add the `allowVirtualConsultation` property with value as `true` in the `openmrs/apps/appointments/app.json` file.

```
  "config": {
    "allowVirtualConsultation": true,
```

Now when scheduling an appointment, one can find the option to mark it as Teleconsultation as shown in the below screenshot.
![](https://bahmni.atlassian.net/wiki/download/attachments/3738796112/Screenshot%202024-09-08%20at%208.25.01%E2%80%AFPM.png?version=1&modificationDate=1725807364507&cacheVersion=1&api=v2)
Once the appointment is scheduled as teleconsultation, the meeting can be joined either from the appointments page and opening the appointment and clicking on the `Join Teleconsultation` button or from the appointments display control and clicking on the `Join Teleconsultation` button from there.

![](https://bahmni.atlassian.net/wiki/download/attachments/3738796112/image-20240908-145926.png?version=1&modificationDate=1725807570757&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/3738796112/image-20240908-150009.png?version=1&modificationDate=1725807612843&cacheVersion=1&api=v2)

### Enable Adhoc Teleconsultation
 This feature is applicable starting Bahmni Lite v1.0.0 or Bahmni Standard v1.0.0

Bahmni provides the ability for a clinician to start an Adhoc Tele-consultation (on-demand) with a patient. To enable this, one needs to set `allowAdhocTeleConsultation` to `true` in `/openmrs/apps/clincal/app.json` in your implementation specific configuration. **Note this config should be in clinical/app.json.**

```
"config": {
        "allowAdhocTeleConsultation": true,
```

## Enabling Email Notifications for Teleconsultation
 This is applicable for both teleconsultation appointment booking and ad-hoc teleconsultations

Bahmni supports sending Email notification to the patient on booking a teleconsultation appointment with the teleconsultation meeting link or when an adhoc teleconsultation is started. 

For emails to be sent the patient’s email needs to be captured while registration. Add a person attribute as email and capture it during registration. 

To enable email sending, you need to configure SMTP server details in the .env file. Follow [this page](/wiki/spaces/BAH/pages/3739189264/SMTP+Configuration+for+sending+emails+docker) to setup SMTP information to OpenMRS service in docker compose. 

There are few global properties which can be used to configure email subject and content templates. The configure the below properties, navigate to OpenMRS → Administration → Settings → Bahmni

- 
Appointment Tele Consultation Server Url Pattern → The Jitsi Domain URL pattern with which teleconsultation will happen.

- 
Appointment Tele Consultation Send Email → Defines whether or not the send email. Set this to true

- 
Appointment Tele Consultation Patient Email Notification Subject → Subject Line for teleconsultation appointment booking confirmation

- 
Appointment Tele Consultation Patient Email Notification Template → Content template for teleconsultation appointment booking information.

- 
Appointment Adhoc Tele Consultation Patient Email Notification Subject → Subject Line for adhoc teleconsultation meeting started

- 
Appointment Adhoc Tele Consultation Patient Email Notification Template → Content template for adhoc teleconsultation meeting.

- 
Appointment Adhoc Tele Consultation Bcc Emails → Additional Emails to send notification when an adhoc consultation is started.
