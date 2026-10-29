---
id: "34439351"
title: "Product Internationalization"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34439351/product-internationalization"
version: 29
updated: "2018-12-08T16:11:37.904Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:27.926Z"
---

# Product Internationalization

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34439351)  
> **Versión del documento:** v29 (2018-12-08T16:11:37.904Z) | **Autor/Editor:** Angshuman Sarkar

---

**

## Purpose and Benefits

Multi-Lingual Support (Internationalization) provides a way to make the application available in multiple languages. Internationalization is also referred to as **i18n** because there are 18 characters between 'i' and 'n' in the word 'internationalization'. Bahmni provides support for internationalization with minimal configuration changes. 

Internationalization of the product pages is supported through the app config files. These files can be accessed [here](https://github.com/Bhamni/openmrs-module-bahmniapps/tree/master/ui/app/i18n).

## Steps

## 1. Add a locale in OpenMRS

OpenMRS uses a setting called *locale.allowed.list* to keep track of the list of supported locales. The setting can be changed using the [OpenMRS Advanced](/wiki/spaces/BAH/pages/37945364/Configure+Advanced+Settings) settings. This setting contains a comma separated list of locales. To add a locale, add it after the last one, and remove any locale that is not supported. For example, en, es, fr, it, pt, etc.

Note, for country specific locales, you will need to put right locale codes in OpenMRS. You may check [here](https://wpastra.com/docs/complete-list-wordpress-locale-codes/) for list of locale codes. 

 The list of supported locales will then show up as a drop down list on the Bahmni Home page.
 
From 0.89, you can see the corresponding languages for the supported locales if you configure the mapping in the **localeLanguages.json** file which can be found in the path **/bahmni_config/openmrs/apps/home**
Sample configuration**

```
{"locales": [ {"code": "en", "nativeName": "English"},
              {"code": "es", "nativeName": "Español"},
              {"code": "fr", "nativeName": "Français"},
              {"code": "it", "nativeName": "Italiano"},
              {"code": "pt", "nativeName": "Português"}]
}
```

![](https://bahmni.atlassian.net/wiki/download/attachments/34439351/Screen%20Shot%202017-04-04%20at%204.09.34%20PM.png?version=1&modificationDate=1491303328495&cacheVersion=1&api=v2)

If you don't specify the language mapping for the locale code in **localeLanguages.json, **the code itself will be displayed.
 
To change the locale, select the language on the Bahmni home page itself, before logging in.

## 2. Add files for the locale in bahmniapps

The directory **/var/www/bahmniapps/i18n** contains all the files required for relevant locales. The directory structure reflects the various modules in the application. Each module has JSON files supporting different locales.
 
For example the file **locale_en.json **supports the English language.

For example, the directory **/var/www/bahmniapps/i18n/** will have sub-directories like below

![](https://bahmni.atlassian.net/wiki/download/attachments/34439351/i18n_directories.png?version=1&modificationDate=1544285489177&cacheVersion=1&api=v2)

**

within each directory, you may find contents like 

![](https://bahmni.atlassian.net/wiki/download/attachments/34439351/SJRI_%E2%80%94_vagrant_localhost__var_www_bahmniapps_i18n_%E2%80%94_ssh_%E2%97%82_vagrant_ssh_%E2%80%94_193%C3%9749.png?version=2&modificationDate=1544284960398&cacheVersion=1&api=v2)

 
So, if you want to add support for the Russian language, you just need to add a file named **locale_ru.json** in all module sub-directories.

If you want to put translation files for Spanish spoken in Peru, then you would need a file "locale_en_PE".  

**What do the JSON files contain?**

The JSON files contain a JSON object consisting of key-value pairs. All the keys are internally mapped to the text that is displayed in the module's web page to which the JSON file belongs to.

```
{
    "BAHMNI_PAGE_TITLE_KEY": "Bahmni Home",
    "LOGIN_LABEL_LOGIN_KEY": "Login",
    "LOGIN_LABEL_USERNAME_KEY": "Username",
    "LOGIN_LABEL_PASSWORD_KEY": "Password",
    "LOGIN_LABEL_LOCATION_KEY": "Location",
    "LOGIN_LABEL_LOGIN_ERROR_MESSAGE_KEY": "You are not authenticated or your session expired. Please login.",
    "LOGIN_MESSAGE_ENTER_USERNAME_KEY": "Enter your username",
    "LOGIN_MESSAGE_ENTER_PASSWORD_KEY": "Enter your password",
    "LOGIN_LABEL_SELECT_LOCATION_KEY": "Select Location",
    "LOGIN_LABEL_SELECT_LOCALE_KEY": "Select Locale",
    "HEADER_LABEL_LOGOUT_KEY": "Logout"
}
```

The JSON files should be created in  *bahmniapps --> i18n* folder.

To get started, you can just copy existing locale file and rename it.
 
For example copy locale_en.json file and rename it as locale_ru.json. Then, translate the text values in that file and replace them with text in your language.

Internationalization of product pages can also be achieved through [Overriding Config](https://bahmni.atlassian.net/wiki/display/BAH/Overriding+Config)

**Performing complete translation:**

Bahmni application by default supports English locale. It comes bundled with **locale_en.json** files for all modules. These files contain keys that correspond to the text inside the application. So, an implementer can't directly access those files. Instead you can access them at [https://github.com/Bhamni/openmrs-module-bahmniapps/tree/master/ui/app/i18n](https://github.com/Bhamni/openmrs-module-bahmniapps/tree/master/ui/app/i18n). Copy all keys corresponding to the module into the locale file and translate all those text values also.

## **3. Download the translated locale files from Transifex:**

One can download and use **bahmniapps** locale files that are available in [Bahmni project on the Transifex website](https://www.transifex.com/openmrs/bahmni). One can also contribute to the Bahmni Project on Transifex by translating. For more information on contributing to Bahmni check this [Translating Bahmni](https://bahmni.atlassian.net/wiki/display/BAH/Translating+Bahmni) page.

Note
 
If you see any typo in one of Bahmni Transifex locale files (English) and want it to be fixed then you can a send a pull request to [bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps/tree/master/ui/app/i18n) repo so that somebody from team can review and merge the PR.

## Enable Language Switch in OpenELIS / Lab

Currently OpenELIS only supports English & French language (for some screens). To see the Language Switch option in OpenELIS login page, turn on the below mentioned flag, by firing an Update statement in OpenELIS database: 
Enable Language Switch: **

```
 UPDATE clinlims.site_information set value=true where name='allowLanguageChange';
```

 
After running above command and for changes to take place, OpenElis / Lab service needs to be restarted.

```
sudo service bahmni-lab restart
```

**

You can also configure the default language you want to see by firing an update statement in OpenELIS database:

```
UPDATE clinlims.site_information set value='fr-FR' where name='default language locale';
```

To pull new language from transifex, follow readme in [OpenELIS repository](https://github.com/Bahmni/OpenElis).

On this Page

 
 
 
Feature Details**

[Internationalization Support - Feature Guide](/wiki/spaces/BAH/pages/34013352/Multi-Lingual+Support)

**Related Links**

[(Discussion) OpenELIS Translations](https://talk.openmrs.org/t/openelis-translation/5311)
