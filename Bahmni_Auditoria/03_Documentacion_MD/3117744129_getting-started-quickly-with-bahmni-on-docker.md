---
id: "3117744129"
title: "Getting Started Quickly with Bahmni on Docker"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117744129/getting-started-quickly-with-bahmni-on-docker"
version: 49
updated: "2024-09-17T08:41:37.862Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:48.592Z"
---

# Getting Started Quickly with Bahmni on Docker

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117744129)  
> **Versión del documento:** v49 (2024-09-17T08:41:37.862Z) | **Autor/Editor:** Mohankumar Thangavel

---

## Installing Docker and Docker Compose

 Installing Docker
You can install Docker from [here](https://docs.docker.com/engine/install/). Choose the appropriate installers for your host machine and follow the instructions mentioned for the host platform.  **MacOS: **You can get the dmg file for Docker [here](https://store.docker.com/editions/community/docker-ce-desktop-mac). 

Once you have Docker installed, ensure that you are running the daemon. You can verify that by running `docker ps`.

If you want to tune and configure docker, please find detailed information [here](https://docs.docker.com/engine/admin/).

 
 Docker Cheatsheet
While it is not mandatory that you have working knowledge of docker (although desirable), at the least you should know the following commands and usages

- 
`docker ps -a`   - shows all containers

- 
`docker rm ` - remove a given container 

- 
`docker container COMMAND` - different commands like start/stop/prune for container(s)

- 
`docker images` - lists all images

- 
`docker rmi ` - remove a given image 

- 
`docker volume COMMAND` - different commands for managing volumes. 

A good link: [The Ultimate Docker cheatsheet](https://dockerlabs.collabnix.com/docker/cheatsheet/)
 Installing Docker Compose

With latest versions of docker-engine, `compose-plugin` has been introduced which installs docker compose. So first check if you have docker compose by running `docker compose version`. For Ubuntu machines, this is great documentation on installing docker & docker-compose: [https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-22-04) 

You can install docker compose from [here](https://docs.docker.com/compose/install/).

Currently Bahmni has been tested on **docker compose** version `2.12.0`. If you are using older versions of docker-compose, please upgrade to the latest version. You can check docker compose version by running `docker compose version`

**System Memory Requirements**

If you are using Docker Desktop for Mac / Docker Desktop for Windows , it is recommended to increase the **Memory **resource to at-least **8GB. **Please find the reference for [Mac](https://docs.docker.com/desktop/mac/) / [Windows](https://docs.docker.com/desktop/windows/). 

For Linux based distributions, docker consumes the memory available at the Docker host.

 
**Bahmni Docker training** for the community has been conducted on 15-Feb-2023 (2 days). All the training content is now publicly available in Bahmni Community YouTube channel. Please check this playlist on **YouTube**: [https://www.youtube.com/watch?v=f7ikNL2j3Mg&list=PLzknGpbejfSzEB2dT87mexJaBUsXNuZkD&index=1](https://www.youtube.com/watch?v=f7ikNL2j3Mg&list=PLzknGpbejfSzEB2dT87mexJaBUsXNuZkD&index=1) 

## Prerequisites: 

- 
Install stable version of Git

- 
Install latest stable versions of `docker` & `docker compose` in your machine (based on your respective OS). 

- 
Clone the `bahmni-docker` repository ([Github Link](https://github.com/Bahmni/bahmni-docker)).

 There are two different *distributions* of Bahmni: **LITE** and **STANDARD**. More details about the differences are [here](/wiki/spaces/BAH/pages/3064332289/Bahmni+Lite+-+A+lightweight+opensource+version+of+Bahmni). 

## Running Bahmni Lite v1.0.0

Bahmni-lite is a lightweight open-source version of Bahmni targeted towards clinics & small hospitals, which don’t need a heavy-weight HIMS, but are looking for an easy-to-use EMR & Billing software. Read more about Bahmni-lite v1.0.0 [here](/wiki/spaces/BAH/pages/3110207489/Bahmni+Lite+Releases). This version runs with Bahmni EMR UI, OpenMRS and Crater.

```
# Clone the Bahmni docker repo using SSH keys
git clone git@github.com:Bahmni/bahmni-docker.git

# If the above command gives error, use the HTTPs version of the command as follows:
git clone https://github.com/Bahmni/bahmni-docker.git

cd bahmni-docker/bahmni-lite

# Edit the .env file, and make the following changes
# 1. Change `COMPOSE_PROFILES=bahmni-lite` (or run with default which is `emr`)
# 2. Change `TZ` to your desired timezone (or run with the default which is `UTC`). 
# 3. For remote server (if not running on localhost) for crater:
# write the IP address or domain name in the following properties (instead of localhost): 
# CRATER_APP_URL, CRATER_SANCTUM_STATEFUL_DOMAINS and CRATER_SESSION_DOMAIN

# Pull latest images
docker compose pull

# Now start docker (detached mode)
docker compose up -d
```

 
**run-bahmni.sh: **You can also use the `./run-bahmni.sh` helper script in `bahmni-docker/bahmni-lite` that relies on the `.env` file, which points to the `1.0.0` tag to run Bahmni Lite. It execute the docker compose commands for you. This script provides various options such as start, stop, view logs, pull updates, reset, etc. Use the command `chmod +x run-bahmni.sh` to give it execute permission. Set the appropriate COMPOSE_PROFILE in `.env`file before running this script.
 
Bahmni LITE docker-compose is configured with a pre-loaded CIEL database, for faster startup. This database is tagged: `clinic-config-mysql5.6`, and already configured in the .env file. Since [CIEL dictionary concepts](https://openconceptlab.org/2022/10/19/ciel-bridging-terminology-for-the-global-community/) (50k medical terms) are a large number of terms, this pre-loaded DB reduces startup time from multiple hours to now just 5 mins. This should be good for you to demo/evaluate Bahmni before making custom changes to it. If you wish to instead start bahmni-lite with a fresh db and trigger a load of CIEL concepts via the initialiser module, then follow the steps [here](/wiki/spaces/BAH/pages/3123249153/Running+Bahmni+Lite+with+fresh+database+or+with+CIEL+data+docker). In case, you need to start bahmni-lite in docker with a live database backup from cloud, then follow the steps [here](https://bahmni.atlassian.net/l/cp/12qV87PP).
 
When changing the TZ value, you need to specify the timezone in the TZ database format. For example, if you want to set the timezone for India, you would set TZ to "Asia/Kolkata", and for Kenya it would be "Africa/Nairobi". You can find a list of valid timezone values in the [TZ database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) under the TZ identifier column. To read further about Docker Timezone Configuration refer [here](/wiki/spaces/BAH/pages/3195142161/Docker+Timezone+Configuration).

Bahmni LITE should now be accessible (open browser at URL: [https://localhost](http://localhost/bahmni/home)/). Bahmni docker is packaged with a **self-signed certificate.** Hence the browser may show a warning/error. This is a standard warning that browsers show when a certificate is signed by a root authority that is not already in the browsers trust store. You can bypass it for now (Add an Exception) and continue. See how you can achieve this with Chrome by typing `thisisunsafe` (*This is unsafe - no spaces*) with your keyboard ([Read more here](https://cybercafe.dev/thisisunsafe-bypassing-chrome-security-warnings/)).
 Credentials
- 
**Bahmni UI **(Username: `superman` Password: `Admin123`) : [https://localhost/bahmni/home/index.html](https://localhost/bahmni/home/index.html)

- 
**OpenMRS Admin UI  **(Username: `superman` Password: `Admin123`) : [https://localhost/openmrs](https://localhost/openmrs)

- 
**Crater Billing** (Username: `superman@bahmni.org` Password: `Crater123`): [https://localhost:444/](http://localhost:81/)

- 
**Metabase Analytics** (Username: `admin@mybahmni.org` Password: `Admin@123`): [https://localhost/metabase](https://localhost/metabase)/

## Running Bahmni Standard

Bahmni Standard is the full version of Bahmni for hospitals which includes EMR (Bahmni UI + OpenMRS), OpenELIS, Odoo and PACS. Read more about differences between Bahmni Lite and Bahmni Standard [here](#). 
 
Note: With Bahmni releases on Docker, Odoo 16 will be the default version of Odoo shipped out of the box. You can still run Odoo 10 variant by following the steps [here](/wiki/spaces/BAH/pages/3117482082/Odoo+Configurations+docker#Setting-up-Odoo-10%3A).

```
git clone git@github.com:Bahmni/bahmni-docker.git

cd bahmni-docker/bahmni-standard
# Change `COMPOSE_PROFILES=bahmni-standard` in the .env file (or run with default which is just `emr`)

# Pull latest images 
docker compose pull

# Now start docker (detached mode)
docker compose up -d

# File Permissions Issue with Odoo
In some hosts Odoo 16 might fail to start throwing a permission denied error when using DB backup image. Run this command the first time.
docker compose exec -it --user root odoo chown -R odoo:odoo /var/lib/odoo/filestore && docker compose restart odoo
```

 
**run-bahmni.sh: **You can also use the `./run-bahmni.sh` helper script in `bahmni-docker/bahmni-standard` to run Bahmni Standard. It execute the docker compose commands for you. This script provides various options such as start, stop, view logs, pull updates, reset, etc. Use the command `chmod +x run-bahmni.sh` to give it execute permission. Set the appropriate `COMPOSE_PROFILE` in the `.env`file before running this script.
 
Bahmni STANDARD will boot up in 5-10 mins. 

Bahmni should now be accessible (open browser at URL: [https://localhost/](http://localhost/bahmni/home))
 Credentials
- 
**Bahmni and OpenMRS **(username: `superman` password: `Admin123` )

- 
**OpenELIS **(username: `admin` password: `adminADMIN!` )

- 
**Odoo ERP** (username: `admin` password: `admin` )

- 
**DCM4Chee PACS** (username: `admin` password: `admin` )

## First-time setup steps

**NOTE: **There are a few simple ***one time setup*** steps to be followed for [Odoo docker](/wiki/spaces/BAH/pages/3117482082/Odoo+Configurations+docker#One-time-Setup-for-Odoo-10) configuration and [PACS Docker Configuration](/wiki/spaces/BAH/pages/3117613179/PACS+Configurations+docker#One-time-setup-for-pacs-integration). See the documentation. If you run into issues, take a look [here](#) (or) feel free to ask questions on [Bahmni Slack](#) **#community** channel.

## Running Bahmni  with the LATEST images

The `.env.dev` file contains references to the `latest` images (ones which are under development and hence could be a bit unstable). To run Bahmni Lite with the latest docker images, specify the file path as `.env.dev` when executing the docker compose commands (or rename the `.env.dev` to `.env`). It is a good idea to perform a ``docker pull`` before starting. This will check if any image on your machine is out-of-date, and bring the latest version from Docker hub. 

```
cd bahmni-docker/bahmni-lite (or) cd bahmni-docker/bahmni-standard

# Pull latest images
docker compose --env-file .env.dev pull

# Now start docker (run in detached mode)
docker compose --env-file .env.dev up -d

# You can also write this in one command as: 
docker compose --env-file .env.dev pull && docker-compose --env-file .env.dev up -d
```

 
**run-bahmni.sh: **You can also use the `./run-bahmni.sh` helper script. 

## Running Bahmni EMR (minimal setup)

By default, the Bahmni docker compose has been configured to start the Bahmni EMR components (profile=`emr`) which is a minimal specification to try and explore Bahmni. This is configured in both: `bahmni-standard` and `bahmni-lite`. 

```
git clone git@github.com:Bahmni/bahmni-docker.git

# to run bahmni-lite (for clinics/small hospitals)
cd bahmni-docker/bahmni-lite
docker compose up -d

# to go to standard bahmni (full hospital system with EMR, Lab, Odoo, Dcm4chee)
cd bahmni-docker/bahmni-standard
docker compose up -d

```

## Running a specific application

Apart from `bahmni-standard` and `bahmni-lite` profiles, there are individual application profiles which allows to run single applications like OpenELIS, Odoo, PACS, Crater, Metabase Analytics, etc.  Read more about different profiles in [Docker Compose Profiles](/wiki/spaces/BAH/pages/3117219857/Docker+Compose+Profiles) sub-page. 

## Running Bahmni Analytics with Metabase & Bahmni-Mart
Bahmni now ships with Opensource [metabase](https://www.metabase.com/product/) BI tool (Analytics), that can be used to connect to any SQL database and create reports and visualizations. By default, metabase is configured to connect with OpenMRS DB and MART DB. Mart basically is an analytics service that pulls data from OpenMRS and stores it in a postgres DB (called martDB) in a format that is easier to create reports in. Read more about Bahmni MART here: [Bahmni Mart](/wiki/spaces/BAH/pages/695959553/Bahmni+Mart) . 

```
# From bahmni-lite/ or bahmni-standard/ subfolder, 
# execute this command to bring up metabase, mart service and mart DB
docker compose --profile bahmni-mart up -d

```

Metabase is accessible at: [https://localhost/metabase](https://localhost/metabase) (for credentials check the settings stored in `METABASE_ADMIN_EMAIL` and `METABASE_ADMIN_PASSWORD` in `.env` file).

 
**Running Bahmni On Docker**
