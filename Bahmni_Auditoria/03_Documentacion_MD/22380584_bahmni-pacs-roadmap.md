---
id: "22380584"
title: "Bahmni PACS Roadmap"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/22380584/bahmni-pacs-roadmap"
version: 21
updated: "2016-01-19T10:15:46.069Z"
author: "Teresa Gracias"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:28.941Z"
---

# Bahmni PACS Roadmap

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/22380584)  
> **Versión del documento:** v21 (2016-01-19T10:15:46.069Z) | **Autor/Editor:** Teresa Gracias

---

This page is In-Progress and will be drafted over the next couple of months. If you have any suggestions or would like to add pages which talk about the functionality of Bahmni, please feel free to add them.

 

## **Tech Guidelines**

- We should directly talk to modalities only to create orders using HL7 standard Order message. 
- A new PACS feed event should be generated to ensure that creation of orders is resilient.
- Our code should not be tied to a particular HL7 version, though HAPI library relies on HL7 version to create orders. Find good way to deal with this. One way is to build a HAPI wrapper that identifies the HL7 version supported by the modality (this could even be configured in 'Modality' table to make it less intelligent but easier to use), and use relevant HAPI structures.
- Device specific code should be avoided.
- dcm4chee is the only new component we add to Bahmni deployment. It is added only where we need PACS integration.
- dcm4chee (DICOM server) does not know about the modality. Modality auto-forwards the image to dcm4chee.

## **Database Entities**

- Modality
id, name, description, ip_address, port, timeout

- Order_Type
id, name, modality_id

- Orders
id, orderTypeId, order_uuid, test_name, test_uuid, result.

- OrderDetails
id, orderId, hl7OrderRequest, hl7Response

- All the atomfeed tables like markers, failed_events etc.

## **Potential Changes to the solution in future**

- As we go along, we may want to pull dcm4chee into its own server, as the disk usage would be huge. We will also need a backup server.****
- Currently we map order type - modality. This works fine for us in current setups where there is one modality. When we find implementations that have more than one modality, we will learn more about the setup, and perhaps modify the order type - modality solution. Some scenarios,
Radiology orders (order type) fulfilled by multiple modalities. Do we map each leaf test (chest 1 view xray instead of Radiology) to a modality?

- We support devices that support HL7 order message and can auto forward DICOM images to a DICOM server.

## **TODO**

- One issue with [Orthanc](/wiki/spaces/BAH/pages/22380630/SetUp+Orthanc+Dicom+Pacs+Server) is for Cent OS < 7.0, the only way we have it working is having to build Orthanc for that environment. This is not a feasible option for production server at an implementation, we do not want dev tools to be installed in production boxes. To get away from this problem, we are exploring options like dcm4chee.
- Can we search for an image by a custom dicom field like Bahmni Order Id (which a user cannot change from the carestream ui)****
- document on wiki to configure Carestream device
[how do I do procedure code mapping](/wiki/spaces/BAH/pages/24969224/Map+PACS+procedure+codes)
- [how do I add a new HL7 client](/wiki/spaces/BAH/pages/36700254/Setup+PACS+Integration+module)  (Data Setup section)

 

On this Page
