---
sidebar_position: 3
---

# Servers

## Server Data

Using NoobCloudAPI you can easily obtain information about a `Server`.
Each `Server` that was startet by NoobCloud can be listed by calling:
```java
List<Server> servers = NoobCloudAPI.getInstance().getAllServers();
List<Server> gameServers = NoobCloudAPI.getInstance().getAllGameServers();
List<Server> proxyServers = NoobCloudAPI.getInstance().getAllProxyServers();
```

### Using GameStates

A `Server` can be characterised more precisely by checking its `GameState` with ```Server#getGameState()```. The GameStats `AVAILABLE`, `COUNTDOWN`, `INGAME`, `ENDING` are representing Minestom Servers and `PROXY` is the `GameState` that all proxy servers receive at start-up. You can change the `GameState` using ```Server#setGameState(GameState gameState)``` and listen to a change through the `ServerChangeGameStateEvent`. Note: There are separate ServerChangeGameStateEvents for Minestom and Velocity.

### Handling motds

You can get the motd of a `Server` with ```Server#getMotd``` or ```NoobCloudAPI.getInstance().getMotd(String serverName)```. With ```Server#setMotd``` or ```NoobCloudAPI.getInstance().setMotd(String serverName, String motd)``` you can modify the motd.

### Obtaining Servers

Each `Server` holds a unique id, which can be accessed with ```Server#getUUID();```. The UUID or the name of a `Server` can also be used to obtain a `Server` object:
```java
Optional<Server> server = NoobCloudAPI.getInstance().getServerByName(String name);
Optional<Server> server = NoobCloudAPI.getInstance().getServerByUUID(UUID uuid);
// The server is online if the Optional returned by this methods is present.
```
Moreover, you are able to get port and online count of a `Server`.

## Operating with Servers

A `Server` can be forced to start and stop using NoobCloudAPI:
```java
NoobCloudAPI.getInstance().startServer(String groupName)
NoobCloudAPI.getInstance().stopServer(String name)
```

Furthermore, you can send specific information to a server by calling ```Server#sendServerMessage(List<String> message)```. You can receive this messages sent to a server by listening to the `ServerMessageEvent`. Note: There are separate ServerMessageEvents for Minestom and Velocity.