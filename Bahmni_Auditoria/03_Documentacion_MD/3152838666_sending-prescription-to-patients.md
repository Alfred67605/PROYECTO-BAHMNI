---
id: "3152838666"
title: "Sending prescription to patients"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3152838666/sending-prescription-to-patients"
version: 8
updated: "2023-03-08T12:01:44.598Z"
author: "Kavitha S"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:48.543Z"
---

# Sending prescription to patients

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3152838666)  
> **Versión del documento:** v8 (2023-03-08T12:01:44.598Z) | **Autor/Editor:** Kavitha S

---

## Purpose 
In cases where the patients would require a copy of their prescription, the provider should be able to send the prescription to the patient. 

Currently Bahmni supports sending prescription via email and ability to download the prescription on the provider’s system which can be handed over to the patient after printing.

Bahmni would also support sending prescriptions via SMS and WhatsApp, where the text message would contain a link to download the prescription .pdf file.

#### Where to access : 

On the treatments display control, one would be able to see the share icon against each visit. Clicking on the share icon provides options to share the prescription. Currently, email and download option would be enabled

#### Screenshots : 
![](https://bahmni.atlassian.net/wiki/download/attachments/3152838666/Screenshot%202023-03-01%20at%2011.51.35%20AM.png?version=1&modificationDate=1677651704859&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/3152838666/Screenshot%202023-03-01%20at%2011.52.39%20AM.png?version=1&modificationDate=1677651769939&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/3152838666/Screenshot%202023-03-01%20at%2011.59.09%20AM.png?version=1&modificationDate=1677652158538&cacheVersion=1&api=v2)
## Technical overview

### Configuration

| Where to Configure ? Add to * clinical /dashboard.json* under “treatment” section for the print headers to be used in the pdf generation. |
| --- |

### Sample Config

| ``` "prescriptionPrint": { "title": "Bahmni", "header": "Prescriptions", "logo": "../images/bahmniLogo.png" } ``` |
| --- |

### Configuration to enable sending email option for prescription

One needs to have the privilege `Send Email` for sending any mail. For this we have to assign the privilege to user’s role.

- 
Go to **OpenMRS → Manage Roles → **Select Role which needs to have the privilege for sending mails** →** assign the privilege `Send Email` **→** save the role. The email won’t be sent if the user who are triggering the email doesn’t have this privilege.

One can enable sending email option for prescription from the patient dashboard. For this we have to update the global property value. 

- 
Go to **OpenMRS → Admin → Advance Settings** and set `bahmni.enableEmailPrescriptionOption` global property value to `true`. By default, the value will be `false` and the email icon won’t be visible in the sharing options.

If the patient doesn’t have email address added to the registration details, then the email icon will be disabled and one can’t send prescription email.

| On this Page |
| --- |
|  |

| **Related Display Controls** |
| --- |
| [Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control) [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control) [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control) [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control) [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients) |
