---
id: "144801828"
title: "User Roles and Privileges for Appointment Scheduling"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/144801828/user-roles-and-privileges-for-appointment-scheduling"
version: 6
updated: "2018-07-10T10:06:00.678Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:34.701Z"
---

# User Roles and Privileges for Appointment Scheduling

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/144801828)  
> **Versión del documento:** v6 (2018-07-10T10:06:00.678Z) | **Autor/Editor:** Sruti Sridhar

---

### User Roles

User can be assigned different privileges so as to provide different levels of access to the appointment scheduling module. For example, to view appointments or Create appointments or Create services.

There are three different user roles available in Appointment Scheduling App which are mentioned below,

- Read Only Access
- Manage Appointments
- Full Access

Users can have either a “Read only” role, “Manage Appointments” role and “Full Access” for the App.

**

**Read Only: **Can only view Manage Appointments Tab. No actions can be performed. Any effort for action will give error message.

**Manage Appointments: **This user will have access only to “Manage appointments.” Can perform all actions in the app. Admin tab will be hidden.

**Full Access: ** This user will have access to Both the tabs of “Manage appointments” and “Admin”. The user will be able to create, edit appointments and services.

### Privileges

Appointment scheduling module has a set of privileges associated with it.

- **app:appointments**: Privilege to view appointment scheduling app in the home page. This is the UI privilege that will allow user to view the appointment scheduling app in the home page. On entering the module, user with this privilege can view appointments summary, Manage Appointments Tab.
- **app:appointments:manageAppointmentsTab**: Privilege to view action buttons (Edit, Check-In, Missed, Complete, Cancel) against an appointment and ‘Add new appointment’ button in appointment scheduling module UI.
- **app:appointments:adminTab**: Privilege to view adminTab in appointment scheduling module UI.
- **View Appointments**: Privilege from the appointment scheduling omod required to fetch appointments from the database.
- **View Appointment Services**: Privilege from the appointment scheduling omod required to fetch appointment services from the database.
- **Manage Appointments**: Privilege from the appointments scheduling omod required to create/edit/cancel an appointment.
- **Manage Appointment Services**: Privilege from the appointment scheduling omod required to create/edit/cancel an appointment service.

**Read only **

For Read Only role to work as expected, the following privileges must be assigned to that role. If any of the privileges are not assigned, it can be assigned from Openmrs. Privileges required are: app:appointments, Get Admission Locations, Get Beds, Get Locations, Get Patient Identifiers, Get Patients, Get Providers, View Appointments, View Appointment Services

**Manage Appointments**

For Manage Appointments role to work as expected, the following privileges must be assigned to that role. If any of the privileges are not assigned, it can be assigned from Openmrs. Privileges required are: app:appointments, app:appointments:manageAppointmentsTab, Get Admission Locations, Get Beds, Get Locations, Get Patient Identifiers, Get Patients, Get Providers, View Appointments, View Appointment Services, Manage Appointments

**Full Access**

For Full Access role to work as expected, the following privileges must be assigned to that role. If any of the privileges are not assigned, it can be assigned from Openmrs. Privileges required are: app:appointments, app:appointments:manageAppointmentsTab, app:appointments:adminTab, Get Admission Locations, Get Beds, Get Locations, Get Patient Identifiers, Get Patients, Get Providers, View Appointments, View Appointment Services, Manage Appointments, Manage Appointment Services

### **How to Assign User roles**

Roles can be assigned from either openMRS or the database.

#### **Assigning User Roles from openMRS**

- Login into openMRS
- 
Go to Administration

- 
Go to Manage Users

- 
Select user and assign necessary roles (Appointments:ReadOnly, Appointments:ManageAppointments and Appointments:FullAccess)

#### **Assigning User Roles from the Database:**

**Read Only:**

```
INSERT INTO user_role VALUES (user_id, "Appointments:ReadOnly");

```

** Manage Appointments:**

```
INSERT INTO user_role VALUES (user_id, "Appointments:ManageAppointments");

```

 **Full Access:**

```
INSERT INTO user_role VALUES (user_id, Appointments:FullAccess");

```

*Note: User_id is from the from users table.*

On This Page**
