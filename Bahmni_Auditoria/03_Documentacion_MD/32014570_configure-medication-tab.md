---
id: "32014570"
title: "Configure Medication Tab"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014570/configure-medication-tab"
version: 67
updated: "2024-08-29T07:01:36.116Z"
author: "Parvathy Babu"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:17.200Z"
---

# Configure Medication Tab

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014570)  
> **Versión del documento:** v67 (2024-08-29T07:01:36.116Z) | **Autor/Editor:** Parvathy Babu

---

## Purpose and Benefits

The Medication Tab allows the user to create new Drug Orders for the patient. Medication is referred to as Drugs in OpenMRS. It also displays the past and active medications for the patient. The screenshot below displays an instance of the same:

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Medicationtab-new.png?version=1&modificationDate=1500453539085&cacheVersion=1&api=v2)

**Medication Tab**

## Steps

### Configure Medication Tab Display
**Refer to this code snippet**

```
 "bahmniClinicalBillingTreatment": {
    "id": "bahmni.clinical.billing.treatment",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Medications",
    "translationKey":"MEDICATIONS_BOARD_LABEL_KEY",
	"extensionParams": {
		"tabConfigName": ""
	},
    "url": "treatment",
    "icon": "fa-user-md",
    "order": 7,
    "requiredPrivilege": "app:clinical:consultationTab"
  },
```

Please refer to the following link to know more about this configuration: [https://github.com/bahmni/default-config/blob/master/openmrs/apps/clinical/extension.json](https://github.com/bahmni/default-config/blob/master/openmrs/apps/clinical/extension.json)

### Configure Multiple Medication Tabs

You can configure multiple medication tabs with each tab being drug specific. The name of the tab *tabConfigName* needs to be defined in *extensionParams*. Using this *tabConfigName*, the tab specific configurations needs to be put in medication.json. Please look at [MedicationTab Configurations](/wiki/spaces/BAH/pages/36700210/medication.json) for more details. The following is example configuration that configures two medication tabs.
**Refer to this code snippet**

```
  "bahmniClinicalBillingTreatment": {
    "id": "bahmni.clinical.billing.treatment",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Medications",
    "translationKey":"MEDICATIONS_TAB_ONE_LABEL_KEY",
	"extensionParams": {
		"tabConfigName": ""
	},
    "url": "treatment",
    "icon": "fa-user-md",
    "order": 7,
    "requiredPrivilege": "app:clinical:consultationTab"
  },
  "bahmniClinicalBillingTreatment": {
    "id": "bahmni.clinical.billing.treatment",
    "extensionPointId": "org.bahmni.clinical.consultation.board",
    "type": "link",
    "label": "Medications",
    "translationKey":"MEDICATIONS_TAB_TWO_LABEL_KEY",
	"extensionParams": {
		"tabConfigName": ""
	},
    "url": "treatment",
    "icon": "fa-user-md",
    "order": 8,
    "requiredPrivilege": "app:clinical:consultationTab"
  }
```

### Setup Medication Data

Please refer to [this page](/wiki/spaces/BAH/pages/114727368/Configure+Medication+Data) to setup the medication/drug data 

**

## Advanced Configuration

### Configure Medication.Json file

Please see this documentation on wiki: [medication.json](/wiki/spaces/BAH/pages/36700210/medication.json)

### Configure "dispensed" button

Check the [Dispensing Drugs](/wiki/spaces/BAH/pages/48889901/Dispensing+Drugs) feature guide for a general understanding of this feature

The highlighted buttons in red below are the buttons used to dispense drugs.

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/image2016-4-7%2011-14-10.png?version=1&modificationDate=1461305374643&cacheVersion=1&api=v2)

 When the logged in user has the specific privilege then these buttons show up.

 Add this privilege for the logged in user.

| [bahmni:clinical:dispense](https://192.168.33.10/openmrs/admin/users/privilege.form?privilege=bahmni:clinical:dispense) | Bahmni drug order dispensing privilege |
| --- | --- |

Refer [EMR Security and Access Control (OpenMRS)](/wiki/spaces/BAH/pages/48889893/EMR+Security+and+Access+Control+OpenMRS) to get info on how to add privilege for a logged in user.

### Configure links to open quotations in ERP

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-04-22%20at%2011.57.03%20AM.png?version=1&modificationDate=1461306892599&cacheVersion=1&api=v2)

The two extra buttons "Open Quotation" and "Open Dispensed Quotation" can be configured to open a quotation for drugs which are not dispensed and a quotation for drugs which are dispensed.
Refer to this code snippet**

```
 "bahmniClinicalTreatmentLinks": {
    "id": "bahmni.clinical.treatment.links",
    "extensionPointId": "org.bahmni.clinical.treatment.links",
    "type": "link",
    "label": "Open Quotation",
    "url": "http://192.168.33.10:8069/quotations/latest?patient_ref={{patient_ref}}&dispensed=false&location_ref={{location_ref}}",
    "shortcutKey": "q",
    "requiredPrivilege": "app:billing"
  },
  "bahmniClinicalTreatmentDispensedLinks": {
    "id": "bahmni.clinical.treatment.links",
    "extensionPointId": "org.bahmni.clinical.treatment.links",
    "type": "link",
    "label": "Open Dispensed Quotation",
    "url": "http://192.168.33.10:8069/quotations/latest?patient_ref={{patient_ref}}&dispensed=true&location_ref={{location_ref}}",
    "shortcutKey": "q",
    "requiredPrivilege": "app:billing"
  }
```

 
The above config should be added to clinical extension.json.

The logged in user should have the privilege  [app:billing](https://192.168.33.10/openmrs/admin/users/privilege.form?privilege=app:billing) (For billing users to access prescription in MRS)

**

- The first config is for the  button *"Open Quotation"*: This opens the ERP quotations for normal orders. "url" is the link to ERP quotation. The IP of the url to be changed to the implementation server's IP.
- The second config is for *"Open Dispensed Quotation"*. This opens the ERP quotations for the orders which are dispensed. The setting of "dispensed" flag in the url parameter to true or false opens the dispensed, non-dispensed quotations respectively.

### Configure Conditional Notes Placeholder on Drug Stoppage

When a Drug is stopped on the Medication Tab, the user can select the Stop Order Reason concept from the drop down menu and by default the order reason notes will be enabled. To conditionally disable the stop order reason notes based on the stop order reason concept selected, please refer below example:

Add the condition under clinical formCondition.js for the required Stop OrderReason Concept.

For example, to enable stop order reason notes for "Other" and "Adverse event" reason concepts:
Refer to this code snippet**

```
"Medication Stop Reason": function (drugOrder, conceptName) {
    if(conceptName == "Other" || conceptName == "Adverse event"){
        drugOrder.orderReasonNotesEnabled = true;
        return true;
    }
    else
        return false;
  }
```

| Key | Value | Mandatory |
| --- | --- | --- |
| Medication Stop Reason | Conditionally enable or disable reason notes | Y |
| conceptName | Name of the concept for which the reason notes should be enabled | ** |

 
 If the section "Medication Stop Reason" is not defined, by default reason notes will be enabled for all reason concepts.

### Configure F**ree-Text Drug Ordering **

Please refer to [Medications](https://bahmni.atlassian.net/wiki/display/BAH/medication.json) for further details about this configuration.

### Configure Interval to Skip Display of Stop

The Drug-o-gram or The Drug Regimen Display Control is a widget that displays all the drugs that the patient has been treated with. This gives the clinician a bird’s eye view of all of the patient’s current and past medications.

In this configuration the Drug-o-gram will not display “Stop” if a medicine is stopped and restarted the same day or the next or in a configurable time (provided in hours in the STOPING_INTERVAL_HOURS key of groovy file). [TreatmentRegimenExtension.groovy](/wiki/download/attachments/32014570/TreatmentRegimenExtension.groovy?version=1&modificationDate=1452230129741&cacheVersion=1&api=v2) is a sample groovy file which should be placed in this path * bahmni-config/openmrs/treatmentRegimenExtension/TreatmentRegimenExtension.groovy*

### Configure Fractional Dosage 

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-05%20at%204.49.57%20PM.png?version=1&modificationDate=1451992837601&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-05%20at%204.51.07%20PM.png?version=1&modificationDate=1451992896439&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-05%20at%204.53.52%20PM.png?version=1&modificationDate=1451993051297&cacheVersion=1&api=v2)**
**

Using dosages as mixed fractions like 2¾ instead of 2.75 is possible for both uniform and variable doses by configuring the following json in the file **medication.json** in **openmrs/apps/clinical/** directory in the configuration repo.
Refer to this code snippet**

```
{
"commonConfig": {
  "doseFractions": [
    {
      "value": 0.50,
      "label": "½"
    },
    {
      "value": 0.33,
      "label": "⅓"
    },
    {
      "value": 0.25,
      "label": "¼"
    },
    {
      "value": 0.75,
      "label": "¾"
    }
  ]
},
"tabConfig": {
  "tabOne": {
  	"showDoseFractions": true
	"doseFractions": ["½","¾"]
  ]
}
```

 
The fractions have to be written in actual unicode characters like ¾ or ¼ not 3/4 or 1/4.

- Setting '**showDoseFractions' **to **true **at a tab level in tabConfig will accommodate an extra drop down. This will contain values from the configuration next to uniform dose controls only in the specified medication tab in consultation. By default it will not be displayed in any medication tab in Consultation
- '**doseFractions' **that is mentioned at tab level is used to filter only those values from the master list specified in commonConfig
- All the places where the dosage is displayed like medical history, observations, prints etc, will reflect this behavior of showing mixed fractions instead of real numbers.
- The values in variable dosage will not have a drop down but the values entered will be interpreted according to the config and displayed accordingly.
- The user still has the freedom to enter real numbers like 2.3 in the input field and to also choose a fraction. In such a case the number and the fraction is interpreted by adding them and the cumulative effect is recorded. If the result is not in the provided config, it is simply passed along as a real number and not converted to mixed fraction.
- To disable this behavior, simply remove the key "**showDoseFractions**" or set it to "**false**" in that  particular medication tab config in medication.json.

**Screenshot**

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-06%20at%2011.31.01%20AM.png?version=1&modificationDate=1452060263687&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-06%20at%2011.31.39%20AM.png?version=1&modificationDate=1452060263999&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-06%20at%2011.32.58%20AM.png?version=1&modificationDate=1452060264913&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/Screen%20Shot%202016-01-06%20at%2011.32.21%20AM.png?version=1&modificationDate=1452060264338&cacheVersion=1&api=v2)

### Configure Medication Display Controls

For more information on Display Controls that can be configured, please refer to [this section](/wiki/spaces/BAH/pages/114207149/Medication+Controls).

### Configure As Needed as a Checkbox

![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/a1338d84-a908-4348-ad80-cb83884be38c.png?version=1&modificationDate=1717645100471&cacheVersion=1&api=v2)                           

As shown in the above screenshot, in order to make the `As Needed` (named as `PRN` in this example) field into a checkbox, the following configuration can be added to the `medication.json` inside `"inputOptionsConfig"` section

```
"asNeededToBeACheckbox": true
```

### Update Duration and Duration Unit based on Frequency

  ![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/image2024-6-6_8-56-25.png?version=1&modificationDate=1717644387463&cacheVersion=1&api=v2)

The config needs to be added in the `medication.json` file inside `"inputOptionsConfig"` section

```
"autopopulateDurationBasedOnFrequency":[
	{
    	"frequencyName":"STAT (Immediately)",
        "duration":1,
        "durationUnit":"Occurrence(s)"
    }
],
```

**

Once the configuration is added, when we select that frequency, the respective duration and duration unit set in the config will be set.

### Configuration to restrict Doctor from capturing medication without capturing Diagnosis

When the Doctor is in the Medications tab, if atleast one primary Diagnosis is not captured against a patient, then the doctor is restricted from prescribing a medication for the patient

 ![](https://bahmni.atlassian.net/wiki/download/attachments/32014570/9be8f123-ab0e-4c23-9c84-620cf0e8905e.png?version=1&modificationDate=1717645074346&cacheVersion=1&api=v2)

```
"addTreatmentWithDiagnosis": {
    "order": "PRIMARY"
},
```

### Configuration to restrict Doctor from Prescribing Medication without capturing Weight

To restrict a doctor from prescribing medication for a patient without capturing the patient’s weight, the following configuration can be added in the /openmrs/apps/clinical/app.json

```
{
    ....
    "config": {
        ....
        "addTreatmentWithPatientWeight": {
            "duration" : 2592000,
            "conceptNames": ["Weight"]
        }    
    }
}
```

Here, `"duration"` field specifies the time limit in seconds within which the patient's weight must be recorded.

On this Page

 
 
 
Feature Details**

[Medications Tab - Feature Guide](/wiki/spaces/BAH/pages/40501375/Prescribing+Medications)

**Related Links**

[Medication Tab - Prescribing IVs and the issue with Immediately field](https://talk.openmrs.org/t/drug-order-should-the-duration-impact-the-total-amount-when-immediately-frequency-is-selected/13000/17)
