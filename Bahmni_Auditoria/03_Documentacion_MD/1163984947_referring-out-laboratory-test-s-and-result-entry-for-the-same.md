---
id: "1163984947"
title: "Referring out Laboratory Test(s) and Result Entry for the same"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1163984947/referring-out-laboratory-test-s-and-result-entry-for-the-same"
version: 10
updated: "2021-04-04T15:36:39.678Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:34.503Z"
---

# Referring out Laboratory Test(s) and Result Entry for the same

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1163984947)  
> **Versión del documento:** v10 (2021-04-04T15:36:39.678Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

This feature is available from V0.93-Bahmni

Tests which cannot be performed locally can be referred out to external laboratories /centres and once the results are available, enter the same in the system.

## Used By

It is used by lab technicians when executing lab orders and performing tests.

## How is it Used?

### 1. Refer tests to external laboratory / centre

- 
Go to Samples Collected - Today tab, which will be listing all Lab orders of the patients for which the sample has been already collected today.
![](https://bahmni.atlassian.net/wiki/download/attachments/1163984947/Lab%20Dashboard%20-%20Samples%20Collected.jpeg?version=2&modificationDate=1616655724747&cacheVersion=1&api=v2)
**                                                               Lab Dashboard - Samples Collected**

- 
Search the desired patient’s order entering the Accession Number / Patient ID / Name in respective fields in the top row of the grid.

- 
Click on the “Result” icon under the “Action” column, which will navigate you to the “Results” screen displaying all the respective tests  with “Result” and related fields for each test.

- 
Now select the flag appearing before the Referral Reason field and then select the Referral reason & Institute.
![](https://bahmni.atlassian.net/wiki/download/attachments/1163984947/image-20200330-103948.png?version=1&modificationDate=1585564805647&cacheVersion=1&api=v2)

- Capture the notes and upload the desired file using respective features, if required.

- 
Click on the “Save” button to save the entered details.

- 
Referred Out test(s) count can be seen in the Lab Dashboard under Samples Collected - Today / Backlog - **Referred Out** column.

- 
Count shown in **Total **column is including the Referred Out tests count.

### 2. Enter results for referred out lab test(s)

- 
After login into the Laboratory app, mouse over on the “Result” menu at the top of the screen and click on “Referred Out” option in the Result menu drop down, which will navigate you to the “Referrals” screen.
![](https://bahmni.atlassian.net/wiki/download/attachments/1163984947/Referred%20Out%20Tests.jpeg?version=2&modificationDate=1616655772851&cacheVersion=1&api=v2)
- 
In the “Referrals” screen, all the tests which have been referred out belonging to various patients will be displayed with Patient and Accession Number details.

- 
Enter the results for desired tests in the corresponding “Result” field.

- 
Click on the “Notes” icon and add the notes if required.

- 
To upload a desired report file click on the corresponding “Choose File” button and select the desired file from your system’s local disk.
![](https://bahmni.atlassian.net/wiki/download/attachments/1163984947/Screenshot%20from%202021-03-04%2020-46-50.png?version=1&modificationDate=1614871034449&cacheVersion=1&api=v2)

- Check “Mark as Done” if the result entry is complete either by entering a result or by uploading a file on the same test or another test. Result for that test will go to validation phase if and only if the test is marked as done.

- 
Click on the “Save” button to save the entered details.

- 
Once the results have been entered and saved, the same will be available for validation along with the locally done tests in “Validation” screen.

- 
Accordingly the “Pending Validation” column count in the Lab Dashboard will get updated.

  **Feature Details**

[Feature Guide - Laboratory Management](/wiki/spaces/BAH/pages/32604211/Laboratory+Management) 
 
**Implementation Details**

[Implementer's Guide - Laboratory Module](/wiki/spaces/BAH/pages/32014586/Laboratory+Module)
