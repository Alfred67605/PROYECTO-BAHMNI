---
id: "3643408396"
title: "Maintain Context Between Logout and Re-Login"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3643408396/maintain-context-between-logout-and-re-login"
version: 2
updated: "2024-07-19T03:00:33.409Z"
author: "Rahul Ramesh"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:16.017Z"
---

# Maintain Context Between Logout and Re-Login

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3643408396)  
> **Versión del documento:** v2 (2024-07-19T03:00:33.409Z) | **Autor/Editor:** Rahul Ramesh

---

In continuation with the quick user logout functionality, this feature aims to redirect the user from where they logged out from, if the same user logs back in within the configured time frame. This feature is particularly useful in a hospital setting, where users often share computers.

The feature introduces context support between logout and re-login for all Bahmni app modules. It is enabled when the global property `contextcookieexpirationtimeinminutes` is set to a non-null positive integer. When this property is set, the page from which the user logs out will be stored in the context, and upon re-login, the user will be redirected to the same page.

**Note**: This feature is exclusively available on pages that include a logout button in the header.

## How does it work?

When a user logs out using the logout button or the quick logout shortcut ("Cmd + Esc"), context of the user's session is stored in cache. Upon re-login within the configured time frame, as set in the `contextcookieexpirationtimeinminutes` global property, the user will be redirected to the same page from where they had logged out.

## Configuration

Below is an example of how `contextcookieexpirationtimeinminutes` can be introduced via the initializer:

#### Example Configuration in `bahmniConfig.xml`

```

  
    
        
bahmni.contextCookieExpirationTimeInMinutes
        30 
        Expiration time of the cookie which maintains the context of the user
    
  

```

Alternately, you can head over to Advanced Settings Tab and update the expiration time of the cookie which maintains the context of the user.

## Next Steps

Explore other related features and configurations in Bahmni:

- 
[Logging into Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/114361274)

- 
[Quick User Logout](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3643408386)

## Feedback

For feedback or issues with the Quick User Logout feature, please file an issue on the [Bahmni GitHub](https://github.com/Bahmni/openmrs-module-bahmniapps/issues) or contact support through the [Bahmni Community Forum](https://bahmni.slack.com/archives/C03LWT96L).
