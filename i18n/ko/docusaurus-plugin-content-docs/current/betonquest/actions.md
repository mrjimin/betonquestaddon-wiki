---
title: ▶️ Actions
id: actions
---

## 큐브 파티클 재생 (Play Cube Particle)
지정한 위치에 정육면체 또는 직육면체 형태의 파티클 효과를 생성합니다.

**사용법: `particleCube <particle> <location> [width] [height] [intercval]`**

| 파라미터        | 사용                                                                                                          | 기본값   | 설명                               |
|-------------|-------------------------------------------------------------------------------------------------------------|-------|----------------------------------|
| _particle_  | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)                               | 없음    | 재생할 파티클의 이름입니다.                  |
| _location_  | [Location](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | 없음    | 큐브 바닥의 중심점 위치입니다.                |
| _width_     | width:Number                                                                                                | 1.0   | 큐브의 가로 및 세로(X, Z축) 총 길이입니다.      |
| _height_    | width:Number                                                                                                | 1.0   | 큐브의 높이(Y축) 총 길이입니다.              |
| _intercval_ | width:Number                                                                                                | 0.125 | 파티클 간의 간격입니다. 값이 낮을수록 선이 촘촘해집니다. |

```yaml title="예시"
actions:
  spawnFlameParticles: particleCube FLAME 0.5;0;0.5;world 
  spawnSoulFireFlameParticles2x2: particleCube SOUL_FIRE_FLAME 0;0;0;world width:2.0 height:1 intercval:1
```