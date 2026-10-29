---
id: "3662839815"
title: "Importing Patient Outstanding data into Odoo 16"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3662839815/importing-patient-outstanding-data-into-odoo-16"
version: 5
updated: "2024-07-31T04:19:24.365Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:19.392Z"
---

# Importing Patient Outstanding data into Odoo 16

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3662839815)  
> **Versión del documento:** v5 (2024-07-31T04:19:24.365Z) | **Autor/Editor:** Mohankumar Thangavel

---

In your current implementation of Odoo 10 or OpenERP 7, you may have outstanding invoices from customers, meaning there are invoices that have been posted but remain unpaid. These specific details can be transferred to Odoo 16 through the Odoo’s Excel/CSV import procedure. The provided guide offers detailed steps on incorporating the total outstanding amount as a single invoice line, labeled as 'Outstanding Payment'.

Before proceeding with the steps below, ensure you have completed the masterdata migration process as mentioned [here](/wiki/spaces/BAH/pages/3657105576/Odoo+16+Masterdata+and+Metadata+Migration) and validated it.

## Step 1: Retrieving the outstanding information from the current system

The outstanding data needs to be prepared as a CSV or Excel file in the following format.

/wiki/download/attachments/3662839815/outstanding_import_sample.csv?version=1&modificationDate=1722396001357&cacheVersion=1&api=v2
![](https://bahmni.atlassian.net/wiki/download/attachments/3662839815/image-20240731-031844.png?version=1&modificationDate=1722395929479&cacheVersion=1&api=v2)
On this template only the following fields needs to be updated.

- 
partner_id  → Patient Identifier

- 
invoice_line_ids/price_unit → Outstanding Amount

- 
currency_id/name → Name of your implementation currency

The following is a reference query which can be run on the openerp (or) odoo database to retrieve the patient id and their associated outstanding balance. **Note: This query should be used as a reference to get the data and needs validation of the data. If your implementation uses additional addons, then the query needs to be altered.**

```
COPY (SELECT p.ref, p.name, SUM(l.debit-l.credit) as amount  FROM account_move_line l LEFT JOIN account_account a ON (l.account_id=a.id) LEFT JOIN res_partner p on l.partner_id=p.id WHERE a.type IN ('receivable','payable') AND p.customer=true  AND l.reconcile_id IS NULL GROUP BY p.id,p.name, p.ref HAVING SUM(l.debit-l.credit) <>0) TO '/var/lib/pgsql/outstanding.csv' WITH CSV;
```

We recommend preparing multiple CSV files with row count 500 to avoid memory errors during the import process.

## Step 2: Importing the CSV files

Once you have prepared the CSV data, follow the steps below for each CSV file to import it.

- 
Navigate to `Menu -> Invoicing -> Customers -> Invoices`

- 
Click on Favorites → Import Records

- 
Upload the file by clicking on `Upload File` button

- 
Review the mappings and click on Test

![](https://bahmni.atlassian.net/wiki/download/attachments/3662839815/image-20240731-040739.png?version=1&modificationDate=1722398865834&cacheVersion=1&api=v2)

- Once there are no validation errors, click on `Import`.

- 
Repeat for all the CSV files.

## Step 3: Setting the invoice type for imported invoices:

Once you have completed the import process for all the CSV, the type of the invoice needs to be updated. Run the following query inside the Odoo database.

```
update account_move set move_type= 'out_invoice' where id in (select id from account_move where state ='draft' and narration = '
Import Outstanding Payments
')
```

## Step 4: Posting the invoices

- 
Now navigate to `Menu -> Invoicing -> Customers -> Invoices`

- 
Select all the invoices by clicking the Select All checkbox

- 
Now Click on Action → Post Entries

![](https://bahmni.atlassian.net/wiki/download/attachments/3662839815/image-20240731-041441.png?version=1&modificationDate=1722399285923&cacheVersion=1&api=v2)

- In the following pop up, click on Post Entries to post all the invoices

Now you should be able to see that the outstanding information is visible for patients in Sales Quotation page or during the payment process.
