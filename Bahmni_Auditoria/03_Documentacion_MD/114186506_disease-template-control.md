---
id: "114186506"
title: "Disease Template Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114186506/disease-template-control"
version: 10
updated: "2022-11-18T04:14:27.582Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:32.386Z"
---

# Disease Template Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114186506)  
> **Versión del documento:** v10 (2022-11-18T04:14:27.582Z) | **Autor/Editor:** Gurpreet Luthra

---

# Purpose

Disease Template Control can be configured to display all the observation values captured against the particular disease like Cancer, Diabetes or TB. 

# Screenshot
![](https://bahmni.atlassian.net/wiki/download/attachments/114186506/Screen%20Shot%202017-03-02%20at%205.14.35%20PM.png?version=1&modificationDate=1488455387569&cacheVersion=1&api=v2)![](https://bahmni.atlassian.net/wiki/download/attachments/114186506/Screen%20Shot%202017-03-02%20at%205.15.02%20PM.png?version=1&modificationDate=1488455434534&cacheVersion=1&api=v2)

# Configuration

### Sample Configuration
**Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"diabetes":{  
   "title":"Diabetes",
   "templateName":"Diabetes Templates",
   "type":"diseaseTemplate",
   "dashboardConfig":{  
      "showOnly":[  
      ],
      "showGroupDateTime":false
   },
   "expandedViewConfig":{  
      "showOnly":[  
      ],
      "showDetailsButton":true,
      "pivotTable":{  
         "numberOfVisits":"15",
         "groupBy":"encounters",
         "obsConcepts":[  
            "Weight",
            "Height",
            "Systolic",
            "Diastolic",
            "Diabetes, Foot Exam",
            "Diabetes, Eye Exam",
            "Diabetes, Diabetes, Complications"
         ],
         "drugConcepts":[  
            "Ipratropium Pressurised",
            "Garbhpal Rasa",
            "Lente Insulin"
         ],
         "labConcepts":[  "RBS","FBS","PP2BS","Hb1AC"]
      },
      "observationGraph":{  
         "type":"observationGraph",
         "title":"Temperature",
         "config":{  
            "yAxisConcepts":[  
               "Temperature"
            ],
            "numberOfVisits":3
         }
      }
   }
}
```

**

### Key Field Table

| Key | Info | Mandatory |
| --- | --- | --- |
| title | The title to be displayed on the dashboard/visit page for the section. | Y |
| templateName | The name of the disease template in openMRS that needs to be displayed. | Y |
| type | The name/id for the control that needs to be picked from the code. | Y |
| showOnly | The concept names of the concepts that need to be displayed in this section. If blank, then all the concepts in that disease template will be displayed. | N |
| pivotTable | The configuration for the pivot table/flowsheet | Y |
| observationGraph | The configuration for the observationGraph (OPTIONAL) | N |
| numberOfVisits | The number of visits for which data has to be displayed in the pivot table | N |
| groupBy | Can be encounters/visits. If grouped by the encounter, then the data is displayed per encounter in the pivot table. If grouped by the visit, then the latest value of the observations in each visit is displayed in the pivot table. | Y |
| obsConcepts | The concept names of the observations that need to be displayed in the pivot table | Y |
| drugConcepts | The concept names of the drugs that need to be displayed in the pivot table | Y |
| labConcepts | The concept names of the lab tests that need to be displayed in the pivot table | Y |
| dashboardConfig | Indicates the configuration for the dashboard | Y |
| expandedViewConfig | Indicates the configuration for the details page (All Disease Details Page) | Y |
| showDetailsButton | Configuration to display audit information when '+ ' sign is clicked. If set to false, the '+' button will not be displayed. | N |
| showGroupDateTime | Configuration to display grouped encounter date time. If set to false, it is hidden. Default value is true(which means it is treated as true, if nothing specified). Should be separately configured for both dashboard and allDetails page. | N |

On this Page
 
 
 
 
Related Display Controls**

 

- [Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control)
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control)
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control)
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control)
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet)
