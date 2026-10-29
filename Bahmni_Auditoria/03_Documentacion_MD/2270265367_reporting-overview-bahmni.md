---
id: "2270265367"
title: "Reporting Overview (Bahmni)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2270265367/reporting-overview-bahmni"
version: 2
updated: "2021-03-23T07:47:10.866Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:06.367Z"
---

# Reporting Overview (Bahmni)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2270265367)  
> **Versión del documento:** v2 (2021-03-23T07:47:10.866Z) | **Autor/Editor:** Gurpreet Luthra

---

# Introduction

**

Reporting/Analytics on Bahmni can be achieved with a variety of ways. See the diagram below. One can also leverage work being done by the OpenMRS community for Reporting/Analytics (see sidebar on this page for OpenMRS links).

![](https://bahmni.atlassian.net/wiki/download/attachments/2270265367/Reporting%20Options%20in%20Bahmni.png?version=1&modificationDate=1616485505587&cacheVersion=1&api=v2)

Bahmni Reports app or module can be accessed from the Home dashboard. Generally, the Admin user will have the privilege to access reports app. A list of configured reports appears on the Report app screen. The user can launch any of the reports sorted by Start and End date and output format.

Every Bahmni implementation has its own config module. An implementer has to configure the required reports properly so that the Reports app will show all the configured ones. The configuration file is located at `openmrs/apps/reports directory` of the config module.

#### Reports can be used in multiple ways in Bahmni

- Standard Reports are useful to management level people
- 
Custom Reports can extract data from the backend database to analyse various facts for different stakeholders.

#### Bahmni report module supports various output format

- HTML
- PDF
- EXCEL
- Custom EXCEL (Excel with pre-defined macro)
- CSV
- 
ODF (Openoffice format)

# Various Types of Bahmni Reports

## [1. Generic Reports](/wiki/spaces/BAH/pages/90472551/Reports)

Canned and Custom Reports have their limitations. An implementer needs to know the OpenMRS data model and Custom SQL to extract the data for custom reports. In response to customer requests, developers have to repeatedly create canned reports and duplicate the SQL from the similar report, thus increasing the maintenance. This makes life difficult for the community.

To solve this, Bahmni has introduced generic reports for various entities in OpenMRS, for example: Observations, Visits and Programs etc. Generic reports allow an implementer to extract data from the system for each entity, hence Bahmni has a report for each. Generic reports provides options to include related fields and to apply various filters. **For further information, refer [here](/wiki/spaces/BAH/pages/90472551/Reports). **

## [2. Canned Reports](/wiki/spaces/BAH/pages/90472547/Canned+Reports)

These reports can be used to get specific or predefined information from Bahmni. There is minimal configuration available for these reports. **For further details please refer [here](/wiki/spaces/BAH/pages/90472547/Canned+Reports).**

## 3. Custom SQL

Bahmni offers Custom SQL reports where an implementer can specify a SQL to extract the data from the system. But an implementer has to understand the complete data model of the data source and this can be difficult and cumbersome. Custom SQL Reports seek to solve this problem.

**Configuration**    

```
"hospitalActivities": {
    "name": "Hospital Activities - Number of Clients Served (New and Total)",
    "type": "MRSGeneric",
    "config": {
      "sqlPath": "/var/www/bahmni_config/openmrs/reports/hmis/number_of_clients.sql"
    }
}
```

sql file is to be kept in appropriate folder of config as per the sqlPath in configuration.
[number_of_clients.sql](/wiki/download/attachments/2270265367/number_of_clients.sql?version=1&modificationDate=1616484295604&cacheVersion=1&api=v2)

Sample Report SQLs 
 
For reference, [here (Possible Health - Github)](https://github.com/Possiblehealth/possible-config/tree/master/openmrs/reports) are some of the custom reports at one of our implementations.

Bahmni supports CustomSQL Reports against **OpenMRS**,**OpenELIS**, **Odoo**, **BahmniMart** data sources.

| Type | Description |
| --- | --- |
| MRSGeneric | This type denotes that the SQL query is executed on OpenMRS |
| ElisGeneric | This type denotes that the SQL query is executed on OpenELIS |
| ERPGeneric | This type denotes that the SQL query is executed on Odoo/OpenERP |
| MartGeneric | This type denotes that the SQL query is executed on BahmniMart |

For reference, [here](https://github.com/Possiblehealth/possible-config/tree/master/openmrs/reports) are some of the custom reports at one of our implementations.

## 4. Jasper Reports (Deprecated)

Few of the earlier Bahmni implementations uses this feature. In this mechanism, Bahmni gives a way to connect with Jasper Report module and an implementer will have to setup Jasper and design the form and SQL using that. Since this is one of the very old ways, it is **not recommended** to introduce to any site implementations.

## 5. Bahmni-Mart with Metabase (Reports & Analytics)

Bahmni-Mart is a separate analytics database created by pulling data from Bahmni database (Spring Batch), and is optimised for Analytics purposes. For instance, it transforms every *Form* into its own table, with each form instance as one row, so that creating reports from the form data becomes easy. This is the recommended way to perform Reporting/Analytics at scale, so that Bahmni EMR doesn't suffer from any performance load due to adhoc & intensive Reporting queries, and you can use a BI/Reporting tool of your choice to easily create visualisations off this secondary database. **Please see [here](/wiki/spaces/BAH/pages/715260067/Bahmni+Mart+Reports) for more information**. 
 
This feature is applicable from release 0.91 onwards. 

# Version Controlling & Managing of Reports

The reports at an implementation site will be available in an implementation specific config folder. The report.json and associated SQL files in this folder are generally text based. They can be managed in standard version control systems like GitHub. It is a best practice to version control these files to maintain history and traceability across various releases of the product. Here is an [example of versioning report SQLs in Github](https://github.com/Possiblehealth/possible-config/tree/master/openmrs/reports/hmis).

There is a JSON file used for configuring reports. It is located at `/var/www/bahmni_config/openmrs/apps/reports/reports.json`.
 Code Snippetapp.json**

```
"config": {
   "paperSize": "A3", //The default paper size is A4. Supported sizes are A3 and A4.
   "supportedFormats": ["pdf"], //List of available formats are html, pdf, excel, csv, custom excel, ods. When not defined, all the available formats will be listed.
}
```

# Embedding Reports

Bahmni allows one to embed the data exported by the report in an existing workbook template with formulae to create a pivot table based on the generated data. The workbook template has to be in `.xls` format.

The reports can be generated from the screen Home > Reports. Select format as 'CUSTOM EXCEL', upload the required excel formula template and click on 'Run Report'. A report will be generated with actual data in the sheet named 'Report' and data generated using the formula in the template in the sheet named 'Sheet1'. Please refer [below](https://bahmni.atlassian.net/wiki/display/BAH/Configure+Reports#ConfigureReports-ConfigurethemacroTemplatexlsfile) to configure the Macro file to avoid uploading it every time for a report.

A excel template can be found [here](/wiki/download/attachments/2270265367/template.xls?version=1&modificationDate=1616484291847&cacheVersion=1&api=v2) which contains the macro. Formulae has to be added in 'Sheet1' of the above excel template and can be uploaded to generate a report. On opening the generated excel report, the macro that is present in the above excel template will apply the formula over the actual data. 'Enable macros' should be selected on opening the generated excel report.

**Example Formula**: **`=SUM(Report!G9, Report!G10)`   - 'Report' sheet is the sheet which would contain the raw data without applying the formulae.
 
If formula is added to any other template and used for the generation of report, it wont work. Please use only the above template linked. 

### Configure the macroTemplate XLS file 

Configure the `macroTemplate` XLS file in `bahmni_config` to avoid uploading the file every time while generating the report 

**Steps to Configure :**

- Copy the XLS (Microsoft 1997-2000) file with macro formula to `bahmni_config`
- 
Configure the XLS file path in `bahmni_config` as below in `report.json`

```
"diabetes":{
        "name": "Diabetes",
        "type": "obsCount",
        "config": {
            "ageGroupName": "All Ages",
            "conceptNames": ["Diabetes, Intake"],
            "visitTypes": ["OPD","IPD"],
            "macroTemplatePath" : "/var/www/bahmni_config/openmrs/apps/reports/macroTemplates/Diabetes.xls"
        }
    },
```

On this page**

 
 
 

**Related Links**

[(Blog) 6 EMR Reports that improve patient care at JSS](https://medium.com/bahmni-blog/6-emr-reports-directly-improving-patient-care-at-jss-df617912c7d4#.nn3mk7aqh)

[OpenMRS Analytics Pipeline (Delta Lake/Kafka/PySpark)](https://talk.openmrs.org/t/openmrs-elt-etl-pipeline-demo/28016)

[OpenMRS + OpenHIM based on FHIR (for patient indicator reporting)](https://wiki.openmrs.org/display/projects/Architectural+Design+Approach+to+support+an+integrated+approach+to+patient-level+indicator+reporting+for+OpenMRS)

[OpenMRS + FHIR Analytics Engine](https://docs.google.com/presentation/d/1ZCa3VXOtOvNB442YqB91kS5zkMTjDdjn7AI1ApwaP-g/edit#slide=id.ga0426d02c9_0_0)
