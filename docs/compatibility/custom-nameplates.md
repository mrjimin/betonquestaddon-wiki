---
title: 🍀 CustomNameplates
id: custom-nameplates
---

This page covers the compatibility with [CustomNameplates](https://polymart.org/product/2543).

## Conditions

### Check Has Nameplate

Verifies whether the player has permission for a specific nameplate.

**Syntax: `customNameplatesHasNameplate <nameplate> [ignore]**`

| Parameter   | Syntax         | Default Value | Explanation                                          |
|-------------|----------------|---------------|------------------------------------------------------|
| *nameplate* | String         | none          | The ID of the nameplate to check for permission.     |
| *ignore*    | ignore:Boolean | false         | The option to bypass the existence check in the API. |

```yaml title="Example"
conditions:
  hasAngelNameplate: customNameplatesHasNameplate angel
  # Bypassing the existence check even if 'abc' is missing in the settings.
  hasAbcNameplate: customNameplatesHasNameplate abc ignore:true 
```
:::tip
* `ignore:true`: Skip the existence check (Permission only).
* `ignore:false`: Strict check (API existence + Permission).
:::

### Check Equipped Nameplate

Verifies whether the player is currently wearing a specific nameplate.

**Syntax: `customNameplatesEquippedNameplate <nameplate>**`

| Parameter   | Syntax | Default Value | Explanation                                      |
|-------------|--------|---------------|--------------------------------------------------|
| *nameplate* | String | none          | The target nameplate ID for the equipment check. |

```yaml title="Example"
conditions:
  isSignNameplate: customNameplatesEquippedNameplate sign
```

### Check Has Bubble

Verifies whether the player has permission for a specific chat bubble.

**Syntax: `customNameplatesHasBubble <bubble> [ignore]**`

| Parameter | Syntax         | Default Value | Explanation                                          |
|-----------|----------------|---------------|------------------------------------------------------|
| *bubble*  | String         | none          | The ID of the chat bubble to check for permission.   |
| *ignore*  | ignore:Boolean | false         | The option to bypass the existence check in the API. |

```yaml title="Example"
conditions:
  hasAdminBubble: customNameplatesHasBubble admin
  # Checking permission regardless of the bubble's registration in the API.
  hasAbcBubble: customNameplatesHasBubble abc ignore:true 
```
:::tip
* `ignore:true`: Skip the existence check (Permission only).
* `ignore:false`: Strict check (API existence + Permission).
:::

### Check Equipped Bubble

Verifies whether the player is currently using a specific chat bubble.

**Syntax: `customNameplatesEquippedBubble <bubble>**`

| Parameter | Syntax | Default Value | Explanation                                        |
|-----------|--------|---------------|----------------------------------------------------|
| *bubble*  | String | none          | The target chat bubble ID for the equipment check. |

```yaml title="Example"
conditions:
  isChatBubble: customNameplatesEquippedBubble chat
```