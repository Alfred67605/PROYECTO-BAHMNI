---
id: "449478685"
title: "Steps to Add Generic Bahmni Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/449478685/steps-to-add-generic-bahmni-display-control"
version: 3
updated: "2018-01-24T18:01:31.347Z"
author: "Himabindu Akkinepalli"
category: "Arquitectura_Sub_Sub"
download_date: "2026-10-20T21:06:29.394Z"
---

# Steps to Add Generic Bahmni Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/449478685)  
> **Versión del documento:** v3 (2018-01-24T18:01:31.347Z) | **Autor/Editor:** Himabindu Akkinepalli

---

Lets add a simple display control in patient dashboard which shows patient name and identifier. Our display control config looks like below.

```
"TestPatientInfo": {
   "name":"TestPatientInfo",
   "type":"patient",
     "displayOrder":2
}
```

###   Step 1:

Create a html file with name “patient”. **type** in the config should be the name of the html file. This html file will have a directive.

```

```

We should pass *patient.uuid* and *section* to the <**test-patient/> **directive to make patient details available to the view.

If you want the display control to be available in all the Bahmni modules then add all display control files in common folder (eg:ui/app/common/displaycontrols/dashboard/views/sections/). Otherwise add it in the specific module (eg: ui/app/<clinical>/dashboard/views/). Bahmni supports adding display controls in clinical patient dashboard, Visit page, inpatient dashboard and programs dashboard. 

###   Step 2:      

 Create the folder structure in the ui/app/common/displaycontrols/ path

                          ![](https://bahmni.atlassian.net/wiki/download/attachments/449478685/Screen%20Shot%202018-01-24%20at%204.49.04%20PM.png?version=1&modificationDate=1516813829766&cacheVersion=1&api=v2)

**

  Below is the code snippet for **testPatient.js** file

 
   ** Expand source 
 
 
  
```
'use strict';
angular.module('bahmni.common.displaycontrol.testPatient')
   .directive('testPatient', ['patientService', 'spinner', '$sce', '$rootScope', '$stateParams', '$window', '$translate',
       'configurations', '$q', 'visitService',
       function (patientService, spinner, $sce, $rootScope, $stateParams, $window, $translate, configurations, $q) {
           var controller = function ($scope) {
               var assignPatientDetails = function () {
                   var patientMapper = new Bahmni.PatientMapper(configurations.patientConfig(), $rootScope, $translate);
                   return patientService.getPatient($scope.patientUuid).then(function (response) {
                       var openMrsPatient = response.data;
                       $scope.patient = patientMapper.map(openMrsPatient);
                   });
               };
               var initPromise = $q.all([assignPatientDetails()]);
               $scope.initialization = initPromise;
           };

           var link = function ($scope, element) {
               spinner.forPromise($scope.initialization, element);
           };

           return {
               restrict: 'E',
               controller: controller,
               link: link,
               scope: {
                   patientUuid: "@",
                   visitUuid: "@",
                   config: "="
               },
               templateUrl: "../common/displaycontrols/testPatient/views/testPatient.html"
           };
```

 

Code snippet for **testPatient.html **file

```

   
## {{ ::config.name }}

               
                    
                       {{::patient.name }} ({{::patient.identifier}})
               

```

Code snippet for **init.js** file

```
'use strict';
var Bahmni = Bahmni || {};
Bahmni.Common = Bahmni.Common || {};
Bahmni.Common.DisplayControl = Bahmni.Common.DisplayControl || {};
Bahmni.Common.DisplayControl.testPatient = Bahmni.Common.DisplayControl.testPatient || {};
angular.module('bahmni.common.displaycontrol.testPatient', []);
```

###   Step 3:

Once we done adding the relevant files for display control, add

- Module name **bahmni.common.displaycontrol.testPatient **in *ui/app/<clinical>/app.js* file. 
- **patient.html** file name under *commonDisplayControlNames* variable in *...models/dashboardSection.js*
- Both** init.js** and **testPatient.js** file paths in *ui/app/<clinical>/index.html* file

Now we will be able to see the below display control in patient dashboard.

![](https://bahmni.atlassian.net/wiki/download/attachments/449478685/Screen%20Shot%202018-01-24%20at%205.20.44%20PM.png?version=1&modificationDate=1516813830764&cacheVersion=1&api=v2)

On this page
