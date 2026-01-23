---
title: ⚙️ 설정
id: configuration
---

[config.yml](https://github.com/mrjimin/BetonQuestAddon/blob/master/src/main/resources/config.yml) 파일의 상세 내용을 다룹니다.

:::danger[필수 조치 사항]
**BetonQuestAddon**과의 원활한 통합을 위해, `plugins/BetonQuest/config.yml` 파일에서 다음 설정들을 반드시 비활성화해야 합니다.
:::

```yaml title="yourServer/plugins/BetonQuest/config.yml"
# 아래 항목들의 값을 false로 변경하세요.
hook:
  # ...
  craftengine: false
  itemsadder: false
  nexo: false
  # ...

```

:::tip
**현재 사용 중인 플러그인에 해당하는 옵션들을 `false`로 설정해 주세요!** 이는 원본 플러그인의 기본 기능과 BetonQuestAddon 사이의 충돌을 방지하기 위함입니다.
:::

---

## 알림 메시지 (NotifyMessage)

남은 횟수나 상태 변경 등 플레이어의 퀘스트 진행 상황을 실시간으로 업데이트하는 알림을 구성합니다.

:::info 메시지 파일 경로:
`yourServer/plugins/BetonQuest/lang/<사용하는_언어>.yml`

플레이어에게 실제로 표시될 텍스트는 이 파일에서 수정할 수 있습니다.
:::

```yaml title="<사용하는_언어>.yml"
betonquestaddon:
  # Block
  block_place: "@[legacy]&2설치해야 할 블록이 {amount}개 남았습니다."
  block_break: "@[legacy]&2파괴해야 할 블록이 {amount}개 남았습니다."
  block_interact: "@[legacy]&2남은 상호작용 횟수: {amount}회"

  # Furniture
  furniture_place: "@[legacy]&2설치해야 할 가구가 {amount}개 남았습니다."
  furniture_break: "@[legacy]&2파괴해야 할 가구가 {amount}개 남았습니다."
  furniture_interact: "@[legacy]&2남은 가구 상호작용 횟수: {amount}회"

  # CustomCrops
  customcrops:
    crop_harvest: "@[legacy]&2수확해야 할 작물이 {amount}개 남았습니다."
    crop_plant: "@[legacy]&2심어야 할 씨앗이 {amount}개 남았습니다."
    pot_place: "@[legacy]&2설치해야 할 화분이 {amount}개 남았습니다."
    pot_break: "@[legacy]&2파괴해야 할 화분이 {amount}개 남았습니다."
    can_fill: "@[legacy]&2물조리개를 {amount}회 더 채워야 합니다."
    can_pot: "@[legacy]&2물을 줘야 할 화분이 {amount}개 남았습니다."
    can_sprinkler: "@[legacy]&2활성화해야 할 스프링클러가 {amount}개 남았습니다."
    sprinkler_place: "@[legacy]&2설치해야 할 스프링클러가 {amount}개 남았습니다."
    sprinkler_break: "@[legacy]&2파괴해야 할 스프링클러가 {amount}개 남았습니다."
    use_fertilizer: "@[legacy]&2사용해야 할 비료가 {amount}개 남았습니다."
    scarecrow_place: "@[legacy]&2설치해야 할 허수아비가 {amount}개 남았습니다."
    scarecrow_break: "@[legacy]&2파괴해야 할 허수아비가 {amount}개 남았습니다."

  # CustomFishing
  customfishing:
    caught_fish: "@[legacy]&2잡아야 할 물고기가 {amount}마리 남았습니다."
    caught_group: "@[legacy]&2이 그룹에서 {amount}개의 아이템이 더 필요합니다."
    activate_totem: "@[legacy]&2활성화해야 할 토템이 {amount}개 남았습니다."

```

:::danger 필수 설정
[알림(notify)](https://betonquest.org/3.0-DEV/Documentation/Scripting/Building-Blocks/Actions-List/#sending-notifications-notify) 기능을 사용하려면 **반드시** `<사용하는_언어>.yml` 파일에 위 키값들을 정의해야 합니다.

설정하지 않을 경우 이벤트 진행 상황 알림이 정상적으로 작동하지 않습니다.
:::