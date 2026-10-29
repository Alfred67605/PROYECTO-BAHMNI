---
id: "109314082"
title: "Configure Laboratory Management System (OpenELIS)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/109314082/configure-laboratory-management-system-openelis"
version: 10
updated: "2023-05-23T06:06:37.096Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:52.852Z"
---

# Configure Laboratory Management System (OpenELIS)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/109314082)  
> **Versión del documento:** v10 (2023-05-23T06:06:37.096Z) | **Autor/Editor:** Gurpreet Luthra

---

## Steps

### 1. Configure Lab Data in OpenMRS

Please refer to [Configure Lab Data](/wiki/spaces/BAH/pages/18415840/Configure+Lab+Data) to setup OpenMRS Reference Data setup for Lab

### 2. Set up a Lab Test

1. Create a [concept](/wiki/spaces/BAH/pages/50921567/Configure+Concept+or+Concept+Set) in OpenMRS of the class *LabTest*.

### ![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/Screen%20Shot%202016-02-18%20at%204.39.08%20PM.png?version=1&modificationDate=1482301711257&cacheVersion=1&api=v2)

2. Specify the data type as text, numeric or coded. If data type is set as coded, the test result options will appear as a dropdown in OpenELIS.

3. Add the lab test concept to the relevant concept sets:

- 
sample concept set

- 
panel concept set

- 
department concept set

- 
all tests and panels concept set in OpenMRS.

4. The lab test will be visible under the Orders tab in consultation page of Bahmni.

![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/Screen%20Shot%202016-02-18%20at%206.06.28%20PM.png?version=1&modificationDate=1482301710683&cacheVersion=1&api=v2)

5. After the test is created in OpenMRS, it syncs to the list of tests in OpenELIS and is visible under the sample it was added in OpenMRS.

### 3. Refer a Test

OpenELIS has a test attribute which can mark the test as "Referred Out". This is used if the hospital's laboratory cannot perform a test and have to refer the patient to another laboratory for that test. If this attribute is selected, the test is automatically displayed as referred out which saves the manual effort of the lab technician to mark the test referred out each time it is ordered.

To set up the test as referred out -

1. Go to the Admin page in OpenELIS and select "Test" from the panel on the left.

### ![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/Screen%20Shot%202016-02-22%20at%2011.50.23%20AM.png?version=1&modificationDate=1482301709827&cacheVersion=1&api=v2)

2. Select the test and click Edit. Select the checkbox to mark the test as "Referred Out".

### ![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/Screen%20Shot%202016-02-22%20at%2011.34.10%20AM.png?version=1&modificationDate=1482301709060&cacheVersion=1&api=v2)

### **4. Sample Source Config in OpenElis**

When a  lab order is placed in EMR for a patient, that information will sync to OpenElis. When the order is synced to Elis, sample source will be the location from which Order has been placed in EMR. And SampleSource field is **non editable** when lab order is synced from EMR to Elis. If the location from which lab order is placed in EMR is not a sample source in Elis, then it will create a new sample source with that location name. Please refer to the attached diagrams:

                                                 Here Test Patient has DLC panel ordered from Registration Desk location

**![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/Screen%20Shot%202017-01-12%20at%202.55.04%20PM.png?version=2&modificationDate=1484213406933&cacheVersion=1&api=v2)

                                                      Lab order has Sample Source as Registration Desk and it is non editable

![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/screenshot-192.168.33.10-2017-01-12-15-03-19.png?version=1&modificationDate=1484213689956&cacheVersion=1&api=v2)

**5. Link Sample Source and Location**

 When a lab order is directly placed in Elis user can chose any sample source from the available list. That lab order and result will sync back to EMR based on which location that sample source is associated with. A sample source association with location can be done in two ways.

-  If a lab order is synced from EMR to Elis and there is no sample source with that name it will automatically create a new sample source with location name in Elis. And it will add an entry into external reference table with newly created sample source id as item_id, locaitonUuid as external_reference_id, "SampleSource" as type. 
- Manually associating a sample source with location. One can associate sample source with location by running a insert query into external_reference table.

Insert query**

```
insert into external_reference(item_id, external_id, type) VALUES (,,'SampleSource');
```

**Example**

```
insert into external_reference(item_id, external_id, type) VALUES (9,'8d6c993e-c2cc-11de-8d13-0010c6dffd0f','SampleSource');
```

**

If a sample source is not associated with any location then that lab order/lab result will not sync to EMR. That information will be there in failed events table. If a sample source is linked with a location, but if that location is not existed in EMR or if it is not a visit location, then sync will not happen.

One can manually insert the sample source into sample_source table by using the following query.
insert sample source**

```
insert into sample_source(name,active, display_order) VALUES (,,);

```

Example:
**Example**

```
insert into sample_source(name, active, display_order) VALUES ('example sample source',true,11);
```

**

### **6. Configure Default Sample source in OpenElis**

User can configure a default sample source. The value for the default sample source is the name of the existing sample source. If default sample source is not configured, by default empty value will be shown while ordering the lab order from OpenElis for a patient. If default sample source is configured then sample source will be pre populate with the configured value(if it exist as a sample source in elis) in add sample page. To configure default sample source please follow the steps.

1. Go to  Administration, click on site information.

![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/Screen%20Shot%202017-01-12%20at%203.51.53%20PM.png?version=1&modificationDate=1484216746251&cacheVersion=1&api=v2)

2. Select default sample source and add/edit the value for default sample source.

![](https://bahmni.atlassian.net/wiki/download/attachments/109314082/screenshot-192.168.33.10-2017-01-12-15-56-48.png?version=1&modificationDate=1484216871567&cacheVersion=1&api=v2)

On this Page
 
 
 
 
Feature Details**

[Laboratory Management - Feature Guide](/wiki/spaces/BAH/pages/32604211/Laboratory+Management)

**Usage Details**

[Laboratory Management - User Guide](/wiki/spaces/BAH/pages/32014358/Laboratory)

**Related Links**

[Lab Master Data Setup](/wiki/spaces/BAH/pages/18415840/Configure+Lab+Data)
