---
id: "712507393"
title: "Ward Management Admin Console"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/712507393/ward-management-admin-console"
version: 6
updated: "2024-07-31T10:18:47.321Z"
author: "Sanofer Sameera S"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:51.326Z"
---

# Ward Management Admin Console

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/712507393)  
> **Versión del documento:** v6 (2024-07-31T10:18:47.321Z) | **Autor/Editor:** Sanofer Sameera S

---

Admin ward management console allows users to create and manage IPD wards/beds. This feature is available in Bahmni EMR under "**Admin**" → "**Beds**" app. 

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/Beds%20App%20(Admin).png?version=1&modificationDate=1615790924578&cacheVersion=1&api=v2)

## Manage Admission Locations & Wards

Wards are grouped under ‘Admission Locations’.

Nesting of ward hierarchy can be up to 2 levels as shown below:

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/image2018-8-31_16-39-57.png?version=1&modificationDate=1535713802427&cacheVersion=1&api=v2)

This means under Admission locations there could be a Ward with level one and under it if desired there could be other ward(s) which are room(s) under level one ward. Ward can be assigned bed layout or can have a child admission location.

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/Bed%20Layout%20(Admin%20Screen).png?version=1&modificationDate=1615789818003&cacheVersion=1&api=v2)

User can add new bed layout to admission location or child admission location by selecting ‘Set Bed Layout’.  Set the number of Rows/Columns you have in ward (like 3 Rows and 4 columns).

Note
 
For an optimal bed management experience, maintain a two-level hierarchy. Do not assign bed layouts directly to wards; instead, assign them to child admission locations under the wards.

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/Ward%20Bed%20Layout%20(Admin%20Screen).png?version=1&modificationDate=1615790498718&cacheVersion=1&api=v2)

Also existing bed layout could be edited later. It could be shrunk too if beds in it are not occupied by patients. But Bed layout could always be expanded.

Bed could be added in a bed layout at a row and column with a bed type, bed number.

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/image2018-8-31_16-43-2.png?version=1&modificationDate=1535713985499&cacheVersion=1&api=v2)

## Managing Bed Types

These bed types can be added/edited by choosing the tab ‘Bed Types’ and selecting ‘Add New’/’Edit’.

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/Bed%20Types%20(Admin%20Screen).png?version=1&modificationDate=1615790576913&cacheVersion=1&api=v2)

While creating a Bed in Bed Layout, one can select from the list of Bed Types, to associate with the Bed.

## Managing Bed Tags

Bed Tags can be used to indicate special features in specific beds. For instance which beds have "oxygen" tanks, or have special powered beds for certain patients, etc. One can attach one/more tags to a bed to indicate optional features available in beds, so that while assigning beds to patients, one is sure an appropriate bed is assigned given the conditions/needs of the patient.

Similarly, user can create/edit bed tags by choosing the tab ‘Bed Tags’ and selecting ‘Add New’/’Edit’.

![](https://bahmni.atlassian.net/wiki/download/attachments/712507393/Bed%20Tags%20(Admin%20Screen).png?version=1&modificationDate=1615790817151&cacheVersion=1&api=v2)
