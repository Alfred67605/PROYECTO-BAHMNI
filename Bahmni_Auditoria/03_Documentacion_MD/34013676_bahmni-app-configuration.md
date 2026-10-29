---
id: "34013676"
title: "Bahmni App Configuration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013676/bahmni-app-configuration"
version: 29
updated: "2022-11-21T12:08:14.765Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:03:15.448Z"
---

# Bahmni App Configuration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/34013676)  
> **Versión del documento:** v29 (2022-11-21T12:08:14.765Z) | **Autor/Editor:** Gurpreet Luthra

---

## Configuration Files

Bahmni configuration files are deployed under */bahmni_config/openmrs/apps* of the Bahmni web server. Each implementation should have its own copy of configuration files. The configuration files are largely simple [json](https://en.wikipedia.org/wiki/JSON) files.A typical directory structure would look like this. 
**Typical Directory Structure for Configuration files**

```
├── admin
├── adt
├── clinical
├── customDisplayControl
│   ├── js
│   └── views
├── documentUpload
├── home
├── orders
├── registration
│   ├── registrationCardLayout
│   │   ├── css
│   │   └── images
│   └── supplementalPaperLayout
│       └── css
└── reports
    └── sql
```

A sample configuration file set that has all features turned on can be found in [Github](https://github.com/bhamni/default-config). To simplify the effort, consider starting with working configuration files available in the [Bahmni](https://github.com/bahmni/) organization in GIthub (look for repositories ending with "-config"). 
 
- [http://www.jsoneditoronline.org/](http://www.jsoneditoronline.org/) is an online JSON editor, which is quite popular to visually validate / edit JSON file.
- You can refer to other Bahmni configurations/master data of real hospitals to learn from their work, and build your own on top of that. See this page (**Hospital section**): [List of Repositories needed for Development on Bahmni](/wiki/spaces/BAH/pages/1867786/List+of+Repositories+needed+for+Development+on+Bahmni)

## Apps

Apps are the top-level applications in Bahmni. An app will contain an app.json, an extension.json and optionally some custom configuration files.

#### app.json

A typical app.json will look like this. It** **is the primary configuration file for an app. This will contain all app level configurations. It also defines extensions that can be used to extend the app. 
**app.json**

```
{
        "id": "org.bahmni.newapp", // Unique ID for an app
        "extensionPoints": [
            {
                "id": "org.bahmni.newapp.newextension", // Unique ID for an extension
                "description": "Makes cheese" // Description for what an extension can do
            }
        ],
        "config" : {"keySpecificTonewapp": true} //A custom object that can be used by the application. Each application has settings that it can use
}
```

#### extension.json

**extension.json **contains instances of extensions configured for an app. In the above example, we created an extension with id "org.bahmni.newapp.newextension". This will be used in extension.json to create a new extension. Some extensions provide the ability to link to urls in a different app, thus allowing us to create entirely new apps based on urls from existing apps (Creating custom apps is a more involved topic, and not in scope of the discussion here). 
**extension.json**

```
{
  // Multiple extensions can be configured within this file. Each needs a unique key, like someKey below

  "someKey": { //Some key. It needs to be unique within the file, and describe what this extension does

    "id": "org.bahmni.newapp.newextension.uniqueId", //Mandatory. Unique id for this extension

    "extensionPointId": "org.bahmni.newapp.newextension", //Mandatory. Must match an extensionPoint defined in app.json. Describes the type of extension described by this extension

    "type": "link", //Mandatory. Currently Bahmni only supports extensions of type link and config

    "label": "A nice label", //Optional name for this extension. Extensions may use this to show titles etc

    "translationKey":"OBSERVATIONS_BOARD_LABEL_KEY", // Optional. If 

    "url": "/newUrl", //Sets url of the extension to newUrl 

    "icon": "fa-user-md", // Optional. Used if extension supports an icon

    "order": 1, // Optional. Used to order extensions of the same type if the extension supports it

    "requiredPrivilege": "app:clinical:observationTab" // User privileges required to activate this extension
  }
}
```

Other files are custom configuration that came out of the need to separate out configuration of specific functionality that grew too big. 

Configurations possible for each app are provided below. 

- [Home App](/wiki/spaces/BAH/pages/34013780/Home+App)
- [Registration App](/wiki/spaces/BAH/pages/34013806/Registration+App)
- [Clinical App](/wiki/spaces/BAH/pages/36700208/Clinical+App)
- [Groovy Scripts](/wiki/spaces/BAH/pages/97812538/Groovy+Scripts)
- [Overriding Configuration](/wiki/spaces/BAH/pages/27459635/Overriding+Configuration)
- [Configure White Labeling](/wiki/spaces/BAH/pages/115780492/Configure+White+Labeling)
- [System Configuration](/wiki/spaces/BAH/pages/114661925/System+Configuration)
- [Retrospective Entry of Data](/wiki/spaces/BAH/pages/114529011/Retrospective+Entry+of+Data)
- [Internationalization Support](/wiki/spaces/BAH/pages/34013224/Internationalization+Support)
- [Display Controls](/wiki/spaces/BAH/pages/37945573/Display+Controls)
- [Shortcuts in Bahmni](/wiki/spaces/BAH/pages/52691007/Shortcuts+in+Bahmni)

On this Page

 
 
 
**List of Bahmni Apps**

 

- [Home App](/wiki/spaces/BAH/pages/34013780/Home+App)
- [Registration App](/wiki/spaces/BAH/pages/34013806/Registration+App)
- [Clinical App](/wiki/spaces/BAH/pages/36700208/Clinical+App)
- [Groovy Scripts](/wiki/spaces/BAH/pages/97812538/Groovy+Scripts)
- [Overriding Configuration](/wiki/spaces/BAH/pages/27459635/Overriding+Configuration)
- [Configure White Labeling](/wiki/spaces/BAH/pages/115780492/Configure+White+Labeling)
- [System Configuration](/wiki/spaces/BAH/pages/114661925/System+Configuration)
- [Retrospective Entry of Data](/wiki/spaces/BAH/pages/114529011/Retrospective+Entry+of+Data)
- [Internationalization Support](/wiki/spaces/BAH/pages/34013224/Internationalization+Support)
- [Display Controls](/wiki/spaces/BAH/pages/37945573/Display+Controls)
- [Shortcuts in Bahmni](/wiki/spaces/BAH/pages/52691007/Shortcuts+in+Bahmni)
