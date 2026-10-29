---
id: "3168075777"
title: "Configure Sending SMS and WhatsApp message on Patient Registration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168075777/configure-sending-sms-and-whatsapp-message-on-patient-registration"
version: 2
updated: "2023-04-10T11:52:15.144Z"
author: "Kavitha S"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:02.394Z"
---

# Configure Sending SMS and WhatsApp message on Patient Registration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168075777)  
> **Versión del documento:** v2 (2023-04-10T11:52:15.144Z) | **Autor/Editor:** Kavitha S

---

# Purpose
In cases where the medical facility would want to notify the patients with their details upon successful registration, then it should trigger an SMS to the phone number added to the patient.

Currently Bahmni supports sending an SMS notification and a WhatsApp notification upon successful registration at the medical facility based on configurations.

Note : If the patient is not registered with phone number, then one can't send either SMS or WhatsApp message notification.

| **IMPORTANT** |
| --- |
| One needs to bring up the `sms-service` docker container in order for SMS sending functionality to work. Please refer [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168010241/SMS+Service+Configuration+docker) to know how to setup the service. |

## Configuration to enable sending SMS option for registration
One can enable sending SMS option upon successful registration of any patient in the medical facility. For this we have to update the global property values.

- 
Go to **OpenMRS &rarr; Admin &rarr; Advance Settings** and set `sms.endpoint` global property value as `/sms-service/notification/sms`.  If the property is not available in the Advance Settings, create one and set the value. 

- Go to **OpenMRS &rarr; Admin &rarr; Advance Settings** and set `sms.enableRegistrationSMSAlert` global property value as `true`. By default, the value will be `false` and the SMS won't get triggered when registering a patient. If the property is not available in the Advance Settings, create one and set the value. Once this is enabled, the SMS will get triggered automatically.

One needs to have the privilege `Send SMS` for sending any SMS. For this we have to assign the privilege to user&rsquo;s role.

- 
Go to **OpenMRS &rarr; Manage Roles &rarr; **Select Role which needs to have the privilege for sending SMS** &rarr;** assign the privilege `Send SMS` **&rarr;** save the role. The SMS won&rsquo;t be sent if the user who are triggering the SMS doesn&rsquo;t have this privilege.

## Configuration to enable WhatsApp option for registration

One can enable sending WhatsApp message option by adding the following configuration under config section in the [registration/app.json](https://bahmni.atlassian.net/wiki/display/BAH/Registration+App) file.

| ``` "enableWhatsAppButton": true ``` |
| --- |

If `"enableWhatsAppButton"` is set as `true`, one can see whatsApp icon like below in the registration page near the `save` button. Upon clicking the icon and opening WhatsApp, the message will be typed in the chat window of respective contact number of the patient.
![](https://bahmni.atlassian.net/wiki/download/attachments/3168075777/Screenshot%25202023-04-03%2520at%252010.09.29%2520PM.png%3Fversion=1%26modificationDate=1680539990366%26cacheVersion=1%26api=v2%26effects=drop-shadow?version=1&modificationDate=1680678235883&cacheVersion=1&api=v2)

## Configuration for Message Content
To configure the message content for both SMS and WhatsApp, please add the following configuration under config section in the [registration/app.json](https://bahmni.atlassian.net/wiki/display/BAH/Registration+App) file.

| ``` "registrationMessage": "REGISTRATION_MESSAGE" ``` |
| --- |

Here, `"REGISTRATION_MESSAGE"` is a translation key of localisation. Below are key value pair that needs to be updated in configuration folder ***bahmni-config/openmrs/i18n/registration/locale_en.json**.* To know more about what and how to configure translations, please refer [internationalization support](/wiki/spaces/BAH/pages/34013224/Internationalization+Support).

| ``` "REGISTRATION_MESSAGE": "Thank you for registering at #clinicName. Please note your Patient Registration Details: #patientId, #name,#gender, #age years. For any queries call us on #helpDeskNumber. Clinic Timings: All weekdays, 10 am - 7 pm. Weekends closed." ``` |
| --- |

Note : The words start with '#' will be replaced with respective medical facility and patient details dynamically and #helpDeskNumber needs to be configured.

## Configure Helpdesk Contact Info
One can configure helpdesk contact info of the medical facility to be sent along with the message. For this we have to update the global property value.

- 
Go to **OpenMRS &rarr; Admin &rarr; Advance Settings** and set `clinic.helpDeskNumber` global property value to the medical facility's contact info (phone number/email). By default, the value will be***"+919999999999". ***If the property is not available in the Advance Settings, create one and set the value. 

| On this Page |
| --- |
|  |

| **Related Pages** |
| --- |
| [Configure Patient Registration](/wiki/spaces/BAH/pages/32014595/Configure+Patient+Registration) [Configure Patient Search & Display Attributes](/wiki/spaces/BAH/pages/32014597/Configure+Patient+Search+Display+Attributes) [Configure Patient Card Prints](/wiki/spaces/BAH/pages/32014599/Configure+Patient+Card+Prints) [Configure Display Controls in Print](/wiki/spaces/BAH/pages/72581122/Configure+Display+Controls+in+Print) [Configure Sending SMS and WhatsApp message on Patient Registration](/wiki/spaces/BAH/pages/3168075777/Configure+Sending+SMS+and+WhatsApp+message+on+Patient+Registration) [Configuring display order of patient names](/wiki/spaces/BAH/pages/2434990081/Configuring+display+order+of+patient+names) [Configure Custom Patient Attribute with Icon](/wiki/spaces/BAH/pages/3495657474/Configure+Custom+Patient+Attribute+with+Icon) |

| Feature Guide |
| --- |
| [Patient Registration - Feature Guide](http://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604190/Patient+Registration) |
