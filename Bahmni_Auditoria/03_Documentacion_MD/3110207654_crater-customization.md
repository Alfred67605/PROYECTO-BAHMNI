---
id: "3110207654"
title: "Crater Customization"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3110207654/crater-customization"
version: 2
updated: "2024-04-17T14:37:26.566Z"
author: "Gokul Kuppan"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:05:02.919Z"
---

# Crater Customization

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3110207654)  
> **Versión del documento:** v2 (2024-04-17T14:37:26.566Z) | **Autor/Editor:** Gokul Kuppan

---

This page describes customizing the crater application with custom fields, email, and address templates.

# Create Custom Fields

Custom fields whichever is required can be added in create & edit forms like Customer, Invoice, Estimate, Payment & Expenses.

Follow the [steps given by the Crater](https://docs.craterapp.com/guide/custom-fields.html#add-new-custom-field) to create the custom fields.

# Email Body and Address Templates

Crater allows us to send emails to users when creating invoices, estimates, and payments. The default Email body text can be customized and custom fields can also be added to the email body.

The crater generates the invoices, estimates, and payments in PDF with the Company address, Shipping address, and billing address. The default address format can be configured with existing fields or custom fields created based on requirements.

Follow the [steps given by the Crater](https://docs.craterapp.com/guide/customization.html#invoices) to customize the Email & Address templates.

# Mail Configuration

Crater allows you to send emails for payment receipts, invoices, and estimates. To enable this feature, you need to configure the Email Driver in Crater after installing the application.

### Steps for mail Configuration:

- Log in with your admin credentials.
- Go to **Settings** &rarr; **Mail Configuration**.
- Enter all the required details and test the configuration.
- If the configuration is successful, save the changes.

On this Page
 
 
 
 
**Related Links**

[Create Custom Fields](https://docs.craterapp.com/guide/custom-fields.html)

[Email Body and Address Templates Customization](https://docs.craterapp.com/guide/customization.html#invoices)
