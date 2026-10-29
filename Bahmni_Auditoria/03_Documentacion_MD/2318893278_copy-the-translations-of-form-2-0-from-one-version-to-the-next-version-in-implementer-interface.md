---
id: "2318893278"
title: "Copy the translations of form (2.0) from one version to the next version in implementer-interface"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893278/copy-the-translations-of-form-2-0-from-one-version-to-the-next-version-in-implementer-interface"
version: 3
updated: "2021-04-05T04:58:23.407Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:51.264Z"
---

# Copy the translations of form (2.0) from one version to the next version in implementer-interface

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893278)  
> **Versión del documento:** v3 (2021-04-05T04:58:23.407Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

**Feature available from Bahmni-V0.93**

**Usecase:** 

As a user, 
we want to see our previous version translations to the next version of a form2.0 form.
So that we don't need to write all our translations again in the new version

**Description:**
When a user clicks on translations in the form builder, he will be directed to adding translations page, where he can be able to add his translations to the respective concepts. Now, any time if I click on a new version of a form, the translations will be empty. I should be able to see my previous versions of translations on that page. This will be useful, the user can be able to reuse his previous versions of translations in his current version.

- 
Translations from the last version should be copied to the next version in the UI 

- 
User can edit the translation from UI where required

- 
New translations will be copied to the next version

- 
Translations, when imported, should be copied in the translations files - currently, they are in draft mode when imported and on publishing, the translation files are lost

Implementation notes:

- 
If we are creating a  new form, the translation file will be generated for that first version.

- 
while you are editing a published version, it will create a new next version of that form, currently in which the published translations are getting lost and fresh translations file is created.

- 
We implement in a way that while clicking on edit for published we are storing that published version as a reference version, which will be used to fetch the reference version translations and copy to the newly created version translation file.

Openmrs Talk link: [https://talk.openmrs.org/t/form-2-0-translations-are-not-carry-forwarded-to-subsequent-versions/22668](https://talk.openmrs.org/t/form-2-0-translations-are-not-carry-forwarded-to-subsequent-versions/22668)
