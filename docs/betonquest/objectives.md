---
title: 🎯 Objectives
id: objectives
---

## StoneCut
Triggers when a player interacts with a crafted item from the Stone Cutter.

**Syntax: `stoneCut`**

| Parameter | Syntax                                                                    | Default Value | Explanation                    |
|-----------|---------------------------------------------------------------------------|---------------|--------------------------------|
| _item_    | [QuestItem](https://betonquest.org/3.0-DEV/Documentation/Advanced/Items/) | none          | The resulting item.            |
| _amount_  | amount:Int                                                                | 1             | The number of resulting items. |

```yaml title="Example"
items:
  stone: simple stone_brick_slab
  topaz: craftEngine default:topaz

objectives:
  testCut: stoneCut stone amount:2
  topazCut: stoneCut topaz amount:4
```

:::important
The `item` requires a definition of items!
:::

## Smith
Triggers when a player interacts with a crafted item from the Stone Cutter.

**Syntax: `smith`**

| Parameter | Syntax                                                                    | Default Value | Explanation                    |
|-----------|---------------------------------------------------------------------------|---------------|--------------------------------|
| _item_    | [QuestItem](https://betonquest.org/3.0-DEV/Documentation/Advanced/Items/) | none          | The resulting item.            |
| _amount_  | amount:Int                                                                | 1             | The number of resulting items. |

```yaml title="Example"
items:
  netherite_sword: simple netherite_sword
  topaz_bow: craftEngine default:topaz_bow

objectives:
  netheriteSwordSmith: smith netherite_sword
  topazBowSmith: smith topaz_bow
```

:::important
The `item` requires a definition of items!
:::