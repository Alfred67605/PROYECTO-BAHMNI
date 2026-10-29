---
id: "97812538"
title: "Groovy Scripts"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/97812538/groovy-scripts"
version: 50
updated: "2023-03-06T06:05:31.996Z"
author: "Arjun G (Deactivated)"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:23.534Z"
---

# Groovy Scripts

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/97812538)  
> **Versión del documento:** v50 (2023-03-06T06:05:31.996Z) | **Autor/Editor:** Arjun G (Deactivated)

---

## Context

Groovy Scripts are used as extension scripts that can be executed when a particular event is triggered.

Some of the events can be

- Displaying Display controls
- Observation Save 

### What should be configured for groovy scripts?

For any groovy script the following are configurable

- What is the script to execute on trigger of an event
- What should be implemented in the script

## Types of Groovy Scripts

Different types of groovy scripts that can be configured are

- Standard Extensions
- Custom Extensions

### Standard Extensions

- The standard extension file names cannot be changed. The reason for referring them standard is that they need not be explicitly configured. Names are standard. Only implementation of the script can be customised.
-  If the file is present, by default it will be executed when the respective event is triggered.**
- Some of those extensions are
BahmniObsValueCalcuator
- TreatmentRegimenExtension

| File Name | Location and Example File | Note |
| --- | --- | --- |
| BahmniObsValueCalculator.groovy | Location of the file is* /var/www/bahmni_config/openmrs/obscalculator/* Sample [BahmniObsValueCalculator.groovy](https://github.com/Bahmni/default-config/blob/master/openmrs/obscalculator/BahmniObsValueCalculator.groovy) file | This groovy script is executed on click of **consultation save** button. This file should implement **ObsValueCalculator.** Override the **run()** method according to the requirement. |
| TreatmentRegimenExtension.groovy | Location of the file is */var/www/bahmni_config/openmrs/treatmentRegimenExtension/* Sample [TreatmentRegimenExtension.groovy](https://github.com/Bahmni/default-config/blob/master/openmrs/treatmentRegimenExtension/TreatmentRegimenExtension.groovy) file | This groovy script is executed before displaying the "Chronic Treatment" Control. This file should extend **BaseTableExtension<TreatmentRegimen>.** Override the **update()** method according to the requirement. |

 
**bahmni.executeGroovyObsValueCalculator** - Groovy scripts to calculate obs during Encounter save can be disabled using this property. Under heavy load, Groovy scripts loading/compilation and execution can make the responses slower. This property if set to False, will not execute groovy scripts ([BahmniObsValueCalculator.groovy](https://github.com/Bahmni/default-config/blob/master/openmrs/obscalculator/BahmniObsValueCalculator.groovy)).

If you do not use advanced calculations, it's better to turn this property to false. Note, for simple calculations while capturing observations, you may use JavaScript in Forms2 (e.g. BMI calculation).

Custom Extensions

- Groovy extensions that can have custom files along with custom implementation.
- Display controls such as Obs To Obs Flowsheet have flexibility to have custom extensions.
- These scripts are triggered when displaying the display control under which the extension is configured.

Example
 
If One Configures, DstExtension.groovy under [ObsToObsFlowSheet Control](https://bahmni.atlassian.net/wiki/display/BAH/Obs+To+Obs+FlowSheet) (Refer Sample Config), then the groovy is executed while the control ([ObsToObsFlowSheet Control](https://bahmni.atlassian.net/wiki/display/BAH/Obs+To+Obs+FlowSheet)) is displayed.

#### Obs To Obs Flowsheet

| **Configuration** | **Location and Example** | Note |
| --- | --- | --- |
| Add the groovy extension name as value of key "**type**" under the configuration section of [ObsToObsFlowSheet Control](https://bahmni.atlassian.net/wiki/display/BAH/Obs+To+Obs+FlowSheet) | All these custom groovy files should be under */var/www/bahmni_config/openmrs/flowSheetExtension/* Please refer example for [https://github.com/Bahmni/endtb-config/blob/master/openmrs/flowsheetExtension/DstExtension.groovy](https://github.com/Bahmni/endtb-config/blob/master/openmrs/flowsheetExtension/DstExtension.groovy) | This file should extend **BaseTableExtension<PivotTable>.** Override the **update()** method according to the requirement. |

## Developer Tips

One way to debug groovy scripts during development is to write statements to a temporary file, e.g., in BahmniObsValueCalculator.groovy, use the snippet below. *groovy_debug.txt* should be writable. Make sure to remove debugging statements and temporary file before deployment.

```
def file1 = new File(OpenmrsUtil.getApplicationDataDirectory() + "obscalculator/groovy_debug.txt")
```

```
file1.append 'debugging statement\n'
```

On this Page

 
 
 
Related Links**

[Auto-Calculation of Observations](https://bahmni.atlassian.net/wiki/display/BAH/Auto-Calculation+of+Observations)
