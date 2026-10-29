---
id: "32014627"
title: "Configure Custom Prints"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014627/configure-custom-prints"
version: 11
updated: "2016-03-21T11:04:07.838Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:09.827Z"
---

# Configure Custom Prints

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014627)  
> **Versión del documento:** v11 (2016-03-21T11:04:07.838Z) | **Autor/Editor:** Teresa Gracias

---

## Purpose and Benefits

Bahmni allows implementers to design their own Custom Display Controls. The Custom Display Control can be styled in a way to give requisite Custom Prints.  This is unlike other implementation specific Display Controls. Bahmni provides this functionality to avoid the hassle of multiple types of styling and because it is much easier to design a display control that can be used to display Custom Prints. Hence the terms Custom Display Controls and Custom prints are used interchangeably.

## Steps
**General Guidelines for Custom Prints**

- A different file should not be created for new directives. **A****ll custom directives should be in the same file.**
- The **contentUrl** should be changed to point to the html file that is being referred to. 

Consider configuring a "Birth Certificate" that is to be displayed in the Visit tab and that will be printed as a Custom Print. Similar steps can be used to configure other Custom Prints.

1) Configure "Birth certificate" as a Custom Display Control.

```
 "birthCertificate": {
    "title": "Birth Certificate",
    "printing": {
        "title": "Bahmni",
        "header": "Certificate",
        "logo": "../images/bahmniLogo.png"
    },
    "sections": {
        "Birth Certificate": {
            "type": "custom",
            "config": {
                "title": "Birth Certificate",
                "template": "**"
            }
        }
    }
}
```

The following configuration needs to be added in visit.json to display the custom display control in different visit tabs. Please refer to [https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/visit.json](https://github.com/Bhamni/default-config/blob/master/openmrs/apps/clinical/visit.json) for further information.

2) Bahmni provides the **customDisplayControl** module that will provide a basic connection between the application and configuration.

3) New directives can be added as per requirements in the "openmrs/apps/customDisplayControl/js/customControl.js" file. Ensure that new custom directives are created only in the existing file. Refer to [https://github.com/Bhamni/default-    config/tree/master/openmrs/apps/customDisplayControl/js](https://github.com/Bhamni/default-config/tree/master/openmrs/apps/customDisplayControl/js) for further information. 

 4) New directives should be under the same module **"bahmni.common.displaycontrol.custom"**. The scope of the new directive should have **patient, visitUuid **and** config**.

5) "birthCertificate" is added as new a directive in the following example:

```
'use strict';
angular.module('bahmni.common.displaycontrol.custom')
    .directive('birthCertificate', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
            var link = function ($scope) {
                var conceptNames = ["HEIGHT"];
                $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/birthCertificate.html";
                spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data;
                }));
            };
            return {
                restrict: 'E',
                template: '',
                link: link
            }
    }])
```

In the above example, new concept names are configured in the variable **conceptNames**.

6) New templates can be created in the directive "**openmrs/apps/customDisplayControl/views/**". Refer to [https://github.com/Bhamni/default-config/tree/master/openmrs/apps/customDisplayControl/views](https://github.com/Bhamni/default-config/tree/master/openmrs/apps/customDisplayControl/views) for further information.

Template birthCertificate.html is created in the following example:

```

 {{config.title}}
 
 

 - 
  {{obsGroup.conceptNameToDisplay }} 
  {{obsGroup.value}} 
 

 

 

```

## ![](https://bahmni.atlassian.net/wiki/download/attachments/32014627/Screen%20Shot%202016-03-18%20at%201.05.04%20PM.png?version=1&modificationDate=1458286586524&cacheVersion=1&api=v2)

## Key Fields

| Key Field | Use |
| --- | --- |
| title | Title of the visit tab. |
| printing | Add printing section to enable the print button on visit page. |
| title | Title in print out. |
| header | header - Header in print out. |
| logo | logo to display in print out. |
| type | "custom" (Required and should always be custom) |
| config | configuration for the custom display control. |
| title | title - title of the custom directive |
| template | the directive which is to be shown |

On this Page

 
 
 
Feature Details**

[Clinical Services - Feature Guide](/wiki/spaces/BAH/pages/32014350/Clinical)

**Usage Details**

[Clinical Services - User Guide](/wiki/spaces/BAH/pages/32604195/Clinical+Services)
