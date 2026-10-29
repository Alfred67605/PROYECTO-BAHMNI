---
id: "114217801"
title: "Birth Certificate"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114217801/birth-certificate"
version: 6
updated: "2017-03-03T11:24:11.173Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:39.691Z"
---

# Birth Certificate

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114217801)  
> **Versión del documento:** v6 (2017-03-03T11:24:11.173Z) | **Autor/Editor:** Himabindu Akkinepalli

---

# Purpose

It can be used to create a control to add a Birth Certificate**

# Configuration

### Add a birthCertificate directive

Consider the following example to add a birthCertificate as a new directive:

```
'use strict';
angular.module('bahmni.common.displaycontrol.custom')
    .directive('birthCertificate', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
            var link = function ($scope,element) {
                var conceptNames = ["HEIGHT"];
                $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/birthCertificate.html";
                spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data;
                }), element);
            };
            return {
                restrict: 'E',
                template: '',
                link: link
            }
    }])
```

 
- In the above example, the concept names we want to fetch is configured in the variable **conceptNames**.
- To display the spinner for each display control while loading, **element **should be passed in spinner.forPromise() as shown in the above example.
- You can create your own template in the directive "**openmrs/apps/customDisplayControl/views/**"

### Create a birthCertificate Display page

Consider the following example to create a birthCertificate.html:

```

    {{config.title}}
    
        

            - 
                 {{obsGroup.conceptNameToDisplay }} 
                 {{obsGroup.value}} 
            

        

    

```

On this Page
 
 
 
 

Related Display Controls**

 

- [Clinical Observation Controls](/wiki/spaces/BAH/pages/114186103/Clinical+Observation+Controls)
- [Show/Hide Display Controls based on data](/wiki/spaces/BAH/pages/115973098/Show+Hide+Display+Controls+based+on+data)
- [Custom Controls](/wiki/spaces/BAH/pages/93716500/Custom+Controls)
- [In-Patient Department (IPD) Controls](/wiki/spaces/BAH/pages/114204226/In-Patient+Department+IPD+Controls)
- [Lab and Radiology Controls](/wiki/spaces/BAH/pages/114206048/Lab+and+Radiology+Controls)
- [Medication Controls](/wiki/spaces/BAH/pages/114207149/Medication+Controls)
- [Miscellaneous Controls](/wiki/spaces/BAH/pages/114218923/Miscellaneous+Controls)
- [Patient Controls](/wiki/spaces/BAH/pages/114227069/Patient+Controls)
- [Tracking Controls](/wiki/spaces/BAH/pages/114227604/Tracking+Controls)
