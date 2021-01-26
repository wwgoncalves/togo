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
    (newValueOrUpdaterFunction: React.SetStateAction<T | undefined>) => {
      setState(newValueOrUpdaterFunction);

      // Using setState() to take and guarantee newValue just set will be persisted
      setState((valueToPersist) => {
        const valueToPersistJSON = JSON.stringify(valueToPersist);
        localStorage.setItem(key, valueToPersistJSON);

        return valueToPersist;
      });
    },
    [key]
  );

  return [state, setPersistentState] as const;
};
