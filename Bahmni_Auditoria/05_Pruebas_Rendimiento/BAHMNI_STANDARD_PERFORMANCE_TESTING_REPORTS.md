---
id: "3655991297"
title: "Bahmni Standard Performance Testing Reports"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3655991297/bahmni-standard-performance-testing-reports"
version: 10
updated: "2024-07-29T02:44:29.778Z"
author: "Mohankumar Thangavel"
category: "Pruebas_Rendimiento"
download_date: "2026-10-20T21:01:44.440Z"
---

# Bahmni Standard Performance Testing Reports

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3655991297)  
> **Versión del documento:** v10 (2024-07-29T02:44:29.778Z) | **Autor/Editor:** Mohankumar Thangavel

---

This page contains the performance reports that has been executed for testing Bahmni Standard. The tests are run against Bahmni Standard 1.0.0 Beta. The scenarios tested are same as [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3051683841).

## Configurations of the Bahmni environment under test:

```
Hardware Configuration:
    AWS EC2 m5.xlarge
    CPU: 4 vCPU
    RAM: 16 GB
    Storage: 100 GB
    OS: Ubuntu 22.04.2 LTS
Bahmni Installation Details:
    Bahmni Installation Method: Docker Compose
    No.of Running Containers: 21 (EMR, OpenELIS, Odoo, PACS, Agents for scraping metrics(node-exporter,cadvisor))
    Database Containers (all on the same node): OpenMRS DB (MySQL 8.0), OpenELIS DB (Postgres 9.6), Odoo DB (Postgres 16.1), PACS DB (Postgres 9.6)
Bahmni Metdata Details:
    Concept Dictionary: CIEL (v2023-12-15)
    Concept Count: 56884
    Concept Reference Terms: 170167
    Concept Reference Maps: 218243
```

## Configurations of the agent which executes the test suite:

```
AWS EC2 c5.xlarge
    CPU: 4 vCPU
    RAM: 16 GB
    Storage: 10 GB
    OS: Ubuntu 22.04.2 LTS
Execution Tools:
    Java 11 JDK
    Performance Suite: https://github.com/Bahmni/performance-test/tree/bahmni-standard-ciel
    Test Data Generator: https://github.com/Bahmni/bahmni-test-data-generator
    Initial Data Generated using generator: 99995 patients, 70931 visits, 70931 encounters, 425586 observations
```

The initial backup taken after generating the above test data is available here.

## 📗 Test 1  - 70 Concurrent Users 4 Hours

- 
**Duration**: 4 hours

- 
**Active Users: **70 users

- 
**Ramp Up**: 5 mins

- 
**Database pre-state**: 99995 patients, 70931 visits, 70931 encounters, 425586 observations

**Report Link:** [https://bahmni.github.io/performance-test/bahmnistandard-70users-5hours-20240726/index.html](https://bahmni.github.io/performance-test/bahmnistandard-70users-5hours-20240726/index.html) 

**Observations:**

- 
No.of Patient Created: 1730, No.of Visits created: 4991, No.of Encounters Created: 2040, No.of Observations Created: 12970

| ##### **Simulations** | ##### **Scenario** | ##### **Load share** | ##### **Patient Count** | ##### **Min Time (ms)** | ##### **95th Percentile (ms)** | ##### **99th Percentile (ms)** | ##### **Max Time (ms)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Frontdesk** 50% Traffic (35 Users) | **New** Patient Registration ** &rarr; ** Start OPD Visit | 40% | 1680 | 51 | 107 | 158 | 321 |
| Existing Patient Search using **ID** ** &rarr; ** Start OPD Visit | 30% | 1200 | 84 | 143 | 256 | 464 |  |
| Existing Patient Search using **Name** ** &rarr; ** Start OPD Visit | 20% | 1200 | 176 | 310 | 397 | 716 |  |
| Upload Patient Document | 10% | 360 | 72 | 127 | 217 | 399 |  |
| **Doctor** 50% Traffic (35 Users) | Doctor Consultation 1 Observation 1 Diagnosis 2 Lab Orders (1 Test, 1 Panel) 1 Radiology Order 1 Procedure Order 1 Medication | 100% | 1680 | 389 | 701 | 876 | 2015 |

 CPU, Memory, Network Performance Visualisation![](https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240726-061927.png?version=1&modificationDate=1721974774165&cacheVersion=1&api=v2)
CPU was at average of 35%, Network load was ~250KBps

## 📗 Test 2  - 70 Concurrent Users 8 Hours

- **Duration**: 8 hours

- 
**Active Users: **70 users

- 
**Ramp Up**: 5 mins

- 
**Database pre-state**: 101725 patients, 75922 visits, 72971 encounters, 438556 observations

**Report Link:** [https://bahmni.github.io/performance-test/bahmnistandard-70users-8hours-20240726/index.html](https://bahmni.github.io/performance-test/bahmnistandard-70users-8hours-20240726/index.html) 

**Observations:**

- 
No.of Patient Created: 3410, No.of Visits created: 9912, No.of Encounters Created: 4060, No.of Observations Created: 25296

- 
There were 20 encounter API call failure with 400 which due to the system trying to add the same drug order which is already active.

| ##### **Simulations** | ##### **Scenario** | ##### **Load share** | ##### **Patient Count** | ##### **Min Time (ms)** | ##### **95th Percentile (ms)** | ##### **99th Percentile (ms)** | ##### **Max Time (ms)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Frontdesk** 50% Traffic (35 Users) | **New** Patient Registration ** &rarr; ** Start OPD Visit | 40% | 3360 | 46 | 122 | 175 | 465 |
| Existing Patient Search using **ID** ** &rarr; ** Start OPD Visit | 30% | 2400 | 82 | 160 | 243 | 410 |  |
| Existing Patient Search using **Name** ** &rarr; ** Start OPD Visit | 20% | 2400 | 174 | 345 | 439 | 609 |  |
| Upload Patient Document | 10% | 720 | 70 | 102 | 160 | 569 |  |
| **Doctor** 50% Traffic (35 Users) | Doctor Consultation 1 Observation 1 Diagnosis 2 Lab Orders (1 Test, 1 Panel) 1 Radiology Order 1 Procedure Order 1 Medication | 100% | 3360 | 298 | 718 | 952 | 1684 |

 CPU, Memory, Network Performance Visualisation![](https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240726-161325.png?version=1&modificationDate=1722010413057&cacheVersion=1&api=v2)
CPU was at average of 35%, Network load was ~250KBps

## 📗 Test 3  - 120 Concurrent Users 8 Hours

- **Duration**: 8 hours

- 
**Active Users: **120 users

- 
**Ramp Up**: 5 mins

- 
**Database pre-state**: 105135 patients, 85834 visits, 77031 encounters, 463852 observations

**Report Link:** [https://bahmni.github.io/performance-test/bahmnistandard-120users-8hours-20240727](https://bahmni.github.io/performance-test/bahmnistandard-120users-8hours-20240727) 

**Observations:**

- 
No.of Patient Created: 5810, No.of Visits created: 17449, No.of Encounters Created: 7049, No.of Observations Created: 42969

- 
There were 151 encounter API call failure with 400 which due to the system trying to add the same drug order which is already active.

- 
**Note:** The 99th percentile of post encounter went above expected to 1257

| ##### **Simulations** | ##### **Scenario** | ##### **Load share** | ##### **Patient Count** | ##### **Min Time (ms)** | ##### **95th Percentile (ms)** | ##### **99th Percentile (ms)** | ##### **Max Time (ms)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Frontdesk** 50% Traffic (60 Users) | **New** Patient Registration ** &rarr; ** Start OPD Visit | 40% | 5760 | 48 | 154 | 254 | 701 |
| Existing Patient Search using **ID** ** &rarr; ** Start OPD Visit | 30% | 4320 | 83 | 217 | 400 | 917 |  |
| Existing Patient Search using **Name** ** &rarr; ** Start OPD Visit | 20% | 4320 | 178 | 417 | 614 | 1128 |  |
| Upload Patient Document | 10% | 1440 | 70 | 102 | 160 | 569 |  |
| **Doctor** 50% Traffic (60 Users) | Doctor Consultation 1 Observation 1 Diagnosis 2 Lab Orders (1 Test, 1 Panel) 1 Radiology Order 1 Procedure Order 1 Medication | 100% | 5760 | 286 | 867 | 1257 | 2641 |

 CPU, Memory, Network Performance Visualisation
Note: The CPU usage load was high above ~60% compared to 70 users run which was at ~35%
![](https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240727-024740.png?version=1&modificationDate=1722048469604&cacheVersion=1&api=v2)
CPU was at average of 63%, Network load was ~500KBps

## 📗 Test 4  - 120 Concurrent Users 24 Hours

- 
**Duration**: 24 hours

- 
**Active Users: **120 users

- 
**Ramp Up**: 5 mins

- 
**Database pre-state**: 110945 patients, 103283 visits, 84080 encounters, 506821 observations

**Report Link:** [https://bahmni.github.io/performance-test/bahmnistandard-120users-24hours-20240727](https://bahmni.github.io/performance-test/bahmnistandard-120users-24hours-20240727)  

**Observations:**

- 
No.of Patient Created: 17336, No.of Visits created: 51462, No.of Encounters Created: 20716, No.of Observations Created: 124238

- 
There were 884 encounter API call failure with 400 which due to the system trying to add the same drug order which is already active.

- 
There are 3(delete session, getAllObservation Templates, getActive visits) requests failed with a 502 status

- 
**Note:** 

The 99th percentile of post encounter went above expected(1000ms) to 1413

- 
The max time of post encounter went above expected(3000ms) to 4015

- 
The 95th percentile of emrapi.sqlSearch.activePatientsByLocation went above expected(1000ms) to 1056

- 
The 99th percentile of emrapi.sqlSearch.activePatientsByLocation went above expected(1000ms) to 1545

- 
The max of emrapi.sqlSearch.activePatientsByLocation went above expected(3000ms) to 4056

| ##### **Simulations** | ##### **Scenario** | ##### **Load share** | ##### **Patient Count** | ##### **Min Time (ms)** | ##### **95th Percentile (ms)** | ##### **99th Percentile (ms)** | ##### **Max Time (ms)** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Frontdesk** 50% Traffic (60 Users) | **New** Patient Registration ** &rarr; ** Start OPD Visit | 40% | 17280 | 48 | 179 | 271 | 1688 |
| Existing Patient Search using **ID** ** &rarr; ** Start OPD Visit | 30% | 12960 | 83 | 272 | 452 | 1661 |  |
| Existing Patient Search using **Name** ** &rarr; ** Start OPD Visit | 20% | 12960 | 175 | 532 | 748 | 2257 |  |
| Upload Patient Document | 10% | 4320 | 69 | 226 | 366 | 1827 |  |
| **Doctor** 50% Traffic (60 Users) | Doctor Consultation 1 Observation 1 Diagnosis 2 Lab Orders (1 Test, 1 Panel) 1 Radiology Order 1 Procedure Order 1 Medication | 100% | 17280 | 275 | 948 | 1413 | 4015 |

 CPU, Memory, Network Performance Visualisation![](https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240729-011957.png?version=1&modificationDate=1722216009368&cacheVersion=1&api=v2)
CPU was at average of 63%, Network load was ~500KBps

## 📗 Test 5  - 200 Concurrent Users 8 Hours

- 
**Duration**: 8 hours

- 
**Active Users: **200 users

- 
**Ramp Up**: 5 mins

- 
**Database pre-state**: 128281 patients, 154745 visits, 104796 encounters, 631059 observations

**Report Link:** [https://bahmni.github.io/performance-test/bahmnistandard-200users-8hours-20240728](https://bahmni.github.io/performance-test/bahmnistandard-200users-8hours-20240728)  

**Observations:**

- 
No.of Patient Created: 9110, No.of Visits created: 28142, No.of Encounters Created: 10738, No.of Observations Created: 64412

- 
There were 1262 encounter API call failure with 400 which due to the system trying to add the same drug order which is already active.

- 
There are 3(find drug, get login locations, find encounter, start visit, search by ID) requests failed with a 502 status

- 
**Note:** APIs which exceeded expected results

| Metric | Expected (ms) | Actual (ms) |  |
| --- | --- | --- | --- |
| 1 | 95th percentile of post encounter | 1000 | 2481 |
| 2 | 99th percentile of post encounter | 1000 | 3772 |
| 3 | Max time of post encounter | 3000 | 6005 |
| 4 | 95th percentile of emrapi.sqlSearch.activePatientsByLocation | 1000 | 1209 |
| 5 | 99th percentile of emrapi.sqlSearch.activePatientsByLocation | 1000 | 1921 |
| 6 | Max of emrapi.sqlSearch.activePatientsByLocation | 3000 | 3538 |
| 7 | 99th percentile of emrapi.sqlSearch.activePatientsByProvider | 1000 | 1032 |
| 8 | 99th percentile of emrapi.sqlSearch.activePatients | 3000 | 1098 |
| 9 | 95th percentile of Search Patient By Name | 1000 | 1166 |
| 10 | 99th percentile of Search Patient By Name | 1000 | 1686 |
| 11 | Max of Search Patient By Name | 3000 | 3107 |
| 12 | 99th percentile of Search Patient By Identifier | 1000 | 1078 |

 CPU, Memory, Network Performance Visualisation![](https://bahmni.atlassian.net/wiki/download/attachments/3655991297/image-20240729-012222.png?version=1&modificationDate=1722216151411&cacheVersion=1&api=v2)
CPU was at average of 100%, Network load was ~1.1MBps

**Final Database State: 137931 patients, 182887 visits, 115534 encounters, 695471 observations. The backup of the all the subsystems is available here.**
