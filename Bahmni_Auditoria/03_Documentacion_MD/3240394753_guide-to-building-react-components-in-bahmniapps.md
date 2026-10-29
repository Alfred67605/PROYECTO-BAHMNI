---
id: "3240394753"
title: "Guide to building React components in Bahmniapps"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3240394753/guide-to-building-react-components-in-bahmniapps"
version: 3
updated: "2025-01-20T10:48:01.693Z"
author: "Rahul Ramesh"
category: "Arquitectura_Sub_Sub"
download_date: "2026-10-20T21:06:27.033Z"
---

# Guide to building React components in Bahmniapps

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3240394753)  
> **Versión del documento:** v3 (2025-01-20T10:48:01.693Z) | **Autor/Editor:** Rahul Ramesh

---

This wiki offers a comprehensive guide on creating React components within the openmrs-module-bahmniapps, considering that AngularJS has reached the [end of its support lifecycle](https://talk.openmrs.org/t/moving-bahmni-codebase-from-angularjs-to-react/32397). We'll also delve into how we accomplished this in the clinical module and explore possibilities for extending these techniques to other modules within Bahmni.

## Introduction to Next-UI

This is the designated location for constructing new React components intended for rendering within the Bahmni ecosystem. Within the `micro-frontends` folder in bahmniapps, you will find the [next-ui](https://github.com/Bahmni/openmrs-module-bahmniapps/tree/Bahmni-IPD-master/micro-frontends/src/next-ui) sub-folder, which houses the newly developed React components currently in use within the clinical dashboard of Bahmni. 

Here is a sneak peek into the folder structure of next-ui:-

```
|
|--- micro-frontends
|    |
|    |--- public/i18n             // All translations for micro-frontends 
|    |--- src
|         |--- next-ui
|              |
|              |--- Containers    // React components that will be exposed in Angular codebase
|              |--- Components    // reusable React components that can be used in Containers
|              |--- index.js.     // React-Angular connectors built with the bridge builder
|    
|--- ui                           // Angular codebase
|
```

 
At present, we are making the Micro Frontend (MFE) available exclusively within the clinical module as an initial step in our implementation.

If a specific React component is intended to be utilized across multiple modules within Bahmni to maintain consistent UI elements, it is recommended to include such components in the [bahmni-carbon-ui](https://github.com/Bahmni/bahmni-carbon-ui) repository.

## Building your new React component

To gain a deeper understanding of building custom components, let's use the `FormsDisplayControl` as an example.

- 
All the stylesheets, tests, and the component itself sits in the [Containers](https://github.com/Bahmni/openmrs-module-bahmniapps/tree/Bahmni-IPD-master/micro-frontends/src/next-ui/Containers/formDisplayControl) folder under next-ui.

- 
To expose 'FormsDisplayControl' to the Angular codebase, you'll need to make specific additions in the [index.js](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/Bahmni-IPD-master/micro-frontends/src/next-ui/index.js) file.

```
import { React2AngularBridgeBuilder } from "../utils/bridge-builder";
import { FormDisplayControl } from "./Containers/formDisplayControl/FormDisplayControl";

const MODULE_NAME = "bahmni.mfe.nextUi";

angular.module(MODULE_NAME, []);

const builder = new React2AngularBridgeBuilder({
  moduleName: MODULE_NAME,
  componentPrefix: "mfeNextUi",
});

builder.createComponentWithTranslationForwarding(
  "FormDisplayControl",
  FormDisplayControl
);
```

- 
The FormDisplayControl can be added to any of the [HTML files](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/Bahmni-IPD-master/ui/app/common/displaycontrols/dashboard/views/sections/nextUISection.html) in the clinical module to render the newly built react component. The HTML tag would look like so:- 

```
  
```

Any data intended for use within our React component can be conveyed via the 'host-data' property, which is configured in the corresponding Angular controllers or directives. Similarly, any events or data you wish to transmit to Angular can be facilitated through the 'host-api,' which encompasses a set of callback functions also implemented within the relevant Angular controllers or directives.

In the given example, the **React2AngularBridgeBuilder** component is a custom-built module that plays a vital role in establishing the essential connections between our React component and Angular. It facilitates the seamless transfer of data and the execution of callback functions behind the scenes. 

For detailed insights on how this module functions, feel free to refer to [this page](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/Bahmni-IPD-master/micro-frontends/src/utils/bridge-builder.js) for comprehensive explanations and documentation.

## Extending Next-UI to other Bahmni modules

To integrate our newly developed components into Bahmni, we've established `next-UI` as an Angular module, named `bahmni.mfe.nextUi`. To enable the use of these components, this module should be included as a dependency in the relevant Bahmni modules where we intend to render our fresh React components. 

Below, we demonstrate the process of adding the `next-UI` module to the clinical module for rendering these new React components.

```
'use strict';

var Bahmni = Bahmni || {};
Bahmni.Clinical = Bahmni.Clinical || {};
Bahmni.Clinical.DisplayControl = Bahmni.Clinical.DisplayControl || {};

angular.module('bahmni.clinical', ['bahmni.common.config', 'bahmni.common.domain',
    'bahmni.common.conceptSet', 'bahmni.common.uiHelper', 'bahmni.common.gallery', 
    'bahmni.common.logging', 'bahmni.mfe.ipd', 
    'bahmni.mfe.nextUi' 
]);
```

Along with this, we will have to manually add the minified Js and CSS files to the index.html of respective module. Here is how we have added the minified files to [index.html](https://github.com/Bahmni/openmrs-module-bahmniapps/blob/Bahmni-IPD-master/ui/app/clinical/index.html) of the clinical module.

```
- 

```

And while adding the next-UI components for the first time to a angular module, make sure the  React and React DOM dependency files are linked in the corresponding module’s index.html file

```

```

## Translations for Next-UI

All the translations leveraged by newly built React components (next-UI and other MFEs) will reside in the `public/i18n` folder which will be bundled along with the build of micro-frontends.

## Developer notes

When assigning class names to new components, it is strongly recommended to use unique names, preferably with a prefix such as 'next-ui-<classname>.' This practice is essential to prevent unintended style conflicts, as we have encountered instances where generic class names led to new styles mixing with existing styles in Bahmni.
