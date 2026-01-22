---
title: 💄 CosmeticsCore
id: cosmetics-core
---

This page covers the compatibility with [CosmeticsCore](https://www.spigotmc.org/resources/105324/).

## Actions

### Apply Cosmetic
Applies a specific CosmeticsCore cosmetic to a designated target.

**Syntax: `cosmeticsCoreApplyCosmetic <id> [ignore]`**

| Parameter | Syntax         | Default Value | Explanation                                                             |
|-----------|----------------|---------------|-------------------------------------------------------------------------|
| _id_      | cosmetics      | none          | The unique identifier (ID) of the cosmetic item to be applied.          |
| _ignore_  | ignore:Boolean | false         | The toggle used to bypass placement restrictions or requirement checks. |

```yaml title="Example"
actions:
  applyTestCosmetic: cosmeticsCoreApplyCosmetic test_cosmetic
  ignoreApplyCosmetic: cosmeticsCoreApplyCosmetic special_cosmetic ignore:true
```

## Conditions

### Is In Wardrobe
Checks if the player is currently browsing or using the wardrobe.

**Syntax: `cosmeticsCoreInWardrobe`**

```yaml title="Example"
conditions:
  isInWardrobe: cosmeticsCoreInWardrobe
```