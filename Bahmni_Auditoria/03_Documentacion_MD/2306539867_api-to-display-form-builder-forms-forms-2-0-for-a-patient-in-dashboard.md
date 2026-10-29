---
id: "2306539867"
title: "API to display form builder forms(forms 2.0) for a patient in dashboard"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306539867/api-to-display-form-builder-forms-forms-2-0-for-a-patient-in-dashboard"
version: 2
updated: "2021-04-05T04:54:20.831Z"
author: "Buvaneswari Arun (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:50.844Z"
---

# API to display form builder forms(forms 2.0) for a patient in dashboard

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2306539867)  
> **Versión del documento:** v2 (2021-04-05T04:54:20.831Z) | **Autor/Editor:** Buvaneswari Arun (Deactivated)

---

Feature available from Bahmni-V0.93

Existing form display control doesn't show the form builder forms because the existing API considers only the 'All Observation Template' forms. So a new API is introduced, which fetches form builder form details for a patient.

 **Request:**

```
https:///openmrs/ws/rest/v1/bahmnicore/patient/
/forms?formType=v1&numberOfVisits=2&visitUuid=&patientProgramUuid=
```

**Response:**

```
[
    {
        "formType": "v2",
        "formName": "groovy_test",
        "formVersion": 1,
        "visitUuid": "8a34eb02-b5d2-485f-b711-f2898ac86e93",
        "visitStartDateTime": 1536733420000,
        "encounterUuid": "b3f7a082-c45c-4679-860d-80d48de639a2",
        "encounterDateTime": 1539586861000,
        "providers": [
            {
                "providerName": "Super Man",
                "uuid": "c1c21e11-3f10-11e4-adec-0800271c1b75"
            }
        ]
    },
    ]
```

**Criteria:**

- 
patient_uuid is mandatory

- 
formType is optional with possible values are v1 and v2. By default it assumes v2. v1 means forms 1.0 i.e all observation template forms(it is not implemented) and v2 means form builder forms

- 
numberOfVisits is optional

- 
visitUuid is optional, numberOfVisits won’t apply with this parameter

- 
patientProgramUuid is optional, numberOfVisits won’t apply with this parameter. It works along with visitUuid if provided

Opemrs talk: [https://talk.openmrs.org/t/api-to-fetch-form-builder-forms-for-a-patient/20564](https://talk.openmrs.org/t/api-to-fetch-form-builder-forms-for-a-patient/20564)
