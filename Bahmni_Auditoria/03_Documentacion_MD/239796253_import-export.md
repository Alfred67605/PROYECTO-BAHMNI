---
id: "239796253"
title: "Import & Export"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/239796253/import-export"
version: 14
updated: "2022-11-20T12:13:11.307Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:48.426Z"
---

# Import & Export

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/239796253)  
> **Versión del documento:** v14 (2022-11-20T12:13:11.307Z) | **Autor/Editor:** Gurpreet Luthra

---

## **Export**

## Purpose and Benefits

Using export feature of Form Builder, an implementer can export/download the form data as a JSON file for later use. The exported file will contain form details and form translations.

**
Sample JSON**

```
{
  "formJson": {
    "id": 72,
    "uuid": "a0f19f99-8136-4dc2-9a9f-cf16e37364f2",
    "name": "Demo",
    "version": "1",
    "published": true,
    "auditInfo": {
      "creator": {
        "uuid": "c1c21e11-3f10-11e4-adec-0800271c1b75",
        "display": "superman",
        "links": [
          {
            "rel": "self",
            "uri": "http://ci-agent03.mybahmni.org/openmrs/ws/rest/v1/user/c1c21e11-3f10-11e4-adec-0800271c1b75"
          }
        ]
      },
      "dateCreated": "2017-11-07T13:31:16.000+0530",
      "changedBy": {
        "uuid": "c1c21e11-3f10-11e4-adec-0800271c1b75",
        "display": "superman",
        "links": [
          {
            "rel": "self",
            "uri": "http://ci-agent03.mybahmni.org/openmrs/ws/rest/v1/user/c1c21e11-3f10-11e4-adec-0800271c1b75"
          }
        ]
      },
      "dateChanged": "2017-11-07T14:42:58.000+0530"
    },
    "resources": [
      {
        "value": "{\"name\":\"Demo\",\"id\":72,\"uuid\":\"a0f19f99-8136-4dc2-9a9f-cf16e37364f2\",\"defaultLocale\":\"en\",\"controls\":[{\"translationKey\":\"LABEL_1\",\"type\":\"label\",\"value\":\"Label\",\"properties\":{\"location\":{\"column\":0,\"row\":0}},\"id\":\"1\"},{\"type\":\"obsControl\",\"label\":{\"translationKey\":\"TEMPERATURE_2\",\"id\":\"2\",\"units\":\"(F)\",\"type\":\"label\",\"value\":\"Temperature\"},\"properties\":{\"mandatory\":false,\"notes\":false,\"addMore\":false,\"hideLabel\":false,\"controlEvent\":false,\"location\":{\"column\":0,\"row\":1},\"abnormal\":false},\"id\":\"2\",\"concept\":{\"name\":\"Temperature\",\"uuid\":\"c37bd733-3f10-11e4-adec-0800271c1b75\",\"datatype\":\"Numeric\",\"conceptClass\":\"Misc\",\"conceptHandler\":null,\"answers\":[],\"properties\":{\"allowDecimal\":true}},\"units\":\"F\",\"hiNormal\":98.6,\"lowNormal\":98.6,\"hiAbsolute\":null,\"lowAbsolute\":null}],\"events\":{},\"translationsUrl\":\"/openmrs/ws/rest/v1/bahmniie/form/translations\"}",
        "dataType": "org.bahmni.customdatatype.datatype.FileSystemStorageDatatype",
        "uuid": "f81885b2-4779-4388-aaab-27a95fbcd263"
      }
    ]
  },
  "translations": [
    {
      "locale": "en",
      "labels": {
        "LABEL_1": "Label"
      },
      "concepts": {
        "TEMPERATURE_2": "Temperature"
      },
      "formName": "Demo",
      "version": "1"
    }
  ]
}
```

**

To export form as JSON click on the download icon beside the form.

![](https://bahmni.atlassian.net/wiki/download/attachments/239796253/imageedit_1_9226162105.jpg?version=1&modificationDate=1510048461188&cacheVersion=1&api=v2)

## **Bulk Export**

Form Bahmni 0.93, an implementer can export more than one form at a time. Each published form will have a checkbox to select as shown in the image below. Upon selecting the forms which we want to download, we can  click on "Export" button which will download a zip file. 

Only the forms which are published will have the option to select for export. The forms which are in draft mode doesn't have checkbox to select. For Single form export, we can use download icon beside each form, which will download the json in ".json" format. The max limit to download the forms is set to 20.

                                ![](https://bahmni.atlassian.net/wiki/download/attachments/239796253/image2021-9-26_16-52-32.png?version=1&modificationDate=1632655354270&cacheVersion=1&api=v2)

## **Import**

## Purpose and Benefits

Using import feature of Form Builder, a implementer can import/create observation form using JSON file.  A new form created using the Import feature will not be **published **by default. It will be stored as a **draft** form. The implementer is expected to Publish the form. 
Sample JSON**

```
{
  "formJson": {
    "id": 72,
    "uuid": "a0f19f99-8136-4dc2-9a9f-cf16e37364f2",
    "name": "Demo",
    "version": "1",
    "published": true,
    "auditInfo": {
      "creator": {
        "uuid": "c1c21e11-3f10-11e4-adec-0800271c1b75",
        "display": "superman",
        "links": [
          {
            "rel": "self",
            "uri": "http://ci-agent03.mybahmni.org/openmrs/ws/rest/v1/user/c1c21e11-3f10-11e4-adec-0800271c1b75"
          }
        ]
      },
      "dateCreated": "2017-11-07T13:31:16.000+0530",
      "changedBy": {
        "uuid": "c1c21e11-3f10-11e4-adec-0800271c1b75",
        "display": "superman",
        "links": [
          {
            "rel": "self",
            "uri": "http://ci-agent03.mybahmni.org/openmrs/ws/rest/v1/user/c1c21e11-3f10-11e4-adec-0800271c1b75"
          }
        ]
      },
      "dateChanged": "2017-11-07T14:42:58.000+0530"
    },
    "resources": [
      {
        "value": "{\"name\":\"Demo\",\"id\":72,\"uuid\":\"a0f19f99-8136-4dc2-9a9f-cf16e37364f2\",\"defaultLocale\":\"en\",\"controls\":[{\"translationKey\":\"LABEL_1\",\"type\":\"label\",\"value\":\"Label\",\"properties\":{\"location\":{\"column\":0,\"row\":0}},\"id\":\"1\"},{\"type\":\"obsControl\",\"label\":{\"translationKey\":\"TEMPERATURE_2\",\"id\":\"2\",\"units\":\"(F)\",\"type\":\"label\",\"value\":\"Temperature\"},\"properties\":{\"mandatory\":false,\"notes\":false,\"addMore\":false,\"hideLabel\":false,\"controlEvent\":false,\"location\":{\"column\":0,\"row\":1},\"abnormal\":false},\"id\":\"2\",\"concept\":{\"name\":\"Temperature\",\"uuid\":\"c37bd733-3f10-11e4-adec-0800271c1b75\",\"datatype\":\"Numeric\",\"conceptClass\":\"Misc\",\"conceptHandler\":null,\"answers\":[],\"properties\":{\"allowDecimal\":true}},\"units\":\"F\",\"hiNormal\":98.6,\"lowNormal\":98.6,\"hiAbsolute\":null,\"lowAbsolute\":null}],\"events\":{},\"translationsUrl\":\"/openmrs/ws/rest/v1/bahmniie/form/translations\"}",
        "dataType": "org.bahmni.customdatatype.datatype.FileSystemStorageDatatype",
        "uuid": "f81885b2-4779-4388-aaab-27a95fbcd263"
      }
    ]
  },
  "translations": [
    {
      "locale": "en",
      "labels": {
        "LABEL_1": "Label"
      },
      "concepts": {
        "TEMPERATURE_2": "Temperature"
      },
      "formName": "Demo",
      "version": "1"
    }
  ]
}
```

To import a form, click on the **Import** button present in the form builder header and select the JSON file to upload it. 

![](https://bahmni.atlassian.net/wiki/download/attachments/239796253/imageedit_4_4540535043.jpg?version=1&modificationDate=1510049623061&cacheVersion=1&api=v2)
 If implementer is importing a form which is already present in the system, it will create a new version of the same form
