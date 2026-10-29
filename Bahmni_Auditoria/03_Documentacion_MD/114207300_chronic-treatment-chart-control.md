---
id: "114207300"
title: "Chronic Treatment Chart Control"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114207300/chronic-treatment-chart-control"
version: 12
updated: "2022-11-20T11:15:12.568Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:46.543Z"
---

# Chronic Treatment Chart Control

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114207300)  
> **Versión del documento:** v12 (2022-11-20T11:15:12.568Z) | **Autor/Editor:** Gurpreet Luthra

---

## Purpose

The drugogram or the chronic treatment chart is a display that shows the current drug regimen of a patient enrolled into a treatment which involves a varying set of drugs over the course of the treatment.
 
Please read more about [Chronic Treatment Chart](https://bahmni.atlassian.net/wiki/pages/viewpage.action?pageId=94535717)

## Screenshot

**![](https://bahmni.atlassian.net/wiki/download/attachments/114207300/Screen%20Shot%202016-06-28%20at%2010.31.02%20AM.png?version=1&modificationDate=1484670817011&cacheVersion=1&api=v2)

## Configuration

### Sample Config
Add to clinical/dashboard.json for it to appear on the patient dashboard**

```
"Chronic Treatment Chart": {
	"displayType": "Full-Page",
	"title": "Chronic Treatment Chart",
    "type": "chronicTreatmentChart",
    "dashboardConfig": {
    	"drugs": []
     },
     "expandedViewConfig": {
     	"drugs": []
     }
}
```

### Key Field Table

| Key | Value | Mandatory |
| --- | --- | --- |
| type | type of the section or control. **type should be " chronicTreatmentChart "** | Yes |
| drugs | drugs concept name which you want to show. (If you don't specify drugs in the config, it shows all the drugs which the patient is currently on) | No |

**

On this Page
 
 
 
 
Related Display Controls**

 

- [Chronic Treatment Chart Control](/wiki/spaces/BAH/pages/114207300/Chronic+Treatment+Chart+Control)
- [Drug Order / Treatment Details Control](/wiki/spaces/BAH/pages/98402409/Drug+Order+Treatment+Details+Control)
- [Treatment Display Control](/wiki/spaces/BAH/pages/99123216/Treatment+Display+Control)
- [Treatment Details Control](/wiki/spaces/BAH/pages/114746475/Treatment+Details+Control)
- [Sending prescription to patients](/wiki/spaces/BAH/pages/3152838666/Sending+prescription+to+patients)
