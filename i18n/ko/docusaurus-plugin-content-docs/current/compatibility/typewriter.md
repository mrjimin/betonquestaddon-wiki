---
title: ⌨️ Typewriter
id: typewriter
---

[Typewriter](https://modrinth.com/plugin/typewriter) 호환성 안내.

## Actions

### Play Cinematic
Triggers a Typewriter cinematic for a specified player.

**Syntax: `typeWriterPlayCinematic <cinematic>`**

| Parameter   | Syntax    | Default Value | Explanation                                               |
|-------------|-----------|---------------|-----------------------------------------------------------|
| _cinematic_ | cinematic | none          | The unique identifier (ID) of the cinematic to be played. |

```yaml title="Example"
actions:
  playWaveCinematic: typeWriterPlayCinematic test_cinematic
```
:::info Executed via Command 
This process is triggered through the console using the following command: \
`typewriter:typewriter cinematic start %cinematic% %player%`
:::