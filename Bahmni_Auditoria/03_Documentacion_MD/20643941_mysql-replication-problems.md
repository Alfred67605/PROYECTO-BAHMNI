---
id: "20643941"
title: "MySQL Replication Problems"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643941/mysql-replication-problems"
version: 18
updated: "2016-12-27T09:47:50.123Z"
author: "Ravinder Deolal"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:07.505Z"
---

# MySQL Replication Problems

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643941)  
> **Versión del documento:** v18 (2016-12-27T09:47:50.123Z) | **Autor/Editor:** Ravinder Deolal

---

##### Check replication process is running on master and slave
**Command**

```
show processlist;
```

##### If replication process is running, check if slave is lagging behind master.
**Command to start **

```
 start master
```

**

##### If replication process is running, check if slave is lagging behind master.
Check the status**

```
show master status \g; show slave status \g;
```

 
Looking at output from above commands, you'd know

- if slave is lagging behind master.
- replication is failing because of some issues replicating a sql on slave.

**

##### If replication process has stopped due to duplicate entry in the slave.
Solution**

```
STOP SLAVE;
SET GLOBAL SQL_SLAVE_SKIP_COUNTER=1; /*This is to skip the duplicate record*/
START SLAVE;
```

References
 
[http://www.redips.net/mysql/replication-slave-relay-log-corrupted/](http://www.redips.net/mysql/replication-slave-relay-log-corrupted/)

[http://dba.stackexchange.com/questions/53893/mysql-relay-log-corrupted-how-do-i-fix-it-tried-but-failed](http://dba.stackexchange.com/questions/53893/mysql-relay-log-corrupted-how-do-i-fix-it-tried-but-failed)

[https://www.percona.com/blog/2014/10/08/mysql-replication-got-fatal-error-1236-causes-and-cures/](https://www.percona.com/blog/2014/10/08/mysql-replication-got-fatal-error-1236-causes-and-cures/)
