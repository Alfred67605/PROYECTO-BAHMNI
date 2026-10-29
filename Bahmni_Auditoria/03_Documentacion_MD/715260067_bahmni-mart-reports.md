---
id: "715260067"
title: "Bahmni Mart Reports"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/715260067/bahmni-mart-reports"
version: 9
updated: "2021-04-12T07:15:51.544Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:08.796Z"
---

# Bahmni Mart Reports

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/715260067)  
> **Versión del documento:** v9 (2021-04-12T07:15:51.544Z) | **Autor/Editor:** Gurpreet Luthra

---

[V0.93] Bahmni Mart provides a way of transferring data from Bahmni into a dedicated database for reporting/analytics purposes – to make it easy to perform reporting, and to avoid performance issues in a running EMR system, due to heavy SQLs. Bahmni Mart can then be connected with Metabase, an open source analytics tool, quite similar to PowerBI, Tabluea, etc. to create visualisations, dashboards and reports. 

At the core, Bahmni Mart is a flattened and simplified database intended for analytics wherein hierarchical structures have been flattened and pivoted and many other entities denormalized. You may plugin data visualization tools [Metabase](https://www.metabase.com/start/oss/), Superset etc on top of this database. At the same time, you may want to integrate Bahmni Reports with Bahmni mart. The following sections detail how this can be done. 

**
 
For diagrams and high level feature details on Bahmni Mart, please refer to this document section in Implementor Guide: [Bahmni Mart](/wiki/spaces/BAH/pages/695959553/Bahmni+Mart)

## Configure Datasource Definition for Bahmni Mart

Configure the datasource definition like in the example below. 

**file: */opt/bahmni-reports/etc/bahmni-reports.properties***
Datasource definition**

```
bahmni.mart.url=jdbc:postgresql://localhost:5432/analytics
bahmni.mart.username=analytics
bahmni.mart.password='somepwd'
```

## Configure in Reports Application Config

Once the datasource is defined, you will then need to define a report type in your application configuration. 

**file: /var/www/bahmni_config/openmrs/apps/reports/reports.json**

### Mart Generic Report

You will need to define a "*MartGeneric*" type

```
"bahmniMartTestReport": {
    "name": "Mart Test Report",
    "type": "MartGeneric",
    "config": {
       "sqlPath": "/var/www/bahmni_config/openmrs/apps/reports/sql/testMartCode.sql"
    }
}
```

### Mart Concatenated Reports

You may also want to run concatenated reports on the mart data source. For that you can define a '*MartConcatenated*' type. For more information on Concatenated Reports, please see [here](/wiki/spaces/BAH/pages/90472551/Reports#Reports-ReportConcatMultipleReports)

```
{
  "customReport21": {
    "name": "Indicators(Custom Excel)",
    "type": "MartConcatenated",
    "config": {
      "reports": [
        {
          "name": "Bahmni Mart Test",
          "type": "MartGeneric",
          "config": {
            "sqlPath": "/var/www/bahmni_config/openmrs/apps/reports/sql/NewPatientConsultations.sql"
          }
        }
      ]
    }
  }
}
```

On this Page
 
 
 
 
**Feature Details**

[Bahmni Mart (Installation & Setup)](/wiki/spaces/BAH/pages/695959553/Bahmni+Mart)
