// memory.js
export const save_context = async ({ content }) => {
  try {
    // Standardize the content input
    const textToSave = typeof content === 'string' ? content : JSON.stringify(content);
    
    let history = [];
    const rawData = localStorage.getItem('agent_history');
    
    if (rawData) {
      history = JSON.parse(rawData);
    }
    
    history.push({
      timestamp: Date.now(),
      text: textToSave
    });

    // Limit storage to prevent memory overflow errors
    if (history.length > 50) history.shift();

    localStorage.setItem('agent_history', JSON.stringify(history));
    return "Memory stored successfully.";
  } catch (err) {
    // This will help the AI tell you WHY it failed
    return `Storage Error: ${err.message}. Please check app permissions.`;
  }
};

export const fetch_history = async ({ search_term = "" }) => {
  try {
    const rawData = localStorage.getItem('agent_history');
    if (!rawData) return "No history found.";
    
    const history = JSON.parse(rawData);
    const filtered = history.filter(item => 
      item.text.toLowerCase().includes(search_term.toLowerCase())
    );
    
    return filtered.length > 0 
      ? JSON.stringify(filtered.slice(-5)) 
      : "No matches found.";
  } catch (err) {
    return `Fetch Error: ${err.message}`;
  }
};
