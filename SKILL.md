---
name: local-memory
description: Allows the agent to persist chat history and user preferences across sessions.
source: ./memory.js
tools:
...
  - name: save_context
    description: Saves a summary of the current conversation or a specific user preference.
    parameters:
      type: object
      properties:
        content:
          type: string
          description: The summary or fact to remember.
  - name: fetch_history
    description: Retrieves previously saved conversation summaries or facts.
    parameters:
      type: object
      properties:
        search_term:
          type: string
          description: Keyword to find specific memories.
  - name: purge_history
    description: Permanently deletes all stored chat history and summaries from the device. Use this when the user wants a fresh start.
    parameters:
      type: object
      properties: {}
---

# Local Memory Instructions
You are an agent with persistent on-device memory. 

1. **Self-Correction:** If you realize the current session is fresh, use `fetch_history` to see if you have context from previous days.
2. **Persistence:** At the end of a meaningful exchange, use `save_context` to record a brief summary of what was discussed.
3. **Purging:** If the user asks to clear their history or start over, use `purge_history` immediately and confirm it has been done.
4. **Privacy:** Remind the user that this history stays 100% on-device.
