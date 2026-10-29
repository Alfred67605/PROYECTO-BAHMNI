---
id: "36077574"
title: "Setup DCM4CHEE Server with Oviyam2"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36077574/setup-dcm4chee-server-with-oviyam2"
version: 35
updated: "2022-08-04T07:22:34.969Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:26.512Z"
---

# Setup DCM4CHEE Server with Oviyam2

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36077574)  
> **Versión del documento:** v35 (2022-08-04T07:22:34.969Z) | **Autor/Editor:** Mohankumar Thangavel

---

## Purpose and Benefits

DCM4CHEE Server with Oviyam2 web viewer embedded : This DCM4CHEE server (JBOSS) is another PACS server which will be configured with Client's Digital X-Ray Machine's Modality/PACS Server to automatically deliver all the X-Rays(.dcm files / images) to it. Oviyam2 Dicom Web viewer, is embedded in DCM4CHEE JBOSS server, with Patient Id and Order Number used by Bahmni to show the X-Ray images.

**

Installation of dcm4chee is same like any other service in Bahmni, via an rpm. Please refer the [Install Bahmni](/wiki/spaces/BAH/pages/53837879/Install+Bahmni) installation guide.

After the installation is done, a few more steps are required to get everything up and running. 

## Steps

###  

### 1. Ensure dcm4chee service is running

### **![](https://bahmni.atlassian.net/wiki/download/attachments/36077574/Screen%20Shot%202016-06-28%20at%209.45.11%20PM.png?version=1&modificationDate=1467130640861&cacheVersion=1&api=v2)**

If service is installed but not running, then the service can be started using service dcm4chee start.

For troubleshooting, the logs for dcm4chee can be typically found at /var/lib/bahmni/dcm4chee-2.18.1-psql/server/default/log/server.log. 

  Both dcm4chee and oviyam2 can be accessed using the below urls.

  ip:8055/dcm4chee-web3, use admin/admin to login

![](https://bahmni.atlassian.net/wiki/download/attachments/36077574/Screen%20Shot%202016-04-13%20at%2012.16.08%20AM.png?version=1&modificationDate=1460487238473&cacheVersion=1&api=v2)

  ip:8055/oviyam2

![](https://bahmni.atlassian.net/wiki/download/attachments/36077574/Screen%20Shot%202016-04-13%20at%2012.25.23%20AM.png?version=1&modificationDate=1460487434635&cacheVersion=1&api=v2)
 
The dcmsnd utility provided by dcm4chee can be used to test uploading of images to it. 

```
dcmsnd DCM4CHEE@ipaddress:11112 image.dcm
```

Sample image : [image.dcm](/wiki/download/attachments/24215562/image.dcm?version=1&modificationDate=1437549937105&cacheVersion=1&api=v2)

Utilities can be downloaded from [https://sourceforge.net/projects/dcm4che/files/dcm4che2/2.0.28/](https://sourceforge.net/projects/dcm4che/files/dcm4che2/2.0.28/)

- 
Unzip the dcm4che-2.0.28-bin.zip file

- 
run the excecutable files with appropriate parameters.

### 2. Setup DCM4CHEE as PACS server in X-ray modality or another PACS 

dcm4chee is a PACS and will be used for image storage. So images need to be sent to dcm4chee. How to setup another piece of software (modality / another PACS) to send the images will be vendor specific. The vendor support engineer would typically know this. We wish to build knowlege repository of that a well. But for now, its recommended to take help from the vendor to set this up. 

They will have to configure dcm4chee as ImageStorage SCP with the below details

**Host IP** : <IP address of the machine where you have installed dcm4chee service>

**AE Title** : DCM4CHEE (default dcm4chee AE Title with bahmni installation)

**Port** : 11112 (default dcm4chee port with bahmni installatino for recieving images)

### 3. **Setup DCM4CHEE as Modality worklist**

Bahmni will send hl7 order messages to dcm4chee. dcm4chee will convert the order messages to worklist items. The items can then be polled by modality or another PACS. 

- Update dcm4chee to use orm2dcm_bahmni.xsl instead of default orm2dcm.xsl by going to the jmx console 
Go to ip:8055/jmx-console/HtmlAdaptor → Select service=HL7Service,type=ORM under dcm4chee.archive
 → Set Stylesheet = orm2dcm_bahmni.xsl (***Note:*** In docker this step is not needed. And the xsl stylesheet file itself is named as orm2dcm.xsl)
- Bahmni doesn't pass modality, Station AET and Station Name part of the HL7 message. If you are dealing with more than one modality, you can try customising the above mentioned stylesheet to look at the order name and determine the modality. If you are dealing with only one modality then you can set Default Modality, Default Station AET and Default Station Name in the above mentioned jmx console screen of dcm4chee. 
- Default DCM4CHEE HL7 server listens for HL7 Messages on 2575 port. If you want to follow the way it bahmni works out of the box, you need not change anything for this. 

Once the complete setup is working and orders are flowing from bahmni to dcm4chee (via pacs-integration), the worklist items would look like below

![](https://bahmni.atlassian.net/wiki/download/attachments/36077574/Screen%20Shot%202016-07-08%20at%207.55.42%20PM.png?version=1&modificationDate=1468473627491&cacheVersion=1&api=v2)
 
 Remember to press the search button to see the worklist items in modality worklist. 

### 4. **Setup PACS Query Config in OpenMRS**

Pacs Query is a OpenMRS module written to query for radiology order information from a PACS Server for Radiology orders made for a given patient. You can read more about it [here](https://github.com/Bahmni/pacsquery).

- Login to OpenMRS and validate if `Pacs Query` OMOD is running from Administration → Manage Modules.
- Now navigate to Administration → Advanced Settings and find the `pacsquery.pacsConfig` property.
- In that property add information about your PACS server from where the order information needs to be fetched. The format would be `@:
`. If your dcm4chee is running on the same host as OpenMRS the value would be **DCM4CHEE@localhost:11112. **For docker installations you can set the value as ***DCM4CHEE@dcm4chee:11112***

On this Page

 
 
 
Feature Details**

[Radiology and PACS Integration - Feature Guide](/wiki/spaces/BAH/pages/32604202/Radiology+and+PACS)

**Usage Details**

[PACS Integration - User Guide](/wiki/spaces/BAH/pages/32014462/PACS+Integration+and+Support)
