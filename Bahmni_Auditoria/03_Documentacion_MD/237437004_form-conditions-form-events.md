---
id: "237437004"
title: "Form Conditions / Form Events"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/237437004/form-conditions-form-events"
version: 5
updated: "2018-01-23T08:30:17.643Z"
author: "Shashikanth Gadgay (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:49.392Z"
---

# Form Conditions / Form Events

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/237437004)  
> **Versión del documento:** v5 (2018-01-23T08:30:17.643Z) | **Autor/Editor:** Shashikanth Gadgay (Deactivated)

---

## Purpose and Benefits

Form conditions allows users to enable/disable, Show/Hide and change values of observation fields on specific conditions or inputs on the form. Some sections of the form are only filled when a particular set of information is needed. So, if we disable such fields, it simplifies the form. Implementers have to define the form conditions by writing small scripts in JS based on their requirement.

Form conditions can be written for

- On Form Initialization / Load (Form Event)
To add conditions on form load, click on the Form Event icon shown below

                                         ![](https://bahmni.atlassian.net/wiki/download/attachments/237437004/FC-1.jpg?version=1&modificationDate=1510052705304&cacheVersion=1&api=v2)

                 b. Write the conditions in editor window and save

                                         ![](https://bahmni.atlassian.net/wiki/download/attachments/237437004/Screen%20Shot%202017-11-07%20at%204.37.12%20PM.png?version=1&modificationDate=1510052913605&cacheVersion=1&api=v2)  

## Sample Form Event:

- This example hides the 'Number of Packs' control on load of form if  'Smoking History' value is not set. 

**Sample Control Event**

```
function(form) {
	if (form.get('Smoking History').getValue() === undefined) {
		form.get('Number of Packs').setHidden(true);
	} else {
		form.get('Number of Packs').setHidden(false);
	}
}
```

**

        2. On Change of Values (Control Event)
              a. To show/hide, enable/disable or change values of controls, then click on Control Event and write the conditions in editor window and save.

                                         ![](https://bahmni.atlassian.net/wiki/download/attachments/237437004/FC-2.jpg?version=1&modificationDate=1510053505992&cacheVersion=1&api=v2)

## Sample Control Event:
Sample Control Event**

```
function(form) {
	if (form.get('Smoking History').getValue() === 'No') {
		form.get('Number of Packs').setValue(0);
	}
}
```

## APIs

Following APIs are exposed on the form Object to get a particular control

| API | Description |
| --- | --- |
| get(conceptName) | Get a control object using concept name. |
| get(conceptName, position) | Get a control object using conceptname and position. Position is used only when there are multiple concepts in the same form |
| getById(ControlID) | Get a control object using control ID |
| getPatient() | Get a patient object |

Following APIs are exposed on the control object 

| API | Description |
| --- | --- |
| getValue() | Returns value of a particular control |
| setValue(value) | Set a value to a particular control |
| getHidden() | Returns whether the control is hidden or not |
| setHidden(hidden) | Hide/Show a particular control |
| getEnabled() | Returns whether the control is enabled or not |
| setEnabled(enabled) | Enable/Disabled a particular control |
