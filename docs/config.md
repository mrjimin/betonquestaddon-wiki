---
sidebar_position: 3
---

# Configuration
This page provides a detailed overview of the [config.yml](https://github.com/mrjimin/BetonQuestAddon/blob/master/src/main/resources/config.yml).

:::danger[Required Action]
To ensure proper integration with **BetonQuestAddon**, you must disable the following setting in your `plugins/BetonQuest/config.yml` file.
:::

```yaml title="yourServer/plugins/BetonQuest/config.yml"
# Change this value to false
hook:
  # ...
  craftengine: true
  itemsadder: true
  nexo: true
  # ...
```
:::tip
**Please set the following options to `false` for the plugins you are using!** This prevents conflicts between the core plugin and BetonQuestAddon.
:::

---

## NotifyMessage
Configure real-time notifications to update players on their quest progress, including remaining counts and status changes.

[//]: # (yourServer/plugins/BetonQuest/lang/<your_language>.yml)

:::info Message Location File Path:
`yourServer/plugins/BetonQuest/lang/<your_language>.yml`\
You can customize the actual text shown to players within this file.
:::
```yaml title="<your_language>.yml"
betonquestaddon:
  # Block
  block_place: "@[legacy]&2{amount} blocks left to place"
  block_break: "@[legacy]&2{amount} blocks left to break"
  block_interact: "@[legacy]&2{amount} interactions remaining"

  # Furniture
  furniture_place: "@[legacy]&2{amount} furniture items left to place"
  furniture_break: "@[legacy]&2{amount} furniture items left to break"
  furniture_interact: "@[legacy]&2{amount} furniture interactions remaining"

  # CustomCrops
  customcrops:
    crop_harvest: "@[legacy]&2{amount} crops left to harvest"
    crop_plant: "@[legacy]&2{amount} seeds left to plant"
    pot_place: "@[legacy]&2{amount} pots left to place"
    pot_break: "@[legacy]&2{amount} pots left to break"
    can_fill: "@[legacy]&2{amount} watering can refills remaining"
    can_pot: "@[legacy]&2{amount} pots left to water"
    can_sprinkler: "@[legacy]&2{amount} sprinklers left to activate"
    sprinkler_place: "@[legacy]&2{amount} sprinklers left to place"
    sprinkler_break: "@[legacy]&2{amount} sprinklers left to break"
    use_fertilizer: "@[legacy]&2{amount} fertilizers left to use"
    scarecrow_place: "@[legacy]&2{amount} scarecrows left to place"
    scarecrow_break: "@[legacy]&2{amount} scarecrows left to break"

  # CustomFishing
  customfishing:
    caught_fish: "@[legacy]&2{amount} fish left to catch"
    caught_group: "@[legacy]&2{amount} more items needed from this group"
    activate_totem: "@[legacy]&2{amount} totems left to activate"
```
:::danger Mandatory Configuration
You **must** define these keys in your `<your_language>.yml` to use the [notify](https://betonquest.org/3.0-DEV/Documentation/Scripting/Building-Blocks/Actions-List/#sending-notifications-notify) feature.\
If missing, event progress notifications will not function.
:::