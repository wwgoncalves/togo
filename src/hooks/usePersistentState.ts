import React, { useState, useEffect, useCallback } from 'react';

export const usePersistentState = <T>(
  key: string,
  defaultValue: T
): readonly [
  T | undefined,
  (valueToPersist: React.SetStateAction<T | undefined>) => void
] => {
  const [state, setState] = useState<T | undefined>(undefined);

  useEffect(() => {
    const storedValueJSON = localStorage.getItem(key);
    if (storedValueJSON) {
      const storedValue = JSON.parse(storedValueJSON);
      setState(storedValue);
    } else {
      setState(defaultValue);
    }
  }, []);

  const setPersistentState = useCallback(
    (valueToPersist: React.SetStateAction<T | undefined>) => {
      setState(valueToPersist);

      const valueToPersistJSON = JSON.stringify(valueToPersist);
      localStorage.setItem(key, valueToPersistJSON);
    },
    [key]
  );

  return [state, setPersistentState] as const;
};
