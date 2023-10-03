import { createContext } from "react";
import { Cart, StorageData } from "../utils/Types";

const cart: Cart = {
    iceCream: [],
    toppings: []
}

const fakeCart: StorageData = {
    user: "",
    cart
}

export const LocalStorageContext = createContext<StorageData | null>(fakeCart)

