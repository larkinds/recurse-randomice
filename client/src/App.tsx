import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";
import { CartContextProvider } from "./context/CartContext";
import { UserContextProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="hall-of-fame" element={<HallOfFame />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </CartContextProvider>
    </UserContextProvider>
  )
}
