---
id: "3225583617"
title: "Running Bahmni Docker using Colima"
url: "https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3225583617/running-bahmni-docker-using-colima"
version: 14
updated: "2023-11-28T06:12:10.608Z"
author: "Vijay Anand Shanmughadass"
category: "Instalacion_Sub"
download_date: "2026-10-20T21:02:10.359Z"
---

# Running Bahmni Docker using Colima

> **Fuente Oficial:** [Atlassian Confluence Wiki - Bahmni](https://bahmni.atlassian.net/wiki/spaces/BAH/pages/3225583617)  
> **Versión del documento:** v14 (2023-11-28T06:12:10.608Z) | **Autor/Editor:** Vijay Anand Shanmughadass

---

Colima is an alternative to Docker, which has gained popularity due to recent license changes for **Docker Desktop**. The following page documents the steps needed to run Bahmni using Colima. 

Read more about Colima here: [https://github.com/abiosoft/colima](https://github.com/abiosoft/colima) 

Read more about Docker Desktop license changes here: [https://www.docker.com/blog/updating-product-subscriptions/](https://www.docker.com/blog/updating-product-subscriptions/) 

## Docker Desktop is licensed: 

Docker Desktop is a licensed software. It is licensed under the Docker Subscription Service Agreement. The agreement states that Docker Desktop is free for personal use, education, and non-commercial open source projects. Otherwise, it requires a paid subscription for professional use. Paid subscriptions are also required for government entities.

The following are the requirements for free use of Docker Desktop:

- 
Individuals

- 
Non-commercial open source developers

- 
Students and educators

- 
Small businesses of fewer than 250 employees AND less than $10 million in revenue

## Alternatives: 

If you want to use Docker CLI/Engine for free, you can use Colima or Rancher. Both projects are free to use and offer similar functionality. 

- 
Docker CLI/Engine is the command-line interface for Docker. It is free to use.

- 
Colima is an open source project that allows you to run Docker Engine in a virtual machine. It is free to use.

- 
Rancher is a commercial project that provides a web-based interface for managing Docker Engine. However, Rancher also offers a free community edition that allows you to use Docker Engine for free.

## Installing Colima:

Colima is an open source project that provides a way to run Docker Engine on macOS and Linux without the need for Docker Desktop. It is a lightweight alternative to Docker Desktop that offers similar functionality.

To use Docker Engine with Colima, you will need to install the following:

- 
Docker Engine

- 
Colima

You can install Docker Engine using the following commands:

- 
macOS: `brew install docker`

- 
Linux: `apt install docker`

You can install Colima using the following commands:

- 
macOS: `brew install colima`

- 
Linux: `pip install colima`

Once you have installed Docker Engine and Colima, you can start using Docker by running the following command:

`colima start`

This will start a Docker Engine VM in the background. You can then run Docker commands by using the `docker` command.

## Configuring Colima for Bahmni:

Update the CPU settings and Memory settings as follows: 

`colima start --edit`

```
# Number of CPUs to be allocated to the virtual machine.
# Default: 2
cpu: 8

# Size of the memory in GiB to be allocated to the virtual machine.
# Default: 2
memory: 12
```

## Running Docker Compose:

When using Colima, the Docker Compose commands remain largely consistent with standard Docker Compose commands. Colima leverages the Docker runtime under the hood, ensuring compatibility with existing Docker workflows. For example

```
docker compose version

docker compose --profile 
 up --pull=always -d

docker compose --profile  down -v
```

Furthermore, the current Docker deployment projects should continue to function seamlessly as before.

```
https://github.com/Bahmni/bahmni-docker

https://github.com/Bahmni/snomed-bahmni-docker
```

## Useful References:

[https://www.swyx.io/running-docker-without-docker-desktop](https://www.swyx.io/running-docker-without-docker-desktop) 

## Troubleshooting:

- 
If using Mac M1, when we run the following command

```
brew install docker
```

if we get the following error, 

```
Warning: Treating docker as a formula. For the cask, use homebrew/cask/docker
Error: Cannot install under Rosetta 2 in ARM default prefix (/opt/homebrew)!
To rerun under ARM use:
    arch -arm64 brew install ...
To install under x86_64, install Homebrew into /usr/local.
```

use the following command as suggested

```
arch -arm64 brew install docker
arch -arm64 brew install colima
```

Again if we get the following error

```
Warning: Treating docker as a formula. For the cask, use homebrew/cask/docker
Error: No developer tools installed.
Install the Command Line Tools:
  xcode-select --install
```

use the following command as suggested

```
xcode-select --install
```

- If you encounter the following problem while executing Docker commands:

```
Cannot connect to the Docker daemon at unix:///Users//.colima/default/docker.sock. Is the docker daemon running?
```

you can resolve it by initiating Colima with the command:

```
colima start --runtime docker
```

- If using Mac M1 and your docker is running on the old version of “docker-compose“ and unable to run “docker compose”, follow the instructions given here:

Uninstall docker-compose CLI plugin

[https://docs.docker.com/compose/install/uninstall/](https://docs.docker.com/compose/install/uninstall/) 

- 
Installing docker compose CLI plugin

[https://maksimrv.medium.com/note-install-docker-compose-plugin-on-m1-a73ce97fd8f8](https://maksimrv.medium.com/note-install-docker-compose-plugin-on-m1-a73ce97fd8f8)  

 
**Running Bahmni on Docker**
