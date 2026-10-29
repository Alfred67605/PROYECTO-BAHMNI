---
id: "32014460"
title: "Using Lab Dashboard"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014460/using-lab-dashboard"
version: 19
updated: "2021-03-25T07:15:17.361Z"
author: "Rahul Kumrawat"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:32.437Z"
---

# Using Lab Dashboard

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014460)  
> **Versión del documento:** v19 (2021-03-25T07:15:17.361Z) | **Autor/Editor:** Rahul Kumrawat

---

## About the Feature

The laboratory management module in Bahmni is built upon an Open Source software called OpenELIS. When a patient is registered in Bahmni using the registration module, the patient name and demographic information is synced automatically to the lab system. When the patient goes to the lab, the lab technician collecting the sample can look up the patient and add tests for that patient. 

The lab module syncs back the tests added, along with the results and referral information back to the clinical module for the doctors and nurses to see this information. The key features of the laboratory management system are:

- Sample collection
- Recording tests and results.
- Printing out of results.

## Used By

The lab dashboard is used by the lab technician to view the queue of patients from whom samples are to be collected.

## How is it Used?

### 1. Collect Samples

Clicking on *Collect Sample* takes the user to the "Add Sample" page. 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014460/Screen%20Shot%202016-02-26%20at%205.24.23%20PM.png?version=1&modificationDate=1456488214743&cacheVersion=1&api=v2)

**Lab Dashboard**

On the "Add Sample" page, the user can see the tests that are ordered by the doctor. The user can also see the corresponding samples that are to be collected. Click on "Generate" to generate an accession number for the sample. Then click on "Save"

![](https://bahmni.atlassian.net/wiki/download/attachments/32014460/Screen%20Shot%202016-04-15%20at%2012.18.51%20PM.png?version=1&modificationDate=1460703203447&cacheVersion=1&api=v2)**Add Sample Page**

### 2. Record Results

The user can also view the queue of patients to enter test results. On clicking "Result", the user can access the page where they can enter the test results against each test done for the patient. 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014460/Result%20Entry.jpeg?version=2&modificationDate=1616651769118&cacheVersion=1&api=v2)

**Lab Dashboard - Samples Collected Tab**

### 3. View Referred Out Test Counts

While recording the results user has an option to refer out the desired test(s) as explained here [Referring out Laboratory Test(s) and Result Entry for the same](/wiki/spaces/BAH/pages/1163984947/Referring+out+Laboratory+Test+s+and+Result+Entry+for+the+same). Once the test(s) are referred out, count of those tests can be seen in the Lab Dashboard under Samples Collected - Today / Backlog - **Referred Out** column. **Total **column in the dashboard includes the count of Referred Tests too.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014460/Referred%20Out%20Tests%20Count.jpeg?version=1&modificationDate=1616650374257&cacheVersion=1&api=v2)

**Referred Out Tests Count**

### 4. Print Results

The user can validate the test results from the lab dashboard and also take a print out of the test result report for the patient. To do that click on the "Print" button in the "Action" column below

![](https://bahmni.atlassian.net/wiki/download/attachments/32014460/Print%20Result.jpeg?version=1&modificationDate=1616652284030&cacheVersion=1&api=v2)

**Lab Dashboard - Samples Collected Tab**

### 5. Print Sample Label 
        User can print the sample label (Accession Number) from the lab dashboard once the sample is collected for the test. Sample label will have following information:
- 
Patient identifier

- 
Patient name

- 
Age

- 
Gender

- 
Accession number

- 
Sample reception date and time

- 
Accession barcode

        User can use a configuration to show or hide patient's personal details(age, gender, name) in the label. This is configured using the property “showPatientDetailsSampleLabel” in site_information table. By default it is set to true.![](https://bahmni.atlassian.net/wiki/download/attachments/32014460/Label%20Print%20Icon.jpeg?version=2&modificationDate=1616652023609&cacheVersion=1&api=v2)**Sample Label Print**

On this Page
   **Feature Details**

[Lab Dashboard - Feature Guide](/wiki/spaces/BAH/pages/32604211/Laboratory+Management)

**Implemnentation Details**

[Lab Dashboard - Implementer's Guide](/wiki/spaces/BAH/pages/32014586/Laboratory+Module)
