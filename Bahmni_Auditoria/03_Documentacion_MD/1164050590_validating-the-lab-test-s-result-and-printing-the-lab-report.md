---
id: "1164050590"
title: "Validating the Lab Test(s) Result and Printing the Lab Report"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1164050590/validating-the-lab-test-s-result-and-printing-the-lab-report"
version: 4
updated: "2020-04-01T11:04:50.196Z"
author: "Arun Paul"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:35.098Z"
---

# Validating the Lab Test(s) Result and Printing the Lab Report

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1164050590)  
> **Versión del documento:** v4 (2020-04-01T11:04:50.196Z) | **Autor/Editor:** Arun Paul

---

## About the Feature

Once the results are entered for the tests performed in internal or external laboratories, same will be available for validation. The authorised user will validate the results entered for the lab tests and mark them as “Accepted” or “Rejected”.

## Used By

Validation of Lab Tests is usually done by the respective test department HOD or an authorised validator after getting the results entered for the tests performed by a lab technician.

## How is it Used?

### 1. Validating the lab test result

- 
Search for the desired test under Samples Collected - Today / Backlog tab for which the result has already been entered.

- 
Click on the “Validate” icon under the “Action” column, which will navigate you to the “Validation By Accession Number” screen.

- 
“Validation” screen will be displaying all the respective lab tests with corresponding result details. Referred out tests results will be listed with a flag “R”.

- 
User can Accept or Reject the result for lab tests by checking the corresponding “Accept” / “Reject” flags and saving the validation by clicking the “Save” button.
![](https://bahmni.atlassian.net/wiki/download/attachments/1164050590/image-20200330-121942.png?version=1&modificationDate=1585570785067&cacheVersion=1&api=v2)
- 
Once the result is accepted, the same will be displayed in the Patient Dashboard - Laboratory Result widget. And if the same is Rejected, it will be sent for result entry again.

- 
Rejected test results will reappears in result entry screen with “Validation Failed” legend , and will allow the user to re-enter the results to the lab technician.
![](https://bahmni.atlassian.net/wiki/download/attachments/1164050590/image-20200331-112917.png?version=1&modificationDate=1585654160525&cacheVersion=1&api=v2)

- Results can be re-entered correctly for the rejected tests and saved after adding notes, which become mandatory if result is changed. Once saved, the same will be sent again for validation.

### 2. Print the Lab report for the validated tests

- 
Click on the “Result” icon under the “Action” column appearing corresponding to the tests with accepted result in the Samples Collected - Today / Backlog tab.

- 
Laboratory Report print will get generated displaying the test results which have been accepted while validation

- 
Lab report will also display the patient’s demographic details, Order Date, Accession Number and relevant flags like R = Referred Out, A = Above Normal, B = Below Normal, E = Returned.
![](https://bahmni.atlassian.net/wiki/download/attachments/1164050590/image-20200330-122743.png?version=1&modificationDate=1585571267503&cacheVersion=1&api=v2)

  **Feature Details**

[Feature Guide - Laboratory Management](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604211/Laboratory+Management) 
 
**Implementation Details**

[Implementer's Guide - Laboratory Module](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014586/Laboratory+Module)
