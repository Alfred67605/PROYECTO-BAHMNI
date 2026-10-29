---
id: "7110700"
title: "Chrome OS and Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/7110700/chrome-os-and-bahmni"
version: 5
updated: "2017-03-26T15:15:38.014Z"
author: "Jan Mewes"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:03:00.726Z"
---

# Chrome OS and Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/7110700)  
> **Versión del documento:** v5 (2017-03-26T15:15:38.014Z) | **Autor/Editor:** Jan Mewes

---

**Chrome OS in general**
 

- The users can use external USB storage device.
- They cannot use LAN based file system. There is a way to do this we do not recommend - [https://github.com/dnschneid/crouton/wiki/How-to-mount-network-shares-on-Chromebook-using-smbnetfs](https://github.com/dnschneid/crouton/wiki/How-to-mount-network-shares-on-Chromebook-using-smbnetfs). One can do remote desktop connection to login to other machines on the network using the &ldquo;chrome remote desktop&rdquo; extension.
- The users are also able to open the office documents (doc, excel) directly like they do on ordinary machines using the pre-packaged extension. One can open word/excel/ppt files from a USB external storage or on downloaded files, even without an Internet (or network) connection.
- Ease of getting to full screen mode and ability to hide the task bar allows one to use the full screen and take full advantage of screen real estate.
- One needs to sign-in using their Google account. If signed in as guest one wouldn&rsquo;t get any of extensions.
- Dropbox integration is less that ideal since there is no concept of syncing to local file system (hence keeping the files offline). Local syncing feature is only available for google drive. One can use CloudHQ (here are pricing for it - [https://www.cloudhq.net/dropbox/prices](https://www.cloudhq.net/dropbox/prices)). One can synchronise dropbox with google drive to get around this issue essentially.
- It has lesser hard disk space (for example - Acer C720 has 16 GB total, [http://www.google.com/intl/en/chrome/devices/acer-c720-chromebook.html#ac-c720](http://www.google.com/intl/en/chrome/devices/acer-c720-chromebook.html#ac-c720), this might be slightly lesser after leaving out space for OS). If one is using Google drive and has good Internet connection this size logically goes up.

 
**Chrome OS for Bahmni**

- I checked only for OpenMRS and OpenELIS (not OpenERP) part because that is what is required for Possible. Simple usage of application works fine. Image capture in registration (using webcam) works fine as well.
- Printing functionality works fine too.
- Image capture during consultation doesn&rsquo;t work (yet). This is because it is not build for computers but for devices which have a camera (not web cam, they are different). What we could do is detect the device and if it is a computer then take picture using webcam (like we have in registration). But images captured thus would not be as good as ones taken from phone based camera. This is because when one takes picture from webcam one is taking a snapshot from a video. Along with bad resolution it could also have focus issues. This could still work for some images, say take image of body wound.
- While Chrome OS would still work for data administrators who have to deal with word/excel documents, but we would not recommend it because loss of formatting of office documents when working with google docs.
- It has inbuilt transliteration support for different languages so one can enter data in Bahmni in any language.

 
Overall Chrome OS can be used in most situations for using Bahmni.
