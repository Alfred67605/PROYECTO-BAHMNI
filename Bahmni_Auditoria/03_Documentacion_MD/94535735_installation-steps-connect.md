---
id: "94535735"
title: "Installation Steps - Connect"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535735/installation-steps-connect"
version: 36
updated: "2018-09-05T12:34:47.094Z"
author: "Angshuman Sarkar"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:05:39.638Z"
---

# Installation Steps - Connect

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535735)  
> **Versión del documento:** v36 (2018-09-05T12:34:47.094Z) | **Autor/Editor:** Angshuman Sarkar

---

## Steps

### 1. Install Bahmni Connect Client

Bahmni Connect is currently supported via a Chromium extension or an Android App. Please refer to the details below to install and configure the client.

#### a. Chromium Extension

Deprecated
 
Chromium Extension is deprecated. Please use Connect as either PWA running on Chrome browser on devices or install APK on Andrioid 

**
 
Bahmni Connect Chrome app is available only till Bahmni release 0.88. Subsequent releases of Bahmni Connect is available as [Progressive web app](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/94535735/Installation+Steps+-+Client#InstallationSteps-Client-c.Progressivewebapp).

[Chromium Extensions](https://developer.chrome.com/extensions) are small software programs that can modify and enhance the functionality of the Chrome browser. [Here](https://support.google.com/chrome_webstore/answer/2664769?hl=en) are further details on installing and deleting extensions. Bahmni Connect has been tested on both a Windows chrome browser and a Mac chrome browser

**Steps to Install Chromium Extension**

- &alpha;-Release of chromium extension is now available at [https://bintray.com/bahmni/generic/download_file?file_path=bahmni-offline-0.88-174.tar.gz](https://bintray.com/bahmni/generic/download_file?file_path=bahmni-offline-0.88-174.tar.gz)
- 
Unzip bahmni.tar.gz

- Navigate to chrome://extensions
- 
Expand the developer dropdown menu and click "Load Unpacked Extension"

- 
Navigate to the local unzipped folder and click on 'Select' button.

- Assuming there are no errors, the extension should load into your browser.

#### b. Android App

Bahmni on Android is designed for tablets with very low resources such as minimal internal storage. Hence there is an option of storing the patient data in the [SD card](https://en.wikipedia.org/wiki/Secure_Digital). [SQLite](https://www.sqlite.org/) supports storing the data on the SD card. Since the SD card is easily accessible or transferrable, SQLite DB is encrypted. Copying the Bahmni.db file from the SD card and attempting to accessing the data is not possible because of the DB encryption. 
 
Connect on Android doesn't save large observation forms which are more than 1MB of size.

**Steps to Install Bahmni Android App**

- Android specific APK is now available at [https://bintray.com/bahmni/generic/download_file?file_path=bahmni-offline-0.88-174.apk](https://bintray.com/bahmni/generic/download_file?file_path=bahmni-offline-0.88-174.apk)
- Connect Android device to PC via USB cable and turn on USB storage.
- Copy bahmni.apk file to attached device's storage.
- Turn off USB storage and disconnect it from PC.
- Check the option Settings &rarr; Applications &rarr; Unknown sources.
- Open FileManager app and click on the copied bahmni.apk file.
- It will ask you whether to install this app or not. Click Yes or OK.

#### c. Progressive web app
 
Bahmni Connect Progressive web app is available from Bahmni release 0.89.

Progressive Web App takes advantage of new features supported by modern browsers, including Service Workers and Web App Manifests and allows the users to work offline. 

First time access of Bahmni Connect app requires network connection. During this first access to Bahmni Connect the service workers will cache the files needed for connect app to run in offline mode.

##### ** Steps to open PWA**

- Access Bahmni Connect using url https://<<server ip>>/bahmni-connect.

- Once the files get successfully cached, the login page appears.

##### ** Steps to uninstall PWA in chrome**

- 
**Using Bahmni App:**
 
This feature is available from Bahmni Connect 0.90 release version

**
**Open User profile drop down in home page, click on **Delete Connect App** button. Then Confirmation dialog appears, click **OK** to delete the app.

                                   ![](https://bahmni.atlassian.net/wiki/download/attachments/94535735/Screen%20Shot%202017-05-09%20at%206.31.02%20PM.png?version=2&modificationDate=1494334937353&cacheVersion=1&api=v2)

          After clicking on OK, below screen appears, then please close the tab.      

                                   ![](https://bahmni.atlassian.net/wiki/download/attachments/94535735/Screen%20Shot%202017-05-09%20at%206.07.31%20PM.png?version=2&modificationDate=1494334034733&cacheVersion=1&api=v2)** **

**       **2**. Using Developer tools:**

- Open the application, right click on the page
- Menu box appears on the page, click on **inspect **option.

![](https://bahmni.atlassian.net/wiki/download/attachments/94535735/Screen%20Shot%202017-04-12%20at%2010.44.46%20AM.png?version=1&modificationDate=1491974474565&cacheVersion=1&api=v2)

- On clicking inspect, developer options will appear on the below or right side of the page. Then click on the **Application **tab**.** 

![](https://bahmni.atlassian.net/wiki/download/attachments/94535735/Screen%20Shot%202017-04-12%20at%2010.47.04%20AM.png?version=1&modificationDate=1491974264618&cacheVersion=1&api=v2)

- Go to **Clear storage** in Application tab.
- Check all the boxes in clear storage and click on **Clear Site data** which will erase all the data of application.
- Now close the tab and reopen the application.

2. Configure Bahmni Connect Client

The sync interval has to be configured for the Bahmni Connect Client. To do it, create a file named offline-config.json in '/openmrs/apps/home/' folder and add the required interval.

```
{
	"schedulerInterval": 40000
}
```

| Config | Values | Description |
| --- | --- | --- |
| **schedulerInterval** | in milli-seconds | The Chromium app or Android app will behave like an "offline first application", which means any data read or written happens to localDB first and will be synced to the server later. This property defines time interval for auto sync. |

On this Page
 
 
 
 
Related Pages**

 

- [Installing Bahmni Connect on Server](/wiki/spaces/BAH/pages/94535706/Installing+Bahmni+Connect+on+Server)
[Connect Installation Steps on Server](/wiki/spaces/BAH/pages/94535723/Connect+Installation+Steps+on+Server)
- [Server Setup For Connect](/wiki/spaces/BAH/pages/94535719/Server+Setup+For+Connect)
- [Bahmni Connect Sync](/wiki/spaces/BAH/pages/94535725/Bahmni+Connect+Sync)

- [Installing Bahmni Connect App](/wiki/spaces/BAH/pages/94535730/Installing+Bahmni+Connect+App)
[Connect Requirements](/wiki/spaces/BAH/pages/94535733/Connect+Requirements)
- [Installation Steps - Connect](/wiki/spaces/BAH/pages/94535735/Installation+Steps+-+Connect)
- [Setup Bahmni Connect using Location based sync strategy](/wiki/spaces/BAH/pages/325713930/Setup+Bahmni+Connect+using+Location+based+sync+strategy)
- [Customizing Bahmni Connect](/wiki/spaces/BAH/pages/94535739/Customizing+Bahmni+Connect)
- [Change Bahmni Connect App Location](/wiki/spaces/BAH/pages/97026058/Change+Bahmni+Connect+App+Location)
- [Upgrade Bahmni Connect](/wiki/spaces/BAH/pages/94535737/Upgrade+Bahmni+Connect)

 

**Connect Chromium Version 0.87 (&alpha; Release)**

You may download the .tar.gz file for Chromium App [here](https://bintray.com/bahmni/generic/download_file?file_path=bahmni-connect-0.87-8.tar.gz)

**Connect APK Version 0.87 (&alpha; Release)**

You may download Connect APK [here](https://bintray.com/bahmni/generic/download_file?file_path=bahmni-connect-0.87-8.apk)

**Feature Details**

[Bahmni Connect](/wiki/spaces/BAH/pages/94535750/Bahmni+Connect)

**Usage Details**

[Using Bahmni Connect App](/wiki/spaces/BAH/pages/94535745/Using+Bahmni+Connect+App)
