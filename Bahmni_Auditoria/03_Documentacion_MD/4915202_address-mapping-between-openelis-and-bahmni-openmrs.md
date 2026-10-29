---
id: "4915202"
title: "Address Mapping between OpenELIS and Bahmni / OpenMRS"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/4915202/address-mapping-between-openelis-and-bahmni-openmrs"
version: 6
updated: "2016-12-23T05:22:38.099Z"
author: "Sravanthi N. S. CH."
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:03.576Z"
---

# Address Mapping between OpenELIS and Bahmni / OpenMRS

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/4915202)  
> **Versión del documento:** v6 (2016-12-23T05:22:38.099Z) | **Autor/Editor:** Sravanthi N. S. CH.

---

The address hierarchy in Bahmni is based on the Address Hierarchy in OpenMRS. In OpenMRS, when you create the address hierarchy, you need to ensure that it follows specific order to map to correct labels in ELIS.

Refer to below mapping for ELIS fields and Address Hierarchy Fields:

| Field / Label in ELIS | Field in OpenMRS |
| --- | --- |
| House No, Street | Address1 |
| Village | City_Village |
| Gram Panchayat | Address2 |
| Tehsil | Address3 |
| District | County_District |
| State | StateProvince |

**

If you don't see the address fields that you want to map to in the address hierarchy mapping list then update the Address Template under Locations > Manage Address Template.
 
Please refer to  [Administering Address Templates (OpenMRS Documentation)](https://wiki.openmrs.org/display/docs/Administering+Address+Templates) document to understand the details of the XML and the valid tags

 
  Sample Address Template** Expand source 
 
 
  
```

                        
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                        
                        
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                        
                        - 
                          address1
                          address2
                          cityVillage stateProvince country postalCode
                          latitude longitude
                          startDate endDate
                        
                      
```

 

**Related Links**

[Administering Address Templates (OpenMRS Documentation)](https://wiki.openmrs.org/display/docs/Administering+Address+Templates)
