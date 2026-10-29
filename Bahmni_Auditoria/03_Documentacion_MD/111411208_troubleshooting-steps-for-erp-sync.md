---
id: "111411208"
title: "Troubleshooting steps for ERP sync"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/111411208/troubleshooting-steps-for-erp-sync"
version: 6
updated: "2017-02-21T10:29:01.779Z"
author: "Sravanthi N. S. CH."
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:09.525Z"
---

# Troubleshooting steps for ERP sync

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/111411208)  
> **Versión del documento:** v6 (2017-02-21T10:29:01.779Z) | **Autor/Editor:** Sravanthi N. S. CH.

---

Please note that these are troubleshooting steps and need to be carefully executed especially if you are in a Production Environment!

**

The below mentioned steps can help in debugging issues in OpenMRS to OpenERP/Odoo sync. **Depending on the cause **please try the appropriate suggestions:

## 1) Check if openerp and  bahmni-erp-connect service are running

```
sudo service bahmni-erp-connect status
sudo service openerp status

# If it is not running then do
sudo service openerp start
sudo service bahmni-erp-connect start
```

## 2) Check connection credentials

If bahmni-erp-connect service is already running then we need to check OpenERP username and password below and after updating them to required ones we need to restart bahmni-erp-connect service:

**Path**: /opt/bahmni-erp-connect/bahmni-erp-connect/WEB-INF/classes

**Filename**: atomfeed.properties

openerp.user=admin (default username)

openerp.password=password (default password)

```
sudo service bahmni-erp-connect restart
```

## 3) Check markers table of *openerp* database

```
# Connect to pgsql client
psql -Uopenerp

# See table contents
select * from markers;

# Check if there are any failed events
select * from failed_events;
```

Verify if columns “last_read_entry_id” and “feed_uri_for_last_read_entry” have the correct entries for corresponding feed_uri.

Postman extension in chrome can you be used to check for the latest atomfeeds or specific atomfeeds.

Need to analyse the entries in failed_events table by reading the contents in “error_message” column in failed_events table and proceed accordingly.

Please refer [Atom Feed Based Synchronization in Bahmni](/wiki/spaces/BAH/pages/3506200/Atom+Feed+Based+Synchronization+in+Bahmni)  for Details on Atom Feed Based Sync.

## 4) Check Shop Mapping in OpenERP

 In OpenERP software check if: Sales --> Configuration --> Order Type Shop – Shop Mapping:

**Order Type** : Drug Order

**Shop** : Implementation Specific Shop name

**Local Shop** : Keep it blank

**Location Name** : Keep it blank.

Restart openerp service: ***sudo service openerp restart***

## 5) Check Units to Be Synced in OpenERP

In OpenERP software check if: Sales --> Configuration --> Units to be Synced:

- Should have all the Drug Units added whatever is present in Bahmni with the exact names.

e.g : Capsule(s), Tablet(s)

**If you still don't find the solution to your problem, please search / post your question on [Bahmni OpenMRS Talk](http://talk.bahmni.org)****.**

Related Pages**

[Atom Feed Synchronization in Bahmni](/wiki/spaces/BAH/pages/3506200/Atom+Feed+Based+Synchronization+in+Bahmni)

**On this page**
