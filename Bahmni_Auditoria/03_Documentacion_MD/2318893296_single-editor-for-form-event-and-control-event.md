---
id: "2318893296"
title: "Single editor for form event and control event"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893296/single-editor-for-form-event-and-control-event"
version: 1
updated: "2021-04-05T09:25:13.285Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:50.402Z"
---

# Single editor for form event and control event

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893296)  
> **Versión del documento:** v1 (2021-04-05T09:25:13.285Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

## Description

The user would like a complete view of all the form conditions written to date so that he/she can see all form conditions from a single screen.

- 
New Add button added. on the Form Builder called 'Form Conditions'.

![](https://bahmni.atlassian.net/wiki/download/attachments/2318893296/Screenshot%202021-04-05%20at%2010.54.24%20AM.png?version=2&modificationDate=1617601578160&cacheVersion=1&api=v2)
- 
On click of the button open a popup which would have the following sections:

Form Event

- 
Save Event

- 
Control Events

- ![](https://bahmni.atlassian.net/wiki/download/attachments/2318893296/Screenshot%202021-04-05%20at%2011.20.18%20AM.png?version=1&modificationDate=1617601857068&cacheVersion=1&api=v2)

- Under form events have a text box, with the form event code pre-populated

- 
The cancel button in the footer, when clicked should close the popup.

- 
Under control events have subsection for each control that have control events, the heading of the section will be ‘ControlId:’<value of control id>' Name:'<Name of concept>'

- 
The subsection should have a text box & with a control event for that control pre-populated

- 
able to change the form condition, save condition, and control events that are visible on screen

- 
have a dropdown for selecting new controls as per the mock, when the value is selected, that control with heading as ‘‘ControlId:’<value of control id>' Name:'<Name of concept>'’ and its editor should appear, the drop-down should no longer show that control/controls

- 
Be able to remove the value in multi-select, by clicking a cross button against it.

- 
Be able to remove a complete control editor by clicking 'X' icon against that control, when x is selected then that controls form event also gets deleted

- 
When we click on save, all the edited/ newly added form/control/save events should be saved.

- 
Hide the dropdown if no controls without form conditions are present

- 
Rename select option to select control

- 
Remove the element from the dropdown if selected.

- 
Add the element back to dropdown if control removed.

**Out of scope**

- 
When the form event/ control event is changed from multiple tabs, it will take only data on that tab.
