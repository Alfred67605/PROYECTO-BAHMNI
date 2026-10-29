---
id: "325713930"
title: "Setup Bahmni Connect using Location based sync strategy"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/325713930/setup-bahmni-connect-using-location-based-sync-strategy"
version: 10
updated: "2018-09-05T10:13:43.622Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:40.115Z"
---

# Setup Bahmni Connect using Location based sync strategy

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/325713930)  
> **Versión del documento:** v10 (2018-09-05T10:13:43.622Z) | **Autor/Editor:** Angshuman Sarkar

---

Before you start using Connect (as PWA or Android App), you must setup the synchronization strategy first.   

### **Steps**

##### Set LocationSync strategy in Openmrs global property. 

In Openmrs go to Advanced Settings and set sync strategy property

**bahmniOfflineSync**.**strategy **with **org.bahmni.module.bahmniOfflineSync.strategy.LocationBasedSyncStrategy**.

          ![](https://bahmni.atlassian.net/wiki/download/attachments/325713930/Screen%20Shot%202017-11-30%20at%204.09.06%20PM.png?version=1&modificationDate=1512038373004&cacheVersion=1&api=v2)

##### Set up address hierarchy levels and address hierarchy entries.

- Refer this link [Configure Address Hierarchy](/wiki/spaces/BAH/pages/37945505/Configure+Address+Hierarchy) to setup address hierarchy levels and adding address hierarchy entries using CSV upload.
- Add user generated id for each address hierarchy entry in the database.

              

```
update address_hierarchy_entry set user_generated_id= where address_hierarchy_entry_id=; 
```

Sample user generated ids

              

```
select address_hierarchy_entry_id , name, level_id , parent_id , user_generated_id from address_hierarchy_entry;
```

              ![](https://bahmni.atlassian.net/wiki/download/attachments/325713930/Screen%20Shot%202017-11-30%20at%204.25.47%20PM.png?version=1&modificationDate=1512039360793&cacheVersion=1&api=v2)

##### Specify address for login location.

In OpenMRS navigate to *Manage Locations* and add address to login location. Only the patients whose address matches with address of login location will sync to connect device.

           ![](https://bahmni.atlassian.net/wiki/download/attachments/325713930/Screen%20Shot%202017-11-30%20at%204.26.59%20PM.png?version=1&modificationDate=1512039531794&cacheVersion=1&api=v2)

##### Add Patient Attribute called addressCode.

In OpenMRS go to *Manage Person Attribute Types* and add new person attribute type called **addressCode**.

         ![](https://bahmni.atlassian.net/wiki/download/attachments/325713930/Screen%20Shot%202017-11-30%20at%204.30.34%20PM.png?version=1&modificationDate=1512039700418&cacheVersion=1&api=v2)

##### Configure visit and encounter type.

In OpenMRS, "Administration => Visits => Manage Visit Types", create a visit type with name "FIELD".  

In OpenMRS, "Administration => Encounters => Manage Encounter Types" and create an encounter type with name "Field".

  

##### Setup registration app config

 Add the below config in registration.app.json file

```
 "addressHierarchy": {
      "showAddressFieldsTopDown": true
 },
 "defaultVisitType": "FIELD"
```

##### Generate concatenated configs 

```
bahmni -i local concat-configs 
```

##### 

##### Create patient zip files

```
bahmni -i local create-connect-artifacts
```
