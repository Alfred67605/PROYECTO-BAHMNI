---
id: "37945573"
title: "Display Controls"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945573/display-controls"
version: 155
updated: "2020-10-14T16:00:44.668Z"
author: "Ramashish Joshi"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:29.888Z"
---

# Display Controls

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/37945573)  
> **Versión del documento:** v155 (2020-10-14T16:00:44.668Z) | **Autor/Editor:** Ramashish Joshi

---

# Purpose

Display controls are widgets that can be added to various pages to better configure them. They can be customized to show specific information and will automatically align to the context of the screen. For example, a Treatment Display Control on the Patient Dashboard may show all treatments for a patient, but will limit treatments for a single visit when used on the Visit page. 

You can find information on how to show/hide display controls on the dashboard [here](/wiki/spaces/BAH/pages/115973098/Show+Hide+Display+Controls+based+on+data).

[Refer this](/wiki/spaces/BAH/pages/72581122/Configure+Display+Controls+in+Print)to configure display controls in print

# List of Display Controls

Below is a list of Bahmni Display Controls
**Bahmni Display Controls**

### [Clinical Observation Controls](/wiki/spaces/BAH/pages/114186103/Clinical+Observation+Controls)

- [Diagnosis Control](/wiki/spaces/BAH/pages/102891583/Diagnosis+Control) — It is used for the clinician to easily view a list of all diagnoses (with in configured number of visits) that the patient is diagnosed.
- [Disease Template Control](/wiki/spaces/BAH/pages/114186506/Disease+Template+Control) — Disease Template Control can be configured to display all the observation values captured against the particular disease like Cancer, Diabetes or TB.
- [Forms Display Control](/wiki/spaces/BAH/pages/98402388/Forms+Display+Control) — It is used to list the Forms or Observation Templates that have been created within the configured number visits with a provision to view details and edit from/template from this control.
[New Forms React Display Control](/wiki/spaces/BAH/pages/3505586199/New+Forms+React+Display+Control)
- [Print Forms](/wiki/spaces/BAH/pages/3562766355/Print+Forms)

- [Observation Control](/wiki/spaces/BAH/pages/114188767/Observation+Control) — Observation Control can be configured to display all the observation values captured against the configured concepts (and within the configured number of visits). This control also has a provision to add initial and latest observation value (across all visits). The control can display values in a grid (tabular format, one column for each visit) or in section format (one for each visit).
- [Obs To Obs FlowSheet](/wiki/spaces/BAH/pages/98402359/Obs+To+Obs+FlowSheet) — Obs To Obs Flowsheet is configured to view the observation data in tabular format. It will display the observation value vs multiple observation values. There is a provision to configure editing observations from this control.

### [Custom Controls](/wiki/spaces/BAH/pages/93716500/Custom+Controls)

Bahmni allows implementers to create their own Custom Controls. The examples include:

- [Appointments Display Control](/wiki/spaces/BAH/pages/700088324/Appointments+Display+Control)
- [Birth Certificate](/wiki/spaces/BAH/pages/114217801/Birth+Certificate) — It can be used to create a control to add a Birth Certificate
- [Patient Monitoring Tool](/wiki/spaces/BAH/pages/99647502/Patient+Monitoring+Tool) — It gives a visual representation of the planned treatment schedule for the patient, the patient's current position in the treatment schedule and missed or erroneously captured data.

### [In-Patient Department (IPD) Controls](/wiki/spaces/BAH/pages/114204226/In-Patient+Department+IPD+Controls)

- [Admission Details Control](/wiki/spaces/BAH/pages/114204313/Admission+Details+Control) — Admission Details Control is used to list the details of the patient like Bed and Ward number where the patient got assigned, Admission Date and Notes, Discharge Date and Notes details.
- [Disposition Control](/wiki/spaces/BAH/pages/114204754/Disposition+Control) — Disposition Control is used to list the actions/instructions given to that patient by the doctors. The instructions are like "Admit to the hospital", "Discharge from the hospital", "Transfer to a different ward/bed”..etc

### [Lab and Radiology Controls](/wiki/spaces/BAH/pages/114206048/Lab+and+Radiology+Controls)

- [Bacteriology Results Control](/wiki/spaces/BAH/pages/114206168/Bacteriology+Results+Control) — Bacteriology results control is used to list the bacteriology samples and the corresponding results captured against those samples (for a particular patient)
- [Lab Order Control](/wiki/spaces/BAH/pages/114206305/Lab+Order+Control) — This Control is used to list all the lab orders and the results captured against those orders for a particular patient.
- [Order Fulfillment Control](/wiki/spaces/BAH/pages/114206500/Order+Fulfillment+Control) — It displays all the orders (for configured number of visits) and their corresponding fulfillment details for an orderType configured.
- [PACS Orders Control](/wiki/spaces/BAH/pages/114206820/PACS+Orders+Control) — This Control is used to list all the Pacs Orders and the corresponding results for a particular patient.
- [Radiology Control](/wiki/spaces/BAH/pages/114207086/Radiology+Control) — Radiology Control is used to list the Radiology Orders given to the patient for that particular visit.

### [Medication Controls](/wiki/spaces/BAH/pages/114207149/Medication+Controls)

- [Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control) — The drugogram or the chronic treatment chart is a display that shows the current drug regimen of a patient enrolled into a treatment which involves a varying set of drugs over the course of the treatment.
- [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control) — This control can be configured to view the drug order details (prescription details) for a particular patient.
- [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients)
- [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control) — Treatment/Drug Details Control can be configured to display all the the prescription or drug order details (for configured number of visits).
- [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control) — Treatment/Drug Order Control can be configured to display all the the prescription or drug order details (for configured number of visits) for particular patient.

### [Miscellaneous Controls](/wiki/spaces/BAH/pages/114218923/Miscellaneous+Controls)

- [Navigation Links Control](/wiki/spaces/BAH/pages/114219028/Navigation+Links+Control) — Navigation Links Control can be configured to list the links of required pages. Clicking on the link will help navigate to that particular page. One can use the default links that are provided or can also configure custom links.

### [Patient Controls](/wiki/spaces/BAH/pages/114227069/Patient+Controls)

- [Patient Context Display Control](/wiki/spaces/BAH/pages/114227194/Patient+Context+Display+Control) — It helps the clinician to easily view patient information on all the pages in clinical app. It can also be configured to display core patient data like name, identifier, gender, age by default.
- [Patient Profile Control](/wiki/spaces/BAH/pages/114227474/Patient+Profile+Control) — Patient Profile Control can be configured to show all the patient related information such as name, gender, date of birth, identifier, address, relationships, patient or person attributes etc.
- [Visit Control](/wiki/spaces/BAH/pages/100139014/Visit+Control) — It displays the visit information of a patient along with start date, end date and the type of the visit. The active/current visit is marked with an asterisk (*).

### [Show/Hide Display Controls based on data](/wiki/spaces/BAH/pages/115973098/Show+Hide+Display+Controls+based+on+data)

### [Tracking Controls](/wiki/spaces/BAH/pages/114227604/Tracking+Controls)

- [Flowsheet Control](/wiki/spaces/BAH/pages/114227756/Flowsheet+Control) — It is a tabular control for showing Observations, Lab Tests and Drugs/Prescriptions (for configured concepts) across time, grouped by Visit or Encounter for a particular patient.
- [Graph Control](/wiki/spaces/BAH/pages/114228167/Graph+Control) — Observation Graph Control is configured to display the observations values as a graph against observation date time, age or any other concept for configured number of visits.
- [Programs Display Control](/wiki/spaces/BAH/pages/100139061/Programs+Display+Control) — A patient can be enrolled into one or more programs such as TB, Malaria, HIV, ANC, etc. The programs display control will show all the list of active and inactive programs for a patient.This control cannot be configured on Visit dashboard.

On this Page
