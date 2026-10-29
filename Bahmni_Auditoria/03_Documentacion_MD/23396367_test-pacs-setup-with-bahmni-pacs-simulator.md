---
id: "23396367"
title: "Test PACS Setup with Bahmni PACS Simulator"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/23396367/test-pacs-setup-with-bahmni-pacs-simulator"
version: 34
updated: "2022-08-02T07:55:25.466Z"
author: "Mohankumar Thangavel"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:04:27.994Z"
---

# Test PACS Setup with Bahmni PACS Simulator

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/23396367)  
> **Versión del documento:** v34 (2022-08-02T07:55:25.466Z) | **Autor/Editor:** Mohankumar Thangavel

---

If you are using dcm4chee, to both receive orders placed in Bahmni and receive images from modality, you don't really need to use this simulator. The flow for sending the orders can directly be tested by placing orders in Bahmni and seeing worklist items in dcm4chee. The flow of uploading the image can be tested by the dcmsnd utility provided by dcm4chee.
The simulator was used in one of the first implementations of Bahmni.

To test how modality polls DCM4CHEE to fetch the work list  [DVTK modality emulator](https://dvtk.org/) can be used. For the details of this emulator - [OpenMRS mentions this emulator](https://wiki.openmrs.org/download/attachments/60066031/Install%20Guide.pdf?version=2&modificationDate=1390595533000&api=v2). 

Refer [Radiology and PACS Integration](/wiki/spaces/BAH/pages/32014588/Radiology+and+PACS+Integration). Bahmni PACS module talks to modality while creating/modifying/cancelling orders, and expects the modality to send the images taken to a DICOM server (DCM4CHEE/Orthanc). To test any functionality in development/testing environments, we need a modality emulator that mimics this behaviour.

None of the modality emulators and HL7 simulators, we looked at, fit the bill. So we created an emulator for simulating this specific behaviour. [This](https://github.com/Bahmni/utilities/tree/master/Pacs_Simulator) is where you can find the code.

#### How it works

- Accepts order HL7 message (ORM^O01)
- Uploads one DICOM image, with certain DICOM tags modified (patient id, name, accession number, study id and study date). This enables a DICOM viewer (Oviyam2) fetch the image from DICOM server (DCM4CHEE/Orthanc) for that patient and order.
- Returns acknowledgement to the caller.

#### Instructions to run the Bahmni PACS emulator.

- Checkout [code](https://github.com/Bhamni/utilities/tree/master/Pacs_Simulator) from repo .
- Download [https://sourceforge.net/projects/dcm4che/files/dcm4che2/2.0.28/](https://sourceforge.net/projects/dcm4che/files/dcm4che2/2.0.28/) and extract it in /var/lib/bahmni folder.
- Build [Bahmni PACS emulator](https://github.com/Bhamni/utilities/tree/master/Pacs_Simulator) using [build.sh](https://github.com/Bhamni/utilities/blob/master/Pacs_Simulator/build.sh)
- You can configure the emulator to run
at a particular port,
- customize the timeout,
- customize which DCM4CHEE/Orthanc instance to upload the DICOM file to.

- Run using [run.sh](https://github.com/Bhamni/utilities/blob/master/Pacs_Simulator/run.sh). 
By default the emulator runs on port number 9000, with a timeout of 30 secs. It will try to upload DICOM image to DCM4CHEE@192.168.33.10:11112
- 
A sample customized way to run the emulator, 

```
java -jar target/pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 8087 20000 orthanc http://172.18.2.98:8042/instances
java -jar target/pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 8087 20000 dcm4chee DCM4CHEE@192.168.33.10:11112
```

- Update the modality's ip in 'modaliity' table to point to the machine which is running the simulator.
- 
In the above examples, the location of the "dcmsnd" script is assumed to be at **"/var/lib/bahmni/dcm4che-2.0.28/bin/". **However, you may override that with system parameter (dcmsnd_path) passed like below

```
java -Ddcmsnd_path=/path-to-dcmsnd-cmd/ -jar target/pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 8087 20000 dcm4chee DCM4CHEE@192.168.33.10:11112
```

#### Different Modes to run the Simulator

- Default (use run.sh)
Runs on port 9000. Accepts Order message, uploads to Dcm4chee at DCM4CHEE@192.168.33.10:11112 and returns an acknowledgement message.

- 
Post to specific Orthanc/Dcm4chee

```
java -jar target/pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 8080 30000 orthanc http://myorthancUrl:8051/instances
java -jar target/pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 8087 20000 dcm4chee DCM4CHEE@mydcm4cheeUrl:11113
java -jar pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 9000 30000 dcm4chee DCM4CHEE@172.18.2.27:11112 > /dev/null &
```

Runs on specified port (8080 in above example), timeout is 30000 milleseconds, uploads to Orthanc at [http://myorthancUrl:8051/instances](http://myorthancurl:8051/instances) and returns an acknowledgement message.

- 
Do not post to Orthanc.

```
 java -jar target/pacssimulator-1.0-SNAPSHOT-jar-with-dependencies.jar 8080 30000
```

[*Useful if you do not have Orthanc setup*]

Runs on specified port (8080 in above example), timeout is 30000 milleseconds, uploads to Orthanc at [http://myorthancUrl:8051/instances](http://myorthancurl:8051/instances) and returns an acknowledgement message.

Download the utility
 
You can download a binary jar of the utility from the GitHub repo [here](https://github.com/Bahmni/utilities/releases/tag/v1.0.0).

> wget [https://github.com/Bahmni/utilities/releases/download/v1.0.0/pacssimulator-1.0.0-jar-with-dependencies.jar](https://github.com/Bahmni/utilities/releases/download/v1.0.0/pacssimulator-1.0.0-jar-with-dependencies.jar)

#### Uploading DICOM File directly to DCM4CHEE

One disadvantage of running the simulator is that, the order will not appear in the "Modality Worklist" of DCM4CHEE. When configured properly, Bahmni pacs-integration will send the ORM message to the simulator directly. Follow the steps below if you want to have the order appear in DCM4CHEE modality worklist and if you subsequently want to upload a DICOM file against that order (Accession) 

- Follow the steps described [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014588/Radiology+and+PACS+Integration), as well as [setting up PACS-Integration module](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36700254/Setup+PACS+Integration+module), and mapping the [orderable concept codes](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/24969224/Map+PACS+procedure+codes). 
- If you now order the relevant "Radiology" order (e.g. CHEST PA) it should appear in the DCM4CHEE's modality worklist. If not, go back and try to get the configuration right - mapped codes, Bahmni pacs-integration, DCM4CHEE configuration especially setup as modality worklist.
You can see the log of pacs integration module (**/var/log/pacs-integration/pacs-integration.log) **and DCM4CHEE log (**/var/lib/bahmni/dcm4chee-2.18.1-psql/server/default/log/server.log)**
- You may also find useful information in Bahmni pacs integration's postgres database table **bahmni_pacs.failed_events**

- 
Once you have the order showing in the "Modality Worklist", generate a DICOM file first using the same Simulator jar above. Identify the patientId, givenname, familyname and the accession number first. 

```
> java -cp pacssimulator-1.0.0-jar-with-dependencies.jar org.bahmni.pacssimulator.DicomFileGenerator GAN123 Gajendra Singh ORD-309 [dicom file path | 0-1]
```

The above should tell you the location of the generated file.  You can then take the file and use "dcmsnd" command manually to send the file. But before that

- 
In DCM4CHEE, create an AE (Application Entity) with name "DCMSND" and port "11113" (can be anything, make sure AE and port is not already in use)

- Run the following command with your generated file

```
./dcmsnd  -stgcmt -L 
```

Note, ensure the correct path of the "dcmsnd" command. Example

```
./dcmsnd DCM4CHEE@192.168.33.10:11112 /tmp/3bd0d47c-7794-4095-9170-357591454cbd.dcm -stgcmt -L DCMSND:11113
```

Check the output for potential errors. It might show errors like "A801H" - Google to understand what that means. Resolve the errors first - usually dcmsnd manual helps.  

- Now check either in DCM4CHEE web interface "Folder" tab &rarr; search for study. Or in Oviyam ([https://your-server-address/oviyam2/](https://192.168.33.93/oviyam2/) &rarr; search. You will see a small image in the OVIYAM2 viewer. From Bahmni Patient Dashboard, clicking the Radiology Order, should launch the full OVIYAM2 viewer.   

## Using the docker image of PACS Simulator

The PACS Simulator has been dockerized and is uploaded to docker hub [here.](https://hub.docker.com/r/bahmni/pacs-simulator) You can run the image in two ways.

- **Listen for orders and post DICOM image to PACS Server**
This is done using [docker-compose](https://github.com/Bahmni/bahmni-package/blob/master/bahmni-docker/docker-compose.yml) where pacs-integration service and dcm4chee are running.

- **Manually upload DICOM image for a Modality Worklist item of DCM4CHEE**

Follow the steps described [here](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32014588/Radiology+and+PACS+Integration), as well as [setting up PACS-Integration module](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/36700254/Setup+PACS+Integration+module), and mapping the [orderable concept codes](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/24969224/Map+PACS+procedure+codes). 
- If you now order the relevant "Radiology" order (e.g. CHEST PA) it should appear in the DCM4CHEE's modality worklist. If not, go back and try to get the configuration right - mapped codes, Bahmni pacs-integration, DCM4CHEE configuration especially setup as modality worklist.
You can see the log of pacs integration module (**/var/log/pacs-integration/pacs-integration.log) **and DCM4CHEE log (**/var/lib/bahmni/dcm4chee-2.18.1-psql/server/default/log/server.log)**
- You may also find useful information in Bahmni pacs integration's postgres database table **failed_events**

- Now identify the patientId, givenname, familyname and the accession number first. 
- 
Run the following command with the above values replaced.

```
docker run --rm -it bahmni/pacs-simulator ./upload.sh 
    
```

Example command would look like: 
` *docker run --rm -it bahmni/pacs-simulator ./upload.sh [DCM4CHEE@](mailto:DCM4CHEE@host.docker.intern)192.168.33.10:11112 GAN203010 Test Radiology ORD-330* `

More Instruction
 
You can find detailed instructions on building the simulator and options in the README file here [https://github.com/Bahmni/utilities/tree/master/Pacs_Simulator](https://github.com/Bahmni/utilities/tree/master/Pacs_Simulator)

On this Page
