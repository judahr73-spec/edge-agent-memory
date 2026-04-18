# edge-agent-memory
# 🧠 Local Memory Skill for Google AI Edge Gallery

This repository contains a custom **Agent Skill** for the Google AI Edge Gallery. It enables persistent chat history and user preference memory using on-device local storage.

## ✨ Features
* **Persistent Memory:** Conversations survive app restarts.
* **Privacy First:** Data stays 100% on-device in `localStorage`.
* **Context Retrieval:** Search through previous "memories" for personalized help.
* **Memory Reset:** A built-in purge command to clear history if the model feels cluttered.

## 🛠 Installation

1.  **Copy the Manifest URL:**
    ``

2.  **Import to Edge Gallery:**
    * Open **AI Edge Gallery** > **Agent Settings** > **Skills**.
    * Select **Add Skill** > **From URL**.
    * Paste your Raw URL.

3.  **Activate:** Toggle **Local Memory** to **ON**.

## 🚀 Usage

| Action | What to say to the Agent |
| :--- | :--- |
| **Save Fact** | "Remember that I'm allergic to peanuts." |
| **Recall** | "What do you remember about our last project?" |
| **Purge/Reset** | "Clear all your memory" or "Purge chat history." |

> ⚠️ **Warning:** The `purge_history` command is permanent. Once deleted, the agent will not be able to recover previous session summaries.

## 📂 File Structure
* `SKILL.md`: Tool definitions and agent instructions.
* `memory.js`: Logic for saving, fetching, and deleting data.

---
*Created for use with Google AI Edge Gallery Agent Mode.*
