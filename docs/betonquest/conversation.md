---
title: 💬 Conversation
id: conversation
---

## Dialog IO

:::info Notice
Dialog IO lets you create interactive conversations with NPCs.  
This system is available from **Paper 1.21.6+ (v1.4.0+)**.

Make sure to check your `config.yml` for full configuration options.
:::

### Configuration (config.yml)

```yaml
conversation:
  dialog:
    layout: FULL_BODY
    close-button:
      enabled: true
      text: "<red>Close"
      close-with-escape: true
````

---

### Layout Types

| Type        | Description                             |                                                  |
|-------------|-----------------------------------------|--------------------------------------------------|
| `NPC_TITLE` | Minimal dialog showing only NPC name    | ![NPC\_TITLE example](/static/img/npc_title.png) |
| `FULL_BODY` | Full dialog with images and extended UI | ![FULL\_BODY example](/static/img/full_body.png) |

---

### Close Button Options

| Option              | Description                          |
|---------------------|--------------------------------------|
| `enabled`           | Enables or disables the close button |
| `text`              | Text shown on the close button       |
| `close-with-escape` | Allows closing dialog using ESC key  |

---

### Features

* Fully customizable NPC conversations
* Layout-based dialog system (`NPC_TITLE`, `FULL_BODY`)
* ESC key support for closing dialogs
* Lightweight configuration via `config.yml`

---

:::tip Version Info
Requires Paper 1.21.6 or higher.
Older versions are not supported due to Dialog API limitations.
:::
