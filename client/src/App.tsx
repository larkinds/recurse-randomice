import HomePage from "./pages/home/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";
import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";
import SingleProduct from "./pages/singleProduct/SingleProduct";

//todo: replace temp with homepage
export default function App() {
  const [storage, setStorage] = useSetLocalStorage(null, "Test");
 
  return (
    <LocalStorageContext.Provider value={storage}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}  />
          <Route path="hall-of-fame" element={<HallOfFame/>}/>
          <Route path="*" element={<ErrorPage />} />
          <Route path="flavor/:flavorName" element={<SingleProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </LocalStorageContext.Provider>
  )
}
