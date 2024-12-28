import { useCallback, useDebugValue, useEffect, useState } from "react";

export const useLocalStorage = (key: string, defaultValue: any) => {
  console.log("key:", key, "defaultValue:", defaultValue);
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useDebugValue("hii");
  useDebugValue(key);
  useDebugValue(value);
  useDebugValue([value, key]);

  // Try with devtools browser and without browser

  // this improve slow render by only using useDebugValue if in deveploment mode and using  and devtools otherwise don't run it.
  useDebugValue(value, (v) => getValueSlowly(v));

  // this makes slow render
  //   useDebugValue(getValueSlowly(value));

  useEffect(() => {
    if (value === undefined) return localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, localStorage]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};

function getValueSlowly(value: string) {
  for (let i = 0; i < 3000000000; i++) {}
  return value;
}
