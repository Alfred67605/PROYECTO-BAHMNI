---
id: "20643953"
title: "Troubleshooting postgresql replication issues"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643953/troubleshooting-postgresql-replication-issues"
version: 6
updated: "2016-05-27T06:20:25.141Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:07.928Z"
---

# Troubleshooting postgresql replication issues

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643953)  
> **Versión del documento:** v6 (2016-05-27T06:20:25.141Z) | **Autor/Editor:** Gurpreet Luthra

---

This document will help you understand how you can troubleshoot issues pertaining to postgresql replication.

 

- 
### Check if postgresql replication is running

```
ps -ef | grep sender
ps -ef | grep receiver
```

- 
### Check replication replay on slave

```
select pg_last_xlog_receive_location();
select pg_last_xlog_replay_location();
```

- 
### Restart replication on slave if needed (you do this by restarting postgresql on slave)

```
sudo service postgresql-9.2 restart
```
