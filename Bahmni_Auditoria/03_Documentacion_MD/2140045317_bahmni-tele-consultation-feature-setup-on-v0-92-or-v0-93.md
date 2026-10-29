---
id: "2140045317"
title: "Bahmni Tele-consultation Feature Setup on v0.92 or v0.93"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2140045317/bahmni-tele-consultation-feature-setup-on-v0-92-or-v0-93"
version: 15
updated: "2024-09-08T15:35:41.938Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:38.879Z"
---

# Bahmni Tele-consultation Feature Setup on v0.92 or v0.93

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/2140045317)  
> **Versión del documento:** v15 (2024-09-08T15:35:41.938Z) | **Autor/Editor:** Mohankumar Thangavel

---

**About the Feature**

The Bahmni tele-consultation feature release is set of artefacts that can be deployed/installed on an existing Bahmni system using 0.92 version. These artefacts would enable the healthcare professionals using bahmni to schedule video tele-consultation appointments.
 
See this documentation page too: [Teleconsultation](/wiki/spaces/BAH/pages/1961918491/Teleconsultation) 

**Features List**

- 
Scheduling video tele-consultation appointments

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/save_teleconsulation.png?version=1&modificationDate=1613036876947&cacheVersion=1&api=v2)
- 
Send appointment confirmation and link to patient’s email address.

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/email.png?version=1&modificationDate=1613036925310&cacheVersion=1&api=v2)

- Start tele-consulatation from patient dashboard.

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/join_teleconsultation.png?version=1&modificationDate=1613036957677&cacheVersion=1&api=v2)
**Video Demo**

[https://www.youtube.com/watch?v=cLxmGHshCzI](https://www.youtube.com/watch?v=cLxmGHshCzI) 

 Setting up Teleconsultation features on Bahmni 0.92**Prerequisites**

- 
Supported Bahmni Version 0.92.

How to upgrade to the latest version  - [Install Bahmni on CentOS](/wiki/spaces/BAH/pages/33128505/Install+Bahmni+on+CentOS)

**Assumptions**

- 
To rollback, manually deploy back the old artefacts.

- 
This feature is completely supports rollback.

 

**Steps to deploy Tele-consultation feature**

- 
Install Bahmni version 0.92 [Install Bahmni on CentOS](/wiki/spaces/BAH/pages/33128505/Install+Bahmni+on+CentOS)

- 
Download appointment omod and place it in /opt/openmrs/modules/ directory

```
#Download appoitment omod
yum install https://github.com/Bahmni-Covid19/openmrs-module-appointments/releases/download/Release_v1/appointments-1.2.3.omod

mv appointments-1.2.3.omod /opt/openmrs/modules/
chown bahmni:bahmni /opt/openmrs/modules/appointments-1.2.3.omod
```

- 
Download bahmniapps.zip, unzip and place it in /var/www/ replacing the existing bahmniapps

```
#Download bahmniapps.zip
yum install https://github.com/Bahmni-Covid19/openmrs-module-appointments/releases/download/Release_v1/bahmniapps.zip

unzip bahmniapps.zip -d bahmniapps
mv bahmniapps /var/www/
chown bahmni:bahmni /var/www/bahmniapps
```

 

Next Steps:
These are manual steps to be done, in order to see some tele-consultation configurations in bahmni_config.

- 
In  file  /var/www/bahmni_config/openmrs/apps/customDisplayControl/js/customControl.js under directive `patientAppointmentsDashboard` , where we have 

```
$q.all([getUpcomingAppointments(), getPastAppointments()]).then(function (response) {
            $scope.upcomingAppointments = response[0].data;
             $scope.upcomingAppointmentsHeadings = _.keys($scope.upcomingAppointments[0]);
            $scope.pastAppointments = response[1].data;
            $scope.pastAppointmentsHeadings = _.keys($scope.pastAppointments[0]);
        });
        $scope.goToListView = function () {
            $window.open('/bahmni/appointments/#/home/manage/appointments/list');
        };
```

replace the following 

```
var convertUTCtoLocal = function (start_date_time, end_date_time) {
            var date = Bahmni.Common.Util.DateUtil.formatDateWithoutTime(start_date_time);
            var timeSlot = Bahmni.Common.Util.DateUtil.formatTime(start_date_time) + " - " + Bahmni.Common.Util.DateUtil.formatTime(end_date_time);
            return [date, timeSlot];
        };
        $q.all([getUpcomingAppointments(), getPastAppointments()]).then(function (response) {
            $scope.upcomingAppointments = response[0].data;
            $scope.upcomingAppointmentsUUIDs = [];
            $scope.teleconsultationAppointments = [];
            for (var i=0; i
- 
 In the file /var/www/bahmni_config/openmrs/apps/customDisplayControl/views/patientAppointmentsDashboard.html, the the following header and its content:

```
      
          Join Teleconsultation
      
```

- 

```

         Join Teleconsultation
 
```

 

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/html.png?version=1&modificationDate=1613041669740&cacheVersion=1&api=v2) 

 

- Modify file /var/www/bahmni_config/[openmrs/apps/registration/app.json](https://github.com/Bahmni/default-config/pull/59#diff-53c97ae9e0fa47052e5cc9500209b2338a707e88ba6dc10ab250802cf131bebb) add the following:

under config/attributes:

```
"cluster",
 "email"
```

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/config.png?version=1&modificationDate=1613043439778&cacheVersion=1&api=v2)
- 
under fieldValidations add

```
 "email" : {"pattern" : "^(?=.{1,40}$)(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,4})$", "errorMessage" : "Should be a valid email address"},
                
```

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/field_validation.png?version=1&modificationDate=1613043631754&cacheVersion=1&api=v2)**How To Setup Email System**

- 
Create a file called email-notification.properties in /opt/openmrs/  

- 
Have the following contents in the file and update the contents to the email server properties.

```
smtp.from.email.address=
smtp.from.name=
smtp.host=
smtp.port=
smtp.ssl=
smtp.username=
smtp.password=
```

This link can help setup personal gmail account for email system.

[https://support.google.com/a/answer/176600?hl=en#zippy=%2Cuse-the-gmail-smtp-server](https://support.google.com/a/answer/176600?hl=en#zippy=%2Cuse-the-gmail-smtp-server) 

3. If the send email functionality is turned off for tele-consulation, on click of Check and Save button it will display the below warning on the UI

![](https://bahmni.atlassian.net/wiki/download/attachments/2140045317/Screenshot%202023-02-06%20at%2010.25.20%20AM.png?version=1&modificationDate=1676292580991&cacheVersion=1&api=v2)

set **bahmni.appointment.teleConsultation.sendEmail **true in OpenMRS global property to enable the send email functionality. 

**Fall back mechanism (To restore the system back to original state before tele-consultation feature was installed)**

- 
Before proceeding with the installation steps take the backup of the following:

appointments omod in /opt/openmrs/modules/ folder.

- 
bahmniapps directory under /var/www/ folder.

- 
bahmni_config directory under /var/www/ folder

- 
If you want to revert the feature, please restore the above backups of appointments omod, bahmniapps and bahmni_config directories and restart openmrs service.

**Configuring Teleconsultation Server**

You may configure the server URL pattern for the teleconsultation link. 

Go to : /Administration => Advance Settings, and edit the property 

```
bahmni.appointment.teleConsultation.serverUrlPattern=https://meet.jit.si/{0}
```

The placeholder {0} above is replaced with a unique id  for the teleconsultation link. 
 
By default the above uses jitsi demo server, which you should absolutely change for production. Either use a self hosted service or use a paid - jitsi as a service. 

Please refer to the following documentation if you want to host your own JITSI server. 

Detailed guide - [https://jitsi.github.io/handbook/docs/devops-guide/](https://jitsi.github.io/handbook/docs/devops-guide/) 

On Docker - [https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker](https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-docker) 

**Contact Us:**

Praveena Dayanand<[praveena.dayanand@thoughtworks.com](mailto:praveena.dayanand@thoughtworks.com)>

Adhavan Kp<[adhavan.kp@thoughtworks.com](mailto:adhavan.kp@thoughtworks.com)>

Ruchika Bhargava<[ruchikab@thoughtworks.com](mailto:ruchikab@thoughtworks.com)>

Swati Gogia<swatigogia openers id>
