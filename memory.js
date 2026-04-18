// memory.js
export async function save_context({ content }) {
  try {
    const history = JSON.parse(localStorage.getItem('agent_history') || '[]');
    const entry = {
      timestamp: new Date().toISOString(),
      text: content
    };
    history.push(entry);
    
    // Keep only the last 20 summaries to optimize performance
    localStorage.setItem('agent_history', JSON.stringify(history.slice(-20)));
    return "Context successfully saved to on-device storage.";
  } catch (e) {
    return `Error saving memory: ${e.message}`;
  }
}

export async function fetch_history({ search_term }) {
  try {
    const history = JSON.parse(localStorage.getItem('agent_history') || '[]');
    if (history.length === 0) return "No previous history found.";
    
    const results = history
      .filter(item => item.text.toLowerCase().includes(search_term.toLowerCase()))
      .map(item => `[${item.timestamp}] ${item.text}`);
      
    return results.length > 0 ? results.join("\n") : "No matching memories found.";
  } catch (e) {
    return `Error retrieving history: ${e.message}`;
  }
}
export async function purge_history() {
  try {
    localStorage.removeItem('agent_history');
    return "All local chat history has been successfully purged. I now have a clean slate.";
  } catch (e) {
    return `Error clearing memory: ${e.message}`;
  }
}
