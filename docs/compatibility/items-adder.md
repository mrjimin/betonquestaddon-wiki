---
title: 💎 ItemsAdder
id: items-adder
---

This page covers the compatibility with [ItemsAdder](https://www.spigotmc.org/resources/73355/).

## Actions

### Set Block
Places a specific ItemsAdder block at a designated location.

**Syntax: `itemsAdderBlockAt <id> <location>`**

### Set Furniture
Places specific ItemsAdder furniture at a designated location.

**Syntax: `itemsAdderFurnitureAt <id> <location>`**

| Parameter  | Syntax                                                                                                       | Default Value | Explanation                                                         |
|------------|--------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------|
| _id_       | namespace:id                                                                                                 | none          | The unique identifier (ID) of the block or furniture to be spawned. |
| _location_ | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | none          | The coordinates where the object will be placed                     |

```yaml title="Example"
actions:
  setIABlock: itemsAdderBlockAt iasurvival:ruby_block 0;-60;0;world
  setIAFurniture: itemsAdderFurnitureAt iaalchemy:chair 0;-60;0;world
```

#### Play Animation
Plays a specific animated title on the player's screen.

**Syntax: `itemsAdderPlayAnimation <id>`**

```yaml title="Example"
action:
  playIAAnimation: itemsAdderPlayAnimation animationID
```

## Conditions

### Check Block
Checks if a specific ItemsAdder block exists at a designated location.

**Syntax: `itemsAdderBlock <id> <location>`**

### Check Furniture
Checks if a specific ItemsAdder furniture exists at a designated location.

**Syntax: `itemsAdderFurniture <id> <location>`**

| Parameter  | Syntax                                                                                                       | Default Value | Explanation                                                         |
|------------|--------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------|
| _id_       | namespace:id                                                                                                 | none          | The unique identifier (ID) of the block or furniture to be spawned. |
| _location_ | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | none          | The coordinates where the object will be placed                     |

```yaml title="Example"
conditions:
  isIABlock: itemsAdderBlock iasurvival:ruby_block 0;-60;0;world
  isIAFurniture: itemsAdderFurniture iaalchemy:chair 0;-60;0;world
```

## Objectives

### Block
Triggers when a player interacts with ItemsAdder block (Place, Break, or Interact).

**Syntax:**
- **`itemsAdderBlockPlace <id> [amount] [isCancelled]`**
- **`itemsAdderBlockBreak <id> [amount] [isCancelled]`**
- **`itemsAdderBlockInteract <id> [amount] [isCancelled]`**

### Furniture
Triggers when a player interacts with ItemsAdder furniture (Place, Break, or Interact).

**Syntax:**
- **`itemsAdderFurniturePlace <id> [amount] [isCancelled]`**
- **`itemsAdderFurnitureBreak <id> [amount] [isCancelled]`**
- **`itemsAdderFurnitureInteract <id> [amount] [isCancelled]`**

| Parameter | Syntax       | Default Value | Explanation                                                         |
|-----------|--------------|---------------|---------------------------------------------------------------------|
| _id_      | namespace:id | none          | The unique identifier (ID) of the block or furniture to be spawned. |
| _amount_  | amount:Int   | 1             | The number of times the action must be performed.                   |

```yaml title="Example"
objectives:
  placeRubyBlock: itemsAdderBlockPlace iasurvival:ruby_block
  breakEndTable: itemsAdderFurnitureBreak iaalchemy:chair amount:2
  useLamp: itemsAdderFurnitureInteract iaalchemy:lamp isCancelled:true
```

## Items

ItemsAdder usage is integrated to the [Items](https://betonquest.org/3.0-DEV/Documentation/Features/Items/) system and thus used for events and conditions.

In addition, you can also add `quest-item` argument to tag them as "QuestItem".

```yaml title="Example" 
items:
  forestTrident: ItemsAdder forest_trident
  tableLamp: ItemsAdder table_lamp quest-item
conditions:
  hasForestTrident: hand forestTrident
events:
  giveTableLamp: give tableLamp:3
```