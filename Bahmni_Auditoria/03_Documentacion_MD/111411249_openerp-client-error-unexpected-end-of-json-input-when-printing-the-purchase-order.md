---
id: "111411249"
title: "OpenERP client error “Unexpected end of JSON Input” when printing the purchase order"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/111411249/openerp-client-error-unexpected-end-of-json-input-when-printing-the-purchase-order"
version: 1
updated: "2017-01-02T09:12:36.597Z"
author: "Ravinder Deolal"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:08.842Z"
---

# OpenERP client error “Unexpected end of JSON Input” when printing the purchase order

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/111411249)  
> **Versión del documento:** v1 (2017-01-02T09:12:36.597Z) | **Autor/Editor:** Ravinder Deolal

---

## How to resolve “Unexpected end of JSON Input” when printing the purchase order

 The issue is caused by the difference in the version of python lib werkzeug version. OpenERP currently use version 0.8.3. Below is the error message which will be displayed if the there is a difference in version.

![](https://bahmni.atlassian.net/wiki/download/attachments/111411249/image2017-1-2_14-29-37.png?version=1&modificationDate=1483348356620&cacheVersion=1&api=v2)

## Steps

Check werkzeug version by running below command.

```
pip show werkzeug|grep Version

```

If the version displayed is different than 0.8.3 then follow the below steps.

- Stop OpenERP service

```
sudo service openerp stop

```

- Downgrade the version using the command

```
sudo pip install werkzeug==0.8.3
```

- Verify the version after downgrade. It should point to 0.8.3

```
pip show werkzeug|grep Version
```

- Start OpenERP service

```
sudo service openerp start

```
