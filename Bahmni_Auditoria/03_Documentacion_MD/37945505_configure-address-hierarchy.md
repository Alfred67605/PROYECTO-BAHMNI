---
id: "37945505"
title: "Configure Address Hierarchy"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945505/configure-address-hierarchy"
version: 16
updated: "2017-04-17T05:58:24.483Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:03.097Z"
---

# Configure Address Hierarchy

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945505)  
> **Versión del documento:** v16 (2017-04-17T05:58:24.483Z) | **Autor/Editor:** Himabindu Akkinepalli

---

# Purpose

Bahmni uses the Address Hierarchy module of OpenMRS to keep a list of address entries. Follow steps below to configure a new address hierarchy for your implementation.
 
This step is not mandatory. 

# Configuration

There are two things which can be configured in address section:

- The way you want to enter the address (Top-down/Bottom-up)
- The level from which the fields should have strict autocomplete (values should only be selected from autocomplete search list).

Bahmni allows you to configure address hierarchy form by two ways.

- Bottom - Up (Ex:- Village – Tehsil – District - State)

![](https://bahmni.atlassian.net/wiki/download/attachments/37945505/Screen%20Shot%202016-08-22%20at%2011.47.42%20am.png?version=1&modificationDate=1492408260993&cacheVersion=1&api=v2)

When a item is selected from the 'Village' Dropdown, all the above levels will be autopopulated automatically.

- Top - Down (Ex:- State – District - Tehsil – Village)

![](https://bahmni.atlassian.net/wiki/download/attachments/37945505/Screen%20Shot%202016-08-22%20at%2011.51.36%20am.png?version=1&modificationDate=1492408392555&cacheVersion=1&api=v2)

When parent level is filled, the child level will be filtered based on the value entered in parent field. For example, If 'Chattisgarh' is entered in State, only the districts which comes under 'Chattisgarh' will be  present in the autocomplete list of 'District' field.

To configure it,  the following can be added in app.json's config section. 
**Sample Config**

```
"addressHierarchy": {
   "showAddressFieldsTopDown": true,
   "strictAutocompleteFromLevel": "address3" //address3 is the addressfield name of Tehsil
}
```

**

- Bottom up' approach is the default address hierarchy configuration. If top down approach has to be supported, then 'showAddressFieldsTopDown' should be set to true.
- In both top-down and bottom-up address hierarchy, the address fields supports free text by default. If the field has to support only autocomplete then the address level from which it should support strict autocomplete can be specified using following configuration 
Example:
"strictAutocompleteFromLevel": "address3"
 In the above example starting from tehsil all the above levels(eg: district and state) will support strict autocomplete.

# Steps

### 1) Upload CSV with address mappings

Address Hierarchy needs to be configured in OpenMRS for it to be displayed in the Bahmni UI. It is best set up by uploading a Comma Separated Values (CSV) file with the desired address hierarchy. For e.g., if a hierarchy is defined as *State -> District -> Taluka / Block -> Village / City* then the CSV should have the format of *State, District, Taluka , Village *
 
Note that the CSV columns should be in the order of Bigger Geographical region to Smaller region. Otherwise the address fields would appear in reverse order on the Registration page and auto-complete will not be useful.

Example
 
For example, refer below. Also refer to attached [address_hierarchy.csv](https://bahmni.atlassian.net/wiki/download/attachments/1867784/SEARCH_address_hierarchy.csv?version=1&modificationDate=1398859381750&api=v2)

| **Hierarchy** | **State** | **District** | **Taluka** | **Village** |
| --- | --- | --- | --- | --- |

| **Incorrect** | Maharashtra | Ghot | Chamorshi | Gadchiroli |
| --- | --- | --- | --- | --- |
| **Correct** | Maharashtra | Gadchiroli | Chamorshi | Chamorshi |

After creating such a CSV, visit OpenMRS > Administration > Manage Address Hierarchy page to upload it.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945505/Screen%20Shot%202015-11-16%20at%202.01.41%20PM.png?version=1&modificationDate=1453269475199&cacheVersion=1&api=v2)

In the "**Upload Address Hierarchy" **section:

![](https://bahmni.atlassian.net/wiki/download/attachments/37945505/Screen%20Shot%202015-11-16%20at%202.04.07%20PM.png?version=1&modificationDate=1453269475187&cacheVersion=1&api=v2)

#### **Settings for the Screenshot above:**

- **Select** the CSV file to upload
- **Delimiter** (regex format):  ',' (without quotes)
- **User-Generated Id Delimiter** (regex format): leave as blank
- **Overwrite Existing Hierarchy**: If there is an existing address hierarchy that needs to be replaced, then it should be marked as "checked". If this is left "unchecked" then new addresses will get appended to the existing hierarchy.
- Click *Upload*

### 2) Map Address Fields** **

Once the Address CSV is successfully uploaded, a list of fields will be visible in the ***Address Hierarchy Levels* **as shown below:

![](https://bahmni.atlassian.net/wiki/download/attachments/37945505/Address_hierarchy.png?version=1&modificationDate=1453269475169&cacheVersion=1&api=v2)

#### **Settings for the Screenshot above:**

- Click on the Edit link next to the field to specify the *Name*, *Address Field*" and *Required* flag.
- **Name***:* is what would be the Label displayed to the user on Registration Page.
- **Address** **Field***: *is stored in the "*person_address*" table. From DB perspective this does not matter but keeping these closest to relevant fields is a good practice.

Once this is done for all fields, the address hierarchy setup is complete.

On this Page
 
 
 
 
Related Links**

- [Address Hierarchy Module (OpenMRS Documentation)](https://wiki.openmrs.org/display/docs/Address+Hierarchy+Module) 
- [OpenELIS and OpenMRS Address Mappings](/wiki/spaces/BAH/pages/4915202/Address+Mapping+between+OpenELIS+and+Bahmni+OpenMRS)
- [India Address Hierarchy (OpenMRS Talk Discussion)](https://talk.openmrs.org/t/trying-to-build-a-comprehensive-address-hierarchy-for-india/9697/5)
