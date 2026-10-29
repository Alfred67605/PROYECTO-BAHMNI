---
id: "18415632"
title: "Order Fulfillment & Procedures"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/18415632/order-fulfillment-procedures"
version: 43
updated: "2022-12-02T03:33:17.804Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:04:21.894Z"
---

# Order Fulfillment & Procedures

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/18415632)  
> **Versión del documento:** v43 (2022-12-02T03:33:17.804Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and Benefits

Order Fulfillment takes care of all possible orders encountered in a Hospital Scenario, such as a lab, radiology, procedures or drug order. The need for an Order arises when the doctor or any other medical provider wants some action to be taken by some other medical provider in the Hospital for a patient. When a doctor wants an X-ray to be performed for a patient, they would write this order on a physical paper. Then the patient would report to the X-Ray Department where some other provider in the X-Ray department would perform the procedure based on the order of the doctor. The entire process as mentioned above can be digitized through Bahmni which involves two contact points for the providers. One is the part of the application from where orders will be **placed** and the second is from where the orders will be **fulfilled**.

![](https://bahmni.atlassian.net/wiki/download/attachments/18415632/Screen%20Shot%202016-10-18%20at%208.10.38%20pm.png?version=1&modificationDate=1476801675195&cacheVersion=1&api=v2)

**Orders Module**

## Steps

### Placing an order

To place an order, the medical practitioner visits configured "Orders" Tab via Clinical consultation. The Orders Tab can be configured to list all the possible type of orders.

![](https://bahmni.atlassian.net/wiki/download/attachments/18415632/Screen%20Shot%202016-10-18%20at%207.50.17%20pm.png?version=1&modificationDate=1476800476544&cacheVersion=1&api=v2)
 
- As shown in the above screenshot, there are two different order types (Lab, Radiology) configured
- Selected Orders section will list down all the selected orders

Expanding any of the order type will display all the concepts that are associated to this order type in hierarchical manner.

Select the required orders and then save to place an order.

![](https://bahmni.atlassian.net/wiki/download/attachments/18415632/Screen%20Shot%202016-10-18%20at%207.54.27%20pm.png?version=1&modificationDate=1476800701519&cacheVersion=1&api=v2)

**Tests and panels associated to Blood Order Type**

**

## Placing an Order

The following is the configuration for the orders scenario.

For setting up the functionality to place the order. 

- 
To set up a new order type, you need to add the order type in the database.

```
insert into order_type (name, description, creator, uuid,java_class_name) values ("Test Order", "description",1,uuid(),"org.openmrs.Order");
```

Once you have done the above, you need to setup the "Order type" mapping in the database

```
insert into order_type_class_map (order_type_id, concept_class_id) values(, );
```

For example, if you are setting up "Procedure" order types, then you should create a mapping of the "Procedure Order Type" and the "Procedure Class" like above. 

- 
Every order_type in Bahmni is associated with a Concept Set.  This acts as a starting point in navigation of tests during Order Creation.  For the newly setup Order Type, create a corresponding Concept Set and associate it as a child of "All Orderables".  

Associating concept to concept set
 
Add new concept_set as set member for "All Orderables"

The concept set called "All Orderables" is already available in Bahmni.

- 
The Concept Set that is defined in Step 2 is a Two Level Set.  Level 1 shows up the Left Navigation Bar.  Level 2 should contain the tests that needs to be shown up on the UI.  The doctor can select the provided tests.  The grouping of the Tests happen using the "Concept Class". 
 
 Lets say, if Blood contains both Anaemia Panel (Concept Class as Panel) and "Heamoglobin" (Concept Class as Test), then the grouping of the tests on UI happens based on Panel and Test.

## Fulfilling an Order

Order fulfilment is a separate app that can be configured.

### Configuring Orders app

In *home,extension.json* add the following configuration to see orders app on home dashboard.
Configuring Orders app**

```
"orders": {
 "id": "bahmni.orders",
 "extensionPointId": "org.bahmni.home.dashboard",
 "type": "link",
 "label": "Orders",
 "url": "../orders/#/search",
 "icon": "fa-book",
 "order": 10,
 "requiredPrivilege": "app:orders"
 }

```

 
- Make sure that the value for key "*url*" is always ".*./orders/#/search*"
- One can change the "requiredPrivilege", to restrict access to other users who doesn't have this configured privilege

**

### Configuring Patient Queues/Lists

Patient lists can be configured according to the use case and requirement. For instance, one can configure to show all the patients who have Lab Orders. One can choose to configure any number such queues or lists.The view of the queue can be configured to be tile or tabular similar to the patient queues in clinical
 
- Add the configuration similar to sample configuration below (with required changes) in *orders/extension.json*
- Please use the sample configuration that can be used to configure patient queue (which displays all the active patients). One can provide custom query that can be used to populate this list. Please refer the documentation for customising the query.
- 
Please make sure that the "forwardUrl" as navigation Url when the patient is selected from the list. If you want to use order fulfilment, the supported url is "*../orders/#/patient/{{patientUuid}}/fulfillment/{Order_type}*"

Order_type = type of orders that you want to see (or fulfil)

- In the configuration below, "Radiology Order" is the order_type
- To list all the available order types, the sample query is "`select * from order_type;`"
- 
One can change the "requiredPrivilege", to restrict access to other users who doesn't have this privilege

Sample config for configuring order patient list queues**

```
{
	"bahmniClinicalPatientsSearchRadiologyOrderAllPatients":{
	 "id": "bahmni.clinical.patients.search.RadiologyOrderAllPatients",
	 "extensionPointId": "org.bahmni.patient.search",
	 "type": "config",
	 "extensionParams": {
	  "searchHandler": "emrapi.sqlSearch.activePatients",
	  "display":"Radiology Orders",
	  "translationKey": "MODULE_LABEL_RADIOLOGY_ORDERS_KEY",
	  "forwardUrl" : "../orders/#/patient/{{patientUuid}}/fulfillment/Radiology Order",
	  "forwardButtonTitle" : "View",
	  "view":"tabular"
	 },
	 "label": "Radiology Order",
	 "order": 1,
	 "requiredPrivilege": "app:orders"
	 }
}
```

### Configuring Fulfilment Form/Template

Provider fulfilling an order will select the order to be fulfilled and fill in the form/template (for that order) Capturing observations for the configured templates or forms is considered as fulfilment of the order. When ever the visit of patient whose order is completed ends then the order will no longer appear in the queue.

Create a concept set (template) in openmrs with required set member. The form is populated based on the set members.
 
- The name of the concept set should be "*{Order_type} Fulfilment Form*"
- The form/template in Order Fulfilment Page will be populated based on the members of concept set "*{Order_type} Fulfilment Form"*

![](https://bahmni.atlassian.net/wiki/download/attachments/18415632/Screen%20Shot%202016-10-18%20at%209.22.48%20pm.png?version=1&modificationDate=1476805994190&cacheVersion=1&api=v2)

**Concept set for Radiology Orders with name "Radiology Order Fulfillment Form"**

![](https://bahmni.atlassian.net/wiki/download/attachments/18415632/Screen%20Shot%202016-10-19%20at%2012.37.11%20pm.png?version=1&modificationDate=1476860907341&cacheVersion=1&api=v2)

**Form populated with "Summary" as it is the set member of "Radiology Order Fulfillment Form"**

## Setting up Order Display Control

Once a lab technician navigates to order fulfillment page, one can view the orders that are partially/fully fulfilled.  If one wants to view the results (observations) that are already entered in previous encounters, one can do so in the "Order Display Control" configured for each and every order.  

Setting up Order Display Control On Dashboard
 
Please refer [Configuring Orders Control](/wiki/spaces/BAH/pages/15106143/Display+Controls+Configuration+Obsolete+Refer+to+https+bahmni.atlassian.net+wiki+display+BAH+Display+Controls#DisplayControlsConfiguration(Obsolete)Refertohttps://bahmni.atlassian.net/wiki/display/BAH/Display+Controls-OrdersControl) to configure orders control on dashboard

The following is the configuration for it in orders module's app.json.
**Config: Add to orders/app.json**

```
[
  {
    "id": "bahmni.orders",
    "extensionPoints": [
		...
    ],
    "config": {
      "fulfillment": {
        "Radiology Order": {
          "isObservation": true,
          "conceptNames": [
            "Summary"
          ],
          "numberOfVisits": 2,
          "scope": "latest"
        }
      }
    }
  }
]

```

![](https://bahmni.atlassian.net/wiki/download/attachments/18415632/Screen%20Shot%202016-10-19%20at%2012.39.00%20pm.png?version=1&modificationDate=1476860965639&cacheVersion=1&api=v2)

On this Page

 
 
 
 
Also see:

- [Discussion on Setting up Procedure Orders](https://talk.openmrs.org/t/setting-up-surgical-and-other-opd-procedures-continued/9911/15?u=gsluthra)
- [Setting up Radiology Orders](/wiki/spaces/BAH/pages/32014568/Configure+Orders+Tab+for+Lab+and+Radiology)
