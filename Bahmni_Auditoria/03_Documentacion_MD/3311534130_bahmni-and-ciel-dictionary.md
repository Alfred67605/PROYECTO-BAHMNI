---
id: "3311534130"
title: "Bahmni and CIEL dictionary"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3311534130/bahmni-and-ciel-dictionary"
version: 5
updated: "2024-02-01T11:53:57.557Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:04.603Z"
---

# Bahmni and CIEL dictionary

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3311534130)  
> **Versión del documento:** v5 (2024-02-01T11:53:57.557Z) | **Autor/Editor:** Gurpreet Luthra

---

Bahmni Lite v1.0 ships with CIEL Dictionary out-of-the-box. It is downloaded from OCL and stored in the `clinic-config` repository here :[https://github.com/Bahmni/clinic-config/tree/main/masterdata/configuration/ocl](https://github.com/Bahmni/clinic-config/tree/main/masterdata/configuration/ocl) 

The [CIEL concept dictionary](https://openconceptlab.org/2022/10/19/ciel-bridging-terminology-for-the-global-community/) is a dictionary of over 53000 concepts relevant to health information systems in low and middle income countries (LMICs). Those concepts include diagnoses, procedures, medications, labs and observables (answers to questions) all mapped to international standard coding systems such as ICD-10-WHO, SNOMED CT, LOINC, RxNORM, and many others. It is used by electronic health records and other health information systems in more than 40 countries. Visit CIEL on OCL Online to see the latest release: [https://app.openconceptlab.org/#/orgs/CIEL/](https://app.openconceptlab.org/#/orgs/CIEL/) 
![](https://bahmni.atlassian.net/wiki/download/attachments/3311534130/image-20240115-053840.png?version=1&modificationDate=1705297127580&cacheVersion=1&api=v2)
The CIEL concepts are constantly being updated, including addition of new maps to ICD-11-WHO and language translations for a subset of concepts. You can download the latest version of CIEL dictionary from OCL. Please also read this page: [Comparing various Concept Dictionary options in Bahmni](/wiki/spaces/BAH/pages/3251863630/Comparing+various+Concept+Dictionary+options+in+Bahmni) 

**NOTE regarding datatype updates in CIEL: **When updating the CIEL dictionary version to implement essential changes or incorporate new updates, it is important to consider that these modifications will only take effect in the production environment if there are no ***pre-existing observations*** recorded for the concepts that underwent updates in the latest release version.

OpenMRS, by default, restricts the modification of **data types** for concepts with existing observations. This restriction ensures data integrity and prevents unintended alterations that could affect the accuracy of recorded information. Therefore, it is advisable to review and manage any pre-existing observations related to the updated concepts to fully realize the benefits of the CIEL dictionary's latest version in the production environment.

**NOTE regarding retired concepts in CEIL: **The current CIEL OCL importer will import all concepts into OpenMRS(Bahmni) even if they are retired (and will mark them as retired in OpenMRS). This can have some exceptions showing up in OpenMRS logs due to some rule failures, but should usually be OK to ignore for now. See this Jira ticket for more details: 

    

            

    
                [BAH-3478](https://bahmni.atlassian.net/browse/BAH-3478)
                    -
            Getting issue details...
                                    STATUS
