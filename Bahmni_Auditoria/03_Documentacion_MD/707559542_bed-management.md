---
id: "707559542"
title: "Bed Management"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/707559542/bed-management"
version: 12
updated: "2021-03-15T06:54:41.016Z"
author: "Gurpreet Luthra"
category: "Manual_Usuario_Sub"
download_date: "2026-10-20T21:02:42.097Z"
---

# Bed Management

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/707559542)  
> **Versión del documento:** v12 (2021-03-15T06:54:41.016Z) | **Autor/Editor:** Gurpreet Luthra

---

## About the Feature

This feature provides the ability to admit, discharge and transfer a patient. A patient can be assigned to a selected bed. The bed details can also be viewed including tags. This is a new features that replaces the old ADT/IPD module since V0.91.

## Used By

 This feature is used by the IPD nurses to monitor the admitted patients.

**

## How is it Used?
 
Configure the feature by following the steps mentioned [here](/wiki/spaces/BAH/pages/707854444/Bed+Management+Module) & by creating the Bed Types and Ward Layout in **Admin** here: [Bed Layout Management](/wiki/spaces/BAH/pages/712507393/Ward+Management+Admin+Console). Once you have done you will find the following link for the app in the home page.

![](https://bahmni.atlassian.net/wiki/download/attachments/707559542/Bahmni_Home.png?version=1&modificationDate=1535483651246&cacheVersion=1&api=v2)

If you click on app, you will navigate to Patient List/Queue page where you can see the patients to be admitted, patients who are already admitted and patients who to be discharged etc. This queues are configurable.  

![](https://bahmni.atlassian.net/wiki/download/attachments/707559542/list.png?version=1&modificationDate=1536049631143&cacheVersion=1&api=v2)

You will also see a link 'Bed Management' which will show you the views of wards - ward layout or a list view. 

![](https://bahmni.atlassian.net/wiki/download/attachments/707559542/IPD_and_Bahmni.png?version=1&modificationDate=1535484079766&cacheVersion=1&api=v2)

From the queues, if you would select any patient, you will be forward to the the page shown below, where you can choose a ward and within it a bed, where you may assign a bed for the patient. If you want to admit the patient, you maybe prompted like below if the patient had a visit different than IPD. 

![](https://bahmni.atlassian.net/wiki/download/attachments/707559542/IPD_and_Edit_-_Bed_Management_-_Bahmni_Documentation_Wiki.png?version=1&modificationDate=1535711385031&cacheVersion=1&api=v2)

From the patient queue, upon selection of an admitted patient, you will be taken to the ward view displaying the patient details. You may select another bed in the same ward or at a different location and initiate a transfer process if such is the disposition given.  

![](https://bahmni.atlassian.net/wiki/download/attachments/707559542/transfer.png?version=1&modificationDate=1536049663342&cacheVersion=1&api=v2)

Or discharge an admitted patient 

![](https://bahmni.atlassian.net/wiki/download/attachments/707559542/IPD.png?version=10&modificationDate=1536049381408&cacheVersion=1&api=v2)

On this Page

 
  
 
Related Links**

[Ward Management Admin Console](/wiki/spaces/BAH/pages/712507393/Ward+Management+Admin+Console)

**Feature Details**

[Bed Management - Feature Guide](/wiki/spaces/BAH/pages/699400201/Bed+Management+BM)

**Implementation Details**

[Bed Management Module - Implementer's Guide](/wiki/spaces/BAH/pages/707854444/Bed+Management+Module)
