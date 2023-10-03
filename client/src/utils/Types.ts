import { Dispatch, SetStateAction } from "react";

export interface Topping {
    name: string,
    quantity: number
}

export interface IceCream {
    name: string,
    quantity: number
}

export interface Cart {
    iceCream: IceCream[],
    toppings: Topping[]
}

export interface StorageData {
    user?: string | null;
    cart?: Cart | null;
}

export interface StorageContext {
    storageData: StorageData,
    setStorageData: Dispatch<SetStateAction<StorageData>>
}