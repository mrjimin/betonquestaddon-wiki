---
title: 💬 Conversation
id: conversation
---

## Dialog IO

:::info Notice
Dialog IO lets you create interactive conversations with NPCs.  
This system is available from **Paper 1.21.8+ (v1.4.2+)**.

Make sure to check your `config.yml` for full configuration options.
:::

### Configuration (config.yml)

```yaml
conversation:
  # using "bqa_dialog"
  dialog:
    # Layout of the dialog
    # NPC_TITLE: Displays only the NPC's name and a short message
    # FULL_BODY: Displays the NPC's name along with full text, images, or other content
    layout: NPC_TITLE

    # Internal UI adjustment added to button width calculation
    # Used to compensate for Minecraft dialog rendering spacing
    button-render-padding: 13

    # The default width for action buttons in the dialog.
    # If set to -1, the width will be automatically calculated
    # based on the longest button (NPC options or close button).
    # Min: 1, Max: 1024
    default-button-width: -1

    # Configuration for the dialog's close button
    close-button:
      # If true, a close button (X) will be shown
      enabled: true

      # Text displayed on the close button
      text: "<red>Close"

      # Button width for the close button.
      # 0: Auto (based on text width)
      # -1: Match dialog unified width
      # >0: Fixed width
      # Min: 0, Max: 1024
      width: -1

      # If true, pressing the ESC key will also close the dialog
      # Note: This requires 'enabled' to be true; ESC will not work if the button is disabled
      close-with-escape: true
````

---

### Layout Types

| Type        | Description                             |                                               |
|-------------|-----------------------------------------|-----------------------------------------------|
| `NPC_TITLE` | Minimal dialog showing only NPC name    | ![NPC\_TITLE example](/img/bqa/npc_title.png) |
| `FULL_BODY` | Full dialog with images and extended UI | ![FULL\_BODY example](/img/bqa/full_body.png) |

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
* Lightweight configuration via `config.yml(conversation.default_io)`

---

:::tip Version Info
Requires Paper 1.21.8 or higher.
Older versions are not supported due to Dialog API limitations.
:::
