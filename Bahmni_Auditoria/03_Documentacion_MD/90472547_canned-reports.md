---
id: "90472547"
title: "Canned Reports"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/90472547/canned-reports"
version: 5
updated: "2016-09-29T09:02:18.080Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:07.791Z"
---

# Canned Reports

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/90472547)  
> **Versión del documento:** v5 (2016-09-29T09:02:18.080Z) | **Autor/Editor:** Gurpreet Luthra

---

# Purpose and Benefits
 
The Canned Reports was an older feature in Bahmni. New users are recommended to instead use the [Reports](/wiki/spaces/BAH/pages/90472551/Reports) feature of Bahmni.

**

These reports are meant to give specific or predefined information from Bahmni. There is minimal configuration available for these reports. Whenever clients ask for new requirements, even though there may be a similar report, it cannot be reused. Hence Bahmni system ends up with new canned reports and this increases the maintenance. Generic Reports seek to eventually solve this problem.

**Reference tables**

Bahmni allows one to setup multiple types of age groups each with a name. Each report configuration can use their own age group by specifying the name in the configuration. For certain reports one can also set some reference range for concepts.

For example, the report given below shows counts based on age-groups. 

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Obscount.png?version=1&modificationDate=1475045803679&cacheVersion=1&api=v2)

To display reports like this, you should insert age group configurations into the reference table "reporting_age_group" and then reference that from the report configuration.

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/table_agegroup.png?version=1&modificationDate=1475045804222&cacheVersion=1&api=v2)**Configuration**
 Code Snippet

```
 "nutritionProgram": { 
    "name": "Nutrition Program - 
You can insert entries into reporting_age_group using SQL commands. Given below are some examples of INSERT SQL commands.

```
INSERT INTO reporting_age_group (name,report_group_name, min_years, min_days, max_years, max_days)
VALUES ('6 - 11 months', 'Nutrition Program Vitamin A',0,180,1,-1);
```

```
INSERT INTO reporting_age_group (name,report_group_name, min_years, min_days, max_years, max_days)
VALUES ('12 - 59 months', 'Nutrition Program Vitamin A',1,0,5,-1);
```

## 1. Obs Count Report

There are three variants of this. If you provide more than one concept name in the config, please make sure that all of them are of same data type, (Either coded concept or boolean concept). If a mix of datatypes are provided, it will always generate obs count report.

### 1.1 Obs count

**     **Use this, if you just want to count the number of observations created for a concept (other than Boolean or Coded). Add the location Tag &ldquo;Report location&rdquo; in OpenMRS. Specify the location tag in config   eg. "locationTagNames":   ["Report Location&rdquo; ].
 Code Snippet

```
"nutritionProgram": {
    "name": "Nutrition Program - 

**![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Obscountform.png?version=1&modificationDate=1475045804529&cacheVersion=1&api=v2)**

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Obscount.png?version=1&modificationDate=1475045803679&cacheVersion=1&api=v2)

### 1.2. Coded Obs count Boolean

 It is used to count the number of observations of a coded concept, classified by the user selection (coded answers).  

Add the locationTag &ldquo;Report location&rdquo; in OpenMRS, specify the location tag in the config. For example, "locationTagNames":   ["Report Location&rdquo; ]
 Code Snippet

```
"nutritionProgram": {
"name": "Nutrition Program - Nutritional status of registered children"
,
"type":
"obsCount",
"config": {
"ageGroupName": "Nutritional Status For Registered Children",
"conceptNames": ["Nutrition, Nutritional Status"],
"locationTagNames": ["Report Location"]
}
}
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/codedObsform.png?version=1&modificationDate=1475045804813&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/CodedObscount.png?version=1&modificationDate=1475045805059&cacheVersion=1&api=v2)

### 1.3 Boolean concepts count

(to be renamed toBoolean Observations Count) Use this when you want to count the observations of type boolean, classified by the user selection: Yes/No (True/False).
 Code Snippet

```
"nutritionProgram": {
  "name": "Nutrition Program - 

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/BooleanObs.png?version=1&modificationDate=1475045805604&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/BooleabObsCount.png?version=1&modificationDate=1475045806128&cacheVersion=1&api=v2)

## 2. Coded Obs by Coded Obs

** **   Use this to count the two coded observations. They are both counted and displayed as a pivot table against each other.
 Code Snippet

```
 "safeMotherhoodProgram": {
  "name": "Safe Motherhood program - Type of delivery",
  "type": "CodedObsByCodedObs",
  "config": {
    "ageGroupName": "All Ages",
    "conceptPair": ["Delivery Note, Method of Delivery", "Delivery Note, Fetal Presentation"],
    "rowsGroupBy": ["Delivery Note, Method of Delivery"],
    "columnsGroupBy": ["Delivery Note, Fetal Presentation"]
  }
 }
```

**
![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/CodedVsCoded.png?version=1&modificationDate=1475045806470&cacheVersion=1&api=v2)**

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/codedObsByCodedObs.png?version=1&modificationDate=1475045806766&cacheVersion=1&api=v2)

## 3. Diagnosis count

Lists count of all diagnosis entered via the Bahmni system. 
 Code Snippet

```
"nameOfReport": {
 "name": "Name of Report",
 "type": "diagnosisCount", // Mandatory. Value should be exactly diagnosisCount
 "config": {
 "dateRangeRequired": false, // Optional. Used to display reports that do not require a date range in a different section. Default true
 "applyDateRangeFor": "visitStopDate|diagnosisDate", // Optional. Default value = 'visitStopDate'. Valid only when dateRangeRequire=true
 "visitsToConsider": "open|closed|all", // Optional field. Default value = 'all'
 "ageGroupName": "age group name defined in reporting_age_group.report_group_name" //Optional
 "concept": "concept_set_name", // Mandatory. Three level concept set structure, with a root_concept, header_concepts and leaf_concepts
 "rowsGroupBy": ["gender|agegroup_name|header_concept_name|leaf_concept_name"], // Optional field but when rowsGroupBy is specified, columnsGroupBy should also be specified. Default value is ["header_concept_name", "leaf_concept_name]
  "columnsGroupBy": ["gender|agegroup_name|header_concept_name|leaf_concept_name"], //Optional field but when rowsGroupBy is specified, columnsGroupBy should also be specified. Default value is ["agegroup_name"]
"icd10ConceptSource": "ICD10-BD", // Optional field. Default value = 'ICD 10 - WHO'. If any implementation is using a different concept source for diagnosis coding, it can be set here.
"locationTagNames":["Report Location"] // Optional field. If any location tag is provided, only the encounters associated with the locations with those tags are counted. If this parameter is not set, all the encounters would be counted.
 }
}
```

Currently, if there is a concept field specified, we do not have ICD10 code in the report. It is currently not clear if ICD10 codes are required to be setup for the diagnosis report to work. Once a decision is reached, all reports will follow the convention

The age group is supposed to be present in the reporting_age_group table in OpenMRS database. 
 Code Snippet

```
Diagnosis Summary report
"OralnDentalReport": {
          "name": "Dental and Oral Report",
          "type": "diagnosisCount",
          "config": {
             "concept": "Oral diagnosis",
             "ageGroupName": "Age Groups",
             "rowsGroupBy": ["header_concept_name","leaf_concept_name"],
             "columnsGroupBy": ["gender","agegroup_name"]
           }
 }
```

**![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/diagnosis%20count%20sample.png?version=1&modificationDate=1475045807055&cacheVersion=1&api=v2)**

**
**

**Diagnosis report without age group**

 Code Snippet

```
"OralnDentalReport1": {
"name": "Dental and Oral Report 1",
"type": "diagnosisCount",
"config": {
"locationTagNames":["Report Location"],
"icd10ConceptSource":"ICD10-BD",
"rowsGroupBy": [
"header_concept_name",
"leaf_concept_name"
],
"visitTypes":["IPD","OPD"],
"columnsGroupBy": [
"gender",
"agegroup_name"
]
}
},
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/DiagnosiswithoutAgegroup.png?version=1&modificationDate=1475045807317&cacheVersion=1&api=v2)

**Diagnosis report with age group**
 Code Snippet

```
"OralnDentalReport2": {
"name": "Dental and Oral Report 2",
"type": "diagnosisCount",
"config": {
"locationTagNames":["Report Location"],
"icd10ConceptSource":"ICD10-BD",
"ageGroupName": "Registration",
"rowsGroupBy": [
"header_concept_name",
"leaf_concept_name"
],
"visitTypes":["IPD","OPD"],
"columnsGroupBy": [
"gender",
"agegroup_name"
]
}
},
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/DiagnosiswithAgegroup.png?version=1&modificationDate=1475045807630&cacheVersion=1&api=v2)

## 4. Test Count

To list all tests, results and the count.
 Code Snippet

```
    "name": "Malaria Control Programme - Diagnosis and Result [check for Microscopy= 'PBS for Malaria, Filaria parasite', RDT= SUM('Malaria Ags', 'Malaria Abs')]",
    "type": "TestCount"
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/testcount.png?version=1&modificationDate=1475045807939&cacheVersion=1&api=v2)

## 5. Observation Template Report

Report for a template with all the fields and the values that were filled in a given timeframe.

Add the location Tag &ldquo;Report location&rdquo; in OpenMRS. Specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],
 Code Snippet

```
"vitalsTemplateReport":{
        "name": "Vitals Template Report",
        "type": "obsTemplate",
        "config": {
            "templateName": "Vitals",
            "patientAttributes": ["caste", "education"],
			"locationTagNames": ["Report Location"],
            "applyDateRangeFor": "encounterCreateDate"
        }
    }
```

- **name**: Name of the Report.
- **templateName**: Observation template for which the report needs to be generated.
- **patientAttributes**: Patient attributes like caste, education to be displayed against each patient in report (Refer to image).
- **applyDateRangeFor**: This additional parameter takes the following value **encounterCreateDate** or **encounterDate**, to apply the date range filter accordingly. The default value is **encounterDate**.

        

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Vitals_Template_Report.png?version=1&modificationDate=1475045808230&cacheVersion=1&api=v2)

## 6. OPD/IPD Visits Count Report

      Lists the count of new/old OPD/IPD patients counts in a given time period.
 Code Snippet

```
    "ipdOPd": {
     "name": "OPD/IPD Visit Count",
     "type": "IpdOpdVisitCount"
         }
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/opd-ipd-count.png?version=1&modificationDate=1475045808553&cacheVersion=1&api=v2)

## 7. Numeric Concept Values Report

Lists the count of numeric concepts observations based on the result values range for the given age groups
 Code Snippet

```
    "HaemoglobinRange": {
       "name": "Haemoglobin Range Based Report 
",
       "type":
 "NumericConceptValuesCount",
        "config": {
            "rangeGroupName": "Haemoglobin",
            "ageGroupName": "Haemoglobin",
            "conceptNames": ["Haemoglobin"],
            "countOncePerPatient": false      
        }
    } 
```

The default value of  "**countOncePerPatient**" should be false. In this case, we count an observation as many times as it has been recorded.

 The observation will be counted once within an encounter. All changes made to an observation within an encounter will be considered as one.

If the value of **"countOncePerPatient"** is set to true, then we only count the latest value of the observation for the given date range.

               ![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/numeric-concpet-values-report.png?version=1&modificationDate=1475045808852&cacheVersion=1&api=v2)

## 8. Obs Count By Concept Class Report

Lists the count of observations based on the concept class for the given date range
 Code Snippet

```
    "radiologyCount": {
       "name": "Radiology(X-Ray) Count",
       "type": "ObsCountByConceptClass",
        "config": {
            "conceptClassNames": ["Radiology"]
        }
     }
```

```
 
```

                ![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/obsCountByConceptClass.png?version=1&modificationDate=1475045809146&cacheVersion=1&api=v2) 

## 9. Obs Value Count Report

Lists the count of observations for each value for given concept names.
 Code Snippet

```
     "ObsValueCount": {
       "name": "Obs Value Counts for Albumin, MCH, Surgery Date and Posture(blood pressure)",
       "type": "ObsValueCount",
        "config": {
            "conceptNames": ["Albumin","MCH","Date of Surgery","Posture"]
        } 
           }
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/obsValueCount.png?version=1&modificationDate=1475045809483&cacheVersion=1&api=v2)

## 10. Patients With Lab Test Results Report

Lists the patients with lab test results along with test outcome, for a given list of lab tests and based on given test outcome (abnormal and/or normal)
 Code Snippet

```
    "patientsWithLabTest": {
       "name": "Patients with labtest results for HIV ELISA, Albumin and MCH",
       "type": "PatientsWithLabtestResults",
        "config": {
            "conceptNames": ["HIV ELISA (Blood)","Albumin","MCH"]
            "testOutcome": ["abnormal","normal"]
        }
    } 
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/patients_with_labtest_results.png?version=1&modificationDate=1475045809743&cacheVersion=1&api=v2)
## 11. IPD Patients Report

In this report, we generate a list of IPD patients along with a number of fields including patient details, confirmed diagnosis (comma separated if there is more than one), observation values (comma separated if there is more than one) for configurable list of concepts, configurablelistof patient attributes and configurable list of address attributes.
 Code Snippet

```
"ipdPatients": {
   "name": "IPD Patients Report",
   "type": "ipdPatients",
   "config": {
              "addressAttributes": ["address1", "city_village"],
              "patientAttributes": ["caste", "education"],
              "conceptNames": ["Height", "Weight"],
              "locationTagNames": ["Report Location"],
              "filterBy": "Date of Discharge"
    }
}
```

**Note: addressAttributes must always** be in snake case. For example: "city_village" instead of "cityVillage".

The date range filtering criteria can either be applied on "Date of Admission" or "Date of Discharge". We use "filterBy" parameter to specify the user criteria and distinguish between the two scenarios. If not configured, the "filterBy" parameter will be defaulted to "Date of Admission".

- Add the location Tag &ldquo;Report location&rdquo; in OpenMRS 
- And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/IPD_Patients_Report.png?version=1&modificationDate=1475045810202&cacheVersion=1&api=v2)

## 12. Visits Aggregate Count Report

In this report, we will generate the count of admission and discharges happened during the given date range, for each visit type.
 Code Snippet

```
"visitAggregateCount": {
    "name": "Visit Aggregate Count Report",
    "type": "VisitAggregateCount",
    "config": {
               "type": "VisitAggregateCountReport",
               "locationTagNames": ["Report Location"],
               "visitTypes": "'IPD','OPD','EMERGENCY'"
    }
}
```

- Add the location Tag &ldquo;Report location&rdquo; in OpenMRS 
- And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/visit_aggregate_count.png?version=1&modificationDate=1475045810446&cacheVersion=1&api=v2)

## 13. Patient Program State Count Report

In this report, we will generate the count of patients who are admitted to different states of a program.

Note: If a program has no states it will open up a blank page. The parameter "programName" is a program which is already configured earlier in OpenMRS.
 Code Snippet

```
"patientProgram": {
    "name": "Patient Program State Count Report",
    "type": "programStateCount",
    "config": {
               "programName": "Patient Overall Status"
    }
}
```

Example: We have created a Patient Overall Status program and added three states 'Attending Clinic', 'Transferred OutOf' and 'Dead' to it. It shows the number of patients that have entered a state within a given date range "From 2015-08-01 to 2015-08-13" .

If the patient is currently enrolled in a different state, still the count should be taken for the original state if it is in the date range and has not been deleted.

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Screen%20Shot%202015-08-07%20at%204.51.36%20pm.png?version=1&modificationDate=1475045810790&cacheVersion=1&api=v2)

## 14. Patient Program State Transition Count Report

In this report, we will generate the count of patients who are under going a state transition of a program. 

Note: If a program has no states it will open up a blank page. The parameter "programName" is a program which is already configured earlier in OpenMRS.
 Code Snippet

```
"malariaProgram": {
    "name":"Malaria Program State Transition Report",
    "type":"programStateTransitionReport",
    "config":{
        "programName":"Malaria Program"
  }
}
```

Example: We have created a Malaria Program and added three states 'First State', 'Second State' and 'Third State' to it. It shows the number of patients that have done a state transition

from 'First State' to 'Second State' and from 'Second State' to 'Third State' within a given date range "From 2015-08-02 to 2015-08-06" .

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Screen%20Shot%202015-08-13%20at%2011.40.21%20am.png?version=1&modificationDate=1475045811051&cacheVersion=1&api=v2) 

## 15. Patient Data Report

In this report, patient details are generated with the following fields

- Patient ID
- Patient Name
- Age
- Gender
- DOB
- Address fields
- Patient Attributes
- Date of registration

Note: If no date range is specified then the data for all patients is returned.
 Code Snippet

```
"patientInformation": {
        "name": "Patient Information",
        "type": "PatientReport"
}
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Screen%20Shot%202015-08-10%20at%2011.00.49%20am.png?version=1&modificationDate=1475045811359&cacheVersion=1&api=v2)

## 16. Program Patient State Report

Patient details are generated with the following fields

- Sr. No.
- Patient Identifier
- Patient Name
- Patient Age
- enrolment date in the program 
- states for the patient
- state start date
- state end date
- end date of the program for the patient
- outcome for the patient
 Code Snippet

```
"programPatientStateReport":{
    "name": "Program Patient State Report",
    "type": "PatientProgramReport",
    "config": {
        "programName": "Malaria Program"
 }
},
```

```

```

## 17. Program Enrollments Report       
 Code Snippet

```
"programEnrollmentTemplateReport": {
    "name": "Program Enrollments",
  "type": "ProgramEnrollmentReport"
}
```

## ![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/Screen%20Shot%202016-02-12%20at%202.10.01%20PM.png?version=1&modificationDate=1475045811631&cacheVersion=1&api=v2)

## 18. Observation Canned Report

**![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/image2015-12-11%2014:38:22.png?version=1&modificationDate=1475045811915&cacheVersion=1&api=v2)**
 Code Snippet

```
"obsCannedReport": {
    "name": "Obs Canned Report",
 "type": "obsCannedReport",
 "config": {
      "patientAttributes": ["caste", "education"],
  "applyDateRangeFor": "ObsRecording",
  "addressAttributes": ["postal_code", "city_village"],
  "conceptNames": ["WEIGHT","Pulse", "Systolic"],
  "visitIndependentConcept": ["HEIGHT"], 
  "enrolledProgram" :"HIV Program" ,
  "showObsOnlyForProgramDuration": false
  }
}
```

```

```

- 
**Patient Attributes** : all the possible values from person*attribute*[type.name](http://type.name) column like {"HEIGHT","WEIGHT","Pulse"}. (REQUIRED)

- 
**Apply Date Rage For** : "<table*name&gt.<column*name>" of type date(or datetime) where table should be one of [obs,encounter,patient*identifier,patient*program,program,concept_view] PS patient*identifier & patient*program are joined only is enrolledProgram is mentioned in config (REQUIRED) Values, ObsRecording,ProgramEnrollment

- 
**Addrress Attributes** : column names of person_addrress table (REQUIRED)

- 
**concept names** : only leaf level concept names, concept set are not supported (REQUIRED)

- 
**visit independent concepts** : latest obs will be picked for them irrespective of visit. PS visits other than visit having latest obs will have no value for this field. (REQUIRED)

- 
**enrolled programPatient Attributes** : only one program name is supported (OPTIONAL  : remove entire config if not required) : all the possible values from person*attribute*[type.name](http://type.name) column like {"HEIGHT","WEIGHT","Pulse"}. (REQUIRED)

- 
**show obs only for program duration** : filter only those obs taken in given program (REQUIRED)

## 19. Drug Order Reports:

  This report  will show patients information for whom the drugs are being ordered  within the given date range.This report consists of patient information as well as  drug information.

  
 Code Snippet

```
"drugOrderReport":{
        "name": "Drug Order report",
        "type":"DrugOrder"
}
```

## 20. Program Observation Template Report

 Report for a template with all the fields and the values that were filled in a given timeframe.
 Code Snippet

```
"vitalsTemplateReport":{
       "name": "Vitals Template Report",
       "type": "programObsTemplate",
       "config": {
           "templateName": "Vitals",
           "patientAttributes": ["caste", "education"],
           "programAttributes":[ "Doctor","Enrollment","Id","Treatment_Date"],
           "programNames": ["Malaria","Tuberculosis"],
		   "addressAttributes":["city", "state_province"]
	}
}
```

**name**: Name of the Report.

        **templateName**: Observation template for which the report needs to be generated.

        **patientAttributes**: Patient attributes like caste, education to be displayed against each patient in report (Refer to image).

**        programAttributes**: Program  attributes like doctor, treatment date to be displayed against each program in report (Refer to image).

        **programNames**: List of program names for which the observations should be displayed. If not specified it will fetch observations for all programs.

       Add the location Tag &ldquo;Report location&rdquo; in OpenMRS 

       And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

       **addressAttributes**: List of address attributes to be displayed (**NOTE**: ** addressAttributes must be always in snake case Example: "city_village" instead of "cityVillage".**)

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/image2016-2-15%2012:14:58.png?version=1&modificationDate=1475045812160&cacheVersion=1&api=v2) 

## 21. Program Specific Drug Order Report

A a new Program Specific Drug Order Report is created which will only consider the active programs within a date range, for drug orders and export all data for the active programs. The programs to be displayed as well as the program attributes are configurable to be displayed.
 Code Snippet

```
 "programDrugOrder": {
        "name": "Program Drug Order Report",
        "type": "ProgramDrugOrder",
        "config": {
                "programs": [
                       "Second-line TB treatment register",
                        "Basic management unit TB register"
                ],
                "patientAttributes": [
                        "PatientCountry",
                        "TelephoneNumber"
                ],
                "programAttributes": [
                          "Registration Number",
                        "Registration Facility"
                     ]
        }
}
```

![](https://bahmni.atlassian.net/wiki/download/attachments/90472547/image2016-2-24%2011:54:58.png?version=1&modificationDate=1475045812495&cacheVersion=1&api=v2)

On this page**
