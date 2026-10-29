---
id: "506986528"
title: "Configuring OWA in Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/506986528/configuring-owa-in-bahmni"
version: 6
updated: "2018-08-28T12:15:32.634Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:04.092Z"
---

# Configuring OWA in Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/506986528)  
> **Versión del documento:** v6 (2018-08-28T12:15:32.634Z) | **Autor/Editor:** Angshuman Sarkar

---

### Description

OWA’s are simple web apps developed using web technologies like JS, HTML and CSS. OpenMRS REST API can be used for the server side calls. It is configured using an OpenMRS OMOD. Please refer [this](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module) OpenMRS wiki page before configuring the OWA.

### Configure OWA module in Bahmni
 
You will need to do the following only if you have custom setup Bahmni or want to enable OWA in release 0.90 or prior. From 0.91 onwards, the OWA  module comes packaged with Bahmni. If you are looking to write your own OWA, then please refer to the 'Developer Guide'. 

- Download the latest version of ***owa-X.X.omod*** from [here](https://addons.openmrs.org/show/org.openmrs.module.open-web-apps-module).
- Copy the omod to */opt/openmrs/modules* in bahmni instance. And restart the openmrs service.  

**

This will create owa folder inside */opt/openmrs* path. And you will be able to see Open Web Apps Module in OpenMRS Administration page as shown in the below screenshot.

![](https://bahmni.atlassian.net/wiki/download/attachments/506986528/Screen%20Shot%202018-02-16%20at%2011.23.24%20PM.png?version=1&modificationDate=1519024396630&cacheVersion=1&api=v2)

Once the above setup is done, we can add our custom OWA to OpenMRS. This can be done in either of two ways. Check [this](https://github.com/openmrs/openmrs-owa-addonmanager)  openmrs owa repo for reference. This repo has detailed instructions on how to deploy the code in server.

- Copy your custom OWA folder inside */opt/openmrs/owa* path. Then you can access the app from “Manage Apps” page.

![](https://bahmni.atlassian.net/wiki/download/attachments/506986528/Screen%20Shot%202018-02-19%20at%203.30.45%20PM.png?version=1&modificationDate=1519034481644&cacheVersion=1&api=v2)

      2. Create a zip file out of your custom owa folder. Browse and Upload it from OpenMRS UI as mentioned in the below screenshot. 

To upload it from OpenMRS UI, you need to set **module.allow_web_admin** value to **true** in */opt/openmrs/etc/openmrs-runtime.properties* file. This value is set to **false** by default.

![](https://bahmni.atlassian.net/wiki/download/attachments/506986528/Screen%20Shot%202018-02-16%20at%2011.38.02%20PM.png?version=1&modificationDate=1519024735927&cacheVersion=1&api=v2)

### **Access Custom OWA from Bahmni Home page:**

If you want to access this custom OWA from Bahmni home page follow below steps. Add below configuration in [/var/www/bahmni_config/openmrs/apps/home/extension.json](https://github.com/Bahmni/default-config/blob/release-0.89/openmrs/apps/home/extension.json) file.

 
   ** Expand source 
 
 
  
```
"openMRSAddOnManager": {
    "id": "bahmni.addOnManager",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "OpenMRS Add On Manager",
    "url": "/openmrs/owa/openmrs-addonmanager/index.html",
    "icon": "icon-bahmni-reports",
    "order": 8,
    "requiredPrivilege": "app:admin"
  }
```

 

Make sure to update the **url** with the relevant custom OWA url as shown in the above configuration. Then you will be able to see the app in Bahmni home page.

**

On this page
 
 
 
 
Related Pages**

[OpenMRS OWA Wiki](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module) 

[Developer Guide](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/506986565/Creating+OWA+Open+Web+Apps+in+Bahmni)
