---
id: "69304335"
title: "Bahmni Implementation Scenarios & Factors to Consider"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/69304335/bahmni-implementation-scenarios-factors-to-consider"
version: 8
updated: "2024-01-27T06:13:36.965Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:02:56.458Z"
---

# Bahmni Implementation Scenarios & Factors to Consider

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/69304335)  
> **Versión del documento:** v8 (2024-01-27T06:13:36.965Z) | **Autor/Editor:** Gurpreet Luthra

---

This document was originally written by [Pankaj Kanchankar](https://bahmni.atlassian.net/wiki/people/557058:5ded4f42-2e54-4aa7-8d99-0e638d234a4d?ref=confluence) for Bahmni customers. It has been re-published here on the wiki for the community.
 
- A relevant discussion here: [The relationship between Bahmni EMR, OpenELIS, OpenERP and OpenMRS](https://talk.openmrs.org/t/the-relationship-between-bahmni-emr-openmrs-elis-and-erp/7436/2).
- A good blog by [Arjun](https://bahmni.atlassian.net/wiki/people/557058:ed8a85e1-871d-406d-9e5a-aba9f21b3329?ref=confluence) on his deployment and Bahmni implementation experience in SEARCH and Hemalkasa in rural India. [Read here](https://medium.com/bahmni-blog/bahmni-upgraded-to-v0-81-at-search-and-hemalkasa-9646237da816#.q2mn38f4r).
- An insightful research article by *Possible Health* on rolling out Bahmni in **Nepal**: *[Design and implementation of an affordable, public sector electronic medical record in rural Nepal](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5874496/)*
- A good discussion on how can Bahmni/EMR adoption by clinicians/physicians be increased: [https://talk.openmrs.org/t/how-do-we-enable-doctors-to-adopt-tech-and-bahmni-in-specific-in-lmic/35551](https://talk.openmrs.org/t/how-do-we-enable-doctors-to-adopt-tech-and-bahmni-in-specific-in-lmic/35551)
- A good discussion on factors & costs to consider while doing an implementation of an EMR like Bahmni: [https://talk.openmrs.org/t/drc-hospital-implementation/18655](https://talk.openmrs.org/t/drc-hospital-implementation/18655)

## Introduction

Bahmni is a highly configurable and modular system, it can be implemented in phases and in different ways to support hospital operations. Bahmni can be setup with all or only some of the sub-products. It is meant to be implemented considering hospital’s setup and the end user capabilities and use cases. For example, in a hospital which has outsourced Laboratory can choose to not install and setup OpenELIS.

It is possible for a hospital or clinic to start with a basic implementation and then keep increasing the adoption in the facility. For example, one may start with Non-clinicals first and then introduce basic clinical entry in some departments. And as the comfort level of clinicians and other staff goes up, move to capturing more details directly in the system.

Here are some example scenarios in which Bahmni is being used currently.

## Non-Clinical Implementation

In this setup Bahmni is used primarily for managing hospital’s operations and not for any clinical purposes. The setup involves using Bahmni for Registration, Laboratory, Billing and Administrative Reporting.

**

Key business processes:

- 
Patient Registration is done using the system

- 
Clinical functions like Triage, Diagnosis, Prescription, Observations, Lab / Radiology orders are on Paper by doctors and clinicians

- 
Laboratory - Based on orders given on paper - Enter samples and Lab results in the system

- 
Pharmacy - Based on paper based prescription - Enter drug orders in the system, dispense drugs, generates bill and manage inventory

- 
Billing - Based on paper orders - Enter services availed, products consumed (OPD & IPD) and generate bills from paper based records

Example sites - SEARCH in India

## Basic Clinical Implementation

In this setup Bahmni is used for very minimal clinical data capture and for managing hospital operations. The setup involves using Bahmni for Registration, Basic Clinicals, Laboratory, Pharmacy and / or Billing and Reporting

Key Business Processes:

- 
Patient Registration is done using the system

- 
Basic Clinical entry is done in system - e.g. Diagnosis, clinical history or specific observations 

- 
Other clinical details are still on paper - like Prescription, Observations, Lab / Radiology orders

- 
Laboratory - Based on orders given on paper - Enter samples and Lab results in the system

- 
Pharmacy - Based on paper based prescription - Enter drug orders in the system, dispense drugs, generates bill and manage inventory

- 
Billing - Based on paper orders - Enter services availed, products consumed (OPD & IPD) and generate bills from paper based records

- 
Doctors get to see clinical history on patient dashboard based on data entered by other departments

Example sites - Gudalur in India, Charikot in Nepal, Kaliganj and Gazipur in Bangladesh

## Basic Clinical Implementation - Data Entry 

In this setup Bahmni is used for managing hospital operations and for clinical data entry at the end of the visit. The setup involves using Bahmni for Registration, Laboratory, Pharmacy and / or Billing and Reporting. Clinical information is captured in post facto Data Entry mode

Key Business Processes:

- 
Patient Registration is done using the system

- 
Clinicians enter all clinical details on  paper including diagnosis, prescriptions order etc

- 
Laboratory - Based on orders given on paper - Enter samples and Lab results in the system

- 
Pharmacy - Based on paper based prescription - Enter drug orders in the system, dispense drugs, generates bill and manage inventory

- 
Billing - Based on paper orders - Enter services availed, products consumed (OPD & IPD) and generate bills from paper based records

- 
All Clinical entry is done by a data entry operator at the end of the visit (same day or next day) - e.g. Diagnosis, clinical history, observations, prescriptions, clinical notes etc. Some of the non-structured clinical details continue to be present on paper

Example sites - Lok Biradari Prakalp in India

## Complete Implementation 

In this setup Bahmni is used for Clinical activities as well as for managing hospital operations. The setup involves using Bahmni for Registration, Clinical (OPD & IPD), Laboratory, Pharmacy and / or Billing and Reporting. 

Key Business Processes:

- 
Patient Registration is done using the system

- 
Clinicians enter all clinical details in the system including Vitals, clinical history, diagnosis, prescriptions, Lab & radiology orders etc

- 
Laboratory - Based on orders given by doctors in the system - accept samples and enter Lab results in the system

- 
Pharmacy - Based on prescription given by doctors in the system - drug orders are pre-populated in the system, dispense drugs, generates bill and manage inventory

- 
Billing - Based on clinical orders and some paper based consumption entries - Some of the services and items consumed are pre-populated - for others, enter services availed, products consumed (OPD & IPD) and generate bills from paper based records

- 
Some of the non-structured clinical details including Nursing and Doctor’s notes in IPD continue to be present on paper

Example sites - JSS in India and Bayalpata in Nepal

## Program Specific Implementation 

In this setup Bahmni is used for capturing disease specific program data. The setup involves using Bahmni for Registration and capturing program specific Clinical data and Reporting. This typically involves installing Bahmni with only OpenMRS.
 
This could be done during patient visit or as a post facto data capture

Key Business Processes:

- 
Patient Registration is done using the system 

- 
Program enrollment, Managing program progress and End programs

- 
Capturing program specific observation forms

Example site: EndTB

On this page**
