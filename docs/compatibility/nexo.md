---
title: ☄️ Nexo
id: nexo
---

This page covers the compatibility with [Nexo](https://polymart.org/product/6901).

## Actions

### Set Block
Places a specific Nexo block at a designated location.

**Syntax: `nexoBlockAt <id> <location>`**

### Set Furniture
Places specific Nexo furniture at a designated location.

**Syntax: `nexoFurnitureAt <id> <location> [rotation] [blockFace]`**

| Parameter   | Syntax                                                                                                                | Default Value | Explanation                                                                              |
|-------------|-----------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------|
| _id_        | id                                                                                                                    | none          | The unique identifier (ID) of the block or furniture to be spawned.                      |
| _location_  | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating)          | none          | The coordinates where the object will be placed                                          |
| _rotation_  | rotation:[Rotation](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Rotation.html)                                | NONE          | The rotation angle (e.g., CLOCKWISE).                                                    |
| _blockFace_ | blockFace:[BlockFace](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/BlockFace.html)                       | SELF          | The specific face or direction (e.g., NORTH).                                            |

```yaml title="Example"
actions:
  setNxBlock: nexoBlockAt ruby_block 0;-60;0;world
  setNxFurniture: nexoFurnitureAt arm_chair 0;-60;0;world rotation:FLIPPED_45 blockFace:SOUTH
```

## Conditions

### Check Block
Checks if a specific Nexo block exists at a designated location.

**Syntax: `nexoBlock <id> <location>`**

### Check Furniture
Checks if a specific nexo furniture exists at a designated location.

**Syntax: `NexoFurniture <id> <location>`**

| Parameter  | Syntax                                                                                                       | Default Value | Explanation                                                         |
|------------|--------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------|
| _id_       | id                                                                                                           | none          | The unique identifier (ID) of the block or furniture to be spawned. |
| _location_ | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | none          | The coordinates where the object will be placed                     |

```yaml title="Example"
conditions:
  isNxBlock: nexoBlock ruby_block 0;-60;0;world
  isNxFurniture: nexoFurniture coffee_table 0;-60;0;world
```

## Objectives

### Block
Triggers when a player interacts with Nexo block (Place, Break, or Interact).

**Syntax:**
- **`nexoBlockPlace <id> [amount] [isCancelled] [location] [range]`**
- **`nexoBlockBreak <id> [amount] [isCancelled] [location] [range]`**
- **`nexoBlockInteract <id> [amount] [isCancelled]  [location] [range]`**

### Furniture
Triggers when a player interacts with Nexo furniture (Place, Break, or Interact).

**Syntax:**
- **`nexoFurniturePlace <id> [amount] [isCancelled] [location] [range]`**
- **`nexoFurnitureBreak <id> [amount] [isCancelled] [location] [range]`**
- **`nexoFurnitureInteract <id> [amount] [isCancelled] [location] [range]`**

| Parameter  | Syntax                                                                                                                | Default Value | Explanation                                                                              |
|------------|-----------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------|
| _id_       | id                                                                                                                    | none          | The unique identifier (ID) of the block or furniture to be spawned.                      |
| _amount_   | amount:Int                                                                                                            | 1             | The number of times the action must be performed.                                        |
| _location_ | location:[Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | everywhere    | The specific location where the block or furniture must be located.                      |
| _range_    | range:number                                                                                                          | everywhere    | The maximum distance (in blocks) from the `location` within which the action is counted. |

```yaml title="Example"
objectives:
  placeRubyBlock: nexoBlockPlace ruby_block amount:5
  breakEndTable: nexoFurnitureBreak end_table amount:2
  useLamp: nexoFurnitureInteract table_lamp isCancelled:true
```

## Items

Nexo usage is integrated to the [Items](https://betonquest.org/3.0-DEV/Documentation/Features/Items/) system and thus used for events and conditions.

In addition, you can also add `quest-item` argument to tag them as "QuestItem".

```yaml title="Example" 
items:
  forestTrident: nexo forest_trident
  tableLamp: nexo table_lamp quest-item
conditions:
  hasForestTrident: hand forestTrident
events:
  giveTableLamp: give tableLamp:3
```