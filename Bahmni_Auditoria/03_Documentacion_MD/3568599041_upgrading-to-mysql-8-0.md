---
id: "3568599041"
title: "Upgrading to MySQL 8.0"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3568599041/upgrading-to-mysql-8-0"
version: 16
updated: "2024-08-26T02:01:38.695Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub_Sub"
download_date: "2026-10-20T21:02:06.876Z"
---

# Upgrading to MySQL 8.0

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3568599041)  
> **Versión del documento:** v16 (2024-08-26T02:01:38.695Z) | **Autor/Editor:** Mohankumar Thangavel

---

With Bahmni Standard 1.0 release, Bahmni will be shipping with MySQL 8.0 as the default database version for OpenMRS service and reports service. Refer to this [Jira EPIC](https://bahmni.atlassian.net/browse/BAH-3901) for more details.
 
The below migration steps involves upgrading the database engine. So we highly recommend to try out these steps on a Test or Pre-Prod environment before running through these on production database.

Make sure to have a full backup of Bahmni before following the below steps. 

There are different scenarios on how your instance of Bahmni would be configured with a database instance. If you are using the database server on managed service provided by cloud infrastructure (Ex. RDS on AWS) then please consult the provider’s documentation and migration steps for your database server. The below steps covers when you are running database server as a docker container.

**On this page:**
 

## Migrating from Bahmni on Cent-OS:

If your Bahmni instance is running on CentOS with Bahmni 0.93 or Bahmni 0.92, we recommend migrating to Bahmni on Docker. Following the steps on this [documentation](/wiki/spaces/BAH/pages/3169517585/Upgrading+Bahmni+on+CentOS+to+Bahmni+Standard+or+Lite+on+Docker) will help you migrate your entire Bahmni instance to Docker. The process involves taking the database backup and file artifacts backup and restoring it on a MySQL 8.0 instance.

## Migrating from MySQL 5.6 or MySQL 5.7 already running on Docker:

If your instance of Bahmni is already running on docker with the database services part of docker compose, then you can make an upgrade on the existing database instance without the need for backup and restore on a new instance. This would require a downtime to Bahmni application, so requesting to plan accordingly.

### Migrating from MySQL 5.6

Migration from MySQL 5.6 to MySQL 8.0 involves a two step process. First you need to upgrade to MySQL 5.7 and then to MySQL 8.0. If your database instances are already running with MySQL 5.7 skip the steps below and move to [Migrating from 5.7 section](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/edit-v2/3568599041?draftShareId=a62abd59-467b-4d03-a1b7-eea31f0ea075#Migrating-from-MySQL-5.7%3A).

#### Step 1: Stopping the services connected to OpenMRS Database

The first step involves stopping the services having database connection to OpenMRS database. Run the below commands from bahmni-docker/bahmni-lite or bahmni-docker/bahmni-standard subdirectory. Pass the `--env-file` option to the below docker compose commands, if you have previously used a different env file other than .env for your implementation.

```
docker compose stop openmrs
docker compose stop openmrsdb
docker compose stop reports
docker compose stop reportsdb
```

#### Step 2: Updating the image tags for services and starting the database

Now open your implementation specific .env file with a text editor such as nano or vi. Update the values of the variables as mentioned below.

```
OPENMRS_DB_IMAGE_NAME=mysql:5.7
REPORTS_DB_IMAGE_NAME=mysql:5.7
```

Now run the below commands to bring up both the database services from MySQL 5.6 to MySQL 5.7.

```
docker compose up -d openmrsdb
docker compose up -d reportsdb
```

#### Step 3: Performing mysql_upgrade 

The next step is to trigger the mysql_upgrade client command inside the database container’s shell. This command will migrate the MySQL system schema to MySQL 5.7 from MySQL 5.6

Exec into each of openmrsdb container and reportsdb container by running the command below.

```
docker compose exec -it openmrsdb bash
```

You will get a bash shell, within the shell run the command below

```
mysql_upgrade -uroot -p${MYSQL_ROOT_PASSWORD}
```

Once the command completes successfully, then exit the container shell by running `exit` command. Now restart the service by running the below command

```
docker compose restart openmrsdb
```

Follow the above steps for `reportsdb` container as well.

#### Step 4: Starting up the application services

Now you can bring up the OpenMRS and Reports services up again by running the below command,

```
docker compose up -d openmrs
docker compose up -d reports
```

🎊 Now you have your Bahmni instance running with MySQL 5.7. We recommend validating the critical scenarios such as login, reports, verifying existing data before proceeding to upgrade to MySQL 8.0.

### Migrating from MySQL 5.7:

#### Step 1: Stopping the services connected to OpenMRS Database

The first step involves stopping the services having database connection to OpenMRS database. Run the below commands from bahmni-docker/bahmni-lite or bahmni-docker/bahmni-standard subdirectory. Pass the `--env-file` option to the below docker compose commands, if you have previously used a different env file other than .env for your implementation.

```
docker compose stop openmrs
docker compose stop openmrsdb
docker compose stop reports
docker compose stop reportsdb
```

#### Step 2: Updating the image tags for services and starting the database

Now open your implementation specific .env file with a text editor such as nano or vi. Update the values of the variables as mentioned below.

```
OPENMRS_DB_IMAGE_NAME=mysql:8.0
REPORTS_DB_IMAGE_NAME=mysql:8.0
```

Now run the below commands to bring up both the database services from MySQL 5.6 to MySQL 5.7.

```
docker compose up -d openmrsdb
docker compose up -d reportsdb
```

#### Step 3: Updating the default authentication_plugin:

One of the significant change in MySQL 8.0 is the use of `caching_sha2_password` as the default authentication plugin. This improves security and performance. Read more about it [here](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password).

Exec into the OpenMRS DB service by running the below command

```
docker compose exec -it openmrsdb bash
```

Now login to mysql as root user

```
mysql -uroot -p${MYSQL_ROOT_PASSWORD}
```

Update the default plugin to caching_sha2_password by running the below command. Make sure to update the values of OMRS_DB_USERNAME and OMRS_DB_PASSWORD from .env in the below command

```
ALTER USER ''@'%' IDENTIFIED WITH 'caching_sha2_password' BY '';

--> Example: ALTER USER 'openmrs-user'@'%' IDENTIFIED WITH 'caching_sha2_password' BY 'password';
```

Verify whether the plugin is updated by running 

```
select user,plugin from mysql.user;
```

Follow the same steps Reports Database as well for Reports-DB-User

## Upgrading RDS Instance from MySQL 5.7 to MySQL 8.0:

Bahmni Infra automation terraform scripts provision an AWS RDS MySQL instance. If your implementation uses deployment via terraform, then you need to update your fork of bahmni-infra with the below mentioned steps. 
 
We recommend applying the configuration first on a staging or pre-prod environment and then apply these on prod environment

The overall changes required for the upgrade in the terraform configuration can be seen [here](https://github.com/Bahmni/bahmni-infra/compare/26d4589e7c649e4b0edcf2ff09895f9005c434ad..ce8c17932a9337d0d20d65de1a579f9e6c0913e2?diff=split&w=1). You can either rebase your fork of [bahmni-infra](https://github.com/Bahmni/bahmni-infra) repository to pull in these changes or follow the commits step by step in the sequence mentioned below. Please do a `terraform plan` and validate the changes before running `terraform apply`

#### Step 1: Enable Major version upgrades in RDS

Terraform has an attribute for aws_db_instance resource to enable or disable major version upgrades. A new variable has been introduced in terraform configuration. Please refer [this commit](https://github.com/Bahmni/bahmni-infra/commit/d1c6cfcd3db0966432042b389bfb7e8619ca919e?diff=split&w=1) to add the flag.

#### Step 2: Adding new parameter group for MySQL 8 RDS Instance

A new custom parameter group needs to be created to be used for the upgraded RDS instance. Refer [this commit](https://github.com/Bahmni/bahmni-infra/commit/3ca2bc26b5873076c957bdf38a68e4a9fa302460) for the required code changes.

#### Step 3: Updating RDS version and parameter

This step will upgrade the RDS instance engine version to MySQL 8.0. This will cause downtime so, plan accordingly. 

- 
Update the value of `mysql_version` variable in your environment specific `.tfvars` file (Ex: nonprod.tfvars) to `8.0`. Refer this [commit](https://github.com/Bahmni/bahmni-infra/commit/26d4589e7c649e4b0edcf2ff09895f9005c434ad?diff=split&w=1).

- 
Update the mapped parameter group for RDS instance. Refer this [commit](https://github.com/Bahmni/bahmni-infra/commit/ce8c17932a9337d0d20d65de1a579f9e6c0913e2?diff=split&w=1).

## Impacts with the MySQL 8.0 upgrade

#### 1. Strict query validation

Starting MySQL 8.0, the [ONLY_FULL_GROUP_BY sql mode](https://dev.mysql.com/doc/refman/8.4/en/sql-mode.html#sqlmode_only_full_group_by) is enabled by default. This default setting may lead to the failure of certain queries related to patient queues and other reporting queries. As a temporary solution, the ONLY_FULL_GROUP_BY mode is disabled through an [environment variable](https://github.com/Bahmni/bahmni-docker/pull/87/files) in Bahmni. It is anticipated that this workaround may be eliminated in upcoming releases.

#### 2. Performance Impact in Ward List queries

When migrating to MySQL 8.0, it was noted that the query retrieving admitted patients in the ADT module was experiencing significant delays, leading to API requests timing out. To address this issue, an optimization strategy was implemented to cache certain constant values, effectively resolving the performance impact.

For this fix, a liquibase migration is added to [bahmni-core module](https://github.com/Bahmni/bahmni-core/commit/82ea8e8893010ce82dd0cf90df5653656fcb882c) which updates the query defined in `emrapi.sqlGet.wardsListDetails`. If your implementation has re-configured the query, we recommend refactoring your existing query to the use the cached variables and test for performance impacts.

#### 3. MySQL Stored Procedure Creation requires SUPER Privilege

With MySQL 8.0, binary logging is enabled. As a result, when a stored procedure or function needs to be created, MySQL requires SUPER privilege to be used. 

If you are manually creating a stored procedure, use the root user.

If application database user like `openmrs-user` is creating a procedure with liquibase, then temporarily enable trusting of function creators. This can be [enabled](https://dev.mysql.com/doc/refman/8.4/en/replication-options-binary-log.html#sysvar_log_bin_trust_function_creators) by running the below command in the MySQL shell openmrsdb container.

```
SET GLOBAL log_bin_trust_function_creators = 1;
```

Read more about this [here](https://dev.mysql.com/doc/refman/8.4/en/stored-programs-logging.html).
