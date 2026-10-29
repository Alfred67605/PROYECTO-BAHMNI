---
id: "18415786"
title: "Needs Assessment"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/18415786/needs-assessment"
version: 29
updated: "2015-05-12T12:56:53.550Z"
author: "Pankaj Kanchankar"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:02:57.490Z"
---

# Needs Assessment

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/18415786)  
> **Versión del documento:** v29 (2015-05-12T12:56:53.550Z) | **Autor/Editor:** Pankaj Kanchankar

---

## About the exercise

- Schedule
Topic of each session, duration
- People from the client team needed for different parts
- People from Bahmni team participating
- Dates

- Communication Channel (if done remotely)
Tools

- Materials shared before the exercise
Schedule
- Prior understanding
- Questionnaire

## Current Situation

- Client's organisation profile and structure
- Services provided by the client and the health facilities from which these services are provided
Types of service (out-patient, in-patient, surgery, lab, community care etc.)
- Number and types of providers, patients (per day/week)
- Nature of the facility (always open, few days a week, on need basis)

- Current information systems in place
Technical details of the system
- Departments in which it is used
- Issues with current system
- Ability to Export data in .CSV or .XLS format

- Infrastructure
LAN
- Power backup for servers
- Internet connectivity

## Requirements

- Primary objective of the system
Drivers (e.g. data entry, point of care use, reporting, patient care outcome improvements)

- As is process understanding
- 
Department (Service/Location) based breakup of requirements

Functions that need to be supported
- Type of users and workload details
- Internet connectivity at these locations (if it is outside the hospital)
- Any paper forms and files used in as-is process
- List of current reports (Electronic and Paper based). Reports needed by each department. Reports sent to the government.
- Printouts required in each department

- Organisational requirements

Reports sent to government

- Typical requirements that may get missed
How a patient is identified
- PACS integration
- Detailed understanding of the processes that would be supported by "modules not implemented anywhere in Bahmni"
- Do they perform any surveys? Is it expected that Bahmni would be a solution for that too?
- Is money taken only at billing? Or it is at multiple places?

- Data migration requirements (import existing data)
Would the required [reference data and meta-data](/wiki/spaces/BAH/pages/16908300/Bahmni+Configurations) be provided by the client, or is available in the old system, or would have to be created from scratch?

- High level milestones or releases in which new system could be rolled out
- Artefacts to get
image of paper forms
- sample of database extract

## Solution

- Mapping requirements to Bahmni's features
- Infrastructure assessment
- Deciding server configuration
- Projection of number of client devices required
- Identification of gaps (between requirements and Bahmni features). Things that need to be developed in product.

## Engagement

- IT/Data people availability who have to administer or implement Bahmni. Familiarity with the following:
Network
- Linux, Windows
- Excel (macros?)
- SQL

- Engagement model (TW, Implementer and Client)

## End Deliverables Expected

- Software (modules in Bahmni)
- Implementation of Bahmni
Individual items that would be configured from [this](/wiki/spaces/BAH/pages/16908300/Bahmni+Configurations) checklist.

- Integration with other systems
- Bahmni deployment
- Data migration from existing systems
- Training to people
System administrator
- End user
- Local implementation team

## Tips

- If something seems unrealistic then ask question about whether it is aspirational?
- When deciding the release size, the trade-off is between **travel costs** and **size of release (also organisation change as a result)**
- Keep updating your plan as needed, this is just a guide
- To find out about the skill levels, just asking directly is the best way.
- Try ice-breakers if you feel awkward starting off. Introductions generally are enough though
- Figure out when to give a demo during this exercise

(If you find that there are things missing in this list then please add to it)
