---
title: 🛠 Commands
id: commands
---

# Commands

BetonQuestAddon provides administrative commands for managing configuration and viewing plugin information.

:::info
All commands require the permission `betonquestaddon.command`.  
Default access is restricted to OP players.
:::

---

## Command Overview

| Command | Description |
|--------|-------------|
| `/betonquestaddon reload` | Reload plugin configuration |
| `/betonquestaddon info` | Display plugin and server information |
| `/bqa reload` | Alias for reload |
| `/bqa info` | Alias for info |

---

## Base Command

```text
/betonquestaddon
```

**Alias:**

```text
/bqa
```

This is the root command for all BetonQuestAddon actions.

---

## Reload Command

```text
/betonquestaddon reload
/bqa reload
```

### Description

Reloads the plugin configuration without restarting the server.

### Behavior

* Re-reads `config.yml`
* Applies updated settings immediately
* Does not require server restart

:::tip
Use this command after modifying configuration files.
:::

### Permission

```text
betonquestaddon.command
```

### Default

```text
OP
```

---

## Info Command

```text
/betonquestaddon info
/bqa info
```

### Description

Displays current plugin and server information.

### Output Includes

* Plugin version
* BetonQuest version
* Server version (Paper / Fork)
* Hooked plugins

### Permission

```text
betonquestaddon.command
```

### Default

```text
OP
```

---

## Permission Reference

| Permission                | Description                         | Default |
|---------------------------|-------------------------------------|---------|
| `betonquestaddon.command` | Allows usage of all plugin commands | OP      |

---

## Support

If you need support, please provide:

* Error logs
* Output from `/bqa info`

This will help us diagnose issues more quickly and accurately.

---

:::note
Use `/bqa` for faster access during development and testing.
:::