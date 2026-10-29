---
id: "36700254"
title: "Setup PACS Integration module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36700254/setup-pacs-integration-module"
version: 31
updated: "2021-04-04T08:13:22.453Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:24.866Z"
---

# Setup PACS Integration module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36700254)  
> **Versión del documento:** v31 (2021-04-04T08:13:22.453Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

## Purpose and Benefits

Bahmni pacs-integration is Bahmni's Radiology System that can send Radiology Orders to digital X-Ray machines and in turn receive X-Ray images that can be viewed in Bahmni. This is the first step in the process, namely setting up the PACS Integration Webapp module to create a Radiology order and send it to the digital X-Ray machines (Modality).

Note
 
For testing the PACS-integration setup, use the [Test PACS Setup with Bahmni PACS Simulator](/wiki/spaces/BAH/pages/23396367/Test+PACS+Setup+with+Bahmni+PACS+Simulator). We have developed this to ensure easy testing as it is not always feasible to test with the Client's machine. This Simulator takes the orders and uploads a sample X-Ray to DCM4CHEE.

## Steps

Note
 
To order a Radiology X-Ray, all the X-Rays should be displayed in the Orders Tab of Bahmni Consultation under a separate Radiology Orders section as Lab Orders. First ensure that the [Radiology Order Section is setup](/wiki/spaces/BAH/pages/32014568/Configure+Orders+Tab+for+Lab+and+Radiology) prior to setting up PACS integration.

Ensure that pacs-integration service is installed. The steps for installation is mentioned in [Install Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/33128505/Install+Bahmni+on+CentOS#InstallBahmnionCentOS-Installingdcm4chee&pacs-integrationserverforRadiology) guide.

If the service is installed it will create a database schema called bahmni_pacs in postgres. Following data setup needs to be done to have the pacs-integration working so that it picks up radiology orders and converts them into HL7 ORM messages to be sent further to a PACS or a modality.

### Data Setup

 Set up data in tables ***modality***, ***order_type*** and ***markers*** in the ***bahmni_pacs*** postgres database.

- *modality* table should have the details of HL7 server listening to ORM message - IP address, port, AE Title.**If you are using dcm4chee as the modality worklist server the default values pertaining to dcm4chee will have to be added. The default AE Title and ports are ***DCM4CHEE*** and ***2575***

Sample entry when sending orders to dcm4chee**

```
INSERT into modality VALUES (1, 'DCM4CHEE','DCM4CHEE PACS', '192.168.33.10', 2575, 3000);
```

**
***
***

- 
*In order_type* table, order_type name should be the same as order_type  in the OpenMRS database. The modality id from *modality* table is used to send the particular order type orders to the given modality.
Sample order_type entry for sending Radiology orders**

```
insert into order_type values(1, 'Radiology Order', 1);
```

- 
*markers* table should be set with the latest markers and feed details to avoid it reading from the start. A sample query for the same would look like

```
insert into markers (feed_uri,last_read_entry_id, feed_uri_for_last_read_entry) values ('http://localhost:8050/openmrs/ws/atomfeed/encounter/recent', 'tag:atomfeed.ict4h.org:889f9b69-83f5-4ee8-8f4c-e65df761b423','http://localhost:8050/openmrs/ws/atomfeed/encounter/59593');
```

 
Please enter the right values for  *last_read_entry_id* and* feed_uri_for_last_read_entry*. 

Set up Procedure Codes for mapping the Bahmni X-Rays to Digital X-Ray Machine's X-Rays

- Follow steps on page [Mapping Procedure Codes](/wiki/spaces/BAH/pages/24969224/Map+PACS+procedure+codes).
- In case you need to set up PACS in your local machine, Please follow the [PACS-DCM4CHEE Sync instructions.](/wiki/spaces/BAH/pages/1474232338/Setting+up+sync+between+Bahmni+and+DCM4CHEE)

**

On this Page

 
 
 
Feature Details**

[Radiology and PACS - Feature Guide](/wiki/spaces/BAH/pages/32604202/Radiology+and+PACS)

**Usage Details**

[Radiology and PACS - User Guide](/wiki/spaces/BAH/pages/32014360/Radiology)
