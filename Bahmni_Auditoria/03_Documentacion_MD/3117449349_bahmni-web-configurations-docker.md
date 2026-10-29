---
id: "3117449349"
title: "Bahmni-Web Configurations (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449349/bahmni-web-configurations-docker"
version: 3
updated: "2022-12-14T05:25:27.712Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:54.495Z"
---

# Bahmni-Web Configurations (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117449349)  
> **Versión del documento:** v3 (2022-12-14T05:25:27.712Z) | **Autor/Editor:** Gurpreet Luthra

---

[Bahmni/bahmni-web](https://hub.docker.com/r/bahmni/bahmni-web) image acts as one of the frontend components of Bahmni EMR. The UI rendering depends mostly on the configuration. The image is built and published using Github actions from [openmrs-module-bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps) repository.

## Environment Configurations

| Variable Name | Description |
| --- | --- |
| BAHMNI_WEB_IMAGE_TAG | This value specifies which image version needs to be used for bahmni-web service. List of tags can be found at [bahmni/bahmni-web - Tags](https://hub.docker.com/r/bahmni/bahmni-web/tags) . |
| BAHMNI_UI_DIST_PATH | Set this variable with the path of your dist folder of openmrs-module-bahmniapps when you want to develop on Bahmni UI. |

# Development on Bahmni UI
When you want to develop or modify bahmni UI code, you can follow these steps.

- 
Clone the [openmrs-module-bahmniapps](https://github.com/Bahmni/openmrs-module-bahmniapps) repository in your local machine.

- 
Follow the instructions in the README of the repository to install the required tools and dependencies.

- 
Copy the path of `openmrs-module-bahmniapps` directory and set it to `BAHMNI_APPS_PATH` environment variable in the .env file. Do not add / at the last.

- 
Now open the docker-compose.yml file and in the bahmni-web service uncomment the volumes section with the volumes starting with BAHMNI_APPS_PATH.

- 
You can start the application by running `docker-compose up`. If you have your container already running, you need to recreate it so that the volume mounted code is used. To recreate bahmni-web container run the following command from bahmni-docker directory.

`docker-compose up -d bahmni-web`

- 
Now, when you refresh your browser, you should be able to see the changes reflected.

**Note:** If your change is not reflected, it could be because your browser would be rendering it from its cache. Try the same in Incognito or after clearing cached data. Also for development it is recommended to disable caching in the browser. Go to `Inspect` and then navigate to `Network` tab where you can find `Disable Cache` checkbox.
