---
id: "2318893440"
title: "Installation steps for DataFlowServer"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893440/installation-steps-for-dataflowserver"
version: 1
updated: "2021-04-05T08:46:49.303Z"
author: "Bavisetti Venkatesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:20.620Z"
---

# Installation steps for DataFlowServer

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2318893440)  
> **Versión del documento:** v1 (2021-04-05T08:46:49.303Z) | **Autor/Editor:** Bavisetti Venkatesh

---

Assumption: Bahmni-mart is installed in the instance

#### **Enable Bahmni-mart-scdf in the inventory file**

```
vi /etc/bahmni-mart-playbook/inventories/bahmni-mart
localhost ansible_connection=local

[bahmni-emr-db]
localhost

[bahmni-mart]
localhost

[bahmni-mart-db]
localhost

[bahmni-mart-db-slave]

[bahmni-mart-scdf]
localhost

[metabase]
localhost

[metabase-db]
localhost

[metabase-db-slave]

[local:children]
bahmni-mart
bahmni-mart-db
bahmni-mart-db-slave
bahmni-mart-scdf
bahmni-emr-db
metabase
metabase-db
metabase-db-slave
```

##### Run the below playbook to Deploy mart with data flow server 

```
ansible-playbook -i /etc/bahmni-mart-playbook/inventories/bahmni-mart /etc/bahmni-mart-playbook/all.yml --extra-vars '@/etc/bahmni-mart-playbook/setup.yml' --skip-tags "custom_ssl,lets_encrypt_ssl" -vvv
```

##### To ensure Data flow server container is installed, run 

```
docker ps
```

##### Verify the docker container for that the data flow server is running 
![](https://bahmni.atlassian.net/wiki/download/attachments/2318893440/Screen%20Shot%202021-02-26%20at%204.29.37%20PM.png?version=2&modificationDate=1617612363318&cacheVersion=1&api=v2)
 Note: Make sure that 9393 port is open to access Data flow server UI. 
Linux Command to check if a port is open: sudo lsof -i:9393

#### To run Bahmni mart on the data flow server UI

Access DataFlowServer UI at <ip/DNS_server_name>:9393. Navigate to tasks and click on run for the 'create-bahmni-mart task'.
![](https://bahmni.atlassian.net/wiki/download/attachments/2318893440/Screen%20Shot%202021-02-26%20at%204.35.45%20PM.png?version=2&modificationDate=1617612377165&cacheVersion=1&api=v2)
When Bahmni-mart runs successfully, user will be able to see the start date and end date for the ‘create-bahmni-mart' task under Executions tab
![](https://bahmni.atlassian.net/wiki/download/attachments/2318893440/Screen%20Shot%202021-02-26%20at%204.38.35%20PM.png?version=2&modificationDate=1617612384893&cacheVersion=1&api=v2)

#### Steps to remove an installed data flow server

###### We can remove an installed data flow server using two approaches.
Approach 1: Delete the data flow server’s docker container

```
docker ps
#copy the containerId for data flow server
docker stop 
docker ps --filter "status=exited"
docker ps
```

Approach 2: Disable Bahmni-mart-scdf in the inventory file

```
vi /etc/bahmni-mart-playbook/inventories/bahmni-mart
localhost ansible_connection=local

[bahmni-emr-db]
localhost

[bahmni-mart]
localhost

[bahmni-mart-db]
localhost

[bahmni-mart-db-slave]

[bahmni-mart-scdf]

[metabase]
localhost

[metabase-db]
localhost

[metabase-db-slave]

[local:children]
bahmni-mart
bahmni-mart-db
bahmni-mart-db-slave
bahmni-mart-scdf
bahmni-emr-db
metabase
metabase-db
metabase-db-slave
```

#### Known issues and their respective steps to fix:

- When user runs the ‘create-bahmni-mart’ task for the first time, there might be an issue with the access permissions which will be shown in the logs as below.

![](https://bahmni.atlassian.net/wiki/download/attachments/2318893440/Screen%20Shot%202021-02-26%20at%204.28.29%20PM.png?version=2&modificationDate=1617612403984&cacheVersion=1&api=v2)
Steps to fix:

```
mysql -uroot -p openmrs
select Host,User from mysql.user;
#Follow the below steps if the ip present in the logs is not present in the users table
Create user ‘openmrs-user'@'’
GRANT ALL ON *.* to 'openmrs-user'@''' IDENTIFIED BY '';
FLUSH PRIVILEGES;
```
