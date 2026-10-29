---
id: "116694133"
title: "Bahmni - DHIS2 Integration"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116694133/bahmni-dhis2-integration"
version: 9
updated: "2021-02-22T10:53:48.510Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub"
download_date: "2026-10-20T21:05:42.717Z"
---

# Bahmni - DHIS2 Integration

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/116694133)  
> **Versión del documento:** v9 (2021-02-22T10:53:48.510Z) | **Autor/Editor:** Gurpreet Luthra

---

Please note, this is a contributed module from community. Bahmni, as of v0.92, does not bundle/package this as part of it distribution. Please contact "Possible Health" team for additional information. 

## Install and configure DHIS2 integration app

Assuming you have Bahmni installer latest version installed and running successfully. (Tested with 0.89 version, should work with previous version as well)

- 
Download and install dhis-integration rpm from [https://github.com/Possiblehealth/possible-artifacts/blob/master/90-artifacts/dhis-integration-1.0-1.noarch.rpm](https://github.com/Possiblehealth/possible-artifacts/blob/master/90-artifacts/dhis-integration-1.0-1.noarch.rpm) (or build latest yourself from here: [https://github.com/Possiblehealth/dhis2-integration](https://github.com/Possiblehealth/dhis2-integration))

```
yum install dhis-integration-1.0-1.noarch.rpm
```

- 
Update the properties file for DHIS2 integration app, located at '/etc/dhis-integration/dhis-integration.yml', with right configuration.

| Key | Description | Example |
| --- | --- | --- |
| openmrs.root.url | Url to access O penmrs service | http:// localhost:8050 /openmrs/ws/rest/v1 |
| bahmni.login.url | When user isn't logged in, then user is redirected to this url. | https://ehr.possible.org/bahmni/home/#/login?showLoginMessage |
| reports.url | Bahmni reports url. Used for downloading reports. | https://ehr.possible.org/bahmnireports/report |
| reports.json | This file contains configurations of DHIS2 reports. | /var/www/bahmni_config/openmrs/apps/reports/reports.json |
| dhis.config.directory | This folder contains DHIS2 integration configurations program wise. | /var/www/bahmni_config/dhis2/ |
| dhis.url | The DHIS2 government server instance url. | Ex. 1: [http://100.100.100.100:8080/](http://100.100.100.100:8080/) Ex. 2: [http://200.100.20.30:8888/hmistest/](http://35.154.200.229:8080/dhis-web-dashboard-integration/index.action) Note that the url could be at domain or ip address level (ex1) or could be at a specific path(ex2) |
| dhis.user | The username to access DHIS2 instance. | username |
| dhis.password | The password for the DHIS2 user. | password |
| openmrs.db.url | Mysql connection url to access "openmrs" database. Set valid user and password in the url. | jdbc:mysql://localhost/openmrs?user=openmrs-user&password=password |
| submission.audit.folder | All DHIS2 submissions are stored in this directory. Ensure the directory exists and "bahmni" user has access to it, or configure a different directory. | /dhis-integration-data |
| server.port | Server config. Port for server to listen to. | 8040 |
| server.context-path | Server config. Mapping incoming requests. | /dhis-integration/ |
| log4j.config.file | Server config. Properties file for logger of dhis-integration server. | log4j.properties |

- 
Download and place the ssl.conf file.

```
cd /etc/httpd/conf.d/
wget https://raw.githubusercontent.com/Possiblehealth/possible-config/89662e8e823fac3dbcaf111aa72713a63139bb03/playbooks/roles/possible-dhis-integration/templates/dhis_integration_ssl.conf
```

- 
Configure Bahmni landing page to show DHIS2 integration app.**Insert the following in "/var/www/bahmni_config/openmrs/apps/home/extension.json" file

```
"possible_dhis_2_integration": {
	"id": "possible.dhis2Integration",
	"extensionPointId": "org.bahmni.home.dashboard",
	"type": "link",
	"label": "DHIS2 integration",
	"url": "/dhis-integration/index.html",
	"icon": "fa-book",
	"order": 11,
	"requiredPrivilege": "app:reports"
}
```

- 
Ensure Bahmni reports service is installed and running successfully.

```
service bahmni-reports status ##should be running
```

- 
Restart ssl and dhis-integration services.

```
service httpd restart
service dhis-integration restart
```

Now the DHIS2 integration app is available on landing screen, given that the user has reporting privileges.

                     ![](https://bahmni.atlassian.net/wiki/download/attachments/116694133/Screen%20Shot%202017-05-16%20at%205.36.40%20PM.png?version=1&modificationDate=1494936501682&cacheVersion=1&api=v2)

           Once you open the app you land on DHIS integration app page, where you select the month and year for given program, type a comment and submit report.

                     ![](https://bahmni.atlassian.net/wiki/download/attachments/116694133/Screen%20Shot%202017-05-16%20at%205.42.03%20PM.png?version=1&modificationDate=1494936813711&cacheVersion=1&api=v2)

## Configure New Program 

- Configure the [concatenated reports ](https://bahmni.atlassian.net/wiki/display/BAH/Reports#Reports-6.ConcatenatingMultipleReports)for the program
- 
Put the following configuration in the concatenated report to make it DHIS2 program.

```
"DHISProgram": true,
```

Example: [Safe motherhood program](https://github.com/Possiblehealth/possible-config/blob/8228d24730d854fa282ee04f16ec3d598e86909c/openmrs/apps/reports/reports.json#L1780-L1782)

- Create a DHIS configuration file for the program with the name of program under '/var/www/bahmni_config/dhis2/' folder.
To use different folder change 'dhis.config.directory' configuration at '/etc/dhis-integration/dhis-integration.yml'.

- 
DHIS configuration file should have the following structure.
DHIS Config**

```
{
  "orgUnit": "",
  "reports": {
    "": {
      "dataValues": [
        {
          "categoryOptionCombo": "",
          "dataElement": "",
          "row": ,
          "column": 
        },
        {
          "categoryOptionCombo": "",
          "dataElement": "",
          "row": ,
          "column": 
        },
        ............more data element mappings............
      ]
    },
    "": {
	  "dataValues": [......]
    },
    "": {
	  "dataValues": [......]
    },
    ............more sub report mappings............
  }
}
```

- An example configuration for Safe Motherhood program will look like the following![](https://bahmni.atlassian.net/wiki/download/attachments/116694133/Screen%20Shot%202017-05-23%20at%2011.41.34.png?version=1&modificationDate=1495519991677&cacheVersion=1&api=v2)
- Example: [Safe motherhood program](https://raw.githubusercontent.com/Possiblehealth/possible-config/8228d24730d854fa282ee04f16ec3d598e86909c/dhis2/Safe_Motherhood_Program.json)

| Key | Description |
| --- | --- |
| orgUnit | This is the organisation unit ID from DHIS |
| reports | This is list of reports which are the inner reports of [concatenated report](https://bahmni.atlassian.net/wiki/display/BAH/Reports#Reports-6.ConcatenatingMultipleReports) of the program. Each report name is a unique key in this object. 'Antenatal Checkup' is one of the inner reports configured in concatenated report, for example. |
| dataValues | This is list of data element mappings. Each mapping maps a cell in SQL output to a dataElement in DHIS. |
| categoryOptionCombo | This is the 'category option combination id' of the dataElement in DHIS. |
| dataElement | This is the 'data element id' of the dataElement in DHIS. |
| row and column | This 'row and column' numbers refers to a particular cell in the output of configured SQL. |

**Notes:** To find out the orgUnit Id, dataElement Id, category option combo Id do the following:

- Access the DHIS2 government server in your browser.
- Open data entry apps and select appropriate organisation and location.
- Once the data entry forms are visible, click on the input boxes where you enter the data.
- Right click on the input box and select "Inspect" from the options.
- Copy the Id of the html element from window (See image), it would look like the following string: "kSnqP4GPOsQ-kdsirVNKdhm-val".
- This string is in the format of "dataElementId - categoryOptionComboId - ...."
- These dataElementId and categoryOptionComboId need to be used in DHIS2 configuration file. Refer the below image.
![](https://bahmni.atlassian.net/wiki/download/attachments/116694133/giff.gif?version=2&modificationDate=1495619174845&cacheVersion=1&api=v2)

![](https://bahmni.atlassian.net/wiki/download/attachments/116694133/Screen%20Shot%202017-06-13%20at%202.40.47%20PM.png?version=1&modificationDate=1497345092419&cacheVersion=1&api=v2)
