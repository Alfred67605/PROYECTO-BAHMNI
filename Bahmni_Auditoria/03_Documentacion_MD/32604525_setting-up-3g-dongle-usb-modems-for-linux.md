---
id: "32604525"
title: "Setting up 3G dongle/USB Modems for linux"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604525/setting-up-3g-dongle-usb-modems-for-linux"
version: 3
updated: "2015-11-12T14:03:52.843Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:02.799Z"
---

# Setting up 3G dongle/USB Modems for linux

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/32604525)  
> **Versión del documento:** v3 (2015-11-12T14:03:52.843Z) | **Autor/Editor:** Gurpreet Luthra

---

In some places, 3G USB modems might be only way to connect our servers to internet. Below is a guideline to install and use 3G dongles in linux.

 
Install wvdial to be used for dialing 3G modem
 

```
yum install wvdial
```

 
Now create a configuration file for wvdial in &lsquo;/etc/wvdial.conf'
 

```
    vi /etc/wvdial.conf
```

**Dialer Defaults**

```
[Dialer Defaults]
Init1 = ATZ
Init2 = ATQ0 V1 E1 S0=0 &C1 &D2
Init3 = AT+CGDCONT=1,"IP&rdquo;,""
Stupid Mode = 1
Modem Type = USB Modem
New PPPD = no
Modem = /dev/ttyUSB2
ISDN = 0
Auto Reconnect = 1
Phone = *99#
Username = 

Password = 
Baud = 460800
Carrier Check = no

```

Install required libraries and tools. 

```
yum install tcl usbutils libusb1-devel
```

 
Download **usb_modeswitch** and **usb_modeswitch_data**
 
**Download using wget command**

```
wget http://www.draisberghof.de/usb_modeswitch/usb-modeswitch-data-20151101.tar.bz2 #or latest
wget http://www.draisberghof.de/usb_modeswitch/usb-modeswitch-2.2.6.tar.bz2  #or latest
```

 
Extract and install`    `

```
tar xvfj usb-modewitch-2.2.6.tar.bz2
tar xvfj usb-modewitch-data-20151101.tar.bz2

cd usb-modewitch-2.2.6
make install

cd usb-modewitch-data-20151101
make install
```

 
`
``**usb_modeswitch** creates some udev rules to automatically change the mode of 3G dongle to act as usb_modem`Now plug in your 3G dongle, it should automatically be detected.
 

```
     dmesg | grep tty   # should show something like 'GSM modem (1-port) converter now attached to ttyUSB0'
     sudo wvdial &

```

 
Now this should start dialing via 3G modem, and internet should be started.

 
 
**For more info - [http://www.draisberghof.de/usb_modeswitch/](http://www.draisberghof.de/usb_modeswitch/)**
