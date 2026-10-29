---
id: "2306539608"
title: "Types of test status"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306539608/types-of-test-status"
version: 2
updated: "2021-04-05T01:42:09.252Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:56.651Z"
---

# Types of test status

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306539608)  
> **Versión del documento:** v2 (2021-04-05T01:42:09.252Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

This feature is available from V0.93-Bahmni

The Lab Technician should be able to select one of the preconfigured active test statuses from the drop-down and set an overall status for a “TEST” on the results entry page. 

**Requirements:**

The following requirements are implemented to complete this story.

- 
User logs into the Elis and clicks on the Administration tab to see an additional Item “Type Of Test Status” on the Left Menu.

When client(s) wish not to use this feature will turn off the configuration using the use fields feature in the class AdministrativeFormFields

      
![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/ZSeM6Bemn_3QBgWs87WLv7vbDRe_esLLj3BjW9CkrtcHUC9IsdWq_GYP79Ju09wbiD1B3Exi1w6FSfb87ekqCuSTYI75CyI1nfk8Q08UQ75mbBVLFn3-_9ZD-vK-ZIKBTaOCPfhZ?version=1&modificationDate=1617525873538&cacheVersion=1&api=v2)

- 
Users click on the “Type Of Test Status” Menu on the Left Pane and should see the already configured type of test statuses.

- 
The page will not list any details if there are no test statuses configured yet.

- 
The pagination feature should be intact with other pages on Elis. That is, it lists 20 items at a time. 

- 
The list is ordered by “Test Status Name”

- Users click on the “Add” button on the “Type Of Test Status” menu page and lands on Add Type of Test Statust Status page

As it is a new Test Status being created no id is displayed.

- 
Users should be able to select a status type from only the drop-down which is defaulted to “SAMPLE”.  And the currently available options for status type would be SAMPLE, TEST.

- 
Status types are preconfigured and in case a client needs additional status type, they should configure them as part of “AllowedTestStatusTypes”. Please note that the types here should be lower than Test Level. That said,  it could not be one of the Result, Analysis, Panel or Accession (etc) where we might have more than one Test for a given id.

- 
Status Name is a mandatory field and should be a UNIQUE String. The field accepts only 50 Characters. It can be a multi-word String separated by a space.

- 
The description is an optional field and should be a UNIQUE String. The field accepts only 200 characters.

- 
Active is a mandatory radio button field, having options to select for “Yes” or “No”. User is supposed to select the appropriate option and does not default to any option.

- 
Result Required is a mandatory radio button field, having options to select for “Yes” or “No”. The user is supposed to select the appropriate option and does not default to any option.

- 
Approval Required is a mandatory radio button field, having options to select for “Yes” or “No”. Users are supposed to select the appropriate option and do not default to any option. We can use this flag/feature in case we need to sync the test status data without approval on the Validation page. Please note this is out of scope for this Story.

- 
The Next and Previous options on the page are disabled.

- 
Exit should take the user back to the List page.

- 
Save performs the above-said validations and submits the form to the backend.

- 
The Business layer validates the record for Uniqueness of StatusName and Description. If the user enters a duplicate status Name or Description, the record is not created and the user is shown an error “**An error occurred while updating.**”

- 
On successful submission of the form, a new record is created in the table **“clinlims.type_of_test_status”**. And the user still remains on/redirected to the same page where the test status ID is presented and he/she can further do any updates and resubmit. The “Next/ Previous” buttons are now enabled.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/LEte0nyedm-ona1FFccgvrm9KDfhXB3Kz3ReX9goYOFhwHMo3JoVsvuaERuMKJt4kuyixj3WCDb1TsqdRb4OQZ8CA7tX9RIPBKEx94djx-PB5FsWGoGBJMZmifEN6z7Zgk7ljUMS?version=1&modificationDate=1617525873552&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/VWh1uvbls4Y2i_eljvB1DJYZ61rAyxK99zTkNrHLA7kTRh_pTJ9ndGFVWNDWnvqJtFSDiMiS3LRtVITi4g81Fdjt_XkSo7jybSGS5sYDpmxbF4UrIYj6fsglw9EpIkr9zsNjvjlk?version=1&modificationDate=1617525873573&cacheVersion=1&api=v2)
- 
Users click on the “Edit” button on the “Type Of Test Status” menu page and land on the Edit Type of Test Status page only when they select the type of status to be edited on the list page.

The Type of Test status is non-null text on the edit screen.

- 
All the above said validations on the editable fields will be applied for submitting any modifications to the already created type of test status.

- 
On successful submission of the form, the data is updated on the clinlims.type_of_test_status table. And the user is taken to the Listing page.  

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/4nXnMVMBa5KS0QGk2lOhxcCF19TWR4uMa1w20mNJ6ouzSD3tQOe58uXqLc-x7h9pAEv8f5AUigoM_gdOmtJ4TMl-MFPKERRDfdv4y95A1Mh7qsHBzLwX0rwF1Owr-TFquOjHG0fD?version=1&modificationDate=1617525873575&cacheVersion=1&api=v2)
- 
Introduction of a new flag called flagForShowingTestStatus. 

This flag is added to the siteInformation table, where there is an option to set it true or false. In case, the flag is set to false - Type of Test Status drop down will not be shown to the customer. 

 

Results List View When the above said flag is OFF/False:
![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/V6nfe80nUl-sA3Q4GhHTMpLJMjyDQGEM808RMs-vxwxpTIx0aBPMLLIzUdc-7zV-xz_SYdSOl-1V-FcB2FcEqEN4wyF6Vcu_3WflOzaIq69zenWMF8ST5J3TIxoHPyu5gpXn5gRv?version=1&modificationDate=1617525873577&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/N5x_fgVKhUThgEcaS52GIaNdel6N2frSl0y5mp3qs51JLfXlos5Bv1yEzUGekL_o6YL-Q2dCcCl8niuVAyhUeZVzg8BbXF7uVrHqrGRlKmUMYNnUJAk9ZkqxhbHLh4yiJZCgV_rA?version=1&modificationDate=1617525873579&cacheVersion=1&api=v2)

Result List View when the flag is ON/True:
![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/_ZOtwfx16aHPNu5TdZOfPmDw6062M0M1Y2xklFXwB9uzcdMeZkUwgCPiCK2BiG3ZyAQ4MpyViBMWJj-X8UlXm_IZdCVsb0elzLNyftZ2wOODhLxyazIgsE_KTuyCNj0_QjxShXwU?version=1&modificationDate=1617525873581&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/FhckMFmPaVuswt9LGJ_Emdj_OJdWkd_zlS-SBegOlmno1poV6HvTovsuj8o08pD2J5-axWAJKogv1mRaGeQ9sc4aa3czjHMgTrkLh0pk_A6DvAbTVdRYxePrkJ0cVVyf3riEQifw?version=1&modificationDate=1617525873583&cacheVersion=1&api=v2)

- 
Users log into Elis, Click on samples collected Today to enter results. Will be shown 3 options (to enter results, to approve results, and to print) as part of the action section. When users opt to enter results, they will be taken to the result entry form.

A new option “Test Status” appears as the first field to be selected by the user. It is defaulted to empty. 

- 
By default when there is no test status selected the result section comprising 4 fields as shown below (result, abnormal, referral reason, and organization) is as it is today.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/X5QbrKgwd2VJXdwAC7IExbXCxBdruNMJazHoBJaGrk_1WlpMfMV0SiCx-Fod_9vgu74qTh2UH4i_eUUvZXrhODbnFIU9hmLe5IPtf1PkfMHN4hqOQSbxMw9leqM2ERnBe6oSV9Gz?version=1&modificationDate=1617525873585&cacheVersion=1&api=v2)

- The Test Status drop down should list all the **Active Only** test statuses which are already configured per client needs.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/mxf87_3YF8ZvWXynM9GAXJ4MpJvPjdFLJuIj7_m3Hcb90y9KXy6FXmLG9UbqQuV0s3a09-4Mtmbl3mq17pGbCFD7wITYvEUexLD_crLTVKpCRPIjpHu9rUhOvFIwn6k_Y97qOvPe?version=1&modificationDate=1617525873587&cacheVersion=1&api=v2)

- 
Users click on test status drop-down and select an option which is configured to not have a result (type_of_test_status.isResultRequired=N). 

The result section should be greyed out/ disabled. Even on Tab click the user should not be able to enter results when the result required for the test status is set to N. Only option allowed is to upload any related files.

- 
A note section is enabled to allow users to enter additional notes on the status selected. This is optional and users should be able to submit the form through notes that are not entered.

- 
Users click the test status back to default option/empty, the result section will be enabled back.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/miyRux8c3x9yQVA1twXfSrZ_5JhedkcTJoR3xCr406Jsax3fR7xfyfUHXBId2firxRB8uOkkTZOqTwG8xVWdzlikEILNnVG8PVp0aivATLutVgDFU8AFuZK8biU19sKr4Hl-QnyA?version=1&modificationDate=1617525873589&cacheVersion=1&api=v2)
- 
Users when submit the form selecting the test status, a test status should be mapped to the test in the table **clinlims.test_status**

- 
User wants to update the test status already saved clicks on the appropriate action  button and lands on the result entry page. On load the page should disable the result section when the type of test status already entered/saved has a result required set to 

“N”.
![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/iDbhRNPWPcVpDJl5EHj1M3ZShqs6AFp17hEa_ejHuNKMbTlWnyXlw7HYLoqVvhujO_BTxcD5zpf42kWzYJyIfhKgPJtmBBikRZzO_vek4MzPdM_MXdMHNc9WgRdT9zspfsMHB2ro?version=1&modificationDate=1617525873591&cacheVersion=1&api=v2)

- 
The user enters a result and submits the form. And when realizes the result is wrongly entered and corrects the form by opting for test status. When submitting the form with test status, the already saved result should be deleted from DB (clinlims.result, clinlims.test_result). Notes are mandatory as the result is changed from non-null to a null value.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/vkrQzChfDSO5cgFPanmSBDCS4loV2oz1-ahrtU-ZKttfy8-YtHGyT1nqnhf4UItQJkb3EUV8EcMLSqlqxZBIHWiChqscIFtYqG6oAJibwLF_S9RYooR8vHGx9UIvsr1qdGqsRwIV?version=1&modificationDate=1617525873593&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/h5WTUoaiHpaj-AfVZstfsBPFIl5r5fYMxsMZVFO9EX0eSG0DFYQtlJcNuxsRc-ryobBw75GoiFhv-1EjjauH3PKmMRUzhpTO1HEmJ5_6HCLzlZ9IyxEsi76u-KDw4o0wQQJZIxDy?version=1&modificationDate=1617525873595&cacheVersion=1&api=v2)

- 
User lands on the results entry page and when the test is referred out, selects appropriate options to mark the test as referred out. When the test is referred out, the result section is disabled currently, and so should be the test status field.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/O-2GeW4y-N-NEEmf4sj_Ei3hqYrvP42gP0sV7zQz5JNS1rMB2bLpYPD5In920vCat8_JoX-Qi6QNSonyiG1pgpYCnJcfzfMk0uq1iQiK0IWsuIYNC1sCcHBIBw6nWl9VFXpPUN6r?version=1&modificationDate=1617525873597&cacheVersion=1&api=v2)
- 
User lands on the results entry page and on load the test status field remains disabled when the test is marked as referred out.

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/Q7KaeAO0ebXpu4f0AIYXO1s8hyf02dDNYqgDs1xAbwumbQ40xC5CbzcaerTmkojebDtqRAuzf8Ea2CmuBCN55sskIxn7Fc361NcJZDy_p9R9yVnhxS8uHrom4OEGxuAlKgrtl7gn?version=1&modificationDate=1617525873599&cacheVersion=1&api=v2)
- 
On the result entry page, users click on the test status drop-down and select an option that is configured to allow the result (type_of_test_status.isResultRequired=Y). 

The result section should **NOT** be grayed out/ disabled.  

- 
A note section is enabled to allow users to enter additional notes on the status selected. This is optional and users should be able to submit the form through notes are not entered.

- 
 Users should be allowed to enter results along with Test status, this is mostly for the success/partially successful tests

![](https://bahmni.atlassian.net/wiki/download/attachments/2306539608/ebuG46cB5g6Y5MT7jpb-zqCC-3VOUvhshhruyD6cZrnMfqTEPkrYikNJCU-yQzaFsfF8a6Ol9IrM2duLKkcBJ5u04rYb4_zWt7hpNjcM__nQaF9emppToFY6vwCAcoPjfa-UzjBH?version=1&modificationDate=1617525873601&cacheVersion=1&api=v2)**Out Of Scope:**

- 
Test Status Sync back to openMRS is out of scope for this story.

**Assumptions with Community Approval:**

- 
Test Status does not need to be present on the Validation page.  If the client needs information to be shown on the validation/approval page it should be a non-editable text.

- 
In case a technician wants to edit the status, they should reject the test and re-enter the correct status on the results entry page.
