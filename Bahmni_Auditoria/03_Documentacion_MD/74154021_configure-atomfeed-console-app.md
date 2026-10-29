---
id: "74154021"
title: "Configure Atomfeed Console App"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/74154021/configure-atomfeed-console-app"
version: 6
updated: "2017-05-26T09:35:21.134Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:48.581Z"
---

# Configure Atomfeed Console App

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/74154021)  
> **Versión del documento:** v6 (2017-05-26T09:35:21.134Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Purpose and Benefits

Atomfeed Console is an independent component that shows the failed events that happened in an atomfeed client. There is a group in inventory file called atomfeed-console.

## Configuration

### Installing Atomfeed Console App

To install the application, put the IP address of the machine under atomfeed-console module in */etc/bahmni-installer/local* file as mentioned [here](https://github.com/Bahmni/bahmni-playbooks/blob/master/local#L37). Then run *bahmni install* command. The installer will take care of configuring the application.

### Adding Atomfeed App to Home Page

To add Atomfeed App to your Home Page, please add the config below to [extension.json](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/extension.json#L112-L121)

```
"atomfeedConsole": {
    "id": "bahmni.atomfeed.console",
    "extensionPointId": "org.bahmni.home.dashboard",
    "type": "link",
    "translationKey": "MODULE_LABEL_ATOMFEED_CONSOLE_KEY",
    "url": "/atomfeed-console",
    "icon": "fa fa-terminal",
    "order": 13,
    "requiredPrivilege": "app:admin"
  }
```

On this Page

 
 
 
**Feature Details**

[Atomfeed Console - Feature Guide](/wiki/spaces/BAH/pages/98402414/Atomfeed+Console)

**
Usage Details**

[Atomfeed - User Guide](/wiki/spaces/BAH/pages/116201081/Using+Atomfeed+Console)
