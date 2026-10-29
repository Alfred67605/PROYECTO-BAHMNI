---
id: "703660135"
title: "Surgical Queues in Operation Theatre Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703660135/surgical-queues-in-operation-theatre-module"
version: 1
updated: "2018-08-20T12:15:46.020Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:39.925Z"
---

# Surgical Queues in Operation Theatre Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703660135)  
> **Versión del documento:** v1 (2018-08-20T12:15:46.020Z) | **Autor/Editor:** Himabindu Akkinepalli

---

There are two surgical queues in OT app.

- **To be scheduled: **This queue shows a list of patients that have a surgeon pre-op assessment form or a surgeon follow up form filled with “Patient consent” as “yes” and who do not have an surgery scheduled post filling the form. The queue also shows a list of postponed surgeries.

**                     Note:  **Sorted on date of form filled (earliest first)
- **Scheduled: **This queue shows a list of patients that have “scheduled” appointments sorted on date of surgery (earliest first). Detailed document on the queues can be found [here.](https://docs.google.com/document/d/16ekQcH7LcdgsfPQW4CRgBngpBoL8m3xT9cK6IlMMFaY/edit)

**Validations and constraints:**

- If there is no form filled for a user and a surgery has been created and postponed. This surgery will not be shown on the “to be scheduled” queue
- Multiple postponed surgeries for a user will not be shown on “to be scheduled” queue
- Once the surgery is completed/postponed or cancelled the surgery is not shown in the “scheduled” queue.
