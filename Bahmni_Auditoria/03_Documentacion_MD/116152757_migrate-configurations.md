---
id: "116152757"
title: "Migrate Configurations"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116152757/migrate-configurations"
version: 2
updated: "2017-04-17T06:32:39.319Z"
author: "Himabindu Akkinepalli"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:47.109Z"
---

# Migrate Configurations

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116152757)  
> **Versión del documento:** v2 (2017-04-17T06:32:39.319Z) | **Autor/Editor:** Himabindu Akkinepalli

---

## Purpose and Benefits

Bahmni configuration json files structure change across releases based on the new features built. To ease the process of making these changes, a tool has been built that can be run where the config files are maintained.

## Steps

- 
The tools needs node.js and npm. Use this page for reference: [http://blog.npmjs.org/post/85484771375/how-to-install-npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm) 

- 
Install this npm module using the following command.

```
npm install -g config-migrate 
```

- Follow these instructions to run the migrations [https://www.npmjs.com/package/config-migrate](https://www.npmjs.com/package/config-migrate)
