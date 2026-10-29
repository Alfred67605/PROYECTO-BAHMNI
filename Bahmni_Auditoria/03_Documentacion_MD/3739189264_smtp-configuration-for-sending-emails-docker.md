---
id: "3739189264"
title: "SMTP Configuration for sending emails (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3739189264/smtp-configuration-for-sending-emails-docker"
version: 1
updated: "2024-09-08T15:50:20.117Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:13.033Z"
---

# SMTP Configuration for sending emails (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3739189264)  
> **Versión del documento:** v1 (2024-09-08T15:50:20.117Z) | **Autor/Editor:** Mohankumar Thangavel

---

Bahmni supports sending of email notifications to patients on different events such as teleconsultation appointments, adhoc teleconsultation, prescription sharing etc. For these emails to flow out of Bahmni, SMTP server details needs to be configured in the .env file which will be used by the OpenMRS service.

### .env file configuration

In your implementation specific env file, update the values for the below files. These properties can be retrieved from your SMTP provider such as AWS SES, Google Mail etc.

```
SEND_MAIL=true
MAIL_FROM=
MAIL_SMTP_HOST=
MAIL_SMTP_PORT=
MAIL_USER=
MAIL_PASSWORD=
MAIL_TRANSPORT_PROTOCOL=smtps
MAIL_SMTP_AUTH=true
MAIL_SMTP_STARTTLS_ENABLE=true
MAIL_SMTP_SSL_ENABLE=true
MAIL_DEBUG=false
```

Once the properties are updated, recreate the service by running `docker compose up -d openmrs`.

There are also few Global properties which control email sending behaviours for OpenMRS features. Thos can be accessed by navigating to OpenMRS → Administration → Settings → Mail

Reference Links:

- 
[https://support.google.com/a/answer/176600](https://support.google.com/a/answer/176600)
