---
id: "2318893479"
title: "Incremental Update"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893479/incremental-update"
version: 1
updated: "2021-04-05T08:53:55.479Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:33.564Z"
---

# Incremental Update

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893479)  
> **Versión del documento:** v1 (2021-04-05T08:53:55.479Z) | **Autor/Editor:** Bavisetti Venkatesh

---

Bahmni-mart supports incremental update during data flattening.This can be easily  enabled by adding incremental update config in **/var/www/bahmni_config/bahmni-mart/bahmni-mart.json** for few specific jobs. Not all of them come under this category. Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#Enable/Disbale-Incremental-Config-for-Specific-Jobs:) section for more details.
 
**Note**: Due to some technical differences in Bahmni, incremental update config is not suggested for bacteriology job. Find more details in [openmrs-talk](https://talk.openmrs.org/t/no-events-for-bacteriology-micro-biology-obs-when-edited-from-display-controls/27434)

Check[here](https://github.com/bahmni-msf/bahmni-mart/blob/master/src/main/resources/groupedJobs/person.json#L14-L24) for example.

| **Key Name** | **Description** | **Default Value** | **Required** |
| --- | --- | --- | --- |
| updateOn | Column name in the analytics database depends on which incremental update should work | N/A | yes |
| eventCategory | Category name present in event_records table (openmrs database) | N/A | yes |
| openmrsTableName | Table name in OpenMRS for given eventCategory | N/A | yes |

## Enable/Disbale Incremental Config for Specific Jobs:
The below jobs have incremental config enabled by default. So every time we do the bahmni-mart load, the tables specific to the job run on incremental load. If somebody wants to run any of the job specific tables on full load with every bahmni-mart load, we can remove the `incrementalUpdateConfig` section under that table from the specific job json file.

- 
Person

- 
Patients

- 
Programs

- 
Appointments

- 
Bed Management

- 
Operation Theater

- 
Visits and Encounters

- 
Medication And Orders 

- 
Diagnoses And Conditions

- 
Provider

But this is not a simple configuration change that we can do in the bahmni-mart.json file directly in the bahmni instance. Changing the configuration in the job specific json file would require building the bahmni-mart rpm and deploying the same on bahmni instance.

### 1. Person Job:

#### Flattened Mart Tables

```
person_details_default 
person_address_default
person_attribute_info_default
address_hierarchy_level_default
```

Both `person_details_default` and `person_address_default`mart tables have `incrementalUpdateConfig` enabled by default. And the rest of the tables run on full load. 

**person.json:**

```
{
  "jobs": [
    {
      "name": "Person details",
      "type": "customSql",
      "readerSql": "SELECT p.person_id, pn.person_name_id, pn.preferred, pn.prefix, pn.given_name, pn.middle_name, pn.family_name_prefix, pn.family_name, pn.family_name2, pn.family_name_suffix, p.gender, p.birthdate, EXTRACT(YEAR FROM p.birthdate) AS birthyear, p.birthtime, p.birthdate_estimated, FORMAT((DATEDIFF(CURRENT_DATE, p.birthdate) / 365), 0) AS age, CASE WHEN ROUND(DATEDIFF(CURRENT_DATE(), p.birthdate) / 365, 0) = '65' THEN '65+' END AS age_group, p.dead, p.death_date, p.deathdate_estimated, p.cause_of_death FROM person p INNER JOIN person_name pn ON p.person_id = pn.person_id AND p.voided = FALSE AND pn.voided = FALSE",
      "tableName": "person_details_default",
      "incrementalUpdateConfig": {
        "updateOn": "person_id",
        "eventCategory": "patient",
        "openmrsTableName": "person"
      }
    },
    {
      "name": "Person address",
      "type": "customSql",
      "readerSql": "SELECT person_id, preferred, address1, address2, address3, address4, address5, address6, address7, address8, address9, address10, address11, address12, address13, address14, address15, city_village, state_province, postal_code, country, county_district, latitude, longitude, start_date, end_date FROM person_address WHERE voided = FALSE",
      "tableName": "person_address_default",
      "incrementalUpdateConfig": {
        "updateOn": "person_id",
        "eventCategory": "patient",
        "openmrsTableName": "person"
      }
    },
    {
      "name": "Person Attribute Info",
      "type": "customSql",
      "readerSql": "SELECT person_attribute_type_id, name, description FROM person_attribute_type",
      "tableName": "person_attribute_info_default"
    },
    {
      "name": "Address hierarchy levels",
      "type": "customSql",
      "readerSql": "SELECT address_hierarchy_level_id, name, parent_level_id, address_field FROM address_hierarchy_level",
      "tableName": "address_hierarchy_level_default"
    }
  ]
}
```

### 2. Patients Job:

#### Flattened Mart Tables

```
patient_state_default
patient_allergy_status_default
patient_identifier
```

All the patient mart tables have `incrementalUpdateConfig` enabled by default. 

**patients.json:**

```
{
  "jobs": [
    {
      "name": "Patient State",
      "type": "customSql",
      "readerSql": "SELECT ps.patient_state_id, ps.patient_program_id, p.patient_id, pp.program_id, pr.name AS program_name, ps.state, cv.concept_full_name AS state_name, ps.start_date, ps.end_date, ps.creator AS creator_id, pn.creator_name, ps.date_created, ps.date_changed, ps.changed_by AS changed_by_id, pn2.changed_by_name FROM patient p INNER JOIN patient_program pp ON pp.patient_id = p.patient_id AND p.voided = FALSE AND pp.voided = FALSE INNER JOIN program pr ON pr.program_id = pp.program_id AND pr.retired = FALSE INNER JOIN patient_state ps ON ps.patient_program_id = pp.patient_program_id AND ps.voided = FALSE LEFT JOIN (SELECT concat_ws(' ', ifnull(n.given_name, ''), ifnull(n.family_name, '')) AS creator_name, users.user_id FROM users INNER JOIN person_name n ON users.person_id = n.person_id AND n.voided = FALSE) pn ON pn.user_id = ps.creator LEFT OUTER JOIN (SELECT concat_ws(' ', ifnull(n.given_name, ''), ifnull(n.family_name, '')) AS changed_by_name, users.user_id FROM users INNER JOIN person_name n ON users.person_id = n.person_id AND n.voided = FALSE) pn2 ON pn2.user_id = ps.changed_by INNER JOIN program_workflow_state pws ON pws.program_workflow_state_id = ps.state AND ps.voided = FALSE AND pws.retired = FALSE LEFT OUTER JOIN concept_view cv ON cv.concept_id = pws.concept_id AND cv.retired = FALSE",
      "tableName": "patient_state_default",
      "incrementalUpdateConfig": {
        "updateOn": "patient_program_id",
        "eventCategory": "programenrollment",
        "openmrsTableName": "patient_program"
      }
    },
    {
      "name": "Patient allergy status",
      "type": "customSql",
      "readerSql": "SELECT patient_id, allergy_status FROM patient WHERE voided = FALSE",
      "tableName": "patient_allergy_status_default",
      "incrementalUpdateConfig": {
        "updateOn": "patient_id",
        "eventCategory": "patient",
        "openmrsTableName": "person"
      }
    },
    {
      "name": "Patient identification",
      "type": "eav",
      "tableName": "patient_identifier",
      "eavAttributes": {
        "attributeTypeTableName": "patient_identifier_type",
        "attributeTableName": "patient_identifier",
        "valueTableJoiningId": "identifier_type",
        "typeTableJoiningId": "patient_identifier_type_id",
        "valueColumnName": "identifier",
        "primaryKey": "patient_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "patient_id",
        "eventCategory": "patient",
        "openmrsTableName": "person"
      }
    }
  ]
}
```

### 3. Programs Job:

#### Flattened Mart Tables

```
programs_default
program_outcomes_default
patient_program_data_default
program_workflow_default
program_workflow_states_default
program_attributes
```

Both `patient_program_data_default` and `program_attributes` tables have `incrementalUpdateConfig` enabled by default. And the rest of the mart tables run on full load. 

**Programs.json:**

```
{
  "jobs": [
    {
      "name": "Program data",
      "type": "customSql",
      "readerSql": "SELECT program_id, name AS program_name, description AS program_description, creator AS creator_id, creator_details.username AS creator_name, date_created, date_changed, changed_by AS changed_by_id, changer_details.username AS changed_by_name FROM program p INNER JOIN (SELECT user_id, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS username FROM users u INNER JOIN person_name pn ON u.person_id = pn.person_id AND u.retired = FALSE AND pn.voided = FALSE) creator_details ON creator_details.user_id = p.creator LEFT OUTER JOIN (SELECT user_id, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS username FROM users u INNER JOIN person_name pn ON u.person_id = pn.person_id AND u.retired = FALSE AND pn.voided = FALSE) changer_details ON changer_details.user_id = p.changed_by WHERE retired = FALSE",
      "tableName": "programs_default"
    },
    {
      "name": "Program outcomes",
      "type": "customSql",
      "readerSql": "SELECT p.program_id, p.name AS `program_name`, cv.concept_full_name AS `program_outcome` FROM program p INNER JOIN concept c ON c.concept_id = p.outcomes_concept_id AND c.retired = FALSE AND p.retired = FALSE INNER JOIN concept_set cs ON cs.concept_set = c.concept_id LEFT OUTER JOIN concept_view cv ON cv.concept_id = cs.concept_id AND cv.retired = FALSE",
      "tableName": "program_outcomes_default"
    },
    {
      "name": "Patient program data",
      "type": "customSql",
      "readerSql": "SELECT pp.patient_id, pp.program_id, pp.patient_program_id, pp.date_enrolled, FORMAT((DATEDIFF(pp.date_enrolled, p.birthdate) / 365), 0) AS age_during_enrollment, pp.date_completed, FORMAT((DATEDIFF(pp.date_completed, p.birthdate) / 365), 0) AS age_during_completion, pp.location_id, l.name AS location_name, cn_outcome.concept_full_name AS program_outcome, pp.creator AS creator_id, creator_details.name AS creator_name, pp.date_created, pp.date_changed, pp.changed_by AS changed_by_id, changer_details.name AS changed_by_name, pp.voided FROM patient_program pp INNER JOIN person p ON p.person_id = pp.patient_id INNER JOIN (SELECT users.user_id, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS name FROM users INNER JOIN person_name pn ON users.person_id = pn.person_id) creator_details ON creator_details.user_id = pp.creator LEFT OUTER JOIN (SELECT users.user_id, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS name FROM users INNER JOIN person_name pn ON users.person_id = pn.person_id) changer_details ON changer_details.user_id = pp.changed_by LEFT OUTER JOIN concept_view cn_outcome ON cn_outcome.concept_id = pp.outcome_concept_id AND cn_outcome.retired = FALSE LEFT OUTER JOIN location l ON l.location_id = pp.location_id AND l.retired = FALSE",
      "tableName": "patient_program_data_default",
      "incrementalUpdateConfig": {
        "updateOn": "patient_program_id",
        "eventCategory": "programenrollment",
        "openmrsTableName": "patient_program"
      }
    },
    {
      "name": "Program Workflow",
      "type": "customSql",
      "readerSql": "SELECT pw.program_id, pw.program_workflow_id, cv.concept_full_name AS program_workflow_name FROM program_workflow pw INNER JOIN concept_view cv ON cv.concept_id = pw.concept_id AND cv.retired = FALSE AND pw.retired = FALSE",
      "tableName": "program_workflow_default"
    },
    {
      "name": "Program Workflow States",
      "type": "customSql",
      "readerSql": "SELECT pws.program_workflow_state_id, pws.program_workflow_id, pwscv.concept_full_name AS state_name, pwcv.concept_full_name AS program_workflow_name, pws.initial, pws.terminal, pws.creator AS creator_id, pn.creator_name, pws.date_created, pws.date_changed, pws.changed_by AS changed_by_id, pn2.changed_by_name FROM program_workflow_state pws INNER JOIN program_workflow pw ON pw.program_workflow_id = pws.program_workflow_id AND pws.retired = FALSE AND pw.retired = FALSE LEFT JOIN (SELECT concat_ws(' ', ifnull(n.given_name, ''), ifnull(n.family_name, '')) AS creator_name, users.user_id FROM users INNER JOIN person_name n ON users.person_id = n.person_id AND n.voided = FALSE) pn ON pn.user_id = pws.creator LEFT OUTER JOIN (SELECT concat_ws(' ', ifnull(n.given_name, ''), ifnull(n.family_name, '')) AS changed_by_name, users.user_id FROM users INNER JOIN person_name n ON users.person_id = n.person_id AND n.voided = FALSE) pn2 ON pn2.user_id = pws.changed_by LEFT JOIN concept_view pwcv ON pwcv.concept_id = pw.concept_id AND pwcv.retired = FALSE LEFT JOIN concept_view pwscv ON pwscv.concept_id = pws.concept_id AND pwscv.retired = FALSE",
      "tableName": "program_workflow_states_default"
    },
    {
      "name": "Program Attributes",
      "type": "eav",
      "tableName": "program_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "program_attribute_type",
        "attributeTableName": "patient_program_attribute",
        "valueTableJoiningId": "attribute_type_id",
        "typeTableJoiningId": "program_attribute_type_id",
        "valueColumnName": "value_reference",
        "primaryKey": "patient_program_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "patient_program_id",
        "eventCategory": "programenrollment",
        "openmrsTableName": "patient_program"
      }
    }
  ]
}

```

### 4. Appointments Job:

#### Flattened Mart Tables

##### Note : The below Mart tables are created by customSql job type.

```
patient_appointment_default
appointment_service_default
appointment_speciality_default
service_availability_default
```

`patient_appointment_default` , `appointment_service_default` and `service_availability_default` tables have `incrementalUpdateConfig` enabled by default. And `appointment_speciality_default` table run on full load. 

**appointments.json:**

```
{
  "jobs": [
    {
      "name": "Patient appointment",
      "type": "customSql",
      "readerSql": "SELECT pa.patient_id, pa.patient_appointment_id AS `appointment_id`, prov.provider_name AS `appointment_provider`, pa.start_date_time AS `appointment_start_time`, pa.end_date_time AS `appointment_end_time`, aspec.name AS `appointment_speciality`, appser.name AS `appointment_service`, appser.duration_mins AS `appointment_service_duration`, ast.name AS `appointment_service_type`, ast.duration_mins AS `appointment_service_type_duration`, pa.status AS `appointment_status`, l.name AS `appointment_location`, pa.appointment_kind, pa.comments FROM patient_appointment pa INNER JOIN appointment_service appser ON appser.appointment_service_id = pa.appointment_service_id AND pa.voided = FALSE AND appser.voided = FALSE LEFT OUTER JOIN appointment_speciality aspec ON aspec.speciality_id = appser.speciality_id AND (aspec.voided=0 OR aspec.voided IS NULL) LEFT OUTER JOIN appointment_service_type ast ON ast.appointment_service_type_id = pa.appointment_service_type_id AND ast.voided = FALSE LEFT OUTER JOIN location l ON l.location_id = pa.location_id AND l.retired = FALSE LEFT OUTER JOIN patient_appointment_provider pap on pa.patient_appointment_id = pap.patient_appointment_id AND (pap.voided=0 OR pap.voided IS NULL) LEFT OUTER JOIN (SELECT p.provider_id, CONCAT_WS(' ', pn.given_name, pn.middle_name, pn.family_name_prefix, pn.family_name, pn.family_name_suffix) AS `provider_name` FROM provider p INNER JOIN person_name pn ON pn.person_id = p.person_id AND pn.voided = FALSE AND p.retired = FALSE) AS prov ON prov.provider_id = COALESCE(pa.provider_id, pap.provider_id)",
      "tableName": "patient_appointment_default",
      "incrementalUpdateConfig": {
        "updateOn": "appointment_id",
        "eventCategory": "appointments",
        "openmrsTableName": "patient_appointment"
      }
    },
    {
      "name": "Appointment service",
      "type": "customSql",
      "readerSql": "SELECT appser.appointment_service_id, appser.name AS `service_name`, appser.description AS `service_description`, appser.start_time AS `service_start_time`, appser.end_time AS `service_end_time`, appser.max_appointments_limit AS `service_max_load`, appser.duration_mins AS `service_duration`, l.name AS `location_name`, ast.name AS `service_type`, ast.duration_mins AS `service_type_duration`, spec.name AS `speciality` FROM (SELECT appointment_service_id, name, description, start_time, end_time, max_appointments_limit, duration_mins, location_id, speciality_id, voided FROM appointment_service WHERE voided = FALSE) appser LEFT OUTER JOIN appointment_service_type ast ON ast.appointment_service_id = appser.appointment_service_id AND ast.voided = FALSE LEFT OUTER JOIN location l ON l.location_id = appser.location_id AND l.retired = FALSE LEFT OUTER JOIN appointment_speciality spec ON spec.speciality_id = appser.speciality_id AND spec.voided = FALSE",
      "tableName": "appointment_service_default",
      "incrementalUpdateConfig": {
        "updateOn": "appointment_service_id",
        "eventCategory": "appointmentservice",
        "openmrsTableName": "appointment_service"
      }
    },
    {
      "name": "Appointment service availability",
      "type": "customSql",
      "readerSql": "SELECT appser.appointment_service_id, appser.name AS `service_name`, l.name AS `service_location`, aswa.day_of_week AS `availability_day_of_week`, aswa.start_time AS `availability_start_time`, aswa.end_time AS `availability_end_time`, aswa.max_appointments_limit AS `availability_max_load` FROM (SELECT appointment_service_id, name, location_id, voided FROM appointment_service WHERE voided = FALSE) appser LEFT OUTER JOIN appointment_service_weekly_availability aswa ON aswa.service_id = appser.appointment_service_id AND aswa.voided = FALSE LEFT OUTER JOIN location l ON l.location_id = appser.location_id AND l.retired = FALSE",
      "tableName": "service_availability_default",
      "incrementalUpdateConfig": {
        "updateOn": "appointment_service_id",
        "eventCategory": "appointmentservice",
        "openmrsTableName": "appointment_service"
      }
    },
    {
      "name": "Appointment speciality",
      "type": "customSql",
      "readerSql": "SELECT speciality_id, name AS `speciality` FROM appointment_speciality WHERE voided = FALSE",
      "tableName": "appointment_speciality_default"
    }
  ]
}

```

### 5. Bed Management Job:

#### Flattened Mart Tables

Note : The below Mart tables are created by customSql job type.

```
bed_patient_assignment_default
bed_tags_default
current_bed_details_default
```

Both `bed_patient_assignment_default` and `bed_tags_default` tables have `incrementalUpdateConfig` enabled by default. And `current_bed_details_default` table run on full load. 

**bedManagement.json:**

```
{
  "jobs": [
    {
      "name": "Bed Patient Assignment",
      "type": "customSql",
      "readerSql": "SELECT bpam.bed_patient_assignment_map_id, bpam.patient_id, bpam.bed_id, b.bed_number, bpam.date_started, bpam.date_stopped, l.name AS location, bpam.encounter_id, e.encounter_datetime, e.visit_id, vt.name AS visit_type FROM bed_patient_assignment_map bpam INNER JOIN bed b ON b.bed_id = bpam.bed_id AND b.voided = FALSE AND bpam.voided = FALSE INNER JOIN bed_location_map blm ON blm.bed_id = bpam.bed_id INNER JOIN location l ON l.location_id = blm.location_id AND l.retired IS FALSE INNER JOIN encounter e ON e.encounter_id = bpam.encounter_id AND e.voided = FALSE INNER JOIN visit v ON v.visit_id = e.visit_id AND v.voided = FALSE INNER JOIN visit_type vt ON vt.visit_type_id = v.visit_type_id AND vt.retired = FALSE",
      "tableName": "bed_patient_assignment_default",
      "incrementalUpdateConfig": {
        "updateOn": "bed_patient_assignment_map_id",
        "eventCategory": "encounter",
        "openmrsTableName": "bed_patient_assignment_map"
      }
    },
    {
      "name": "Bed Tags",
      "type": "customSql",
      "readerSql": "SELECT btm.bed_tag_map_id, b.bed_id, l.name AS bed_location, b.bed_number, b.status AS bed_status, bt.name AS bed_tag_name, btm.date_created, btm.date_changed, btm.date_voided AS date_stopped FROM bed b INNER JOIN bed_tag_map btm ON btm.bed_id = b.bed_id AND b.voided = FALSE INNER JOIN bed_tag bt ON bt.bed_tag_id = btm.bed_tag_id AND bt.voided = FALSE INNER JOIN bed_location_map blm ON blm.bed_id = b.bed_id INNER JOIN location l ON blm.location_id = l.location_id AND l.retired = FALSE",
      "tableName": "bed_tags_default",
      "incrementalUpdateConfig": {
        "updateOn": "bed_tag_map_id",
        "eventCategory": "bedtagmap",
        "openmrsTableName": "bed_tag_map"
      }
    },
    {
      "name": "Current Bed Details",
      "type": "customSql",
      "readerSql": "SELECT b.bed_id, l.name AS bed_location, b.bed_number, bt.name AS bed_type, b.status AS bed_status FROM bed b INNER JOIN bed_location_map blm ON blm.bed_id = b.bed_id AND b.voided = FALSE INNER JOIN location l ON blm.location_id = l.location_id AND l.retired = FALSE INNER JOIN bed_type bt ON bt.bed_type_id = b.bed_type_id",
      "tableName": "current_bed_details_default"
    }
  ]
}
```

### 6. Operation Theater Job:

#### Flattened Mart Tables

```
surgical_block_default
surgical_appointment_default
surgical_appointment_attributes
surgical_appointment_attribute_type_details_default
```

 `surgical_block_default`, `surgical_appointment_default` and `surgical_appointment_attributes` tables have `incrementalUpdateConfig` enabled by default. 

And `surgical_appointment_attribute_type_details_default` table run on full load. 

**operationTheater.json:**

```

{
  "jobs": [
    {
      "name": "Surgical Block",
      "type": "customSql",
      "readerSql": "SELECT sb.surgical_block_id, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS primary_provider_name, concat_ws(' ', ifnull(pn2.given_name, ''), ifnull(pn2.family_name, '')) AS creator_name, l.name AS location_name, sb.start_datetime AS block_starttime, sb.end_datetime AS block_endtime, sb.date_created AS date_created, sb.date_changed AS date_changed, cb.changed_by AS changed_by FROM surgical_block sb INNER JOIN location l ON l.location_id = sb.location_id AND l.retired = 0 AND sb.voided = 0 INNER JOIN provider p ON p.provider_id = sb.primary_provider_id AND p.retired = 0 INNER JOIN person_name pn ON pn.person_id = p.person_id AND pn.voided = 0 INNER JOIN provider p2 ON p2.provider_id = sb.creator AND p2.retired = 0 INNER JOIN person_name pn2 ON pn2.person_id = p2.person_id AND pn2.voided = 0 LEFT OUTER JOIN (SELECT surgical_block_id, concat_ws(' ', ifnull(pn4.given_name, ''), ifnull(pn4.family_name, '')) AS changed_by FROM surgical_block sb1 INNER JOIN provider p3 ON p3.provider_id = sb1.changed_by AND sb1.voided = 0 INNER JOIN person_name pn4 ON pn4.person_id = p3.person_id) cb ON cb.surgical_block_id = sb.surgical_block_id",
      "tableName": "surgical_block_default",
      "incrementalUpdateConfig": {
        "updateOn": "surgical_block_id",
        "eventCategory": "surgicalblock",
        "openmrsTableName": "surgical_block"
      }
    },
    {
      "name": "Surgical Appointment",
      "type": "customSql",
      "readerSql": "SELECT sa.surgical_appointment_id, sa.surgical_block_id, sa.patient_id, sa.sort_weight, sa.status, sa.actual_start_datetime, sa.actual_end_datetime, sa.notes, sa.date_created, sa.date_changed, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS creator_name, cb.changed_by AS changed_by FROM surgical_appointment sa INNER JOIN provider pr ON pr.provider_id = sa.creator AND pr.retired = 0 AND sa.voided = 0 INNER JOIN person_name pn ON pn.person_id = pr.person_id LEFT OUTER JOIN (SELECT surgical_appointment_id, concat_ws(' ', ifnull(pn2.given_name, ''), ifnull(pn2.family_name, '')) AS changed_by FROM surgical_appointment sa1 INNER JOIN provider p2 ON p2.provider_id = sa1.changed_by AND sa1.voided = 0 INNER JOIN person_name pn2 ON pn2.person_id = p2.person_id) cb ON cb.surgical_appointment_id = sa.surgical_appointment_id",
      "tableName": "surgical_appointment_default",
      "incrementalUpdateConfig": {
        "updateOn": "surgical_appointment_id",
        "eventCategory": "surgicalappointment",
        "openmrsTableName": "surgical_appointment"
      }
    },
    {
      "name": "Surgical Appointment Attribute Type Details",
      "type": "customSql",
      "readerSql": "SELECT name, description FROM surgical_appointment_attribute_type WHERE retired = 0",
      "tableName": "surgical_appointment_attribute_type_details_default"
    },
    {
      "name": "Surgical Appointment Attributes",
      "type": "eav",
      "tableName": "surgical_appointment_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "surgical_appointment_attribute_type",
        "attributeTableName": "surgical_appointment_attribute",
        "valueTableJoiningId": "surgical_appointment_attribute_type_id",
        "typeTableJoiningId": "surgical_appointment_attribute_type_id",
        "valueColumnName": "value",
        "primaryKey": "surgical_appointment_id"
      },
      "incrementalUpdateConfig": {
        "updateOn": "surgical_appointment_id",
        "eventCategory": "surgicalappointment",
        "openmrsTableName": "surgical_appointment"
      }
    }
  ]
}
```

### 7. Visits and Encounters Job:

#### Flattened Mart Tables

```
patient_visit_details_default
visit_attribute_details_default
visit_attributes
patient_encounter_details_default
```

Only `patient_encounter_details_default` table has `incrementalUpdateConfig` enabled by default. Rest of the tables run on full load. 

**visitsAndEncounters.json:**

```
{
  "jobs": [
    {
      "name": "Patient Visit Details",
      "type": "customSql",
      "readerSql": "SELECT visit_id, patient.patient_id AS patient_id, visit.visit_type_id AS visit_type_id, vt.name AS visit_type_name, vt.description AS visit_type_description, date_started AS visit_start_date, date_stopped AS visit_end_date, indication_concept_id, visit.location_id AS location_id, location.name AS location_name FROM patient INNER JOIN visit ON patient.patient_id = visit.patient_id AND patient.voided = FALSE AND visit.voided = FALSE INNER JOIN visit_type vt ON visit.visit_type_id = vt.visit_type_id AND vt.retired = FALSE LEFT OUTER JOIN location ON visit.location_id = location.location_id AND location.retired = FALSE",
      "tableName": "patient_visit_details_default"
    },
    {
      "name": "Patient Encounter Details",
      "type": "customSql",
      "readerSql": "SELECT patient.patient_id, visit_id, ee.episode_id AS episode_id, encounter.encounter_id, et.encounter_type_id AS encounter_type_id, et.name AS encounter_type_name, et.description AS encounter_type_description, et.edit_privilege AS edit_privilege, et.view_privilege AS view_privilege, location.name AS location_name, form_id, encounter_datetime, er.encounter_role_id AS encounter_role_id, er.name AS encounter_role_name, ep.provider_id AS provider_id, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS provider_name, er.description AS encounter_role_description FROM patient INNER JOIN encounter ON patient.patient_id = encounter.patient_id AND patient.voided = FALSE AND encounter.voided = FALSE INNER JOIN encounter_type et ON encounter.encounter_type = et.encounter_type_id AND et.retired = FALSE INNER JOIN encounter_provider ep ON encounter.encounter_id = ep.encounter_id AND ep.voided = FALSE INNER JOIN encounter_role er ON ep.encounter_role_id = er.encounter_role_id AND er.retired = FALSE LEFT OUTER JOIN episode_encounter ee ON encounter.encounter_id = ee.encounter_id INNER JOIN provider p ON ep.provider_id = p.provider_id AND p.retired = FALSE INNER JOIN person_name pn ON pn.person_id = p.person_id AND pn.voided = FALSE LEFT OUTER JOIN location ON encounter.location_id = location.location_id AND location.retired = FALSE",
      "tableName": "patient_encounter_details_default",
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      }
    },
    {
      "name": "Visit Attribute Details",
      "type": "customSql",
      "readerSql": "SELECT va.visit_id AS visit_id, va.visit_attribute_id AS visit_attribute_id, va.value_reference AS value_reference, vat.visit_attribute_type_id AS visit_attribute_type_id, vat.name AS visit_attribute_type_name, vat.description AS visit_attribute_type_description, vat.datatype AS visit_attribute_type_datatype, vat.datatype_config AS visit_attribute_type_datatype_config, vat.preferred_handler AS visit_attribute_type_preferred_handler, vat.handler_config AS visit_attribute_type_handler_config, vat.min_occurs AS visit_attribute_type_min_occurs, vat.max_occurs AS visit_attribute_type_max_occurs FROM visit INNER JOIN visit_attribute va on visit.visit_id = va.visit_id AND visit.voided = FALSE INNER JOIN visit_attribute_type vat ON va.attribute_type_id = vat.visit_attribute_type_id AND va.voided = FALSE AND vat.retired = FALSE",
      "tableName": "visit_attribute_details_default"
    },
    {
      "name": "Visit Attributes",
      "type": "eav",
      "tableName": "visit_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "visit_attribute_type",
        "attributeTableName": "visit_attribute",
        "valueTableJoiningId": "attribute_type_id",
        "typeTableJoiningId": "visit_attribute_type_id",
        "valueColumnName": "value_reference",
        "primaryKey": "visit_id"
      }
    }
  ]
}
```

### 8.Medication And Orders Job:
Both Medication and Orders are combined into one job, have one single json file for this.

#### Flattened mart tables

```
medication_data_default
lab_samples
radiology_orders
```

All the above mart tables specific Medication and Orders have `incrementalUpdateConfig` enabled by default. 

**medicationAndOrders.json:**

```
{
  "jobs": [
    {
      "name": "Medication Data",
      "type": "customSql",
      "sourceFilePath": "classpath:readerSql/drugOrder.sql",
      "tableName": "medication_data_default",
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      }
    },
    {
      "name": "Orders Data",
      "type": "orders",
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      }
    }
  ]
```

### 9. Diagnoses And Conditions Job:

Both Diagnoses and Conditions are combined into one job, have one single json file for this.

#### Mart Tables

```
visit_diagnoses
conditions_default
```

Only Diagnosis specific tables have `incrementalUpdateConfig` enabled by default. `conditions_default` run on full load by default.

**diagnosesAndConditions.json:**

```
{
  "jobs": [
    {
      "name": "Diagnoses Data",
      "type": "diagnoses",
      "incrementalUpdateConfig": {
        "updateOn": "encounter_id",
        "eventCategory": "Encounter",
        "openmrsTableName": "encounter"
      }
    },
    {
      "name": "Conditions",
      "type": "customSql",
      "readerSql": "SELECT condition_id, previous_condition_id, patient_id, status, coalesce(condition_non_coded, cv.concept_full_name) AS condition_name, CASE WHEN condition_non_coded IS NULL THEN TRUE ELSE FALSE END AS is_coded_condition_name, onset_date, additional_detail, end_date, end_reason, concat_ws(' ', ifnull(pn.given_name, ''), ifnull(pn.family_name, '')) AS creator_name, conditions.date_created FROM conditions INNER JOIN concept_view cv ON cv.concept_id = conditions.concept_id AND conditions.voided = 0 AND cv.retired = 0 INNER JOIN users ON users.user_id = conditions.creator INNER JOIN person_name pn ON pn.person_id = users.person_id",
      "tableName": "conditions_default"
    }
  ]
}
```

### 10. Provider Job:

**Flattened Mart Tables**

```
provider_default
provdier_attributes
provider_attribute_details_default
```

Only `provider_attributes` table has `incrementalUpdateConfig` enabled by default. And rest of the tables run on full load by default.

**provider.json:**

```
{
  "jobs": [
    {
      "name": "Providers",
      "type": "customSql",
      "readerSql": "SELECT provider_id, person_id, name, identifier, provider_role_id from provider WHERE provider.retired = FALSE",
      "tableName": "provider_default"
    },
    {
      "name": "Provider Attribute Details",
      "type": "customSql",
      "readerSql": "SELECT pa.provider_attribute_id AS provider_attribute_id, pat.provider_attribute_type_id AS attribute_type_id, pa.provider_id AS provider_id, pa.value_reference AS value_reference, pat.name AS provider_attribute_type_name, pat.description AS provider_attribute_type_description, pat.datatype AS provider_attribute_datatype, pat.datatype_config AS provider_attribute_datatype_config, pat.preferred_handler AS provider_attribute_type_preferred_handler, pat.handler_config AS provider_attribute_type_handler_config, pat.min_occurs AS provider_attribute_type_min_occurs, pat.max_occurs AS provider_attribute_type_max_occurs FROM provider INNER JOIN provider_attribute pa on provider.provider_id = pa.provider_id AND provider.retired = FALSE INNER JOIN provider_attribute_type pat ON pa.attribute_type_id = pat.provider_attribute_type_id AND pa.voided = FALSE AND pat.retired = FALSE",
      "tableName": "provider_attribute_details_default"
    },
    {
      "name": "Provider Attributes",
      "type": "eav",
      "tableName": "provider_attributes",
      "eavAttributes": {
        "attributeTypeTableName": "provider_attribute_type",
        "attributeTableName": "provider_attribute",
        "valueTableJoiningId": "attribute_type_id",
        "typeTableJoiningId": "provider_attribute_type_id",
        "valueColumnName": "value_reference",
        "primaryKey": "provider_id"
      }
    }
  ]
}
```
