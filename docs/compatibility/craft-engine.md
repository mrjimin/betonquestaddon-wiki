---
title: 📦 CraftEngine
id: craft-engine
---

This page covers the compatibility with [CraftEngine](https://polymart.org/product/7624).

## Actions

### Set Block
Places a specific CraftEngine block at a designated location.

**Syntax: `craftEngineBlockAt <id> <location> [playSound]`**

### Set Furniture
Places specific CraftEngine furniture at a designated location.

**Syntax: `craftEngineFurnitureAt <id> <location> [playSound]`**

| Parameter   | Syntax                                                                                                       | Default Value | Explanation                                                         |
|-------------|--------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------|
| _id_        | namespace:id                                                                                                 | none          | The unique identifier (ID) of the block or furniture to be spawned. |
| _location_  | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | none          | The coordinates where the object will be placed                     |
| _playSound_ | playSound:Boolean                                                                                            | false         | Whether to play the placement sound effect when the object is set.  |

```yaml title="Example"
actions:
  setCEBlock: craftEngineBlockAt default:chessboard_block 0;-60;0;world
  setCEFurniture: craftEngineFurnitureAt default:table_lamp 0;-60;0;world playSound:true
```

## Conditions

### Check Block
Checks if a specific CraftEngine block exists at a designated location.

**Syntax: `craftEngineBlock <id> <location>`**

### Check Furniture
Checks if a specific CraftEngine furniture exists at a designated location.

**Syntax: `craftEngineFurniture <id> <location>`**

| Parameter  | Syntax                                                                                                       | Default Value | Explanation                                                         |
|------------|--------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------|
| _id_       | namespace:id                                                                                                 | none          | The unique identifier (ID) of the block or furniture to be spawned. |
| _location_ | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | none          | The coordinates where the object will be placed                     |

```yaml title="Example"
conditions:
  isCEBlock: craftEngineBlock default:safe_block 0;-60;0;world
  isCEFurniture: craftEngineFurniture default:sleeper_sofa 0;-60;0;world
```

## Objectives

### Block
Triggers when a player interacts with CraftEngine block (Place, Break, or Interact).

**Syntax:**
- **`craftEngineBlockPlace <id> [amount] [isCancelled] [location] [range]`**
- **`craftEngineBlockBreak <id> [amount] [isCancelled] [location] [range]`**
- **`craftEngineBlockInteract <id> [amount] [isCancelled] [location] [range]`**

### Furniture
Triggers when a player interacts with CraftEngine furniture (Place, Break, or Interact).

**Syntax:**
- **`craftEngineFurniturePlace <id> [amount] [isCancelled] [location] [range]`**
- **`craftEngineFurnitureBreak <id> [amount] [isCancelled] [location] [range]`**
- **`craftEngineFurnitureInteract <id> [amount] [isCancelled] [location] [range]`**

| Parameter  | Syntax                                                                                                                | Default Value | Explanation                                                                              |
|------------|-----------------------------------------------------------------------------------------------------------------------|---------------|------------------------------------------------------------------------------------------|
| _id_       | namespace:id                                                                                                          | none          | The unique identifier (ID) of the block or furniture to be spawned.                      |
| _amount_   | amount:Int                                                                                                            | 1             | The number of times the action must be performed.                                        |
| _location_ | location:[Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | everywhere    | The specific location where the block or furniture must be located.                      |
| _range_    | range:number                                                                                                          | everywhere    | The maximum distance (in blocks) from the `location` within which the action is counted. |

```yaml title="Example"
objectives:
  placeSafe: craftEngineBlockPlace default:safe_block
  breakFlowerBasket: craftEngineFurnitureBreak default:flower_basket amount:4 isCancelled:true
  useLamp: craftEngineBlockInteract default:table_lamp amount:3
```

## Items

CraftEngine usage is integrated to the [Items](https://betonquest.org/3.0-DEV/Documentation/Features/Items/) system and thus used for events and conditions.

In addition, you can also add `quest-item` argument to tag them as "QuestItem".

```yaml title="Example"
items:
  topazAxe: craftEngine default:topaz_axe
  amethystTorch: craftEngine default:amethyst_torch quest-item
conditions:
  hasTopazAxe: hand topazAxe
actions:
  giveAmethystTorch: give amethystTorch:3
```