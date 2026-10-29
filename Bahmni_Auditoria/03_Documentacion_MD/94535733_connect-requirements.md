---
id: "94535733"
title: "Connect Requirements"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535733/connect-requirements"
version: 23
updated: "2018-09-05T10:25:27.077Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:39.122Z"
---

# Connect Requirements

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535733)  
> **Versión del documento:** v23 (2018-09-05T10:25:27.077Z) | **Autor/Editor:** Angshuman Sarkar

---

This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

## Minimum Hardware Requirements

**
 
If the server/tablet has lower configuration than what is advised above, performance might be affected adversely.

| **On the local box/AWS** | **On the Tablet/Device** |
| --- | --- |
| Win 7 | 4.2.2 (Android Ver) |
| 1 GB (RAM) | 1 GB (RAM) |
| 2.1Ghz (Dual Core) | 1.2Ghz (Dual Core) |
| 20 GB (Storage) | 8 GB (Storage) |

 
Figures above are representative

## 
Software Requirements

Bahmni Connect supports 2 applications i.e. Android Application and Chrome Extension for Tablet and Chrome browser respectively. Both work as independent applications and do not share any dependency. In order to work with the Android app, download the latest version/specific version from the Bahmni repository.  Kindly ensure the steps below are followed **before** using Bahmni Connect:

1. Install released Bahmni version to the local box and have the instance running i.e. <implementation_name>.mybahmni.org

2. Create a domain name for the implementation and install SSL certificates

3. Setup Bahmni Connect Sync strategy under OpenMRS global settings. Connect ships with 2 such strategies and you may even develop and plugin your custom strategy. The strategies packaged are

- **Identifier based Sync Strategy: **This is useful if you use an identifier prefix and consistent with the locations where you operation. For example, in the demo environment - we have subcenters defined as Subcenter 1 and Subcenter 2 which represent two locations Bahmni and Semariya with BAM and SEM prefix respectively. Any patients with identifiers prefixed with BAM or SEM will sync to the Connect depending on your login location.  You can do this, by setting the following Global Property to *IDBasedSyncStrategy*

```
bahmniOfflineSync.strategy = org.bahmni.module.bahmniOfflineSync.strategy.IDBasedSyncStrategy
```

- **Location Based Sync Strategy: **This is useful when you have catchment areas defined in terms of geographical hierarchy. The synchronization of the patient information happens based on the patient's address and its relevance to a catchment area. 

```
bahmniOfflineSync.strategy = org.bahmni.module.bahmniOfflineSync.strategy.LocationBasedSyncStrategy
```

```

```

4. Download Bahmni Connect App from the URL: [https://bahmni-repo.twhosted.com/offline_artifacts/](https://bahmni-repo.twhosted.com/offline_artifacts/)

5. Install and use the app following the steps [Installation Steps - Connect](/wiki/spaces/BAH/pages/94535735/Installation+Steps+-+Connect)

On this Page
 
 
 
 
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
