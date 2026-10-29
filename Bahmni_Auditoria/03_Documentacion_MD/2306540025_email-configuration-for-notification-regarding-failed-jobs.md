---
id: "2306540025"
title: "Email Configuration for Notification Regarding Failed Jobs"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540025/email-configuration-for-notification-regarding-failed-jobs"
version: 1
updated: "2021-04-05T08:54:36.595Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:33.972Z"
---

# Email Configuration for Notification Regarding Failed Jobs

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540025)  
> **Versión del documento:** v1 (2021-04-05T08:54:36.595Z) | **Autor/Editor:** Bavisetti Venkatesh

---

A mail will be received incase of any job fails after every run of bahmni-mart application.

** **For getting mail you have to provide values for **‘mail_subject’**, **‘mail_from’ **and **‘mail_recipients’ **in **‘bahmni-mart-playbook/roles/bahmni-mart/defaults/main.yml’**. For sending mail to multiple recipients, you can mention all the recipient mail ids separated by commas (see below example).

**Note - **You won’t get mail if values of **mail_recipients** or **mail_from** is empty. 

**For Example** -

You have to provide values for **‘mail_subject’**, **‘mail_from’ **and **‘mail_recipients’ **in **‘bahmni-mart-playbook/roles/bahmni-mart/defaults/main.yml’ **like below example.

  **mail_subject** = “Notification regarding failed jobs”

  **mail_from** = “no-reply@bahmni-mart.notifications”

  **mail_recipients** = “recipient_one@gmail. com, [recipient_two@gmail.com](mailto:recipient_two@gmail.com)”

Whenever job fails you will get mail into spam folder of given recipients. For getting mail to inbox rather than going to spam folder, the recipients have to apply the below filter procedure.

**Filter Process for getting mail in Inbox**

- 
You have to go to recipients mail.

- 
In mail at top right corner there is Setting sign.

- 
Click on that it will give dropdown. In dropdown click on the Settings.

- 
Then go to Filters and Blocked Addresses tab.

- 
Click on ‘Create a new filter’ and then provide value of 

**‘mail_from’** address which given in **bahmni-mart-playbook/roles/bahmni-mart/defaults/main.yml **file (like given in the example - no-reply@bahmni-mart.notifications) in From text block.

- 
Then click on ‘Create filter’ and tas Never send it to Spam to that filter and click on Create filter again .

By doing this it will create a filter and mail will come to inbox.

**For Developers - To Run locally **

Your application-dev.properties file should config with below values for getting mail.

  bahmni-mart.mail.subject = Notification regarding failed jobs

  bahmni-mart.mail.from =  “no-reply@bahmni-mart.notifications”

  bahmni-mart.mail.recipients = “recipient_one@gmail. com, [recipient_two@gmail.com](mailto:recipient_two@gmail.com)”

applictaion-dev.properties file path  -

***/opt/bahmni-mart/properties/application-dev.properties***

After this you have to follow above filter process for getting mail in inbox rather than in spam.
