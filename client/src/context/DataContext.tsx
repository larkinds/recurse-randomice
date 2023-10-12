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

export interface StorageContext {
    storage: StorageData | null,
    setStorage?: Dispatch<React.SetStateAction<StorageData>> 
}

const fakeTest: StorageContext = {
    storage: fakeCart,
}

export const LocalStorageContext = createContext<StorageContext>(fakeTest)
