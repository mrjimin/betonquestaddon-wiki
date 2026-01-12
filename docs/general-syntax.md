---
sidebar_position: 4
---

# General Syntax

This page explains common parameters and formatting rules that apply to multiple Objectives, Events, and Conditions within BetonQuestAddon.

## Document Notation

Before looking at specific features, please understand how the syntax is written in this documentation:

| Notation      | Meaning      | Description                                              |
|:--------------|:-------------|:---------------------------------------------------------|
| **`<value>`** | **Required** | This parameter must be provided for the feature to work. |
| **`[value]`** | **Optional** | This parameter has a default value and can be omitted.   |

---

## Multiple IDs
Most **Objective** `id` parameters support multiple entries using a comma-separated list. This allows you to track several different items, blocks, or entities within a single objective.

:::tip[Format & Constraints]
* **Format:** `A,B,C`
* **Constraint:** IDs must be separated by a **comma (,)** without any **spaces**.
* **Example:** `stone,dirt,grass_block` (Correct) vs `stone, dirt` (Incorrect)
:::

---

## Cancelled Actions
If an objective syntax includes the **`isCancelled`** parameter, it allows you to track actions that were prevented by other plugins (e.g., trying to break a block in a protected WorldGuard region).

| Value                   | Description                                                                    |
|:------------------------|:-------------------------------------------------------------------------------|
| **`isCancelled:false`** | (Default) Only tracks actions that were successfully completed.                |
| **`isCancelled:true`**  | Tracks the action even if the event was cancelled/prevented by another plugin. |

:::info[Use Case]
Use **`isCancelled:true`** when you want to trigger an objective based on an *attempt* rather than a successful result.  
**Example:** `block stone amount:1 isCancelled:true`
:::