---
id: "506986565"
title: "Creating OWA in Bahmni"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/506986565/creating-owa-in-bahmni"
version: 12
updated: "2018-08-28T11:40:47.716Z"
author: "Angshuman Sarkar"
category: "Arquitectura_Sub"
download_date: "2026-10-20T21:06:32.805Z"
---

# Creating OWA in Bahmni

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/506986565)  
> **Versión del documento:** v12 (2018-08-28T11:40:47.716Z) | **Autor/Editor:** Angshuman Sarkar

---

## **Description**

OWA&rsquo;s (Open Web App) are simple web apps developed using web technologies like JS, HTML and CSS. OpenMRS REST API can be used for the server side calls. Please refer [this](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module) OpenMRS wiki page before working on OWA.

## **Creating new OWA App**

### ***1. Clone OWA App scaffold***

```
git clone git@github.com:sanishmaharjan/boilerplate-react-owa.git
```

*An front-end React OpenMRS admin OWA app boilerplate for development.*

***Features of this boilerplate-react-owa***

- React OpenMRS Admin OWA App scaffold
- OpenMRS Admin OWA UI layout styling
- React components testing with Jest framework
- Support I18N
- Js code formatted with Prettier code formatter

***Preview Scaffold OWA App***

- *[Boilerplate-react-app](https://boilerplate-owa.herokuapp.com)*

### ***2. Folder structure***

```
/webpack.config.js 				# Webpack configuration
/package.json					# npm package manager
/.prettierrc.js					# code formatter config
/.jest.js 						# jest config
/app/							# contain owa app
/app/index.html					# main html view
/app/index.js					# main script
/app/manifest.webapp			# OWA manifest
/app/build/						# contain webpack build scripts
/app/components/				# contain all React components
/app/components/__tests__/		# contain all React components&rsquo; tests
/app/components/app.js			# main app component
/app/css/						# contain css
/app/i18n/						# contain I18N messages.js
/app/img/						# contain images
/app/utilities/					# contain all utilities scripts
/app/utilities/__mocks__/		# contain mocks for testing utilities scripts
/app/utilities/__tests__/		# contain utilities tests
```

### ***3. Provide web app informations***

Open */app/manifest.webapp* and edit 

```
{
  "version": "1.0.0",
  "name": "Boilerplate",
  "description": "Boilerplate for developing react OpenMRS OWA",
  "launch_path": "index.html",
  "icons": {
    "48": "/img/omrs-button.png"
  },
  "developer": {
    "name": "SanishMaharjan",
    "url": "https://github.com/sanishmaharjan/boilerplate-react-owa"
  },
  "default_locale": "en",
    "activities": {
      "openmrs": {
        "href": "*"
      }
    }
}
```

Mostly you have to edit values of  `version`, `name`, `description` & `developer`.

### ***4. Install the yarn dependencies***

```
yarn install
```

This OWA uses [yarn](https://yarnpkg.com/en/) as a package manager and for its build tasks.

### **5. Compile the code and build the artifacts**

***For development 'watching mode'***

```
yarn webpack
```

This command also triggers the watch mode for debugging. This means that any changes will trigger an update to the main app.js in order to hot-deploy changes while developing.

***For production***

```
yarn build
```

This command minified bundles for production.

***The output of build in***

```
/app/build/app.js
/app/build/vendor.js
```

### ***6. Deployment for runtime debugging***

Check your OWA settings admin page at /openmrs/module/owa/settings.form on your runtime instance of OpenMRS.

![](https://bahmni.atlassian.net/wiki/download/attachments/506986565/Screenshot.png?version=1&modificationDate=1520518113883&cacheVersion=1&api=v2)

The key setting is the 'App Folder Path' that contents OWA Apps. Typically the location for all OWAs of your OpenMRS instance should be in /opt/openmrs/owa , the idea would be to symlink the content of the OWA to your code repo:

```
ln -s /path/to/../app /opt/openmrs/owa/boilerplate
```

This is assuming that Tomcat is able to serve symlinked content. If that is not an option, then you will have to copy (instead of symlinking) the content of the app folder of your local repository to /opt/openmrs/owa/boilerplate each time you want to observe a change that you have made.

**

OR create a zip /app folder. Then Browse and Upload it from OpenMRS UI as mentioned in the below screenshot.

To upload it from OpenMRS UI, you need to set **module.allow_web_admin** value to **true** in */opt/openmrs/etc/openmrs-runtime.properties* file. This value is set to **false** by default.

![](https://bahmni.atlassian.net/wiki/download/attachments/506986565/Screenshot2.png?version=1&modificationDate=1520518125586&cacheVersion=1&api=v2)

### **7. Running tests**

This OWA uses [Jest](https://facebook.github.io/jest/) as a test framework and [snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) for UI & its behaviour testing.

```
$ yarn test
```

If you want to run specific test only

```
$ yarn test 
```

Where 'regex' can be used to point to certain targeted test files.

When it is clear that UI changes are as wanted, the Jest snapshots should be regenerated to be part of the next commit:

```
$ yarn test --u
```

### **8. Running Code formatter**

This use prettier code formatter. Before pushing any code, you should run code formatter.

```
$ yarn code:format
```

## ***SetUp OWA in openmrs module And automatically deploy owa upon installing omod***

### 1. Create **/owa** folder in openmrs module and copy all files into owa folder

Folder structure of openmrs module will be. 

```
/api/
/omod/
/owa/
/pom.xml
```

For reference check [openmrs-module-bedmanagement](https://github.com/sanishmaharjan/openmrs-module-bedmanagement).

### 2. Create **/owa/pom.xml **

- Copy content form this [pom.xml](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/owa/pom.xml#L1-L77)
- Edit [these](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/owa/pom.xml#L5-L14) line of codes

### 3. Create **/owa/****assembly.xml**

- Copy content form this [assembly.xml](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/owa/assembly.xml#L1-L22)

### 4. Update /pom.xml

- Include owa module as [this](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/pom.xml#L34)
- Add openmrsOwaVersion property as [this](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/pom.xml#L44)

### 5. Update /omod/pom.xml

- Add execution as [this](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/omod/pom.xml#L221-L240)
- Edit [these](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/omod/pom.xml#L229-L235) line of codes

### 6. Update config.xml

- Add require openmrs owa module as [this](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/omod/src/main/resources/config.xml#L24)

### 7. Add link to OWA App UI from the legacy admin UI

- Add legacyui dependancy as these [/pom.xml](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/pom.xml#L106-L111) and [/omod/pom.xml](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/omod/pom.xml#L92-L95)
- Add link to admin page as [config.xml](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/omod/src/main/resources/config.xml#L46-L50)
- Create AdminList.java. Please refer [this](https://github.com/sanishmaharjan/openmrs-module-bedmanagement/blob/cf0f35784aff8d03769348473bb42cf50733101f/omod/src/main/java/org/openmrs/module/bedmanagement/extension/html/AdminList.java#L1-L39)

### 8. Build omod

```
mvn clean install
```

Now this automatically packed owa into omod. And deploy owa app upon installing omod.

On this page
 
 
 
 

Related Pages**

[OpenMRS OWA Wiki ](https://wiki.openmrs.org/display/docs/Open+Web+Apps+Module)

[Implementation Guide](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/506986528/Configuring+OWA+Open+Web+Apps+in+Bahmni)
