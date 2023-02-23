import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue !== null) {
      return JSON.parse(localValue);
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
