import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";
import FlavorPage from "./pages/flavor_page/FlavorPage";
import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";

//todo: replace temp with homepage
export default function App() {
  const [storage, setStorage] = useSetLocalStorage(null, "Test");

  return (
    <LocalStorageContext.Provider value={storage}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<div>Temp</div>} />
            <Route path="hall-of-fame" element={<HallOfFame />} />
            <Route path="flavor/:flavor" element={<FlavorPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LocalStorageContext.Provider>
  );
}
