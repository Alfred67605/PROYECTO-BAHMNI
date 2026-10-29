---
id: "700088324"
title: "Appointments Display Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/700088324/appointments-display-control"
version: 4
updated: "2022-11-18T04:19:09.275Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:38.376Z"
---

# Appointments Display Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/700088324)  
> **Versión del documento:** v4 (2022-11-18T04:19:09.275Z) | **Autor/Editor:** Gurpreet Luthra

---

Note
 
There is no default display control available to show the appointments on patient dashboard. One need to configure this custom display control to see the appointment details on patient dashboard. We will be building one as part of future Bahmni release. 

## Purpose

This custom display control can be used to show the list of future and past appointments of a patient on the patient dashboard

## Screenshot

![](https://bahmni.atlassian.net/wiki/download/attachments/700088324/Screen%20Shot%202018-08-02%20at%2011.54.58%20AM.png?version=1&modificationDate=1533211040234&cacheVersion=1&api=v2)

## Configuration

 Consider the following example to add Appointments as a new directive to the [customControl.js](https://github.com/Bahmni/default-config/blob/release-0.91/openmrs/apps/customDisplayControl/js/customControl.js):

```
'use strict';
angular.module('bahmni.common.displaycontrol.custom')
.directive('patientAppointmentsDashboard', ['$http', '$q', '$window','appService', function ($http, $q, $window, appService) {
    var link = function ($scope) {
        $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/patientAppointmentsDashboard.html";
        var getUpcomingAppointments = function () {
            var params = {
                q: "bahmni.sqlGet.upComingAppointments",
                v: "full",
                patientUuid: $scope.patient.uuid
            };
            return $http.get('/openmrs/ws/rest/v1/bahmnicore/sql', {
                method: "GET",
                params: params,
                withCredentials: true
            });
        };
        var getPastAppointments = function () {
            var params = {
                q: "bahmni.sqlGet.pastAppointments",
                v: "full",
                patientUuid: $scope.patient.uuid
            };
            return $http.get('/openmrs/ws/rest/v1/bahmnicore/sql', {
                method: "GET",
                params: params,
                withCredentials: true
            });
        };
        $q.all([getUpcomingAppointments(), getPastAppointments()]).then(function (response) {
            $scope.upcomingAppointments = response[0].data;
            $scope.upcomingAppointmentsHeadings = _.keys($scope.upcomingAppointments[0]);
            $scope.pastAppointments = response[1].data;
            $scope.pastAppointmentsHeadings = _.keys($scope.pastAppointments[0]);
        });
        $scope.goToListView = function () {
            $window.open('/bahmni/appointments/#/home/manage/appointments/list');
        };
    };

    return {
        restrict: 'E',
        link: link,
        scope: {
            patient: "=",
            section: "="
        },
        template: ''
    };
}]);
```

#### To Create Appointments Display page

Consider the following example to create a patientAppointmentsDashboard.html :
**patientAppointmentsDashboard.html**

```

    
## {{ section.title | titleTranslate}}

    

        - 
             {{::"DASHBOARD_UPCOMING_APPOINTMENTS_KEY" | translate}} 
        

        

            - {{::"DASHBOARD_NO_UPCOMING_APPOINTMENTS_KEY" | translate}}

        

        

            
| {{heading | translate}} |
| --- |
| {{detail}} |

        

    

    

        - 
             {{::"DASHBOARD_PAST_APPOINTMENTS_KEY" | translate}} 
        

        

            - {{::"DASHBOARD_NO_PAST_APPOINTMENTS_KEY" | translate}}

        

        

            
| {{heading | translate}} |
| --- |
| {{detail}} |

        

    

```

On this Page
