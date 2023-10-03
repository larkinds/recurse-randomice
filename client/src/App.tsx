import useSetLocalStorage from "./hooks/UseLocalStorage";
import { LocalStorageContext } from "./context/DataContext";
import { StorageData } from "./utils/Types";
import ProductCard from "./components/ProductCard";


const fakeUser: StorageData = {
  user: "Larkin",
  cart: {
    iceCream: [{
      name: "relucantant lemon",
      quantity: 3
    }],
    toppings: [{
      name: "skittles",
      quantity: 1
    }]
  }
};

const fakeUserTwo: StorageData = {
  user: "Josh",
  cart: {
    iceCream: [{
      name: "strawberry shortcake",
      quantity: 5
    }],
    toppings: [{
      name: "sprinkles",
      quantity: 1
    }]
  }
};

export default function App() {
  const [storage, setStorage] = useSetLocalStorage(null, "Test");

  return (
    <LocalStorageContext.Provider value={storage}>
      <div>
        <button onClick={() => setStorage(fakeUser)}>1</button>
        <button onClick={() => setStorage(fakeUserTwo)}>2</button>
        <p>{storage?.user}</p>
      </div>
      <ProductCard name={""} description={""} image={""} creator={""} purchaseHistory={0} />
    </LocalStorageContext.Provider>
  );
}