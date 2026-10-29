---
id: "32014588"
title: "Radiology and PACS Integration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014588/radiology-and-pacs-integration"
version: 48
updated: "2023-06-21T14:15:49.517Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:23.621Z"
---

# Radiology and PACS Integration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014588)  
> **Versión del documento:** v48 (2023-06-21T14:15:49.517Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

In-Depth Writeup
 
- Do read this blog by [Arjun](https://bahmni.atlassian.net/wiki/people/557058:ed8a85e1-871d-406d-9e5a-aba9f21b3329?ref=confluence) on the experience of integrating Bahmni with PACS using dcm4chee: [https://medium.com/bahmni-blog/how-to-integrate-bahmni-with-fuji-cr-18bfdcf75aba#.nw86mx3vi](https://medium.com/bahmni-blog/how-to-integrate-bahmni-with-fuji-cr-18bfdcf75aba#.nw86mx3vi)
- Another blog by Matthew from [Annoor Hospital](https://www.msa-annoor.org/) (Jordan) on a custom implementation of Bahmni PACS codebase integrated with an OHIF Viewer integration: [https://talk.openmrs.org/t/an-overview-of-a-pacs-integration-strategy/34119](https://talk.openmrs.org/t/an-overview-of-a-pacs-integration-strategy/34119)
- Benefits of DCM4Chee: [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2039778/](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2039778/)

**

Make integration easier!
 
The Bahmni PACS integration is not simple to setup, especially for people who are new to DICOM/PACS server terminology or concepts. We would appreciate community help in making it easier to perform Bahmni-PACS integration – preferably through automation and precise documentation. If you wish to help make this documentation better, please provide us your thoughts and comments on this page, or on OpenMRS Talk or Slack channel. Or, you can write your own blog / youtube video, and share the link here. Thanks! 

"Bahmni pacs-integration" is Bahmni's Radiology System that can send Radiology Orders placed in Bahmni EMR to digital X-Ray machines and in turn receive X-Ray images that can be viewed in Bahmni.

The pacs-integration service listens to encounters with radiology orders being placed in Bahmni EMR, converts them into appropriate messages and then sends it to an entity configured in the pacs-integration service database. 

The entity could either be separate PACS server or a modality.  In case you are setting up a different PACS server, a sync will have to be setup between PACS and specific modality for the X-ray technician to view the orders on the modality console. 

 
### Oops, Diagram Unavailable
This diagram can't be displayed. It may have been moved or deleted, or the page's access settings may be preventing it from loading. Pages with restricted access must also include Gliffy Diagrams in their allowed list.

It has two main functions as shown in the diagram below:

- 
Create a Radiology order and send it to the digital X-Ray machines (Modality).

- 
Display the X-Ray taken by the digital X-Ray Machine on the Radiology Order within Bahmni.

**![](https://bahmni.atlassian.net/wiki/download/attachments/32014588/PACS%20setup.jpg?version=1&modificationDate=1453097845960&cacheVersion=1&api=v2)**

**Architecture Diagram of the the Bahmni PACS-integration Setup and WorkFlow**

Notes
 
**Links in Black** : The work flow represented using the arrows in Black color is now not yet implemented.

**Links in Red** : The workflow represented using the arrows in Red color is automated ex : Upload the DICOM Image to DCM4CHEE.

## Key Components 

### **Bahmni PACS-Integration Module/ Web App**

The [PACS-Integration Module](/wiki/spaces/BAH/pages/36700254/Setup+PACS+Integration+module) is a web application responsible for sending Radiology Orders to Client Side Radiology Setup.This application/module syncs Radiology Orders from OpenMRS using AtomFeed Sync. For each Radiology Order a HL7 Message is created and sent to the Digital X-Ray Machine Modality using HAPI Library. HL7 Version 2.5 is used across the application.

- 

For a Radiology Order with NEW Action, an ORM with Order Type as “NW”(Create WorkList Item) HL7 Message is created.

- 
For a Radiology Order with DISCONTINUE Action, an ORM with Order Type as “CA”(Cancel WorkList Item) HL7 Message is created.   

### Client Equipment Setup

Client Side Equipment setup consists of the Digital X-Ray Machine(Modality with a PACS-Server). The PACS Server is expected to have an HL7 Interface which can understand the HL7 Order Messages and in turn create or edit the Work List Item. The technician should then upload the X-Ray taken in a Digital X-Ray Plate against any particular WorkList Item. 

### DCM4CHEE, Oviyam2

Once the X-Ray is uploaded it will automatically be forwarded to [DCM4CHEE](/wiki/spaces/BAH/pages/36077574/Setup+DCM4CHEE+Server+with+Oviyam2), which is another PACS server with a Web viewer Oviyam2 embedded in it. Using it, the Doctors can view X-Rays taken for the Radiology Orders given.

### PACS Display Control

Bahmni Patient Dashboard has a configurable section called [PACS Display Control](https://bahmni.atlassian.net/wiki/display/BAH/Display+Controls#DisplayControls-PACSOrdersControl) which has links to the Oviyam2 X-Ray link. On clicking the link, Oviyam2 page will be displayed in a new tab.

Info
 
A brief description on Pacs and dcm4chee from Bahmni talk post - [https://talk.openmrs.org/t/dcm4chee-outside-bahmni/14178/4](https://talk.openmrs.org/t/dcm4chee-outside-bahmni/14178/4) 

****

On this page**

 
 
 

**In this section**

 

- [Setup PACS Integration module](/wiki/spaces/BAH/pages/36700254/Setup+PACS+Integration+module)
- [Map PACS procedure codes](/wiki/spaces/BAH/pages/24969224/Map+PACS+procedure+codes)
- [Configure Radiology Data](/wiki/spaces/BAH/pages/114694934/Configure+Radiology+Data)
- [Setup DCM4CHEE Server with Oviyam2](/wiki/spaces/BAH/pages/36077574/Setup+DCM4CHEE+Server+with+Oviyam2)
- [Test PACS Setup with Bahmni PACS Simulator](/wiki/spaces/BAH/pages/23396367/Test+PACS+Setup+with+Bahmni+PACS+Simulator)
- [Setting up sync between Bahmni and DCM4CHEE](/wiki/spaces/BAH/pages/1474232338/Setting+up+sync+between+Bahmni+and+DCM4CHEE)
- [Bahmni PACS Roadmap](/wiki/spaces/BAH/pages/22380584/Bahmni+PACS+Roadmap)

 

**Feature Details**

[Radiology and PACS - Feature Guide](/wiki/spaces/BAH/pages/32604202/Radiology+and+PACS)

**Usage Details**

[Radiology and PACS - User Guide](/wiki/spaces/BAH/pages/32014360/Radiology)

**Related Links**

[(Discussion) Radiology and PACS Integration work as a RIS](https://talk.openmrs.org/t/radiology-and-pacs-integration-work-as-a-ris/5226)

[(Discussion) PACS Integration - PACS to Modality- Work list does not flow to modality](https://talk.openmrs.org/t/pacs-integration-pacs-to-modality-work-list-does-not-flow-to-modality/24821)

[Manual Radiology Upload](/wiki/spaces/BAH/pages/49545424/Manual+Radiology+Upload)
