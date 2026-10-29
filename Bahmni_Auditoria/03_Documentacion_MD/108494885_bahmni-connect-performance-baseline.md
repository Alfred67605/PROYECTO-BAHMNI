---
id: "108494885"
title: "Bahmni Connect Performance Baseline"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/108494885/bahmni-connect-performance-baseline"
version: 24
updated: "2016-12-26T12:30:40.974Z"
author: "Siddhartha Mohapatra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:42.216Z"
---

# Bahmni Connect Performance Baseline

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/108494885)  
> **Versión del documento:** v24 (2016-12-26T12:30:40.974Z) | **Autor/Editor:** Siddhartha Mohapatra

---

This page is currently in progress and the numbers are not currently ready for public consumption. We are in process of testing Bahmni Connect under various loads and configurations, and are also executing some spikes to improve performance even further. Please watch this page for final numbers. Thanks!

## **Introduction**

To ensure the connect app works fine in various network conditions and load, there are performance tests done to come up with representative numbers. These numbers will help in capacity planning for the app and understanding the right Software/Hardware requirements before setting up the app.

## **Device/Configuration used for performance**

| **Device/** **Config** | **Chrome (Win)** | **Samsung Tab** | **Bahmni Server (AWS)** |
| --- | --- | --- | --- |
| version | Win 7 (32-bit) | - | 0.86 |
| Android | - | 4.2.2 | - |
| RAM | *4 GB | 1 GB | 8 GB |
| CPU | *2.40Ghz | 1.2Ghz Dual Core | 2.40GHz 2 cores |
| Storage | - | 3.5 GB (8GB) | 32 GB |
| IP/Hostname |  | - | Hosted on AWS |

### **Initial Sync Time Vs Network Bandwidth (Chrome/Tab)**

| **Device** | **Network Bandwidth** | **#Patient** | **# Events** | **Total Time** **(Min)** |
| --- | --- | --- | --- | --- |
| Chrome | 2G (450kb/s-150kb/s) | 30 | 9685 | 48 |
| Chrome | Wifi (1.9Mb/s - 1.2Mb/s) | 30 | 9685 | 30 |
| Samsung Tab | Wifi (1.5Mb/s - 1.9Mb/s) | 30 | 9685 | 95 |
| Samsung Tab | 2G (450kb/s-150kb/s) | 30 | 9685 | 120 |

**
**

### **Device Performance Post Sync: Chrome/Tab**

| **Device** | **Flow** | **#Encounters** | **Total Time (Secs)** |
| --- | --- | --- | --- |
| Chrome | Create Patient -> Save | 3500 | 1.78 |
| Clinical -> Patient Listing | 10.11 |  |  |
| Patient Listing -> Patient Dashboard | 7.5 |  |  |
| *Patient Dashboard -> Observation | 2 |  |  |
| Samsung Tab | Create Patient -> Save | 3500 | 5 |
| Clinical -> Patient Listing | 8 |  |  |
| Patient Listing -> Patient Dashboard | 17 |  |  |
| *Patient Dashboard -> Observation | 3 |  |  |

**
**

## **Observations**

1. Post sync, there's a lag of 4-5 secs on both the Chrome and Tab. Thus, a blank screen appears for every navigation that is performed on the devices."

2. If Sync fails for 16000+ events, the refresh doesn't start the sync again for remaining events, which is expected. Appears some storage issue with indexed DB in chrome"

3. The size of the DB grows along with the no. of events respectively. Refer the chart

4. If there are 5 devices running initial sync in parallel, the CPU utilization of mysql on bahmni server was recorded more than 75%"

5. The overall time for Sync depends on #Events, Network bandwidth, OS Configuration. For instance, 16000+ events took more than 3.5+ hours"

## **Recommendations**

- Bahmni Connect worked fine for smaller set of patients i.e. Patients: 30 and Encounters: 3500, thus, need to define the sync strategy accordingly to choose the smaller set of patients and encounters.
- To configure multiple devices in parallel, choose 2-3 devices at a time to configure as this will reduce the sync time on each device. Don't plan more than 5 devices at a time as it might make the server very slow and chances are likely high to get sync failures.
- At any point if the sync fails, the sync can be restarted by logging again to the app. Sync will start again from the last failed event and thus, will keep the existing data in tact.

## **Known Issues**

- Diagnosis goes undefined if the Nutritional value is left empty
- 
Performance Bug - If the initial sync fails for more than 16k events, the sync doesn't resume post refresh. Investigation has been started to resolve this

- Chrome: Adding Connect app extension and opening the app fails with "Offline Data not setup", if the chrome session was already active. 
**WorkAround:** Close the chrome App and open the app again.
- If user opens another tab/s in the same chrome instance, then initial sync stops. 
**WorkAround: **Open another chrome instance, instead of another tab in the same chrome instance
