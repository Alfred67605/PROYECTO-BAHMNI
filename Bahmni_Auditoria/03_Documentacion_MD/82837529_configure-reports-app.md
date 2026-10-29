---
id: "82837529"
title: "Configure Reports App"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/82837529/configure-reports-app"
version: 8
updated: "2016-10-13T10:38:14.141Z"
author: "Sravanthi N. S. CH."
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:04.803Z"
---

# Configure Reports App

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/82837529)  
> **Versión del documento:** v8 (2016-10-13T10:38:14.141Z) | **Autor/Editor:** Sravanthi N. S. CH.

---

## Purpose and Benefits

Reporting is an essential feature of any EMR. The data that is stored in the EMR needs to be exported and analyzed. Bahmni provides a reporting module for the same. There are some standard reports that come as a part of the reporting module and the implementer also has the ability to define some custom reports.   

## Configuring the Reports Module 
 
To configure multiple reports module refer [here](/wiki/spaces/BAH/pages/59899908/Configure+Multiple+Report+Apps). 

**

Follow these steps to configure the reporting module and then run reports in Bahmni

1.  Configure reports app on home page: 

![](https://bahmni.atlassian.net/wiki/download/attachments/82837529/Screen%20Shot%202016-04-01%20at%2012.44.58%20PM.png?version=1&modificationDate=1472137048331&cacheVersion=1&api=v2)

Go to openmrs/apps/home/extension.json of your config and add the code snippet below:

```
"reports": {
  "id": "bahmni.reports",
  "extensionPointId": "org.bahmni.home.dashboard",
  "type": "link",
  "translationKey": "MODULE_LABEL_REPORTS_KEY",
  "url": "../reports/#/dashboard",
  "icon": "fa-user",
  "order": 8,
  "requiredPrivilege": "app:reports"
}
```

## Key Fields 

These are the attributes of the above configuration

| Key | Use | Mandatory |
| --- | --- | --- |
| "id" | Specific Id for reports app. | Yes |
| " extensionPointId" | Needed for configuring the reports. | Yes |
| "type" | Making reports app link on home page. | Yes |
| ``` "translationKey" ``` | Show name in particular locale used by app. | Yes |
| ``` "url" ``` | To redirect to reports page. | Yes |
| ``` "icon" ``` | To display icon. | No |
| ``` "order" ``` | Display in specific order. | No |
| ``` "requiredPrivilege" ``` | This is needed privilege for displaying reports module. | Yes |

 
When two factor authentication is enabled, add '**bypass2fa**' role to **reports-user **in openmrs to aviod authentication problems while running reports.

## **Reports SSL certificate configuration:**

   This configures reports application to accept trusted or untrusted SSL certificates when fetching reports.json file from httpd server. 

Default Behaviour
 
By default, all the SSL certificates are trusted.

Overriding the default behaviour
 
Default behaviour of reports can be overriden  by reconfiguring the following property in *bahmni-reports.properties* file located at **/etc/bahmni-reports/** directory
Example**

```
reports.json.ssl.accept-untrusted-certificates=false
```

 
In this case if the ssl certificate is untrusted, reports will be queued, but will not be generated, instead shows status as "Error"

**

## **Reports Queue**

More information of Report Queue feature can be found at [Report Management](/wiki/spaces/BAH/pages/32604225/Report+Management)

Default Behaviour
 
By default, Report Queue feature is disabled.

Overriding the default behaviour
 
Default behaviour of reports can be overridden  by reconfiguring following property value from *app.json* file found in **/bahmni_config/openmrs/apps/reports** folder
Example**

```
"enableReportQueue": true
```

**

On this Page
 
 
 
 
Feature Details**

[Reports Module - Feature Guide](/wiki/spaces/BAH/pages/32604223/Reporting)

**Usage Details**

[Reports Module - User Guide](/wiki/spaces/BAH/pages/32604225/Report+Management)
