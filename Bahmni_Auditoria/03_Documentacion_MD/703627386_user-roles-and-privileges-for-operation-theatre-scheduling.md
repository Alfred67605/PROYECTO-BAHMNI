---
id: "703627386"
title: "User roles and privileges for Operation Theatre Scheduling"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703627386/user-roles-and-privileges-for-operation-theatre-scheduling"
version: 4
updated: "2018-08-28T05:37:35.799Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:40.767Z"
---

# User roles and privileges for Operation Theatre Scheduling

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/703627386)  
> **Versión del documento:** v4 (2018-08-28T05:37:35.799Z) | **Autor/Editor:** Angshuman Sarkar

---

### User Roles

User can be assigned different privileges so as to provide different levels of access to the operation theatre module. For example, to view surgical block or Create surgical block or Create surgeries.

There are two different user roles available in Operation Theatre App which are mentioned below,

- Read Only Access
- Full Access

Users can have either a &ldquo;OT : ReadOnly&rdquo; role or &ldquo;OT : FullAccess&rdquo; role.

**Read Only: **Can only view scheduled queue, OT calendar, List view, print list view and apply filter.

**Full Access: ** This user will have access to view, edit, add, print, cancel and filter the surgeries and surgical blocks.

### Privileges

Operation Theatre module has a set of privileges associated with it.

- 
**app:ot:** Privilege to view operation theatre app in the home page. This is the UI privilege that will allow user to view the operation theatre app in the home page. On entering the module, user with this privilege can view scheduled queue, OT calendar, List view, print list view and apply filter.

- 
**app:ot:write: **Privilege to manage operation theatre app. This is the UI privilege that will allow user to view the operation theatre app in the home page. On entering the module, user with this privilege can edit, add, cancel surgical blocks, surgeries created for a patient.

**Read only **

For Read Only role to work as expected, the following privileges must be assigned to that role. If any of the privileges are not assigned, it can be assigned from Openmrs. Privileges required are: app:ot, Manage OT Schedules.

**Full Access**

For Full Access role to work as expected, the following privileges must be assigned to that role. If any of the privileges are not assigned, it can be assigned from Openmrs. Privileges required are: app:ot:write, View OT Schedules

                     ![](https://bahmni.atlassian.net/wiki/download/attachments/703627386/Screen%20Shot%202018-08-20%20at%205.32.22%20PM.png?version=1&modificationDate=1534766574951&cacheVersion=1&api=v2)

On this Page
