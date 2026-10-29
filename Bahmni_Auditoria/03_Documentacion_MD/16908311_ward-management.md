---
id: "16908311"
title: "Ward Management"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/16908311/ward-management"
version: 17
updated: "2018-07-04T12:40:55.589Z"
author: "swathi varkala"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:32.009Z"
---

# Ward Management

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/16908311)  
> **Versión del documento:** v17 (2018-07-04T12:40:55.589Z) | **Autor/Editor:** swathi varkala

---

## Purpose and Benefits

Ward management is part of the In-Patient Module and is used to set wards and bed location.

Bahmni expects that the wards setup in a 2 level hierarchy. i.e Beds are mapped to a Room/Sub ward which is a child location of a parent ward.

Example for valid Bahmni Wards setup is as below.

![](https://bahmni.atlassian.net/wiki/download/attachments/16908311/Bahmni%20Wards%20Bed%20hierarchy.png?version=1&modificationDate=1530707773113&cacheVersion=1&api=v2)

## Configuration

### Setup Variables

Setup variables that have to be used for Ward Management

```
SET @parent_location_id = (select location_id from location where name='General Ward');
SET @location_id = (select location_id from location where name='Physical General Ward');
SET @location_tag_id = (select location_tag_id from location_tag where name='Admission Location');
```

### Setup wards

```
insert into location (name, description, creator, retired, date_created, uuid) values('General Ward', 'General Ward', 1, 0, NOW(), UUID());
insert into location (name, description, creator, retired, date_created, uuid, parent_location) values('Physical General Ward', '1st Floor of General Ward', 1, 0, NOW(), UUID(), @parent_location_id);
insert into location_tag_map values( @parent_location_id , @location_tag_id);
insert into location_tag_map values( @location_id , @location_tag_id);
```

**

### Add Bed Types

```
insert into bed_type values(1, 'deluxe', 'deluxe bed', 'DLX');
```

### Add Beds

```
insert into bed (bed_id, bed_number, status, bed_type_id, uuid, creator, date_created, voided) values(1, '304-a', 'AVAILABLE', 1, UUID(), 1, NOW(), false);
```

### Map beds to ward list

```
insert into bed_location_map(bed_location_map_id, location_id, row_number, column_number, bed_id) values(1, @location_id, 1, 1, 1);
```

### Sample Bed Management SQL file

This [sample bed management sql](https://bahmni.atlassian.net/wiki/download/attachments/16908311/bed_management_locations.sql?version=1&modificationDate=1425892912871&cacheVersion=1&api=v2) file adds Bed types and Beds and maps beds to ward list. One can change the sql file as per their need and import it to openmrs database.

```
mysql -uroot -ppassword openmrs 

On this Page

 
 
 
Related Links**

[In-Patient Management Module](/wiki/spaces/BAH/pages/32014606/In-Patient+Management+Module)

[Admit, Discharge and Transfer Patients](/wiki/spaces/BAH/pages/114923665/Admit+Discharge+and+Transfer+Patients)

**Feature Details**

[In-Patient Management (IPD) - Feature Guide](/wiki/spaces/BAH/pages/32604214/In-Patient+Management+IPD)

**Usage Details**

[In-Patient Management (IPD) - User Guide](/wiki/spaces/BAH/pages/32014373/In-Patient+Management)
