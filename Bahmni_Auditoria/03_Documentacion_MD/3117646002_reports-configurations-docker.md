---
id: "3117646002"
title: "Reports Configurations (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117646002/reports-configurations-docker"
version: 2
updated: "2022-12-14T05:25:41.140Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:55.283Z"
---

# Reports Configurations (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117646002)  
> **Versión del documento:** v2 (2022-12-14T05:25:41.140Z) | **Autor/Editor:** Gurpreet Luthra

---

Bahmni/reports image runs bahmni reporting service which can generate reports from different application databases of Bahmni such as OpenMRS, OpenELIS, Odoo. These reports can be configured from config service of Bahmni. More about reports configuration can be found [here](/wiki/spaces/BAH/pages/18415871/Configure+Reports).  The docker image is built and published using Github actions from [bahmni-reports](https://github.com/Bahmni/bahmni-reports) repository.

## Environments Configurations

| Variable Name | Description |
| --- | --- |
| REPORTS_IMAGE_TAG | This value specifies which image version needs to be used for reports service. List of tags can be found at [bahmni/reports - Tags](https://hub.docker.com/r/bahmni/reports/tags) . |
| REPORTS_DB_NAME | Database name for Reports |
| REPORTS_DB_USERNAME | Username of Reports Database |
| REPORTS_DB_PASSWORD | Password of Reports Database |

# Adding Custom Reports

- 
First volume mount your configuration folder as mentioned [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449270/Using+implementation+specific+configuration#Local-development-on-config).

- 
You can start reports by running `docker-compose up -d reports`.

- 
Now, you can add/modify reports by editing the `reports.json` file at `openmrs/apps/reports/` in your config folder.

- 
When you want to add custom sql files, add the sql file to `openmrs/apps/reports/sql` directory in config folder and in ***sqlPath*** attribute use value as `/etc/bahmni_config/openmrs/apps/reports/sql/`

- 
The new report will be visible on refresh of the browser.
