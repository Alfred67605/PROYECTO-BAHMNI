---
id: "671744003"
title: "OpenMRS Reports OWA Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/671744003/openmrs-reports-owa-configuration"
version: 12
updated: "2019-06-24T10:17:10.150Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub"
download_date: "2026-10-20T21:06:10.513Z"
---

# OpenMRS Reports OWA Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/671744003)  
> **Versión del documento:** v12 (2019-06-24T10:17:10.150Z) | **Autor/Editor:** Angshuman Sarkar

---

You can configure Reports OWA to run the reports that are configured in OpenMRS reporting module.

- Please follow [this](https://wiki.openmrs.org/display/docs/Reporting+Module) OpenMRS documentation to configure different type of reports in OpenMRS Reporting module.
- You can watch [this](https://www.youtube.com/watch?v=M57eW3begCg) video on how to configure Reports.

Note
 
Please note that each report in Reports OWA App takes only two input parameters i.e startDate and endDate and these should be added from openmrs reporting module. Adding more than two parameters or parameter other than **Date** Datatype is not supported in this version of reporting OWA app.
 
To configure Reports OWA app, we should have both owa.omod and reportingrest.omod. These omods will come out of box with 0.91v Bahmni installation. People who ever have 0.90v or previous version of Bahmni, they have to manually add the above omods to /opt/openmrs/modules path.

**

#### **Steps to configure Reports OWA**

- Download ***reports.zip*** file from [here](http://repo.mybahmni.org.s3.amazonaws.com/owa/reports-1.0.zip) ([http://repo.mybahmni.org/owa/](http://repo.mybahmni.org/owa/))
- You may directly copy the downloaded zip file to /opt/openmrs/owa path and unzip the folder 
- Alternatively, you may upload the zip file from OpenMRS UI.  *OpenMRS => Administration => Open Web Apps Module => Manage Apps*.

 
Please note that to upload/delete OWA from OpenMRS UI, property "***module.allow_web_admin"*** value must be set to true in "**/opt/openmrs/etc/openmrs-runtime.properties"** file

Now you will be able to access Reports OWA from OpenMRS UI.

#### **Access Reports OWA from Bahmni Home page**

To access directly from "Bahmni" you may create an extension. For example, If you would like to have this accessible from Home screen, add configuration in **[/var/www/bahmni_config/openmrs/apps/home/extension.json](https://github.com/Bahmni/default-config/blob/release-0.89/openmrs/apps/home/extension.json) **file like show below.

 
   ** Expand source 
 
 
  
```
  "OpenMRSReports": {
    "id": "bahmni.openmrs.reports",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "OpenMRS Reports",
    "url": "/openmrs/owa/reports/index.html",
    "icon": "icon-bahmni-reports",
    "order": 15,
    "requiredPrivilege": "app:reports"
  }
```

 

Info
 
This module is available as a add-on to Bahmni, for versions 0.91 onwards. 

On this Page
