---
id: "37945360"
title: "Configure Person Attributes"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945360/configure-person-attributes"
version: 10
updated: "2024-02-08T09:54:36.672Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:04.550Z"
---

# Configure Person Attributes

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945360)  
> **Versión del documento:** v10 (2024-02-08T09:54:36.672Z) | **Autor/Editor:** Gurpreet Luthra

---

## Description

OpenMRS provides a way to customise attributes that can be captured for a person/patient. New attributes can be added via the admin screen of OpenMRS under [/openmrs/admin/person/personAttributeType.list](https://local/openmrs/admin/person/personAttributeType.list) . If you prefer to add these values manually, insert new rows into the person_attribute_type table. 

## Create/edit attribute

1. Navigate to the "Manage Person Attributes Types" link in OpenMRS Administration page.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945360/Screen%20Shot%202015-11-16%20at%2011.42.36%20AM.png?version=1&modificationDate=1453096875203&cacheVersion=1&api=v2)

2. Add "New Person Attribute Type". The "format" of the attribute will define the type of UI element to be shown. For e.g., if the attribute type is string, a textbox will be shown. Similarly, if it is of *org.openmrs.Concept* type, then a dropdown is displayed. If you choose type as Concept, then you will need to provide the ID (in the Foreign Key field) of the Concept whose values should be shown in the dropdown. The "values" are the "answers" for that Concept (from the Concept Dictionary). This Concept will be of type "Coded". See example setup here for *Occupation* on the [demo server](https://demo.mybahmni.org/openmrs/admin/person/personAttributeType.list). The "label" on the UI is taken from the "Description" of the attribute.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945360/Screen%20Shot%202015-11-16%20at%2012.18.37%20PM.png?version=1&modificationDate=1453096875250&cacheVersion=1&api=v2)

The new Person Attribute Type page will be displayed as shown below:

![](https://bahmni.atlassian.net/wiki/download/attachments/37945360/Screen%20Shot%202015-11-16%20at%2012.29.53%20PM.png?version=1&modificationDate=1453096875267&cacheVersion=1&api=v2)

Remove/ Retire Person Attributes

All the person attributes configured here will appear on the patient registration page.One can add new patient attributes following above steps.If one wants to remove them from the patient registration screen to hide any of these attributes temporarily, then one can retire the person attribute from the Openmrs Administration UI.

## Retiring an attribute

1) GoTo Openmrs, Administration Page

2) Click on  "Manage Person Attributes Types

![](https://bahmni.atlassian.net/wiki/download/attachments/37945360/Screen%20Shot%202015-11-16%20at%2011.42.36%20AM.png?version=1&modificationDate=1453096875203&cacheVersion=1&api=v2)

3) Click on the person attribute to retire

![](https://bahmni.atlassian.net/wiki/download/attachments/37945360/person%20attribute%20occupation.png?version=1&modificationDate=1468566765801&cacheVersion=1&api=v2)

4) Click on* Retire the Person attribute type*

*![](https://bahmni.atlassian.net/wiki/download/attachments/37945360/retire%20person%20attribute.png?version=1&modificationDate=1468567528283&cacheVersion=1&api=v2)
*

*
*

## Reserved words for Bahmni Person Attribute

1) 'name' is a reserved word and cannot be used as Bahmni Person Attribute

On this Page
