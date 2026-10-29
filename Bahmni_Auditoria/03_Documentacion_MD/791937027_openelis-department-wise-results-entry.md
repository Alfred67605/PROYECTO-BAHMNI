---
id: "791937027"
title: "OpenElis Department Wise Results Entry"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/791937027/openelis-department-wise-results-entry"
version: 1
updated: "2019-01-30T11:04:27.731Z"
author: "Neha Gupta"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:55.688Z"
---

# OpenElis Department Wise Results Entry

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/791937027)  
> **Versión del documento:** v1 (2019-01-30T11:04:27.731Z) | **Autor/Editor:** Neha Gupta

---

In order to make newly added department's results entry page accessible to all the users having Results entry as their role, add migration scripts to add the test section as the system module in **system_module** table.

![](https://bahmni.atlassian.net/wiki/download/attachments/791937027/image2019-1-30_11-48-41.png?version=1&modificationDate=1548829123857&cacheVersion=1&api=v2)

       insert into system_module (id, name, has_select_flag, has_add_flag, has_update_flag, has_delete_flag) values(444, 'LogbookResults:Haematology', 'N', 'N', 'N', 'N');

Add the module access to Results entry role in **system_role_module** table.

       insert into system_role_module (id, has_select, has_add, has_update, has_delete, system_role_id, system_module_id) values(358, 'Y', 'Y', 'Y', 'Y', 5, 444);

These can be added as migrations under openElis in config.
