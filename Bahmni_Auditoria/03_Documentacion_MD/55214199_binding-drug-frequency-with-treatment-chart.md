---
id: "55214199"
title: "Binding Drug Frequency with Treatment Chart"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/55214199/binding-drug-frequency-with-treatment-chart"
version: 21
updated: "2022-11-20T11:36:01.249Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:09.325Z"
---

# Binding Drug Frequency with Treatment Chart

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/55214199)  
> **Versión del documento:** v21 (2022-11-20T11:36:01.249Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose and benefits

This config enables a user to add custom drug frequencies, like Monday, Wednesday, Friday, in Medication. The user can also configure the*** Treatment Chart*** where a custom display control displays information according to the customized frequency.

## Steps

The treatment chart is available in the visit dashboard of an admitted patient

![](https://bahmni.atlassian.net/wiki/download/attachments/55214199/Screen%20Shot%202016-04-25%20at%203.22.22%20PM.png?version=1&modificationDate=1461578044000&cacheVersion=1&api=v2)

### Configuration in visit.json

The following config is required in **apps/clinical/visit.json**: 
**Code Snippet**

```
"sections": {
 "Custom Treatment Chart": {
    "type": "custom",
  "displayOrder": 1,
  "config": {
      "title": "Custom Treatment Chart",
  "template": "",
  "showOtherActive": true,
  "frequenciesToBeHandled": [
        "Monday, Wednesday, Friday",
  "Tuesday, Thursday, Saturday",
  "Monday, Sunday, Wednesday"
  ]
    }
  },
  "Treatments": {
    "type": "treatment",
  "title": "Treatments",
  "displayOrder": 6,
  "config": {
      "translationKey": "VISIT_TITLE_TREATMENTS_KEY",
  "showFlowSheet": false,
  "showListView": true,
  "showOtherActive": false,
  "showDetailsButton": true,
  "showRoute": true,
  "showDrugForm": true,
  "showProvider" : true
  }
  }
}
```

### Configuration in customControl.js

In **apps/customDisplayControl/js/customControl.js** (if this file is not there in js directory, create it)

If customControl.js is already present, then add this config in the end and do not merge it with any other directive.
**Code Snippet**

```
.directive('customTreatmentChart', ['appService', 'treatmentConfig', 'treatmentService', 'spinner', '$q', function(appService, treatmentConfig, treatmentService, spinner, $q) {
    var link = function($scope) {
        var Constants = Bahmni.Clinical.Constants;
        var days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/customTreatmentChart.html";

        $scope.atLeastOneDrugForDay = function(day) {
            var atLeastOneDrugForDay = false;
            $scope.ipdDrugOrders.getIPDDrugs().forEach(function(drug) {
                if (drug.isActiveOnDate(day.date)) {
                    atLeastOneDrugForDay = true;
                }
            });
            return atLeastOneDrugForDay;
        };
        $scope.getVisitStopDateTime = function() {
            return $scope.visitSummary.stopDateTime || Bahmni.Common.Util.DateUtil.now();
        };
        $scope.getStatusOnDate = function(drug, date) {
            var activeDrugOrders = _.filter(drug.orders, function(order) {
                if ($scope.config.frequenciesToBeHandled.indexOf(order.getFrequency()) !== -1) {
                    return getStatusBasedOnFrequency(order, date);
                } else {
                    return drug.getStatusOnDate(date) === 'active';
                }
            });
            if (activeDrugOrders.length === 0) {
                return 'inactive';
            }
            if (_.every(activeDrugOrders, function(order) {
                    return order.getStatusOnDate(date) === 'stopped';
                })) {
                return 'stopped';
            }
            return 'active';
        };
        var getStatusBasedOnFrequency = function(order, date) {
            var activeBetweenDate = order.isActiveOnDate(date);
            var frequencies = order.getFrequency().split(",").map(function(day) {
                return day.trim();
            });
            var dayNumber = moment(date).day();
            return activeBetweenDate && frequencies.indexOf(days[dayNumber]) !== -1;
        };
        var init = function() {
            var getToDate = function() {
                return $scope.visitSummary.stopDateTime || Bahmni.Common.Util.DateUtil.now();
            };
            var programConfig = appService.getAppDescriptor().getConfigValue("program") || {};
            var startDate = null,
                endDate = null,
                getEffectiveOrdersOnly = false;
            if (programConfig.showDetailsWithinDateRange) {
                startDate = $stateParams.dateEnrolled;
                endDate = $stateParams.dateCompleted;
                if (startDate || endDate) {
                    $scope.config.showOtherActive = false;
                }
                getEffectiveOrdersOnly = true;
            }
            return $q.all([treatmentConfig(), treatmentService.getPrescribedAndActiveDrugOrders($scope.config.patientUuid, $scope.config.numberOfVisits,
                    $scope.config.showOtherActive, $scope.config.visitUuids || [], startDate, endDate, getEffectiveOrdersOnly)])
                .then(function(results) {
                    var config = results[0];
                    var drugOrderResponse = results[1].data;
                    var createDrugOrderViewModel = function(drugOrder) {
                        return Bahmni.Clinical.DrugOrderViewModel.createFromContract(drugOrder, config);
                    };
                    for (var key in drugOrderResponse) {
                        drugOrderResponse[key] = drugOrderResponse[key].map(createDrugOrderViewModel);
                    }

                    var groupedByVisit = _.groupBy(drugOrderResponse.visitDrugOrders, function(drugOrder) {
                        return drugOrder.visit.startDateTime;
                    });
                    var treatmentSections = [];

                    for (var key in groupedByVisit) {
                        var values = Bahmni.Clinical.DrugOrder.Util.mergeContinuousTreatments(groupedByVisit[key]);
                        treatmentSections.push({
                            visitDate: key,
                            drugOrders: values
                        });
                    }
                    if (!_.isEmpty(drugOrderResponse[Constants.otherActiveDrugOrders])) {
                        var mergedOtherActiveDrugOrders = Bahmni.Clinical.DrugOrder.Util.mergeContinuousTreatments(drugOrderResponse[Constants.otherActiveDrugOrders]);
                        treatmentSections.push({
                            visitDate: Constants.otherActiveDrugOrders,
                            drugOrders: mergedOtherActiveDrugOrders
                        });
                    }
                    $scope.treatmentSections = treatmentSections;
                    if ($scope.visitSummary) {
                        $scope.ipdDrugOrders = Bahmni.Clinical.VisitDrugOrder.createFromDrugOrders(drugOrderResponse.visitDrugOrders, $scope.visitSummary.startDateTime, getToDate());
                    }
                });
        };
        spinner.forPromise(init());
    };
    return {
        restrict: 'E',
        link: link,
        scope: {
            config: "=",
            visitSummary: '='
        },
        template: ''
    }
}]);
```

### Configuration related to Views

In **apps/customDislayControl/views **create a HTML file and name it "customTreatmentChart.html" and add the below config in it.
**Code Snippet**

```

    
## {{config.title}}

    
| {{::(visitSummary.startDateTime | bahmniDate) + ' - '+ (getVisitStopDateTime() | bahmniDate)}} | {{drug.orders[0].getDisplayName()}} |
| --- | --- |
| {{day.date | bahmniDate}} |  |

```

### Configuration in OpenMRS

In OpenMRS, add a concept of class **frequency** and datatype **N/A. ** As seen in screenshot below, the concept name is: "Monday, Wednesday, Friday". This is because the Bahmni UI shows this concept name on the UI for selection of "frequency", and hence should be easy to understand.

**![](https://bahmni.atlassian.net/wiki/download/attachments/55214199/Screen%20Shot%202016-04-26%20at%2011.10.14.png?version=1&modificationDate=1461649191632&cacheVersion=1&api=v2)****

In OpenMRS DB, insert a row in **order_frequency** table with the concept ID of the concept created above to see the frequency in the frequency drop down of Medication tab.

![](https://bahmni.atlassian.net/wiki/download/attachments/55214199/Screen%20Shot%202016-04-26%20at%2011.36.12.png?version=1&modificationDate=1461650739600&cacheVersion=1&api=v2)

On this page**
