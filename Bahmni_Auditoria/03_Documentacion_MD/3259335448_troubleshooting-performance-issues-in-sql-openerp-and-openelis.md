---
id: "3259335448"
title: "Troubleshooting performance issues in SQL, OpenERP and OpenELIS"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3259335448/troubleshooting-performance-issues-in-sql-openerp-and-openelis"
version: 10
updated: "2024-01-22T12:37:32.586Z"
author: "Riya Kumari"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:40.171Z"
---

# Troubleshooting performance issues in SQL, OpenERP and OpenELIS

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3259335448)  
> **Versión del documento:** v10 (2024-01-22T12:37:32.586Z) | **Autor/Editor:** Riya Kumari

---

Based on a real world scenario where we debugged and fixed a performance issue with Odoo/OpenELIS sync, this documentation has been written, to share experiences with the community on how to debug similar issues. 
 

# Context and Problem Statement
A particular implementation of Bahmni, running in India for the last 8+ years, on a single machine instance was facing slowness issues while syncing events from Bahmni to OpenERP (now called Odoo).

They encountered overall system slowness, majorly in OpenERP quotation sync from EMR to OpenERP and frequent failed events for OpenElis.

# Observations & steps taken to identify potential causes

- Failed events in OpenMRS & OpenERP tables had majorly entries related to Socket timeout - Read timeout

- 
The average CPU load / CPU percentage was too high specifically when there was more number of patients in OPD days

      Command to check CPU usage - htop

- 
To ascertain processes occupying most of the CPU usage percentage at every instant during the monitoring time, a bash script was created and ran in the background . 
The bash script is to monitor System load average and CPU % usage every 2 minutes by different processes running in the system as stated below:

```
#!/bin/bash
mkdir -p /var/log/cpulogs
while true; do
uptime >> /var/log/cpulogs/uptime.log
   # Get the current date and time
   timestamp=$(date +"%Y-%m-%d %H:%M:%S")
   # Get the CPU usage by top 20 processes using ps command and awk
   ps_output=$(ps -eo pid,pcpu,comm --sort=-pcpu | awk 'NR> /var/log/cpulogs/cpu_usage.log
sleep 60
done
```

Execute the script:  ./filename.sh & to run it in the background.

It was found that mysql and postgres processes were consuming maximum CPU.

- 
To find out exact mysql processes/ queries consuming more time and CPU at any instant, execute this in OpenMRS database:

```
SHOW processlist;
SHOW FULL processlist;
```

- 
To find out exact psql processes / queries consuming more time and CPU at any instant, execute this query in OpenERP database :

```
SELECT datname, pid, state, query, age(clock_timestamp(), query_start) AS age
FROM pg_stat_activity WHERE state <> 'idle' AND query NOT LIKE '% FROM pg_stat_activity %' ORDER BY age;
```

- 
To ascertain at every instant which mysql queries have longer execution time.
Enable the Slow Query Log configuration:

- 
By default, the slow query log may not be enabled. To enable it, you need to modify your MySQL server's configuration file (usually `my.cnf` or `my.ini`), typically found in the MySQL data directory. Open this file in a text editor, and add or modify the following lines:

```
slow_query_log = 1
slow_query_log_file = /var/log/cpulogs/mysql-slow.log # /path/to/slow-query.log
long_query_time = 2  # This value defines what is considered a "slow" query, in seconds.
```

`slow_query_log`: Set it to 1 to enable the slow query log.
`slow_query_log_file`: Specify the path to the log file.
`long_query_time`: Set the threshold (in seconds) for what constitutes a "slow" query. You can adjust this value as needed.

Execute these command in terminal -

```
touch /var/log/cpulogs/mysql-slow.log
chown mysql:mysql /var/log/cpulogs/mysql-slow.log
```

- 
Restart MySQL:

After making the changes to the configuration file, you'll need to restart the MySQL server to apply the settings.

## Postgres query taking more execution time for OpenERP Database

5 secs ->

```
SELECT "sale_order_line".id FROM "sale_order_line" WHERE ("sale_order_line"."external_order_id" = 'f6e15ec3-f0a0-4408-a4b4-5ae445a7482f') ORDER BY "sale_order_line"."id"
```

Check for "sale_order_line"."external_order_id"  indexing

7.39 secs ->

```
SELECT "processed_drug_order".id FROM "processed_drug_order" WHERE (("processed_drug_order"."order_uuid" = '480b63e8-d1d8-422c-bd2f-1dbe33e44e74')  AND  ("processed_drug_order"."dispensed_status" = 'false')) ORDER BY "processed_drug_order"."id"
```

Check for "processed_drug_order"."order_uuid" indexing

2mins ->

```
update res_partner set "last_reconciliation_date"='2023-11-13 05:57:05',write_uid=37,write_date=(now() at time zone 'UTC') where id IN (294732)
```

Check for “id” indexing

1 min 27 secs ->

```
update sale_order set "care_setting"='opd',write_uid=1,write_date=(now() at time zone 'UTC') where id IN (1295656)
```

Check for “id” indexing

**Note**: The query execution times mentioned here are based on our client's system database, and they may vary depending on the data in the particular system database.

## MySQL query that was taking too long to execute

emrapi.sqlSearch.todaysPatientsByProvider in OpenMRS : -

```
select distinct concat(pn.given_name," ", ifnull(pn.family_name,'')) as name, pi.identifier as identifier, concat("",p.uuid) as uuid,
           concat("",v.uuid) as activeVisitUuid,
           IF(va.value_reference = "Admitted", "true", "false") as hasBeenAdmitted
           from
           visit v join person_name pn on v.patient_id = pn.person_id and pn.voided = 0 and v.voided=0
           join patient_identifier pi on v.patient_id = pi.patient_id and pi.voided=0
           join person p on p.person_id = v.patient_id  and p.voided=0
           join encounter en on en.visit_id = v.visit_id and en.voided=0
           join encounter_provider ep on ep.encounter_id = en.encounter_id  and ep.voided=0
           join provider pr on ep.provider_id=pr.provider_id and pr.retired=0
           join person per on pr.person_id=per.person_id and per.voided=0
           left outer join visit_attribute va on va.visit_id = v.visit_id and va.voided = 0 and va.attribute_type_id = (
           select visit_attribute_type_id from visit_attribute_type where name="Admission Status"
           )
           where
           date(en.encounter_datetime)=curdate() and
           pr.uuid=${provider_uuid}
           order by en.encounter_datetime desc;

```

# Outcome

With the configurations, scripts, and continuous process/query monitoring, a few MySQL/PSQL queries were found that were consuming maximum CPU and had a longer execution time. 

- 
**MySQL/OpenMRS DB**: There was a “My Patients” tab in the Clinical dashboard which was executing the above mentioned MySql query. We noticed that the query was searching for all patients in the encounter table which has the most number of rows in it so we added an `AND` clause to only check for patients who have an active visit and hence displaying only active patients in the "My Patients" tab. The optimized query is mentioned below. 

- 
**OpenERP Postgres DB:** For OpenERP queries which were taking more time we indexed the `order_uuid` column of `processed_drug_order` table and `external_order_id` of `sale_order_line` table in the postgres database. With these query optimisations, query execution time was reduced from minutes/seconds to milliseconds, which significantly improved the OpenERP system responsiveness and reduced the overall average CPU load for the system.

- 
**OpenElis Failed Events:** For OpenElis, failed events were mostly related to SocketTimeoutException - Read timeout error thus reducing average CPU load of the system enhanced its performance as well.

## Command to index postgres tables in OpenERP Database

```
CREATE INDEX processed_drug_order_order_uuid_index ON processed_drug_order(order_uuid);
CREATE INDEX sale_order_line_external_order_id_index ON sale_order_line(external_order_id);
```

## Optimized MySQL query for My Patients tab

```
select distinct concat(pn.given_name," ", ifnull(pn.family_name,'')) as name, pi.identifier as identifier, concat("",p.uuid) as uuid,
           concat("",v.uuid) as activeVisitUuid,
           IF(va.value_reference = "Admitted", "true", "false") as hasBeenAdmitted
           from
           visit v join person_name pn on v.patient_id = pn.person_id and pn.voided = 0 and v.voided=0 and v.date_stopped IS NULL
           join patient_identifier pi on v.patient_id = pi.patient_id and pi.voided=0
           join person p on p.person_id = v.patient_id  and p.voided=0
           join encounter en on en.visit_id = v.visit_id and en.voided=0
           join encounter_provider ep on ep.encounter_id = en.encounter_id  and ep.voided=0
           join provider pr on ep.provider_id=pr.provider_id and pr.retired=0
           join person per on pr.person_id=per.person_id and per.voided=0
           left join visit_attribute va on va.visit_id = v.visit_id and va.voided = 0
           left join visit_attribute_type vat on va.attribute_type_id = vat.visit_attribute_type_id and vat.name = "Admission Status"
           where
           date(en.encounter_datetime)=curdate() and
           pr.uuid=${provider_uuid}
           order by en.encounter_datetime desc

```
