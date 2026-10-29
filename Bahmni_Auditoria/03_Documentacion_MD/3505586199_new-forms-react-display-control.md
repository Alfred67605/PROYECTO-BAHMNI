---
id: "3505586199"
title: "New Forms React Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3505586199/new-forms-react-display-control"
version: 3
updated: "2026-07-01T07:40:22.247Z"
author: "Vivek Pandey"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:34.478Z"
---

# New Forms React Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3505586199)  
> **Versión del documento:** v3 (2026-07-01T07:40:22.247Z) | **Autor/Editor:** Vivek Pandey

---

## Purpose

The new Forms 2 React Display Control is designed to list the Forms 2 Forms added from the Consultation → Observation Form. It displays forms created within a configured number of visits and provides functionality to view and edit form details.

**What’s New?**

The new Forms 2 React Display Control introduces substantial enhancements over the old control by improving the user interface, providing comprehensive visibility of all form submissions with provider details, and allowing for better organization and editing capabilities.

- 
**UI Enhancements**: A new display control built in React with an improved user interface.

- 
**View All Submissions**: Lists all submissions of a specific form along with the provider's name, enabling doctors to see details previously captured by themselves or other doctors.

- 
**Provider Visibility**: Displays the name of the provider or doctor who filled out the form.

- 
**Grouping of forms**: Groups multiple submissions of the same form together, showing all filled forms in the collapsed view for better organization.

- 
**Editing Capability:** Enhances the editing functionality to allow the editing of all versions of a form. Additionally, there is a configurable option to hide the edit icon for forms not in the active encounter, providing flexibility based on user needs.

- 
**Multimedia Support**: Allows viewing of images, PDFs, and videos that have been uploaded through forms. Displays thumbnails of images and videos along with captured notes and provides the ability to view images and play videos in a modal.

## Screenshots:
![](https://bahmni.atlassian.net/wiki/download/attachments/3505586199/Screenshot%202024-05-08%20at%204.58.24%E2%80%AFPM.png?version=1&modificationDate=1715167718652&cacheVersion=1&api=v2)
## Configuration:

### Sample Config:

Add to **clinical/dashboard.json **for it to appear on the patient dashboard.

```
 "forms-v2-react": {
    "type": "formsV2React",
    "displayOrder": 5,
    "dashboardConfig": {
        "title": null,
        "maximumNoOfVisits": 10,
        "showEditForActiveEncounter": true,
        "forms": [
            "Vitals",
            "Consultation",
            "Lab Results"
        ]
    },
    "translationKey": "Observation Forms"
}
```

### Key Field Table

| **Key** | **Info** | **Mandatory** |
| --- | --- | --- |
| forms-v2-react | This is the key mentioned for the forms2 form react display control | Y |
| type | Indicates the display control. For React Forms2 Control, value of type should be `formsV2React` | Y |
| displayOrder | The order in which the display control will be displayed | N |
| dashboardConfig | Indicates configurations for the patient dashboard | Y |
| maximumNoOfVisits | Specifies the maximum number of visits for which to display data | N |
| showEditForActiveEncounter | This is to show the edit icon based on active encounter. If it is set to true, the edit icon will be displayed for the forms filled within active encounter. If false or not provided, edit icon will be displayed for all versions of forms. | N |
| translationKey | Internationalise the display control | N |
| forms | Optional list of observation form names to display. When omitted, all observation forms are displayed. Invalid form names are ignored. | N |

The `forms` configuration can be used to display only selected observation forms.

- 
If `forms` is not configured, all observation forms are displayed (default behavior).

- 
If `forms` is an empty list (`[]`), no observation forms are displayed.

- 
Invalid form names are ignored.
