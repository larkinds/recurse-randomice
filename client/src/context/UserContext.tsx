import { ReactNode } from "react";
import { createContext, useContext } from "react";
import { useLocalStorageWithState } from "../hooks/UseLocalStorage";

const initialState = "";

export const UserContext = createContext<{
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}>({ user: initialState, setUser: () => {} });

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { value: user, setValue: setUser } = useLocalStorageWithState(
    "user",
    "",
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
