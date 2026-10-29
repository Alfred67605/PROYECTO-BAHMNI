---
id: "94535745"
title: "Using Bahmni Connect App"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535745/using-bahmni-connect-app"
version: 34
updated: "2022-04-06T13:52:00.762Z"
author: "Gurpreet Luthra"
category: "Manual_Usuario_Sub"
download_date: "2026-10-20T21:02:53.164Z"
---

# Using Bahmni Connect App

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535745)  
> **Versión del documento:** v34 (2022-04-06T13:52:00.762Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

Bahmni Connect allows the user to access Bahmni in areas (satellite areas) where there is limited or no internet connectivity. Bahmni Connect records ramped down medical information about patients. The information collected in Bahmni Connect gets synced with the Bahmni online server (mother location) when the device gets internet connectivity.

Bahmni Connect is currently being used by:

- [Community Health Workers](https://en.wikipedia.org/wiki/Community_health_worker) (CHWs) who use handheld devices to register patients and record observations when they have no or limited access to internet.  
- Users in outreach clinics where the same device travels across multiple outreach clinics during an outreach tour/s. Such outreach tours occur in resource constrained environments with no or limited internet connectivity.

Bahmni Connect application supplements the regular Bahmni application in the following ways:

- 
Allows patient information from remote areas to reside at a central location to help in clinical decisions, epidemiology, etc.

- Makes the work of CHWs visible to the clinicians to help in better healthcare in remote and resource constrained areas

Bahmni Connect currently runs on two platforms:

- Chromium Application: This is a web extension which runs on the chrome browser
- Android Application: This is an Android application which can run on any android mobile device

**

Featured Article
 
Read an article by Arjun on his experience deploying Bahmni Connect app in rural remote India at JSS subcenters here: [Offline Patient Search and Registration In Remote Sub-centers of JSS](https://medium.com/bahmni-blog/offline-patient-search-and-registration-in-remote-sub-centres-of-jss-using-bahmni-connect-88987b040df8#.871i71j4l)

Using Avni for Field Data capture
 
[Avni](https://avniproject.org) is an opensource application, that is offline-first and designed for use in Field Work and Community settings. This is also a good option to consider for field work, data capture based on digital offline forms and then sync them to a centralised cloud instance for Reporting, or into Bahmni. Read more about Bahmni-Avni here: [Introduction](https://medium.com/avni-bahmni-integration/introduction-and-context-c82c480e7de4) and [Integration-Code-Github](https://github.com/avni-bahmni-integration). This integration is Live in Ashiwini hospital: [https://avniproject.org/blog/how-avni-has-become-pillar-of-community-MIS-at-ASHWINI/](https://avniproject.org/blog/how-avni-has-become-pillar-of-community-MIS-at-ASHWINI/)

## Using Bahmni Connect

### Overall Workflow

The image below describes Bahmni Connect usage at a broad level for the end user:

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/image2016-11-24%2020:2:40.png?version=1&modificationDate=1479997962994&cacheVersion=1&api=v2)

### Synchronization of the Client Device

There are two types of synchronization:

- 
#### **Initial sync automatically at first login**

This synchronizes the device with all relevant data for the assigned location such as registration fields, forms and form fields, pre-existing patient data, et al. This happens automatically when a user selects a location for the first time and logs in.

Detailed below are the steps to sync the Client Device:

1. Go to an area with Network Connectivity

2. Enter Credentials, select a location and log in (screenshot below)

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/1%20-%20Offline%20Login%20Screen.png?version=1&modificationDate=1480677598467&cacheVersion=1&api=v2)
3. In the case of the Initial Sync, the Location Data is synced, and upon successful completion the following screen appears
![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/4%20-%20Initial%20Data%20Sync%20Complete.png?version=1&modificationDate=1480680437610&cacheVersion=1&api=v2)

 
To resolve sync errors please contact your System Admin

- 
#### **Regular sync on pressing the sync button** 

This is required to regularly sync the device and Bahmni online with newly captured data. The recommended sync frequency is once a day.

Detailed below are the steps to sync the Client Device:

1. Go to an area with Network Connectivity

2. Enter Credentials, select a location and log in (screenshot below)

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/1%20-%20Offline%20Login%20Screen.png?version=1&modificationDate=1480677598467&cacheVersion=1&api=v2)

3. For Regular sync, the catchment data is synced and the Sync button has to be pressed. Bahmni Connect also has the provision of a scheduled sync, and the device is synced with Bahmni online as scheduled.

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/2%20-%20Sync%20Button.png?version=2&modificationDate=1480679593630&cacheVersion=1&api=v2)

**Successful Regular Sync with relevant status message**

**![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/4%20-%20Error%20Log%20Container%20in%20Offline.png?version=1&modificationDate=1480679935760&cacheVersion=1&api=v2)**

**Regular Sync with Errors Logged in the Error Log**

 
To resolve errors please contact your System Admin

### Supported Functionality

As of now, Bahmni Connect supports the following features:

#### Registering a Patient

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/4%20-%20A%20-%20Registration%20Entry%20Page%20for%20New%20Patients.png?version=1&modificationDate=1480681316936&cacheVersion=1&api=v2)

#### Viewing Patient Data on Patient Dashboard

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/6%20-%20Patient%20Dashboard%20Screen%20to%20View%20Patient%20Data.png?version=1&modificationDate=1480681384765&cacheVersion=1&api=v2)

#### Recording Observations

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/7-%20Observations%20Tab%20to%20Enter%20Observations%20for%20the%20Given%20Patient.png?version=1&modificationDate=1480682350589&cacheVersion=1&api=v2)

#### Entering Consultation Notes

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/8%20-%20Entering%20Consultation%20Notes.png?version=1&modificationDate=1480682406519&cacheVersion=1&api=v2)

### Updating the Bahmni Connect Application

Bahmni Connect and Bahmni applications are regularly upgraded with new versions to support a newer set of features. Hence Bahmni Connect must be regularly updated to use the enhanced functionality as well as to be compatible with the newer version of Bahmni. There are two types of updates:

- **Non-forced Update** - This means that a newer version is available, but it is still compatible to use Bahmni Connect client with Bahmni.
- **Forced Update** - This means that Bahmni Connect cannot be used unless it is updated.

Whenever an update is available, the update button is enabled in the top right corner on the landing page.

#### Upgrading the Android Application

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/image2016-11-24%2020:20:22.png?version=1&modificationDate=1479999025548&cacheVersion=1&api=v2)

#### Upgrading the Chrome Extension

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/image2016-11-24%2020:25:40.png?version=1&modificationDate=1479999342682&cacheVersion=1&api=v2)

 
The older extension should not be deleted from chrome browser to update the application. Deleting the extension deletes the data as well.

### Logging Out of the Bahmni Connect

Click the Logout Button to log out of the Bahmni Connect

![](https://bahmni.atlassian.net/wiki/download/attachments/94535745/9%20-%20Offline%20Logout%20Sidebar.png?version=1&modificationDate=1480680983651&cacheVersion=1&api=v2)
 
The screenshots are taken from a Samsung tablet running on Android 4.2.2. For the Chromium Application, the functionalities look and remain the same

Current Limitations
 
Initial synchronization of the Chromium Application stops when the User moves out of the tab on the chrome browser and resumes when the User returns to the tab

On this Page
 
 
 
 
Feature Details**

[Bahmni Connect](/wiki/spaces/BAH/pages/94535750/Bahmni+Connect)

**Implementation Details**

[Implementing Bahmni Connect](/wiki/spaces/BAH/pages/94535684/Bahmni+Connect+App)
