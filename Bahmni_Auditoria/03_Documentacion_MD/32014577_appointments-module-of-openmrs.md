---
id: "32014577"
title: "Appointments Module of OpenMRS"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014577/appointments-module-of-openmrs"
version: 35
updated: "2017-12-04T12:42:09.109Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:22.364Z"
---

# Appointments Module of OpenMRS

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014577)  
> **Versión del documento:** v35 (2017-12-04T12:42:09.109Z) | **Autor/Editor:** Sruti Sridhar

---

## Purpose and Benefits
 
This is documentation for Appointment Module of OpenMRS. This is no longer supported and is not part of the standard Bahmni distribution. You can find the details of the new Bahmni Appointment Module feature [here](/wiki/spaces/BAH/pages/117677537/Appointments+Scheduling+Module).

KNOWN ISSUE
 
It seems Appointment Module is not running on Bahmni v0.88 due to an omod incompatibility. The following discussion shows how a community member has been able to make it work for them. Please see: [https://talk.openmrs.org/t/appointments-module-with-bahmni-0-88/10556/4](https://talk.openmrs.org/t/appointments-module-with-bahmni-0-88/10556/4)

Tip
 
Appointment Module is not working with demo database for Bahmni v0.82 because of the lack of privileges to 'openmrs-user&rsquo;. Please run the below command from mysql prompt to Grant the privileges to the user. 

```
GRANT ALL PRIVILEGES ON openmrs.* TO 'openmrs-user'@'%' WITH GRANT OPTION;
```

And add the below specified Appointment Module omod versions.

- coreapps-1.9.omod
- 
htmlformentry-3.2.omod

- htmlformentryui-1.4.omod
- htmlformentry19ext-1.7.omod
- appui-1.5.1.omod
- appointmentschedulingui-1.3.omod
- appointmentscheduling-1.4.omod
- reporting-0.9.9.omod
- reportingrest-1.6.omod

Appointments module provides the ability to give appointments to patients and then manage their workflow through the clinic.In simple terms, the module allows implementations to do the following:

- 
Create a schedule of when providers are available to see patients

- 
Schedule appointments for patients based on provider schedule

- 
Manage the patient queue through the clinic when the patients arrive for their appointments.

## Steps:

### 1. Add &lsquo;omod&rsquo; files required for 'Appointments module' to OpenMRS

Download and add the following **omod** files in **/opt/openmrs/modules** and restart OpenMRS.

- 
**Core Apps** module - [https://modules.openmrs.org/#/show/177/core-apps-module](https://modules.openmrs.org/#/show/177/core-apps-module)

- 
**HTML Form Entry** modules:

- 
[https://modules.openmrs.org/#/show/58/htmlformentry](https://modules.openmrs.org/#/show/58/htmlformentry)

- 
[https://modules.openmrs.org/#/show/60/htmlformentryui](https://modules.openmrs.org/#/show/60/htmlformentryui)

- 
[https://modules.openmrs.org/#/show/59/htmlformentry19ext](https://modules.openmrs.org/#/show/59/htmlformentry19ext)

- 
**App UI** module - [https://modules.openmrs.org/#/show/8/appui](https://modules.openmrs.org/#/show/8/appui)

- 
**Appointment Scheduling UI** module - [https://modules.openmrs.org/#/show/200/appointment-scheduling-ui-module](https://modules.openmrs.org/#/show/200/appointment-scheduling-ui-module)

- 
**Appointment Scheduling **module - [https://modules.openmrs.org/#/show/7/appointmentscheduling](https://modules.openmrs.org/#/show/7/appointmentscheduling)

- 
**Reporting** module - [https://modules.openmrs.org/#/show/119/reporting](https://modules.openmrs.org/#/show/119/reporting)

**

- 
**Reporting Rest** module -   [https://modules.openmrs.org/#/show/121/reportingrest](https://modules.openmrs.org/#/show/121/reportingrest)

After adding the above **omods** in the modules folder, **&lsquo;****App: appointmentschedulingui.home&rsquo;** privilege and other privileges required for the appointments module are automatically added in OpenMRS.  

###  2. Assign Roles and Privileges

Create a new **Appointment** role in ***OpenMRS->Administration->Manage Roles***. Assign the appointments module related privileges to that role and then assign this new role to a user.

 Refer to this video for creating roles in OpenMRS [https://www.fuzemeeting.com/replay_meeting/0d7c6e99/7842034](https://www.fuzemeeting.com/replay_meeting/0d7c6e99/7842034)

### 3. Run SQL Queries

Run the below query for adding **Telephone Number **person attribute type. If **'Telephone Number'**** **person attribute type already exists, the query will throw an error. You can safely** ignore** it.

SQL Queries**

```
INSERT INTO person_attribute_type (name, description, format, searchable, creator, date_created, retired, sort_weight, uuid) VALUES ('Telephone Number', 'Telephone Number', 'java.lang.String', '0', 1, now(), 0, 3, uuid());
```

**Run the below query for adding **Unknown Patient **person attribute type. If **'Unknown Patient'**** **person attribute type already exists, the query will throw an error. You can safely** ignore** it.
SQL Queries**

```
INSERT INTO person_attribute_type (name, description, format, searchable, creator, date_created, retired, sort_weight, uuid) VALUES ('Unknown patient', 'Unknown Patient', 'java.lang.String', '0', 1, now(), 0, 3, uuid());
```

**

### 4. Add the Appointment module to the dashboard

The Appointment module can be added to Bahmni's Application Dashboard using the following configuration in "extension.json" (->/default-config/openmrs/apps/home/)
Appointment Module Configuration**

```
"bahmni.appointments": {
   "id": "bahmni.appointments",
   "extensionPointId": "org.bahmni.home.dashboard",
   "type": "link",
   "label": "Appointments",
   "url": "../../openmrs/appointmentschedulingui/home.page",
   "icon": "fa-user",
   "order": 11,
   "requiredPrivilege":  "App: appointmentschedulingui.home"
}
```

### 5. Automate the installation process

As mentioned in point 3, Appointment module needs some SQL files to be executed.  You can automate this process by adding liquibase migrations if required.  Please refer to [this example](https://gist.github.com/bharatak/26ac0cf19335499c579c9307cc42fd69) of one of the Bahmni implementations that uses liquibase migrations.

The Ansible installation supports adding additional OMODs like appointment module as part of the installation process.  Refer to [this](/wiki/spaces/BAH/pages/24969264/Appointments+Scheduling+UI+Module) for more information.

On this Page
 
 
  
 
**Related Links**

[(Discussion) Setting up openMRS Appointment Module in Bahmni](https://talk.openmrs.org/t/bahmni-appointments-module/4778)
