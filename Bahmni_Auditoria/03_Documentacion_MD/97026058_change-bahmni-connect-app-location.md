---
id: "97026058"
title: "Change Bahmni Connect App Location"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/97026058/change-bahmni-connect-app-location"
version: 15
updated: "2016-12-29T12:16:34.010Z"
author: "Siddhartha Mohapatra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:41.206Z"
---

# Change Bahmni Connect App Location

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/97026058)  
> **Versión del documento:** v15 (2016-12-29T12:16:34.010Z) | **Autor/Editor:** Siddhartha Mohapatra

---

This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

## Purpose

Bahmni Connect allows the user to access Bahmni in areas where there is limited or no internet connectivity. Bahmni Connect records ramped down medical information about patients. The information collected in Bahmni Connect gets synced with the Bahmni online server (mother location) when the device gets internet connectivity.

Once initially synced, the location gets mapped to the device. If the device needs to service a new location then the application has to be removed, re-installed and then synced to the new location. Please find the steps with the associated screenshots below.
 
The screenshots below are taken from a Samsung tablet running on Android version 4.2.2. Based on tablet UI and Android version there may be slight variance in steps
 
Please note that the device can be mapped to a new location only when the device has internet connectivity

**

## Steps

1.Switch on the Device

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/1%20-%20Switch%20on%20the%20Device.png?version=2&modificationDate=1480680642821&cacheVersion=1&api=v2)

2. Navigate to Application Manager

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/2%20-%20Go%20to%20Application%20Manager.png?version=1&modificationDate=1480679729837&cacheVersion=1&api=v2)

3. Uninstall Bahmni Connect from the Device
![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/3%20-%20Uninstall%20Bahmni.png?version=1&modificationDate=1480679784465&cacheVersion=1&api=v2)

4. Go to [https://bintray.com/bahmni/generic/download_file?file_path=bahmni-connect-0.87-8.apk](https://bintray.com/bahmni/generic/download_file?file_path=bahmni-connect-0.87-8.apk)
 
Incase of the chromium application go to:

[https://bintray.com/bahmni/generic/download_file?file_path=bahmni-connect-0.87-8.tar.gz](https://bintray.com/bahmni/generic/download_file?file_path=bahmni-connect-0.87-8.tar.gz)

- Download the .tar.gz file
- Unzip the file
- Go to apps in Chrome
- Click on Settings>Extension>Load Unpacked Extension>Load the Extension File

7. Wait Until Bahmni APK Is Downloaded on the Device

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/Screenshot_2016-12-02-16-26-15.png?version=1&modificationDate=1480680060635&cacheVersion=1&api=v2)

8. Install the APK

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/10%20-%20Install%20the%20Offline%20APK%20Again.png?version=2&modificationDate=1480680178974&cacheVersion=1&api=v2)

9. Open Bahmni Application on the Device

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/1%20-%20Switch%20on%20the%20Device.png?version=2&modificationDate=1480680642821&cacheVersion=1&api=v2)

10. Enter the Hostname of Bahmni Online Server

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/12%20-%20Enter%20the%20Hostname%20of%20Bahmni%20Online.png?version=1&modificationDate=1480680686190&cacheVersion=1&api=v2)

11. Select the New Location, Enter Your User Credentials and Sync

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/13%20-%20Select%20the%20New%20Location.png?version=1&modificationDate=1480680967060&cacheVersion=1&api=v2)

12. Sync the Device to the New Location

![](https://bahmni.atlassian.net/wiki/download/attachments/97026058/14%20-%20Sync%20the%20Device%20to%20the%20New%20Location.png?version=1&modificationDate=1480681018636&cacheVersion=1&api=v2)

 
And you are good to go!

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
