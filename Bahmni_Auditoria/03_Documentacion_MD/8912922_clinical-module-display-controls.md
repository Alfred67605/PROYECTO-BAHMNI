---
id: "8912922"
title: "Clinical module display controls"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8912922/clinical-module-display-controls"
version: 33
updated: "2015-07-30T10:04:21.365Z"
author: "Sidtharthan A N"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:37.790Z"
---

# Clinical module display controls

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8912922)  
> **Versión del documento:** v33 (2015-07-30T10:04:21.365Z) | **Autor/Editor:** Sidtharthan A N

---

Catalogue of all display UI controls used on dashboard, visit page, consultation and printouts. The idea is to define these reusable controls which can be assembled via code or via configuration. Each of these controls should be configurable based on - [Clinical module configuration](/wiki/spaces/BAH/pages/9240595/Clinical+module+configuration). Based on the configuration each control should map to a REST resource call.**
**Common Configuration Options
numberOfVisits
scope = this is used for visit match when the visits do not have information then specifying scope=latest it would count the visits which have the data
display link (boolean) - default true*Anything marked as default, the control would take this value without implementer having to configure it*
**Diagnosis
**visits (default = all); Setting this to 0 should not make any server call and just display the header.
max number of diagnosis (number) (default = no limit)

**Observations**

Displays observations.
Configuration Options
concept set full names (array of string) - Fully qualified names of the concept sets to be displayed
show comments (default = true)
visits (default = last found in) ; Setting this to 0 should not make any server call and just display the header.

**Observations chart
**Displays numerical and coded observations in tabular format
Configuration Options
concept set full names (array of string) - Fully qualified names of the concept sets to be displayed
visits (default = all)
max number of visits (number) (default = no limit)

**Lab results**
Configuration Options
show comments (default = true)
visits (default = all); Setting this to 0 should not make any server call and just display the header.
max number of visits (number) (default = no limit) 

**Lab results chart
**Displays lab results for all lab tests having results in the sort order.**
**Configuration Options
visits (default = all)
max number of visits (number) (default = no limit) 

**Radiology**
Configuration Options
visits (default = all) ; Setting this to 0 should not make any server call and just display the header.
max number of visits (number) (default = no limit) 
display link (default = false)

**Treatment
**Configuration Options
visits (default = all) ; Setting this to 0 should not make any server call and just display the header.
max number of visits (number) (default = no limit) 

**Treatment Chart
**Configuration Options
visits (default = all)
max number of visits (number) (default = no limit) 

**Visits
**On clicking a particular Visit link, it navigates to the visit page.
Configuration Options
max number of visits (number) (default = no limit)

**Patient profile
**Header not clickable
Configuration Options
custom fields (array of string) (default = all); Setting this to an empty array should not make any server call and just display the header.
number of columns (number, 1 or 2, default 1)

**Blank area control
**This control would be used for taking printouts on which the something can be written by hand.
Configuration Options
header (string)
number of rows (number) (default = 4)

**Concise observations
**Display observations in single line. To be used mostly for print.
Configuration Options
concept set full names (array of string) - Fully qualified names of the concept sets to be displayed
show comments (default = false)
visits (default = all)
max number of visits (number) (default = no limit) 

**Condition specific observations
****Numerical observations graph**

**Procedures**

**Design Notes
**- Display link in the header of each control.
- For some printout if one needs to display a set of concept observations together then one can define a concept-set and just use the observations control for it.
- Use different style for the print format for the tabular views 

**Common Configuration
 **- Link to all (boolean)

**Change
**

- Lab results which are shown on "All lab results" page from dashboard section of "Lab Orders" should be merged with each other. Essentially becoming single control with a different configuration.
- Same as above except for the treatment.
- Controls of visit page should be completely formed from the list above. 
- Chief complaints display on dashboard should be an instance of Observations.

Discharge Summary
OPD Summary
Possible's printouts
Visit Summary

**Work notes
**merge observations control on dashboard and ones which launch afterwards
(UI) alignment issues in table
(UI) still has square borders
