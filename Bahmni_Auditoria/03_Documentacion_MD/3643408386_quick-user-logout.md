---
id: "3643408386"
title: "Quick User Logout"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3643408386/quick-user-logout"
version: 2
updated: "2024-08-12T04:25:48.177Z"
author: "Rahul Ramesh"
category: "Manual_Usuario_Sub_Sub"
download_date: "2026-10-20T21:02:15.498Z"
---

# Quick User Logout

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3643408386)  
> **Versión del documento:** v2 (2024-08-12T04:25:48.177Z) | **Autor/Editor:** Rahul Ramesh

---

The Quick User Logout feature allows users to log out of Bahmni quickly using a keyboard shortcut (Cmd/Ctrl + Esc). This is particularly useful in hospital settings and other environments with shared terminals, where users often need to log off quickly to enable another user, such as another nurse on the same shift, to log in. This ensures that each user can enter patient-specific information using their own credentials, maintaining accuracy and accountability. 

To facilitate this quick logout from screens across Bahmni, we are introducing a shortcut key (Cmd/Ctrl + Esc) for logging out.

The Quick logout shortcut key will be functional only on pages where a logout button is available in the header.

[Screen Recording 2024-07-18 at 10.09.57 PM.mov](/wiki/download/attachments/3643408386/Screen%20Recording%202024-07-18%20at%2010.09.57%E2%80%AFPM.mov?version=1&modificationDate=1721320937572&cacheVersion=1&api=v2&width=760)
## Usage Instructions

- 
**Logging In:** Log into Bahmni as usual with your credentials.

- 
**Logging Out:** On any page with a logout button in the header, press Cmd/Ctrl + Esc.

## Configurability

The key combination for logout can be customized. If Cmd/Ctrl + Esc is not suitable, you can change it to another combination by updating the `quickLogoutComboKey` global property.

You can change the `quickLogoutComboKey` global property through:

- 
**Initializer**: Heading over to the `globalproperties` subfolder in bahmni-config. This subfolder contains XML configuration files that specify which global properties to override.  Add the `quickLogoutComboKey`, with the desired combination keys as the value.

###### Global properties XML configuration file example:

```

  
    
      
bahmni.quickLogoutComboKey
      Escape
      Secondary shortcut key used for quick user logout
    
  

```

The above XML configuration will set `bahmni`**.**`quickLogoutComboKey` to use the `Escape` key as the secondary shortcut key used for quick user logout.

- 
**Advanced Settings**: Head over to Advanced Settings Tab and update the secondary shortcut key used for quick user logout.

## Feedback

For feedback or issues with the Quick User Logout feature, please file an issue on the [Bahmni GitHub](https://github.com/Bahmni/openmrs-module-bahmniapps/issues) or contact support through the [Bahmni Community Forum](https://bahmni.slack.com/archives/C03LWT96L).
