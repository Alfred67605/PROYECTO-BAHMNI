---
id: "6488066"
title: "Bahmni REST API & FHIR APIs"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/6488066/bahmni-rest-api-fhir-apis"
version: 27
updated: "2023-08-25T04:30:51.691Z"
author: "Siva Reddy Pathuri (Deactivated)"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:35.038Z"
---

# Bahmni REST API & FHIR APIs

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/6488066)  
> **Versión del documento:** v27 (2023-08-25T04:30:51.691Z) | **Autor/Editor:** Siva Reddy Pathuri (Deactivated)

---

FHIR Overview Video
 
If you are new to FHIR and want to understand what is FHIR, profiles / implementation guides, FHIR Terminology Server, etc. watch this excellent 18min overview YouTube video:

    

 
Bahmni (and OpenMRS) REST API swagger can be accessed on a running Bahmni instance on this url: 

**`https://:/openmrs/module/webservices/rest/apiDocs.htm`**

For instance on the Bahmni Demo server, the URL will be: [REST API (Demo Server)](https://demo.mybahmni.org/openmrs/module/webservices/rest/apiDocs.htm). 

- Login to OpenMRS as Admin.
- Click on Administration tab.
- Click on "API Documentation" link in the "**REST Web Services**" group. 

 
To see sample code on how to call Bahmni REST APIs, you can refer to the Bahmni Performance Tests written using Gatling (Scala DSL) here: [https://github.com/Bahmni/performance-test/blob/old-framework/src/test/scala/org/bahmni/gatling/HttpRequests.scala](https://github.com/Bahmni/performance-test/blob/old-framework/src/test/scala/org/bahmni/gatling/HttpRequests.scala)

FHIR Api endpoints
 
To see the FHIR endpoints exposed by Bahmni, see the underlying OpenMRS documentation. With Bahmni LIte v1.0, these endpoints are also available, since the latest version of Bahmni ships with OpenMRS FHIR module that exposes these endpoints.

- See FHIR endpoint documentation here:
[https://fhir.openmrs.org](https://fhir.openmrs.org/StructureDefinition-omrs-patient.html) (e.g. Patient Resource here: [https://fhir.openmrs.org/Patient-example-openmrs-Patient.json.html](https://fhir.openmrs.org/Patient-example-openmrs-Patient.json.html))
- [https://wiki.openmrs.org/display/projects/FHIR+Support+in+1.3.0](https://wiki.openmrs.org/display/projects/FHIR+Support+in+1.3.0)

- 
You can try these URLs out on the [Bahmni Lite environments](/wiki/spaces/BAH/pages/3037757441/Bahmni+Lite+Environments). For instance this command on terminal will work:

```
# where last paremeter is UUID of the patient in Bahmni/OpenMRS
curl -u"superman:Admin123" -H "Content-Type: application/json" https://dev.lite.mybahmni.in/openmrs/ws/fhir2/R4/Patient/1457e050-06aa-4b9e-99fc-342d79e09b05
```

- 
 If you want to write a client code (in Java) to call Bahmni/OpenMRS FHIR endpoints, you can use the [HAPI FHIR](https://hapifhir.io/hapi-fhir/docs/client/) library. See sample code written by [Siva Reddy Pathuri (Deactivated)](https://bahmni.atlassian.net/wiki/people/5e004f695361330daae96d9c?ref=confluence) here: [https://github.com/sivareddyp/fhir-client-demo/blob/main/src/main/java/org/bahmni/fhirclientdemo/service/FhirResourceService.java](https://github.com/sivareddyp/fhir-client-demo/blob/main/src/main/java/org/bahmni/fhirclientdemo/service/FhirResourceService.java)

 Some Old Notes on Bahmn API Design (archive)...

Some ideas based on how our API would look like if it is designed them from its user&rsquo;s point of view and not from how the data is organised in the system. I haven&rsquo;t thought through everything in minutest details yet, but following is the outline.
 
**Resources**
Some of the following are sub-resources, i.e. they can be contained inside another resource. For example - treatments can be accessed directly or they get embedded inside an encounter.

Patient Profiles
Visits
This doesn't contain the encounters. It would be good to have references to encounters inside it. Is OpenMRS resource sufficient for this?
Clinical Encounters
It should de-normalize the visit dates on the encounter. Probably an href to the visit.
Diagnoses
Lab Investigations
It contains lab order, sample accession and lab result. If we find this resource to be too big then we would break it down into further sub-resources. Right now we do not know how exactly it would pan out when we do the OpenELIS replace work.
Procedures
Observations
It is only a subset of OpenMRS observations excluding procedures, lab-results, or anything which its own resource. This filtering should be done by the server endpoint. The API should also handle different classes differently making it easier for the consumer to consume it. The observation classes which Bahmni supports right now are "Qualified with Duration", "Qualified with Normality", "Multiple Coded" (better names are welcome).
Treatments
Drug order and treatment related observations. Also supports a special operation called "active".
Clinical Images
A sub-resource and not an attribute because of performance reasons.
Enrolled Programs
We would be using programs for chronic patients. Contains href for encounters inside it.

**Meta Resources** (aka reference data)
Programs
Visit Types
Patient Attributes
Lab Tests
Lab Test Panels
Lab Departments
Diagnosis Types
Reference Terms
Observation Type Groups
This exposes different aggregate observation classes (see observations resource) differently, making it easier for the consumer. I haven't been able to find any use case for which a concept would have to be directly exposed via an api.
Procedure Types
Locations
Address Elements
 
**Ways to break up patient data**
Scope of resources
Visit, Date, Encounter, All
For (Keywords that Bahmni could support. This would help in reducing unnecessary calls to find what their id is. The current list is below.)
LastVisit
LastVisitFoundIn
CurrentEncounter
CurrentVisit
All (default)
Initial (In Visit)
Most Recent (In Visit)
 
**Internal or technical resources** (haven&rsquo;t given much thought to these yet)
SqlSearch
Scheduled Tasks
 
**Design**
- The concepts which are always packaged with Bahmni should be referred by their name not by UUID. For example - consultation note, radiology notes (when doctor makes observation on an image).
- There is no need to expose encounter types and order types. These should just be the internals for Bahmni.
- Use hyperlinks when referencing meta resources but not sub-resources. The performance issues arising of loading too much data can be taken care of by loading the sub-resources directly and using the scope keywords.
- User transaction should result in single save call to the server unless there is a performance reasons to not do so.
- Ideally any save operation should not require the client to make read calls (for getting id etc.) for populating the data in the request.

**Examples**
     /patient-profiles/<patient-id>
     /diagnoses?patient-id=<patient-id>
     /observations?observation-type=vitals
     /treatments?patient-id=<patient-id>&for=last-visit
     /encounters?for=current
     /encounters?for=current-visit
     /visits
 
**Links**
[http://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf](http://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf)

**Notes from meeting
How to handle concept-answers vs. answers coming from different concept set.** Concept answers can be returned along with observation type group resource. When the answers in a different concept-set we probably just need to perform a search on it, need not expose the complete list via the api.

**Define the scoping parameters for various resources**.

**Is there a case for LastEncFound keyword? (suggestion made to call it most recent or just recent in the context of BMI)** MostRecent[Observation].

How would we handle validation of test results?

What about bed management? Location?

Is this API sufficient for reports to get all the data it needs?

The example above doesn't use patient-id everywhere it should

Should observation type groups be called form?
