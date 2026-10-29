---
id: "18415840"
title: "Configure Lab Data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/18415840/configure-lab-data"
version: 7
updated: "2016-08-19T10:23:03.744Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:11.728Z"
---

# Configure Lab Data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/18415840)  
> **Versión del documento:** v7 (2016-08-19T10:23:03.744Z) | **Autor/Editor:** Teresa Gracias

---

## OpenMRS Reference Data setup for Lab

OpenMRS gives a lot of flexibility since it recognizes everything as Concepts. So all resources like tests, panels, samples and departments are concepts in OpenMRS. 

Since lab resources like samples, tests and panels need a sort weight domain wise we use a blend of concept and concept sets to define it in OpenMRS. ONly concept set - set members can have a sort weight. Bahmni as a product defines some concepts sets for lab concepts to emulate sort weight.

### Departments

Departments are recognized in OpenMRS as concept sets which have a concept class "Department". They ideally should belong to the concept set "Lab Departments". But that is not mandatory. As soon as a department is created using the OpenMRS Admin UI or the CSV Concept import, an atomfeed event is published from OpenMRS.

### Samples

Samples are recognized in OpenMRS as concept sets with a concept class "Sample". They ideally should belong to the concept set "Lab Samples". But that again is not mandatory. As soon as a samples created using the OpenMRS Admin UI or the CSV Concept import, an atomfeed event is published from OpenMRS.

### Panels

Panles are recognized in OpenMRS as concepts with a concept class "LabSet". They ideally should belong to the concept set All_Test_And_Panels. It is not mandatory though. Like Departments and Samples a panel concept creation leads to an atomfeed event publish.

### Lab Tests

Lab Testa are concepts with concept class "Lab Test". Not mandatory but they should belong to the concept set All_Test_And_Panels. A creation of a concept of this type will generate an atomfeed event.

### Linkages/Relations -

**Lab Test** -> **Sample** **The Sample concept is a set, and the lab tests can be added to the sample concept set to show that a particular lab test belongs to that sample. For eg. Haemoglobin Lab test will belong to the Blood Sample.

**Lab Test** -> **Department**
A lab test concept can belong to a department. To signifiy this in OpenMRS, the lab test concept should be a set member of the department concept set. 
For eg. Haemoglobin Lab test will belong to the Haematology department.

**Lab Test** -> **Panel**
A panel is essentially a collection of lab tests. So the test can be a set member of a panel concept set in MRS to depict the Lab Test-> Panel linkage.

**Panel** -> **Sample**
The panel should belong to the sample concept set to depict this relation.

### Sort Weight conundrum

Sort weight is required on multiple levels. It is required across all tests and panels, tests inside a panel and samples also need sort weight.

To facilitate this, 

Add and arrange/order all the tests and panels to the concept set "All_Test_And_Panels" to get a sort weight across all of them. 
Add and arrange/order all the tests in the panel concept set to get a relative sort weight of tests inside a panel.
Add and arrange/order all the samples in the concept set "Lab Samples" to get a sort weight of samples.

## Lab Reference Data

### OpenELIS

OpenElis is one of the consumers for lab reference data. The resources/entities follow a little different nomenclature in OpenELIS compared to OpenMRS
OpenMRS Entity Name -> OpenELIS Entity Name
Samples -> Type Of Samples
Departments -> Test Sections
Lab Tests -> Tests
Panels -> Panels

### OpenELIS rules

1. A test must belong to a test section.
2. A test is only fully created if it belongs to a sample.
3. A panel is only fully created if it belongs to a sample.

### Consume

### Lab Test Event

Lab Test events when consumed create or update a Test in OpenElis. Since a test needs a department, there is a dummy department in OpenElis by the name "New". The lab tests are assigned to that department. No sample or panel associations are created. The test won't be available from the UI since it doesn't belong to a sample.

### Panel Event

Panel events when consumed create or update a Panel in OpenElis. Since a panel needs a sample, it won't be available for selection unless it belongs to a sample. Panel to test associations are formed as part of panel event consumed.

### Sample Event

Sample events lead to update or creation of a Type Of Sample in OpenElis. Sample to test and panel associations are also formed as part of this consume. A test or a panel can only belong to one sample.

### Department Event

They lead to creation of a Test Section in OpenElis. Test to Test Section associations are updated as part of this event consume.

Note:

Newly created samples are only visible in Elis after an Elis application restart.

**How to set up Lab data using CSV Upload**

- Tests

        Upload concept CSV. Sample File: [Labtests_concepts.csv](/wiki/download/attachments/18415840/Labtests_concepts.csv?version=1&modificationDate=1429265210210&cacheVersion=1&api=v2)

      2. Panels

        Upload concept set CSV. Sample File: [Panels_concept_sets.csv](/wiki/download/attachments/18415840/Panels_concept_sets.csv?version=1&modificationDate=1429265297167&cacheVersion=1&api=v2)

      3. Samples

        Upload concept set CSV. Sample File: [Samples_concept_sets.csv](/wiki/download/attachments/18415840/Samples_concept_sets.csv?version=1&modificationDate=1429265321879&cacheVersion=1&api=v2)

      4. Departments

        Upload concept set CSV. Sample File: [Departments_concept_sets.csv](/wiki/download/attachments/18415840/Departments_concept_sets.csv?version=1&modificationDate=1429265344479&cacheVersion=1&api=v2)

### Video Guide

    

 

 

On this Page
 
 
 
 
Related Links**

[Laboratory Module](/wiki/spaces/BAH/pages/32014586/Laboratory+Module)
