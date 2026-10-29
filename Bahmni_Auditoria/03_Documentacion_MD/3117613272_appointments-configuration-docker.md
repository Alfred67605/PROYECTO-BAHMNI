---
id: "3117613272"
title: "Appointments Configuration (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117613272/appointments-configuration-docker"
version: 2
updated: "2022-12-14T05:27:13.030Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:03.370Z"
---

# Appointments Configuration (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117613272)  
> **Versión del documento:** v2 (2022-12-14T05:27:13.030Z) | **Autor/Editor:** Gurpreet Luthra

---

[Bahmni/appointments](https://hub.docker.com/r/bahmni/appointments) image runs the frontend for Bahmni Appointments Scheduling. The backend APIs for this application are running in OpenMRS. The image is built and published using Github Actions from [openmrs-module-appointments-frontend](https://github.com/Bahmni/openmrs-module-appointments-frontend) repository.

## Environment Configurations

| Variable Name | Description |
| --- | --- |
| APPOINTMENTS_IMAGE_TAG | This value specifies which image version needs to be used for appointments service. List of tags can be found at [bahmni/appointments - Tags](https://hub.docker.com/r/bahmni/appointments/tags) . |
| APPOINTMENTS_PATH | Set this to the directory path where you have cloned [openmrs-module-appointments-frontend](https://github.com/Bahmni/openmrs-module-appointments-frontend) repository. Needed only for development purposes. |

## Development on Appointments Frontend
When you want to develop on appointments frontend code, follow the below steps.

- 
Clone the [openmrs-module-appointments-frontend](https://github.com/Bahmni/openmrs-module-appointments-frontend) repository in your local machine.

- 
Follow the instructions in the README of the repository to install the required tools and dependencies.

- 
Copy the path of `openmrs-module-appointments-frontend` directory and set it to `APPOINTMENTS_PATH` environment variable in the .env file. Do not add / at the last.

- 
Now open the docker-compose.yml file and in the appointments service uncomment the volumes section.

- 
Start / Recreate appointments service by doing  `docker-compose up -d appointments`

- 
For every change you make, build the appointments code and the changes will reflect on refresh of the browser.
