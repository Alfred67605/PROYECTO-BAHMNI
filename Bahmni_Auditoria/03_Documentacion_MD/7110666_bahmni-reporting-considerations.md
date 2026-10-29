---
id: "7110666"
title: "Bahmni reporting considerations"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/7110666/bahmni-reporting-considerations"
version: 10
updated: "2014-07-16T17:55:07.749Z"
author: "VivekV"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:36.441Z"
---

# Bahmni reporting considerations

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/7110666)  
> **Versión del documento:** v10 (2014-07-16T17:55:07.749Z) | **Autor/Editor:** VivekV

---

**Current issues with reporting from the transactional database**
 - [OpenMRS] Too normalised, leading to too many joins, hard to write performant queries, having to tune the tables for reporting purpose may not be ideal for online system
 - [OpenMRS] Non-aggregate in nature
 - [OpenMRS] Hard to convert row based (map like) data to column like reports
 - [OpenMRS] Not suited for analysis and ad-hoc querying
- Cannot perform join of data across systems

 Tool Options
 **Kibana (with ES)**
 . Scales horizontally to multiple servers (but this is not necessarily a must have because most hospital&rsquo;s data can fit on a single hard disk)
 + Simple to use
 - Is in its infancy feature wise, for example doesn&rsquo;t even support nested objects, lists. Probably skunkworks (my assessment). Project not very active [https://github.com/elasticsearch/kibana](https://github.com/elasticsearch/kibana).

**Jasper**
 . JasperServer is not very pretty, but embedded jasper provides lot  more flexibility
 + Very mature and has all features we need for reporting
 . Supports multiple databases (we don&rsquo;t really have a need for it though)
 - Has only paid version for analysis.

- Filtering based on condition has to be done via MDX

 
 **Saiku (analytics-lab)**
 + Very active project
 + Best open source analytics solution for a relational database (star schema)
 . Not meant for reporting
+ Provides stats

 
 **DHIS 2**
 - Too generic for us.
 - Not designed for our kind of use case
 (let me know if you want to know more details)
 
 **Star Schema**
 Dimensions (not a complete list)
 Location
 Date (+  Week, Month, Year)
 Provider
  
 Facts (also called measures; not a complete list)
 Patients Diagnosed
 Drug Orders Given
 Accessions
 Lab Results
  
 Reference
 - Simple introduction => [http://ciobriefings.com/Publications/WhitePapers/DesigningtheStarSchemaDatabase/tabid/101/Default.aspx](http://ciobriefings.com/Publications/WhitePapers/DesigningtheStarSchemaDatabase/tabid/101/Default.aspx)
 - [http://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802/ref=sr_1_1?s=books&ie=UTF8&qid=1405491662&sr=1-1](http://www.amazon.com/Data-Warehouse-Toolkit-Definitive-Dimensional/dp/1118530802/ref=sr_1_1?s=books&ie=UTF8&qid=1405491662&sr=1-1) (I have this book, if you want to borrow)

 - Jasper editions comparison [https://www.jaspersoft.com/editions](https://www.jaspersoft.com/editions)
  
 **Aggregated database or de-normalized patient level database?**
 (applies only if we go with relational database)
 - Aggregated database wouldn&rsquo;t allow one to drill down to a patient
 - Non aggregated star schema with patient information are large in size (but even with estimates on high side support 10 million patients should not be a problem on commodity server)
- Aggregated database doesn't allow for doing union, intersections etc. because of missing patient level information. For example how many patients were diagnosed with TB and HIV.

**Further Analysis**

- Embedding Jasper vs. New front end on JasperServer vs. Using Jasper as it is

- How to handle custom attributes

- How to handle observations made on concept. or in other words when the data type is not known in advance.

**Spikes**

- How difficult would it be to write MDX filters in Saiku
