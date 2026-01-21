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
Checks if the specified region has any **Owners** assigned to it.

**Syntax: `worldGuardHasOwner [world] [region]`**

### Has Member
Checks if the specified region has any **Members** assigned to it.

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