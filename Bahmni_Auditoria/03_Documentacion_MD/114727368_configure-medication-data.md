---
id: "114727368"
title: "Configure Medication Data"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114727368/configure-medication-data"
version: 8
updated: "2018-10-09T12:46:38.094Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:12.279Z"
---

# Configure Medication Data

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114727368)  
> **Versión del documento:** v8 (2018-10-09T12:46:38.094Z) | **Autor/Editor:** Angshuman Sarkar

---

## Description

In Bahmni, reference data needs to be present in multiple systems/databases. In the case of Medication (Drugs), it is more complex, as it is stored in a completely different domain.

Earlier versions of Bahmni had an application dedicated for reference data setup. The current version uses OpenMRS as the main recognized application for reference data setup. OpenMRS gives a lot of flexibility since it recognizes everything as Concepts. So all resources like tests, panels, samples, departments, drugs are concepts in OpenMRS. Drugs are also recognized as a separate resource in OpenMRS, but their setup is a little different from the other resources.

## Add Medication / Drug Data

There are two ways to configure Medication Data: via OpenMRS or via CSV Upload as detailed below

### 1. Add via OpenMRS

- Drugs exist as a separate entity in OpenMRS but they also require a concept linking.
- To create a new drug/medication, there first needs to be a generic concept that depicts the generic drug.
**For Example: **

If there are drugs like Paracetamol 2mg, Paracetamol 500mg tablet etc.  they needs to be a generic concept "Paracetamol" created. The concept created for drug must be of concept class "Drug". 
- Then a drug can be created which is linked to the generic concept. The drug can have a dosage form, maximum/minimum daily dose and strength.

*Concept - "Paracetamol" - Concept Class - "Drug"*

Drug 1 - "Paracetamol 2mg" - Dosage Form - "Injection" - Strength - "2mg" Concept - "Paracetamol"
Drug 2 - "Paracetamol 500mg" - Dosage Form - "Tablet" - Strength - "500mg" Concept - "Paracetamol"

![](https://bahmni.atlassian.net/wiki/download/attachments/114727368/Paracetamol%20Concept.png?version=1&modificationDate=1487228996549&cacheVersion=1&api=v2)

**Sample Screenshot of Concept Paracetamol in OpenMRS**

**
**

                              ![](https://bahmni.atlassian.net/wiki/download/attachments/114727368/Paracetamol%2060ml%20drug.png?version=1&modificationDate=1488190783583&cacheVersion=1&api=v2) 

**                                                      Sample Screenshot of Drug Paracetamol 60ml in OpenMRS**

There is a many-to-one relationship between Drugs and Concepts belonging to concept class "Drug".

When a new Drug is created, an event is published from OpenMRS in the atom-feed. The "OpenERP Atom Feed Service" will then consume the events from OpenMRS and then create the drug details in OpenERP. The Drug in OpenMRS is mapped to Product in OpenERP. The fields are mapped as follows:

| OpenMRS | OpenERP |
| --- | --- |
| uuid | uuid |
| name | name |
| shortName | default_code |
| genericName | drug |
| dosageForm | categ_id - id of product.category table |

The process of synchronization between various components can be found [here](https://bahmni.atlassian.net/wiki/display/BAH/Atom+Feed+Based+Synchronization+in+Bahmni).

**Note: **A drug can be retired/deleted from the "Manage Drug Concepts" OpenMRS page

### 2. Add via CSV import in Bahmni

- 
Upload concept CSV for Drug Dosage Forms

Sample file: [Drug_Dosage_Forms_concepts.csv](https://bahmni.atlassian.net/wiki/download/attachments/12320770/Drug_Dosage_Forms_concepts.csv?version=1&modificationDate=1429266164295&api=v2)

- Upload concept CSV for Generic Drug concepts

           Sample file: [Drug_Generic_Name_concepts.csv](https://bahmni.atlassian.net/wiki/download/attachments/12320770/Drug_Generic_Name_concepts.csv?version=1&modificationDate=1429266111142&api=v2)

     3. Upload drug CSV for Drug formulations.

          Sample file: [Drugs.csv](https://bahmni.atlassian.net/wiki/download/attachments/12320770/Drugs.csv?version=1&modificationDate=1429266203914&api=v2)

The following screenshot details the steps for uploading Drug Data in Admin section

![](https://bahmni.atlassian.net/wiki/download/attachments/114727368/Drug%20Concept.png?version=1&modificationDate=1487228996965&cacheVersion=1&api=v2)

**Sample Screenshot of CSV Import in Admin Section**

### 3. Add Drugs via CSV import in OpenERP

## Delete Medication / Drug Data

To delete medication/drug data please refer to the screencast and the outline steps below

    

**Delete Medication / Drug Data**

1. Login to OpenMRS

a. Select the Drug/Medication that you want to retire

b. Enter a "Reason" for retiring the drug. For e.g. "Not used anymore"

c. Click "Retire the Drug"

5. Login to OpenERP

a.Go to "Products" and search for the Drug/Medication that was retired above.

b. Click the "More" button and select "Delete" from the options.

On this Page
