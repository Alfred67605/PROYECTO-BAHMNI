---
id: "2434990081"
title: "Configuring display order of patient names"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2434990081/configuring-display-order-of-patient-names"
version: 2
updated: "2021-04-27T17:15:48.505Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:02.853Z"
---

# Configuring display order of patient names

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2434990081)  
> **Versión del documento:** v2 (2021-04-27T17:15:48.505Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

This feature is available from 0.93V-Bahmni

## Description

**Configure Display Order of Patient Name Fields in Registration Page**

```
"patientNameDisplayOrder": ["firstName", "middleName", "lastName"]
```

Patient Name field can be configured only in Registration Page, by specifying the order in the "patientNameDisplayOrder" setting in **app.json in registration**.

- 
This configuration should include all three fields in the desired order.

- 
If any invalid configuration is provided, the default behavior is to display **FirsName, MiddleName, and LastName**.

- 
Use existing hide/show options of configuration for **middleName and lastName**.

- 
The default behavior is to display FirstName, MiddleName, and LastName if a specific configuration is not specified in **app.json in registration.**
