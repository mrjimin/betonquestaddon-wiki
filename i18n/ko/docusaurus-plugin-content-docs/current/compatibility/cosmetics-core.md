---
title: 💄 CosmeticsCore
id: cosmetics-core
---

[CosmeticsCore](https://www.spigotmc.org/resources/105324/) 호환성 안내.

## Actions

### 코스메틱 적용 (Apply Cosmetic)
대상에게 특정 CosmeticsCore 코스메틱 아이템을 장착시킵니다.

**사용법: `cosmeticsCoreApplyCosmetic <id> [ignore]`**

| 파라미터     | 사용법            | 기본값   | 설명                                     |
|----------|----------------|-------|----------------------------------------|
| _id_     | cosmetics      | 없음    | 적용할 코스메틱 아이템의 고유 ID입니다.                |
| _ignore_ | ignore:Boolean | false | 장착 제한이나 요구 사항 체크를 무시하고 강제로 적용할지 여부입니다. |

```yaml title="예시"
actions:
  applyTestCosmetic: cosmeticsCoreApplyCosmetic test_cosmetic
  ignoreApplyCosmetic: cosmeticsCoreApplyCosmetic special_cosmetic ignore:true
```

## Conditions

### 옷장 이용 확인 (Is In Wardrobe)
플레이어가 현재 옷장을 이용 중인지 확인합니다.

**사용법: `cosmeticsCoreInWardrobe`**

```yaml title="예시"
conditions:
  isInWardrobe: cosmeticsCoreInWardrobe
```