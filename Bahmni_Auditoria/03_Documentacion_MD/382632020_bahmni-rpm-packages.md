---
id: "382632020"
title: "Bahmni RPM Packages"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/382632020/bahmni-rpm-packages"
version: 11
updated: "2018-01-10T09:16:16.349Z"
author: "Shruthi Pitta (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:57.201Z"
---

# Bahmni RPM Packages

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/382632020)  
> **Versión del documento:** v11 (2018-01-10T09:16:16.349Z) | **Autor/Editor:** Shruthi Pitta (Deactivated)

---

Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities. The microservice architecture enables the continuous delivery/deployment of large, complex applications.

Bahmni has a micro service architecture : [Bahmni Services](/wiki/spaces/BAH/pages/267976708/Bahmni-Server-Deployment-Architecture).

The different services are packaged as RPMs. Here is the list of all the RPM's:

- atomfeed-console.noarch
- bahmni-emr.noarch
- bahmni-erp.noarch
- bahmni-erp-connect.noarch
- bahmni-implementer-interface.noarch
- bahmni-installer.noarch
- bahmni-lab.noarch
- bahmni-lab-connect.noarch
- bahmni-openmrs.noarch
- bahmni-reports.noarch
- bahmni-web.noarch

Code for packaging the services as RPMs is here: [https://github.com/Bahmni/bahmni-package](https://github.com/Bahmni/bahmni-package). Bahmni Package picks up artifacts of repositories (like bahmni-core, bahmniapps, ...) and packages them as RPMs.

Details of what each RPM contains : (Note: Git links are accessible if you open the Gliffy in full screen mode)

 
### Oops, Diagram Unavailable
This diagram can't be displayed. It may have been moved or deleted, or the page's access settings may be preventing it from loading. Pages with restricted access must also include Gliffy Diagrams in their allowed list.

## RPMs and the services they install

RPMs install and setup a service. They also provide lifecycle scripts to start, stop and restart a service.

**bahmni-installer:** Installs the code required to install and setup Bahmni. Includes bahmni-playbooks, bahmni command (bahmni.py).

**bahmni-openmrs:** Installs openmrs war file and sets up the openmrs MySQL database.

**bahmni-emr:** Installs default OpenMRS modules required for Bahmni.

**bahmni-web: **Installs UI code. Has httpd as a dependency.

**bahmni-reports:** Installs reports war and sets up the bahmni-reports MySQL database.

**bahmni-erp:** Installs OpenERP, its modules and sets up the openerp PostgreSQL database.

**bahmni-erp-connect: **Installs bahmni-erp-connect service which serves as the integration point between OpenMRS and OpenERP.

**bahmni-lab: **Installs OpenELIS and sets up the clinlims PostgreSQL database.

**atomfeed-console: **Installs and sets up the atomfeed-console service.

**bahmni-implementer-interface: **Installs the UI code required for the implementer interface app.

**bahmni-lab-connect: **Installs the openelis-atomfeed omod.

**bahmni-two-factor-auth: **Installs and sets up the two factor authentication service.

**dcm4chee: **Installs the dcm4chee service and sets up the pacsdb PostgreSQL database.

**pacs-integration: **Installs the pacs-integration service and sets up the bahmni-pacs PostgreSQL database.

As Bahmni has a microservice architecture, one could choose install only a subset of these services depending on the use case. For example if a hospital only has only clinical and pharmacy and does not have laboratory to perform tests, they can install only those components. Please refer the steps [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/35291242/Install+Bahmni+on+CentOS+Advanced+Installation+Options#InstallBahmnionCentOS(AdvancedInstallationOptions)-Installandupdatespecificcomponents) to install on a subset of above services.
