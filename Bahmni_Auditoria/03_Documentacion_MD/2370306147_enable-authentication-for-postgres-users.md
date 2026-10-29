---
id: "2370306147"
title: "Enable Authentication for Postgres Users"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2370306147/enable-authentication-for-postgres-users"
version: 1
updated: "2021-04-19T04:51:01.818Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:21.920Z"
---

# Enable Authentication for Postgres Users

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2370306147)  
> **Versión del documento:** v1 (2021-04-19T04:51:01.818Z) | **Autor/Editor:** Himabindu Thungathurty

---

Default postgres installation that comes with Bahmni product/Bahmni-mart doesn’t have authentication enabled. So one can use psql command line prompt without password. The major problem with this approach is, if the postgres port is open it has chances of getting misused. We don’t usually keep it open for all the ip’s but only to the specific ip’s. But as pg_hba.conf is giving that provision to allow any ip to connect to postgres database, its always a good practise to enable the authentication for all postgres user to avoid any security vulnerabilities.

There are two ways to enable authentication to psql users.

- 
Add authentication for psql users as part of fresh installation of postgres service.

- 
Enable authentication for existing psql user

The existing changes in bahmni-mart covers only the part of enabling authentication for fresh installation of postgres service

Below is the chart to that shows for which bahmni versions authentication can be enabled with bahmni-mart-playbook installation
![](https://bahmni.atlassian.net/wiki/download/attachments/2370306147/image-20200412-080114.png?version=1&modificationDate=1618807847300&cacheVersion=1&api=v2)
Below is the ansible command for installing bahmni-mart

**Metabase without ssl:**

```
ansible-playbook -i /etc/bahmni-mart-playbook/inventories/bahmni-mart /etc/bahmni-mart-playbook/all.yml --extra-vars '@/etc/bahmni-mart-playbook/setup.yml' --skip-tags "custom_ssl,lets_encrypt_ssl,authentication" -vvv
```

Please use the above chart as reference to add/remove `“authentication”` tag to the `--skip-tags` based on the bahmni version and fresh install of the mart.
