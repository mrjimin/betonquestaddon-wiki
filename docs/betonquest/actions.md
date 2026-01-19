---
title: ▶️ Actions
id: actions
---

## Play Cube Particle
Triggers a cube-shaped particle effect at a specified location.

**Syntax: `particleCube <particle> <location> [width] [height] [intercval]`**

| Parameter   | Syntax                                                                                                       | Default Value | Explanation                                                                                 |
|-------------|--------------------------------------------------------------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------|
| _particle_  | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html)                                | none          | The name of the particle effect                                                             |
| _location_  | [Locations](https://betonquest.org/3.0-DEV/Documentation/Scripting/Data-Formats/#unified-location-formating) | none          | The center point of the cube's base.                                                        |
| _width_     | width:Number                                                                                                 | 1.0           | The total width/length (X and Z axis) of the cube.                                          |
| _height_    | width:Number                                                                                                 | 1.0           | The total height (Y axis) of the cube.                                                      |
| _intercval_ | width:Number                                                                                                 | 0.125         | The distance between individual particles along the edges. Lower values create denser lines |

```yaml title="Example"
actions:
  spawnFlameParticles: particleCube FLAME 0.5;0;0.5;world 
  spawnSoulFireFlameParticles2x2: particleCube SOUL_FIRE_FLAME 0;0;0;world width:2.0 height:1 intercval:1
```