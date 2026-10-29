---
id: "3662872598"
title: "Importing Stock Data into Odoo 16"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3662872598/importing-stock-data-into-odoo-16"
version: 3
updated: "2024-07-31T04:19:01.599Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:18.908Z"
---

# Importing Stock Data into Odoo 16

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3662872598)  
> **Versión del documento:** v3 (2024-07-31T04:19:01.599Z) | **Autor/Editor:** Mohankumar Thangavel

---

This guide assumes that there is a single warehouse configured with different stock locations. 

Stock data is crucial transactional information within an inventory management system. The import process consists of two key steps. The initial step involves creating the required Lot/Serial Numbers, followed by loading the on-hand quantity for those lots across various stock locations.

Before proceeding with the steps below, ensure you have completed the masterdata migration process as mentioned [here](/wiki/spaces/BAH/pages/3657105576/Odoo+16+Masterdata+and+Metadata+Migration) and validated it.

**Tip: **We suggest conducting a physical inventory stock check to collect the latest on-hand inventory information and then importing it into the new system. This process will guarantee that only the current available lots are imported, excluding any older or expired ones.

If you want to migrate from existing system, then some scripting needs to be done to get the required data from Odoo 10 or OpenERP 7.

### Step 1: Lot/Serial Numbers creation:

For products that require tracking by lots, a lot number (Batch Number) must be created along with an expiration date before the on-hand quantity can be recorded. Please consult [this page](https://www.odoo.com/documentation/16.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/lots.html) for detailed instructions on enabling Tracking By Lots in Odoo 16.

- 
Prepare a CSV file following the template below for the lots available at the Stock Location.

![](https://bahmni.atlassian.net/wiki/download/attachments/3662872598/image-20240730-023531.png?version=1&modificationDate=1722306936367&cacheVersion=1&api=v2)

- Please navigate to `Menu -> Inventory -> Products -> Lots/Serial Numbers`.

- 
On the subsequent page, select `Favorites -> Import Records`.

- 
Proceed by clicking on the `Upload File` button to upload the CSV file that you have prepared.

- 
Subsequently, a mapping page will appear where the fields from the CSV file will be matched to Odoo 16 fields. Kindly review this mapping to ensure its accuracy.

![](https://bahmni.atlassian.net/wiki/download/attachments/3662872598/image-20240730-024114.png?version=1&modificationDate=1722307279394&cacheVersion=1&api=v2)
- 
Please proceed by clicking on `Test` to verify if the data from the CSV can be successfully imported. In case you encounter any validation errors, kindly rectify the CSV accordingly and attempt the upload once more. Common errors to watch out for include:

Incorrect Product Name or a Product that is not listed in Odoo 16.

- 
Presence of an Empty Expiration Date or an Incorrect date format other than (YYYY-MM-DD).

- 
Upon resolving all validation errors, proceed by clicking on the Import button. Following a successful import, you will be able to locate the Lots that have been created by navigating to the `Menu -> Inventory -> Products -> Lots/Serial Numbers` page.

### Step 2: Adding Inventory Adjustment to load on hand quantity

Now that the lots have been created, the subsequent task involves setting the current on-hand quantities for those lots and products. This can be accomplished by utilizing the Inventory Adjustments feature within Odoo. For further information regarding Inventory Adjustments in Odoo, please consult [this page](https://www.odoo.com/documentation/16.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html).

- 
Prepare a CSV file with the following template for every Stock Location that you want to load data.

![](https://bahmni.atlassian.net/wiki/download/attachments/3662872598/image-20240730-030425.png?version=1&modificationDate=1722308669321&cacheVersion=1&api=v2)
**Note: The Quantity is assumed to be in the respective Product's Stock Keeping Unit. Scheduled can be the date on which import is happening.**

- 
Please navigate to `Menu -> Inventory -> Products -> Lots/Serial Numbers`.

- 
On the subsequent page, select `Favorites -> Import Records`.

- 
Proceed by clicking on the `Upload File` button to upload the CSV file that you have prepared.

- 
Subsequently, a mapping page will appear where the fields from the CSV file will be matched to Odoo 16 fields. Kindly review this mapping to ensure its accuracy.

![](https://bahmni.atlassian.net/wiki/download/attachments/3662872598/image-20240730-030619.png?version=1&modificationDate=1722308783652&cacheVersion=1&api=v2)
 

- 
Please proceed by clicking on `Test` to verify if the data from the CSV can be successfully imported. In case you encounter any validation errors, kindly rectify the CSV accordingly and attempt the upload once more.

***Known Issue: ***When the same lot is assigned to different products, you may encounter discrepancies during the Excel-based import process. The lots selected for inventory adjustment might not match the actual product lots due to Odoo's matching mechanism, which selects the first lot by name. To address this issue, consider replacing the Lot/Serial Number with the corresponding database ID. Below is a sample Python script that connects to the database and retrieves the ID of the lot.

In the mapping screen, use Lot/Serial Number / Database ID for the field mapping Lot/Serial Number

Please note that this script is a temporary solution tailored to specific implementation requirements. Ensure to adjust the configurations according to your specific needs or rewrite it in a language you are more comfortable with.

 Script to Map database ID for lots

```
&zwnj;import time
import psycopg2
import csv
inputfile=open('./adjustments.csv','r')
outputfile=open('./adjustments_with_lot_id.csv','w')
fields = ["Product","Lot/Serial Number","Counted Quantity","Location","Scheduled Date"]
writer = csv.DictWriter(outputfile, fieldnames=fields,quoting=csv.QUOTE_ALL)
writer.writeheader()
result=[]
conn = psycopg2.connect(
   database="odoo", user='odoo', password='odoo', host='127.0.0.1', port= '5432')
cur = conn.cursor() 
inputfile.readline()
csvFile = csv.reader(inputfile)
for line in csvFile:
    lineitems=line
    name=str(lineitems[0])
    lot=str(lineitems[1])
    query="select id,name from stock_lot where product_id=(select id from product_product where product_tmpl_id=(select id from product_template where active=true AND type='product' AND name->>'en_US'='"+name+"')) AND name='"+lot+"';"
    cur.execute(query)
    rows = cur.fetchall()
    if(len(rows)>0):
        data={}
        data[fields[0]]=str(lineitems[0])
        data[fields[1]]=str(rows[0][0])
        data[fields[2]]=lineitems[2]
        data[fields[3]]=lineitems[3]
        data[fields[4]]=lineitems[4]
        writer.writerow(data)
    else:
        print("Product lot not found: "+name+" "+lot)

```

- 
Upon resolving all validation errors, proceed by clicking on the Import button. Following a successful import, you will be able to see the inventory adjustments being created.

- 
Now click on the Apply All button to apply the adjustments to the quantity. This will prompt for a message, enter a message that states this is the initial stock load

- 
On successful completion of Apply process, the quantities will be updated for each lot.

- 
You can follow the same steps for every Stock Location that you have.
