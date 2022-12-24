---
sidebar_position: 5
---

# Commands

This page informs you about all available commands of NoobCloud.

## Console-commands

- `help` - Gives you an overview of all commands
- `clear` - Clears the console
- `stop` - Stops the cloud and all servers
- `group` - Created, deletes or edits a group
    - `group create proxy <display> <static>` - Creates a proxy group
        - `display` - The name of the group
        - `static` - Indicates whether the group is static or not
    - `group create game <display> <lobby> <static>` - Creates a game group
        - `display` - The name of the group
        - `lobby` - Indicates whether the group is a lobby-group or not
        - `static` - Indicates whether the group is static or not
    - `group delete <display>` - Deletes a group
        - `display` - The name of the group
- `server` - Starts or stops a server
    - `server start <group>` - Starts a server
        - `group` - The name of the group
    - `server stop <display-id>` - Stops a server
        - `display-id` - The name of the server you want to stop, for example: `lobby-1`
- `screen <display-id/leave>` - Shows the console-output of a server
    - `display-id` - The name of the server you want to receive the console-output, for example: `lobby-1`
- `restart` - Restart a whole group
    - `group` - The name of the group
## Ingame-commands
- `/cloud` or `/noobcloud` - Gives you an overview of all commands, you need the permission `noobcloud.admin` to access the following commands:
    - `/cloud listGroups` - Gives you a list of all groups
    - `/cloud listServers` - Gives you a list of all servers
    - `/cloud start <group>` - Starts a server
        - `group` - The name of the group
    - `/cloud stop <display-id>`: Stops a server
        - `display-id` - The name of the server you want to stop, for example: `lobby-1`
    - `/cloud copy` - Saves the current state of the server as template for its group
- `/hub` or `/lobby` or `/l` - Sends the executor to a free lobby server