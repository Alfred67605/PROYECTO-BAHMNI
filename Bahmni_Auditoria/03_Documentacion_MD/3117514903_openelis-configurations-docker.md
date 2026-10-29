---
id: "3117514903"
title: "OpenELIS Configurations (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117514903/openelis-configurations-docker"
version: 3
updated: "2023-12-11T16:13:33.540Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:56.055Z"
---

# OpenELIS Configurations (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117514903)  
> **Versión del documento:** v3 (2023-12-11T16:13:33.540Z) | **Autor/Editor:** Mohankumar Thangavel

---

Bahmni/openelis image is based on OpenELIS which acts as Lab Information Management system. Atomfeed sync has been enabled to sync data from and to Bahmni EMR. The image is built and published using Github Actions from [OpenELIS](https://github.com/Bahmni/OpenElis) repository.

### Environment Configurations:

| Variable Name | Description |
| --- | --- |
| OPENELIS_IMAGE_TAG | This value tells which image version to be used for OpenElis Application. List of tags can be found at [bahmni/openelis - Tags](https://hub.docker.com/r/bahmni/openelis/tags) . |
| OPENELIS_DB_IMAGE_NAME | This value tells which image to be used for OpenElis Database. There are two variants available. bahmni/openelis-db:**fresh-latest** - Has only schema and default data. bahmni/openelis-db:**demo-latest** - Has schema and demo data loaded. List of image tags can be found at [bahmni/openelis-db - Tags](https://hub.docker.com/r/bahmni/openelis-db/tags) . |
| OPENELIS_DB_DUMP_PATH | When you want to restore an existing database of OpenElis from a dump file you can set the folder path to your dump file with this variable. This is a one time setup and the restore happens only when the database is clean and fresh. |
