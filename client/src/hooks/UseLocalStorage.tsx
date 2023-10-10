import {
  Dispatch,
  Reducer,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

export default function useLocalStorageWithReducer<T, A>(
  key: string,
  initialState: T,
  reducer: Reducer<T, A>,
  setterFunction: Function,
): { state: T; dispatch: Dispatch<A> } {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    const item = localStorage.getItem(key);
    try {
      const parsed = item ? (JSON.parse(item) as T) : initialState;
      dispatch(setterFunction(parsed));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const item = localStorage.getItem(key);
    const parsed = item ? JSON.parse(item) : initialState;
    if (parsed != state && state != initialState) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, dispatch]);

  return contextValue;
}

export function useLocalStorageWithState<T>(key: string, initialState: T) {
  const [value, setValue] = useState<T>(initialState);

  const contextValue = useMemo(() => {
    return { value, setValue };
  }, [value, setValue]);

  useEffect(() => {
    const item = localStorage.getItem(key);
    try {
      const parsed = item ? (JSON.parse(item) as T) : initialState;
      setValue(parsed);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    const item = localStorage.getItem(key);
    const parsed = item ? JSON.parse(item) : initialState;
    if (parsed != value && value != initialState) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, setValue]);

  return contextValue;
}
