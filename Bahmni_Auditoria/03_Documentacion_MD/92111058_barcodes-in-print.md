---
id: "92111058"
title: "Barcodes in Print"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/92111058/barcodes-in-print"
version: 14
updated: "2016-11-02T07:55:25.649Z"
author: "Sravanthi N. S. CH."
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:03.336Z"
---

# Barcodes in Print

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/92111058)  
> **Versión del documento:** v14 (2016-11-02T07:55:25.649Z) | **Autor/Editor:** Sravanthi N. S. CH.

---

## Steps to generate Barcode in the Print

Download [JsBarcode.all.min.js](https://cdn.jsdelivr.net/jsbarcode/3.5.1/JsBarcode.all.min.js) and include in the html script tag

```

```

 
path = the path of the downloaded file (JSBarcode.all.min.js). One can choose different files from [https://github.com/lindell/JsBarcode](https://github.com/lindell/JsBarcode) depending on the configurations

Create an image tag with parameter *jsbarcode-value *which holds the value that can be used to generate the barcode. 

```

```

 
In above code snippet, ***patient.primaryIdentifier.identifier*** will hold the identifier of the patient. This identifier which is alphanumeric (most cases) is used to generate the barcode.
 
One can choose to give different configurations for the size of the barcode and the position etc. Please refer [https://github.com/lindell/JsBarcode/wiki/Options](https://github.com/lindell/JsBarcode/wiki/Options)**

Initialize the barcode generation by adding  below mentioned script tag

```

  (function() {  
     JsBarcode("#barcode").init();    
  })();

```

 
Sample [html page](https://github.com/Bahmni/default-config/blob/4607f26326808c6a3342f8b4446dc1c6f88dcc17/openmrs/apps/registration/registrationCardLayout/printWithBarcode.html) with the above mentioned configurations

![](https://bahmni.atlassian.net/wiki/download/attachments/92111058/Screen%20Shot%202016-10-10%20at%2012.14.41%20pm.png?version=1&modificationDate=1476337564440&cacheVersion=1&api=v2)
 
This is not for Printing on Registration ID card. This works for normal printer.

Related Links**

[Configure Patient Card Prints](/wiki/spaces/BAH/pages/32014599/Configure+Patient+Card+Prints)

[Blog on Using Barcodes in Bahmni](https://medium.com/bahmni-blog/using-barcodes-in-bahmni-9c6eab83c760#.citawd6zd)
