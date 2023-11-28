import {
  Dispatch,
  Reducer,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

/**
 * A custom hook for managing local storage with a state managed by a reducer function.
 *
 * @template T - The type of the state managed by the reducer.
 * @template A - The type of actions that the reducer can handle.
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {T} initialState - The initial state.
 * @param {Reducer<T, A>} reducer - The reducer function responsible for state updates.
 * @param {Function} setterFunction - A function to set the state based on parsed data.
 * 
 * @returns {{ state: T, dispatch: Dispatch<A> }} - An object containing the state and dispatch function.
 */
export default function useLocalStorageWithReducer<T, A>(
  key: string,
  initialState: T,
  reducer: Reducer<T, A>,
  setterFunction: Function,
): { state: T; dispatch: Dispatch<A> } {
  // Retrieve the state and dispatch function using useReducer.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Create a context value using useMemo to optimize performance.
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  // Initialize the state from local storage when the component is mounted.
  useEffect(() => {
    const item = localStorage.getItem(key);
    try {
      const parsed = item ? (JSON.parse(item) as T) : initialState;
      dispatch(setterFunction(parsed));
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Update local storage when the state changes.
  useEffect(() => {
    const item = localStorage.getItem(key);
    const parsed = item ? JSON.parse(item) : initialState;
    if (parsed != state && state != initialState) {
      localStorage.setItem(key, JSON.stringify(state));
    } 
  }, [state, dispatch]);

  return contextValue;
}

/**
 * A custom hook for managing local storage with simple state using `useState`.
 *
 * @template T - The type of the state.
 * @param {string} key - The key under which the data is stored in local storage.
 * @param {T} initialState - The initial state.
 * 
 * @returns {{ value: T, setValue: Function }} - An object containing the state and a function to set the state.
 */
export function useLocalStorageWithState<T>(key: string, initialState: T): { value: T; setValue: Function; } {
  // Initialize the state and its setter function using useState.
  const [value, setValue] = useState<T>(initialState);

  // Create a context value using useMemo to optimize performance.
  const contextValue = useMemo(() => {
    return { value, setValue };
  }, [value, setValue]);

  // Initialize the state from local storage when the component is mounted.
  useEffect(() => {
    const item = localStorage.getItem(key);
    try {
      const parsed = item ? (JSON.parse(item) as T) : initialState;
      setValue(parsed);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Update local storage when the state changes.
  useEffect(() => {
    const item = localStorage.getItem(key);
    const parsed = item ? JSON.parse(item) : initialState;
    if (parsed != value && value != initialState) {
      localStorage.setItem(key, JSON.stringify(value));
    } 
  }, [value, setValue]);

  return contextValue;
}
