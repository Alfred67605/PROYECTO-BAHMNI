---
id: "3506200"
title: "Atom Feed Based Synchronization in Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3506200/atom-feed-based-synchronization-in-bahmni"
version: 20
updated: "2023-12-06T04:47:52.731Z"
author: "Gurpreet Luthra"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:25.614Z"
---

# Atom Feed Based Synchronization in Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3506200)  
> **Versión del documento:** v20 (2023-12-06T04:47:52.731Z) | **Autor/Editor:** Gurpreet Luthra

---

## Introduction to Atom Feed Based Synchronization

**

Video Overview - AtomFeed Sync
 
YouTube Video giving an overview of Atom Feed sync mechanism of Bahmni: [ATOM Feed Integration in Bahmni (Online session)](/wiki/spaces/BAH/pages/37945615/ATOM+Feed+Integration+in+Bahmni+Online+session)

Bahmni uses ATOM Feed synchronization (event notification over REST APIs) to allow services to pull for changes occurring in Bahmni. The Bahmni EMR (OpenMRS) publishes various event feeds, like Patient, Encounter, Lab, Drug feeds, and the other systems subscribe to these event feeds, to be notified of changes. Based on the "notification", the downstream consuming systems make a REST API call to OpenMRS, to pull relevant data. Typically a *sync service* is written for each consumer, that listens to these events, constructs the relevant data packets, and then pushes to downstream system (like ELIS, ERP, etc).

Different Components like OpenMRS, OpenERP and OpenELIS are kept in Sync using the "Atom Feed Based Synchronization".  The following is the depiction:

![](https://bahmni.atlassian.net/wiki/download/attachments/3506200/AtomFeedSynchronization.jpg?version=1&modificationDate=1418713309980&cacheVersion=1&api=v2)

Lets take an example of **Drug** creation in bahmni.  The following are the sequence of events:

- Administrators create Drugs using OpenMRS or using the "CSV Upload" feature on Bahmni's Admin module
- Once the drug is created, an event is published (in the Drug Feed)
- The "OpenERP atom feed service" contains batch jobs that are scheduled to consume these atom feed events.
- The job then creates an event in OpenERP (or Odoo).

## Various Feeds Published in Bahmni

|  | Feed Name | URL | Description |
| --- | --- | --- | --- |
| 1 | OpenMRS Patient Feed | Recent Events: [https://demo.mybahmni.org/openmrs/ws/atomfeed/patient/recent](https://demo.mybahmni.org/openmrs/ws/atomfeed/patient/recent) Page1 Events: [https://demo.mybahmni.org/openmrs/ws/atomfeed/patient/1](https://demo.mybahmni.org/openmrs/ws/atomfeed/patient/1) | Click on "View Source" to see the actual XML feed |
| 2 | OpenMRS Encounter Feed | https://demo.mybahmni.org/openmrs/ws/atomfeed/encounter/recent | Encounters between Provider and Patients (along with data logged in those encounters) |
| 3 | OpenMRS Lab Events | [https://demo.mybahmni.org/openmrs/ws/atomfeed/lab/recent](https://demo.mybahmni.org/openmrs/ws/atomfeed/lab/recent) |  |
| 4 | OpenMRS Drug Events | [https://demo.mybahmni.org/openmrs/ws/atomfeed/drug/recent](https://demo.mybahmni.org/openmrs/ws/atomfeed/lab/recent) |  |

** See this sample configuration file for various feeds (in OpenERP Sync Service)**: [erp-atomfeed.properties](https://github.com/Bahmni/openerp-atomfeed-service/blob/master/openerp-atomfeed-service/src/main/resources/erp-atomfeed.properties#L24)

## Reference Code in Bahmni for Various Atom Feed Sync Services

|  | Data Flow | Entities being sent | Code Repo | Code Link |
| --- | --- | --- | --- | --- |
| 1 | OpenMRS (EMR) → OpenELIS (Lab) | Patient, Tests/Panels, Lab Orders | [OpenELIS](https://github.com/Bahmni/OpenElis/tree/master/openelis/src/org/bahmni/feed/openelis) | [LabFeedEventWorker.java](https://github.com/Bahmni/OpenElis/blob/master/openelis/src/org/bahmni/feed/openelis/feed/event/LabFeedEventWorker.java) |
| 2 | OpenELIS (Lab) → OpenMRS (EMR) | Test Results | [bahmni-core](https://github.com/Bahmni/bahmni-core/tree/master) | [OpenElisAccessionEventWorker.java](https://github.com/Bahmni/bahmni-core/blob/master/openmrs-elis-atomfeed-client-omod/src/main/java/org/bahmni/module/elisatomfeedclient/api/worker/OpenElisAccessionEventWorker.java#L90C20-L90C20) |
| 3 | OpenMRS (EMR) → Odoo (ERP) | Patient, Drugs, Tests/Panels, Drug Orders, Lab Orders, Service Orders | [openerp-atomfeed-service](https://github.com/Bahmni/openerp-atomfeed-service) |  |
| 4 | OpenMRS (EMR) → DCM4chee (Radiology) | Patient, Radiology Orders | [pacs-integration](https://github.com/Bahmni/pacs-integration/tree/master) | [PACSIntegrationService.java](https://github.com/Bahmni/pacs-integration/blob/master/pacs-integration-webapp/src/main/java/org/bahmni/module/pacsintegration/services/PacsIntegrationService.java) (Atomfeed + HL7) |
| 5 | Sample Code Repo to write your own integration |  | [bahmni-feed-integration-example](https://github.com/Bahmni/bahmni-feed-integration-example) | [PatientFeedJob.java](https://github.com/Bahmni/bahmni-feed-integration-example/blob/main/feed-integration-webapp/src/main/java/org/bahmni/module/feedintegration/atomfeed/jobs/PatientFeedJob.java) |

## Underlying ATOM Feed Libraries

Bahmni uses an Atom Feed based framework created by ThoughtWorks ICT4H team for data synchronization between OpenMRS, OpenELIS and OpenERP (in fact also with Reference Data app). For more information on the underlying atomfeed implementation please refer to: 

- [http://github.com/ict4h/atomfeed](http://github.com/ict4h/atomfeed)
- [https://github.com/ICT4H/simplefeed](https://github.com/ICT4H/simplefeed)

## Underlying Database Tables for Atom Feed Synchronization Book-Keeping

The tables used behind the scene in Atom Feed are:

| Table Name | Used in Mode | Description |
| --- | --- | --- |
| event_records | PUBLISHER | This tables holds the list of events which are to be published by Atom Feed for others to consume. The category column is used to indicate the event types (like patient, encounter, etc). Note: For the same patient updates there might be multiple rows. So to see unique rows: "select distinct object from event_records where category = 'patient';" |
| markers | CONSUMER | This table holds marker entries to indicate the records which have ALREADY been processed. |
| event_records_offset_marker | CONSUMER | This table holds cached records for faster event process by the CONSUMER. |
| failed_events | CONSUMER | This table holds the list of events which failed and could not be consumed. They are retried later by a different event handler. |
|  |  |  |

**Note:** The **PUBLISH** mode is when the system is publishing its events on an Atom Feed. The **CONSUME** mode is when the system is **reading** events from another system and writing/updating its own data based on consumed events. OpenMRS, OpenELIS, Odoo – all act as Publisher and Consumer depending on the scenario. For instance, when a Patient is created in Bahmni(OpenMRS), then Bahmni is PUBLISHER and ELIS/Odoo are CONSUMERS. When a Lab result is entered in ELIS, then ELIS is PUBLISHER and Bahmni/OpenMRS is CONSUMER of results. Therefore, these 4 tables will exist in each sub-system that acts as Atom Feed publisher & consumer.

## AtomFeed Console Viewer

Atom Feed Console Viewer
 
In version **v0.86** of Bahmni an Atom Feed viewer has been released with Bahmni which can allow you to see Failed events in Bahmni. It can be accessed at url: **http://<ip>/atomfeed-console**. For instance here is the online demo url for atomfeed console: [https://demo.mybahmni.org/atomfeed-console](https://demo.mybahmni.org/atomfeed-console). The Github project for Atom Feed console is: [https://github.com/ict4h/atomfeed-console](https://github.com/ict4h/atomfeed-console)

On this page**

 
 
 

**Related Links**

[Simplefeed Protocol](https://github.com/ict4h/simplefeed)

[Explanation of Atom Feed Integration Design](https://sharedhealth.atlassian.net/wiki/display/docs/Atom+Feed)

[AtomFeed Overview Notes (OpenMRS meeting)](https://notes.openmrs.org/p/atom-feed-sync-jan-19-2016)

[Discussion about ERP and OpenELIS Integration](https://talk.openmrs.org/t/bahmni-openelis-integration/3846/9)

[Video session on ATOM Feed integration](/wiki/spaces/BAH/pages/37945615/ATOM+Feed+Integration+in+Bahmni+Online+session)

[OpenERP Atomfeed schedulers](/wiki/spaces/BAH/pages/5570585/Advanced+AtomFeed+Configuration)

[ATOM Feed Configuration settings in Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/5570585/Advanced+AtomFeed+Configuration)
