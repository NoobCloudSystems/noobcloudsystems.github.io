---
sidebar_position: 2
---

# Installation

Before installing, make sure to read and fulfill the [requirements](/docs/noobcloud-setup/requirements).

## Download and first start

Now you can follow these steps to install the cloud:
1. Download the [NoobCloud.zip](https://github.com/NoobCloudSystems/NoobCloud/releases/latest/download/NoobCloud.zip) file from GitHub.
2. Upload it to your server and unzip it, you can use `unzip` on Linux to do that.
3. Only on Linux: Make the start file executable - execute `chmod +x start.sh`.
4. Before starting the cloud, you have to place the velocity jar file named `velocity.jar` and a NoobCloud-compatible Minestom jar file named `minestom.jar` in this folder,
otherwise the cloud won't work properly. Download Velocity at [papermc.io](https://papermc.io/downloads#Velocity). For Minestom, take a look at the [NoobStom-Repository](https://github.com/NoobCloudSystems/NoobStom),
it is a template for a NoobCloud compatible Minestom server which you can download and use without editing the code. If you do want to make changes to the Minestom-server, clone this project and
build your own Minestom jar based on this template. Make sure to properly configure the **forwarding-secret**, as otherwise the servers may not start and you won't be able to connect to them.
5. Execute the `start.sh` on Linux by typing `./start.sh` or the `start.bat` on Windows by double-clicking it.

## Setup

By default, NoobCloud creates a proxy-group called `proxy` and a game-server- group called `lobby`.  
You can access a list of all commands by executing `help` in console. To learn more about these commands and all features, read the next section.