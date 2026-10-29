---
id: "412811291"
title: "Configurations: What goes where?"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/412811291/configurations-what-goes-where"
version: 4
updated: "2018-01-23T23:28:43.979Z"
author: "Darius Jazayeri"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:03:02.033Z"
---

# Configurations: What goes where?

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/412811291)  
> **Versión del documento:** v4 (2018-01-23T23:28:43.979Z) | **Autor/Editor:** Darius Jazayeri

---

There are different levels at which Bahmni is configurable:

- Installation Configurations
- UI / Client side 
- Server Side

- **Configurations in Installation: **As Bahmni has a micro service architecture, one could choose the components to install/ upgrade. This can be done through the inventory file. It is located in /etc/bahmni-installer/local. [This](https://github.com/Bahmni/bahmni-playbooks/blob/master/local) is the default inventory file shipped with product. Also there are a set of installation variables (like timezone, implementation name, bahmni_repo_url ....)  which can be set in /etc/bahmni-installer/setup.yml. For more information please visit this [page](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/53837974/List+Of+Configurable+Installation+Variables).
- **UI / Client side Configurations: **Bahmni UI is configurable to a large extent. Configurations like which apps should appear in Bahmni EMR home page, display controls etc. are present in the folder /var/www/bahmni_config (in the server). Implementations can have their specific folder deployed in this path during installation. The default config which gets shipped as part of the product can be found [here](https://github.com/Bahmni/default-config). For more details about the structure and variables visit [Bahmni App Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013676/Bahmni+App+Configuration).
- **Server side configurations: **The metadata for data in Bahmni EMR is set up through OpenMRS attributes such as users, patient attriibutes, locations, drugs, concepts and concept sets, etc. Apart from these, we also have [Global Properties](https://wiki.openmrs.org/display/docs/Setting+and+Reading+Global+Properties), when a OpenMRS module code needs to refer to a value that's unique to a particular installation, such as a concept ID number or a file path.These are required for every installation of Bahmni. Most OpenMRS configuration can be done using the [OpenMRS Administration UI](https://192.168.33.10/openmrs/admin/index.htm). For further details visit [OpenMRS Configuration](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013673/OpenMRS+configuration).
