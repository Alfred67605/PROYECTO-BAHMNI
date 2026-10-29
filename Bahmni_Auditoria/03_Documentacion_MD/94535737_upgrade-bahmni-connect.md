---
id: "94535737"
title: "Upgrade Bahmni Connect"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535737/upgrade-bahmni-connect"
version: 8
updated: "2018-08-28T12:40:11.728Z"
author: "swathi varkala"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:41.770Z"
---

# Upgrade Bahmni Connect

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535737)  
> **Versión del documento:** v8 (2018-08-28T12:40:11.728Z) | **Autor/Editor:** swathi varkala

---

This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

## Introduction

The Bahmni Connect metadata file present on the server decides whether the Bahmni Connect app on the devices needs to be upgraded or not.

The Bahmni Connect metadata file looks like this:
**offlineMetadata.json**

```
{
    "latestAndroidAppUrl": "https://www.dropbox.com/s/url/for/android/apk",
    "latestChromeAppUrl": "https://www.dropbox.com/s/url/for/chrome/app",
    "compatibleVersions": [0.79, 0.80]
}
```

When the device is connected to the network, it reads the metadata file and determines whether it has an update. If there is an update, the 'Update' button will be shown in the header next to the 'Sync' button. The offlineMetadata.json is present at *`/var/www/html/offlineMetadata.json*'.

There are two kinds of updates:

- **Forced update/Hard Update** - this means that the version installed on the device is not compatible with the server and it needs to be upgraded for the data to get synced to server. In this case, each time the app tries to sync the data to the server, it shows a popup with a link/button to upgrade the app.
- **Non-forced update/Soft Update** - this means that the version installed on the device is still compatible with the server and it need not be upgraded immediately to get the data synced. In this case, sync happens smoothly even if the app is not upgraded.

## Upgrading the Android App

For the Android app, the '*latestAndroidAppUrl*' in the offlineMetadata.json contains the url of latest apk released. On clicking the Update button, the apk is downloaded from the specified url in offlineMetadata.json and installed automatically.

In order to get the version information can be found under **Settings→ Application Manager→ Bahmni.** The version information is bundled into the apk and thus, static in nature.

## Upgrading the Chrome App

For the Chrome app, the '*latestChromeAppUrl*' in the offlineMetadata.json contains the url from where the chrome extension tar file can be downloaded. On clicking the Update button, the link with the url is shown so that the extension can be downloaded and installed manually.

Connect version information can be seen post the extension is added to chrome i.e. it shows up alongside the extension name. Moreover, if the user navigates to the extension folder, the manifest.json file will have version defined, which is used for version information.
**manifest.json**

```
{
    "name": "Bahmni",
    "description": "Bahmni is an easy to use, open source hospital system for healthcare providers in low-resource settings. Brought to you by Bahmni Coalition under fiscal sponsorship of OpenMRS.",
    "version": "0.88",
    "manifest_version": 2,
    "icons": {
        "128": "bahmni-128.png"
    },
    "app": {
        "launch": {
            "local_path": "index.html"
        }
    },
    "permissions": [
        "tabs",
        "http://*/*",
        "https://*/*"
    ],
    "key" : "akgemjphbnkkphopcgfjplhfemmgfolc",
    "minimum_chrome_version": "28",
    "content_security_policy": "script-src 'self' https://dev.bahmnidev.org 'unsafe-eval'; object-src 'self'"
}
```

To install the extension manually, the tar file has to be unzipped and put in the location from where the extension is loaded.
 
The extension should not be deleted from the Chrome browser to update the app. Deleting the extension deletes the data as well.

On this Page
 
 
 
 
**Related Pages**

 

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
