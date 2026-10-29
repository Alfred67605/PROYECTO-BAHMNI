---
id: "3117613282"
title: "Running with Poor or No Internet Connectivity (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117613282/running-with-poor-or-no-internet-connectivity-docker"
version: 6
updated: "2023-12-10T14:06:30.700Z"
author: "Gurpreet Luthra"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:07.352Z"
---

# Running with Poor or No Internet Connectivity (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117613282)  
> **Versión del documento:** v6 (2023-12-10T14:06:30.700Z) | **Autor/Editor:** Gurpreet Luthra

---

This method explains how to copy docker images from one machine to another (via USB/network/etc) without relying on a docker hub service. 

Installing Bahmni using docker-compose would require better internet connectivity since the individual Bahmni services/application images (odoo, openmrs, reports, implementer interface etc) needs to be downloaded on the host machine before running the containers. This would be a challenge for facilities where there is poor to no internet connectivity. Please follow below steps as a work-around to perform the installation

- 
Download and create archive backup for all Bahmni application images at the location **where you have internet connectivity**

```
docker pull bahmni/bahmni-web
docker save bahmni/bahmni-web > bahmni_web.tar
```

If you have capacity constrains, you can also gzip the archive and make the backup smaller

```
docker save bahmni/bahmni-web | gzip > bahmni_web.tar.gz
```

**Note**: please check the [bahmni docker-compose](https://github.com/Bahmni/bahmni-docker/blob/master/docker-compose.yml) for the list of services/application images that you would need to download and create archive e.g. bahmni/openmrs, bahmni/implementer-interface etc. Also note that if you prefer a specific version of the image then add a tag e.g. `docker pull bahmni/bahmni-web:1.0.0`

- 
Once you have the archives, you can easily port these into usb hard drive or pen drive

- 
You can then mount the usb pen drive to your host machine and load docker images from the archive

```
docker load --input bahmni_web.tar

# Show all docker images on the machine
docker images
```

- 
Once all the images are loaded onto the host machine, you can follow the usual [docker compose setup steps](/wiki/spaces/BAH/pages/3117744129/Getting+Started+Quickly+with+Bahmni+on+Docker) to run Bahmni.

 
**Running Bahmni On Docker**
