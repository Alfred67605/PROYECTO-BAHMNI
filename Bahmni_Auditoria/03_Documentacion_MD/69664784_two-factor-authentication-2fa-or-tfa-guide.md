---
id: "69664784"
title: "Two Factor Authentication (2FA or TFA) guide"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/69664784/two-factor-authentication-2fa-or-tfa-guide"
version: 5
updated: "2016-08-22T08:01:52.393Z"
author: "Venkata Jaswanth U"
category: "Manual_Usuario_Sub"
download_date: "2026-10-20T21:02:52.618Z"
---

# Two Factor Authentication (2FA or TFA) guide

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/69664784)  
> **Versión del documento:** v5 (2016-08-22T08:01:52.393Z) | **Autor/Editor:** Venkata Jaswanth U

---

## About the Feature

[2FA](https://en.wikipedia.org/wiki/Two-factor_authentication) is additional security mechanism to protect the user from fraudulent act. Bahmni using basic authentication (username, password) from OpenMRS so far. We are introducing [2FA](https://en.wikipedia.org/wiki/Two-factor_authentication) in Bahmni to enhance the security. This feature is optional for an implementation. When this feature is enabled then user will be authenticated with username and password first and on success, the user will get SMS with [OTP](https://en.wikipedia.org/wiki/One-time_password) in his/her registered mobile. The user has to authenticate with OTP before proceed to use the system.

## How is it Used?

- When the two-factor-authentication is enabled , the user has to authenticate using his/her password in the login screen.![](https://bahmni.atlassian.net/wiki/download/attachments/69664784/Screen%20Shot%202016-07-04%20at%2010.44.04%20AM.png?version=1&modificationDate=1467609893709&cacheVersion=1&api=v2)**

- On successful authentication, user will receive an OTP which has to be entered to login to the Bahmni.
![](https://bahmni.atlassian.net/wiki/download/attachments/69664784/image2016-8-22%2013:27:47.png?version=1&modificationDate=1471852667638&cacheVersion=1&api=v2)

- If the user doesn't receive OTP because of some network issues, **'Resend OTP'** button can be clicked to get a new OTP. User has to enter the new received OTP to successfully login.

 
**Bahmni configuration for each implementation can vary drastically. As the screens and workflows are not constant across all installations of Bahmni, we have refrained from prescribing them. **

**Please refer to the Guides below for further details about the feature.**
**
**Feature Details**

[2FA - Feature Guide](/wiki/spaces/BAH/pages/69664776/Two+Factor+Authentication+2FA+TFA)

**Implemnentation Details**

[2FA - Implementer's Guide](/wiki/spaces/BAH/pages/69664782/Two+Factor+Authentication+2FA+or+TFA+Implementation)
