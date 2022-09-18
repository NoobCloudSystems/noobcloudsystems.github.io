---
sidebar_position: 3
---

# Security

The default port NoobCloud runs on is `50000`. You can change this value in the `config.yml`. I highly recommend closing this port in your firewall.
Without closing it, **anybody** can theoretically send packets to the cloud and, for example, start or stop servers.
I will definitely implement security checks for all incoming connections very soon, but it is always a good idea and recommended to close the port even when the cloud itself has security checks.

**TL;DR: Please close the port of NoobCloud!**
