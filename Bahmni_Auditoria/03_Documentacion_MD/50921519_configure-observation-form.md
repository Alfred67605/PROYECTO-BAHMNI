---
id: "50921519"
title: "Configure Observation Form"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/50921519/configure-observation-form"
version: 8
updated: "2017-06-12T21:26:36.050Z"
author: "Ramashish Joshi"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:12.779Z"
---

# Configure Observation Form

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/50921519)  
> **Versión del documento:** v8 (2017-06-12T21:26:36.050Z) | **Autor/Editor:** Ramashish Joshi

---

## Description

Observation Form is used to capture various information which are observed by the provider. If we need to capture this information in Bahmni then we need to define in OpenMRS. The form is nothing but Concept Set and it includes various sub set of concept or concept set. 

## Steps

### 1. Configure All Observation Templates

   Create concept set with Fully Specified Name as "All Observation Templates". This is root concept set and the name must be "All Observation Templates". Find [more info](/wiki/spaces/BAH/pages/50921567/Configure+Concept+or+Concept+Set) about concept or concept set.

**Note**: Default Bahmni Implementation has set of Observation Forms. To Remove the Observation forms shown through "Add New Obs Forms" button which will not be used at all by a hospital, edit the "Set Members" field of "All Observation Templates" concept and remove the specific member. 

### **2. Configure New/Existing Observation Forms **

- 
If we want add new observation form/template then create concept set with concept members.

- 
Add the new concept set to the "**All Observation Templates**" concept set.

- Add the word "template" to the Fully specified name to avoid naming collision with diagnosis related concepts.
- As the Short* name* is displayed in the UI, provide a clear and concise name for the short name.
 

**Example**:
Fully Specified Name = Anaemia Templates, Short Name = Anaemia
Fully Specified Name = Anaemia Intake Template, Short Name = Anaemia - Intake* (note there is no comma in Fully Specified Name)*

Refer to the screenshot below for further information:

 

![](https://bahmni.atlassian.net/wiki/download/attachments/50921519/All%20Observation%20Templates.png?version=1&modificationDate=1460014929118&cacheVersion=1&api=v2) 

 **"All Observation Templates" in OpenMRS**

On this Page
