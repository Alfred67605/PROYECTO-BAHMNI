---
id: "2318893350"
title: "Bahmni-Mart Setup with MySQLWorkbench & DBeaver"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893350/bahmni-mart-setup-with-mysqlworkbench-dbeaver"
version: 3
updated: "2021-04-14T07:03:34.852Z"
author: "Pritam Das"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:18.743Z"
---

# Bahmni-Mart Setup with MySQLWorkbench & DBeaver

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893350)  
> **Versión del documento:** v3 (2021-04-14T07:03:34.852Z) | **Autor/Editor:** Pritam Das

---

**Prerequisites:**

- 
Generate public key using

```
ssh-keygen -t rsa 
```

- 
For latest DBeaver, ​Run this on your key to convert it to RSA private key.

```
ssh-keygen -p -m PEM -f ~/.ssh/id_rsa 
```

**MYSQL:**

**Tools:**

```
1.MySQLWorkbench
2.DBeaver 
```

**Connecting using MySQLWorkbench:**

```
Change the connection method to Standard TCP/IP over SSH, by default, connection method will be set to Standard (TCP/IP) 
Hostname: “” 
Username: “centos”
SSH key file path: “provide the path to id_rsa file” 
MySQL Hostname: “localhost” 
MySQL Server Port: “3306” 
Username: “root”
```

![](https://bahmni.atlassian.net/wiki/download/attachments/2318893350/11_1.png?version=1&modificationDate=1618383729393&cacheVersion=1&api=v2)
Once all the details are added, Test Connection and ideally you see the “Connection Successful” popup.
![](https://bahmni.atlassian.net/wiki/download/attachments/2318893350/Picture%202.png?version=3&modificationDate=1617611552243&cacheVersion=1&api=v2)
**POSTGRESS:**

**Tools:**

## [DBeaver](https://dbeaver.io/)

### **Connecting to POSTGRESS using DBeaver:**

```
Select postgress DB while creating a new connection 
Select SSH tab and check “Use SSH Tunnel” option 
Host/IP: “” 
Port: 22 
User Name: “centos” 
Authentication Method: “Public Key” 
Private Key: “provide the path to id_rsa file” 
```

![](https://bahmni.atlassian.net/wiki/download/attachments/2318893350/Picture%203.png?version=3&modificationDate=1617611612105&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/2318893350/12_1.png?version=1&modificationDate=1618383806314&cacheVersion=1&api=v2)
Once all the details are added, Test Connection and ideally you see the “Connection Successful” popup.
