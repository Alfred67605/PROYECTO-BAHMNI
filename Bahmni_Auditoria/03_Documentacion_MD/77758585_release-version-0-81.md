---
id: "77758585"
title: "Release Version 0.81"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/77758585/release-version-0-81"
version: 3
updated: "2016-08-04T13:04:00.857Z"
author: "Shanmugam Radhakrishnan (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:09.938Z"
---

# Release Version 0.81

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/77758585)  
> **Versión del documento:** v3 (2016-08-04T13:04:00.857Z) | **Autor/Editor:** Shanmugam Radhakrishnan (Deactivated)

---

**On this page**

 
 
 

**Related Links**

[(Blog) 6 EMR Reports that improve patient care at JSS](https://medium.com/bahmni-blog/6-emr-reports-directly-improving-patient-care-at-jss-df617912c7d4#.nn3mk7aqh)

 

The reports can be generated from the screen Home > Reports. The reports usually are in the form of a count (patient count etc) or patient lists with additional details, while satisfying a certain criteria for a user specified time period (Start date, End date). The reports can be generated either using the canned reports ( which need minor configuration changes) or using custom SQL queries.

# Configuration (reports/app.json)
**app.json**

```
"config": {
   "paperSize": "A3", //The default paper size is A4. Supported sizes are A3 and A4.
   "supportedFormats": ["pdf"], //List of available formats are html, pdf, excel, csv, custom excel. When not defined, all the available formats will be listed.
}
```

# Canned reports

Bahmni packages a set of pre-defined reports that you can configure as per your requirements. Below you can find different types of canned reports; an example each, with the configuration settings and UI output. These reports provide the count once per visit unless mentioned otherwise. One can define more than report for each canned report type.

**Reference tables**

- Bahmni allows one to setup multiple type of age groups each with a name. Each report configuration can use their own age group by specifying their name in the configuration.

For example: 

The report given below shows counts based on age-groups. 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Obscount.png?version=1&modificationDate=1470315813757&cacheVersion=1&api=v2)

To display reports like this, you should insert age group configurations into the reference table "reporting_age_group" and then reference that from the report configuration.

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/table_agegroup.png?version=1&modificationDate=1470315814869&cacheVersion=1&api=v2)

**Configuration**

 "nutritionProgram": { 

    "name": "Nutrition Program - <5 years children receiving (Vitamin A)",
    "type": "obsCount",
    "config": {
    **  "ageGroupName": "Nutrition Program Vitamin A",**
      "conceptNames": ["Childhood Illness, Vitamin A Capsules Provided"]
      }

 }

You can insert entries into reporting_age_group using SQL commands. Given below a set of example INSERT SQL commands.

INSERT INTO reporting_age_group (name,report_group_name, min_years, min_days, max_years, max_days)
VALUES ('6 - 11 months', 'Nutrition Program Vitamin A',0,180,1,-1);

INSERT INTO reporting_age_group (name,report_group_name, min_years, min_days, max_years, max_days)
VALUES ('12 - 59 months', 'Nutrition Program Vitamin A',1,0,5,-1);

 

 

- For certain reports one can also set some reference range for concepts.

## 1. Obs Count Report

There are three variants of this. 

N.B:- If you are giving more than one concept name in the config, please make sure that all of them are of same data type, (Either coded concept or boolean concept). If a mix of datatypes are provided, it will always generate obs count report.

### 1.1 Obs count

**     **Use this, if you just want to count the number of observations created for a concept (other than Boolean or Coded).

       **Example**

**![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Obscountform.png?version=1&modificationDate=1470315815766&cacheVersion=1&api=v2)
**

**
**

**Configuration**

```
"nutritionProgram": {
```

```
    "name": "Nutrition Program - ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Obscount.png?version=1&modificationDate=1470315813757&cacheVersion=1&api=v2)

### 1.2. Coded Obs count Boolean

**        **To count the number of observations of a coded concept, classified by the user selection (coded answers).

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/codedObsform.png?version=1&modificationDate=1470315816866&cacheVersion=1&api=v2)

**
**

**Configuration**

```
"nutritionProgram": {
```

```
    "name": "Nutrition Program - Nutritional status of registered children",
```

```
    "type": "obsCount",
    "config": {
      "ageGroupName": "Nutritional Status For Registered Children",
      "conceptNames": ["Nutrition, Nutritional Status"],
      "locationTagNames"**:** ["Report Location"]
```

```
    }
```

}

 

- Add the location Tag &ldquo;Report location&rdquo; in openmrs 
- And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ]

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/CodedObscount.png?version=1&modificationDate=1470315817975&cacheVersion=1&api=v2) 

### 1.3 Boolean concepts count

(to be renamed to Boolean Observations Count) Use this when you want to count the observations of type boolean, classified by the user selection: Yes/No (True/False).

**Example**

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/BooleanObs.png?version=1&modificationDate=1470315819020&cacheVersion=1&api=v2)

**Configuration**

```
"nutritionProgram": {
```

```
  "name": "Nutrition Program - ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/BooleabObsCount.png?version=1&modificationDate=1470315820055&cacheVersion=1&api=v2)

## 2. Coded Obs by Coded Obs (count)

** **   Use this to count the two coded observations, both counted and displayed as a pivot table against each other.

     **Example**

**![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/CodedVsCoded.png?version=1&modificationDate=1470315821443&cacheVersion=1&api=v2)**

**
**

**Configuration**

```
  
```

```
  "safeMotherhoodProgram": {
```

```
  "name": "Safe Motherhood program - Type of delivery",
  "type": "CodedObsByCodedObs",
  "config": {
    "ageGroupName": "All Ages",
    "conceptPair": ["Delivery Note, Method of Delivery", "Delivery Note, Fetal Presentation"],
    "rowsGroupBy": ["Delivery Note, Method of Delivery"],
    "columnsGroupBy": ["Delivery Note, Fetal Presentation"]
  }
```

     }

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/codedObsByCodedObs.png?version=1&modificationDate=1470315822673&cacheVersion=1&api=v2)

## 3. Diagnosis count

Lists count of all diagnosis entered via the Bahmni system. 

**Configuration**

```
 
```

```
"nameOfReport": {
```

```
 "name": "Name of Report",
 "type": "diagnosisCount", // Mandatory. Value should be exactly diagnosisCount
 "config": {
 "dateRangeRequired": false, // Optional. Used to display reports that do not require a date range in a different section. Default true
 "applyDateRangeFor": "visitStopDate|diagnosisDate", // Optional. Default value = 'visitStopDate'. Valid only when dateRangeRequire=true
 "visitsToConsider": "open|closed|all", // Optional field. Default value = 'all'
 "ageGroupName": "age group name defined in reporting_age_group.report_group_name" //Optional
 "concept": "concept_set_name", // Mandatory. Three level concept set structure, with a root_concept, header_concepts and leaf_concepts
 "rowsGroupBy": ["gender|agegroup_name|header_concept_name|leaf_concept_name"], // Optional field but when rowsGroupBy is specified, columnsGroupBy should also be specified. Default value is ["header_concept_name", "leaf_concept_name]
```

```
  "columnsGroupBy": ["gender|agegroup_name|header_concept_name|leaf_concept_name"], //Optional field but when rowsGroupBy is specified, columnsGroupBy should also be specified. Default value is ["agegroup_name"]
```

"icd10ConceptSource": "ICD10-BD", // Optional field. Default value = 'ICD 10 - WHO'. If any implementation is using a different concept source for diagnosis coding, it can be set here.

```
 
```

"locationTagNames":["Report Location"] // Optional field. If any location tag is provided, only the encounters associated with the locations with those tags are counted. If this parameter is not set, all the encounters would be counted.

```

```

```
 }
```

```
}
```

 

Currently, if there is a concept field specified, we do not have ICD10 code in the report. It is currently not clear if ICD10 codes are required to be setup for the diagnosis report to work. Once a decision is reached, all reports will follow the convention.

The age group is supposed to be present in the reporting_age_group table in openmrs database.  

**Example**

```
Diagnosis Summary report
```

```
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

**![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/diagnosis%20count%20sample.png?version=1&modificationDate=1470315823745&cacheVersion=1&api=v2)**

**
**

**Diagnosis report without age group**

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

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/DiagnosiswithoutAgegroup.png?version=1&modificationDate=1470315824836&cacheVersion=1&api=v2)

 

**Diagnosis report with age group**

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

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/DiagnosiswithAgegroup.png?version=1&modificationDate=1470315825171&cacheVersion=1&api=v2)

## 4. Test Count

To list all tests, results and the count.

**Configuration**

```
    "name": "Malaria Control Programme - Diagnosis and Result [check for Microscopy= 'PBS for Malaria, Filaria parasite', RDT= SUM('Malaria Ags', 'Malaria Abs')]",
    "type": "TestCount"
```

**Example**

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/testcount.png?version=1&modificationDate=1470315825463&cacheVersion=1&api=v2)

## 5. Custom

        If the canned reports do not satisfy your requirements, you could create adhoc SQL files to collect the data in the required format. Find below an example configuration setting and a sql file. Using this configuration, the custom report will also be displayed along with other reports.

**Configuration**

```
    
```

```
"hospitalActivities": {
```

```
    "name": "Hospital Activities - Number of Clients Served (New and Total)",
    "type": "MRSGeneric",
    "config": {
      "sqlPath": "/var/www/bahmni_config/openmrs/reports/hmis/number_of_clients.sql"
    }
```

}

[number_of_clients.sql](#)

## 6. Observation Template Report

      Report for a template with all the fields and the values that were filled in a given timeframe.

**Configuration**

 

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

**name**: Name of the Report.

        **templateName**: Observation template for which the report needs to be generated.

        **patientAttributes**: Patient attributes like caste, education to be displayed against each patient in report (Refer to image).

        **applyDateRangeFor**: This additional parameter takes the following value **encounterCreateDate** or**encounterDate**, to apply the date range filter accordingly. The default value is **encounterDate**.

        Add the location Tag &ldquo;Report location&rdquo; in openmrs 

       And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

 

Example

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Vitals_Template_Report.png?version=1&modificationDate=1470315826519&cacheVersion=1&api=v2)

## 7. OPD/IPD Visits Count Report

      Listing the count of new/old OPD/IPD patients counts in a given time period

**Configuration**

```
    "ipdOPd": {
```

```
     "name": "OPD/IPD Visit Count",
```

```
     "type": "IpdOpdVisitCount"
```

         }

        Example: 

        ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/opd-ipd-count.png?version=1&modificationDate=1470315827543&cacheVersion=1&api=v2)

## 8. Numeric Concept Values Report

      Listing the count of numeric concepts observations based on the result values range for the given age groups

**Configuration**

```
    "HaemoglobinRange": {
```

```
       "name": "Haemoglobin Range Based Report",
```

```
       "type": "NumericConceptValuesCount",
```

```
        "config": {
            "rangeGroupName": "Haemoglobin",
            "ageGroupName": "Haemoglobin",
            "conceptNames": ["Haemoglobin"],
            "countOncePerPatient": false      
```

```
        }
```

```
    } 
```

 

        The default value of  "**countOncePerPatient**" should be false. In this case, we count an observation as many times as it has been recorded.

        The observation will be counted once within an encounter. All changes made to an observation within an encounter will be considered as one.

        If the value of **"countOncePerPatient"** is set to true, then we only count the latest value of the observation for the given date range.

       

**       Example: **

               ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/numeric-concpet-values-report.png?version=1&modificationDate=1470315828340&cacheVersion=1&api=v2)

## 9. Obs Count By Concept Class Report

      Listing the count of observations based on the concept class for the given date range

**Configuration**

```
    "radiologyCount": {
```

```
       "name": "Radiology(X-Ray) Count",
```

```
       "type": "ObsCountByConceptClass",
```

```
        "config": {
            "conceptClassNames": ["Radiology"]
        }
```

```
     } 
```

        Example: 

                ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/obsCountByConceptClass.png?version=1&modificationDate=1470315829631&cacheVersion=1&api=v2) 

## 10. Obs Value Count Report

      Listing the count of observations for each value for given concept names

**Configuration**

```
     "ObsValueCount": {
```

```
       "name": "Obs Value Counts for Albumin, MCH, Surgery Date and Posture(blood pressure)",
```

```
       "type": "ObsValueCount",
```

```
        "config": {
            "conceptNames": ["Albumin","MCH","Date of Surgery","Posture"]
        } 
```

           }

        Example: 

       ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/obsValueCount.png?version=1&modificationDate=1470315830714&cacheVersion=1&api=v2)

## 11. Patients With Lab Test Results Report

      Listing the patients with lab test results along with test outcome, for a given list of lab tests and based on given test outcome (abnormal and/or normal)

**Configuration**

```
    "patientsWithLabTest": {
```

```
       "name": "Patients with labtest results for HIV ELISA, Albumin and MCH",
```

```
       "type": "PatientsWithLabtestResults",
```

```
        "config": {
            "conceptNames": ["HIV ELISA (Blood)","Albumin","MCH"]
```

```
            "testOutcome": ["abnormal","normal"]
        }
```

```
    } 
```
        For Example:![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/patients_with_labtest_results.png?version=1&modificationDate=1470315831594&cacheVersion=1&api=v2)
 

## 12. IPD Patients Report

In this report, we generate a list of IPD patients along with a number of fields including patient details, confirmed diagnosis (comma separated if there is more than one), observation values (comma separated if there is more than one) for configurable list of concepts, configurable list of patient attributes and configurable list of address attributes.

**Configuration**

```
"ipdPatients": {
   "name": "IPD Patients Report",
   "type": "ipdPatients",
   "config": {
              "addressAttributes": ["address1", "city_village"],
              "patientAttributes": ["caste", "education"],
              "conceptNames": ["Height", "Weight"],
```

```
              "locationTagNames"**:** ["Report Location"],
```

```
              "filterBy": "Date of Discharge"
    }
}
```

 

**Note: addressAttributes must be always in snake case Example: "city_village" instead of "cityVillage".**

The date range filtering criteria can either be applied on "Date of Admission" or "Date of Discharge". We use "filterBy" parameter to specify the user criteria and distinguish between the two scenarios. If not configured, the "filterBy" parameter will be defaulted to "Date of Admission".

- Add the location Tag &ldquo;Report location&rdquo; in openmrs 
- And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/IPD_Patients_Report.png?version=1&modificationDate=1470315832648&cacheVersion=1&api=v2)

## 13. Visits Aggregate Count Report

In this report, we will generate the count of admission and discharges happened during the given date range, for each visit type.

**Configuration**

```
"visitAggregateCount": {
    "name": "Visit Aggregate Count Report",
    "type": "VisitAggregateCount",
    "config": {
               "type": "VisitAggregateCountReport",
```

```
               "locationTagNames"**:** ["Report Location"],
```

```
               "visitTypes": "'IPD','OPD','EMERGENCY'"
    }
}
```

 

- Add the location Tag &ldquo;Report location&rdquo; in openmrs 
- And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/visit_aggregate_count.png?version=1&modificationDate=1470315833863&cacheVersion=1&api=v2)

 

## 14. Patient Program State Count Report

In this report, we will generate the count of patients who are admitted to different states of a program.

 

Note: If a program has no states it will open up a blank page. The parameter "programName" is a program which is already configured earlier in OpenMRS.

**Configuration**

```
"patientProgram": {
    "name": "Patient Program State Count Report",
    "type": "programStateCount",
    "config": {
               "programName": "Patient Overall Status"
    }
}
```

 

Example: We have created a Patient Overall Status program and added three states 'Attending Clinic', 'Transferred OutOf' and 'Dead' to it. It shows the number of patients that have entered a state

within a given date range "From 2015-08-01 to 2015-08-13" .

If the patient is currently enrolled in a different state, still the count should be taken for the original state if it is in the date range and has not been deleted.

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Screen%20Shot%202015-08-07%20at%204.51.36%20pm.png?version=1&modificationDate=1470315834726&cacheVersion=1&api=v2)

 

## 15. Patient Program State Transition Count Report

In this report, we will generate the count of patients who are under going a state transition of a program. 

Note: If a program has no states it will open up a blank page. The parameter "programName" is a program which is already configured earlier in OpenMRS.

**Configuration**

```
"malariaProgram": {
    "name":"Malaria Program State Transition Report",
    "type":"programStateTransitionReport",
    "config":{
        "programName":"Malaria Program"
  }
}
```

```
 
```

Example: We have created a Malaria Program and added three states 'First State', 'Second State' and 'Third State' to it. It shows the number of patients that have done a state transition

from 'First State' to 'Second State' and from 'Second State' to 'Third State' within a given date range "From 2015-08-02 to 2015-08-06" .

 

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Screen%20Shot%202015-08-13%20at%2011.40.21%20am.png?version=1&modificationDate=1470315835601&cacheVersion=1&api=v2) 

## 16. Patient Data Report

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

**Configuration**

"patientInformation": {
        "name": "Patient Information",
        "type": "PatientReport"
}

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Screen%20Shot%202015-08-10%20at%2011.00.49%20am.png?version=1&modificationDate=1470315836525&cacheVersion=1&api=v2)

 

## 17. Program Patient State Report

 

### Patient details are generated with the following fields

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

 

**Configuration**

```
"programPatientStateReport":{
    "name": "Program Patient State Report",
    "type": "PatientProgramReport",
    "config": {
        "programName": "Malaria Program"
 }
},
```

## 18. Program Enrollments Canned Report

 

 

 

                                                ![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/Screen%20Shot%202016-02-12%20at%202.10.01%20PM.png?version=1&modificationDate=1470315837826&cacheVersion=1&api=v2)

**Configurations**

```
"programEnrollmentTemplateReport": {
    "name": "Program Enrollments",
  "type": "ProgramEnrollmentReport"
}
```

## 19. Observation Canned Report

**![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/image2015-12-11%2014:38:22.png?version=1&modificationDate=1470315838116&cacheVersion=1&api=v2)**

**Configurations**

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
**enrolled program** : only one program name is supported (OPTIONAL  : remove entire config if not required)

- 
**show obs only for program duration** : filter only those obs taken in given program (REQUIRED)

## 20. Drug Order Reports:

  This report  will show patients information for whom the drugs are being ordered  within the given date range.This report consists of patient information as well as  drug information.

   **Configuration:**

```
"drugOrderReport":{
        "name": "Drug Order report",
        "type":"DrugOrder"
}
```

## 21. Program Observation Template Reports

 Report for a template with all the fields and the values that were filled in a given timeframe.

**Configuration**

 

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

       Add the location Tag &ldquo;Report location&rdquo; in openmrs 

       And specify the location tag in config   ex. "locationTagNames":   ["Report Location&rdquo; ],

       **addressAttributes**: List of address attributes to be displayed (**NOTE**: ** addressAttributes must be always in snake case Example: "city_village" instead of "cityVillage".**)

 

Example

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/image2016-2-15%2012:14:58.png?version=1&modificationDate=1470315839156&cacheVersion=1&api=v2) 

## 22. Program Specific Drug Order Report

A a new Program Specific Drug Order Report is created which will only consider the active programs within a date range, for drug orders and export all data for the active programs. The programs to be displayed as well as the program attributes are configurable to be displayed.

Please refer to the code snippet below for the available configurations:

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

Example:

![](https://bahmni.atlassian.net/wiki/download/attachments/77758585/image2016-2-24%2011:54:58.png?version=1&modificationDate=1470315839450&cacheVersion=1&api=v2)

 

# **Embed the Report generated in an existing workbook template with macros**

```
 
```

Bahmni allows one to embed the data exported by the report in an existing workbook template which can contains formulae to create pivot table on the generated data. Workbook template has to be in .xls format.

The reports can be generated from the screen Home > Reports. To generate the report with formula from the workbook template applied on data, select format as 'CUSTOM EXCEL' and upload the required excel formula template and click on 'Run Report'. A report would be generated with actual data on sheet named 'Report' and data generated by formula in the template in 'Sheet1'. Please refer [below](https://bahmni.atlassian.net/wiki/display/BAH/Reports#Reports-ConfigurethemacroTemplatexlsfileinbahmni_configtoavoideverytimeuploadingfilewhilegeneratingreport) to configure the Macro file to avoid uploading it every time for a report.

A excel template can be found [here](#) which contains a macro. Formulae has to be added in 'Sheet1' of the above excel template and can be uploaded to generate a report. On opening the generated excel report, 

macro that is present in the above excel template would apply the formula over the actual data. So 'Enable macros' should be selected on opening the generated excel report.

Example Formula: 
=SUM(Report!G9, Report!G10)   - 'Report' sheet is the sheet which would contain the raw data without applying the formulae.

**Note: If formula is added to any other template and used for generation of report, it wont work. Please use only the above template linked. **

## Configure the macroTemplate xls file in bahmni_config to avoid every time uploading file while generating report 

Steps to Configure :

- Copy the xls(Microsoft 1997-2000) file with macro formula to bahmni_config
- 
Configure the xls file path in bahmni_config as below in report.json

```
"diabetes":{
        "name": "Diabetes",
        "type": "obsCount",
        "config": {
            "ageGroupName": "All Ages",
            "conceptNames": ["Diabetes, Intake"],
            "visitTypes": ["OPD","IPD"],
            "macroTemplatePath" : "/var/www/bahmni_config/openmrs/apps/reports/macroTemplates/Diabetes.xls"
        }
    },
```
