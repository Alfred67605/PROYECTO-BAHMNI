---
id: "2316239295"
title: "Provider Job"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239295/provider-job"
version: 1
updated: "2021-04-05T09:27:04.524Z"
author: "Himabindu Thungathurty"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:26.165Z"
---

# Provider Job

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2316239295)  
> **Versión del documento:** v1 (2021-04-05T09:27:04.524Z) | **Autor/Editor:** Himabindu Thungathurty

---

- 
[Configuration](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/349241345/Provider#Configuration)

[ColumnsToIgnore apply for this module ( Refer https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/349241345/Provider#ColumnsToIgnore-apply-for-this-module-(-Refer--%5BinlineCard%5D-))

- 
[incrementalUpdateConfig is applicable ( Refer https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update )](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/349241345/Provider#incrementalUpdateConfig-is-applicable-(-Refer-%5BinlineCard%5D-))

- 
[Existing OpenMRS tables](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/349241345/Provider#Existing-OpenMRS-tables)

[Incremental Config:](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/349241345/Provider#Incremental-Config%3A)

###  **Configuration**

##### **ColumnsToIgnore apply for this module ( Refer **[https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329875787/Appendix) **)**

##### **incrementalUpdateConfig is applicable** ( Refer [https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update) )

```
 {
      "name": "Provider",
      "type": "provider",
      "chunkSizeToRead": "500"
}

```

### **Existing OpenMRS tables**

```
provider
provider_attribute
provider_attribute_type

```

**Flattened Mart Tables**

```
provider_default
provdier_attributes
provider_attribute_details_default

```

#### **Incremental Config:**

Please check [this](https://msfprojects.atlassian.net/wiki/spaces/BAH/pages/329679036/Incremental+Update#10.-Provider-Job:) section on how to enable/disable incremental config for specific mart tables.

a) **provider_default:- **This table gives all the provider information in an implementation

Openmrs tables used: provider

| **Column Name** | **Description** |
| --- | --- |
| provider_id | provider id as in Openmrs |
| person_id | person id as in Openmrs |
| name | name of the provider |
| identifier | provider identifier for that provider ( Not patient identifier ) |
| provider_role_id | role_id for that provider |

b) **provider_attribute:- **This table gives all the provider attribute information in an implementation

Openmrs tables used: provider:- provider, provider_attribute, provider_attribute_type

| **Column Name** | **Description** |
| --- | --- |
| provider_id | provider id as in Openmrs |
| All other provider attributes as separate columns. |  |

**c) provider_attribute_details_default - **This table displays all the provider attribute details

openmrs tables used:- provider, provider_attribute, provider_attribute_type.

| **Column Name** | **Description** |
| --- | --- |
| provider_attribute_id | Id reference for provider attribute ( provider_attribute table in openmrs ) |
| attribute_type_id | Id reference for attribute type ( provider_attribute table in openmrs ) |
| provider_id | Id reference for provider ( provider table in openmrs) |
| value_reference | value reference is from provider_attribute table in openmrs |
| provider_attribute_type_name | attribute type name from provider_attribute_type table in openmrs |
| provider_attribute_type_description | Description of attribute type from provider_attribute_type table in openmrs |
| provider_attribute_datatype | Date type of attribute type from provider_attribute_type table in openmrs |
| provider_attribute_datatype_config | Date type config of attribute type from provider_attribute_type table in openmrs |
| provider_attribute_type_preferred_handler | preferred_handler of attribute type from provider_attribute_type table in openmrs |
| provider_attribute_type_handler_config | handler_type of attribute type from provider_attribute_type table in openmrs |
| provider_attribute_type_min_occurs | min_occurs of attribute type from provider_attribute_type table in openmrs |
| provider_attribute_type_max_occurs | max_occurs of attribute type from provider_attribute_type table in openmrs |
