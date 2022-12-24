---
sidebar_position: 4
---

# Players

## CloudPlayer

A `CloudPlayer` represents a player who is currently online. NoobCloudAPI allows you to connect him to a `Server` and informs you about his current `Server`, his username and his `UUID`.

You can obtain a `CloudPlayer` by his name or his `UUID`:
```java
Optional<CloudPlayer> cloudPlayer = NoobCloudAPI.getInstance().getCloudPlayer(String username);
Optional<CloudPlayer> cloudPlayer = NoobCloudAPI.getInstance().getCloudPlayer(UUID uuid);
// The player is online if the Optional returned by this methods is present.
```
A list of all players can be accessed with ```NoobCloudAPI.getInstance().getAllPlayers()```.

You can connect a player to a server using ```CloudPlayer#connect(String serverName)```.

## UUID and Username

NoobCloudAPI stores the username and `UUID` of each player in a database assuming you enabled this feature in the `config.yml`(Read again the following explanation: [configuration](/wiki/noobcloud-setup/configuration#configyml)). This allows you to check whether a player has already been online on your server network. In addition, you can get the username of an offline player from their `UUID` and vice versa:
```java
Optional<String> username = NoobCloudAPI.getInstance().getUsernameByUUID(UUID uuid);
Optional<UUID> uuid = NoobCloudAPI.getInstance().getUUIDByUsername(String username);
// If the optional returned by these methods is empty, no player with this username/uuid has been online yet.
```