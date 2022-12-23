---
sidebar_position: 2
---

# Groups

## Group Data

Every `Server` started by NoobCloud is subject to a certain `Group`. Using NoobCloudAPI you can easily obtain information them.
```java
List<Group> groups = NoobCloudAPI.getInstance().getAllGroups();
List<Group> gameGroups = NoobCloudAPI.getInstance().getAllGameGroups();
List<Group> proxyGroups = NoobCloudAPI.getInstance().getAllProxyGroups();
```
To get the number of players who are online in a `Group`, you can use ```NoobCloudAPI.getInstance().getGroupOnlineCount(String groupName, GroupType groupType)```

### Using GroupTypes

A `Group` can be characterised more precisely by checking its `GroupType` with ```Group#getGroupType()```. You can also check if the group is a lobby group by using ```Group#isLobby()```. When joining the server, players are automatically connected to such servers.
With ```Group#isStatic()``` you can check if the group is static. Servers in this group will not be deleted when the cloud is stopped.

### Obtaining Groups

```java
String groupName = Server#getGroupName();
GroupType groupType = Server#getGroupType();
Optional<Group> group = NoobCloudAPI.getInstance().getGroup(groupName);
// The group is existing if the Optional returned is present.
```