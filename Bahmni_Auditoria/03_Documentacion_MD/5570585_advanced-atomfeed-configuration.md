---
id: "5570585"
title: "Advanced AtomFeed Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/5570585/advanced-atomfeed-configuration"
version: 7
updated: "2021-09-07T09:38:14.175Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:49.063Z"
---

# Advanced AtomFeed Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/5570585)  
> **Versión del documento:** v7 (2021-09-07T09:38:14.175Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

To further configure AtomFeed to suit the needs of your implementation please refer to the config below.

To use Bahmni's inbuilt AtomFeed Console refer to [this page](/wiki/spaces/BAH/pages/74154021/Configure+Atomfeed+Console+App).
 
See sample AtomFeed configuration on Demo server: [https://demo.mybahmni.org/openmrs/admin/maintenance/settings.list?show=Atomfeed](https://demo.mybahmni.org/openmrs/admin/maintenance/settings.list?show=Atomfeed) 

**

## OpenMRS Atom Feed Configuration

### Configuring Relationship Events

- 
Set **atomfeed.publish.eventsForPatientRelationshipChange** true in OpenMRS global properties to raise events related to person relationship changes

- 
Use **atomfeed.event.urlPatternForPatientRelationshipChange**  OpenMRS global property to configure the object values for the raised events. The default is **/openmrs/ws/rest/v1/relationship/%s**, where **%s** represents the relationship uuid.

### Configuring Program Events

- 
Set **atomfeed.publish.eventsForPatientProgramStateChange** true in OpenMRS global properties to raise events related to person program changes

- 
Use **atomfeed.event.urlPatternForProgramStateChange**  OpenMRS global property to configure the object values for the raised events. The default is **/openmrs/ws/rest/v1/programenrollment/{uuid}?v=full **where **{uuid}** represents the patientprogram uuid.

## OpenERP Atom Feed Configuration

OpenERP Atom Feeds uses the default implementation specified in the Spring configuration files. 

If the implementor wishes to override the default configurations, then they can add entries for the job in '*quartz_cron_scheduler*' table in OpenERP database. The jobs that can be configured are as follows:

- customerFeedJobTrigger
- customerFeedfailedJobTrigger
- saleOrderFeedJobTrigger
- saleOrderFeedFailedJobTrigger
- openelisSaleOrderFeedJobTrigger
- openelisSaleOrderFeedFailedJobTrigger
- eventRecordsNumberOffsetMarkerTrigger
- referenceDataFeedJobTrigger
- referenceDataFeedFailedJobTrigger
- openerpDrugFeedQuartzJobTrigger
- openerpDrugFeedQuartzJobFailedTrigger

## Sample Configuration

Sample SQL to add a job configuration is:

```
insert into quartz_cron_scheduler (name, cron_statement, start_delay, enabled) values ('customerFeedJobTrigger','0/15 * * * * ?', 10000,true);
```

| Field | Value |
| --- | --- |
| *name* | The name of the job from the list above |
| *cron_statement* | Corresponds to quartz cron expression |
| *start_delay* | Time(in ms) after which the job needs to be triggered (after starting the web app) |
| *enabled* | Check to enable or disable a particular job |

Related Links**

[Atomfeed Console App](/wiki/spaces/BAH/pages/74154021/Configure+Atomfeed+Console+App)
