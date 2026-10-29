---
id: "3117482082"
title: "Odoo Configurations (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117482082/odoo-configurations-docker"
version: 10
updated: "2024-07-23T04:47:42.960Z"
author: "Mohankumar Thangavel"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:01:56.936Z"
---

# Odoo Configurations (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3117482082)  
> **Versión del documento:** v10 (2024-07-23T04:47:42.960Z) | **Autor/Editor:** Mohankumar Thangavel

---

[Bahmni/odoo-16](https://hub.docker.com/r/bahmni/odoo-16) image is based on Odoo v16.0 which acts as a billing and inventory management system integrated with Bahmni. The image is built using Github Actions from the [bahmni-odoo-modules](https://github.com/Bahmni/bahmni-odoo-modules) repository.

 Odoo 10 with limited support[Bahmni/odoo-10](https://hub.docker.com/r/bahmni/odoo-10) image is based on Odoo v10.0 which acts as a billing and inventory management system integrated with Bahmni.  The image is built and published using Github actions from [odoo-modules](https://github.com/Bahmni/odoo-modules) repository. Note: Odoo 10 is out of support from Odoo community and there will be only limited support on bug-fixes or security patches. It is recommended to migrate to Odoo 16.

Bahmni/odoo-connect image is used to enable atomfeed sync to fetch drugs, lab-tests, patient medication orders to Odoo. The image is built and published using Github actions from [openerp-atomfeed-service](https://github.com/Bahmni/openerp-atomfeed-service) repository.

**On This Page**
 

## Sub-Domain or Exposing Port for Odoo
Odoo cannot be routed through proxy on the same domain as other Bahmni services. So either it can be accessed directly on port 8069 or through a sub-domain mapping to the same public IP address as Bahmni. The index page of Bahmni detects the URL by which you access the server and if it an IP or localhost, the redirection happens to `http://:8069` and if it is a FQDN, the redirection happens to `erp-`. The prefix `erp` is a configuration and it can be configured from [here](https://github.com/Bahmni/default-config/blob/master/openmrs/apps/home/whiteLabel.json#L35). Based on the prefix, you can create a A record that maps the domain to the server IP address in your DNS provider. For a production system accessed over internet it is recommended to setup the domain based routing and add an SSL certificate. 

## One Time Setup for Odoo 16:

As Bahmni Standard ships with metadata configured and the data being synced with sub-systems, Odoo DB by default boots up with a database backup image. In some hosts Odoo 16 might fail to start throwing a permission denied error . Run the following command the first time.

`docker compose exec -it --user root odoo chown -R odoo:odoo /var/lib/odoo/filestore && docker compose restart odoo`

## Setting up Odoo 10:

Bahmni releases on docker will ship with Odoo 16 as the default version as part of `bahmni-standard` profile. Odoo 10 is out of support from the Odoo community, so it is expected that the support for bug fixes or security patches will be very limited. It is recommended to migrate to Odoo 16. You can read more the Odoo upgrade initiative from [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3293478913/Upgrade+Bahmni+to+Odoo+v16).

If you would want to run Odoo 10 along with bahmni custom modules and integration, it is possible to start it up with a custom profile which can be enabled from .env files. 

- 
In `bahmni-docker/bahmni-standard` repository, you will find that there are three services odoo-10, odoo-10-db, odoo-10-connect tagged with profile odoo-10. 

- 
You can start these services by adding the `odoo-10` profile to the `COMPOSE_PROFILES` variables in the .env file. 

- 
The profile can also be passed from the command line using the --profiles option `docker compose --profile odoo-10 up -d`

- 
Note: Odoo 10 by default starts up on port 8070. If you want to still run it on 8069, you can update the port mapping for the odoo-10 service in docker-compose.yml

## One-time Setup for Odoo 10

The below steps needs to be performed only once when Odoo is created and is applicable only if you are running Odoo 10

- 
Once the container spins up, login to the application.

- 
Navigate to `Apps` from the menu bar.

- 
Click on `Bahmni Account` app and then click on `Upgrade`.

- 
Wait for the upgrade to complete and you will redirected to home page.

- 
After redirection, refresh your page once.

Now Odoo should be working fine. If you don't see old patient data coming into Odoo in 10 mins, please read Odoo not synchronizing old patient data.

## Environment Configurations

#### Odoo Variables

| Variable Name | Description |
| --- | --- |
| ODOO_IMAGE_TAG | This value tells which image version to be used for Odoo Application. List of tags can be found at [bahmni/odoo-16 - Tags](https://hub.docker.com/r/bahmni/odoo-16/tags) . |
| ODOO_DB_IMAGE_NAME | This value specifies the database image used for Odoo database instance. Defaults to postgres:16 |
| ODOO_DB_HOST | This value specifies the host name for the database to be used by Odoo. |
| ODOO_DB_USER | This value is used as username for Odoo Postgres DB instance. This is also referenced in Odoo application. |
| ODOO_DB_PASSWORD | This value is used as password for Odoo Postgres DB instance. This is also referenced in Odoo application. |
| EXTRA_ADDONS_PATH | When you want to installl an additional addon, you can set the path of the root directory which contains your module directory. |

Note: The same set of above variables are available for configuring Odoo 10 as well. Those variables are prefixed with `ODOO_10` instead of `ODOO`.

#### Odoo Connect Configurations

| Variable Name | Description |
| --- | --- |
| ODOO_CONNECT_IMAGE_TAG | This value tells which image version to be used for Odoo Connect Application. List of tags can be found at [bahmni/odoo-connect - Tags](https://hub.docker.com/r/bahmni/odoo-connect/tags) . |

## Odoo not synchronizing old patient data

Perform the followinng steps if older patient data is not being sent to Odoo. This likely happened because the ATOM Feed reader has already exhausted its max retry limit for failed events (by default set to 5 times). You can set the Failed events retry back to 1, and that should sync them immediately. Steps to fix this:

- 
Open terminal in your local machine, in `bahmni-docker` folder.

- 
Execute `docker ps` to see the list of running containers.

- 
Connect to the Odoo postgres DB container by executing the command: `docker container exec -it bahmni-docker_odoodb_1 /bin/bash` where `bahmni-docker_odoodb_1` is the name of the odoo postgres container. You should now be within the container.

- 
Connect to the postgres console using command: `psql -Uodoo odoo`. For more info on how to connect to Bahmni Databases, refer to this wiki page: [Connecting to various databases](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/49545219).

- 
In the psql prompt type: `select count(*) from failed_events;` This will show you the number of failed events.

- 
If 1 or more events are there, then you can fire the query: `select id,retries from failed_events;`. You should see all failed events have reached their retry limit.

- 
Fire an *update* statement to reset the retry count for all failed events: `update failed_events set retries=1;`

- 
Now in about a minute, all failed events should be processed and old patient data should get synced to Odoo.

- 
To exit the container, first type `\q` to exit postgres shell, and then type `exit` to exit bash shell without stopping the postgres container.

## Loading Additional Addons to Odoo

When you want to load additional addons to Odoo instance, you can set the EXTRA_ADDONS_PATH with the directory that contains your modules.

- 
Bring down Odoo if it is already running by doing docker-compose down .

- 
Set the path of your root directory of modules to EXTRA_ADDONS_PATH variable.

- 
Restart Odoo instance by running `docker-compose up`

- 
Login to the application

- 
Navigate to `Settings` page in the web and enable Developer Mode

- 
Navigate to Apps page and Click on `Update Apps List`

- 
Your new module will be listed and you can install it.

Note: If you want to add additional addons for Odoo 10, update value for `EXTRA_ODOO_10_ADDONS_PATH` in the .env files

## Development setup for Bahmni Odoo Modules

Note: Do these steps only if you need to development setup and update Bahmni Odoo modules.

- 
Clone the *Bahmni/bahmni-odoo-modules* repo at [https://github.com/Bahmni/bahmni-odoo-modules](https://github.com/Bahmni/bahmni-odoo-modules) 

- 
Bring Bahmni down by running `docker-compose down -v` from `bahmni-docker/bahmni-standard` directory.

- 
Update the `BAHMNI_ODOO_MODULES_PATH` variable in .env file with the cloned directory path. Also update COMPOSE_PROFILE=odoo so that only odoo services start.

- 
Now in `docker-compose.yml` uncomment the volume commented under odoo service.

- 
Start Odoo services by running `docker-compose up`

- 
Enable developer mode in Odoo by navigating to `Settings` page in Odoo Web and click `Activate the Developer Mode`

- 
After you perform a change, do the following steps to reflect the changes.

- 
Run `docker-compose restart odoo` (if using odoo 16) or `docker compose restart odoo-10` (if using odoo-10)

- 
Now in the browser navigate to `Apps` menu. Click on the app that is updated and click `Upgrade`.

- 
Now you should see the changes reflected. If not try from Step 8 & 9 once again.

Note: The development setup can be done by following the same steps except that the bahmni/odoo-modules needs to be cloned and its path to be updated in `BAHMNI_ODOO_10_MODULES_PATH` variable
