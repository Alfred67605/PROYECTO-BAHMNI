---
id: "94535725"
title: "Bahmni Connect Sync"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535725/bahmni-connect-sync"
version: 12
updated: "2016-12-23T06:34:57.014Z"
author: "Siddhartha Mohapatra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:38.090Z"
---

# Bahmni Connect Sync

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535725)  
> **Versión del documento:** v12 (2016-12-23T06:34:57.014Z) | **Autor/Editor:** Siddhartha Mohapatra

---

This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

## Purpose and Benefits

Bahmni need metadata to start the app. Some metadata, like PersonAttributeType, LoginLocations etc are synced when the app is logged into for the first time. Some metadata like concepts and AddressHierarchy are synced initially and also during subsequent syncs.

Events are raised whenever there is change in Concepts or address hierarchy. To raise events for existing concepts and address hierarchy,  please run following scripts - 

- [https://github.com/Bahmni/event-log-service/blob/master/event-log-service-webapp/src/main/resources/sql-scripts/copyOfflineConcepts.py](https://github.com/Bahmni/event-log-service/blob/master/event-log-service-webapp/src/main/resources/sql-scripts/copyOfflineConcepts.py)**
- [https://github.com/Bahmni/event-log-service/blob/master/event-log-service-webapp/src/main/resources/sql-scripts/createAddressHierarchyEvents.sql](https://github.com/Bahmni/event-log-service/blob/master/event-log-service-webapp/src/main/resources/sql-scripts/createAddressHierarchyEvents.sql)

## Steps

There are two types of synchronization:

- 
#### **Initial sync automatically at first login**

This synchronizes the device with all relevant data for the assigned location such as registration fields, forms and form fields, pre-existing patient data, et al. This happens automatically when a user selects a location for the first time and logs in. For further details refer [here](https://bahmni.atlassian.net/wiki/display/BAH/Using+Bahmni+Connect+App#UsingBahmniConnectApp-Initialsyncautomaticallyatfirstlogin).

Current Limitation
 
Initial synchronization of the Chromium Application stops when the User moves out of the tab on the chrome browser and resumes when the User returns to the tab

- 
#### **Regular sync on pressing the sync button**

This is required to regularly sync the device and Bahmni online with newly captured data. The recommended sync frequency is once a day.

For further details refer [here](https://bahmni.atlassian.net/wiki/display/BAH/Using+Bahmni+Connect+App#UsingBahmniConnectApp-Initialsyncautomaticallyatfirstloginhttps://bahmni.atlassian.net/wiki/display/BAH/Using+Bahmni+Connect+App#UsingBahmniConnectApp-Regularsynconpressingthesyncbutton).

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
