---
id: "1474232338"
title: "Setting up sync between Bahmni and DCM4CHEE"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1474232338/setting-up-sync-between-bahmni-and-dcm4chee"
version: 4
updated: "2021-02-08T13:32:13.421Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:28.468Z"
---

# Setting up sync between Bahmni and DCM4CHEE

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1474232338)  
> **Versión del documento:** v4 (2021-02-08T13:32:13.421Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

The below-mentioned steps can be followed to set up sync between to Bahmni and Radiology sync.

| Please note that these are sample steps and need to be carefully executed especially if you are in a Production Environment! |
| --- |

## Pre Requisites - PACS - Integration and DCM4CHEE is installed.

## 1) Check if pacs-integration and  dcm4chee service are running

| ``` systemctl status dcm4chee systemctl status pacs-integration # If it is not running then do sudo systemctl start dcm4chee sudo systemctl status pacs-integration ``` |
| --- |

## 2) Check if you are able to connect to both the databases

| ``` psql -Upostgres bahmni_pacs psql -Upostgres pacsdb ``` |
| --- |

## 3) Stop iptables

## *Should be done only in case of local vagrant setup - Not in AWS or production systems.*

| ``` systemctl stop iptables ``` |
| --- |

## 4) Check for the logs for any errors 

In case of any exceptions in the logs the issue needs to be investigated.

| ``` psql -Upostgres bahmni_pacs psql -Upostgres pacsdb ``` |
| --- |

## 5) Make database changes in bahmni_pacs database.

Set up data in tables modality, order_type and markers in the bahmni_pacs postgres database.
Use default AE Title and ports as DCM4CHEE and 2575

| ``` psql -Upostgres bahmni_pacs INSERT into modality VALUES (1, 'DCM4CHEE','DCM4CHEE PACS', ' ', 2575, 3000); INSERT into order_type VALUES(1, 'Radiology Order', 1); ``` |
| --- |

## 6) Openmrs changes

1. Create a new concept source in OpenMRS
To create a new concept source do the following:
In OpenMRS administration UI, click on "Manage Concept Sources" under concepts section.
Click on "Add new Concept Source"
Add a new concept source with name as 'PACS Procedure Code' and hl7 code as 'LOINC'

2. Add Concept mapping for each Radiology concept like X-ray etc
For example, to add a concept mapping for "abdomen ap" test,
Search for "abdomen ap" in concept dictionary and click on Edit.
Scroll down to the "Mappings" and click on "Add Mappings"
Select "ASSOCIATED-WITH" or "SAME-AS" as Relationship
Select "PACS Procedure Code" as Source
Click on "Create New Term"
Enter a code (for ex: 1234, same code has to be setup in modality for 'abdomen ap') and select "PACS Procedure Code" as Source and save.
Now back on the 'Mappings' section in 'Edit Concept screen', search for the added reference term '1234' and save the concept.

Step 2 has to be repeated for all the Radiology order related concepts.

## 7) Setup DCM4CHEE as Modality worklist

Bahmni will send hl7 order messages to dcm4chee. dcm4chee will convert the order messages to worklist items. The items can then be polled by modality or another PACS. 
Update dcm4chee to use orm2dcm_bahmni.xsl instead of default orm2dcm.xsl by going to the jmx console
Go to [http://ip:8055/jmx-console/HtmlAdaptor](http://ip:8055/jmx-console/HtmlAdaptor) → Select service=HL7Service,type=ORM under dcm4chee.archive → rename the **orm2dcm.xsl  into orm2dcm_bahmni.xsl**
 → Set Stylesheet = orm2dcm_bahmni.xsl

## 8) Restart services

RESTART Service dcm4chee
RESTART Service pacs-integration
Check for both the services and logs status

| ``` sudo systemctl restart pacs-integration sudo systemctl restart dcm4chee ``` |
| --- |

## 9) Sanity Check

Create a patient in bahmni —> Add radiology orders —> Save—> Log into Radiology—>Check if the order shows up in the modality list.

## 10) Troubleshooting sync issues

In case the sync is not working, investigate the following tables in bahmni-pacs db and try again. Any error will be logged in the `failed_events` table. 

Logs can be found in the following location

/var/log/pac-integration/pac-integration.log

/var/lib/bahmni/dcm4chee-2.18.1-psql/server/default/log/server.log.

| ``` psql -Upostgres bahmni_pacs delete from markers; Delete from failed_events; ``` |
| --- |

## 12. Incase jmx-console is not accessible

If that is the case ,then the following entry should be made in the /etc/httpd/conf.d/dcm4chee_ssl.conf file. 

| ``` vi /etc/httpd/conf.d/dcm4chee_ssl.conf Add the follwing line --> ProxyPass /jmx-console http:// :8055/jmx-console Save the file Restart the pacs-integration service ``` |
| --- |

**If you still don't find the solution to your problem, please search / post your question on **[**Bahmni OpenMRS Talk**](http://talk.bahmni.org)**.**
