---
title: 🪙 CoinsEngine
id: coins-engine
---

This page covers the compatibility with [CoinsEngine](https://www.spigotmc.org/resources/84121/).

## Actions

### Modify Balance
Modifies the amount of a specific currency for the player.

**Syntax: `coinsEngine <type> <currency> <amount>`**

| Parameter  | Syntax                                                                   | Default Value | Explanation                                                   |
|------------|--------------------------------------------------------------------------|---------------|---------------------------------------------------------------|
| *type*     | `SET`, `ADD`, `REMOVE`, `MULTIPLY`                                       | none          | The type of balance modification to perform.                  |
| *currency* | [currency](https://nightexpressdev.com/coinsengine/features/currencies/) | none          | The ID of the currency to be modified (e.g., `coins`, `gem`). |
| *amount*   | number                                                                   | none          | The value to be used in the operation.                        |

```yaml title="Example"
actions:
  coinsEngineSetCoins: coinsEngine set coins 50
  coinsEngineAddGem: coinsEngine add gem 1000
  coinsEngineRemoveMoney: coinsEngine remove money 100
  coinsEngineMultiplyCoins: coinsEngine multiply coins 0.5
```

## Conditions

### Has Currency
Checks if the player possesses a certain amount (or more) of a specific currency.

**Syntax: `coinsEngine <currency> <amount>`**

| Parameter  | Syntax                                                                   | Default Value | Explanation                                 |
|------------|--------------------------------------------------------------------------|---------------|---------------------------------------------|
| *currency* | [currency](https://nightexpressdev.com/coinsengine/features/currencies/) | none          | The ID of the currency to check.            |
| *amount*   | number                                                                   | none          | The minimum amount required to return true. |

```yaml title="Example"
conditions:
  coinsEngineHasCoins: coinsEngine coins 1
  coinsEngineGemCanAffordPlot: coinsEngine gem 10000
  coinsEngineIsRich: coinsEngine money 1000000
```