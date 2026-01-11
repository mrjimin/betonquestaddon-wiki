---
sidebar_position: 2
---

# Configuration

This page provides a detailed overview of the [config.yml](https://github.com/mrjimin/BetonQuestAddon/blob/master/src/main/resources/config.yml).

:::danger[Required Action]
To ensure proper integration with **BetonQuestAddon**, you must disable the following setting in your `plugins/BetonQuest/config.yml` file.
:::

```yaml title="yourServer/plugins/BetonQuest/config.yml"
# Change this value to false
hook:
  craftengine: true
  itemsadder: true
  nexo: true
```
:::tip
**Please set the following options to `false` for the plugins you are using!** This prevents conflicts between the core plugin and BetonQuestAddon.
:::