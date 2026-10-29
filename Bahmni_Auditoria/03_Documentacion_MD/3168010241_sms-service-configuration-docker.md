---
id: "3168010241"
title: "SMS Service Configuration (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168010241/sms-service-configuration-docker"
version: 2
updated: "2023-04-10T11:53:52.515Z"
author: "Kavitha S"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:03.924Z"
---

# SMS Service Configuration (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3168010241)  
> **Versión del documento:** v2 (2023-04-10T11:53:52.515Z) | **Autor/Editor:** Kavitha S

---

[Bahmni/sms-service](https://hub.docker.com/r/bahmni/sms-service) image runs the functionality for Bahmni SMS service. The image is built and published using Github Actions from [sms-service](https://github.com/Bahmni/sms-service) repository.

## Environment Configurations

| Variable Name | Description |
| --- | --- |
| SMS_SERVICE_IMAGE_TAG | This value specifies which image version needs to be used for appointments service. List of tags can be found at [bahmni/sms-service - Tags](https://hub.docker.com/r/bahmni/sms-service/tags). |
| SMS_TOKEN | This value points to the token being used for sending SMS. One can set this value if they’ve valid tokens generated to access the SMS provider’s API. More details about the service provider being used in Bahmni is available down the page |
| SMS_ORIGINATOR | This value specifies the originator which is used for configuring the SMS header. One can specify the brand name to this value if they have registered originator. |
| SMS_OPENMRS_HOST | This value specifies the host name of the OpenMRS application |
| SMS_OPENMRS_PORT | This value specifies the port number of the OpenMRS application |

## Starting SMS service

For SMS service, there is an application profile `sms`  in docker which can be used to bring up the SMS service.

```
# From bahmni-lite/ or bahmni-standard/ subfolder, 
# execute this command to bring up sms-service
docker compose --profile sms up -d

```

 
Currently SMS service is being used in Registration and Appointments module in Bahmni. 

To know how to configure sending SMS in registration module, refer [here](/wiki/spaces/BAH/pages/3168075777/Configure+Sending+SMS+and+WhatsApp+message+on+Patient+Registration) and for appointments module, refer [here](/wiki/spaces/BAH/pages/3168075832/Configuration+to+enable+SMS+alerts+for+Appointments)

## Development on SMS service

When you want to develop on SMS service code, follow the below steps.

- 
Clone the [sms-service](https://github.com/Bahmni/sms-service) repository in your local machine.

- 
Follow the instructions in the README of the repository to install the required tools and dependencies.

- 
Build the project as instructed in the README and build the docker image using `docker compose build`

- 
Start / Recreate sms-service by doing  `docker-compose up -d sms-service`

- 
For every change you make, build the sms-service code and image **→** recreate the sms-service container, then the changes will reflect on the next trigger of SMS

 One can write their own implementation of SMS with preferable SMS providers and by exposing the API, it can be used in any of the Bahmni repositories for sending SMS. 

[sms-service](https://github.com/Bahmni/sms-service) is a reference implementation which uses D7 SMS service provider for sending SMS. If anyone wants to use different SMS service providers, then they can fork out [sms-service](https://github.com/Bahmni/sms-service) repository and write their own implementation of the interfaces with the preferred service providers.

## **SMS API Overview :**

We are currently using D7 SMS API for sending sms in Bahmni. The functionality is implemented in the repo [sms-service](https://github.com/Bahmni/sms-service). If sms-service is up and running, then we will be able to send sms.

***Prerequisite***: A paid account in D7 networks and an authorization token needs to be generated.

**D7 SMS** - [https://d7networks.com/](https://d7networks.com/) 

- 
For India D7 has two solutions one is the International in this route we have configured by default for all new customers in India which does not require the DLT registration and the price will be at **0.04$ per SMS.**

- 
On the other hand, if we want to configure the price at **0.003$ per SMS **which is a Domestic route** **the customer needs to complete the DLT registration and be required to share the DLT registered details as per the TRAI regulations. We can also configure the originator (sender address) if we register on DLT.

- 
It will accept 700 characters in SMS text and 1 SMS will be considered as 160 characters. Please find the character wise SMS details below.

![](https://bahmni.atlassian.net/wiki/download/attachments/3168010241/AkX6JANZL4VInWCdjur04XBeolSC6emCKup291ZnH-qQZsv0EqrCRqG5dWd05cACOCoCS6LRl0kNmmljITHFn0BeDQPlur5yV1VAvuzTWPXvjJcKhwvQs4I0DkeYfjruCyvXnQ13lrnUnMSmq-t0Cnc?version=1&modificationDate=1680674153426&cacheVersion=1&api=v2)
***Note:** Trial account will have free credits worth 0.2$ which allows sending around 6 sms*

**Working:**
![](https://bahmni.atlassian.net/wiki/download/attachments/3168010241/Screenshot%202023-04-05%20at%2011.29.48%20AM.png?version=1&modificationDate=1680674415995&cacheVersion=1&api=v2)
**Sample JSON for D7 SMS**
![](https://bahmni.atlassian.net/wiki/download/attachments/3168010241/YirOEmNmqpe2DXtYV1KRyllvH3DZu1Rv9d1ITmCewNa3amkY8jfUXqw4TXb9vofliSpMbdPf7zdFqKxhop_xLoi5aZqNlemlZBup9XA1DmTxTeCk_DxCJiaM6EUjXnqsJhCmdHIDCdPf5t-QEWIy4vg?version=1&modificationDate=1680674153450&cacheVersion=1&api=v2)
