---
sidebar_position: 6
---

# Configuration

NoobCloud has some configuration files where you can adjust various values. All config-files are located in the `configs`-folder.

## config.yml

The default config looks like this, it is self-explanatory:
```yml title="configs/config.yml"
config:
  address: '127.0.0.1'
  port: 50000
  proxyStartPort: 25565
  gameStartPort: 30000
  javaPath: 'java'

playerDatabase:
  enabled: false
  host: 'localhost'
  port: 3306
  database: 'noobcloud'
  username: 'username'
  password: 'password'
```

In the section `playerDatabase` you can configure the SQL-Database where the cloud stores the names of all connected players and their uuid. This is useful if you
want to access the uuid or the name of an offline player via the API. You can disable it, but then you can't use these API-features.

## game-groups.yml

The default game-group config looks like this, it is self-explanatory:
```yml title="configs/game-groups.yml"
games:
  - name: lobby
    memory: 512
    minAmount: 1
    maxAmount: 5
    startPlayerCount: 10
    lobby: true
```
- `minAmount`: The minimum amount of servers of this group
- `maxAmount`: The maximum amount of servers of this group
- `startPlayerCount`: The amount of players which have to be on a server of this group so that a new server will be started
- `lobby`: The boolean indicating whether this group is a lobby-group, this means that when a player joins he will only be sent to these lobby-groups

## proxy-groups.yml

```yml title="configs/proxy-groups.yml"
proxies:
  - name: proxy
    memory: 256
    minAmount: 1
    maxAmount: 1
    startPlayerCount: -1
```
- `minAmount`: The minimum amount of servers of this group
- `maxAmount`: The maximum amount of servers of this group
- `startPlayerCount`: The amount of players which have to be on a server of this group so that a new server will be started