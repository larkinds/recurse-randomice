import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useLocalStorageWithState } from "../hooks/UseLocalStorage";

// Define the initial state for the user context.
const initialState = "";

// Create a context for the user and setUser using createContext.
export const UserContext = createContext<{
  user: string;
  setUser: Function;
}>({
  user: initialState,
  setUser: () => {},
});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize the user state and setUser function using useLocalStorageWithState.
  const { value: user, setValue: setUser } = useLocalStorageWithState(
    "user",
    "",
  );

  return (
    // Provide the context value to children components using UserContext.Provider.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * A custom hook to access the UserContext and retrieve the user state and setUser function.
 * You can use this hook in your components to access and modify the user state.
 *
 * @returns {{ user: string, setUser: Function }} - An object containing the user state and setUser function.
 */
export function useUserContext(): { user: string; setUser: Function } {
  return useContext(UserContext);
}
