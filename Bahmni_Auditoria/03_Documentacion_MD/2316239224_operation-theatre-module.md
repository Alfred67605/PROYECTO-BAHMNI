---
id: "2316239224"
title: "Operation Theatre - Module"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239224/operation-theatre-module"
version: 3
updated: "2022-11-20T12:21:58.008Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:25.268Z"
---

# Operation Theatre - Module

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239224)  
> **Versión del documento:** v3 (2022-11-20T12:21:58.008Z) | **Autor/Editor:** Gurpreet Luthra

---

### Configuration

incrementalUpdateConfig is applicable ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
{
      "name": "Operation Theater",
      "type": "operationTheater",
      "chunkSizeToRead": "500"
}
```

### Existing OpenMRS tables

```
Surgical_block
Surgical_appointment
Surgical_appointment_attribute
Surgical_appointment_attribute_type
Provider
Person_name
Location
```

###  Flattened Mart Tables

```
surgical_block_default
surgical_appointment_default
surgical_appointment_attributes
surgical_appointment_attribute_type_details_default
```

**Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#6.-Operation-Theater-Job:) section on how to enable/disable incremental config for specific mart tables.

**a)**  **surgical_block_default**

| **Column Name** | **Description** |
| --- | --- |
| surgical_block_id | Identifier for the table |
| primary_provider_name | Name of the Surgeon performing the surgery |
| creator_name | Name of creator for surgical block |
| location_name | Location of the operation theatre |
| block_starttime | Start time for surgery block |
| block_endtime | End time for surgery block |
| date_created | Date of creation for surgical block |
| date_changed | Changed date if modified |
| changed_by | Name of person who changed the surgical block |

**b) surgical_appointment_default**

| **Column Name** | **Description** |
| --- | --- |
| surgical_appointment_id | Table Identifier |
| surgical_block_id | Identifier for surgical block related to this surgery |
| patient_id | Identifier for the patient undergoing surgery |
| sort_weight | Weight will be used to order the appointment |
| status | Status of the surgery |
| actual_start_datetime | Actual Surgery start time |
| actual_end_datetime | Actual time at which surgery ended |
| notes | Notes added after surgery |
| date_created | Date when the surgery appointment was created |
| date_changed | If modified the date of modification of the surgery appointment |
| creator_name | Name of the person who created the surgery appointment |
| changed_by | Name of the person who modified the surgery appointment |

**c) surgical_appointment_attributes**

| **Column Name** | **Description** |
| --- | --- |
| surgical_appointment_id | Identifier for the surgical appointment |
| procedure | Name of the surgical procedure |
| estTimeHours | Estimated time for surgery in hours |
| estTimeMinutes | Estimated time for surgery in minutes extra to the above hours |
| cleaningTime | Time for cleaning after the surgery |
| otherSurgeon | Name of additional surgeon |
| surgicalAssistant | Name of assistant |
| anaesthetist | Name of the doctor who performs anesthesia |
| scrubNurse | Name of scrub nurse for the surgery |
| circulatingNurse | Name of circulating nurse ( nurse from other location ) |
| notes | Notes added after surgery is done |

**d) surgical_appointment_attribute_type_details_default**

| **Column Name** | **Description** |
| --- | --- |
| name | Name of the attributes used in the surgical appointment table |
| description | Description of the attributes used |

### Mart Views

**a) patient_operation_theater_view**

This provides a comprehensive view of operation theatre block details such as creation date, surgeries scheduled, location of the block, surgeon assigned, procedure to be carried out, etc. Since a patient can have multiple surgeries scheduled at different times there can be multiple rows , but of different data for the same patient. Patient details includes age_at_surgery (Age of the patient during surgery) and age_group_at_surgery (Age group of the patient during surgery). The surgical block date corresponds to all the surgeries planned in that block for that day. Whenever a surgery is postponed the block date will give the actual scheduled time of the surgery.
