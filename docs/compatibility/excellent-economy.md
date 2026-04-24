---
title: 🪙 ExcellentEconomy
id: excellent-economy
---

This page covers the compatibility with [ExcellentEconomy](https://www.spigotmc.org/resources/84121/).

## Actions

### Modify Balance
Modifies the amount of a specific currency for the player.

**Syntax: `excellentEconomy <type> <currency> <amount>`**

| Parameter  | Syntax                                                                        | Default Value | Explanation                                                   |
|------------|-------------------------------------------------------------------------------|---------------|---------------------------------------------------------------|
| *type*     | `SET`, `ADD`, `REMOVE`, `MULTIPLY`                                            | none          | The type of balance modification to perform.                  |
| *currency* | [currency](https://nightexpressdev.com/excellenteconomy/currencies/overview/) | none          | The ID of the currency to be modified (e.g., `coins`, `gem`). |
| *amount*   | number                                                                        | none          | The value to be used in the operation.                        |

```yaml title="Example"
actions:
  excellentEconomySetCoins: excellentEconomy set coins 50
  excellentEconomyAddGem: excellentEconomy add gem 1000
  excellentEconomyRemoveMoney: excellentEconomy remove money 100
  excellentEconomyMultiplyCoins: excellentEconomy multiply coins 0.5
```

## Conditions

### Has Currency
Checks if the player possesses a certain amount (or more) of a specific currency.

**Syntax: `excellentEconomy <currency> <amount>`**

| Parameter  | Syntax                                                                        | Default Value | Explanation                                 |
|------------|-------------------------------------------------------------------------------|---------------|---------------------------------------------|
| *currency* | [currency](https://nightexpressdev.com/excellenteconomy/currencies/overview/) | none          | The ID of the currency to check.            |
| *amount*   | number                                                                        | none          | The minimum amount required to return true. |

```yaml title="Example"
conditions:
  excellentEconomyHasCoins: excellentEconomy coins 1
  excellentEconomyGemCanAffordPlot: excellentEconomy gem 10000
  excellentEconomyIsRich: excellentEconomy money 1000000
```