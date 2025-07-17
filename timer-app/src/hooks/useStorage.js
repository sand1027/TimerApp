import { useState, useEffect } from "react";
import { getData, setData } from "../utils/storage";

export default function useStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = getData(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  useEffect(() => {
    setData(key, value);
  }, [key, value]);

  return [value, setValue];
}
