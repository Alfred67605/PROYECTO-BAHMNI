---
id: "53837989"
title: "Configuring Access Keys in Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53837989/configuring-access-keys-in-bahmni"
version: 6
updated: "2016-05-25T11:08:53.664Z"
author: "Sushma Rao (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:55.350Z"
---

# Configuring Access Keys in Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53837989)  
> **Versión del documento:** v6 (2016-05-25T11:08:53.664Z) | **Autor/Editor:** Sushma Rao (Deactivated)

---

As part of internationalization, Bahmni allows the user to configuring access keys that are supported in Bahmni.

**directory_location = "/var/www/bahmni_config/openmrs/i18n"**

**selected_locale = locale selected at the time of login (Example : en)**

| Access Key | Default Value | Location to override |
| --- | --- | --- |
| CLINICAL_PRINT_ACCESS_KEY | R | {{directory_location}}/clinical/ locale_{{selected_locale}}.json |
| MEDICATION_AS_NEEDED_ACCESS_KEY | O | {{directory_location}}/clinical/ locale_{{selected_locale}}.json |
| CONSULTATION_SHORTCUT_KEY | C | {{directory_location}}/clinical/ locale_{{selected_locale}}.json |
| REGISTRATION_SAVE_ACCESS_KEY | S | {{directory_location}}/registration/locale_{{selected_locale}}.json |
| REGISTRATION_BACK_ACCESS_KEY | B | {{directory_location}}/registration/locale_{{selected_locale}}.json |
| REGISTRATION_ENTER_VISIT_DETAILS_ACCESS_KEY | V | {{directory_location}}/registration/locale_{{selected_locale}}.json |

 

**Registration Print**

**
**Print buttons on Registration Page are configurable in Bahmni. For each Print option configured, one can configure access key. Refer [Configure Patient Card Prints](/wiki/spaces/BAH/pages/32014599/Configure+Patient+Card+Prints).

| Action | Access key |
| --- | --- |
| Print | character configured for " shortcutKey " |
