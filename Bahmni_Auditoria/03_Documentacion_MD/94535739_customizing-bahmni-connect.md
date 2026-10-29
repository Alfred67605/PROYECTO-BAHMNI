---
id: "94535739"
title: "Customizing Bahmni Connect"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535739/customizing-bahmni-connect"
version: 52
updated: "2026-08-21T23:25:53.050Z"
author: "ماجد غالب"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:40.705Z"
---

# Customizing Bahmni Connect

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535739)  
> **Versión del documento:** v52 (2026-08-21T23:25:53.050Z) | **Autor/Editor:** ماجد غالب

---

This guide is currently In-Progress. Over the next few months, content will be added to it. 

If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them

## Purpose and Benefits

Bahmni Connect, allows Community Health Workers (CHW) to use Bahmni to register patients, view medical records, and enter brief treatment data in remote, internet-lacking locations. It is especially useful in low resource settings.

Detailed below is a walkthrough of the various features available with Bahmni Connect.

## Supported Features

### 1) Login Location

When a Community Health Worker (CHW) logs in to the application using the handheld device for the very first time they are authenticated against the server and granted access to the application. Along with this, their credentials are also stored in the handheld device for authentication when they are offline. CHWs are tied to a specific location from where they will operate. Transfers to other districts are rare and even if the CHW is transferred, the device used by the CHW stays in the same location. Thus no choice is provided, and only the last successful login is stored in the device.

The login location selected by the CHW will also have some catchment ids stored as an attribute of that location. These catchment ids and the login locations must be stored locally after the first successful login. For subsequent logins that happen when offline, the default login location will be fetched from the locally stored values and pre-populated on the login screen. The catchment ids pertaining to that login location must be fetched from the values stored locally and used to set the filter criteria for data from the server during sync.

For the first time, when the app is installed, all the available locations (pulled from OpenmMRS) are shown. Upon selection of login location and first successful login, set the selected login location as the default login location. This login location and the corresponding catchment ids (stored as login location attributes) are stored locally. 
 
Development is currently in progress to make Bahmni Connect generic enough to support different kind of address hierarchies

**

The following java file must be defined to provide a location specific sync config for any given location
 Click here to expand and view SampleLocationFilter.java...SampleLocationFilter.java**

```
package org.bahmni.module.bahmniOfflineSync.filter; // before 0.85
package org.bahmni.module.bahmniOfflineSync.strategy; // after 0.85
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class SampleLocationFilter implements FilterEvaluator {
    public SampleLocationFilter() {
		// initialize stuff if needed here
    }
    public String evaluateFilter(String uuid, String category) {
		String filter = "";
		// decide the corresponding filter for Event Records
		return filter;
	}
	public Map> getFilterForDevice(String provider, String addressUuid, String loginLocationUuid) {
		Map> categoryFilterMap = new HashMap();
		// populate the categoryFilterMap for the Login Locations
		return categoryFilterMap;
	}
	public List getEventCategoriesList() {
		List eventCategoryList = new ArrayList();
		// populate the eventCategoryList for the categories to be synced
		return eventCategoryList;
	}
}
```

 
 Package name for the file is:

**org.bahmni.module.bahmniOfflineSync.strategy.SampleLocationFilter** (*before 0.85*) 

**org.bahmni.module.bahmniOfflineSync.strategy.SampleLocationFilter** (*after 0.85*)
 
The package name mentioned above must be specified as a value in the OpenMRS global properties with the key **bahmniOfflineSync.eventlog.filterEvaluator** (*before 0.85*) and **bahmniOfflineSync.strategy** (*after 0.85*) for the system to pick it up. 

**

This file needs to be written here [https://github.com/Bahmni/bahmni-offline-sync](https://github.com/Bahmni/bahmni-offline-sync) and deployed as an omod in the OpenMRS modules. The following filter criteria will also be defined in this file.

### 2) Setting Apps as Online/Offline

Certain apps such as National Registry must be displayed on the offline device only when it is connected online. Similarly certain features such as error logs need not be displayed when the device is offline. The below changes have to be done to ***extension.json*** located at ***bahmni_config/openmrs/apps/home/***

**Example 1)  "exclusiveOnlineModule": true**
 
Here exclusiveOnlineModule is set to true. This means the app should only be shown when the offline device is connected to the internet.
 Click here to expand and view sample configuration...

```
"bahmni_nationalregistry_search": {
  "extensionPointId": "org.bahmni.home.dashboard",
  "url": "../../openmrs/shrclient/mciPatient.page",
  "order": 7,
  "translationKey": "National Registry",
  "requiredPrivilege": "National Registry",
  "type": "link",
  "id": "bahmni.nationalregistry.search",
  "icon": "fa-user",
  "exclusiveOnlineModule": true
}
```

**Example 2) "exclusiveOfflineModule": true**
 
Here exclusiveOfflineModule is set to true. This means the app should be only shown when the offline device is not connected to internet.
 Click here to expand and view sample configuration...

```
"bahmni_nationalregistry_search": {
  "extensionPointId": "org.bahmni.home.dashboard",
  "url": "../../openmrs/shrclient/mciPatient.page",
  "order": 7,
  "translationKey": "National Registry",
  "requiredPrivilege": "National Registry",
  "type": "link",
  "id": "bahmni.nationalregistry.search",
  "icon": "fa-user",
  "exclusiveOfflineModule": true
}
```

 
If Neither of *exclusiveOnlineModule* or *exclusiveOfflineModule* is configured, then the app(s) should always be shown in the home dashboard.

### 3) Configuring Support for Multiple Wards

An address hierarchy entry may have more than one login location and each login location may cater only to a group of child address entries. In this case OpenMRS does not allow configuration of multiple wards under a single login location. In this case we can use the location attribute "***catchmentFilters***". The user generated ids of the wards can be configured as a value for this attribute as comma separated values.

The location-based filter evaluator will get the data based on the filters configured here. If there is no configured values, then data for all the wards under the address for the login location is fetched. 

Steps to follow:

- In OpenMRS go to "***Manage Location Attribute Types***"
- Create a location attribute type called "***catchmentFilters***" and save the location attribute type.

![](https://bahmni.atlassian.net/wiki/download/attachments/94535739/Screenshot%202016-08-30%2014.01.50.png?version=1&modificationDate=1478200659551&cacheVersion=1&api=v2)

- Go to "***Manage Locations***" and open your login location
- Fill the "***catchmentFilters***" attribute with the names of preferred wards as comma separated value and save the location

![](https://bahmni.atlassian.net/wiki/download/attachments/94535739/Screenshot%202016-08-30%2014.03.36.png?version=1&modificationDate=1478200660133&cacheVersion=1&api=v2)

 
Please note that if the penultimate location drop-down is selected, then the configured catchments will not be considered. For example, in the above picture, if Rural Ward is selected (such as Rural Ward = Ward No-01), then the catchmentFilters will not work; instead only Ward No-01 will be considered.

### 4) Display Controls Supported by Bahmni Connect

The display controls currently supported by Bahmni Connect client are:

- Diagnosis display control
- Observations display control
- Lab orders display control
- Visit display control

These display controls are updated after the Bahmni Connect client syncs with the server.

### 5) Registration

Bahmni Connect supports the following major features of the Registration module

- Configurable Patient Search  based on name, id, address, or custom attributes
- Display of patient attributes when searched for in registration page, including Village name.
- Capture of patient details (identity, name, age, gender, custom attributes).
- Editing of existing patient details

### 6) Syncing Encounters of a Patient Across Catchments

Given that a patient moves across catchments (such as a pregnant patient moving from her living place to her maternal place), the existing patient encounters must be imported to the new location so that it aids in patient healthcare. Bahmni Connect provides this feature.

Process wise the patient record must move from the existing login location to the new login location → which means that the patient’s address must be changed in the new login location, and must then sync back to the Bahmni Connect client mapped to this login location
 
This is currently supported only for Location based sync strategy

### 7) Visits and Encounters

Functionally, visits and encounters are handled similar to how they are handled in online mode with some differences as listed below:

A visit is not opened for a patient during registration. Patient registration information is saved on the device and even when synced, no visit is created for the patient. The same is the case of encounters in that no registration encounter is created for a patient after registration. 

When clinical data (observations) is recorded for a patient and saved when offline, a dummy visit and an encounter are opened and stored on the device. There are three scenarios:

- A new patient created on offline device
- Clinical data added for existing patients
- Clinical data added for a patient when offline, but before sync the patient also has a open visit in hospital.

 
On Clinical- Visit Dashboard, there are scenarios where the last n visits can be requested. For Bahmni Connect, when clinical data (observations) is recorded for a patient and saved when offline, a dummy visit and an encounter are opened and stored on the device. Hence if the last n visits are requested, they are shown along with the dummy visit details.

Below are some available configurations for Visits and Encounters:

#### **a. Configuration of Visit Matcher**

** **A global property has to be added to OpenMRS to set visit matcher to Offline Visit matcher.

![](https://bahmni.atlassian.net/wiki/download/attachments/94535739/image2016-5-11%2017:54:17.png?version=1&modificationDate=1478200661563&cacheVersion=1&api=v2)

#### **b. Configuration of Recent Patients in Search All Tab**

**![](https://bahmni.atlassian.net/wiki/download/attachments/94535739/image2016-5-27%2013:11:5.png?version=1&modificationDate=1478200661823&cacheVersion=1&api=v2)**

The All Tab on page load shows a list of patient below the search bar that have been created or have an encounter in the last 14 days.

The duration for the recent patient list can be configured in the clinical/app.json file in the config section

 
   ** Expand source 
 
 
  
```
{
	"config": {
			"recentPatientsDuration": 7
	}
}
```

 

#### **c. Hiding Clinical Search Tabs**

Configured patient search tabs in the Clinical app can be hidden on Bahmni Connect by specifying an additional flag "offline:false" in the search tab configuration block in clinical/extension.json

 
  ** ** Expand source 
 
 
  
```
"bahmni_clinical_patients_search_allpatients_active_app:clinical": {
    "id": "bahmni.clinical.patients.search.activePatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
        "searchHandler": "emrapi.sqlSearch.activePatients",
        "translationKey": "Active",
        "forwardUrl": "#/default/patient/{{patientUuid}}/dashboard"
    },
    "label": "Active",
	"offline": false,
    "order": 2,
    "requiredPrivilege": "app:clinical"
},
```

 

### 8) Registration Second Page or the Visit Details Page

Given that the Registration second page (or the visit details page) is configured to be displayed, upon entering observations and saving the registration first page the User will be navigated to Registration second page to enter observations for the patient. To enable Registration second page in Bahmni Connect, the following configuration must be added to ...apps/registration/extension.json.

Note that if the above configuration is not added to extension.json, Registration second page will not be displayed on Bahmni Connect.**

 
  Visit Details Page** Expand source 
 
 
  
```
"nutritionalValues":{
        "id": "bahmni.registration.conceptSetGroup.nutritionalLevels",
        "extensionPointId": "org.bahmni.registration.conceptSetGroup.observations",
        "type": "config",
        "extensionParams": {
            "conceptName": "Nutritional Values",
            "translationKey": "NUTRITIONAL_VALUES_LOCALE_KEY",
            "conceptNames": ["Height", "Weight"],
            "required":true,
            "showLatest": true
        },
```

 
 
Auto-calculated observations such as BMI cannot be calculated on the offline device on the go i.e without syncing with the online server.

If Registration second page is not configured, then the following configuration must be added to extension.json so that the navigation button to Consultation comes up in the first page:

 
  **Consultation Button in Registration Second Page** Expand source 
 
 
  
```
"bahmni_patient_registration_next": {
       "id": "bahmni.patient.registration.next",
       "extensionPointId": "org.bahmni.registration.patient.next",
       "type": "config",
       "extensionParams": {
           "display": "Enter Consultation",
           "shortcutKey": "c",
           "forwardUrl": "../clinical/index.html#/default/patient/{{patientUuid}}/dashboard"
       },
       "order": 1,
       "requiredPrivilege": "app:clinical"
   }
```

 

**

### 9) Observation Templates in Bahmni Connect Support Form Conditions

Form conditions allows users to allows users to enable or disable observations fields as well as show errors based on specific conditions or inputs on the form. For example certain sections in a form are only needed to be filled based on specific inputs or conditions in a form.

Given that forms are used to capture observations in Bahmni, the Bahmni Connect client supports form conditions in an offline setting.

### 10) Recording Data from Multiple Locations in a Single Bahmni Connect Device

Given that a user travels to multiple locations during an outreach visit, Bahmni Connect must support multiple catchments so that usage becomes intuitive and reporting becomes accurate. This will make Bahmni Connect usable in scenarios where multiple locations are covered by a user in a single tour.

In such a scenario, reference for all locations is stored in one database so that data storage is optimised.

The below figure represents a location to catchment mapping for Bahmni Connect:

![](https://bahmni.atlassian.net/wiki/download/attachments/94535739/clip-a863-6e9f.png?version=1&modificationDate=1482475040008&cacheVersion=1&api=v2)
 
Please note that Login Location to Catchment mapping depends on implementation needs. For example, in certain implementations one Login Location services one or more than one catchments while for some, all the catchments' data is sufficed by one Login Location.
 
A catchment is defined entirely on the server side.

The use-cases are described below:

- Same device traversing multiple locations during one tour: The same device must record findings of patients across multiple locations in a tour/s.
- Segregating reports by locations: Having the device support multiple locations will make reporting accurate, as reports can be segregated by locations.
- Given that the user wants to sync regularly captured data from the device to Bahmni online from multiple locations, he/she can push the data for all locations at one go. However the pull is based on the logged in location.

 
A common DB is maintained for reference data i.e Configs, concepts, login locations and parent address hierarchy.

The following features are not supported for now:

- Deleting a previously synced catchment
- Highlighting synced locations on Bahmni Connect
- Migration of existing application data

To enable this **Multiple DB** feature, you have to set an OpenMRS global property called "**allowMultipleLoginLocation**" to **true**.

![](https://bahmni.atlassian.net/wiki/download/attachments/94535739/Screenshot%202017-01-11%2012.38.06.png?version=1&modificationDate=1484121925188&cacheVersion=1&api=v2)

After the global property "allowMultipleLoginLocation" is set to true, you have to implement your own strategy for bahmni connect database.

The config will be present in ** /var/www/bahmni_config/offline/openmrs/apps/dbNameCondition**. The sample strategy is given below

**Example 1)**
dbNameCondition.js**

```
 //One DB per login location, does not depends on provider
Bahmni.Common.Offline.dbNameCondition.get = function (provider, loginLocation) {
    return loginLocation;
};
```

**Example 2)**
**dbNameCondition.js**

```
 //One DB per provider, does not depend on login location
Bahmni.Common.Offline.dbNameCondition.get = function (provider, loginLocation) {
	 return provider;
};
```

**Example 3)**
**dbNameCondition.js**

```
 //One DB per device, does not depend on either provider or login location
Bahmni.Common.Offline.dbNameCondition.get = function (provider, loginLocation) {
    return 'Bahmni Connect';
};
```

**Example 4)**
**dbNameCondition.js**

```
 //you can create any type of strategy with your own sort of logic
//Like:
Bahmni.Common.Offline.dbNameCondition.get = function (provider, loginLocation) {
	if(provider === 'batman')
       	return provider;
    if(loginLocation === 'location1' || loginLocation === 'location2')
    	return 'location1_2';
    return loginLocation;
};
```

 
By default **Example 1** i.e. One DB per location will be present in the configuration when you enable **Multiple DB for Connect**.

*In case, **Multiple DB **feature is not enabled, the default DB name will be "**Bahmni Connect**".*
 
If you write a client side strategy (dbNameCondition.js), which will create one Database for ***two***** **different filter, then you have to change your **sync strategy** also. Otherwise device may not sync proper data.
 
If you are already using the Bahmni Connect, then app needs to reinstalled with version 0.87 and above for chrome app and 0.88 and above for android app to get **Multiple Db** feature. **With upgrade from existing app with version 86 and below this feature is not available.**

On this Page
 
 
 
 
**Related Pages**

 

- [Installing and Configuring Bahmni Connect](/wiki/spaces/BAH/pages/94535704/Installing+and+Configuring+Bahmni+Connect)
[Installing Bahmni Connect on Server](/wiki/spaces/BAH/pages/94535706/Installing+Bahmni+Connect+on+Server)
- [Installing Bahmni Connect App](/wiki/spaces/BAH/pages/94535730/Installing+Bahmni+Connect+App)

- [Bahmni Connect Performance Baseline](/wiki/spaces/BAH/pages/108494885/Bahmni+Connect+Performance+Baseline)

 

**Feature Details**

[Bahmni Connect](/wiki/spaces/BAH/pages/94535750/Bahmni+Connect)

**Usage Details**

[Using Bahmni Connect App](/wiki/spaces/BAH/pages/94535745/Using+Bahmni+Connect+App)
