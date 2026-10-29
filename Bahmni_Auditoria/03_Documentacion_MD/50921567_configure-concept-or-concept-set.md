---
id: "50921567"
title: "Configure Concept or Concept Set"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/50921567/configure-concept-or-concept-set"
version: 5
updated: "2016-05-18T06:13:22.895Z"
author: "Shanmugam Radhakrishnan (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:06.771Z"
---

# Configure Concept or Concept Set

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/50921567)  
> **Versión del documento:** v5 (2016-05-18T06:13:22.895Z) | **Autor/Editor:** Shanmugam Radhakrishnan (Deactivated)

---

### **Description**

The concept is the basic element of flexibility in OpenMRS. Concepts are the individual data points collected from a population of patients. Concepts include both questions and answers. You can find more info at [Concept Dictionary Basics](/wiki/spaces/BAH/pages/20643861/OpenMRS+Links)

### **Create New Concept**

When you want to create a concept you need to goto **Dictionary**. By selecting "Add New Concept", you will see the screen as below. You must provide 'Fully Specified Name'.  Concept Data Types specifies the type of data the concept is configured to hold, such as such as coded, text, etc. Refer to the screenshot below to know the various data types in OpenMRS:

![](https://bahmni.atlassian.net/wiki/download/attachments/50921567/Concept%20Data%20Types.png?version=1&modificationDate=1460016419732&cacheVersion=1&api=v2)

**
**

**
**

**Example**:
Fully Specified Name = Anaemia Templates, Short Name = Anaemia

**
**

### **Create New Concept set**

When concepts are required to be grouped then we use concept set. For eg: Blood is a sample and many lab tests can be performed with it. So, we use concept set for Blood and define lab tests as its members. The concept set is nothing but a concept with specific property enabled (Is Set?). When set is enabled, we can add members to it. The member should be another concept. You can find more info at [Concept Dictionary Basics](/wiki/spaces/BAH/pages/20643861/OpenMRS+Links).

![](https://bahmni.atlassian.net/wiki/download/attachments/50921567/Conceptset%20Definition.png?version=2&modificationDate=1463549463555&cacheVersion=1&api=v2)
