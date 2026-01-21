---
title: 🌎 WorldGuard
id: world-guard
---

This page covers the compatibility with [WorldGuard](https://modrinth.com/plugin/worldguard).

## Conditions

### Is Owner
Checks if the player is an **Owner** of the region at their current location.

**Syntax: `worldGuardIsOwner`**

### Is Member
Checks if the player is a **Member** of the region at their current location.

**Syntax: `worldGuardIsMember`**

```yaml title="Example"
conditions:
  checkIfIAmOwner: worldGuardIsOwner
  checkIfIAmMember: worldGuardIsMember
```

### Has Owner
Checks if the specified region has any **Owner** assigned to it.

**Syntax: `worldGuardHasOwner [world] [region]`**

### Has Member
Checks if the specified region has any **Member** assigned to it.

**Syntax: `worldGuardHasMember [world] [region]`**

| Parameter | Syntax      | Default Value   | Explanation                                      |
|-----------|-------------|-----------------|--------------------------------------------------|
| _world_   | world:name  | player location | The world where the region is located.           |
| _region_  | region:name | player location | The unique ID of the WorldGuard region to check. |

```yaml title="Example"
conditions:
  ownerExistsHere: worldGuardHasOwner
  ownerExistsInRoom: worldGuardHasOwner world:world region:room
  memberExistsHere: worldGuardHasMember
  memberExistsInTest: worldGuardHasMember world:town region:test
```
:::info[Note on Arguments]
* When executed from the **Console**, the `[world]` and `[region]` arguments are **mandatory**.
* Regions are world-specific. For example, a region named `test` in `world_a` is different from a region named `test` in `world_b`.
:::

### Has Flag
Checks if the specified region has any **Flag** assigned to it.

| Parameter | Syntax      | Default Value   | Explanation                                                                                |
|-----------|-------------|-----------------|--------------------------------------------------------------------------------------------|
| _flag_    | flag        | none            | The name of the WorldGuard flag to check for existence (e.g., `pvp`, `entry`, `greeting`). |
| _world_   | world:name  | player location | The world where the region is located.                                                     |
| _region_  | region:name | player location | The unique ID of the WorldGuard region to check.                                           |

```yaml title="Example"
conditions:
  hasBuildEnabled: worldGuardHasFlag build
  hasGreetingEnabled: worldGuardHasFlag greeting-title world:world region:house
```
:::danger
**CAUTION:** This condition only checks for the **existence** of a flag key; it returns `true` even if the value is set to `deny`, `false`, or an empty string.
To validate specific states like `allow` or custom values, you must implement a separate value-check logic as this provider ignores all flag data.
:::