---
id: "32014592"
title: "Patient Documents Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014592/patient-documents-module"
version: 6
updated: "2018-08-24T05:51:16.657Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:30.153Z"
---

# Patient Documents Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014592)  
> **Versión del documento:** v6 (2018-08-24T05:51:16.657Z) | **Autor/Editor:** Angshuman Sarkar

---

## Purpose and Benefits

This feature is used to receive and capture patient's information in the form of documents (patient's paper record scans, X-Ray images and other external documents). Bahmni allows you to upload these documents and associating it to specific visits of a patient. All these documents get attached to a patient's record and are viewable from the Visit dashboard.

## Steps

### **Configure Patient Documents App**

To configure the Patient Documents Module/App to appear on the Home page please add the config below to this path:  */bahmni/default-config/openmrs/apps/home/extension.json*

```
"patientDocumentUpload": {
   "id": "bahmni.patient.document.upload",
   "extensionPointId": "org.bahmni.home.dashboard",
   "type": "link",
   "translationKey": "MODULE_LABEL_PATIENT_DOCUMENTS_KEY",
   "url": "../document-upload/?encounterType=Patient Document&topLevelConcept=Patient Document&defaultOption=Patient file",
   "icon": "icon-bahmni-documents",
   "order": 6,
   "requiredPrivilege": "app:patient-documents"
 },
```

URL in the code snippet above
 
The url is :  "url": "../document-upload/?encounterType=**<****X>**&topLevelConcept=**<Y>**&defaultOption=**<Z>**”,

- The extension filepath should be: extension-**<****X>**.json
- **<Y>** is the top level concept in openMRS. This enables an auto-complete set while selecting Upload type:  Assign concept set name to "topLevelConcept" in the url.
- **<Z>** has to be a set member of ’**<Y>**’ which is the top level concept. It is the default option that appears in the UI for upload type.

### **Configure Active Patients Tab**

To configure the active patients Tab on the first page, add the config below to this path:  */bahmni/default-config/openmrs/apps/documentUpload/extension-Patient Document.json*

```
{
        "bahmniDocUploadPatientsSearchActivePatients":{
       "id": "bahmni.docUpload.patients.search.activePatients",
       "extensionPointId": "org.bahmni.patient.search",
       "type": "config",
       "extensionParams": {
           "searchHandler": "emrapi.sqlSearch.activePatients",
         "translationKey": "MODULE_LABEL_ACTIVE_PATIENTS_KEY",
           "forwardUrl" : "#/patient/{{patientUuid}}/document"
       },
       "label": "Active Patients",
       "order": 1,
       "requiredPrivilege": "app:patient-documents"
   },
   "bahmniDocUploadPatientsSearchAllPatients":{
       "id": "bahmni.docUpload.patients.search.allPatients",
       "extensionPointId": "org.bahmni.patient.search",
       "type": "config",
       "extensionParams": {
         "translationKey":"MODULE_LABEL_ALL_PATIENTS_KEY",
           "forwardUrl" : "#/patient/{{patientUuid}}/document"
       },
       "label": "All patients",
       "order": 2,
       "requiredPrivilege": "app:patient-documents"
   }
}
```

 
One can also specify the “search handler” with other global properties for SQL search.

### **Configuring Patient Document Types**

To configure the types against which a Patient Document can be uploaded, you may do the following

- Go to concept dictionary (.../openmrs/dictionary/index.htm) and search for 'Patient Document'
- You will find the concept 'Patient Document' has members that appear Document Upload module. 
- Add a concept (e.g. Hospitalisation Record) of type 'Misc' and datatype 'NA'.
- Add the newly created concept as member of 'Patient Document'
- Go back to Patient Document module and verify that the dropdown lists the newly added concept when you upload a file. 

On this Page

 
 
 
**Feature Details**

[Patient Documents Module - Feature Guide](/wiki/spaces/BAH/pages/32604209/Patient+Document+Management)

**Usage Details**

[Patient Documents Module - User Guide](/wiki/spaces/BAH/pages/32014370/Patient+Documents)
