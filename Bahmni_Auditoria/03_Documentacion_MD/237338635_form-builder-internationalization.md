---
id: "237338635"
title: "Form Builder Internationalization"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/237338635/form-builder-internationalization"
version: 11
updated: "2017-11-09T05:31:39.740Z"
author: "Shashikanth Gadgay (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:46.477Z"
---

# Form Builder Internationalization

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/237338635)  
> **Versión del documento:** v11 (2017-11-09T05:31:39.740Z) | **Autor/Editor:** Shashikanth Gadgay (Deactivated)

---

## Purpose and Benefits

Form Builder Internationalization feature provides ability to implementer for translating published forms to different locales. With this feature user can see the form data in the language of logged in locale if the form is translated by implementer.

Form Translations Directory
 
All the translations are saved in **/home/bahmni/clinical_forms/translations/ **directory. Implementer can also edit the translations directly in the corresponding file. Immediately after form publish the file will only have translations for default locale. The directory is set as a global property **'bahmni.formTranslations.directory'**. It can be changed by updating the global property.

**Steps to internationalize a form:**

- Create a form and publish it.

- Go to Home Dashboard → Implementer Interface → Form Builder. Click on translate icon for the form that needs to be internationalized.

          ![](https://bahmni.atlassian.net/wiki/download/attachments/237338635/image2017-11-7_13-20-38.png?version=1&modificationDate=1510041041483&cacheVersion=1&api=v2)

- The page will intially have translations for default locale.To generate translations for other locale click on the drop down of locales on the top.

          ![](https://bahmni.atlassian.net/wiki/download/attachments/237338635/Screen%20Shot%202017-11-07%20at%201.36.01%20PM.png?version=1&modificationDate=1510042014241&cacheVersion=1&api=v2)

- Click on the drop down to select another value for the translation or write new one.

          ![](https://bahmni.atlassian.net/wiki/download/attachments/237338635/Screen%20Shot%202017-11-07%20at%201.39.56%20PM.png?version=1&modificationDate=1510042247054&cacheVersion=1&api=v2)

- Save the edited translations before switching to other locale.

Note
 
Default locale used to translate form on publish is picked form openmrs global property **default_locale. **If default locale is changed after creating forms then all the forms needs to be recreated and concepts added in forms should have names for the changed locale in openmrs.
