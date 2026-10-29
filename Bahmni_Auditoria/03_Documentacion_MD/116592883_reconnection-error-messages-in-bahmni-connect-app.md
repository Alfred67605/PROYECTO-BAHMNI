---
id: "116592883"
title: "Reconnection error messages in Bahmni Connect App"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116592883/reconnection-error-messages-in-bahmni-connect-app"
version: 1
updated: "2017-05-11T06:14:13.247Z"
author: "Pankaj Kanchankar"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:10.027Z"
---

# Reconnection error messages in Bahmni Connect App

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116592883)  
> **Versión del documento:** v1 (2017-05-11T06:14:13.247Z) | **Autor/Editor:** Pankaj Kanchankar

---

When Bahmni Connect app is set up and user is not in network or disconnected, the app starts giving message 

"Reconnect Failed.
Reconnecting in xx seconds..."

This is a configuration which was designed for Online usage and to alert users when they lose connection to save effort. For Bahmni Connect app, it is recommended to turn this flag OFF by setting parameter "showNetworkStatusMessage" to false. Refer to[this documentation on Network Status Alert](/wiki/spaces/BAH/pages/87883793/Network+status+alert+for+clinical+data+entry) on how to manage this flag.
