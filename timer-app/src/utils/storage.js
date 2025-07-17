export function getData(key) {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem(key);
    if (value === null) return null;
    // Handle theme as plain string, validate it
    if (key === "theme") {
      return value === "light" || value === "dark" ? value : "light"; // Default to 'light' if invalid
    }
    // Handle other keys as JSON
    try {
      return JSON.parse(value);
    } catch (e) {
      console.error(`Error parsing localStorage key "${key}":`, e);
      return null;
    }
  }
  return null;
}

export function setData(key, value) {
  if (typeof window !== "undefined") {
    // Store theme as plain string, others as JSON
    if (key === "theme") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}
