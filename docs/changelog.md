---
title: 🔄 Changelog
id: changelog
---

All notable changes to this project will be documented in this file.

:::info Notice
English is not my first language. Thanks for understanding!
:::

## [0.0.66] - 2026-01-21
#### Added
- `WorldGuard` compatibility
  - `worldGuardIsOwner` condition
  - `worldGuardIsMember` condition
  - `worldGuardHasOwner` condition
  - `worldGuardHasMember` condition
#### Optimized
- Enhanced profile object handling to prevent `ClassCastException`.
  - Implemented safe casting (`as? Player`) to ensure stability during offline player checks or console executions.
  - Refined the `Argument<T>` system for faster argument parsing and variable processing.

## [0.0.65] - 2026-01-21
#### Fixed
- `[range]` in `CraftEngine`, `ItemsAdder`, `Nexo` objectives

## [0.0.64] - 2026-01-20
#### Added
- `[location]` in `CraftEngine`, `ItemsAdder`, `Nexo` objectives
- `[range]` in `CraftEngine`, `ItemsAdder`, `Nexo` objectives

## [0.0.63] - 2026-01-19
#### Added
- `particleCube` action

## [0.0.62] - 2026-01-19
#### Added
- `HMCCosmetics` compatibility
- `CosmeticsCore` compatibility
- `Typewriter` compatibility

#### Changed
- Updated dependencies to the latest versions. (599)
- change code

## [0.0.61] - 2026-01-16
#### Added
- `customNameplatesApplyNameplate` action

## [0.0.6] - 2026-01-13
#### Added
- `CustomNameplats` compatibility

#### Refactoring
- `Integrations` to `Compatibility`

## [0.0.5] - 2026-01-13
#### Added
- `CustomFishing` compatibility
- `config-version` in `config.yml`

:::danger
The configuration API has changed.\
Delete `config.yml` and restart the server to apply the new configuration format.
:::

---

## [0.0.4] - 2026-01-13
#### Added
- `CustomCrops` compatibility

---

## [0.0.3] - 2026-01-13
#### Added
- Basic UI elements for quest logs.

---

## [0.0.1] & [0.0.2] - 2026-01-13
#### Added
- Project initialization.