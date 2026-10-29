---
id: "3125870734"
title: "Bahmni-Mart Configuration (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3125870734/bahmni-mart-configuration-docker"
version: 6
updated: "2024-01-19T05:35:35.578Z"
author: "Rahul Ramesh"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:02.902Z"
---

# Bahmni-Mart Configuration (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3125870734)  
> **Versión del documento:** v6 (2024-01-19T05:35:35.578Z) | **Autor/Editor:** Rahul Ramesh

---

Bahmni-mart is a Standalone Batch Application based on spring-batch. Bahmni-mart aims to simplify reporting for Bahmni by pulling data from OpenMRS and moving it into Mart DB (postgres).  To Read more [click here](#). You can use the packaged opensource metabase to connect to MartDB and create reports/visualisation.
 
Short Demo video on Youtube of Bahmni Metabase/Mart: [https://www.youtube.com/watch?v=IHZR-W7EdNg](https://www.youtube.com/watch?v=IHZR-W7EdNg) 

## Environment Configurations:

| Variable Name | Description |
| --- | --- |
| BAHMNI_MART_IMAGE_TAG | Image version to be used for Bahmni-mart. A list of tags can be found at [bahmni/bahmni-mart image - Tags](https://hub.docker.com/r/metabase/metabase/tags). |
| BAHMNI_MART_DB_IMAGE_TAG | Image version to be used for Postgres image. A list of tags can be found at [postgres - Tags](https://hub.docker.com/_/postgres/tags). |
| CRON_TIME | Scheduler frequency to run Bahmni-mart application |
| MART_DB_HOST | Host name of the Bahmni-mart Database server. |
| MART_DB_NAME | Database name for Bahmni-mart application |
| MART_DB_USERNAME | Username of the Bahmni-mart database. |
| MART_DB_PASSWORD | Password of the Bahmni-mart database. |
| OPENMRS_DB_HOST | Host name of the OpenMRS Database server. |
| OPENMRS_DB_NAME | Database name for OpenMRS application |
| OPENMRS_DB_USERNAME | Username of the OpenMRS Database |
| OPENMRS_DB_PASSWORD | Password of the OpenMRS Database. |

# **Running Bahmni-Mart using Docker**

Run the profile  bahmni-mart using the command :-

```
docker compose --profile bahmni-mart up -d
```

To check the logs, follow the steps :-

```
# Get the container ID of the container
docker ps
# View logs of container
docker logs -f 
```

To stop running docker services

```
docker compose --profile bahmni-mart down
```

 
It can take about 15 mins for mart to fully initialise and create tables. 
 Sample Log for mart service
 

```
bahmni-lite-mart-1  | Setting Cron to Run Jar
bahmni-lite-mart-1  | Running Cron Job
bahmni-lite-mart-1  | Setting Cron to Run Jar
bahmni-lite-mart-1  | Running Cron Job
bahmni-lite-mart-1  |
bahmni-lite-mart-1  |   .   ____          _            __ _ _
bahmni-lite-mart-1  |  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
bahmni-lite-mart-1  | ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
bahmni-lite-mart-1  |  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
bahmni-lite-mart-1  |   '  |____| .__|_| |_|_| |_\__, | / / / /
bahmni-lite-mart-1  |  =========|_|==============|___/=/_/_/_/
bahmni-lite-mart-1  |  :: Spring Boot ::       (v1.5.22.RELEASE)
bahmni-lite-mart-1  |
bahmni-lite-mart-1  | 2023-01-17 14:15:02.808  INFO 12 --- [           main] org.bahmni.mart.Application              : Starting Application on 30fb2cde75c3 with PID 12 (/bahmni-mart/app.jar started by root in /root)
bahmni-lite-mart-1  | 2023-01-17 14:15:02.812  INFO 12 --- [           main] org.bahmni.mart.Application              : No active profile set, falling back to default profiles: default
bahmni-lite-mart-1  | 2023-01-17 14:15:02.911  INFO 12 --- [           main] s.c.a.AnnotationConfigApplicationContext : Refreshing org.springframework.context.annotation.AnnotationConfigApplicationContext@65ae6ba4: startup date [Tue Jan 17 14:15:02 UTC 2023]; root of context hierarchy
bahmni-lite-mart-1  | 2023-01-17 14:15:03.997  INFO 12 --- [           main] trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.cloud.task.batch.listener.BatchEventAutoConfiguration' of type [org.springframework.cloud.task.batch.listener.BatchEventAutoConfiguration$$EnhancerBySpringCGLIB$$6560b81e] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
bahmni-lite-mart-1  | 2023-01-17 14:15:04.006  INFO 12 --- [           main] trationDelegate$BeanPostProcessorChecker : Bean 'org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration' of type [org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration$$EnhancerBySpringCGLIB$$979b028f] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
bahmni-lite-mart-1  | 2023-01-17 14:15:06.015  INFO 12 --- [           main] o.s.b.c.r.s.JobRepositoryFactoryBean     : No database type set, using meta data indicating: POSTGRES
bahmni-lite-mart-1  | 2023-01-17 14:15:06.237  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : No TaskExecutor has been set, defaulting to synchronous executor.
bahmni-lite-mart-1  | 2023-01-17 14:15:06.274  INFO 12 --- [           main] o.s.jdbc.datasource.init.ScriptUtils     : Executing SQL script from class path resource [org/springframework/batch/core/schema-postgresql.sql]
bahmni-lite-mart-1  | 2023-01-17 14:15:06.344  INFO 12 --- [           main] o.s.jdbc.datasource.init.ScriptUtils     : Executed SQL script from class path resource [org/springframework/batch/core/schema-postgresql.sql] in 69 ms.
bahmni-lite-mart-1  | 2023-01-17 14:15:06.384  INFO 12 --- [           main] o.s.jdbc.datasource.init.ScriptUtils     : Executing SQL script from class path resource [org/springframework/cloud/task/schema-postgresql.sql]
bahmni-lite-mart-1  | 2023-01-17 14:15:06.403  INFO 12 --- [           main] o.s.jdbc.datasource.init.ScriptUtils     : Executed SQL script from class path resource [org/springframework/cloud/task/schema-postgresql.sql] in 19 ms.
bahmni-lite-mart-1  | 2023-01-17 14:15:07.563  INFO 12 --- [           main] liquibase.database                       : Set default schema name to public
bahmni-lite-mart-1  | 2023-01-17 14:15:07.748  INFO 12 --- [           main] liquibase.lockservice                    : Successfully acquired change log lock
bahmni-lite-mart-1  | 2023-01-17 14:15:08.289  INFO 12 --- [           main] liquibase.changelog                      : Creating database history table with name: public.databasechangelog
bahmni-lite-mart-1  | 2023-01-17 14:15:08.303  INFO 12 --- [           main] liquibase.changelog                      : Reading from public.databasechangelog
bahmni-lite-mart-1  | Running Changeset: file:/bahmni-mart/conf/liquibase.xml::290620181627::Prasanna, Raju
bahmni-lite-mart-1  | 2023-01-17 14:15:08.472  INFO 12 --- [           main] liquibase.changelog                      : Custom SQL executed
bahmni-lite-mart-1  | 2023-01-17 14:15:08.475  INFO 12 --- [           main] liquibase.changelog                      : ChangeSet file:/bahmni-mart/conf/liquibase.xml::290620181627::Prasanna, Raju ran successfully in 66ms
bahmni-lite-mart-1  | 2023-01-17 14:15:08.489  INFO 12 --- [           main] liquibase.lockservice                    : Successfully released change log lock
bahmni-lite-mart-1  | 2023-01-17 14:15:08.535  INFO 12 --- [           main] o.s.j.e.a.AnnotationMBeanExporter        : Registering beans for JMX exposure on startup
bahmni-lite-mart-1  | 2023-01-17 14:15:08.549  INFO 12 --- [           main] o.s.c.support.DefaultLifecycleProcessor  : Starting beans in phase 0
bahmni-lite-mart-1  | 2023-01-17 14:15:08.636  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : programenrollment event category configured in Patient program data job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.638  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : programenrollment event category configured in Program Attributes job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.639  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : programenrollment event category configured in Patient State job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.643  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : appointments event category configured in Patient appointment job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.647  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : encounter event category configured in Bed Patient Assignment job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.648  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : bedtagmap event category configured in Bed Tags job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.650  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : surgicalblock event category configured in Surgical Block job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.652  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : surgicalappointment event category configured in Surgical Appointment job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:08.655  WARN 12 --- [           main] org.bahmni.mart.helper.MarkerManager     : surgicalappointment event category configured in Surgical Appointment Attributes job config is not present in event_records table in openmrs database
bahmni-lite-mart-1  | 2023-01-17 14:15:28.211  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Bacteriology Data]] launched with the following parameters: [{Bacteriology Data=1673964928163}]
bahmni-lite-mart-1  | 2023-01-17 14:15:28.230  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:28.267  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-1 BACTERIOLOGY CONCEPT SET]
bahmni-lite-mart-1  | 2023-01-17 14:15:28.295  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Bacteriology Data]] completed with the following parameters: [{Bacteriology Data=1673964928163}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:28.303  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=MetaData Dictionary]] launched with the following parameters: [{MetaData Dictionary=1673964928295}]
bahmni-lite-mart-1  | 2023-01-17 14:15:28.314  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:28.348  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Meta Data Export Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.222  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=MetaData Dictionary]] completed with the following parameters: [{MetaData Dictionary=1673964928295}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.235  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Obs Data]] launched with the following parameters: [{Obs Data=1673964929224}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.249  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.264  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Obs Data]] completed with the following parameters: [{Obs Data=1673964929224}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.271  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Form2 Obs Data]] launched with the following parameters: [{Form2 Obs Data=1673964929264}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.279  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.294  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-2 Hypertension Progress]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.312  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-3 Malaria]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.325  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-4 Diabetes Intake]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.338  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-5 Diabetes Progress]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.349  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-6 History and Examination]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.361  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-7 Second Vitals]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.379  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-8 Registration Details]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.397  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-9 Death Note]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.412  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-10 Hypertension Intake]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.425  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-11 Obstetrics and Gynaecology]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.435  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-12 Vitals]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.450  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-13 Follow Up]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.462  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-14 Chief Complaint Data]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.477  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-15 Patient Video]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.488  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Form2 Obs Data]] completed with the following parameters: [{Form2 Obs Data=1673964929264}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.493  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Registration Second Page]] launched with the following parameters: [{Registration Second Page=1673964929488}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.500  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.507  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Registration Second Page]] completed with the following parameters: [{Registration Second Page=1673964929488}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.511  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Disposition Data]] launched with the following parameters: [{Disposition Data=1673964929507}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.520  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.529  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-16 Disposition Set]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.540  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Disposition Data]] completed with the following parameters: [{Disposition Data=1673964929507}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.546  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program data]] launched with the following parameters: [{Program data=1673964929540}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.565  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Program data Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.573  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program data]] completed with the following parameters: [{Program data=1673964929540}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.577  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program outcomes]] launched with the following parameters: [{Program outcomes=1673964929573}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.595  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Program outcomes Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.604  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program outcomes]] completed with the following parameters: [{Program outcomes=1673964929573}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.607  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient program data]] launched with the following parameters: [{Patient program data=1673964929604}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.623  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient program data Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.632  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient program data]] completed with the following parameters: [{Patient program data=1673964929604}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.636  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program Workflow]] launched with the following parameters: [{Program Workflow=1673964929633}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.652  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Program Workflow Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.660  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program Workflow]] completed with the following parameters: [{Program Workflow=1673964929633}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.664  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program Workflow States]] launched with the following parameters: [{Program Workflow States=1673964929660}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.680  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Program Workflow States Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.688  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program Workflow States]] completed with the following parameters: [{Program Workflow States=1673964929660}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.692  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program Attributes]] launched with the following parameters: [{Program Attributes=1673964929688}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.706  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Program Attributes Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.715  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Program Attributes]] completed with the following parameters: [{Program Attributes=1673964929688}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.719  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient State]] launched with the following parameters: [{Patient State=1673964929715}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.735  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient State Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.743  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient State]] completed with the following parameters: [{Patient State=1673964929715}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.747  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient allergy status]] launched with the following parameters: [{Patient allergy status=1673964929743}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.762  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient allergy status Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.773  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient allergy status]] completed with the following parameters: [{Patient allergy status=1673964929743}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.777  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient identification]] launched with the following parameters: [{Patient identification=1673964929773}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.794  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient identification Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.806  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient identification]] completed with the following parameters: [{Patient identification=1673964929773}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.811  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient appointment]] launched with the following parameters: [{Patient appointment=1673964929806}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.833  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient appointment Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.841  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient appointment]] completed with the following parameters: [{Patient appointment=1673964929806}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.846  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Appointment service]] launched with the following parameters: [{Appointment service=1673964929841}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.863  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Appointment service Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.876  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Appointment service]] completed with the following parameters: [{Appointment service=1673964929841}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.880  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Appointment service availability]] launched with the following parameters: [{Appointment service availability=1673964929876}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.899  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Appointment service availability Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.911  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Appointment service availability]] completed with the following parameters: [{Appointment service availability=1673964929876}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.916  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Appointment speciality]] launched with the following parameters: [{Appointment speciality=1673964929912}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.933  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Appointment speciality Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.946  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Appointment speciality]] completed with the following parameters: [{Appointment speciality=1673964929912}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.952  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Bed Patient Assignment]] launched with the following parameters: [{Bed Patient Assignment=1673964929947}]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.972  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Bed Patient Assignment Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.984  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Bed Patient Assignment]] completed with the following parameters: [{Bed Patient Assignment=1673964929947}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:29.990  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Bed Tags]] launched with the following parameters: [{Bed Tags=1673964929985}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.014  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Bed Tags Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.027  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Bed Tags]] completed with the following parameters: [{Bed Tags=1673964929985}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.034  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Current Bed Details]] launched with the following parameters: [{Current Bed Details=1673964930028}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.054  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Current Bed Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.064  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Current Bed Details]] completed with the following parameters: [{Current Bed Details=1673964930028}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.070  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Locations]] launched with the following parameters: [{Locations=1673964930065}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.091  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Locations Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.107  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Locations]] completed with the following parameters: [{Locations=1673964930065}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.114  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Location Tag Map]] launched with the following parameters: [{Location Tag Map=1673964930107}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.132  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Location Tag Map Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.146  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Location Tag Map]] completed with the following parameters: [{Location Tag Map=1673964930107}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.151  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Location Attribute Details]] launched with the following parameters: [{Location Attribute Details=1673964930147}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.171  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Location Attribute Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.183  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Location Attribute Details]] completed with the following parameters: [{Location Attribute Details=1673964930147}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.189  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Block]] launched with the following parameters: [{Surgical Block=1673964930184}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.213  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Surgical Block Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.227  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Block]] completed with the following parameters: [{Surgical Block=1673964930184}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.231  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Appointment]] launched with the following parameters: [{Surgical Appointment=1673964930227}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.246  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Surgical Appointment Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.264  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Appointment]] completed with the following parameters: [{Surgical Appointment=1673964930227}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.270  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Appointment Attribute Type Details]] launched with the following parameters: [{Surgical Appointment Attribute Type Details=1673964930264}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.291  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Surgical Appointment Attribute Type Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.306  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Appointment Attribute Type Details]] completed with the following parameters: [{Surgical Appointment Attribute Type Details=1673964930264}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.313  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Appointment Attributes]] launched with the following parameters: [{Surgical Appointment Attributes=1673964930307}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.334  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Surgical Appointment Attributes Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.360  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Surgical Appointment Attributes]] completed with the following parameters: [{Surgical Appointment Attributes=1673964930307}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.366  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person details]] launched with the following parameters: [{Person details=1673964930360}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.390  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Person details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.418  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person details]] completed with the following parameters: [{Person details=1673964930360}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.423  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person address]] launched with the following parameters: [{Person address=1673964930418}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.442  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Person address Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.456  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person address]] completed with the following parameters: [{Person address=1673964930418}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.466  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person Attribute Info]] launched with the following parameters: [{Person Attribute Info=1673964930456}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.482  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Person Attribute Info Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.492  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person Attribute Info]] completed with the following parameters: [{Person Attribute Info=1673964930456}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.496  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Address hierarchy levels]] launched with the following parameters: [{Address hierarchy levels=1673964930492}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.517  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Address hierarchy levels Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.541  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Address hierarchy levels]] completed with the following parameters: [{Address hierarchy levels=1673964930492}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.547  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person Attributes]] launched with the following parameters: [{Person Attributes=1673964930541}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.567  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Person Attributes Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.579  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Person Attributes]] completed with the following parameters: [{Person Attributes=1673964930541}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.584  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Providers]] launched with the following parameters: [{Providers=1673964930580}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.600  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Providers Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.613  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Providers]] completed with the following parameters: [{Providers=1673964930580}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.618  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Provider Attribute Details]] launched with the following parameters: [{Provider Attribute Details=1673964930613}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.643  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Provider Attribute Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.664  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Provider Attribute Details]] completed with the following parameters: [{Provider Attribute Details=1673964930613}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.678  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Provider Attributes]] launched with the following parameters: [{Provider Attributes=1673964930664}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.696  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Provider Attributes Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.714  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Provider Attributes]] completed with the following parameters: [{Provider Attributes=1673964930664}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.719  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient Visit Details]] launched with the following parameters: [{Patient Visit Details=1673964930714}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.736  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient Visit Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.745  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient Visit Details]] completed with the following parameters: [{Patient Visit Details=1673964930714}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.749  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient Encounter Details]] launched with the following parameters: [{Patient Encounter Details=1673964930745}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.763  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Patient Encounter Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.776  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Patient Encounter Details]] completed with the following parameters: [{Patient Encounter Details=1673964930745}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.781  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Visit Attribute Details]] launched with the following parameters: [{Visit Attribute Details=1673964930776}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.800  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Visit Attribute Details Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.811  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Visit Attribute Details]] completed with the following parameters: [{Visit Attribute Details=1673964930776}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.816  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Visit Attributes]] launched with the following parameters: [{Visit Attributes=1673964930811}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.834  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Visit Attributes Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.846  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Visit Attributes]] completed with the following parameters: [{Visit Attributes=1673964930811}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.849  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Medication Data]] launched with the following parameters: [{Medication Data=1673964930846}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.866  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Medication Data Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.879  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Medication Data]] completed with the following parameters: [{Medication Data=1673964930846}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.886  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Orders Data]] launched with the following parameters: [{Orders Data=1673964930880}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.890  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.900  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Lab Samples]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.915  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Radiology Orders]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.929  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Orders Data]] completed with the following parameters: [{Orders Data=1673964930880}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.934  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Diagnoses Data]] launched with the following parameters: [{Diagnoses Data=1673964930930}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.940  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Dummy Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.952  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Insertion Step-17 Visit Diagnoses]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.967  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Diagnoses Data]] completed with the following parameters: [{Diagnoses Data=1673964930930}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.973  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Conditions]] launched with the following parameters: [{Conditions=1673964930968}]
bahmni-lite-mart-1  | 2023-01-17 14:15:30.992  INFO 12 --- [           main] o.s.batch.core.job.SimpleStepHandler     : Executing step: [Conditions Insertion Step]
bahmni-lite-mart-1  | 2023-01-17 14:15:31.008  INFO 12 --- [           main] o.s.b.c.l.support.SimpleJobLauncher      : Job: [FlowJob: [name=Conditions]] completed with the following parameters: [{Conditions=1673964930968}] and the following status: [COMPLETED]
bahmni-lite-mart-1  | 2023-01-17 14:15:31.010  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the procedure 'Discharge Date Procedure'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.014  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the procedure 'Age Group Procedure'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.034  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_program_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.042  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_program_state_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.047  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_visits_encounters_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.050  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'appointment_admin_panel_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.052  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_details_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.055  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_information_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.058  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'bed_management_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.062  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'bed_management_locations_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.065  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_bed_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.068  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_operation_theater_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.074  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_appointment_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.078  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_program_medication_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.082  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_diagnosis_condition_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.085  INFO 12 --- [           main] o.bahmni.mart.config.view.ViewExecutor   : Executing the view 'patient_bed_tags_history_view'.
bahmni-lite-mart-1  | 2023-01-17 14:15:31.089  INFO 12 --- [           main] o.s.b.a.b.JobLauncherCommandLineRunner   : Running default command line with: [--spring.config.location=/bahmni-mart/application.properties]
bahmni-lite-mart-1  | 2023-01-17 14:15:31.095  INFO 12 --- [           main] s.c.a.AnnotationConfigApplicationContext : Closing org.springframework.context.annotation.AnnotationConfigApplicationContext@65ae6ba4: startup date [Tue Jan 17 14:15:02 UTC 2023]; root of context hierarchy
bahmni-lite-mart-1  | 2023-01-17 14:15:31.096  INFO 12 --- [           main] o.s.c.support.DefaultLifecycleProcessor  : Stopping beans in phase 0
bahmni-lite-mart-1  | 2023-01-17 14:15:31.097  INFO 12 --- [           main] o.s.j.e.a.AnnotationMBeanExporter        : Unregistering JMX-exposed beans on shutdown
bahmni-lite-mart-1  | 2023-01-17 14:15:31.123  INFO 12 --- [           main] org.bahmni.mart.Application              : Started Application in 28.829871564 seconds (JVM running for 29.872)
```

 
**Caution**

As `openmrsdb` version is different in both bahmni-standard and bahmni-lite docker configuration. Specific dependent services must be concurrently brought up with bahmni-mart, as these services have liquibase changes which update openmrsdb with different data sets essential for the seamless execution of bahmni-mart jobs.

- 
**With bahmni-standard docker**: To run all jobs in bahmni-mart successfully, openmrs service should be up.

- 
**With bahmni-lite docker**: openmrs and reports service is required. `reports` service creates `concept_reference_term_map_view` in openmrs db. This view is pivotal for numerous queries in bahmni-mart.

 
If there's an intention to eliminate the dependency on the reports service, then similar liquibase needs to be introduced in bahmni mart. 

 
**Running Bahmni on Docker**
