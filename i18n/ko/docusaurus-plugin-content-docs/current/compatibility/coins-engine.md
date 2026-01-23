---
title: 🪙 CoinsEngine
id: coins-engine
---

[CoinsEngine](https://www.spigotmc.org/resources/84121/) 호환성 안내.

## Actions

### 잔액 수정 (Modify Balance)
플레이어의 특정 통화(재화) 잔액을 수정합니다.

**사용법: `coinsEngine <type> <currency> <amount>`**

| 파라미터       | 사용법                                                                      | 기본값 | 설명                                  |
|------------|--------------------------------------------------------------------------|-----|-------------------------------------|
| *type*     | `SET`, `ADD`, `REMOVE`, `MULTIPLY`                                       | 없음  | 수행할 잔액 수정 방식(설정, 추가, 제거, 곱하기)입니다.   |
| *currency* | [currency](https://nightexpressdev.com/coinsengine/features/currencies/) | 없음  | 수정할 통화의 ID입니다 (예., `coins`, `gem`). |
| *amount*   | number                                                                   | 없음  | 연산에 사용할 수치입니다.                      |

```yaml title="예시"
actions:
  coinsEngineSetCoins: coinsEngine set coins 50
  coinsEngineAddGem: coinsEngine add gem 1000
  coinsEngineRemoveMoney: coinsEngine remove money 100
  coinsEngineMultiplyCoins: coinsEngine multiply coins 0.5
```

## Conditions

### 통화 보유 확인 (Has Currency)
플레이어가 특정 통화를 일정량 이상 보유하고 있는지 확인합니다.

**사용법: `coinsEngine <currency> <amount>`**

| 파라미터       | 사용법                                                                      | 기본값 | 설명                             |
|------------|--------------------------------------------------------------------------|-----|--------------------------------|
| *currency* | [currency](https://nightexpressdev.com/coinsengine/features/currencies/) | 없음  | 확인할 통화의 ID입니다.                 |
| *amount*   | number                                                                   | 없음  | 참(true)을 반환하기 위해 필요한 최소 금액입니다. |

```yaml title="예시"
conditions:
  coinsEngineHasCoins: coinsEngine coins 1
  coinsEngineGemCanAffordPlot: coinsEngine gem 10000
  coinsEngineIsRich: coinsEngine money 1000000
```