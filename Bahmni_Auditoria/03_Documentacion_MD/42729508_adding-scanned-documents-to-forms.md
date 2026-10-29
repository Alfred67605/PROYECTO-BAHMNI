---
id: "42729508"
title: "Adding Scanned Documents to Forms"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/42729508/adding-scanned-documents-to-forms"
version: 2
updated: "2016-02-28T05:53:20.278Z"
author: "Bharat Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:12.678Z"
---

# Adding Scanned Documents to Forms

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/42729508)  
> **Versión del documento:** v2 (2016-02-28T05:53:20.278Z) | **Autor/Editor:** Bharat Akkinepalli

---

## Purpose and Benefits

Sometimes, we may have to store some documents as part of the forms.  Bahmni supports scanning the documents using a webcam on your device and uploading them in a form.  There are various document types that are supported like jpeg, pdf.  

## Steps to configure documents in the form

- Create a concept with the concept class as "Image", concept datatype as "Complex" and Handler as "BinaryDataHandler"
- Add this newly created concept to any of your existing concept set which represents a form (i.e. this concept set should be part of "All Observation Templates")
- View the newly added field in the form.  This field has a "+" button beside the label which will help you upload the images.
- The value filled in the form can be seen on the Patient Dashboard corresponding to the relevant Observation Display control.
