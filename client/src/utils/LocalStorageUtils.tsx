import { StorageData } from "./Types";

 //function to get a specific item from localStorage
 export function fetchItemFromLocalStorage(storageItem: string): string | null {
    return JSON.parse(localStorage.getItem(storageItem) || "{}")
}

//this function returns everything set in localStorage
//this returns a nested array where the value at 0 is the key and the value at 1 is the value
export function fetchAllItemsFromLocalStorage(): StorageData | null {
    const user = localStorage.getItem("user");
    const cart = localStorage.getItem("cart");

    const storageData: StorageData = {};

    if (user && user !== "undefined") {
        storageData.user = JSON.parse(user);
    }
    if (cart &&  cart !== undefined) {
        storageData.cart = JSON.parse(cart);
    }

    return storageData
}