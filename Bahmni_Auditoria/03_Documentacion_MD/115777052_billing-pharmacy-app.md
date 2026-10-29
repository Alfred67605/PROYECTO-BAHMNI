---
id: "115777052"
title: "Billing/Pharmacy App"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115777052/billing-pharmacy-app"
version: 5
updated: "2018-01-22T05:54:50.138Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:00.887Z"
---

# Billing/Pharmacy App

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/115777052)  
> **Versión del documento:** v5 (2018-01-22T05:54:50.138Z) | **Autor/Editor:** Sruti Sridhar

---

## Purpose and Benefits

We can use the Billing App widget for the pharmacist to directly dispense medicines to the patient.

**

## Configuration

Step1: Add a new privilege app:billing as in Screenshot below

![](https://bahmni.atlassian.net/wiki/download/attachments/115777052/image2017-3-30_12-31-16.png?version=1&modificationDate=1490857280154&cacheVersion=1&api=v2)

Step2: Add a new Role Billing-App and assign the new privilege and others if any as in screenshot below

![](https://bahmni.atlassian.net/wiki/download/attachments/115777052/image2017-3-30_12-31-52.png?version=1&modificationDate=1490857325626&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/115777052/image2017-3-30_12-32-37.png?version=1&modificationDate=1490857365793&cacheVersion=1&api=v2)

Step 3: Modify the user and assign the newly created role

![](https://bahmni.atlassian.net/wiki/download/attachments/115777052/image2017-3-30_12-33-25.png?version=1&modificationDate=1490857411383&cacheVersion=1&api=v2)

Step 4: To make the widget appear on the home screen\dashboard

Edit the file at the path /openmrs/apps/home/extension.json to include the block below:
 
The name of the widget/app is the value given to the `field` label. For e.g. in this instance, the widget/app will be named "*Prescription*".

 
   ** Expand source 
 
 
  
```
"bahmniBilling": {
       "id": "bahmni.billing",
       "extensionPointId": "org.bahmni.home.dashboard",
       "type": "link",
       "label": "Prescription",
       "url": "../clinical/#/default/patient/search",
       "icon": "fa-inr",
       "order": 8,
       "requiredPrivilege": "app:billing"
   },
```

 

Step 5: We define the action or URL to navigate to on clicking the widget using the BLOCK1 below.

Additionally we also provide a button on Medication TAB to direct the user to Quotations using the BLOCK2 below

Edit the file at the path /openmrs/apps/clinical/extension.json to include the two blocks below:

 
  **Block 1: Navigation URL** Expand source 
 
 
  
```
"bahmniBillingPatientsSearchActivePatients": {
    "id": "bahmni.billing.patients.search.activePatients",
    "extensionPointId": "org.bahmni.patient.search",
    "type": "config",
    "extensionParams": {
      "searchHandler": "emrapi.sqlSearch.activePatients",
      "display": "Active",
      "forwardUrl": "#/default/patient/{{patientUuid}}/dashboard/treatment?tabConfigName=allMedicationTabConfig"
    },
    "label": "Active",
    "order": 1,
    "requiredPrivilege": "app:billing"
  },
```

 
**
 
  Block 2: To add the button on Medication Tab** Expand source 
 
 
  
```
"bahmniClinicalTreatmentLinks": {
	    "id": "bahmni.clinical.treatment.links",
	    "extensionPointId": "org.bahmni.clinical.treatment.links",
	    "type": "link",
	    "label": "Open Quotation",
	    "url": "http://192.168.33.14:8069/quotations/latest?patient_ref={{patient_ref}}&dispensed=false&location_ref={{location_ref}}",
	    "shortcutKey": "q",
	    "requiredPrivilege": "app:billing"
	  },
```

 

**

Step 6: Login using the newly created user credentials assigned with the Billing App privilege.

The homepage display widgets assigned to the logged in user based on the access rights or privileges available to the user.

![](https://bahmni.atlassian.net/wiki/download/attachments/115777052/image2017-3-30_11-49-47.png?version=1&modificationDate=1490854788932&cacheVersion=1&api=v2)

On clicking on the “Prescription” widget on the home screen, we are presented with a patient search queue as defined in the block above. 

![](https://bahmni.atlassian.net/wiki/download/attachments/115777052/image2017-3-30_11-50-21.png?version=1&modificationDate=1490854826608&cacheVersion=1&api=v2)

Selecting a patient from the queue enables us to view the Patient’s prescription directly.

![](https://lh3.googleusercontent.com/2wnyoVvM-FoH7w7mm6sDQk09FdXWp9kP3j9Dw5KAsUS0Rhxw27Bu6RJ3TWLJI6AGtQteQm0d2djQIpjjfOckvGPCTm4DFMTPeo8m2qJ-QqUQ62aeO7HFdBYGvRyT21sfDPpBOv8kWE-wh8b8WA)

Step 7: Click on button “Open Quotation”. If you are already logged into ERP it will automatically direct you to the Quotations else the login screen of ERP will be presented.

On this Page

 
 
 
Related Links**

[Pharmacy Configuration](/wiki/spaces/BAH/pages/32014590/Pharmacy+Configuration)

[Accounting Configuration](/wiki/spaces/BAH/pages/32604219/Accounting+Configuration)
