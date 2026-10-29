---
id: "8912898"
title: "Bahmni Observation Templates"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8912898/bahmni-observation-templates"
version: 11
updated: "2014-09-03T07:14:40.295Z"
author: "VivekV"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:55.694Z"
---

# Bahmni Observation Templates

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/8912898)  
> **Versión del documento:** v11 (2014-09-03T07:14:40.295Z) | **Autor/Editor:** VivekV

---

There are certain observation templates which should packaged by default with bahmni. These packaged observation templates can be divided into two categories.

- Disease or condition specific - Things like gynaecology, cancer, tuberculosis, etc.
- Clinical methodology based - Things like History, Examination, Discharge, etc.

The purpose for doing this is to provide a starting point for any implementation, standardise names for things like chief complaints, lifestyle (see below) in our code, reports, analysis.

**Implementation**

From the source control perspective this should be maintained in its own repository, may be called bahmni-clinical-content. If we decide to do this via the liquibase scripts we should define stored procs to make it easy to add/change these. Using CURL is also an option.

**Specification for the templates**

***History
***- Case summary
- History
- Examination

***Complaints
***- Chief complaint(s)
- Chief complaint notes

***Detailed History
***- Social history
- Family history
- Past medical history
- Past surgical history
- Treatment history
- Immunisation history
- Home medications
- Personal history - values {Smoking, Alcohol} (with duration) similar to chief complaint
- Occupational history
- History of present illness

***Detailed physical examination
***- Review of systems
-- Cardiovascular
-- Respiratory
-- Gastrointestinal
-- Genitourinary
-- Nervous
-- Cranial nerves
-- Endocrine
-- Musculoskeletal
-- Skin
- Physical examination

***Vitals*
**- Blood pressure
- Pulse
- Temperature
- Respiratory rate
- SpO2
- Vital notes

***Nutrition
***- Height***
***- Weight***
***- BMI***
***- BMI status***
***- BSA

***Returning patient***
- New Complaints (chief complaints)
- Improvements
