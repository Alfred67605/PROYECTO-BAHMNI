---
id: "32014370"
title: "Patient Documents"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014370/patient-documents"
version: 8
updated: "2018-08-24T05:53:05.306Z"
author: "Angshuman Sarkar"
category: "Manual_Usuario_Sub"
download_date: "2026-10-20T21:02:40.191Z"
---

# Patient Documents

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014370)  
> **Versión del documento:** v8 (2018-08-24T05:53:05.306Z) | **Autor/Editor:** Angshuman Sarkar

---

## Purpose and Benefits

This feature is used to receive and capture patient's information in the form of documents (patient's paper record scans, X-Ray images and other external documents). Bahmni allows you to upload these documents and associating it to specific visits of a patient. All these documents get attached to a patient's record and are viewable from the Visit dashboard.

## Steps

### 1. Go to Patient Documents

Click on Patient Documents on the Bahmni Home Page

![](https://bahmni.atlassian.net/wiki/download/attachments/32014370/Home%20Dashboard.png?version=1&modificationDate=1492061974938&cacheVersion=1&api=v2)

### 2. Select a Patient 

Select or Search for a Patient.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014370/image2017-4-13_11-20-29.png?version=1&modificationDate=1492062634282&cacheVersion=1&api=v2)

### 3. Upload one or more documents

- Upload one or more documents by clicking the "+" sign
- Select a value to identify the document
For versions 0.90 or earlier, you have to specify a valid type. e.g. "Patient file" 
- From version 0.91 onwards, the text box has been replaced with a dropdown. This dropdown contains members of concept "Patient Documents". Add the appropriate member concepts as per your implementation needs.
- Regarding configuration of Patient Document types, see [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014592/Patient+Documents+Module#PatientDocumentsModule-ConfiguringPatientDocumentTypes)

- Click Save

**

**![](https://bahmni.atlassian.net/wiki/download/attachments/32014370/Capturing%20Patient%20Documents.png?version=1&modificationDate=1492062003852&cacheVersion=1&api=v2)**

               ![](https://bahmni.atlassian.net/wiki/download/attachments/32014370/image2018-8-1_11-26-20.png?version=1&modificationDate=1533102984401&cacheVersion=1&api=v2)

### 4. View uploaded documents

To see uploaded documents against a patient, one can go to Clinical → Dashboard → Visit Control → Visit Dashboard → Patient Files. 

Or you can easily see it on the Sidebar in the Clinical app (when you click on the top right burger icon)

![](https://bahmni.atlassian.net/wiki/download/attachments/32014370/Patient%20Documents%20Sidebar.png?version=1&modificationDate=1492062214058&cacheVersion=1&api=v2)

On this Page

 
  
 
Feature Details**

[Patient Documents - Feature Guide](/wiki/spaces/BAH/pages/32604209/Patient+Document+Management)

**Implementation Details**

[Patient Documents - Implementer's Guide](/wiki/spaces/BAH/pages/32014592/Patient+Documents+Module)
