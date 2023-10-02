import useSetLocalStorage from "./hooks/UseLocalStorage";
import { fetchAllItemsFromLocalStorage } from "./utils/LocalStorageUtils";
import { LocalStorageContext } from "./context/DataContext";
import { StorageData } from "./utils/Types";
import ProductCard from "./components/ProductCard";

const fakeUser: StorageData = {
  user: "Larkin",
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
  const localStorageCopy: StorageData = fetchAllItemsFromLocalStorage();
  console.log(localStorageCopy);
  const [value, setValue] = useSetLocalStorage(localStorageCopy, "Test");

  return (
    <LocalStorageContext.Provider value={value}>
      <div>
        <button onClick={() => setValue(fakeUser)}>1</button>
        <button onClick={() => setValue(fakeUserTwo)}>2</button>
        <p>{value.user}</p>
        {/* <p>{value.value}</p> */}

      </div>
      <ProductCard name={""} description={""} image={""} creator={""} purchaseHistory={0} />
    </LocalStorageContext.Provider>
  );
}