---
id: "115780492"
title: "Configure White Labeling"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115780492/configure-white-labeling"
version: 12
updated: "2024-07-23T16:26:23.565Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:24.736Z"
---

# Configure White Labeling

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115780492)  
> **Versión del documento:** v12 (2024-07-23T16:26:23.565Z) | **Autor/Editor:** Mohankumar Thangavel

---

## About the feature

White labelling of Bahmni will provide the various implementations, the ability to brand Bahmni as applicable to them. The implementors will now be able to configure the Logo and Text, specific to their implementations, on the landing page and the Bahmni login pages.

## Configuring the logo and Text:

**
 
If you are using Bahmni on Docker, please [see this page](https://bahmni.atlassian.net/wiki/x/NoDQuQ) on how you can load your own implementation config, to make changes to Bahmni UI. Once you have done these steps, then changing logo values as mentioned below will be easy.

Quick way to configure logo
 
The logo that is displayed in Bahmni Landing page and Login Screen can be easily configured by adding/replacing the logo.png file in your configuration repository at openmrs/apps/home/logo.png and updating the value of logo to `/bahmni_config/openmrs/apps/home/logo.png`

The **whiteLabel.json** file is present in the path **default-config/openmrs/apps/home**

The config is as below:
whiteLabel.json**

```
{
  "homePage": {
    "header_text": "**WELCOME TO
BAHMNI EMR & HOSPITAL SERVICE",
    "logo": "/bahmni/images/bahmniLogoFull.png",
    "title_text": " ",
    "bottomBanner": ""
  },
  "loginPage": {
    "logo": "/bahmni/images/bahmniLogoFull.png",
    "showHeaderText": true,
    "showTitleText": false,
    "bottomLogos": [
      "

### Config for "homePage"

| Key | Purpose | Mandatory | Behaviour |
| --- | --- | --- | --- |
| ``` header_text ``` | Header text on the landing/home Page | No | Default Text : WELCOME TO BAHMNI EMR & HOSPITAL SERVICE If header text key is removed, Default text will show. |
| logo | Logo on the landing /home page. | No | Default: Path of bahmni logo If logo path is wrong, it will show a broken image on the landing page. If key is removed, then default bahmni logo will be displayed |
| title_text | Title text beside the logo on the landing/home page. | No | Default: Blank text If Key is removed, "title text" placeholder will be displayed |
| ``` bottomBanner ``` | Display custom banner image depends on implementation | No | Default: Nothing will display. |

### Config for "loginPage"

| Key | Description | Mandatory | Behaviour |
| --- | --- | --- | --- |
| ``` showHeaderText ``` | Header text on the login Page. Specify the key value in the respective locale file. | No | Default : True If the key is not present or removed from the config file, it'll show no text on the page. |
| ``` showTitleText ``` | Title text beside the logo on the login page. Specify the key value in the respective locale file. | No | Default: False If the key is not present or removed from the config file, it'll show no text on the page. |
| logo | Logo on the login page. | No | Default : Bahmni logo If the key is not present or removed from the config file, it'll show no image on the page. |
| ``` bottomLogos ``` | Display custom logos as a banner a the very bottom of the page. Files must be available at a path on the server. | No | Default: Nothing will be displayed |

 bottomBanner feature will be available from v0.90

On this page**
