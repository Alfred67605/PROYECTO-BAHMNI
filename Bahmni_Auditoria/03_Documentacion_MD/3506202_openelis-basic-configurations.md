---
id: "3506202"
title: "OpenELIS Basic Configurations"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3506202/openelis-basic-configurations"
version: 14
updated: "2017-01-18T06:19:46.932Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:54.152Z"
---

# OpenELIS Basic Configurations

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3506202)  
> **Versión del documento:** v14 (2017-01-18T06:19:46.932Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Purpose and Benefits

This page captures basic configurations that are required to be done in OpenELIS.

## Steps

### **1. Configure the Organization**

OpenELIS needs an Organization to be defined. This will be different for different implementations. To add an organization, go to "Administration" screen in OpenELIS.

**Configuring default organization**: Add the following sql as migration in <implementation-config>/openelis/migrations/liquibase.xml  to configure the 'defaultOrganizationName' for the implementation.
 
The 'defaultOrganizationName' is needed to sync department from openMRS to openELIS. In the SQL below, 'Bahmni' is used as the organization name, and should be replaced with the organization name as per the implementation.
 
Health centre has been removed from OpenELIS. However existing features such as sync from OpenMRS to ELIS, patient creation in ELIS, ELIS reports and flow-back of lab results have not been interrupted and continue to function as such.

```
INSERT INTO site_information(id, name, lastupdated, description, value, encrypted, value_type) VALUES ( nextVal( 'site_information_seq' ) , 'defaultOrganizationName', now(), 'Default organization name', 'Bahmni', 'f', 'text' );
```

**

### 2.**Configure** the Hospital Logo, Name and Address

- To configure hospital logo - add the logo image in <implementation>_config/openelis/images folder in the name of  labLogo.jpg as the name of the image file. (Puppet deploy will take care that it is added to the right folder to be picked up from for the report).
- If you do not want to display logo for any implementation - update site_information table clinlims with name ='useLogoInReport' and set value  to false.
- To configure Hospital Name - add migration - which updates site_information table in clinlims with name = 'SiteName' and set  value as 'name of the hospital'
- To configure Hospital address - add migration - which updates site_information table in clinlims with column name = 'additional site info' and set value as 'address for the hospital'

### 3. Configuration through OpenELIS Admin UI

- In the OpenELIS, go to Administration section.
- Select "Printed Reports Configuration" to get to Report configurations.
- Edit "SiteName" to update the Hospital name.
- Edit "additional site info" to update Site address or any one liner about hospital.
- Edit "lab logo" to  upload the Logo file.
- Set "useLogoInReports" to "true" to ensure that Hospital Logo is displayed on the report.

### 4. Configure Provider Information

- To add new Requester name when creating a sample from OpenELIS UI - Add a new provider in provider table and make sure the "is_active" column in the person table for that provider should be checked. Then that provider name will be shown in the Requestor's name dropdown list.
- If a lab order given from MRS to ELIS and the provider who has given lab order from MRS is already present in the ELIS then that provider name will be automatically populated for that lab order while collecting the sample. 

On this Page
 
 
 
 
Feature Details**

[Laboratory Management - Feature Guide](/wiki/spaces/BAH/pages/32604211/Laboratory+Management)

**Usage Details**

[Laboratory Management - User Guide](/wiki/spaces/BAH/pages/32014358/Laboratory)

**Related Links**

[Lab Master Data Setup](/wiki/spaces/BAH/pages/18415840/Configure+Lab+Data)
