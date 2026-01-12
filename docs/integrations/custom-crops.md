# CustomCrops

This page covers the integration with [CustomCrops](https://polymart.org/product/2625).

## Actions

### Set Season
Changes the season of a designated world to a specific one.

**Syntax: `customCropsSetSeason <world> <season>`**

| Parameter | Syntax                                                                                                                                                                    | Default Value | Explanation                                           |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------------------------------------------|
| _world_   | world                                                                                                                                                                     | none          | The target world where the season will be changed     |
| _season_  | [Season](https://github.com/Xiao-MoMi/Custom-Crops/blob/86b6ad669e0b00e9cb3c2181a60d32f16de32c91/api/src/main/java/net/momirealms/customcrops/api/core/world/Season.java) | none          | The new season to be applied to the designated world. |

```yaml title="Example"
action:
  setSeason: customCropsSetSeason SPRING world
```

## Conditions

### Check Season
Verifies whether the current season of a designated world matches a specific season.

**Syntax: `customCropsSeason <season> [world]`**

| Parameter | Syntax                                                                                                                                                                    | Default Value    | Explanation                                                   |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|---------------------------------------------------------------|
| _season_  | [Season](https://github.com/Xiao-MoMi/Custom-Crops/blob/86b6ad669e0b00e9cb3c2181a60d32f16de32c91/api/src/main/java/net/momirealms/customcrops/api/core/world/Season.java) | none             | The specific season to be compared against the world's state. |
| _world_   | world:name                                                                                                                                                                | player location	 | The world to check for the current season.                    |

```yaml title="Example"
conditions:
  isSpring: customCropsSeason SPRING
  weatherInPlayerWorld: customCropsSeason SUMMER world:%ph.player_home_world%
  overworldIsWinter: customCropsSeason WINTER world:overworld
```

## Objectives

### Crop
Triggers when a player harvests or plants CustomCrops.

**Syntax:**
- **`customCropsCropPlant <crop_id> [amount]`**
- **`customCropsCropHarvest <crop_stage_id> [amount]`**

| Parameter       | Syntax     | Default Value | Explanation                                    |
|-----------------|------------|---------------|------------------------------------------------|
| _crop_id_       | id         | none          | The unique identifier of the crop/seed.        |
| _crop_stage_id_ | id         | none          | The ID of the crop at a specific growth stage. |
| _amount_        | amount:Int | 1             | The number of crops to harvest or plant.       |

```yaml title="Example"
objectives:
  plantTomato: customCropsCropPlant tomato
  harvestTomato: customCropsCropHarvest customcrops:tomato_stage_* amount:5
```
:::tip 
Harvest objectives support wildcards (e.g., tomato_stage_*), allowing you to track multiple growth stages at once. 
:::

### Pot
Triggers when a player places or breaks CustomCrops pots.

**Syntax:**
- **`customCropsPotPlace <id> [amount]`**
- **`customCropsPotBreak <id> [amount] [isCancelled]`**

```yaml title="Example"
objectives:
  placePot: customCropsPotPlace default amount:5
  breakPot: customCropsPotBreak default_* amount:5
```
:::tip
Harvest objectives support wildcards (e.g., default_*), allowing you to track multiple growth stages at once.
:::

### Watering Can
Triggers when a player interacts with watering cans, pots, or sprinklers.

**Syntax:**
- **`customCropsCanFill <watering_can_id> [amount]`**
- **`customCropsCanPot <watering_can_id> [pot_id] [amount]`**
- **`customCropsCanSprinkler <watering_can_id> [sprinkler_id] [amount]`**

| Parameter      | Syntax        | Default Value | Explanation                                              |
|:---------------|:--------------|:--------------|:---------------------------------------------------------|
| _item_id_      | id            | none          | The unique identifier of the watering can item.          |
| _pot_id_       | pots:id       | all           | The unique identifier of the pot to be watered.          |
| _sprinkler_id_ | sprinklers:id | all           | The unique identifier of the sprinkler to interact with. |
| _amount_       | amount:Int    | 1             | The number of times to perform the action.               |

```yaml title="Example"
objectives:
  fillCan: customCropsCanFill watering_can_1 amount:3
  canPot: customCropsCanPot watering_can_2 pots:default amount:5
  canSprinkler: customCropsCanSprinkler watering_can_* sprinklers:sprinkler_1
```
:::tip
Harvest objectives support wildcards (e.g., watering_can_*), allowing you to track multiple growth stages at once.
:::

### Sprinkler
Triggers when a player places or breaks CustomCrops sprinklers.

**Syntax:**
- **`customCropsSprinklerPlace <sprinkler_id> [amount]`**
- **`customCropsBreakSprinkler <sprinkler_id> [amount]`**

| Parameter      | Syntax     | Default Value | Explanation                                 |
|:---------------|:-----------|:--------------|:--------------------------------------------|
| _sprinkler_id_ | id         | none          | The unique identifier of the sprinkler.     |
| _amount_       | amount:Int | 1             | The number of sprinklers to place or break. |

```yaml title="Example"
objectives:
  placeSprinklers: customCropsSprinklerPlace sprinkler_1
  breakSprinklers: customCropsSprinklerBreak sprinkler_* amount:2
```
:::tip
Harvest objectives support wildcards (e.g., sprinkler_*), allowing you to track multiple growth stages at once.
:::

### Scarecrow
Triggers when a player places or breaks CustomCrops scarecrows.

**Syntax:**
- **`customCropsScarecrowPlace <scarecrow_id> [amount]`**
- **`customCropsScarecrowBreak <scarecrow_id> [amount]`**

| Parameter      | Syntax     | Default Value | Explanation                                 |
|:---------------|:-----------|:--------------|:--------------------------------------------|
| _scarecrow_id_ | id         | none          | The unique identifier of the scarecrow.     |
| _amount_       | amount:Int | 1             | The number of scarecrows to place or break. |

```yaml title="Example"
objectives:
  placeScarecrow: customCropsScarecrowPlace scarecrow amount:3
  breakScarecrow: customCropsScarecrowBreak scarecrow amount:1
```
:::warning
**Scarecrow ID Check**
The `<scarecrow_id>` must match the ID defined in your server's configuration file. You can find these IDs in the following path:
`yourServer/plugins/CustomCrops/config.yml`

Specifically, look for the **`mechanics.scarecrow.id`** section to ensure you are using the correct identifier.
:::