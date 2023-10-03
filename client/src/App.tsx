import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";

//todo: replace temp with homepage

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Temp</div>}  />
          <Route path="hall-of-fame" element={<HallOfFame/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}