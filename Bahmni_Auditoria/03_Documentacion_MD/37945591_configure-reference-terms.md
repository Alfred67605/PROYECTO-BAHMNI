---
id: "37945591"
title: "Configure Reference Terms"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945591/configure-reference-terms"
version: 5
updated: "2016-12-27T10:51:39.894Z"
author: "Siddhartha Mohapatra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:07.225Z"
---

# Configure Reference Terms

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945591)  
> **Versión del documento:** v5 (2016-12-27T10:51:39.894Z) | **Autor/Editor:** Siddhartha Mohapatra

---

## Description

Reference terms map concepts to standard OpenMRS dictionary concepts.  

## Steps

Below are the steps to manage the concept reference terms.

- Go to "Administration→Manage Concept Sources" and check whether you have the required dictionary added as concept source (check the below screenshot)

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016%2004%2001%2012%2043%2025.png?version=1&modificationDate=1459503697493&cacheVersion=1&api=v2)

- If it is not there, create a new one using "Add New Concept Source"

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016%2004%2001%2012%2042%2025.png?version=1&modificationDate=1459503706465&cacheVersion=1&api=v2)

- The name and description are mandatory fields. They are free text entry fields and they do not expect any predefined values.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016-04-01%2012-42-49.png?version=1&modificationDate=1459504126464&cacheVersion=1&api=v2)

- After creating the concept source, create the concept reference terms. You can go to that page using "Administration→ Manage Concept Reference Terms" navigation.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016%2004%2001%2012%2043%2040.png?version=1&modificationDate=1459504294629&cacheVersion=1&api=v2)

- You can add a new reference term or search for the existing reference terms and edit them.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016%2004%2001%2012%2044%2009.png?version=1&modificationDate=1459504401199&cacheVersion=1&api=v2)

- You need to provide some key as reference term code and select the source type as it's required. You can also have other reference terms mapped to a reference term.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016-04-01%2012-48-28.png?version=1&modificationDate=1459504774569&cacheVersion=1&api=v2)

- Once you have the reference term created, you can map it to any concept using "Mappings" option. You can add multiple mappings for a concept.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016%2004%2001%2012%2049%2026.png?version=1&modificationDate=1459504952028&cacheVersion=1&api=v2)

- You just need to start typing the reference term code and the respective source will be auto-selected. Note that you can manually select the mapping relationship (like SAME-AS, NARROWER-THAN etc) and these are not configurable from the UI. 

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016%2004%2001%2012%2049%2047.png?version=1&modificationDate=1459505237975&cacheVersion=1&api=v2)

- You can also create a new reference term from the edit concept page on the fly as well (see the highlighted button in the above screenshot).

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/Screenshot%20from%202016-04-01%2012-50-22.png?version=1&modificationDate=1459505345269&cacheVersion=1&api=v2)

- Once you add the reference terms, they will start appearing in the respective concept page in OpenMRS. A sample concept with reference terms screenshot attached below.

![](https://bahmni.atlassian.net/wiki/download/attachments/37945591/OpenMRS%20%20%20Viewing%20Concept%20CD4%20COUNT.png?version=1&modificationDate=1459505627299&cacheVersion=1&api=v2)

On this Page
