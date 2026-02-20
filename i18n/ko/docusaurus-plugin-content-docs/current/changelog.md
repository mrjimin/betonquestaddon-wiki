---
title: 🔄 변경 로그
id: changelog
---

이 프로젝트의 모든 주요 변경 사항은 이 파일에 기록됩니다.

## [0.0.8] - 2026-02-21
#### 수정됨
- `BetonQuest` 651 이상 지원됨

## [0.0.71] - 2026-01-27
#### 추가됨
- `UpdateChecker` [모드린스](https://modrinth.com/plugin/betonquestaddon)용

## [0.0.7] - 2026-01-23
#### 추가됨
- `CoinsEngine` 액션 및 조건 추가
#### 수정됨
- `CosmeticsCore` 호환성 기능이 정상적으로 등록되지 않던 문제 해결

## [0.0.67] - 2026-01-21
#### 추가됨
- `CustomFishing` 아이템 지원
#### 변경됨
- `Nexo` API 버전 업데이트 - 1.16에서 1.17로 변경
- `CraftEngine` API 버전 업데이트 - 0.0.66에서 0.0.67로 변경
#### 최적화
- `Nexo`, `CraftEngine` 아이템 처리 로직 개선

## [0.0.66] - 2026-01-21
#### 추가됨
- `WorldGuard` 호환성 추가
  - `worldGuardIsOwner` 조건 (Region 소유주 여부)
  - `worldGuardIsMember` 조건 (Region 멤버 여부)
  - `worldGuardHasOwner` 조건 (Region에 소유주 존재 여부)
  - `worldGuardHasMember` 조건 (Region에 멤버 존재 여부)
#### 최적화
- `ClassCastException` 방지를 위한 프로필 객체 처리 개선
  - 오프라인 플레이어 확인 또는 콘솔 실행 시의 안정성을 보장하기 위해 안전한 캐스팅(`as? Player`) 구현
  - 더 빠른 인자 파싱 및 변수 처리를 위해 `Argument<T>` 시스템 개선

## [0.0.65] - 2026-01-21
#### 수정됨
- `CraftEngine`, `ItemsAdder`, `Nexo` 목적(Objectives)의 `[range]` 인자 오류 수정

## [0.0.64] - 2026-01-20
#### 추가됨
- `CraftEngine`, `ItemsAdder`, `Nexo` 목적에 `[location]` 인자 추가
- `CraftEngine`, `ItemsAdder`, `Nexo` 목적에 `[range]` 인자 추가

## [0.0.63] - 2026-01-19
#### 추가됨
- `particleCube` 액션 추가

## [0.0.62] - 2026-01-19
#### 추가됨
- `HMCCosmetics` 호환성 추가
- `CosmeticsCore` 호환성 추가
- `Typewriter` 호환성 추가

#### 변경됨
- 종속성 라이브러리들을 최신 버전으로 업데이트 (599)
- 코드 구조 개선

## [0.0.61] - 2026-01-16
#### 추가됨
- `customNameplatesApplyNameplate` 액션 추가

## [0.0.6] - 2026-01-13
#### 추가됨
- `CustomNameplates` 호환성 추가

#### 리팩토링
- `Integrations` 항목 이름을 `Compatibility`로 변경

## [0.0.5] - 2026-01-13
#### 추가됨
- `CustomFishing` 호환성 추가
- `config.yml` 내 `config-version` 항목 추가

:::danger 위험
설정(Configuration) API가 변경되었습니다.\
새로운 설정 형식을 적용하려면 `config.yml`을 삭제한 후 서버를 재시작하세요.
:::

---

## [0.0.4] - 2026-01-13
#### 추가됨
- `CustomCrops` 호환성 추가

---

## [0.0.3] - 2026-01-13
#### 추가됨
- 퀘스트 로그를 위한 기본 UI 요소 추가

---

## [0.0.1] & [0.0.2] - 2026-01-13
#### 추가됨
- 프로젝트 초기화