---
id: "3401842768"
title: "Patient Search Configuration using Lucene"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3401842768/patient-search-configuration-using-lucene"
version: 5
updated: "2024-03-07T10:26:49.839Z"
author: "Rahul Ramesh"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:05.331Z"
---

# Patient Search Configuration using Lucene

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3401842768)  
> **Versión del documento:** v5 (2024-03-07T10:26:49.839Z) | **Autor/Editor:** Rahul Ramesh

---

## All Tabs Lucene Search Configuration

#### Overview 
![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.44.49.png?version=1&modificationDate=1709806513484&cacheVersion=1&api=v2)
The Patient Name Search in All tab within the clinic module of Bahmni employs Lucene search to retrieve patient information. This search functionality offers flexibility through various match types, allowing users to refine their search criteria. The search behavior is controlled by the "LUCENE_MATCH_TYPE" environment variable, which defaults to "ANYWHERE" if not specified.

#### Match Types

- 
**EXACT:** This match type precisely matches the search term with the patient information, returning only exact matches.

- 
**START:** The "START" match type fetches matches that begin with the search term, focusing on the initial characters of the patient data.

- 
**ANYWHERE:** With the "ANYWHERE" match type, the search retrieves all results containing the search term anywhere within the patient information.

#### Configuration

To configure the Lucene search match type, modify the "LUCENE_MATCH_TYPE" [environment variable](https://github.com/Bahmni/bahmni-docker/blob/8dc26816460488fdf8fa13c90e54cc9cb019a95b/bahmni-lite/.env#L51) and set it to one of the following values: "EXACT", "START", or "ANYWHERE". This setting dictates how the search results are filtered and presented to the user. "LUCENE_MATCH_TYPE" if not set will default to "ANYWHERE" as the match type.

**Note****For details on how the Lucene match type filter has been configured for the dev-lite and docker.standard environments, please refer to [this commit](https://github.com/Bahmni/bahmni-docker/commit/8dc26816460488fdf8fa13c90e54cc9cb019a95b). Additionally, you can find the configuration settings in our [docker-compose.yml](https://github.com/Bahmni/bahmni-docker/blob/8dc26816460488fdf8fa13c90e54cc9cb019a95b/bahmni-lite/docker-compose.yml#L73) file and [.env](https://github.com/Bahmni/bahmni-docker/blob/master/bahmni-lite/.env#L51) file.

#### Examples

The following truth table demonstrates how different match types impact the search results for two patients, **Daniel Carter and Nielsen Johnson**:

| ** LUCENE_MATCH_TYPE ** | ** Search Term ** | ** Daniel ** | ** Nielsen ** | **Screenshot** |
| --- | --- | --- | --- | --- |
| ** EXACT ** | Daniel | Found | - | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.37.10.png?version=1&modificationDate=1709806059875&cacheVersion=1&api=v2) |
|  | Nielsen | - | Found | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.38.15.png?version=1&modificationDate=1709806108892&cacheVersion=1&api=v2) |
|  | Dan | - | - | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.39.03.png?version=1&modificationDate=1709806151690&cacheVersion=1&api=v2) |
|  | Nielson | - | - | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.39.25.png?version=1&modificationDate=1709806175523&cacheVersion=1&api=v2) |
| ** START ** | Niel | - | Found | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.39.55.png?version=1&modificationDate=1709806206385&cacheVersion=1&api=v2) |
|  | niel | - | Found | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.40.29.png?version=1&modificationDate=1709806237964&cacheVersion=1&api=v2) |
|  | Dan | Found | - | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.41.26.png?version=1&modificationDate=1709806294095&cacheVersion=1&api=v2) |
|  | Nei | - | - | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.42.28.png?version=1&modificationDate=1709806355381&cacheVersion=1&api=v2) |
| ** ANYWHERE ** | Niel | Found | Found | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.47.32.png?version=1&modificationDate=1709806675583&cacheVersion=1&api=v2) |
|  | niel | Found | Found | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.48.17.png?version=1&modificationDate=1709806707118&cacheVersion=1&api=v2) |
|  | Dan | Found | - | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.48.52.png?version=1&modificationDate=1709806743391&cacheVersion=1&api=v2) |
|  | sen | - | Found | ![](https://bahmni.atlassian.net/wiki/download/attachments/3401842768/Screenshot%202024-03-07%20at%2015.49.20.png?version=1&modificationDate=1709806768235&cacheVersion=1&api=v2) |

This table illustrates how adjusting the "LUCENE_MATCH_TYPE" environment variable enables customization of search experiences based on specific needs and preferences.

On this page**
