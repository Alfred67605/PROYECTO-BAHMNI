---
id: "1310730"
title: "Bahmni Server Deployment Architecture"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1310730/bahmni-server-deployment-architecture"
version: 17
updated: "2018-01-02T07:56:53.516Z"
author: "Shruthi Pitta (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:56.492Z"
---

# Bahmni Server Deployment Architecture

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/1310730)  
> **Versión del documento:** v17 (2018-01-02T07:56:53.516Z) | **Autor/Editor:** Shruthi Pitta (Deactivated)

---

Technical Document
 This document details out what all components and applications are deployed in Bahmni Production Server at a high level. For failover / disaster recovery, some deployments may use a Primary/Secondary or a Master/Slave deployment architecture.
 

# High Level Diagram 

 
### Oops, Diagram Unavailable
This diagram can't be displayed. It may have been moved or deleted, or the page's access settings may be preventing it from loading. Pages with restricted access must also include Gliffy Diagrams in their allowed list.

# Application Installation Locations

The following are the RPMs that are installed on the Bahmni machine:

|  | Package Name | Install Components | Description | Location | Service Name |
| --- | --- | --- | --- | --- | --- |
| 1. | **bahmni-web** | Apache HTTP Server Base default config Optional overriding config (provisioned by ansible) | Base web server of Bahmni | /var/www | httpd |
| 2. | **openmrs** | Embedded Tomcat with OpenMRS | OpenMRS server | /opt/openmrs | openmrs |
| 3. | **bahmni-emr** |  | Deploys Bahmni core modules into OpenMRS | /opt/openmrs/modules |  |
| 3. | **bahmni-erp** | OpenERP/Odoo | OpenERP server | /opt/bahmni-erp | openerp |
| 4. | **bahmni-lab** | Embedded tomcat with OpenELIS | OpenELIS/ Lab system | /opt/bahmni-lab | bahmni-lab |
| 5. | **bahmni-erp-connect** |  | Atom Feed Client for OpenERP |  | bahmni-erp-connect |
| 6. | **bahmni-lab-connect** |  | Atom Feed Client for OpenELIS |  |  |
| 7. | **bahmni-pacs** | dcm4chee, pacs-integration, Embedded tomcat | PACS integration sub-systems | /opt/pacs-integration |  |
| 8. | **bahmni-reports** | Jasper running with Embedded Tomcat | Reporting sub-system | /opt/bahmni-reports |  |
| 9. | **bahmni-certs** |  | Installs a 90 day valid SSL certificate for Apache HTTPs |  |  |
