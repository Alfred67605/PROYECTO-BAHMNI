---
id: "3546251350"
title: "Print Medications"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3546251350/print-medications"
version: 4
updated: "2024-07-29T12:08:49.771Z"
author: "Parvathy Babu"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:19.557Z"
---

# Print Medications

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3546251350)  
> **Versión del documento:** v4 (2024-07-29T12:08:49.771Z) | **Autor/Editor:** Parvathy Babu

---

## Purpose and Benefits

The "print medications" feature allows users to generate a physical copy of their medication list, which includes details such as the names of the medications, dosages, and schedules. This is particularly useful for doctor appointments, hospital visits, or for keeping an accessible record at home. By having a printed list, patients can ensure accurate communication with healthcare providers and manage their medication regimen more effectively.

The prescription can be printed for OPD patient in the cases like :

- 
When the drugs are dispensed, the print out of the prescription needs to be taken and stored in the patient file for 2 years to comply with govt regulations

- 
When OPD drugs could not be dispensed, the print out has to be handed over to the patient so that they can procure them from a different pharmacy.

In case of IPD patients, the drugs are procured from the "mini stores" inside the hospital and does not need to be printed.

To print medications, select the checkboxes corresponding to the medications you want to print. The print button will only be enabled if at least one medication is selected. By default, all medications will be selected. If you don’t want all medications to be selected, you need to configure it accordingly (see the [config section](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/edit-v2/3546251350#Configure-Medication-Print-Feature%3A) for details).
![](https://bahmni.atlassian.net/wiki/download/attachments/3546251350/image-20240529-000058.png?version=1&modificationDate=1716940863887&cacheVersion=1&api=v2)
Sample PDF file generated from the medication page with the list of selected medications,
![](https://bahmni.atlassian.net/wiki/download/attachments/3546251350/image-20240529-002033.png?version=1&modificationDate=1716942037761&cacheVersion=1&api=v2)
### Configure Medication Print Feature:

Below configuration required to be added to `clinical/app.json` in the config section to enable print medication functionality.

```
"printPrescriptionFeature": {
     "printDiagnosis":{
          "order": "PRIMARY",
          "certainity": "CONFIRMED"
     },
     "observationsConcepts": ["WEIGHT"],
     "providerAttributesForPrint": ["Provider Full Name","Provider Title","Medical Licence Number"],
     "templateUrl": "/bahmni_config/openmrs/apps/clinical/clinicalPrints/medicationPrint.html",
     "title": "Childern's Hospital of Ethiopia",
     "header": "PRESCRIPTION",
     "logo": "/bahmni_config/openmrs/apps/clinical/clinicalPrints/images/Bahmni_logo_primary.png",
     "autoSelectNotAllowed": false
}
```

**Config Descriptions:**

| **Field Name** | **Description** | **Optional** |
| --- | --- | --- |
| printDiagnosis | This is type of diagnosis we want to print in the prescription. For eg: if we want to show the diagnosis which are primary and confirmed, we need to give the `order` as `PRIMARY` and `certainity` as `CONFIRMED` | Yes |
| observationsConcepts | This is a list of concepts. This is to fetch the latest observation captured for the patients for the given concepts which can then be consumed in the custom template to show values like patient's height, weight, etc.. | Yes |
| templateUrl | This field is required for the custom template to be used for printing the prescriptions. If we want a default Bahmni's template and not the custom one, we need to remove this config | Yes |
| autoSelectNotAllowed | This is a boolean value and can be used to auto select all the prescriptions by default on the load of the page and vice versa before printing. If we set it as `true` , then we need to select the check boxes manually. If we set it as `false` or omit this config, then all the checkboxes of the medications are selected by default. | Yes |

**Note:** If we want to show these custom options like diagnosis, observations, etc. in the pdf, then we need to give a custom template that’ll include html elements with appropriate css to show these data. One can refer this sample html (medicationPrint.html) below

**Sample medicationPrint.html :**

```

    @media print {
        /* Hide the header */
        @page { margin-top: 20px; }
        header, .header {
            display: none !important;
        }

        /* Hide the footer */
        @page { margin-bottom: 20px; }
        footer, .footer {
            display: none !important;
        }
    }

    
        
            
            
# {{printParams.title}}

            
        
        
             {{printParams.header}}
        
        
    
    
    
        
| Name of the Patient: {{patient.name}} ({{patient.identifier}}) | Date : {{additionalInfo.currentDate | bahmniDate}} |  |
| --- | --- | --- |
| Age: {{patient.birthdate | dateToAge:visit.dateStarted}} | Sex: {{patient.genderText.substring(6, patient.genderText.length - 7)}} | Weight: {{observationsEntries[0].value}} {{observationsEntries[0].concept.units}} |
| Address: {{patient.address.address5}} | Kebele: {{patient.address.address4}} | Woreda: {{patient.address.address3}} |
| Zone: {{patient.address.address2}} | Region: {{patient.address.address1}} | Country: {{patient.address.country}} |
| Tel no: {{patient.mobilePhone.value}} | Visit Type: {{additionalInfo.visitType}} |  |
| Diagnosis (ICD-10 code): {{ diagnosesCodes }} | Allergies: {{ allergies.length > 0 ? allergies : "No allergies recorded for this patient"}} |  |

    
    
    
        0">
            
## Treatment

            
                
| {{'MEDICATION_DRUG_NAME_TITLE'|translate}} | {{'MEDICATION_DOSAGE_INFORMATION_LABEL'|translate}} | {{'MEDICATION_LABEL_START_DATE'|translate}} | {{'PRINT_MEDICATION_TOTAL_QUANTITY_TITLE'|translate}} |
| --- | --- | --- | --- |
|  | stopped {{::drugOrder.effectiveStopDate | bahmniDate}} |  |  |
|  | **{{'TREATMENT_NOTES'|translate}}: **{{drugOrder.additionalInstructions}} |  |  |

                
                    
                        
## Prescriber :

                        
| Full Name: {{value.drugOrders[0].provider.attributes[0].value}} |
| --- |
| Title: {{value.drugOrders[0].provider.attributes[1].value}} |
| Medical Licence Number: {{value.drugOrders[0].provider.attributes[2].value}} |

                    
                    
                        
## Dispenser :

                        
| Full Name: {{dispenserInfo[0].value}} |
| --- |
| Title: {{dispenserInfo[1].value}} |
| Medical Licence Number: {{dispenserInfo[2].value}} |

                    
                
            
                
    

```
