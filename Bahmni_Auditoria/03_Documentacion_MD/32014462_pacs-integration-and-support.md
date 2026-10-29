---
id: "32014462"
title: "PACS Integration and Support"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014462/pacs-integration-and-support"
version: 8
updated: "2016-03-18T05:55:03.875Z"
author: "Teresa Gracias"
category: "Manual_Usuario_Sub_Sub_Sub"
download_date: "2026-10-20T21:02:38.836Z"
---

# PACS Integration and Support

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014462)  
> **Versión del documento:** v8 (2016-03-18T05:55:03.875Z) | **Autor/Editor:** Teresa Gracias

---

## About the Feature
Bahmni provides the ability to integrate with PACS to send radiology orders and access fulfillments (radiology images) via a link to the DICOM web viewer. The integration with PACS has two main functions :
- Send the radiology order created in Bahmni to PACS server.
- Provide the ability to view the image stored in PACS against the corresponding radiology order. 

## Used By

The orders are usually placed by doctors and sometimes by other staff on behalf of the doctor based on pre-decided protocols. The radiology images are seen by Doctors for diagnostic purposes.

## How is it Used?

### Step 1: Place the Radiology Order

Select an option from the radiology Orders section of the Orders Tab. This will send the radiology order to the PACS server.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014462/Screen%20Shot%202016-03-03%20at%203.10.40%20pm.png?version=1&modificationDate=1457676844343&cacheVersion=1&api=v2)

**Image 1: Screen to place Radiology Orders**

### Step 2: Access the Radiology Image

After the XRay is taken, the radiology image can be automatically accessed from the "Digital Radiology" widget on the  Radiology Orders screen (Image 2). The Radiology images will be displayed using the inbuilt DICOM viewer (Image 3).

![](https://bahmni.atlassian.net/wiki/download/attachments/32014462/Screen%20Shot%202016-03-03%20at%203.00.25%20pm.png?version=1&modificationDate=1457676844404&cacheVersion=1&api=v2)

**Image 2: **Digital Radiology widget with links to access Radiology Images

******

![](https://bahmni.atlassian.net/wiki/download/attachments/32014462/Screen%20Shot%202016-03-03%20at%203.03.37%20pm.png?version=1&modificationDate=1457676844422&cacheVersion=1&api=v2)

**Image 3: **Radiology Images seen in a DICOM viewer

On this Page
 
 
 
 
Feature Details**

[Radiology and PACS - Feature Guide](/wiki/spaces/BAH/pages/32604202/Radiology+and+PACS)

**Implemnentation Details**

[Radiology and PACS - Implementer's Guide](/wiki/spaces/BAH/pages/32014588/Radiology+and+PACS+Integration)
