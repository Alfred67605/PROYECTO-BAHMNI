---
id: "2318893430"
title: "Add Custom View Sql to bahmni-mart.json"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893430/add-custom-view-sql-to-bahmni-mart-json"
version: 1
updated: "2021-04-05T08:42:10.024Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:19.655Z"
---

# Add Custom View Sql to bahmni-mart.json

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893430)  
> **Versión del documento:** v1 (2021-04-05T08:42:10.024Z) | **Autor/Editor:** Bavisetti Venkatesh

---

As we know view is a virtual table based on the result-set of an SQL statement. All the existing views that we have in bahmni-mart.json are bundled with bahmni-mart.rpm file. But if we want to add a new view query to the bahmni-mart.json file, we have 2 ways to implement.

- 
Add direct query

- 
Give path of the query

### 1. Add Direct Query:

If we have simple view query to get executed on analytics database then we can directly add it in the bahmni-mart.json with the table name as show below

```
{
 "name": "patient_program_medication_view_test",
 "sql": "SELECT pd.person_id AS patient_id, ppd.program_id, md.patient_program_name AS program_name, ppd.date_enrolled, ppd.date_completed, ppd.program_outcome, pd.gender, pd.birthyear            AS birth_year, EXTRACT(YEAR FROM (SELECT age( md.start_date, TO_DATE(CONCAT('01-01-', pd.birthyear), 'dd-MM-yyyy')))) AS age_at_medication, age_group(md.start_date, TO_DATE(CONCAT('01-01-', pd.birthyear), 'dd-MM-yyyy')) AS age_group_at_medication, pd.dead, pa.*, md.patient_program_id, md.encounter_id, md.encounter_type_name, md.order_id, md.orderer_name, md.coded_drug_name, md.non_coded_drug_name, md.dose, md.dose_units, md.frequency, md.route, md.start_date           AS medication_start_date, md.calculated_end_date  AS medication_calculated_end_date, md.date_stopped         AS medication_stopped_date, md.stop_reason, md.duration, md.duration_units, md.quantity, md.quantity_units, md.dispense             AS is_dispensed, md.visit_id, md.visit_type FROM person_details_default pd LEFT JOIN person_attributes pa ON pa.person_id = pd.person_id LEFT JOIN medication_data_default md ON md.patient_id = pd.person_id LEFT OUTER JOIN patient_program_data_default ppd ON ppd.patient_id = md.patient_id and ppd.patient_program_id = md.patient_program_id"
}
```

Once we add the above configuration in the mart file and run the bahmni-mart command, we will be able to see the corresponding table in the analytics database.

### 2. Give Path of the Query

If we have sql queries which is very big and can’t be included in the bahmni-mart.json file then it requires creating new sql file for it. Once we create/add sql file to bahmni instance in a specific path, we have to update the absolute path of sql query in the bahmni-mart.json. After that running the bahmni-mart will create the corresponding table in the analytics database. 

```
{
 "name": "patient_program_medication_view_test",
 "sourceFilePath":"file:/home/bahmni/viewSql/patientProgramMedicationViewTest.sql"
}
```

In the above sample comfiguration, we have the sql file added in `/home/bahmni/viewSql` directory.

### **Points to note:**

- 
This query must be a view query which will run on analytics tables.

- 
We can’t use these sql queries to run on openmrs tables to create the table in analytics database. For that we must add sql query to bahmni-mart and it will be bundled with the mart rpm.
