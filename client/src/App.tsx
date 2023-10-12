import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Layout from "./components/Layout";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import ErrorPage from "./pages/error/Error";
import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";
import iceCreamOrderGroupReducer, { IceCreamOrderGroup } from "./reducers/iceCreamReducer";
import { fetchItemFromLocalStorage } from "./utils/LocalStorageUtils";
import { Cart } from "./utils/Types";


//todo: replace temp with homepage
export default function App() {
  const initialReducerData: IceCreamOrderGroup[] = getInitialReducerData();
  const [cartState, dispatchCart] = useReducer(iceCreamOrderGroupReducer, initialReducerData)
  const [storage, setStorage] = useSetLocalStorage(null, "Test");

 
  return (
    <LocalStorageContext.Provider value={{storage, setStorage}}>
    <BrowserRouter>
      <Layout cartState={cartState} dispatchCart={dispatchCart}> 
        <Routes>
          <Route path="/" element={<div>Temp</div>}  />
          <Route path="hall-of-fame" element={<HallOfFame dispatchCart={dispatchCart} />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </LocalStorageContext.Provider>
  )
}

function getInitialReducerData(): IceCreamOrderGroup[]  {
  const cart: Cart | string | null = fetchItemFromLocalStorage("cart");

  const initialIceCreamOrder: IceCreamOrderGroup[] = [];

  if (cart && typeof cart !== "string" && cart.iceCream) {
    cart.iceCream.forEach((iceCream) => {
      const id: string = uuid();
      initialIceCreamOrder.push({
        id,
        quantity: iceCream.quantity,
        iceCreamName: iceCream.name,
        image: iceCream.image
      })
    })
  }

  return initialIceCreamOrder;
}

