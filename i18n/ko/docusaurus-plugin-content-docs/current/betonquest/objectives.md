---
title: 🎯 Objectives
id: objectives
---

## StoneCutting
Triggers when a player interacts with a crafted item from the Stone Cutter.

**Syntax: `stoneCutting `**

| Parameter   | Syntax                                                                                                      | Default Value | Explanation                                                                                 |
|-------------|-------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------|
| _item_      | QuestItem                                                                                                   | none          | The resulting item.                                                                         |

```yaml title="Example"
items:
  stone: simple stone_brick_slab

objectives:
  testCutting: stoneCutting item:stone amount:2
```

:::important
The `item` requires a definition of items!
:::