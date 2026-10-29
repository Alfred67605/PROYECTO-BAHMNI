---
id: "77758507"
title: "Visit Location"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/77758507/visit-location"
version: 37
updated: "2016-09-06T11:34:46.846Z"
author: "Sravanthi N. S. CH."
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:14.831Z"
---

# Visit Location

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/77758507)  
> **Versión del documento:** v37 (2016-09-06T11:34:46.846Z) | **Autor/Editor:** Sravanthi N. S. CH.

---

# Context

When a patient visits a healthcare facility (or a care provider visits a patient), the information related to where the meetups/consultations happened are captured onto EMR. For example:

- When a patient visits a healthcare facility, a 'Visit' is created for that particular patient corresponding to the Location that represents the facility. Such a location is called 'Visit Location'. e.g a Hospital.
- When the patients goes to departments/sections for consultations/meetups/checkups/investigations, one or more 'Encounters' are created with the specific location that represents the departments/sections. e.g. locations like 'OPD 1', 'Radiology Department', 'Lab' etc. These locations are usually inside a hospital (or a Visit location)

**

![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/Screen%20Shot%202016-08-09%20at%201.20.44%20PM.png?version=1&modificationDate=1470729178012&cacheVersion=1&api=v2)

In some cases, there might be multiple 'Visit locations'. Imagine a big hospital which would like to segregate information based on the departments they have or representing more the operational setup they have.

Example:

- A tertiary care might organize their visit locations into departments like 'Cardiology', 'Dental' because the patients visiting these departments probably don't overlap in their services or treatments.
- A hospital which has outreach program centers, like a 'sub center' outside the premises of the main hospital, might want to organize different visit locations because the captive patients for such centers are different or they want to track the patients mainly by the primary service delivery points.

![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/Screen%20Shot%202016-08-09%20at%201.25.08%20PM.png?version=1&modificationDate=1470729355373&cacheVersion=1&api=v2)

This feature provides ability to have more than one visit open if they are not mapped to same location, so that we can sync visits from different location to the server location.

## Functionality

-  Visit Location feature allows to create more than one active visit for patient in multiple locations.Previously Bahmni allows to create only one visit for a patient within same visit duration.
-  With this feature every visit created will have location associated with it. 

# Set up Visit Location 

With this feature which is available from 0.83v, at least one location should be tagged as *Visit Location. Visit Location *is a location tag that is introduced. 
 
To see the available locations tags in the system, one has to login to *OpenMRS*, click on* Administration* and then on *Manage Location Tags. Please refer the image below which shows 3 location tags.*

![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/image2016-8-4%2016:3:23.png?version=1&modificationDate=1470311893939&cacheVersion=1&api=v2)
## **1.Tag Appropriate locations as Visit Location**

Follow the below steps to tag a Location as Visit Location

### Step 1:

Login to OpenMRS, click on *Administration, Manage Locations, *which displays the available locations in hierarchy (Refer the image below). Choose the location to tag as visit location from the ways below.

*![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/Screen%20Shot%202016-08-04%20at%204.13.28%20PM.png?version=2&modificationDate=1470311892829&cacheVersion=1&api=v2)*

##### Ways of Tagging

Below are the **two ways of tagging** locations as Visit Location. 

###### **Tag Login Location**

One can choose to tag a location that is already tagged as* Login Location* as *Visit Location* also. In this case, this particular location is tagged as both Login and Visit Location.

Example for tagging both login and visit location same time
 
In the image attached above with the list of available locations and the hierarchy,*** Subcentre 1*** is tagged as *Login Location* and *Visit Location*.

###### Tag Parent Location

One can choose to tag the parent of login location in the hierarchy as *Visit Location*.

Example for tagging Parent Location as Visit Location
 
In the image attached above with the list of available locations and the hierarchy,*** Ganiyari*** is *parent of login location *and is also tagged as *Visit Location*.

### Step 2:

Click on the selected location to tag from the two ways of tagging mentioned above.

### Step 3:

Choose Visit location by checking the box next to it as shown in the image below.
![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/image2016-8-4%2017:23:29.png?version=1&modificationDate=1470311889309&cacheVersion=1&api=v2)
### Step 4: 

Click on Save Location

Mapping existing Visits to Location: (From V0.83 onwards)
 
With this feature, it is mandatory to have a visit mapped to a location. 
Please make sure to update older visits created previously are mapped to appropriate location.
 
Please use the one of the following queries to map the existing visits to a location.

Use the below query when the exact location_id is known and replace ***visit_location_id*** with appropriate value
query using location_id to map existing visits**

```
update visit set location_id = where location_id is null;
```

Use the below query when the location name is known and replace location_name with appropriate value
**query using location name to map existing visits**

```
update visit set location_id =(select location_id from location where name='') where location_id is null;
```

## **2.Update Location information in OpenELIS**
Follow the below steps to update the location information in OpenELIS
### Step 1:   

Login to OpenMRS. Go to *Administration, Manage Locations. * Find the appropriate location. In the attached image below, *Ganiyari Lab* is the chosen location.  Copy the uuid of the location.

![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/Screen%20Shot%202016-08-04%20at%204.59.24%20PM.png?version=2&modificationDate=1470311890060&cacheVersion=1&api=v2)
 
Chosen location should be tagged as visit location (choosing one of the [Ways of Tagging](#VisitLocation-WaysofTagging)). In the above example, *Ganiyari* which is parent of *Ganiyari Lab* is tagged as V*isit Location.*

### Step 2: 

Login to Openelis. Go to *Administration, SiteInformation. *
*
*      ![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/image2016-8-4%2017:32:59.png?version=1&modificationDate=1470312181647&cacheVersion=1&api=v2)       
### Step 3: 

Edit the *labLocation* and fill in the value with valid uuid of location copied from [Step 1](#VisitLocation-Step1:.1). Save the information.
 
Please refer the above image displaying all the site information. Check the box next to lab location and click on edit.

        ![](https://bahmni.atlassian.net/wiki/download/attachments/77758507/Screen%20Shot%202016-08-04%20at%204.54.30%20PM.png?version=1&modificationDate=1470311890550&cacheVersion=1&api=v2) 
The UUID set as value in [Step 3](#VisitLocation-Step3:.1) and UUID copied from OpenMRS in [Step 1](#VisitLocation-Step1:.1) should be same

On this page
