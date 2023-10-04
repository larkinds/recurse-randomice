import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";


export default function App() {
  const [storage, setStorage] = useSetLocalStorage(null, "Test");

  return (
    <LocalStorageContext.Provider value={storage}>
      <div></div>
    </LocalStorageContext.Provider>
  );
}