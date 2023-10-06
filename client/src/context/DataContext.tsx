import { Dispatch, createContext } from "react";
import { Cart, StorageData } from "../utils/Types";

const cart: Cart = {
    iceCream: [],
    toppings: []
}

const fakeCart: StorageData = {
    user: "",
    cart
}
interface Test {
    storage: StorageData | null,
    setStorage?: Dispatch<React.SetStateAction<StorageData>> 
}

const fakeTest: Test = {
    storage: fakeCart,
}

export const LocalStorageContext = createContext<Test>(fakeTest)
