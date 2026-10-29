---
id: "3117219857"
title: "Docker Compose Profiles"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117219857/docker-compose-profiles"
version: 11
updated: "2026-02-09T04:13:30.261Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:51.286Z"
---

# Docker Compose Profiles

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117219857)  
> **Versión del documento:** v11 (2026-02-09T04:13:30.261Z) | **Autor/Editor:** Mohankumar Thangavel

---

Bahmni docker-compose has been configured with profiles which allows you to run the required services. More about compose profiles can be found [here](https://docs.docker.com/compose/profiles/).

#### Setting the required profile:
 
`proxy,bahmni-config` are generic services and it will start always irrespective of below profiles.

- 
Profiles can be set by changing the `COMPOSE_PROFILES` variable in .[env](https://github.com/Bahmni/bahmni-docker/blob/master/.env#L2) file. You can set multiple profiles by comma separated values. (Recommended)

***Example***: `COMPOSE_PROFILES=openelis,odoo`

- 
You can also pass this as an argument with docker-compose up command. If you prefer passing this from command-line, comment `COMPOSE_VARiABLES` in the [.env](https://github.com/Bahmni/bahmni-docker/blob/master/.env#L2) file

***Example***: `docker compose --profile emr up` (or) `docker compose --profile emr --profile openelis up`

![](https://bahmni.atlassian.net/wiki/download/attachments/3117219857/docker-compose-profiles.png?version=2&modificationDate=1670986788876&cacheVersion=1&api=v2) The profiles `bahmni-standard` and `bahmni-lite` are broad level profiles which runs specific group of below mentioned profiles. More about Bahmni Lite vs Bahmni Standard can be found [here](/wiki/spaces/BAH/pages/3064332289/Bahmni+Lite+-+A+lightweight+opensource+version+of+Bahmni).

| **Profile** | **Description** |  |  |
| --- | --- | --- | --- |
| 1 | emr | Bahmni EMR components containing OpenMRS, bahmni-web, appointments (for EMR use-cases only). EMR = electronic medical records |  |
| 2 | bahmni-lite | Runs all the applications needed for Bahmni Lite (emr, crater, reports, implementer-interface). To better understand Bahmni Lite, please [see this page](/wiki/spaces/BAH/pages/3064332289/Bahmni+Lite+-+A+lightweight+opensource+version+of+Bahmni). |  |
| 3 | bahmni-standard | Runs the whole suite of apps for Bahmni Standard (for hospitals). To better understand Bahmni Standard, please [see this page](/wiki/spaces/BAH/pages/3064332289/Bahmni+Lite+-+A+lightweight+opensource+version+of+Bahmni). |  |
| 4 | openelis | Lab Management system using opensource [OpenELIS](https://openelis-global.org/) |  |
| 5 | odoo | Inventory Management, Accounting & Billing using opensource [Odoo](https://www.odoo.com/) v16.0 |  |
| 6 | odoo-10 | Inventory Management, Accounting & Billing using opensource [Odoo](https://www.odoo.com/) v10.0. This profile is to support implementations migrating from CentOS to Docker. It is recommended to migrate to Odoo 16 |  |
| 7 | reports | Bahmni Reports (Jasper reports). For more details [see](/wiki/spaces/BAH/pages/90472551/Reports). |  |
| 8 | pacs | Bahmni PACS Setup with DCM4CHEE and Oviyam2 as DICOM Viewer (for radiology & xRay) |  |
| 9 | implementer-interface | Implementer Interface (Form Builder) for designing Bahmni Forms. |  |
| 10 | atomfeed-console | Atomfeed Console |  |
| 11 | pacs-simulator | PACS Simulator to test/demo PACS setup (* Not to be used in Production *) |  |
| 12 | lab-lite | Lite version for lab report upload based on OpenMRS 3.0 Microfrontend |  |
| 13 | crater | Lightweight billing/invoice system with [Crater](https://craterapp.com/) |  |
| 14 | metabase | Metabase opensource Analytics/Reporting tool |  |
| 15 | logging | Loki Stack - Centralised Logging (Part of docker-compose monitoring.yaml) |  |
| 16 | dcm4chee5 | DCM4CHEE 5 service as defined by dcm4chee community [documentation](https://github.com/dcm4che/dcm4chee-arc-light/wiki/Run-minimum-set-of-archive-services-on-a-single-host#use-docker-compose). |  |
| 17 | ohif | Runs OHIF Viewer |  |
