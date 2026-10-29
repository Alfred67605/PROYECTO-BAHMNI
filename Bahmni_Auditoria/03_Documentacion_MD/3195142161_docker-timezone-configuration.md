---
id: "3195142161"
title: "Docker Timezone Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3195142161/docker-timezone-configuration"
version: 2
updated: "2023-06-14T14:05:50.348Z"
author: "Rahul Ramesh"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:12.596Z"
---

# Docker Timezone Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3195142161)  
> **Versión del documento:** v2 (2023-06-14T14:05:50.348Z) | **Autor/Editor:** Rahul Ramesh

---

By default, Docker containers run in the UTC timezone. However, you can configure the timezone for bahmni-lite's Docker containers by updating the TZ value in the .env file in bahmni-docker/bahmni-lite. 

Here are the steps to update the TZ value and set a specific timezone for your Docker containers:

### Update the TZ Value

In your project `bahmni-docker/bahmni-lite`, open the `.env` file and update the TZ value to your desired timezone. By default, the TZ value will be UTC.  

```
# Docker Compose Variables
COMPOSE_PROFILES=emr

# Environment variable to set the timezone for the containers
TZ=UTC
```

You need to specify the timezone in the TZ database format. For example, if you want to set the timezone to New York (Eastern Standard Time), you would set TZ to "America/New_York". For India, you would set TZ to "Asia/Kolkata", and for Kenya it would be "Africa/Nairobi".

You can find a list of valid timezone values in the [TZ database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) under the TZ identifier column. Save the changes to the .env file.

### Restart Docker Containers

To apply the new timezone configuration, restart the Docker containers. You can do this by stopping and removing the existing containers and then starting them again using Docker Compose or the Docker CLI.

For example, if you're using Docker Compose, you can run the following command in your project directory:

```
# First stop and remove the containers
docker-compose down
# Now start docker (run in detached mode)
docker-compose up -d
```

If you're using the Docker CLI directly, you can stop and remove the containers and recreate them using the appropriate Docker commands.

### Additionally, Verify the Timezone

After restarting the containers, you can verify the timezone configuration by checking the time inside the containers. You can do this by executing a shell command inside a container and running the `date` command.

For openmrs, you can run the following command to get the current date and time inside the bahmni-lite-openmrs-1 container:

```
docker exec -it bahmni-lite-openmrs-1 date
```

The output should reflect the updated timezone.

By following these steps, you can easily update the TZ value in the .env file to change the timezone for the Docker containers.
