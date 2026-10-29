---
id: "15597584"
title: "Network / Infrastructure Related Problems"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/15597584/network-infrastructure-related-problems"
version: 3
updated: "2015-11-10T10:31:00.481Z"
author: "Gurpreet Luthra"
category: "Manual_Implementador_Sub_Sub"
download_date: "2026-10-20T21:06:06.974Z"
---

# Network / Infrastructure Related Problems

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/15597584)  
> **Versión del documento:** v3 (2015-11-10T10:31:00.481Z) | **Autor/Editor:** Gurpreet Luthra

---

**Network Card replacement**

- Shut the system down. Replace the card physically and start the machine.
- ifconfig would not show up the new interface. If it shows up that you might be all good and skip next steps.
- ifconfig -a . Find out the new interface that has been created for the new card. Say this is eth1. 
- Open up a file /etc/sysconfig/network-scripts/ifcfg-eth1. 
- The file should be similar to other interface file, if exists, say ifcfg-eth0. It's contents would look like 

```
DEVICE=eth1
BOOTPROTO=dhcp
HWADDR=00:08:74:46:D7:E5
ONBOOT=yes
DHCP_HOSTNAME=delllap.jesnet
TYPE=Ethernet
```

You can find details of all possible configurations in the CentOS manual.

- 
Then restart the network service. service network restart.

- ifconfig should now show up the new interface eth1.

If the interface names are not coming up correctly, you might want to update the 

```
/etc/udev/rules.d/70-persistent-net.rules
```

Refer to [http://www.linuxfromscratch.org/blfs/view/development/chapter07/network.html](http://www.linuxfromscratch.org/blfs/view/development/chapter07/network.html)

Further reading (just in case) : [http://jeeva.us/Linux/Network](http://jeeva.us/Linux/Network)
