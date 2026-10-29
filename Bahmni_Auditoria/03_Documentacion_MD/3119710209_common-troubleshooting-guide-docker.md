---
id: "3119710209"
title: "Common Troubleshooting Guide (docker)"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3119710209/common-troubleshooting-guide-docker"
version: 25
updated: "2025-04-24T13:04:22.319Z"
author: "Satish Viswanathan"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:11.069Z"
---

# Common Troubleshooting Guide (docker)

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3119710209)  
> **Versión del documento:** v25 (2025-04-24T13:04:22.319Z) | **Autor/Editor:** Satish Viswanathan

---

**NOTE: **Below are some of the common issues that may come in while running Bahmni on Docker. If you run into other issues or the steps mentioned here don’t fix the issue, feel free to ask questions on [Bahmni Slack](/wiki/spaces/BAH/pages/414646273/Communication+Channels+and+Tools+Discourse+Slack) **#community** channel.

### How to view the logs of any container or service

```
docker-compose logs  -f

# Examples
# openmrs logs
docker-compose logs openmrs -f 
# reports logs
docker-compose logs reports -f
# crater logs
docker-compose logs crater-php -f
# apache web proxy logs
docker-compose logs bahmni-web -f
# apache httpd logs
docker-compose logs proxy -f
```

### To see all the running services / containers

```
docker ps
# Or
docker-compose ps
```

### To ssh into a running container

```
# Command: docker-compose exec  /bin/bash

# e.g. To ssh into openmrs container
docker-compose exec openmrs /bin/bash
```

### To start a single service

```
# For instance to start "reports" service
docker compose start reports

# To restart a service which is already running. e.g "crater-atomfeed"
docker compose  restart crater-atomfeed
```

### To RESET and CLEAN everything and start again
The following commands will delete ALL docker images and volumes (databases) on your machine. You can choose to leave volumes as-is, if you want the DBs to remain as-is. 

```
# Bring down all services
docker-compose down

# Check list of running containers (should be none)
docker ps
# Check list of images
docker images
# Check list of volumes
docker volume ls

# Delete ALL containers and IMAGES
docker system prune -a
docker image prune -a
# Delete ALL VOLUMES (WARNING: This means all Databases and locally stored data!)
docker volume rm $(docker volume ls -q)

# Now since all are deleted. You can now pull all images again. 
# If you see some error, try pull command again. It sometimes resolves on retry.
docker-compose pull
docker-compose up -d
```

### Getting 404 Error when accessing patient documents or implementer-interface or some service of Bahmni:
This issue might pop up when a deployment is made which has caused recreation of containers on the environment. When containers get recreated, the docker network might assign a different IP address to the containers within the docker network. Due to which the proxy service might not be able to properly proxy pass requests it received. 

So whenever a deployment is made and containers are recreated, it is recommend to restart the proxy service with the following command to avoid errors due to improper proxy pass by containers. Run this command from bahmni-lite or bahmni-standard depending on which flavour you have deployed. 

```
docker compose restart proxy
```

If you have a CI/CD based deployment to your environment, it is recommended to add the command to your workflow action and doing a `docker compose up`. Example [here](https://github.com/Bahmni/bahmni-docker/blob/master/.github/workflows/bahmni_standard_docker_env.yaml#L69).

### Bahmni UI keeps on loading

- 
This might be because OpenMRS service is not started and initialised. Wait for 5-10 mins for OpenMRS to completely boot.

- 
Check if OpenMRS is up by hitting [https://localhost/openmrs](https://localhost/openmrs) 

- 
Check the status of container by running `docker ps` 

- 
Check the OpenMRS logs to see if its ready. You should see the following messages when its ready: 

```
INFO [main] org.apache.coyote.AbstractProtocol.start Starting ProtocolHandler ["http-nio-8080"]
INFO [main] org.apache.catalina.startup.Catalina.start Server startup in 136047 ms
```

### Bahmni UI on Login gives an OpenMRS Service Error
If on login to Bahmni EMR UI, you see the following error, `The OpenMRS service is currently unavailable. Please check if the service is started and refresh the page once it up`. It can happen if OpenMRS is not running. Please perform the following steps: 

- 
Go to url: `https:///openmrs/` (this should open the OpenMRS Admin UI home page). If this gives an error, then possibly `openmrs` service is not running (check and start the `openmrs` service).

- 
Try login into Openmrs Admin UI (enter any valid user creds, like `superman` and `Admin123`).

- 
Now logout from openmrs.

- 
Again try Bahmni EMR UI login page. It should load now. `https:///bahmni/home/`

- 
This error should only be seen on first time access of Bahmni UI (something to do with cookies issue). You can also try clearing your cookies/browser cache, or try accessing Bahmni in incognito mode – to validate this is a cookie/browser cache issue. 

### OpenMRS gives Proxy Error

- 
This might be because OpenMRS service is not started and initialised. Wait for 5-10 mins for OpenMRS to completely boot.

- 
Check the status of container by running `docker ps` 

- 
Check logs by running `docker compose logs openmrs -f`

### Bahmni and OpenMRS are up, but entering data in Bahmni EMR UI gives error

- 
Check if you have created the Search Index in OpenMRS (one time setup). See steps [here](/wiki/spaces/BAH/pages/3117187073/OpenMRS+Configurations+docker).

### To Run Bahmni Docker on Apple Silicon Mac M1 machines

- 
Ensure that you have Docker desktop installed along with Rosetta2. [See here](https://docs.docker.com/desktop/install/mac-install/).

- 
In Bahmni `docker-compose.yml` file, in the following services: `craterdb`, `crater-atomfeed-db` & `reportsdb`(since arm64 images are not available for these services currently), add the line:

```
    platform: linux/amd64
```

### Request Header too Large Exception in OpenMRS Logs

If the OpenMRS logs show this exception, and on Bahmni EMR UI you see errors (esp opening the Orders TAB), etc. Then it is possibly happening due to this issue: 

```
 28-Dec-2022 08:31:26.483 INFO [http-nio-8080-exec-6] org.apache.coyote.http11.Http11Processor.service Error parsing HTTP request header
bahmni-lite-openmrs-1  |  Note: further occurrences of HTTP request parsing errors will be logged at DEBUG level.
bahmni-lite-openmrs-1  | 	java.lang.IllegalArgumentException: Request header is too large
bahmni-lite-openmrs-1  | 		at org.apache.coyote.http11.Http11InputBuffer.fill(Http11InputBuffer.java:795)
bahmni-lite-openmrs-1  | 		at org.apache.coyote.http11.Http11InputBuffer.parseHeader(Http11InputBuffer.java:975)
```

- 
Check in incognito mode of browser, if this still persists. It might not throw this error in incognitor, becuase no browser add-ons are adding any extra headers.

- 
To fix the issue, read this: [https://stackoverflow.com/questions/39720422/java-tomcat-request-header-is-too-large](https://stackoverflow.com/questions/39720422/java-tomcat-request-header-is-too-large) . Steps to fix: 

```
# ssh into the openmrs container
docker-compose exec openmrs /bin/bash
cd /usr/local/tomcat/conf/
vi server.xml
# Add the maxHttpHeaderSize="65536" attribute to node which says:  (Ensure you add it to the node which is NOT commented out)
# Now save the server.xml ( :wq )
exit
# Now restart the openmrs container
```

### Unable to access Crater on remote  machines

Crater needs a separate domain of its own to work and for its different components to communicate with each other. Unlike other Bahmni services where we make use of the [Proxy image](https://github.com/Bahmni/bahmni-docker/tree/master/bahmni-proxy) for navigating and routing requests we cannot create a subdirectory for Crater (like `/crater`).  In order to be able to use it, a port access needs to be provided to Crater on cloud environments (e.g via [AWS's security group](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/security-group-rules.html) rules).

Crater running on Docker can be configured further (Crater App URL, Port etc) by changing the values in [.env](https://github.com/Bahmni/bahmni-docker/blob/master/bahmni-lite/.env) file under the sections [Crater Environment Variables](https://github.com/Bahmni/bahmni-docker/blob/6dc5c6d8202bc1afad7896404adb217624f17da3/bahmni-lite/.env#L47) and [Crater-Atomfeed Environment variables](https://github.com/Bahmni/bahmni-docker/blob/6dc5c6d8202bc1afad7896404adb217624f17da3/bahmni-lite/.env#L99). Read more about running Crater on Docker [here](/wiki/spaces/BAH/pages/3113091089/Crater+with+Bahmni+Lite+docker). You need to ensure you mention the IP address in the following places in `.env` file: 

```
# Change from Localhost to Actual IP Address/DomainName of the Server where Crater is running. After this, restart the crater docker service.
CRATER_APP_URL=http://crater-machine-ip:444
CRATER_SANCTUM_STATEFUL_DOMAINS=crater-machine-ip:444
CRATER_SESSION_DOMAIN=crater-machine-ip
```

### Status call fails when uploading a csv file in the Admin module

In a fresh Bahmni instance, when a CSV file is uploaded for the first time in the CSV Upload section of the Admin module, an exception is triggered, resulting in an error message being displayed. Two calls are made: one for the upload and another for the status check. However, the status call returns a 500 error, showing a message in the UI ("There was an issue in the server. Please try again."), regardless of whether the program call succeeds or fails. Interestingly, clicking the refresh button resolves the status, displaying all statuses on the UI (Refer [bug card](https://bahmni.atlassian.net/browse/BAH-3525)).

It was identified that trying to update certain records within a MySQL DB using the JDBC connector leading to “Zero Date value Prohibited” exception. This occurs because the MySQL Java Connector, by default, throws this exception when processing empty or null values for datetime fields. To address this, the zeroDateTimeBehavior configuration property can be adjusted. Allowable values include:

- 
"exception" (the default), which throws an SQLException with an SQLState of S1009.

- 
"convertToNull", which returns NULL instead of the date.

- 
"round", which rounds the date to the nearest closest value, which is 0001-01-01.

 
The recommended approach is to set `OMRS_DB_EXTRA_ARGS` to include `&zeroDateTimeBehavior=convertToNull`. During openmrs runtime, `OMRS_DB_EXTRA_ARGS` appends `zeroDateTimeBehavior=convertToNull` to the JdbcUrl. Upon boot up, openmrs utilizes its own startup script to define the jdbc url, where `OMRS_DB_EXTRA_ARGS` appends any provided parameters to the end of the url. See this: [https://www.taogenjia.com/2021/05/26/JDBC-Error-Java-sql-SQLException-Zero-Date-value-Prohibited/](https://www.taogenjia.com/2021/05/26/JDBC-Error-Java-sql-SQLException-Zero-Date-value-Prohibited/) 
 Sample logs of the "Zero Date value Prohibited” exception

```
ERROR - BaseRestController.handleException(124) |2024-02-08T01:41:57,754| Zero date value prohibited
2024-02-08 07:11:57 java.sql.SQLException: Zero date value prohibited
2024-02-08 07:11:57     at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:129) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:97) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:89) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:63) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.jdbc.exceptions.SQLError.createSQLException(SQLError.java:73) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.jdbc.exceptions.SQLExceptionsMapping.translateException(SQLExceptionsMapping.java:99) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.jdbc.result.ResultSetImpl.getTimestamp(ResultSetImpl.java:939) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mchange.v2.c3p0.impl.NewProxyResultSet.getTimestamp(NewProxyResultSet.java:3071) ~[c3p0-0.9.5.5.jar:0.9.5.5]
2024-02-08 07:11:57     at org.bahmni.fileimport.dao.ImportStatusDao.getImportStatusFromDate(ImportStatusDao.java:105) ~[file-uploader-0.94.4-SNAPSHOT.jar:?]
2024-02-08 07:11:57     at org.bahmni.module.bahmnicore.web.v1_0.controller.AdminImportController.status(AdminImportController.java:283) ~[bahmnicore.jar:?]
2024-02-08 07:11:57     at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[?:1.8.0_372]
2024-02-08 07:11:57     at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[?:1.8.0_372]
2024-02-08 07:11:57     at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[?:1.8.0_372]
2024-02-08 07:11:57     at java.lang.reflect.Method.invoke(Method.java:498) ~[?:1.8.0_372]
2024-02-08 07:11:57     at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:190) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:138) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:105) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:878) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:792) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:1040) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:943) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:1006) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java:898) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at javax.servlet.http.HttpServlet.service(HttpServlet.java:489) ~[servlet-api.jar:?]
2024-02-08 07:11:57     at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:883) ~[spring-webmvc-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at javax.servlet.http.HttpServlet.service(HttpServlet.java:583) ~[servlet-api.jar:?]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:212) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ForcePasswordChangeFilter.doFilter(ForcePasswordChangeFilter.java:60) ~[legacyui.jar:?]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:51) ~[tomcat-websocket.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilterChain.doFilter(ModuleFilterChain.java:73) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.openmrs.web.filter.GZIPFilter.doFilterInternal(GZIPFilter.java:65) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilterChain.doFilter(ModuleFilterChain.java:71) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.webservices.rest.web.filter.AuthorizationFilter.doFilter(AuthorizationFilter.java:121) ~[webservices.rest-omod-common-2.42.0-SNAPSHOT.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilterChain.doFilter(ModuleFilterChain.java:71) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.webservices.rest.web.filter.ContentTypeFilter.doFilter(ContentTypeFilter.java:64) ~[webservices.rest-omod-common-2.42.0-SNAPSHOT.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilterChain.doFilter(ModuleFilterChain.java:71) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.springframework.web.filter.ShallowEtagHeaderFilter.doFilterInternal(ShallowEtagHeaderFilter.java:106) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilterChain.doFilter(ModuleFilterChain.java:71) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.owa.filter.OwaFilter.doFilter(OwaFilter.java:93) ~[owa.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.owa.filter.OwaFilter.doFilter(OwaFilter.java:61) ~[owa.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilterChain.doFilter(ModuleFilterChain.java:71) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.openmrs.module.web.filter.ModuleFilter.doFilter(ModuleFilter.java:57) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.web.filter.OpenmrsFilter.doFilterInternal(OpenmrsFilter.java:105) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.web.filter.CookieClearingFilter.doFilterInternal(CookieClearingFilter.java:77) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.springframework.orm.hibernate5.support.OpenSessionInViewFilter.doFilterInternal(OpenSessionInViewFilter.java:156) ~[spring-orm-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.web.filter.StartupFilter.doFilter(StartupFilter.java:110) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.web.filter.StartupFilter.doFilter(StartupFilter.java:110) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.openmrs.web.filter.StartupFilter.doFilter(StartupFilter.java:110) ~[openmrs-web-2.5.12.jar:?]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:201) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:119) ~[spring-web-5.2.14.RELEASE.jar:5.2.14.RELEASE]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:181) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:156) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:167) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:90) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:483) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:130) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:93) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.valves.AbstractAccessLogValve.invoke(AbstractAccessLogValve.java:682) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:74) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:343) ~[catalina.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:617) ~[tomcat-coyote.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:63) ~[tomcat-coyote.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java:932) ~[tomcat-coyote.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1695) ~[tomcat-coyote.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:52) ~[tomcat-coyote.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1191) ~[tomcat-util.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:659) ~[tomcat-util.jar:8.5.88]
2024-02-08 07:11:57     at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) ~[tomcat-util.jar:8.5.88]
2024-02-08 07:11:57     at java.lang.Thread.run(Thread.java:750) ~[?:1.8.0_372]
2024-02-08 07:11:57 Caused by: com.mysql.cj.exceptions.DataReadException: Zero date value prohibited
2024-02-08 07:11:57     at com.mysql.cj.result.SqlTimestampValueFactory.localCreateFromTimestamp(SqlTimestampValueFactory.java:143) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.result.SqlTimestampValueFactory.localCreateFromTimestamp(SqlTimestampValueFactory.java:51) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.result.AbstractDateTimeValueFactory.createFromTimestamp(AbstractDateTimeValueFactory.java:89) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.protocol.a.MysqlTextValueDecoder.decodeTimestamp(MysqlTextValueDecoder.java:85) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.protocol.result.AbstractResultsetRow.decodeAndCreateReturnValue(AbstractResultsetRow.java:89) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.protocol.result.AbstractResultsetRow.getValueFromBytes(AbstractResultsetRow.java:243) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     at com.mysql.cj.protocol.a.result.TextBufferRow.getValue(TextBufferRow.java:132) ~[mysql-connector-java-8.0.26.jar:8.0.26]
2024-02-08 07:11:57     ... 88 more
```

 

### Patients are not getting synced as Customers on Crater

Typically requires a restart of the **crater-atomfeed** service. After restart, it takes about 2-3 mins for the atomfeed service to initialise. See sample logs of a successful run below. 

```
# restart the crater atomfeed service
docker compose  restart crater-atomfeed 

# view logs of crater atomfeed service
docker compose logs crater-atomfeed -f
```

 Sample logs of crater atomfeed with successful run

```
2023-01-05 10:53:53 Waiting for crater-atomfeed-db..
2023-01-05 10:54:14 Waiting for openmrs..
2023-01-05 10:54:14 [INFO] Starting Application
2023-01-05 10:54:15 Listening for transport dt_socket at address: 8002
2023-01-05 11:03:59 Waiting for crater-atomfeed-db..
2023-01-05 11:03:59 Waiting for openmrs..
2023-01-05 11:04:00 [INFO] Starting Application
2023-01-05 11:04:00 Listening for transport dt_socket at address: 8002
2023-01-05 11:04:22 
2023-01-05 11:04:22   .   ____          _            __ _ _
2023-01-05 11:04:22  /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
2023-01-05 11:04:22 ( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
2023-01-05 11:04:22  \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
2023-01-05 11:04:22   '  |____| .__|_| |_|_| |_\__, | / / / /
2023-01-05 11:04:22  =========|_|==============|___/=/_/_/_/
2023-01-05 11:04:02 [main] INFO org.bahmni.module.feedintegration.Application - ************ Starting Crater Atomfeed app **********
2023-01-05 11:04:22  :: Spring Boot ::        (v1.2.4.RELEASE)
2023-01-05 11:04:22 
2023-01-05 11:04:23 [main] INFO org.bahmni.module.feedintegration.Application - Starting Application v1.0.0-SNAPSHOT on cf32cabed2f2 with PID 54 (/crater-atomfeed.jar started by root in /)
2023-01-05 11:04:24 [main] INFO org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext - Refreshing org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext@6e746d03: startup date [Thu Jan 05 05:34:24 UTC 2023]; root of context hierarchy
2023-01-05 11:04:42 [main] INFO org.springframework.beans.factory.support.DefaultListableBeanFactory - Overriding bean definition for bean 'beanNameViewResolver': replacing [Root bean: class [null]; scope=; abstract=false; lazyInit=false; autowireMode=3; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration; factoryMethodName=beanNameViewResolver; initMethodName=null; destroyMethodName=(inferred); defined in class path resource [org/springframework/boot/autoconfigure/web/ErrorMvcAutoConfiguration$WhitelabelErrorViewConfiguration.class]] with [Root bean: class [null]; scope=; abstract=false; lazyInit=false; autowireMode=3; dependencyCheck=0; autowireCandidate=true; primary=false; factoryBeanName=org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter; factoryMethodName=beanNameViewResolver; initMethodName=null; destroyMethodName=(inferred); defined in class path resource [org/springframework/boot/autoconfigure/web/WebMvcAutoConfiguration$WebMvcAutoConfigurationAdapter.class]]
2023-01-05 11:04:49 [main] INFO org.springframework.beans.factory.annotation.AutowiredAnnotationBeanPostProcessor - JSR-330 'javax.inject.Inject' annotation found and supported for autowiring
2023-01-05 11:04:50 [main] INFO org.hibernate.validator.internal.util.Version - HV000001: Hibernate Validator 5.1.3.Final
2023-01-05 11:04:51 [main] INFO org.springframework.context.support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker - Bean 'org.springframework.scheduling.annotation.SchedulingConfiguration' of type [class org.springframework.scheduling.annotation.SchedulingConfiguration$$EnhancerBySpringCGLIB$$c26a06ad] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-01-05 11:04:54 [main] INFO org.springframework.context.support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker - Bean 'org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration' of type [class org.springframework.transaction.annotation.ProxyTransactionManagementConfiguration$$EnhancerBySpringCGLIB$$52148392] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-01-05 11:04:54 [main] INFO org.springframework.context.support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker - Bean 'transactionAttributeSource' of type [class org.springframework.transaction.annotation.AnnotationTransactionAttributeSource] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-01-05 11:04:55 [main] INFO org.springframework.context.support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker - Bean 'transactionInterceptor' of type [class org.springframework.transaction.interceptor.TransactionInterceptor] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-01-05 11:04:55 [main] INFO org.springframework.context.support.PostProcessorRegistrationDelegate$BeanPostProcessorChecker - Bean 'org.springframework.transaction.config.internalTransactionAdvisor' of type [class org.springframework.transaction.interceptor.BeanFactoryTransactionAttributeSourceAdvisor] is not eligible for getting processed by all BeanPostProcessors (for example: not eligible for auto-proxying)
2023-01-05 11:05:00 [main] INFO org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainer - Tomcat initialized with port(s): 9020 (http)
2023-01-05 11:05:01 [main] INFO org.apache.catalina.core.StandardService - Starting service Tomcat
2023-01-05 11:05:01 [main] INFO org.apache.catalina.core.StandardEngine - Starting Servlet Engine: Apache Tomcat/8.0.23
2023-01-05 11:05:02 [localhost-startStop-1] INFO org.apache.catalina.core.ContainerBase.[Tomcat].[localhost].[/] - Initializing Spring embedded WebApplicationContext
2023-01-05 11:05:02 [localhost-startStop-1] INFO org.springframework.web.context.ContextLoader - Root WebApplicationContext: initialization completed in 38078 ms
2023-01-05 11:05:18 [localhost-startStop-1] INFO org.springframework.boot.context.embedded.ServletRegistrationBean - Mapping servlet: 'dispatcherServlet' to [/]
2023-01-05 11:05:18 [localhost-startStop-1] INFO org.springframework.boot.context.embedded.FilterRegistrationBean - Mapping filter: 'metricFilter' to: [/*]
2023-01-05 11:05:18 [localhost-startStop-1] INFO org.springframework.boot.context.embedded.FilterRegistrationBean - Mapping filter: 'characterEncodingFilter' to: [/*]
2023-01-05 11:05:18 [localhost-startStop-1] INFO org.springframework.boot.context.embedded.FilterRegistrationBean - Mapping filter: 'hiddenHttpMethodFilter' to: [/*]
2023-01-05 11:05:18 [localhost-startStop-1] INFO org.springframework.boot.context.embedded.FilterRegistrationBean - Mapping filter: 'webRequestLoggingFilter' to: [/*]
2023-01-05 11:05:18 [localhost-startStop-1] INFO org.springframework.boot.context.embedded.FilterRegistrationBean - Mapping filter: 'applicationContextIdFilter' to: [/*]
2023-01-05 11:05:35 INFO 1/5/23 5:35 AM: liquibase: Successfully acquired change log lock
2023-01-05 11:05:44 INFO 1/5/23 5:35 AM: liquibase: Creating database history table with name: crater_atomfeed.DATABASECHANGELOG
2023-01-05 11:05:44 INFO 1/5/23 5:35 AM: liquibase: Reading from crater_atomfeed.DATABASECHANGELOG
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081136::ict4h: Table markers created
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081136::ict4h: ChangeSet liquibase.xml::atomfeed-migration-202208081136::ict4h ran successfully in 96ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202212051416::ict4h: Table failed_events created
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202212051416::ict4h: ChangeSet liquibase.xml::atomfeed-migration-202212051416::ict4h ran successfully in 52ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081140::ict4h: Columns title(varchar(255)) added to failed_events
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081140::ict4h: ChangeSet liquibase.xml::atomfeed-migration-202208081140::ict4h ran successfully in 71ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081139::Jaswanth: Columns retries(int) added to failed_events
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081139::Jaswanth: ChangeSet liquibase.xml::atomfeed-migration-202208081139::Jaswanth ran successfully in 51ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202211051417::Jaswanth: Table failed_event_retry_log created
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202211051417::Jaswanth: ChangeSet liquibase.xml::atomfeed-migration-202211051417::Jaswanth ran successfully in 41ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081144::angshu, dubey: Columns tags(varchar(255)) added to failed_events
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::atomfeed-migration-202208081144::angshu, dubey: ChangeSet liquibase.xml::atomfeed-migration-202208081144::angshu, dubey ran successfully in 28ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::1::Bahmni: Table event_records_offset_marker created
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::1::Bahmni: ChangeSet liquibase.xml::1::Bahmni ran successfully in 35ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::2::Bahmni: Table openmrs_patient_feed_for_crater_job created
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::2::Bahmni: ChangeSet liquibase.xml::2::Bahmni ran successfully in 24ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::3::Bahmni: Custom SQL executed
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: liquibase.xml: liquibase.xml::3::Bahmni: ChangeSet liquibase.xml::3::Bahmni ran successfully in 19ms
2023-01-05 11:05:45 INFO 1/5/23 5:35 AM: liquibase: Successfully released change log lock
2023-01-05 11:05:48 [main] INFO org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean - Building JPA container EntityManagerFactory for persistence unit 'default'
2023-01-05 11:05:48 [main] INFO org.hibernate.jpa.internal.util.LogHelper - HHH000204: Processing PersistenceUnitInfo [
2023-01-05 11:05:48 name: default
2023-01-05 11:05:48 ...]
2023-01-05 11:05:50 [main] INFO org.hibernate.Version - HHH000412: Hibernate Core {4.3.10.Final}
2023-01-05 11:05:50 [main] INFO org.hibernate.cfg.Environment - HHH000206: hibernate.properties not found
2023-01-05 11:05:50 [main] INFO org.hibernate.cfg.Environment - HHH000021: Bytecode provider name : javassist
2023-01-05 11:05:54 [main] INFO org.hibernate.annotations.common.Version - HCANN000001: Hibernate Commons Annotations {4.0.5.Final}
2023-01-05 11:05:55 [main] INFO org.hibernate.dialect.Dialect - HHH000400: Using dialect: org.hibernate.dialect.MySQLDialect
2023-01-05 11:05:57 [main] INFO org.hibernate.hql.internal.ast.ASTQueryTranslatorFactory - HHH000397: Using ASTQueryTranslatorFactory
2023-01-05 11:06:22 [main] INFO org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter - Looking for @ControllerAdvice: org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext@6e746d03: startup date [Thu Jan 05 05:34:24 UTC 2023]; root of context hierarchy
2023-01-05 11:06:23 [main] INFO org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping - Mapped "{[/error],methods=[],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public org.springframework.http.ResponseEntity> org.springframework.boot.autoconfigure.web.BasicErrorController.error(javax.servlet.http.HttpServletRequest)
2023-01-05 11:06:23 [main] INFO org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerMapping - Mapped "{[/error],methods=[],params=[],headers=[],consumes=[],produces=[text/html],custom=[]}" onto public org.springframework.web.servlet.ModelAndView org.springframework.boot.autoconfigure.web.BasicErrorController.errorHtml(javax.servlet.http.HttpServletRequest)
2023-01-05 11:06:24 [main] INFO org.springframework.web.servlet.handler.SimpleUrlHandlerMapping - Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2023-01-05 11:06:24 [main] INFO org.springframework.web.servlet.handler.SimpleUrlHandlerMapping - Mapped URL path [/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2023-01-05 11:06:25 [main] INFO org.springframework.web.servlet.handler.SimpleUrlHandlerMapping - Mapped URL path [/**/favicon.ico] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/trace],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/mappings],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/configprops],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/health],methods=[],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.HealthMvcEndpoint.invoke(java.security.Principal)
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/dump],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/env/{name:.*}],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EnvironmentMvcEndpoint.value(java.lang.String)
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/env],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/beans],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/info],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/metrics/{name:.*}],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.MetricsMvcEndpoint.value(java.lang.String)
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/metrics],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:38 [main] INFO org.springframework.boot.actuate.endpoint.mvc.EndpointHandlerMapping - Mapped "{[/autoconfig],methods=[GET],params=[],headers=[],consumes=[],produces=[],custom=[]}" onto public java.lang.Object org.springframework.boot.actuate.endpoint.mvc.EndpointMvcAdapter.invoke()
2023-01-05 11:06:41 [main] INFO org.springframework.jmx.export.annotation.AnnotationMBeanExporter - Registering beans for JMX exposure on startup
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Registering beans for JMX exposure on startup
2023-01-05 11:06:41 [main] INFO org.springframework.context.support.DefaultLifecycleProcessor - Starting beans in phase 0
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'requestMappingEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=requestMappingEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'environmentEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=environmentEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'healthEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=healthEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'beansEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=beansEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'infoEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=infoEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'metricsEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=metricsEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'traceEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=traceEndpoint]
2023-01-05 11:06:41 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'dumpEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=dumpEndpoint]
2023-01-05 11:06:42 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'autoConfigurationAuditEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=autoConfigurationAuditEndpoint]
2023-01-05 11:06:42 [main] INFO org.springframework.boot.actuate.endpoint.jmx.EndpointMBeanExporter - Located managed bean 'configurationPropertiesReportEndpoint': registering with JMX server as MBean [org.springframework.boot:type=Endpoint,name=configurationPropertiesReportEndpoint]
2023-01-05 11:06:46 [main] INFO org.apache.coyote.http11.Http11NioProtocol - Initializing ProtocolHandler ["http-nio-9020"]
2023-01-05 11:06:46 [main] INFO org.apache.coyote.http11.Http11NioProtocol - Starting ProtocolHandler ["http-nio-9020"]
2023-01-05 11:06:46 [main] INFO org.apache.tomcat.util.net.NioSelectorPool - Using a shared selector for servlet write/read
2023-01-05 11:06:47 [main] INFO org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainer - Tomcat started on port(s): 9020 (http)
2023-01-05 11:06:47 [main] INFO org.bahmni.module.feedintegration.Application - Started Application in 163.304 seconds (JVM running for 167.01)
2023-01-05 11:06:47 [main] INFO org.bahmni.module.feedintegration.Application - ************ Started Crater Atomfeed app **********
2023-01-05 11:06:50 [pool-3-thread-1] INFO org.bahmni.module.feedintegration.atomfeed.worker.PatientFeedWorker - Getting patient details ...
2023-01-05 11:06:52 [pool-3-thread-1] INFO org.bahmni.module.feedintegration.crater.CraterAPIClient - URI :http://crater-nginx/api/v1/customers
2023-01-05 11:06:53 [pool-3-thread-1] INFO org.bahmni.module.feedintegration.crater.CraterAPIClient - Status Code  : 200

```

 

 
**Running Bahmni On Docker (Troubleshooting Guide)**
