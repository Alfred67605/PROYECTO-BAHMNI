---
id: "114206305"
title: "Lab Order Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206305/lab-order-control"
version: 11
updated: "2024-07-18T17:25:29.179Z"
author: "Parvathy Babu"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:43.751Z"
---

# Lab Order Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114206305)  
> **Versión del documento:** v11 (2024-07-18T17:25:29.179Z) | **Autor/Editor:** Parvathy Babu

---

## Purpose

This Control is used to list all the lab orders and the results captured against those orders for a particular patient.

## Configuration

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| dashboardParams | Indicates the configuration for the dashboard | Y |
| title | Indicates the title that will be displayed on the dashboard/visit page for the section | Y |
| type | The name/id for the control that needs to be picked from the code | Y |
| numberOfVisits | The number of visits for which data has to be displayed | N |
| showChart | Configuration to display the investigation chart. If it is on, the investigation chart will be displayed along with the lab results table for IPD patients. | N |
| showTable | Configuration to display the lab results table. If set to false along with showFlowSheet, only the header will be displayed. | N |
| ** | Configuration to display audit information when '+ ' sign is clicked. If set to false, the '+' button will not be displayed. | N |
| showNormalLabResults | Show lab results that are not marked abnormal in OpenElis.  | N |
| showCommentsExpanded | Setting to display comments in expanded form, when they are present. The comments section will be collapsed by default if there are no comments mentioned in OpenElis. | N |
| showAccessionNotes | Display Accession Notes provided by Lab Manager in OpenElis | N |
| expandedViewConfig | Indicates the configuration for the details page (All LabDetails Page) | N |
| observationGraph | Indicates the configuration for the observationGraph (OPTIONAL) | N |
| hideEmptyDisplayControl | Hides the display control if there are no recorded values present for it when set to true, default value is set to false | N |
| hideResultsColumn | When set to true, hides the lab order results column display, while keeping the lab order names visible. | N |
| chartConfig | Configuration for chart view of lab results (investigation chart). This config will work only if showChart is set to true.  | N |
| sortResultColumnsLatestFirst | When set to true, lab results column in investigation chart will be sorted and displayed in descending order by date, i.e., the latest lab results will be shown first. | N |
| groupByPanel | Configuration for investigation chart. When set to true, group the tests by panels and display it along with panel name in the chart view, else lab tests will be displayed based on sortWeight.  | N |

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"labResults": {
 "title": "Lab Results",
 "type": "labOrders",
 "dashboardConfig": {
   "title": null,
   "numberOfVisits": 1,
   "showChart": false,
   "showTable": true,
   "showDetailsButton": false,
   "showNormalLabResults": true,
   "showCommentsExpanded": true,
   "showAccessionNotes": true,
   "visitUuids": null, //ignores numberOfVisits if provided
   "patientUuid": null, //mandatory if numberOfVisits provided
   "hideResultsColumn": false,
   "chartConfig": {
     "sortResultColumnsLatestFirst": true,
	 "groupByPanel": true
   }  
 },
 "expandedViewConfig": {
   "numberOfVisits": 3,
   "observationGraph" : {
   "type": "observationGraph",
   "name": "observationGraph",
   "title": "Temperature",
   "config": {
     "yAxisConcepts": ["Temperature"],
     "numberOfVisits": 3
   }
 },
 "hideEmptyDisplayControl": false
}
```

### Screenshot

| Controls | Screenshot |
| --- | --- |
| "showChart": true, "showTable": false | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-14%20at%2015.00.19.png?version=1&modificationDate=1707903058339&cacheVersion=1&api=v2) |
| "showChart": false, "showTable": true | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-14%20at%2015.01.54.png?version=1&modificationDate=1707903120833&cacheVersion=1&api=v2) |
| "showChart": true,**"hideResultsColumn": false | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-14%20at%2015.07.04.png?version=1&modificationDate=1707903431968&cacheVersion=1&api=v2) |
| "showChart": true, "hideResultsColumn": true | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-14%20at%2015.08.03.png?version=1&modificationDate=1707903491245&cacheVersion=1&api=v2) |
| "showTable": true, "showDetailsButton": false | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-14%20at%2015.16.59.png?version=1&modificationDate=1707904028577&cacheVersion=1&api=v2) |
| "showTable": true, "showDetailsButton": true | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-14%20at%2015.19.18.png?version=1&modificationDate=1707904166473&cacheVersion=1&api=v2) |
| "showChart": true, "chartConfig": {       "sortResultColumnsLatestFirst": true, } | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-28%20at%204.46.33%E2%80%AFPM.png?version=1&modificationDate=1709118998355&cacheVersion=1&api=v2) |
| "showChart": true, "chartConfig": {       "sortResultColumnsLatestFirst": false, } | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-28%20at%204.48.55%E2%80%AFPM.png?version=1&modificationDate=1709119142506&cacheVersion=1&api=v2) |
| "showChart": true, "chartConfig": {   "sortResultColumnsLatestFirst": true,  "groupByPanel": true } | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-28%20at%204.54.48%E2%80%AFPM.png?version=1&modificationDate=1709119494267&cacheVersion=1&api=v2) |
| "showChart": true, "chartConfig": {   "sortResultColumnsLatestFirst": true,  "groupByPanel": false } | ![](https://bahmni.atlassian.net/wiki/download/attachments/114206305/Screenshot%202024-02-28%20at%205.02.20%E2%80%AFPM.png?version=1&modificationDate=1709119947786&cacheVersion=1&api=v2) |

On this Page
 
 
 
 
Related Display Controls**

 

- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control)
- [Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control)
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control)
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control)
