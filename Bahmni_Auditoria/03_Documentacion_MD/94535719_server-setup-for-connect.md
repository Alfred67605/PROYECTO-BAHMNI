---
id: "94535719"
title: "Server Setup For Connect"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535719/server-setup-for-connect"
version: 30
updated: "2020-12-16T09:42:51.065Z"
author: "angshuman sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:37.607Z"
---

# Server Setup For Connect

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535719)  
> **Versión del documento:** v30 (2020-12-16T09:42:51.065Z) | **Autor/Editor:** angshuman sarkar

---

# Requirements on Server for communicating with the Bahmni Connect App
 
This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

## **Hardware Requirements**

A normal Bahmni server is required with system requirements as specified [here](https://bahmni.atlassian.net/wiki/display/BAH/System+Requirements). Additionally, an extra omod (bahmni-offline-sync) and a service (Bahmni-event-log-service) is required for the Bahmni Connect App.

### Bahmni Connect App Components on the Server

- 
Needs Bahmni-offline-sync omod. To install, run the following command:

```
yum install bahmni-offline
```

This will get the corresponding omod and places it in /opt/openmrs/modules . 

- 
 Needs bahmni-event-log-service. To install, run the following command:

```
yum install bahmni-event-log-service
```

Alternate way of Installation
 
We can also install the above mentioned components using bahmni install command line. For achieving that, one has to edit the inventory file by specifying the IP address in the inventory file under *bahmni-offline* and *bahmni-event-log-service*

**
run the install command with appropriate inventory file name. **

```
bahmni - i  install
```

 
The above mentioned changes to inventory file should be done before running the install command

### Server Configurations

#### Setup Sync Strategy

Setup Bahmni Connect Sync strategy under OpenMRS global settings. Connect ships with 2 such strategies and you may even develop and plugin your custom strategy. The strategies packaged are

- **Identifier based Sync Strategy: **This is useful if you use an identifier prefix and consistent with the locations where you operation. For example, in the demo environment - we have subcenters defined as Subcenter 1 and Subcenter 2 which represent two locations Bahmni and Semariya with BAM and SEM prefix respectively. Any patients with identifiers prefixed with BAM or SEM will sync to the Connect depending on your login location.  You can do this, by setting the following Global Property to *IDBasedSyncStrategy*

**

```
bahmniOfflineSync.strategy = org.bahmni.module.bahmniOfflineSync.strategy.IDBasedSyncStrategy
```

- **Location Based Sync Strategy: **This is useful when you have catchment areas defined in terms of geographical hierarchy. The synchronization of the patient information happens based on the patient's address and its relevance to a catchment area. 

```
bahmniOfflineSync.strategy = org.bahmni.module.bahmniOfflineSync.strategy.LocationBasedSyncStrategy
```

- Configure the classpath for the strategy for filter evaluation in OpenMRS global properties for the key  'bahmniOfflineSync.strategy' as mentioned [here](/wiki/spaces/BAH/pages/325713930/Setup+Bahmni+Connect+using+Location+based+sync+strategy). For example, the screenshot below shows the setup of LocationBasedSyncStrategy. 

          ![](https://bahmni.atlassian.net/wiki/download/attachments/94535719/Screen%20Shot%202016-11-24%20at%203.56.33%20PM.png?version=1&modificationDate=1479983283204&cacheVersion=1&api=v2)

#### Generate Concatenated Configs for download

- 
As part of initial sync, the offline app pulls the concatenated version of the configs in bahmni_config. To concatenate the configs, run the following command.

```
bahmni -i  concat-configs
```

Note
 
We highly recommend you to add separate *offline* config folder for Bahmni Connect as Connect supports only Clinical and Registration modules. One can download the *offline* folder from [default-config](https://github.com/Bahmni/default-config) repo and place it in */var/www/bahmni_config* folder. Run the above **concat-configs** command after adding the *offline* folder.

#### Generate Artefacts for Initial Sync Improvements

- 
From release v0.89, as part of initial sync the offline app syncs all the patients belonging to the LoginLocation/Filter at once instead of syncing one after the other. This is done to reduce the initial sync time. For this to happen, there is a scheduler which runs every night which creates one zip file per filter containing all the patients data for that filter. You can also trigger the job for creating the zip files manually by running the following command.

```
bahmni -i  create-connect-artifacts
```

- 
All the zip files created as part of the scheduler will be stored in the directory '/home/bahmni/init_sync/'. This can be configured using the global property 'bahmniconnect.initsync.directory'. 

![](https://bahmni.atlassian.net/wiki/download/attachments/94535719/Screenshot%202017-03-07%2014.51.33.png?version=1&modificationDate=1488878553149&cacheVersion=1&api=v2)
 
If implementer does not run the above command ( **create-connect-artifacts** ) command, then any patient data will not sync as part of initial sync.

#### Offline Concepts Setup

All concepts and terminologies relevant will be synced. Essentially all concepts that deemed as Offline Available Concepts will be downloaded. For this to happen, 

You must have a concept named "Offline Concepts" defined in OpenMRS Concept dictionary. This concept is of class 'ConvSet', Is a set, and datatype specified as N/A. All concepts which are members of this concepts will be synchronized to Connect. 

- If you are creating concepts and want them to be available for usages (e.g. in forms), then you must add the concepts as members of the 'Offline Concepts'

There is an utility script available  which will inspect all templates defined under 'All Observation Templates' and add all relevant concepts as members of 'Offline Concepts'. Please refer for more details in [Installation Steps - Connect Server](/wiki/spaces/BAH/pages/94535723/Connect+Installation+Steps+on+Server) for the utility script '*copyOfflineConcepts.py*'

- The script does not inspect concepts used in 'Forms 2.0' defined forms
- The script also does not inspect concepts used in registration second page forms.

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
