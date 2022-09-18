---
sidebar_position: 4
---

# Structure

This page informs you about the folder-structure of NoobCloud:

- `configs` - The folder containing all config-files
    - `config.yml` - The file containing all settings for the cloud
    - `game-groups.yml` - The file storing all game-groups, do not touch this file
    - `proxy-groups.yml` - The file storing all proxy-groups, do not touch this file
- `libraries` - The file containing all important jar files
    - `minestom.jar` - The Minestom jar file which you have to place in this folder, read more about this in step 4 of the [installation](/docs/noobcloud-setup/installation)
    - `NoobCloudPlugin.jar` - This is the plugin for NoobCloud which will be copied in the plugin/extensions folder, it creates a connection to the cloud and will handle packets
    from NoobCloud. It is also responsible for the API.
    - `velocity.jar` - The Velocity jar file which you have to place in this folder, read more about this in step 4 of the [installation](/docs/noobcloud-setup/installation)
- `logs` - The folder containing all log-files from the cliud
- `temp` - The folder containing all running servers
    - `game` - The folder containing all running game servers sorted by their group
    - `proxy` - The folder containing all running proxy servers sorted by their group
- `templates` - The folder containing all templates
    - `game` - The folder containing all game templates sorted by their group
    - `proxy` - The folder containing all proxy templates sorted by their group