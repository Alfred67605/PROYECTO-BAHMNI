---
id: "3495657474"
title: "Configure Custom Patient Attribute with Icon"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3495657474/configure-custom-patient-attribute-with-icon"
version: 7
updated: "2024-05-09T07:02:35.137Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:03.821Z"
---

# Configure Custom Patient Attribute with Icon

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3495657474)  
> **Versión del documento:** v7 (2024-05-09T07:02:35.137Z) | **Autor/Editor:** Rahul Ramesh

---

## Purpose and Benefits
 
**Version Compatibility****This feature is available from Bahmni Standard V1.0 and Bahmni Lite V1.1.

This feature allows healthcare professionals to configure a custom attribute for new patients during the registration process. This attribute can be represented as an icon based on configuration, which can enable the identification of patients with specific requirements or medical needs, improving the visual representation of patient data and aiding in the efficient recognition of key patient characteristics.

| **Patient Dashboard** | ** Clinical Patient Search ** | **ADT Page** |
| --- | --- | --- |
| ![](https://bahmni.atlassian.net/wiki/download/attachments/3495657474/Screenshot%202024-04-09%20at%208.54.40%E2%80%AFAM.png?version=1&modificationDate=1714656138898&cacheVersion=1&api=v2) | ![](https://bahmni.atlassian.net/wiki/download/attachments/3495657474/Screenshot%202024-04-09%20at%208.55.11%E2%80%AFAM.png?version=1&modificationDate=1714656244249&cacheVersion=1&api=v2) | ![](https://bahmni.atlassian.net/wiki/download/attachments/3495657474/Screenshot%202024-04-09%20at%208.53.53%E2%80%AFAM.png?version=1&modificationDate=1714656255680&cacheVersion=1&api=v2) |

## Steps to Configure Custom Patient Attribute

This example demonstrates how to create a new patient attribute called "kid".

### **Create a Custom Person Attribute**

Define a new custom person attribute named `kid` of type `java.lang.Boolean` using either of the following methods:

- 
**Liquibase Changeset**:

Create a new changeset to add the custom attribute type "kid".

- 
Define the attribute with the specified properties, including name, format, and other attributes.

```

    

        
            select count(*) from person_attribute_type where name = 'kid';
        
    
    Add person_attribute_type 'kid'
    
        INSERT INTO person_attribute_type (name, description, format, searchable, creator, date_created, retired, sort_weight, uuid)
        VALUES ('kid', 'Kid', 'java.lang.Boolean', '0', 1, curdate(), 0, 8, uuid());
    

```

- **Through Initializer:**

Add the custom attribute in a CSV file located at `masterdata/configuration/personattributetypes/personAttributeTypes.csv`.

- 
Specify the attribute's properties, such as name, format, and other configurations. 

```
Uuid,Void/Retire,Name,Description,Format,Foreign uuid,Searchable,_order:1000
,,kid,Kid,java.lang.Boolean,,,
```

### **Configure Icon and Style**

Add the following configuration to the relevant `app.json` files (`clinical`, `adt`, or `ipd`) of the config module:

```
"config" : {
  ....
  "iconAttribute": {
      "attrName": "kid",
      "attrValue": "true",
      "icon": "fa fa-solid fa-child",
      "iconStyle": "{'background-color': '#F58C35'}"
  },
  ...
}
```

#### Key Fields

| Key | Value | Mandatory |
| --- | --- | --- |
| `attrName` | Name of the custom attribute type | Yes |
| `attrValue` | Condition that triggers the icon | Yes |
| `icon` | FontAwesome icon class for visual representation of the attribute. | Yes |
| `iconStyle` | Custom CSS styling for the icon, such as background color. | No |

### **Update Search and Queue Configurations**

**Note**

The search query that fetches patient details is implementation-specific. If you want to display the custom attribute on patient search pages, you need to modify the search query to include the relevant custom attribute details.

- 
Add a left outer join clause in search queries:

```
LEFT OUTER JOIN person_attribute patt ON patt.person_id = p.person_id AND patt.person_attribute_type_id = ( SELECT person_attribute_type_id FROM person_attribute_type WHERE name="kid" ) AND patt.voided = 0
```

- 
Include the custom attribute in the select statement:

```
IF(patt.value = "true", "true", "false") AS kid
```

On this page**
