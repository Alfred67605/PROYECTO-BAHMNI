---
id: "107708437"
title: "Advanced Lab Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/107708437/advanced-lab-configuration"
version: 18
updated: "2023-12-22T10:04:27.355Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:54.704Z"
---

# Advanced Lab Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/107708437)  
> **Versión del documento:** v18 (2023-12-22T10:04:27.355Z) | **Autor/Editor:** Gurpreet Luthra

---

## Introduction

Bahmni also provides support for further customization of the Lab module. Below is a list of advanced configuration options 

## 1. Configure lab test ranges based on gender and age**

Age & Gender based limits
 
See this video by Dr. [Akhil Malhotra (Deactivated)](https://bahmni.atlassian.net/wiki/people/557058:b74a1e67-0853-4f05-a2a7-e88691b3cd4a?ref=confluence) on how to specify Test Result Limits based on Patient Age and Gender in OpenELIS: [Video Link](https://drive.google.com/drive/folders/12p44cqQWEcOvRkbUDy43IEvUsHZqjiR7?usp=sharing)

1)  [Refer to this](/wiki/spaces/BAH/pages/18415840/Configure+Lab+Data) to create the Labtest in OpenMRS. Created test should have datatype as Numeric. Do not specify the limits for this test in OpenMRS.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202016-12-13%20at%208.31.58%20PM.png?version=1&modificationDate=1481646844273&cacheVersion=1&api=v2)

2)         Make sure above created lab test is synced in OpenELIS.

3)         Go to Administrator tab in OpenELIS and navigate to Result Limits. Click on Add button to add the limits Gender wise as shown below.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202016-12-13%20at%208.34.17%20PM.png?version=1&modificationDate=1481646843887&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202016-12-13%20at%208.35.34%20PM.png?version=1&modificationDate=1481646843416&cacheVersion=1&api=v2)

4)         Order the above configured test for different gender from OpenMRS and check the ranges been applied based on the gender. Out of range test results will automatically marked as abnormal and will be displayed in red as shown below.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202016-12-13%20at%208.42.57%20PM.png?version=2&modificationDate=1481646842910&cacheVersion=1&api=v2)   ![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202016-12-13%20at%208.45.32%20PM.png?version=2&modificationDate=1481646841474&cacheVersion=1&api=v2)

## 2. Configure OpenELIS Lab Tests with results not displayed in Bahmni

As an use-case, when a blood transfusion is required, the doctor orders a cross match panel. Orders within the panel are performed for both the patient (recipient) and for the donor. Furthermore, most of the tests are the same. In-case the cross-match fails for the patient, another cross-match is repeated for the same patient with another donor. This iterates till a fitment is found. The donor test results must not be viewed on the patient dashboard, as it may lead to a misunderstanding and is also redundant.

However, the concerned tests must be created in OpenELIS only, and will be accordingly mentioned in a groovy script so as not to be consumed by OpenMRS. Please note that the groovy script will not work for tests which are synced to OpenELIS via OpenMRS , and sync failure events will be created (expected behaviour).

The sample groovy script below restricts " * (Relative) " tests from being consumed by OpenMRS.

 
  FilterDonorTestResults.groovy** Expand source 
 
 
  
```
import org.openmrs.*
import org.bahmni.module.elisatomfeedclient.api.domain.OpenElisAccession;
import org.bahmni.module.elisatomfeedclient.api.domain.OpenElisTestDetail;
import org.bahmni.module.elisatomfeedclient.api.elisFeedInterceptor.ElisFeedAccessionInterceptor;
import java.util.*

public class FiterDonorTestResults implements ElisFeedAccessionInterceptor {
    public ArrayList donorTests = ["Haemoglobin (Relative)","VDRL Rapid (Relative)", "VDRL ELISA (Relative)", "Blood Group (Relative)","Malaria Parasite (Relative)","HIV Tridot (Relative)","HIV ELISA (Blood) (Relative)", "HCV Tridot (Relative)","Malaria Parasite (Relative)","VDRL ELISA (Relative)","DRL Rapid (Relative)"];
    @Override
    public void run(OpenElisAccession openElisAccession) {
        Iterator iter = openElisAccession.getTestDetails().iterator();
        while(iter.hasNext()){
            if(donorTests.contains(iter.next().getTestName())) {
                iter.remove();
            }
        }
    }

}

```

 

## 3. Remove Tests from Samples Collected Backlog Dashboard**

Sample Collected Backlog is a section on Lab Dashboard which displays list of samples for which sample is collected. If there is use-case of canceling the pending tests and removing them from the Backlog section, then this page will show how to remove those tests from the Lab Dashboard section named Sample Collected Backlog.

One such use-case of removing the samples from the list would be adding a sample multiple times by mistake or clinicians wanting to cancel tests whose sample is collected .

                                                     

                                    ![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Backlog.png?version=1&modificationDate=1482314415786&cacheVersion=1&api=v2)

In order to remove the sample from the Lab Dashboard Section *Samples Collected Backlog,* please follow the below mentioned steps.

**Login to the OpenELIS database**
 
OpenELIS database name is "clinlims"

**Execute the query**

Execute the query below with the proper accession numbers. The query mentioned below will update the status of the analysis to "Test Canceled" (*status_id=15*)
 
Please make sure of updating the query with proper *accession numbers* with in the ***IN*** clause of query and ***comment*** which holds the reason for canceling

Execution Warning
 
Please be careful while executing this query because this query will remove from the dashboard any test with the given accession number.
SQL QUERY**

```
UPDATE analysis
SET status_id=15, comment='Write any comment here about the reason for this action'
FROM sample_item si, sample s
WHERE analysis.sampitem_id = si.id
    AND s.id = si.samp_id
    AND s.accession_number in ('27082015-006','27082015-006');
```

## 4. To remove &ldquo;Validate&rdquo; option from OpenELIS

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202017-05-03%20at%209.58.59%20AM.png?version=1&modificationDate=1493787534120&cacheVersion=1&api=v2)

OpenELIS by default has an option to validate the lab results (usually done by the lab supervisor) once results are entered by the lab tech. But there may be implementations that does not require the validation option as they don&rsquo;t validate the lab results. 
 
Follow the below steps to remove the validation option from OpenELIS.

1) Login to clinlims (OpenELIS) database :

```
psql -Uclinlims
```

2) Check for "value" in site_information table by using the below query :

(The value will be "true" by default and we need to change its value to &ldquo;false&rdquo;)

```
select * from site_information where name = 'validate all results';
```

3) Use the below query to update the value to false :

```
 update site_information set value = 'false' where name = 'validate all results';
```

4) Check if value is changed to &ldquo;false&rdquo; by using the below query :

```
select * from site_information where name = 'validate all results';  
```

5) Restart OpenELIS service by using the below command :

```
 sudo service bahmni-lab restart
```

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screen%20Shot%202017-05-03%20at%2010.00.40%20AM.png?version=1&modificationDate=1493787940220&cacheVersion=1&api=v2)

## 5. Accession Number Generation Logic

The default Accession Number format is DDMMYYYY-XXX, where DDMMYYYY denotes the Accession Number generation date and XXX is the serial number which will start from 001 on every new date. There is a configuration in Administration - Site Information section named as **acessionFormat**, through which the user can change the Accession Number format to **YYYYXXXXXXX**. Where **YYYY** is the year and **XXXXXXX** is the serial number which will start from 0000001 every year.

Also, to achieve this user also has to update the value for property &ldquo;acessionFormat&rdquo; to &ldquo;FULL_YEARNUM_SEVEN&ldquo; in site_information table in OpenELIS DB (Refer below query).

update site_information set value='FULL_YEARNUM_SEVEN' where name='acessionFormat';
 
The configuration of accession number format is only allowed during system installation. The change of logic is not supported after an accession number is already generated.

## 6. Test Method Management

Laboratories use a variety of methodologies to analyse the tests. User has the option to add the different methods from Administration - Test Methods screen. Added methods can be edited or deactivated from the same screen.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Test%20Method%20Management.jpeg?version=1&modificationDate=1616652827079&cacheVersion=1&api=v2)

**Test Method Management**

Also, user can associate the desired active method to a test while editing it from Administration - Test screen.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Associate%20Method%20with%20a%20Test.jpeg?version=1&modificationDate=1616653040908&cacheVersion=1&api=v2)

**Associate Method with a Test**

## 7. Free text reference range information for lab tests

For certain tests, reference range information has to be captured as free text in the masters and printed on the report. This is because in many cases, the ranges may not fit within the existing age and gender framework, there are ranges mentioned for pregnant ladies, mensus cycle, fetus etc. Also in many cases, labs would like to give extra information like desired range, borderline range etc in the lab report.

To achieve this, user can capture the desired information in the "Reference Info" field (Free Text field) is added in the Administration - Test - Test details screen.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Reference%20Info.jpeg?version=1&modificationDate=1616653491294&cacheVersion=1&api=v2)

**Reference Info**

## 8. Disable auto-modification of orders in Bahmni after editing the same in Open ELIS during sample collection

In ELIS if some test(s) is removed from the order from a clinical lab order at the time of sample collection, respective test(s) gets discontinued in Bahmni. Such tests won't be visible on Bahmni dashboard anymore, making it appear like those tests were never ordered. This is a concern to the ordering doctor. Even if the patient refused to do the test later at the lab, the original order should not get discontinued from the EMR. Same is the case when some extra test(s) added to the order while the sample collection, those gets sync to Bahmni and appears in the Dashboard.

To disable this behaviour user can go to the OpenMRS - Administration - Advance Settings and add a new property (if not existing) with Name = **elisatomfeedclient.discontinueCancelledOrders**. When the property value is set **false**, system will be working as default behaviour, but when the value of the property is set **true**, then the modifications in the order won't be synced to Bahmni.

![](https://bahmni.atlassian.net/wiki/download/attachments/107708437/Screenshot%20from%202021-03-22%2015-10-10.png?version=1&modificationDate=1616406114969&cacheVersion=1&api=v2)

**OpenMRS Advanced Settings**

On this Page
 
 
 
 
**Feature Details**

[Laboratory Management - Feature Guide](/wiki/spaces/BAH/pages/32604211/Laboratory+Management)

**Usage Details**

[Laboratory Management - User Guide](/wiki/spaces/BAH/pages/32014358/Laboratory)

**Related Links**

[Lab Master Data Setup](/wiki/spaces/BAH/pages/18415840/Configure+Lab+Data)
