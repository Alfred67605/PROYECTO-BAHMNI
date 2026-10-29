---
id: "22380617"
title: "SetUp Oviyam2"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/22380617/setup-oviyam2"
version: 17
updated: "2016-07-14T05:38:14.605Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:27.525Z"
---

# SetUp Oviyam2

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/22380617)  
> **Versión del documento:** v17 (2016-07-14T05:38:14.605Z) | **Autor/Editor:** Gurpreet Luthra

---

**This page and steps below are deprecated and not required. We don't install Oviyam2 separately now in Bahmni. dcm4chee is embedded in Bahmni installer as an optional installation component. Please see this document: [Bahmni Advanced Installation](/wiki/spaces/BAH/pages/35291242/Install+Bahmni+on+CentOS+Advanced+Installation+Options).**

 

- 
```
If oviyam2 to be installed on tomcat only then follow below instructions else follow [http://www.dcm4che.org/confluence/display/OV/Oviyam+Installation](http://www.dcm4che.org/confluence/display/OV/Oviyam+Installation)
```

- 
```
Download [Oviyam-2.1-bin.zip](http://sourceforge.net/projects/dcm4che/files/Oviyam/2.1/Oviyam-2.1-bin.zip/download) from the link below
```

```
[http://sourceforge.net/projects/dcm4che/files/Oviyam/2.1/](http://sourceforge.net/projects/dcm4che/files/Oviyam/2.1/)
```

- 
```
Extract the war file downloaded using the following command

```
 
```
jar -xvf filename.war
```

- 
```
Open the extracted source code in IDE
```

- 
```
In web.xml 
```

```
4.1 comment the following
```

```

```

```
     
```

```
        dispatcher
```

```
        Only allows users with the role WebAdmin to access the Archive Web Administration pages
```

```
        *.jsp
```

```
        *.html
```

```
        *.do
```

```
        /oviyam
```

```
        GET
```

```
        POST
```

```
    
```

```
    
```

```
        *
```

```
    
```

```
 
```

```
4.2 uncomment the following 
```
 
```
 
```

```
             ConfigurationServlet 
```

```
             /[configuration.do](http://configuration.do/) 
```

```

```

```
 
```

```
             ConfigurationServlet 
```

```
             in.raster.oviyam.servlet.ConfigurationServlet 
```

```

- 
```
In config.html, remove the if else condition below and just use the command $( "#tabs" ).tabs();
```
 
```
if(role == 'Admin') {
 $( "#tabs" ).tabs();
} else {
 $( "#tabs" ).tabs().tabs( "remove", 0);
}
```

```
Reason : We are not using any login credentials and by default we need to see all the tabs. But as per the code, if you logged in as admin then only you will be able to see all the tabs.
```

- 
```
Build war file again using IDE.
```

- 
```
Copy the war file to tomcat/webapps
```

- 
```
Copy the following line to apache-tomcat-8.0.12/bin/setenv.sh: 
```
 
CLASSPATH="/home/bahmni/apache-tomcat-8.0.12/webapps/oviyam2/WEB-INF/lib/*"

- if it is still not working do the following:

```
Copy the files from Oviyam2.1-bin/tomcat to tomcat/lib
```

 

- 
Access the Patient Order using the below URL template
 
[http://10.0.0.30:8080/oviyam2/viewer.html?patientID=175903&accessionNumber=ACCNO004999&serverName=dcm4chee](http://10.0.0.30:8080/oviyam2/viewer.html?patientID=175903&accessionNumber=ACCNO004999&serverName=dcm4chee)

Below are the common issues with Oviyam to display any image.

- 
For this error please make sure you have the lib path set to tomcat CLASSPATH
 
java.util.NoSuchElementException
 javax.imageio.spi.FilterIterator.next(ServiceRegistry.java:825)
 javax.imageio.ImageIO$ImageReaderIterator.next(ImageIO.java:528)
 javax.imageio.ImageIO$ImageReaderIterator.next(ImageIO.java:513)
 in.raster.oviyam.servlet.WadoServlet.doGet(WadoServlet.java:188)
 javax.servlet.http.HttpServlet.service(HttpServlet.java:618)
 javax.servlet.http.HttpServlet.service(HttpServlet.java:725)
 org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)

- 
For this error make sure you have the jai-image-1.1.jar in tomcat/lib  
 
java.lang.NullPointerException from ImageReader.java of oviyam.raster.in

```
java.lang.ExceptionInInitializerError
	org.dcm4cheri.imageio.plugins.DcmImageReaderSpi.createReaderInstance(DcmImageReaderSpi.java:124)
	javax.imageio.spi.ImageReaderSpi.createReaderInstance(ImageReaderSpi.java:320)
	javax.imageio.ImageIO$ImageReaderIterator.next(ImageIO.java:529)
	javax.imageio.ImageIO$ImageReaderIterator.next(ImageIO.java:513)
	in.raster.oviyam.servlet.WadoServlet.doGet(WadoServlet.java:188)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:618)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:725)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
```

- 
For this error Cop files in [Oviyam-2.1-bin](http://sourceforge.net/projects/dcm4che/files/Oviyam/2.1/)/tomcat to tomcat/lib
 
```
java.lang.NoClassDefFoundError: Could not initialize class org.dcm4cheri.imageio.plugins.DcmImageReader
	org.dcm4cheri.imageio.plugins.DcmImageReaderSpi.createReaderInstance(DcmImageReaderSpi.java:124)
	javax.imageio.spi.ImageReaderSpi.createReaderInstance(ImageReaderSpi.java:320)
	javax.imageio.ImageIO$ImageReaderIterator.next(ImageIO.java:529)
	javax.imageio.ImageIO$ImageReaderIterator.next(ImageIO.java:513)
	in.raster.oviyam.servlet.WadoServlet.doGet(WadoServlet.java:188)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:618)
	javax.servlet.http.HttpServlet.service(HttpServlet.java:725)
	org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52)
```
