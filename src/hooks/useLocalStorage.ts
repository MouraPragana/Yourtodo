import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState<string>(() => {
    const currentValue = JSON.parse(
      localStorage.getItem(key) || JSON.stringify(defaultValue)
    );

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export { useLocalStorage };
