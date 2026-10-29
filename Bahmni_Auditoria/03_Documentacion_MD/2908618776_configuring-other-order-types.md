---
id: "2908618776"
title: "Configuring other order types"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2908618776/configuring-other-order-types"
version: 6
updated: "2024-07-18T16:11:01.015Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:16.372Z"
---

# Configuring other order types

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2908618776)  
> **Versión del documento:** v6 (2024-07-18T16:11:01.015Z) | **Autor/Editor:** Mohankumar Thangavel

---

## Purpose and Benefits
 
This feature was introduced in Bahmni V0.93

**

The Order Tab allows the user to define any products or services to be ordered for the patient.

For example, if you would want to have “Counseling” as order type displayed on “orders” tab of consultation, it may look something like below

![](https://bahmni.atlassian.net/wiki/download/attachments/2908618776/Screenshot%202021-09-29%20at%204.28.17%20PM.png?version=1&modificationDate=1632918135249&cacheVersion=1&api=v2)

**Order Placement tab**

## Master Data Setup

- 
Setup an order type. Example - “Counseling service”

```
insert into order_type (name, description, creator, date_created, retired, uuid, java_class_name) values('Counseling service', 'Counseling service to patients', 1, now(), 0, uuid(), 'org.openmrs.Order');
```

- 
Map the above “order type” to a concept class specifically for “Counseling service”. You can create a “concept class” from OpenMRS administration if a suitable one does not exist.

```
//Use this query to find appropriate concept class
select * from concept_class;

//Now fire the insert statement to create a mapping to appropriate concept class.
insert into order_type_class_map (order_type_id, concept_class_id) values(, );

```

- In OpenMRS concept dictionary, setup a concept set for grouping ‘Counseling’ services under “All orderables”

```
All Orderables
- Other Services
 --Counseling
   ---Family Planning
   ---Mental Health   
```

While defining “Family Planning” Concept, please mark the “saleable” attribute to “true” and ensure that class chosen is what you have mapped to the order type above.

![](https://bahmni.atlassian.net/wiki/download/attachments/2908618776/Screenshot%202021-09-29%20at%205.07.18%20PM.png?version=1&modificationDate=1632918487200&cacheVersion=1&api=v2)

Bulk Update Script
 
A script has been developed to bulk update the `saleable` attribute to true by reading the concept UUIDs from a CSV file. Refer [bahmni-scripts/metadatScripts/openmrs/set_saleable_attribute.sh](https://github.com/Bahmni/bahmni-scripts/tree/master/metadataScripts) script for more details.

- Setup “Order type” and “Shop mapping” in Odoo.

           Please follow instructions in the [Odoo sales configuration](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration).

 
**On This Page:**

 
 
 
Feature Details**

[Laboratory and Radiology Tab - Feature Guide](/wiki/spaces/BAH/pages/40501372/Ordering+Laboratory+and+Radiology+Tests)

**See Also**

[Odoo Sales Configuration](/wiki/spaces/BAH/pages/900464675/Odoo+Sales+Configuration)
