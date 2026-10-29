---
id: "49545219"
title: "Connecting to various databases"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545219/connecting-to-various-databases"
version: 17
updated: "2023-12-14T07:03:00.331Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:54.779Z"
---

# Connecting to various databases

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545219)  
> **Versión del documento:** v17 (2023-12-14T07:03:00.331Z) | **Autor/Editor:** Gurpreet Luthra

---

# Introduction

**This page lists details on how to connect to various databases in Bahmni.**

Bahmni comprises of different sub-components, like OpenMRS, OpenELIS, OpenERP/Odoo, Dcm4chee, PACS-Integration service, etc. Each component talks to its own database, which may be created within MySQL or Postgres. To see the contents of a particular database, you will need to use the right command line tool for MySQL or Postgres, and also appropriate credentials. 

MySQL Database Server
 
For MySQL Databases, the **mysql **command is used to connect to mysql databases, and view tables and data. Please refer to this resource to see all the commonly used MySQL Commands: [MySQL Cheatsheet](https://www.pantz.org/software/mysql/mysqlcommands.html) 

**Note:** If you are connecting to MySQL running inside a Vagrant Box (or a VM) from your host machine, you will need to connect to IP: 192.168.33.10 and port: 3306.

PostgreSQL Databases
 
For PostgreSQL Databases, the psql command is used to connect to PostgreSQL databases, and view tables and data. Please refer to this resource to see all the commonly used commands: [PostgreSQL DB Administration Commands](http://www.thegeekstuff.com/2009/04/15-practical-postgresql-database-adminstration-commands/). If you want to use a graphical GUI tool for psql, then you can try out [PgAdmin](http://www.pgadmin.org/).

To connect to PostgreSQL DB as admin, and alter databases, or drop them use the command: "`**psql -Upostgres**`".

**Note:** If you are connecting to PostgreSQL running inside a Vagrant Box (or a VM), you may need to refer to this for ensuring the proper ports are open, in case you aren't able to connect from host machine: [http://stackoverflow.com/questions/14139017/cannot-connect-to-postgres-running-on-vm-from-host-machine-using-md5-method](http://stackoverflow.com/questions/14139017/cannot-connect-to-postgres-running-on-vm-from-host-machine-using-md5-method)

**

SSH Tunnel for Postgres / MySql DB
 
You can also try using the SSH Tunnelling connection options for connecting to databases. [More details here](https://support.cloud.engineyard.com/hc/en-us/articles/205408088-Access-Your-Database-Remotely-Through-an-SSH-Tunnel). Sample screenshot here: [http://pasteboard.co/rUg67MP.jpg](http://pasteboard.co/rUg67MP.jpg)

# List of Application Databases

 
The connection credentials shown here are the default. These may have been modified during installation by the Administrator.

|  | Application | DB Server Type | Database Name | Connection Command |
| --- | --- | --- | --- | --- |
| 1. | OpenMRS (EMR) | **MySQL** | openmrs | ``` > mysql -uopenmrs-user -ppassword openmrs # For Bahmni 0.92 > mysql -uroot -pP@ssw0rd openmrs ``` |
| 2. | OpenELIS (Lab) | **PostgreSQL** | clinlims | ``` > psql -Uclinlims clinlims ``` |
| 3. | OpenERP/Odoo | **PostgreSQL** | openerp/odoo | ``` > psql -Uopenerp openerp OR > psql -Uodoo odoo ``` |
| 4. | dcm4chee | **PostgreSQL** | pacsdb | ``` > psql -Upostgres pacsdb ``` |
| 5. | PACS Integration Service | **PostgreSQL** | bahmni_pacs | ``` > psql -Upostgres bahmni_pacs ``` |
| 6. | Crater (Bahmni LITE) | **MySQL** | crater | ``` # connect to crater db > mysql -ucrater -pcrater crater # connect to crater atomfeed db > mysql -ucrater_atomfeed_user -ppassw0rd crater_atomfeed ``` |
|  |  |  |  |  |

 
Related Reading: Debugging performance issues in MySQL / Postgres DB: [Troubleshooting performance issues in SQL, OpenERP and OpenELIS](/wiki/spaces/BAH/pages/3259335448/Troubleshooting+performance+issues+in+SQL+OpenERP+and+OpenELIS)

On this page**

 
 
 

**Related Links**

[Anonymizing Bahmni Database](/wiki/spaces/BAH/pages/66912271/Anonymizing+Bahmni+Database) 

[(StackOverflow) Can a million rows be stored in a DB](https://stackoverflow.com/questions/1926079/how-many-rows-in-a-database-are-too-many)?

[OpenMRS - Supporting Other Languages (UTF-8)](https://wiki.openmrs.org/display/docs/Using+UTF-8+Characters)
