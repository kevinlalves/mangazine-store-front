import { useCallback, useState } from "react"

const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => JSON.parse(window.localStorage.getItem(key)));

  const setValue = useCallback((value) => {
    setStoredValue(value);

    value ? window.localStorage.setItem(key, JSON.stringify(value)) : window.localStorage.removeItem(key);
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;
