---
id: "20643844"
title: "Linux commands and utilities"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643844/linux-commands-and-utilities"
version: 11
updated: "2016-08-16T06:59:45.240Z"
author: "Arjun"
category: "Manual_Implementador_Sub_Sub_Sub_Sub"
download_date: "2026-10-20T21:06:00.452Z"
---

# Linux commands and utilities

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/20643844)  
> **Versión del documento:** v11 (2016-08-16T06:59:45.240Z) | **Autor/Editor:** Arjun

---

This is a list of common CentOS Linux commands and utilities a Bahmni implementer should know for daily system administration. There is plenty of materials online that would help you to master these commands and its various options.  This list will only tell you what commands you should start looking up.

| Command | Description | Example | Read More |
| --- | --- | --- | --- |
| ls | List files in current directory | ls -al | [http://www.tecmint.com/15-basic-ls-command-examples-in-linux/](http://www.tecmint.com/15-basic-ls-command-examples-in-linux/) |
| touch | Creates an empty file |   |   |
| cat | Shows the contents of a file | cat hello.txt |   |
| man | Show help for a command | man cat |   |
| chmod | Change the file access permissions to give read/write/execute permissions to a file or files | chmod +x myscript.sh | [https://en.wikipedia.org/wiki/Chmod](https://en.wikipedia.org/wiki/Chmod) |
| chown | Change the file owner / group owner | chown bahmni:bahmni -R /var/www/ | [http://www.linfo.org/chown.html](http://www.linfo.org/chown.html) |
| chgrp | Change the group ownership |   |   |
| grep | Finds matching data in text inputs using regular expressions | cat hello.txt | grep "bahmni" | [http://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples/](http://www.thegeekstuff.com/2009/03/15-practical-unix-grep-command-examples/) |
| pwd | Shows the current directory path (pwd = present working directory) |   |   |
| cd | Change into the specified directory | cd /home |   |
| tail | Display the last few contents of a text file. Useful for seeing log files. | tail -f /var/log/openmrs/openmrs.log | [http://www.thegeekstuff.com/2009/08/10-awesome-examples-for-viewing-huge-log-files-in-unix/](http://www.thegeekstuff.com/2009/08/10-awesome-examples-for-viewing-huge-log-files-in-unix/) |
| cp | Copies a file from one location to another | cp abc.txt /home |   |
| mv | Moves a file to another location. Also used for renaming a file. | mb abc1.txt abc2.txt |   |
| rm | Delete a file or a directory | rm /tmp/hello |   |
| mkdir | Create a new directory | mkdir music |   |
| find | Used for searching files matching a certain pattern. Can also be used to execute specific commands on files which match a certain pattern | find -name "*.mp3" | [http://www.tecmint.com/35-practical-examples-of-linux-find-command/](http://www.tecmint.com/35-practical-examples-of-linux-find-command/) |
| ps -ef | Print all currently running processes. | ps -ef | grep java | [https://www.digitalocean.com/community/tutorials/how-to-use-ps-kill-and-nice-to-manage-processes-in-linux](https://www.digitalocean.com/community/tutorials/how-to-use-ps-kill-and-nice-to-manage-processes-in-linux) |
| df | Print disk space usage (short for 'disk free') |   |   |
| du | Print disk usage report for current directory | du -sh | [http://www.tecmint.com/check-linux-disk-usage-of-files-and-directories/](http://www.tecmint.com/check-linux-disk-usage-of-files-and-directories/) |
| clear | Clear the screen |   |   |
| tar | For creating or extracting tar files -xvf <filename.tar> extract tar file -cvf <filename.tar> compress files and folders -tvf archive.tar List all files in archive.tar verbosely. |   | [http://www.tecmint.com/18-tar-command-examples-in-linux/](http://www.tecmint.com/18-tar-command-examples-in-linux/) |
| yum | Manage installations of RPMs / softwares. | yum install bahmni-emr yum remove bahmni-emr yum info bahmni-emr | [https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Deployment_Guide/ch-yum.html](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Deployment_Guide/ch-yum.html) |
| kill | Terminate a process / Raise a Signal | kill -9 <pid> | [https://www.maketecheasier.com/kill-command-in-linux/](https://www.maketecheasier.com/kill-command-in-linux/) |
| ifconfig | Print network configuration / IP of the machine |   |   |
| scp | Secure copy of files (over SSH port) | scp -r foo [john@remotehost](mailto:your_username@remotehost.edu):/tmp | [http://www.hypexr.org/linux_scp_help.php](http://www.hypexr.org/linux_scp_help.php) |
| chkconfig | Updates and queries runlevel information for system services |   | [https://blog.sleeplessbeastie.eu/2012/07/07/centos-how-to-manage-system-services/](https://blog.sleeplessbeastie.eu/2012/07/07/centos-how-to-manage-system-services/) |
| service | Provide information on registered system services. | service bahmni-emr status service bahmni-emr stop service bahmni-emr start | [https://blog.sleeplessbeastie.eu/2012/07/07/centos-how-to-manage-system-services/](https://blog.sleeplessbeastie.eu/2012/07/07/centos-how-to-manage-system-services/) |
| whoami | Prints the details of the current user |   |   |
| useradd | Add user to system |   | [http://www.liquidweb.com/kb/how-to-add-a-user-and-grant-root-privileges-on-centos-6-5/](http://www.liquidweb.com/kb/how-to-add-a-user-and-grant-root-privileges-on-centos-6-5/) |
| passwd | Set password of the user |   |   |
| sudo | Run with root privilege | sudo service bahmni-emr stop | [https://www.garron.me/en/linux/visudo-command-sudoers-file-sudo-default-editor.html](https://www.garron.me/en/linux/visudo-command-sudoers-file-sudo-default-editor.html) |
| ssh | SSH to a remote machine | ssh root@192.133.8.10 | [http://support.suso.com/supki/SSH_Tutorial_for_Linux](http://support.suso.com/supki/SSH_Tutorial_for_Linux) |
| ping | Check if a Ping message can be sent over a network | ping www.google.com |   |
| crontab | Configure cron job (for scheduled tasks) | crontab -L | [https://www.pantz.org/software/cron/croninfo.html](https://www.pantz.org/software/cron/croninfo.html) |
| mount | Mount a disk (partition) on a particular path |   |   |
| umount | Un-mount a disk |   |   |
| vi | Editor for files | vi hello.txt | [http://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/](http://www.howtogeek.com/102468/a-beginners-guide-to-editing-text-files-with-vi/) [http://www.openvim.com/](http://www.openvim.com/) (Online VIM tutorial) |
| iptables | Firewall on Linux |   | [https://wiki.centos.org/HowTos/Network/IPTables](https://wiki.centos.org/HowTos/Network/IPTables) |
| history | List last / all executed commands |   | [http://www.tecmint.com/history-command-examples/](http://www.tecmint.com/history-command-examples/) |
| top | show processor and memory as being used and other information like running processes | top | [http://www.tecmint.com/12-top-command-examples-in-linux/](http://www.tecmint.com/12-top-command-examples-in-linux/) Further reading : htop : [http://www.tecmint.com/install-htop-linux-process-monitoring-for-rhel-centos-fedora/](http://www.tecmint.com/install-htop-linux-process-monitoring-for-rhel-centos-fedora/) |
| free | gives understanding of total available space of physical memory and swap memory | free -m | [http://www.tecmint.com/check-memory-usage-in-linux/](http://www.tecmint.com/check-memory-usage-in-linux/) |
