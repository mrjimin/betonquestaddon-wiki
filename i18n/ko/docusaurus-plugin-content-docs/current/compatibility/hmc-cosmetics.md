---
title: 🧢 HMCCosmetics
id: hmc-cosmetics
---

This page covers the compatibility with [HMCCosmetics](https://www.spigotmc.org/resources/100107/).

## Actions

### Apply Cosmetic
Applies a specific HMCCosmetics cosmetic to a designated target.

**Syntax: `hmcCosmeticsApplyCosmetic <id> [ignore]`**

| Parameter | Syntax         | Default Value | Explanation                                                             |
|-----------|----------------|---------------|-------------------------------------------------------------------------|
| _id_      | cosmetics      | none          | The unique identifier (ID) of the cosmetic item to be applied.          |
| _ignore_  | ignore:Boolean | false         | The toggle used to bypass placement restrictions or requirement checks. |

```yaml title="Example"
actions:
  applyBeanieCosmetic: hmcCosmeticsApplyCosmetic beanie
  ignoreApplyJetpackCosmetic: hmcCosmeticsApplyCosmetic jetpack ignore:true
```

## Conditions

### Is In Wardrobe
Checks if the player is currently browsing or using the wardrobe.

**Syntax: `hmcCosmeticsInWardrobe`**

```yaml title="Example"
conditions:
  isInWardrobe: hmcCosmeticsInWardrobe
```