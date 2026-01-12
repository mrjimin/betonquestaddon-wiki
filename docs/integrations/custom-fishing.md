# CustomFishing

This page covers the integration with [CustomFishing](https://polymart.org/product/2723).

## Objectives

### Fishing
Tracks when a player catches a specific fish or a set of fish.

**Syntax: `customFishingCaughtFish <fish_id> [amount]`**

| Parameter | Syntax     | Default Value | Explanation                                            |
|-----------|------------|---------------|--------------------------------------------------------|
| _fish_id_ | id         | none          | The unique identifier of the fish.                     |
| _amount_  | amount:Int | 1             | The number of fish required to complete the objective. |

```yaml title="Example"
objectives:
  catchCarp: customFishingCaughtFish tuna_fish_golden_star
  catchRareFish: customFishingCaughtFish tuna_fish,pike_fish amount:5
  catchGoldenStartFish: customFishingCaughtFish *_golden_star amount:7
```
:::tip
Harvest objectives support wildcards (e.g., *_golden_star), allowing you to track multiple fish types or rarities at once
:::

### Fishing Groups
Tracks when a player catches any fish belonging to a specific group.

**Syntax: `customFishingCaughtGroup <group_id> [amount]`**

| Parameter  | Syntax     | Default Value | Explanation                                  |
|------------|------------|---------------|----------------------------------------------|
| _group_id_ | id         | none          | The unique identifier of the fish group.     |
| _amount_   | amount:Int | 1             | The number of fish from this group required. |

```yaml title="Example"
objectives:
  catchOceanGroup: customFishingCaughtGroup ocean amount:10
  catchSpecialGroups: customFishingCaughtGroup no_star,pound amount:3
  catchStarAndOceanGroup: customFishingCaughtGroup *_star,*_ocean
```
:::tip
Harvest objectives support wildcards (e.g., *_star), allowing you to track multiple groups simultaneously.
:::

### Activate Totem
Tracks when a player activates a specific fishing totem.

**Syntax: `customFishingActivateTotem <totem_id> [amount]`**

| Parameter  | Syntax     | Default Value | Explanation                              |
|------------|------------|---------------|------------------------------------------|
| _totem_id_ | id         | none          | The unique identifier of the fish.       |
| _amount_   | amount:Int | 1             | The number of crops to harvest or plant. |

```yaml title="Example"
objectives:
  activateDoubleTotem: customFishingActivateTotem double_loot_totem
  activateAllTotem: customFishingActivateTotem *_totem amount:2
```
:::warning Totem ID Check
`<totem_id>` must exactly match an ID defined in your totem configuration files.

You can find all available totem IDs here:  
`yourServer/plugins/CustomFishing/contents/totem/*.yml`

For detailed instructions on creating and using totems,  
please refer to the official documentation:  
**[CustomFishing Totem Format Documentation](https://mo-mi.gitbook.io/xiaomomi-plugins/customfishing/plugin-wiki/customfishing/format/totem)**
:::

:::tip
Totem objectives support wildcards (e.g., *_totem), allowing you to track the activation of various totem types.
:::