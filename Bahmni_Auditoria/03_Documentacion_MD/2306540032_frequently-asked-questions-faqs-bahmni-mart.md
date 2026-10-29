---
id: "2306540032"
title: "Frequently Asked Questions(FAQs) - Bahmni Mart"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540032/frequently-asked-questions-faqs-bahmni-mart"
version: 15
updated: "2021-09-23T09:14:33.589Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:34.983Z"
---

# Frequently Asked Questions(FAQs) - Bahmni Mart

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306540032)  
> **Versión del documento:** v15 (2021-09-23T09:14:33.589Z) | **Autor/Editor:** Gurpreet Luthra

---

Search
            
                        
            
            
            
        
    

## **Installation FAQs**

#### **Q1. How can I do a dev set-up for bahmni-mart?**

**A:** After cloning follow the below steps:-

- 
Update `/src/main/resources/application-dev.properties` and `/bahmni-mart/src/test/resources/application-test.properties` with your corresponding vagrant ip and password(if required) 

- 
[Connect](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137766/Bahmni-Mart+Setup+with+MySQLWorkbench+DBeaver) to the database of your local vagrant with the IDEA you are working in

- 
Run `/scripts/dev/testMysql.sql` and  `sudo mysql -pP@ssw0rd123 -e "GRANT ALL ON test_openmrs.* to'test_user'@'localhost';FLUSH PRIVILEGES;"` in mysql database 

- 
Run `/scripts/dev/psqlTestSetup.sql` and `psql -U test_user test_analytics -c "CREATE SCHEMA bahmni_mart_scdf;“` in postgres database

- 
Run the application to run the bahmni-mart.
![](https://bahmni.atlassian.net/wiki/download/attachments/2306540032/image.png?version=1&modificationDate=1618839783746&cacheVersion=1&api=v2)

#### **Q2. How can I install mart in my local system and point to bahmni installed in Vagrant or any other environment?**

**A**: For now mart can be installed only on the CentOS env. 

As mentioned in the above answer, we can configure the bahmni-mart in any IDE and run the application. Please follow the steps mentioned above.

#### 
**Q3. How can I install mart without metabase using the ansible playbook?**

**A:** To install mart without metabase, we need to remove entries of metabase from bahmni-mart inventory file.The path to the inventory file is `/etc/bahmni-mart-playbook/inventories/bahmni-mart`

#### 
**Q4. Which version of Postgres is required for Mart as a Prerequisite?**

**A:** For Bahmni version >=0.89 & < 0.92 -> Install PostgreSQL 92

For Bahmni version >= 0.92 -> Install PostgreSQL 96

#### 
**Q5. How can I override the default mart configuration for any particular implementation?**

**A: **You can place an overridden version of` bahmni-mart.json` at ``/var/www/bahmni_config/bahmni-mart/`` path of your implementation environment.

#### 
** Q6. How can i get started with mart?**

**A:**[Bahmni Mart Installation Setup](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875813/Bahmni+Mart+Installation+Setup)

####  **Q7. What is the suggested DB tool to view the analytics table and the procedure to Connect mart to the DB tool?** 
** A:**https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/330137766/Bahmni-Mart+Setup+with+MySQLWorkbench+DBeaver[Bahmni-Mart Setup with MySQLWorkbench & DBeaver](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893350/Bahmni-Mart+Setup+with+MySQLWorkbench+DBeaver)

#### ** Q8.How to configure the mart jobs?**
 **A:**https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/342097921/Bahmni-Mart+Json+File[Bahmni-Mart Json File](/wiki/spaces/BAH/pages/2306736457/Bahmni-Mart+Json+File)

#### ** Q9: Where is mart.json file located on the server? **

**A:** `/var/www/bahmni_config/bahmni-mart/bahmni-mart.json`

## **General FAQs**

#### **Q1. How to resolve Cannot connect to mysql or cannot connect to postgres or Communication link failure **

**A:** Restart mysql and postgres servers and make sure you are connecting with correct password

#### **Q2: How to ignore columns in mart tables**
**A:** While creating mart tables if you don’t want some fields from the openmrs table. You can add them to the "columnsToIgnore" field.

#### **Q3: One of the jobs fails(Eg: Microbiology) with out of memory issue, what should I do?**
**A: **Bahmni mart **reads job data** from Bahmni and keeps it in memory until it pushes to ***analytics*** database. If the data in Bahmni is very large for that specific job memory overflow issues may occur. As of now bahmni-mart doesn’t have streaming support for all the jobs except ***orders***. Please request for the feature enhancement.

#### **Q4: Can I remove any jobs in bahmni-mart.json if I don’t need it?**
**A:** Yes, it is safe to delete(or add) any unwanted job configurations from bahmni-mart.json

#### 
**Q5. What to check if any view is failing while running mart?**

**A: **Make sure if you have corresponding configuration in mart. For example if you don't       have registration second page configured for your implementation the corresponding view would be failing 

#### 
**Q6. What are the databases supported by Mart? **

**A: **Only Postgres database is supported by mart.

#### **Q7: When to use Custom Sql & when to use sql files**
**A: **When you think more than one job can use the common sql queries, you can create a separate sql file and mention the type field as customSql and sourceFilePath as sql file path.

Else you can mention customSql in the type field and write the sql to be executed in readerSql field’.

#### **Q8: Why the incremental load is not working. Its always doing the full load.**
**A:** Incremental load depends on the atom feed events that are published by openmrs. And we have the option to turn it on or off based on the usage. And we have a scheduler to publish the events from time to time. It can be configured through openmrs admin “Manage scheduler” page. Below is the property for the same

**“OpenMRS event publisher task” **If incremental load is not working fine, please check the above scheduler is running fine/not. 

**Q9 : How to view the log files.**
A:  We can find the log file related to bahmni-mart under /var/log/bahmni-mart

**Q10 : How to stop the running mart.**
**A: Yet to be answered**

**Q11: What will happen if one of my jobs fails?**
A: If one of the mart job fails, the error will be reflected in the bahmni-mart log file but the bahmni-mart will not stop. All the other jobs from the mart will run irrespective of the failed job.

## **TechnicalFAQs**

#### **Q1: How Does the data type of the values change in Bahmni mart compare to openmrs?**
**A: *****Yet to be answered***

#### 
**Q2: How boolean is getting stored at bahmni-mart tables?**

**A: *****Yet to be answered***

#### 
**Q3: What is the difference between form1 and form2 in mart?**

**A:** Both Form 1 and Form 2 tables will have the entries for the observations filled. 

But Form 1 tables will have the “id_formName” column which will contain “obs id”(openmrs) of the form concept. 

Form 2 tables will have the “form_field_path” column which will contain the form name.

#### **Q3: What is form_field_path and reference_form_field_path?**
**A:** These both columns will come into picture when a separate table got created for either add-more/multi-select concepts and sections.

“form_field_path” will contain the form name along with the control id followed by count of the control among all the controls that got added using add more(i.e. Path from section to the obs).

```
Eg:  form-name.{section_id} -{add_more_count_of_section}/{obs_control_id} - {add_more_count_of_obs}
```

“reference_form_field_path” will contain the path of section in the form(i.e. path from form name to the section control).

```
Eg:  form-name.{section_id} - {add_more_count_of_section}
```

#### **Q4: Why does my *****customSQL***** job fail with SQL syntax error even though the SQL is correct? **
**A: **The issue could be with *columnsToIgnore* configuration. Mart internally parses the given SQL query in ***customSQL*** jobs using ***jsqlparser*** and removes the columns provided in ***columnsToIgnore**. *If the ***select*** part of the query is too complex(with aggregate functions etc),  ***jsqlparser** *may not be too intelligent to parse the SQL query. You can solve the problem by **avoiding complex select parts in the outermost *****select***** clause** or update the SQL query to remove unwanted columns so *columnsToIgnore *configuration can be ignored

#### **Q5: How to fix if mart fails with FileNotFoundException ?**

```
java.io.FileNotFoundException: /var/www/bahmni_config/bahmni-mart/bahmni-mart.json
```

**A:** Make sure the bahmni-mart.json file is there in the /var/www/bahmni_config folder. Otherwise run below task to create a symlink from /etc/bahmni-mart/conf path

ln -s  /etc/bahmni-mart/conf bahmni-mart. 

Usually when we update the config the symlink gets removed.

#### **Q6: Why mart is failing with java.sql.SQLException and not able to connect to the databases?**
 **A:**  Please check the passwords for both openmrs and analytics databases in /etc/bahmni-mart-playbook/setup.yml file. If it needs a change please update in setup.yml and re-run the mart installation.

## **Functional FAQs**

#### **Q1. Does Bahmni-mart consider data from any specific date ?**
**A: **Yes, and marker table can be updated for using data from a specific date

#### 
**Q2: How to remove incremental update config(or any modifications) for any grouped jobs?**

**A:** If you maintain your own mart code then you can go to the corresponding grouped job config and make modifications there.All grouped job config jsons will be placed under /src/main/resources/groupedJobs

                                                  (or)

 If you don't have control over mart code copy the json contents from the corresponding grouped job json to your  /var/www/bahmni_config/bahmni-mart/bahmni-mart.json and make the required modifications

#### 
**Q3: What is the use of giving separate table config?**

**A:** You can add configuration to create new tables for all “multi-select” and “add more” concepts by enabling ** AddMoreAndMultiSelect**  to true

#### 
**Q4: What if we want to create a separate table for a concept which is neither multi-select nor add more?**

**A:** You can configure the concept to have separate table created by giving concept in **"separateTables": [] **in json file.

#### 
**Q5. Is there a case where we should run mart in only full load instead of incremental load?**

**A:** If you make any changes in bahmni-mart.json, run the mart in full load once and proceed. 

#### **Q6: I don’t see the data in mart analytics database though mart runs successfully**
**A:** Mart does incremental loading using the events in Bahmni/openmrs by default. If there is any delay in raising the event or if the event skipped due to unknown reasons by mart, you can’t see the data. It is recommended to do a full-load of mart once in a while. You can do full load safely by truncating markers table and deleting all the tables (deleting schema) in the analytics database.

#### 
**Q7: There are some tables in mart which are not related to Bahmni anymore **

**A:** If you do any metadata changes(Eg: changing form name) in Bahmni, the mart is not so intelligent to clear the stale tables. It is recommended to do full-load when there is a change in Bahmni metadata or if any configuration is updated in bahmni-mart.json.

**Q8. How can I override the default mart configuration for any particular implementation?**

**A:** You can place an overridden version of bahmni-mart.json at 

```
/var/www/bahmni_config/bahmni-mart/path of your implementation environment.
```

#### **Q9.What is the difference between Full load and Incremental Load for Mart?**
**A: **Flattening the data from beginning with every run is called as Full load where as flattening the data from the point where it completed in last run called as Incremental Load.

e.g. Suppose we have 100 records to get flattened. In Full load, in each run it will start flattening the data from 0 to 100.

Where as in Incremental load, if in first run the data flattened till 50 in second run it will start flattening from 51 not from 0.

#### 
**Q10: What are the different scenarios in which I can’t see the form in mart table?**

A: Following cases are possible:

- 
When the form has duplicate concepts, the table creation for the form will be skipped

- 
When the concept is more than 50 characters, postures will skip creating the table

#### **Q11: How are the special characters handled in the analytics table?**
**A: **Special characters are replaced with underscores (_)

#### **Q12: How to switch between full load and incremental load, what’s the best option?**
**A: **In Job level, few jobs have incremental load feature enabled. All jobs doesn’t fall in that category. For more information [Incremental Update](/wiki/spaces/BAH/pages/2318893479/Incremental+Update) 

User can execute the below steps in *analytics* database to run the mart in full load

```
drop schema public CASCADE;
CREATE SCHEMA public;
create table markers
(
    job_name        text    not null
        constraint markers_pkey
            primary key,
    event_record_id integer not null,
    category        text    not null,
    table_name      text    not null
);

alter table markers owner to analytics;
\q
```

***Note**: the above step can be used only if mart ran at-least once in the server. *

## **Security FAQs**

#### **Q1.How to protect the patient sensitive data from flowing to analytics table?**

**A: **You can add the specific concepts to columns to ignore section as mentioned below. Those concepts and the data related to the concepts will not be displayed

`"columnsToIgnore": [ ]`

#### 
**Q2. Where can we configure the password for Postgres?**

**A:  **You can configure password in the playbook before running the mart.

```
/etc/bahmni-mart-playbook/setup.yml
```

## **Performance FAQs**

#### **Q1: Does custom query impact on performance?**
**A: **Yes*, *the mart performance depends on the size of the query and the number of joins that the query has.

**Q2.How long will it take to run mart?**

**A:** It depends majorly on the following 2 factors:

- 
It depends on the number of jobs configured in the bahmni-mart.json file

- 
Data present in the openmrs tables.

#### 
**Q3.What is the suggested way to run the bahmni-mart. (Incremental, Full Load ?)**

**A: **Running mart on full load or incremental load completely depends on usecase and number of observations.

For the first time, mart runs on full load and the subsequent run will be incremental load.

But if any metadata got changed, then its always better to run mart on full load

 
*Name of the contributers : *[Himabindu Thungathurty](https://bahmni.atlassian.net/wiki/people/557058:d0693809-6796-4c30-b887-eed8e802d572?ref=confluence) [Pritam Das](https://bahmni.atlassian.net/wiki/people/557058:3e8e7719-cb9e-4745-8a81-03ddb46f33af?ref=confluence) [Vinisha Donthula](https://bahmni.atlassian.net/wiki/people/5c3ecdc316ac1e4f7cbcf9b6?ref=confluence) [Kirity Mahanty](https://bahmni.atlassian.net/wiki/people/5e0983deeb2ae70ea1df4172?ref=confluence) [Supriya Muppiri](https://bahmni.atlassian.net/wiki/people/5c768d98a610e635fa0fbd14?ref=confluence) [Tarun Shettygari](https://bahmni.atlassian.net/wiki/people/5def2ca9ca98940cb900f191?ref=confluence) [Rakesh Kumar](https://bahmni.atlassian.net/wiki/people/5df9bdd9b6d73c0cb5873a9e?ref=confluence)[Sneha Bagri (Deactivated)](https://bahmni.atlassian.net/wiki/people/557058:4a6101c7-d117-49e1-aa76-4c7ae75d67d7?ref=confluence) [Venkata Vineela (Deactivated)](https://bahmni.atlassian.net/wiki/people/5c0e064c2434bf3a1a91ff14?ref=confluence) [Siva Rachakonda (Deactivated)](https://bahmni.atlassian.net/wiki/people/5b93ca927c4eab2c31e2d4c3?ref=confluence) [Tammana Sowmika (Deactivated)](https://bahmni.atlassian.net/wiki/people/5b964581c4dfca1dfa357644?ref=confluence)
