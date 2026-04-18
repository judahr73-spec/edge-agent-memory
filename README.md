# 🧠 Local Memory Skill for Google AI Edge Gallery

This repository contains a custom **Agent Skill** for the Google AI Edge Gallery (Gemma 4). It adds persistent long-term memory to your agent using on-device local storage.

## 🛠 Direct Installation Link
To install this skill, copy the "Raw" URL below and paste it into the **Add Skill > From URL** section of the AI Edge Gallery app:

`https://raw.githubusercontent.com/judahr73-spec/edge-agent-memory/refs/heads/main/SKILL.md`

## ✨ Key Features
* **Persistent Context:** Remembers facts and conversation summaries across different sessions.
* **Privacy-First:** All data is stored in your device's `localStorage`. No data is sent to the cloud.
* **Memory Management:** Includes a "Purge" tool to clear history if the agent's context becomes too cluttered.

## 🚀 How to Use

| Command Type | What to say to the Agent |
| :--- | :--- |
| **Save Fact** | "Remember that I prefer dark mode and Python." |
| **Recall** | "What do you remember about our previous project?" |
| **Reset Memory** | "Purge all chat history" or "Clear your memory." |

## 📂 Repository Contents
* [**SKILL.md**](https://github.com/judahr73-spec/edge-agent-memory/blob/main/SKILL.md): The manifest defining the `save_context`, `fetch_history`, and `purge_history` tools.
* **memory.js**: The JavaScript engine handling the storage logic (make sure this file is in the same folder as SKILL.md).

---
*Powered by Google AI Edge & Gemma 4.*
