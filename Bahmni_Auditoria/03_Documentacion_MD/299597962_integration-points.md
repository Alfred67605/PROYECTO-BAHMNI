---
id: "299597962"
title: "Integration Points"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/299597962/integration-points"
version: 4
updated: "2017-11-26T08:33:40.769Z"
author: "Sruti Sridhar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:35.188Z"
---

# Integration Points

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/299597962)  
> **Versión del documento:** v4 (2017-11-26T08:33:40.769Z) | **Autor/Editor:** Sruti Sridhar

---

## About Integration Points 

When getting the data for appointments, if users would want to display additional information per appointment from other modules in Bahmni.

This can be made possible by extending the interface ''AppointmentResponseExtension'' and implementing the run method which takes appointment as input and returns a map of attributes. The returned map values are added to the appointments additional information

## How to set up 

This extension code should be added in the implementation specific omods.

1. Add appointments module as required module in the  omod/src/main/resources/config.xml

```
org.openmrs.module.appointments
```

2. Add appointments module dependency in the pom.xml

```

   org.openmrs.module
   appointments-omod
   1.0-SNAPSHOT
   provided

```

3. Implement extension point

```
@Component
public class PatientBedDetails implements AppointmentResponseExtension {
   @Override
   public Map run(Appointment appointment) {
       Map additionalInfo = new HashMap<>();
       BedManagementService bedManagementService = Context.getService(BedManagementService.class);
       BedDetails bedDetails = bedManagementService.getBedAssignmentDetailsByPatient(appointment.getPatient());
       if(bedDetails!= null) {
           additionalInfo.put("LOCATION_KEY", bedDetails.getPhysicalLocation().getName());
           additionalInfo.put("BED_NUMBER_KEY", bedDetails.getBedNumber());
       }
       return additionalInfo;
   }
}
```

Note
 
- In the code above , you can use any service to fetch the relevant data from the database
- As an Example we taken bedDetails. You can use relevant model, as per the use case, to get the data.

**

On This Page**
