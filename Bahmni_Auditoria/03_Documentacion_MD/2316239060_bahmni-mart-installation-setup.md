---
id: "2316239060"
title: "Bahmni Mart Installation Setup"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239060/bahmni-mart-installation-setup"
version: 5
updated: "2022-11-29T11:57:52.958Z"
author: "Rituparna Banerjee"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:17.617Z"
---

# Bahmni Mart Installation Setup

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239060)  
> **Versión del documento:** v5 (2022-11-29T11:57:52.958Z) | **Autor/Editor:** Rituparna Banerjee

---

#### 1. For cleaning up postgres from instance ( Not required for all scenarios, only required if we want a different version of postgres from what we already have in the bahmni instance)

```
yum remove postgresql -y
yum remove postgres\* -y
rm -rf /var/lib/pgsql
yum list installed | grep postgres

```

#### 2. Remove bahmni-mart if installed before

```
yum remove bahmni-mart -y
```

#### 3. Download bahmni-mart playbook

```
wget -O /tmp/bahmni-mart-playbook.zip https://github.com/Bahmni/bahmni-mart-playbook/archive/refs/heads/master.zip && unzip -o /tmp/bahmni-mart-playbook.zip -d /tmp && sudo rm -rf /etc/bahmni-mart-playbook && sudo mv /tmp/bahmni-mart-playbook-master /etc/bahmni-mart-playbook && rm -rf /tmp/bahmni-mart-playbook.zip
```

#### 4. If we want bahmni-mart installed on both master and slave machine please use the commands to get the mart_inventory file below
 
change the bahmni-mart url based on the latest artefact

```
cd /etc/bahmni-mart-playbook/inventories/
mv bahmni-mart bahmni-mart_bkp
wget https://github.com/Bahmni/bahmni-mart-playbook/raw/master/inventories/mart_inventory
mv mart_inventory bahmni-mart

```

##### Update ip for fresh installation of mart

```
vi /etc/bahmni-mart-playbook/inventories/bahmni-mart
# delete the line with content ' ansible_connection=local'
# add below line as first line
 ansible_connection=ssh ansible_ssh_user=root

```

#### 5. For standalone instance where we don’t have master and slave setup the below inventory is being used

```
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

 
- 
Since the master-slave set-up is not available, remove all the lines with <slave_ip>

- 
Update master_ip

#### Remove entries under [bahmni-mart-db-slave], [bahmni-mart-scdf], [metabase-db-slave] in the bahmni-mart inventory file

```
vi /etc/bahmni-mart-playbook/inventories/bahmni-mart
```

#### 6. Verify and update the below parameters in setup.yml

#### `cd /etc/bahmni-mart-playbook`

```
bahmni_mart_url: https://github.com/Bahmni/bahmni-mart/releases/download/2.0.4/bahmni-mart-2.0.4.noarch.rpm
bahmni_mart_version: "2.0.4"
openmrs_db_password: P@ssw0rd
metabase_db_password: password
analytics_db_password: password
postgres_password: password
metabase_with_ssl: false
custom_keystore_location: ""
metabase_keystore_password: 

mail_subject: "Notification regarding failed jobs"
mail_from: "no-reply@bahmni-mart.notifications"
mail_recipients: ""
analytics_db_user: analytics
metabase_db_user: metabase
analytics_db_name: analytics
metabase_db_name: metabase

```

 If user wants to install mart with latest bahmni_mart_url then user need to update bahmni_mart_version to the rpm version so that it will install the latest mart.

Modify the file “/etc/bahmni-mart-playbook/roles/postgres/defaults/main.yml” with below entries

```
postgres92_repo_rpm_name: pgdg-centos92-9.2-7.noarch.rpm
postgres96_repo_rpm_name: pgdg-redhat-repo-42.0-11.noarch.rpm
postgres92_repo_download_url: http://yum.postgresql.org/9.2/redhat/rhel-6-x86_64/{{postgres92_repo_rpm_name}}
postgres96_repo_download_url: https://yum.postgresql.org/9.6/redhat/rhel-6-x86_64/{{postgres96_repo_rpm_name}}

```

#### 7. Metabase without ssl

```
ansible-playbook -i /etc/bahmni-mart-playbook/inventories/bahmni-mart /etc/bahmni-mart-playbook/all.yml --extra-vars '@/etc/bahmni-mart-playbook/setup.yml' --skip-tags "custom_ssl,lets_encrypt_ssl,authentication"
```

##### Metabase with let's encrypt ssl(optional)

```
ansible-playbook -i /etc/bahmni-mart-playbook/inventories/bahmni-mart /etc/bahmni-mart-playbook/all.yml --extra-vars '@/etc/bahmni-mart-playbook/setup.yml' --skip-tags "without_ssl,custom_ssl,authentication"
```

##### Metabase with custom ssl(optional)

```
ansible-playbook -i /etc/bahmni-mart-playbook/inventories/bahmni-mart /etc/bahmni-mart-playbook/all.yml --extra-vars '@/etc/bahmni-mart-playbook/setup.yml' --skip-tags "without_ssl,lets_encrypt_ssl,authentication"
```

##### Add necessary jobs or Remove the extra jobs from bahmni-mart.json

```
vi /var/www/bahmni_config/bahmni-mart/bahmni-mart.json
```

#### 8. Add access privileges to Vagrant IP in pg_hba.conf

```
vi /var/lib/pgsql/9.6/data/pg_hba.conf
```

Update the file with the below entry

```
host all all 192.168.33.10/0 trust
```

Restart Postgresql

```
systemctl restart postgressql-9.6
```

#### 
9. Run bahmni mart

```
bahmni-mart
# check the logs
tail -100f /var/log/bahmni-mart/bahmni-mart.log

```

##### Check if following URLs are accessible

##### Metabase

```
docker ps
docker stop 
docker start metabase
http://:9003/
```

### To connect metabase with a analytics database (when using without ssl)
Host : IP of the machine as seen by Metabase docker container. E.g: 172.17.42.1

port : 5432

Database name : analytics

Database username : analytics

Database password : password

 

**Docker container (metabase and scdf) removal step need to be added.**
