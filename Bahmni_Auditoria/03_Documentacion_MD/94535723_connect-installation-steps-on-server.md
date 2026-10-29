---
id: "94535723"
title: "Connect Installation Steps on Server"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535723/connect-installation-steps-on-server"
version: 10
updated: "2018-09-05T12:14:42.057Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:37.086Z"
---

# Connect Installation Steps on Server

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535723)  
> **Versión del documento:** v10 (2018-09-05T12:14:42.057Z) | **Autor/Editor:** Angshuman Sarkar

---

This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

## Purpose and Benefits

To install Bahmni Connect, you need to install the "bahmni" command line tool, which provides various options for installing / configuring Bahmni. Please refer to[ Install Bahmni on CentOS](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=35291242) to perform the basic installation steps. Additionally, for the Bahmni Connect server setup two other modules have to be installed - the **bahmni-offline** module and the **bahmni-event-log-service** which is used for pulling the event logs to use the data offline as described [here](https://bahmni.atlassian.net/wiki/display/BAH/Offline+sync+-+Pull+and+Push#Offlinesync-PullandPush-Pull:Bahmnieventlogservice).
 
Bahmni Connect App was originally called the *Offline App*. Its new name is now *Bahmni Connect*.

**

## Steps

- As mentioned earlier the **bahmni-event-log-service** and **bahmni-offline** modules are necessary for Bahmni Connect.

- To install *Bahmni Connect* specific components, please add the host entry in respective groups of the inventory file along with other entries such as **bahmni-emr**, **bahmni-reports** etc. For example, to install bahmni-event-log-service and bahmni-reports components, the host entry should be present in the **bahmni-event-log-service**** ** and **bahmni-offline**** **group. [Here](https://github.com/Bahmni/bahmni-tw-playbooks/blob/2f219d5df57f08059f7d9ccd86cc9dfa12265ef5/inventories/search_qa) is a find sample inventory file.
- 
 To run Bahmni Connect, Offline concepts needs to be added into the OpenMRS database. This can be easily done using the script at [https://github.com/Bahmni/event-log-service/blob/master/event-log-service-webapp/src/main/resources/sql-scripts/copyOfflineConcepts.py](https://github.com/Bahmni/event-log-service/blob/master/event-log-service-webapp/src/main/resources/sql-scripts/copyOfflineConcepts.py). Copy this into the machine where Bahmni has been installed and run **python copyOfflineConcepts.py. **If any errors occur such as **ImportError: No module named MySQLdb**, install pip by **sudo easy_install pip** followed by **sudo pip install MySQL-python. **Then run the aforementioned command again to install offline concepts.

- 
Refer to ([Bahmni Connect Features](/wiki/spaces/BAH/pages/39813212/Bahmni+Connect+Features#BahmniConnectFeatures-2)) to install and configure the synchronization strategies, especially for *Location based strategy*.** **

**Pre-requisites for older versions  **

Visit Location Migration
 
If you are migrating Bahmni-offline server from 0.83 version to 0.84, make sure that each visit is tied to some login location (Refer: [Visit Location](/wiki/spaces/BAH/pages/77758507/Visit+Location))

The query below checks whether location_id info available in the encounter table for corresponding visits and populates them in visit table. If no visit info is in the encounter table, it will populate the visits with unknown location.

```
UPDATE visit
SET location_id = (SELECT location_id FROM encounter WHERE visit.visit_id = encounter.visit_id GROUP BY encounter.visit_id);

UPDATE visit SET location_id = (SELECT location_id FROM location WHERE name = "Unknown Location" LIMIT 1) WHERE location_id IS NULL;
```

Related Pages**

 

- [Installing Bahmni Connect on Server](/wiki/spaces/BAH/pages/94535706/Installing+Bahmni+Connect+on+Server)
[Connect Installation Steps on Server](/wiki/spaces/BAH/pages/94535723/Connect+Installation+Steps+on+Server)
- [Server Setup For Connect](/wiki/spaces/BAH/pages/94535719/Server+Setup+For+Connect)
- [Bahmni Connect Sync](/wiki/spaces/BAH/pages/94535725/Bahmni+Connect+Sync)

- [Installing Bahmni Connect App](/wiki/spaces/BAH/pages/94535730/Installing+Bahmni+Connect+App)
[Connect Requirements](/wiki/spaces/BAH/pages/94535733/Connect+Requirements)
- [Installation Steps - Connect](/wiki/spaces/BAH/pages/94535735/Installation+Steps+-+Connect)
- [Setup Bahmni Connect using Location based sync strategy](/wiki/spaces/BAH/pages/325713930/Setup+Bahmni+Connect+using+Location+based+sync+strategy)
- [Customizing Bahmni Connect](/wiki/spaces/BAH/pages/94535739/Customizing+Bahmni+Connect)
- [Change Bahmni Connect App Location](/wiki/spaces/BAH/pages/97026058/Change+Bahmni+Connect+App+Location)
- [Upgrade Bahmni Connect](/wiki/spaces/BAH/pages/94535737/Upgrade+Bahmni+Connect)

 

**Feature Details**

[Bahmni Connect](/wiki/spaces/BAH/pages/94535750/Bahmni+Connect)

**Usage Details**

[Using Bahmni Connect App](/wiki/spaces/BAH/pages/94535745/Using+Bahmni+Connect+App)
