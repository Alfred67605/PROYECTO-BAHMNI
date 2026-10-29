---
id: "27459635"
title: "Overriding Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/27459635/overriding-configuration"
version: 15
updated: "2017-02-14T07:15:53.853Z"
author: "teresa gracias"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:24.036Z"
---

# Overriding Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/27459635)  
> **Versión del documento:** v15 (2017-02-14T07:15:53.853Z) | **Autor/Editor:** teresa gracias

---

Any Bahmni configuration can be overridden by creating a separate override file. That way, an implementation with multiple entities can have a standard master configuration and each entity will have the freedom to override specific parts

![](https://bahmni.atlassian.net/wiki/download/attachments/27459635/mergeConfig%20(1).png?version=1&modificationDate=1443102854328&cacheVersion=1&api=v2)

## Example

Let us take an example config file:
**clinical/app.json**

```
{
        "id": "bahmni.clinical",
        "extensionPoints": [
            {
                "id": "org.bahmni.clinical.consultation.board",
                "description": "Bahmni Clinical Consultation Page"
            },
            {
                "id": "org.bahmni.clinical.conceptSetGroup.*",
                "description": "Define conceptsets part of a conceptset group"
            },
            {
                "id": "org.bahmni.clinical.orders",
                "description": "Bahmni Orders Page"
            },
            {
                "id":"org.bahmni.patient.search",
                "description": "Bahmni Patient search, lookups Page"
            }
        ],
}
```

To override this config file with another file, do the following two things

- 
Add the flag "shouldOverRideConfig: true" as shown below
**/var/www/bahmni_config/openmrs/apps/clinical/app.json**

```
{
        "id": "bahmni.clinical",
		"shouldOverRideConfig": true,
        "extensionPoints": [
            {
                "id": "org.bahmni.clinical.consultation.board",
                "description": "Bahmni Clinical Consultation Page"
            },
            {
                "id": "org.bahmni.clinical.conceptSetGroup.*",
                "description": "Define conceptsets part of a conceptset group"
            },
            {
                "id": "org.bahmni.clinical.orders",
                "description": "Bahmni Orders Page"
            },
            {
                "id":"org.bahmni.patient.search",
                "description": "Bahmni Patient search, lookups Page"
            }
        ],
}
```

- 
Create a new file openmrs/apps/clinical/app.json in the folder /var/www/implementation_config as shown below
**/var/www/implementation_config/openmrs/apps/clinical/app.json**

```
{
        "id": "bahmni.clinical",
        "extensionPoints": [
            {
                "id": "org.bahmni.clinical.consultation.board",
                "description": "Bahmni Clinical Consultation Page"
            }
        ],
}
```

The above file will override the section "extensionPoints" in the the app.json file with the contents of the app.json file.

- Make sure to have an alias for implementation_config is added to "ssl.conf" under /etc/httpd/conf.d directory. Ideally this will be coming from bahmni installer itself. If not, add a new line with "Alias /implementation_config /var/www/implementation_config" where all the aliases are added.

## Different types of overrides

| Type | config | overridden config | Notes |
| --- | --- | --- | --- |
| override | ``` sections: { "observations" : { "name" : "Observations", "showDefault":true }, "disposition":{ "name": "disposition" } } ``` | ``` sections: { "observations" : { "showDefault":false } } ``` | "observations"."name" will not be modified "observations"."showDefault" will be overridden "disposition" section will be KEPT |
| Remove | ``` sections: { "observations" : { "name" : "Observations", "showDefault":true }, "disposition":{ "name": "disposition" } } ``` | ``` sections: { "observations" : { "showDefault":false }, "disposition": null } ``` | "observations"."name" will not be modified "observations"."showDefault" will be overridden "disposition" section will be REMOVED |

![](https://bahmni.atlassian.net/wiki/download/attachments/27459635/overriding.png?version=1&modificationDate=1443103383669&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/27459635/add.png?version=1&modificationDate=1443112294201&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/27459635/noChange.png?version=1&modificationDate=1443102211288&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/27459635/deleteScenario.png?version=1&modificationDate=1443102209978&cacheVersion=1&api=v2)
