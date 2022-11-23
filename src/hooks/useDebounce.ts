import { useEffect, useState } from "react";

const useDebounce = (value = "", delay = 700) => {
  const [debounceValue, setDebounseValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounseValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debounceValue;
};
