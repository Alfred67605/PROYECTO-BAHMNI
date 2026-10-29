---
id: "3647176711"
title: "Provider Acknowledgement for Emergency Medication Administered by Ward Nurse"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3647176711/provider-acknowledgement-for-emergency-medication-administered-by-ward-nurse"
version: 1
updated: "2024-08-29T17:34:13.513Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:20.903Z"
---

# Provider Acknowledgement for Emergency Medication Administered by Ward Nurse

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3647176711)  
> **Versión del documento:** v1 (2024-08-29T17:34:13.513Z) | **Autor/Editor:** Rahul Ramesh

---

## Overview

In an Inpatient Department (IPD) setting, it is essential to document and acknowledge emergency medications administered by ward nurses without a prior prescription (Rx) reference. The newly added 'Notifications' tab in the Clinical module enables providers to confirm these emergency administrations, ensuring accurate record-keeping and continuity of patient care.

## Configurations

### Configure Notification Tab in the Clinical Module

The `openmrs/apps/clinical/extension.json` file is crucial for configuring the 'Notifications' tab within the Clinical module. This file defines how the tab appears, where it is placed in the module, and who can access it. 

By setting up this configuration, the Provider Acknowledgement (Notification) tab is seamlessly integrated into the Clinical module, providing healthcare providers with a streamlined interface for acknowledging emergency medication administrations.

```
{
    "bahmniClinicalPatientsCustomNotifications": {
        "id": "bahmni.clinical.patients.custom.notifications",
        "extensionPointId": "org.bahmni.patient.search",
        "type": "config",
        "extensionParams": {
            "translationKey": "MODULE_LABEL_NOTIFICATIONS_KEY",
            "templateUrl": "/bahmni_config/openmrs/apps/clinical/customQueues/notifications.html",
            "view": "custom"
        },
        "label": "Notifications",
        "order": 4,
        "requiredPrivilege": "app:clinical"
    }
}
```

Add the Tab’s label in `openmrs/i18n/clinical/locale_en.json` 

```
{
    "MODULE_LABEL_NOTIFICATIONS_KEY": "Notifications"
}
```

The `locale_en.json` file is part of the internationalization (i18n) system in OpenMRS. This file contains the translation keys and their corresponding English values, enabling the application to display the appropriate text based on the user’s language settings. For the 'Notifications' tab, this file ensures that the tab’s label is correctly translated and displayed.

### Define the Notification Interface

Now define your own custom Notification interface here in `openmrs/apps/clinical/customQueues/notifications.html` in clinic config. 

The `notifications.html` file is the HTML template that defines the structure and content of the 'Notifications' tab. This template dictates how the information within the tab is displayed to the user, including the layout, elements, and overall user interface. This file is essential for creating a user-friendly experience that allows healthcare providers to efficiently acknowledge emergency medication administrations.

Bahmni provides a template for the same and add the following to `openmrs/apps/clinical/customQueues/notifications.html` .

```

```

### Define the SQL query to fetch the Unacknowledged Medications

Below is an example of how `emergencyMedicationToAcknowledge` can be introduced via the initializer:

```

  
    
       
emrapi.sqlSearch.emergencyMedicationToAcknowledge 

SELECT DISTINCT
    primaryIdentifier.identifier as identifier,
    concat(pn.given_name, ' ', pn.family_name) as name,
    p.gender as gender,
    p.uuid as patient_uuid,
    p.birthdate as date_of_birth,
    ma.uuid as medication_administration_uuid,
    ma.administered_date_time,
    dg.name as administered_drug_name,
    ma.dose as administered_dose,
    cnd.name as administered_dose_units,
    cnr.name as administered_route,
    map.uuid as medication_administration_performer_uuid,
    v.uuid as visit_uuid
FROM medication_administration_performer map
JOIN provider pr on pr.provider_id = map.actor_id
JOIN medication_administration ma on map.medication_administration_id=ma.medication_administration_id
JOIN drug dg on dg.drug_id = ma.drug_id
JOIN ipd_slot slot on ma.medication_administration_id = slot.medication_administration_id
JOIN ipd_schedule schedule on schedule.schedule_id = slot.schedule_id
JOIN visit v on v.visit_id = schedule.visit_id
JOIN (SELECT pri.patient_id, pri.identifier
      FROM patient_identifier pri
      JOIN patient_identifier_type pit on pri.identifier_type = pit.patient_identifier_type_id and pri.preferred = 1
      JOIN global_property gp on gp.property="bahmni.primaryIdentifierType" and gp.property_value=pit.uuid) primaryIdentifier
      ON ma.patient_id = primaryIdentifier.patient_id
JOIN concept_name cn on cn.concept_id = map.performer_function and cn.concept_name_type = "FULLY_SPECIFIED" and cn.locale='en'
JOIN concept_name cnd on cnd.concept_id = ma.dose_units and cnd.concept_name_type = "FULLY_SPECIFIED" and cnd.locale='en'
JOIN concept_name cnr on cnr.concept_id = ma.route and cnr.concept_name_type = "FULLY_SPECIFIED" and cnr.locale='en'
JOIN person_name pn on ma.patient_id = pn.person_id and pn.voided = 0 and pn.preferred = 1
JOIN patient_identifier pi on ma.patient_id = pi.patient_id
JOIN person p on p.person_id = ma.patient_id and p.voided = 0
WHERE cn.concept_name_type="FULLY_SPECIFIED" and cn.name="Witness" and pr.uuid = ${provider_uuid};

        SQL query to get the list of Emergency Medications to be acknowledged
    
  

```

## Conclusion
This implementer guide outlines the configuration of the Provider Acknowledgement (Notifications) tab in the Clinical module, specifically designed for the provider acknowledgment of emergency medication administered by ward nurses. Proper implementation ensures accurate documentation and review of all emergency medications, enhancing patient safety and care continuity.
