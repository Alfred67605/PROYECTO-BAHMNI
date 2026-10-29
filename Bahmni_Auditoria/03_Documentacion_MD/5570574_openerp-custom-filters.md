---
id: "5570574"
title: "OpenERP Custom Filters"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/5570574/openerp-custom-filters"
version: 4
updated: "2015-07-09T11:42:59.216Z"
author: "Preethi"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:03:57.631Z"
---

# OpenERP Custom Filters

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/5570574)  
> **Versión del documento:** v4 (2015-07-09T11:42:59.216Z) | **Autor/Editor:** Preethi

---

In OpenERP, you may need to create custom filters for frequently used filters like Today's sales, Today's collections etc.

Here are the steps to create such custom filters.

Go to Settings > Technical > User Interface > User Defined Filters

This should show you list of all custom filters that are created so far.

- Click on Create to create new Custom Filter
- Provide Filter name
- Make User field blank (so that this filter is available to all users)
- In the model field select the model for which this Customer filter should be available
- In the Domain field specify the Domain which is the filter condition

Below are couple of examples:

**Today's sales**

- Model = Sales Order
- Domain = 
[
['date_order', '>=', context_today().strftime('%Y-%m-%d')],
['date_order', '<', (context_today() + datetime.timedelta(1)).strftime('%Y-%m-%d')],
]

- Context = {}

**Today's collections**

- Model = Accounting Voucher
- Domain = [['date', '=', context_today().strftime('%Y-%m-%d')], ['journal_id', 'ilike', 'CASH']]
- Context = {}

**Products Not Sold in Past 30 days**

- Model = Products report by last moved
- Domain =[['last_moved_date', '<', (context_today() - datetime.timedelta(**30**)).strftime('%Y-%m-%d')]]
- Context = {}

The above filter can be modified for any 'n' number of days
