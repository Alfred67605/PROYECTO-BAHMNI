---
id: "32014599"
title: "Configure Patient Card Prints"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014599/configure-patient-card-prints"
version: 32
updated: "2021-05-13T09:30:07.142Z"
author: "Nishant Kumar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:01.217Z"
---

# Configure Patient Card Prints

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014599)  
> **Versión del documento:** v32 (2021-05-13T09:30:07.142Z) | **Autor/Editor:** Nishant Kumar

---

## Purpose and Benefits

In Bahmni, patient registration cards can be printed out to serve as a method of identification. This is particularly useful where the patient's records cannot be digitally accessed during the hospital workflow. The registration print functionality is completely configurable based on user requirements. 

## Steps

The Print functionality for registration appears in the Registration module as shown below :

![](https://bahmni.atlassian.net/wiki/download/attachments/32014599/Screen%20Shot%202015-11-18%20at%2012.09.47%20PM.png?version=1&modificationDate=1447828814557&cacheVersion=1&api=v2)**

To configure the Registration print refer to [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/app.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/app.json)

The app.json contains the following snippet which can be changed to fit the implementation : 

```
"printOptions": [
            {
				"translationKey": "REG_CARD_PRINT",
				"templateUrl": "/bahmni_config/openmrs/apps/registration/registrationCardLayout/print.html",
				"shortcutKey": "p"
			},
            {
				"label": "Print Supplemental Paper",
				"templateUrl": "/bahmni_config/openmrs/apps/registration/supplementalPaperLayout/print.html",
				"shortcutKey": "r"
			}
```

printOptions is an array that defines the print buttons. 

| Key | Value | Mandatory |
| --- | --- | --- |
| translationKey | If the label is to be internationalized, then a translationKey should be provided. The Key should be defined in locale.json. Example: translationKey: "REG_CARD_PRINT" REG_CARD_PRINT should be defined in locale.json in this manner - REG_CARD_PRINT: 'Print Reg Card' | Y |
| label | If Internationalization is not required, then use label instead of translationKey for showing the label on the print button. If translationKey and label both are provided then translationKey will take the precedence. Example: label:  'Print Reg Card' | N |
| templateUrl | This will define the path for the URL that has the data that is to be printed. | Y |
| shortcutKey | This can be used to provide a keyboard shortcut for the Print button. | N |

Card Print options
 
**For more options on how to show various Patient attributes, addresses or observations/indicator values in the card print layouts see these examples:**

- [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/registrationCardLayout/print.html](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/registrationCardLayout/print.html)
- [https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/supplementalPaperLayout/print.html](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/registration/supplementalPaperLayout/print.html)

Default Config is located in /var/www/bahmni_config

On this Page

 
 
 
Feature Details**

[Registration - Feature Guide](/wiki/spaces/BAH/pages/32604190/Patient+Registration)
