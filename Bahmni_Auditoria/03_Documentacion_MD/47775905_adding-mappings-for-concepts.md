---
id: "47775905"
title: "Adding Mappings for Concepts"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/47775905/adding-mappings-for-concepts"
version: 11
updated: "2016-04-15T08:22:02.367Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:10.395Z"
---

# Adding Mappings for Concepts

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/47775905)  
> **Versión del documento:** v11 (2016-04-15T08:22:02.367Z) | **Autor/Editor:** Teresa Gracias

---

## Description

A concept term defines a medical coding term or OpenMRS concept dictionary term that could be mapped to a concept. A concept map connects a concept term to a concept.  To understand Concepts and Mapping better, please refer to this documentation by OpenMRS: [Concept Terms and Mapping (OpenMRS Wiki)](https://wiki.openmrs.org/display/docs/Concept+Terms+and+Mappings).

## Steps

One can choose to directly add a reference term, or else, refer to a properties file key name, which will have its corresponding language translation in the property file at run time.

### **Case 1: Adding a direct name**

Here the code field of new reference term is just name 

    
        Your browser does not support the HTML5 video element

### **Case 2: Adding a key reference**

The code field of reference term Key(**ETHAMBUTAL_KEY**) is defined in the locale file [https://github.com/Bahmni/default-config/blob/master/openmrs/i18n/clinical/locale_en.json](https://github.com/Bahmni/default-config/blob/master/openmrs/i18n/clinical/locale_en.json)

 
    
        Your browser does not support the HTML5 video element

On this Page
 
 
 
 
**Related Links**

[Concept Terms and Mappings (OpenMRS Wiki)](https://bahmni.atlassian.net/wiki/pages/editpage.action?pageId=47775905)

[Concept Best Practices (OpenMRS Wiki)](https://wiki.openmrs.org/display/docs/Concept+Best+Practices)

**Similar Pages**

 

    
#### 
                    Found **5** search result(s) for **concept**.
         
        

    					
            
            
                Page:
        [Enhancement: Support for Concept-Format Attributes in the Surgical Appointment Form](/wiki/spaces/BAH/pages/5605195781/Enhancement+Support+for+Concept-Format+Attributes+in+the+Surgical+Appointment+Form)
    
        ([Bahmni Wiki](/wiki/display/BAH))
    

        
    Aug 18, 2026

        

    
            
        			
            
            
                Page:
        [Comparing various Concept Dictionary options in Bahmni](/wiki/spaces/BAH/pages/3251863630/Comparing+various+Concept+Dictionary+options+in+Bahmni)
    
        ([Bahmni Wiki](/wiki/display/BAH))
    

        
    Jan 25, 2024

        

    
            
        			
            
            
                Page:
        [Configure Concept or Concept Set](/wiki/spaces/BAH/pages/50921567/Configure+Concept+or+Concept+Set)
    
        ([Bahmni Wiki](/wiki/display/BAH))
    

        
    May 18, 2016

        

    
            
        			
            
            
                Page:
        [Concept Classes](/wiki/spaces/BAH/pages/8585221/Concept+Classes)
    
        ([Bahmni Wiki](/wiki/display/BAH))
    

        
    Sept 15, 2014

        

    
            
        			
            
            
                Page:
        [Concept Set UI](/wiki/spaces/BAH/pages/2850829/Concept+Set+UI)
    
        ([Bahmni Wiki](/wiki/display/BAH))
    

        
    Jul 08, 2017
