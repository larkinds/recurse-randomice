import { useState, useEffect, Dispatch,SetStateAction } from "react";
import { Cart, StorageData } from "../utils/Types";
import { fetchAllItemsFromLocalStorage } from "../utils/LocalStorageUtils";

//to import these functions, destructure the function that you'd like to use. This hook should only be called at the top level, and then the destructured parts passed down as needed.
//const [value, setStorage] = useSetLocalStorage(localStorageCopy, "Test");
type LocalStorageType = [
    storageData: StorageData | {user: string | null, cart: Cart | null},
    dispatch: Dispatch<SetStateAction<StorageData>> 
]

export default function useSetLocalStorage(storageItem: StorageData | null, fallbackState: string): LocalStorageType {
    const localStorageCopy: StorageData | null = fetchAllItemsFromLocalStorage()
    
    const [storage, setStorage] = useState<StorageData>(storageItem || localStorageCopy || fallbackState);

    useEffect(() => {
        let key: string;
        if (storage.cart && storage.user) {
            key = "both";
        } else if (storage.cart) {
            key = "cart"
        } else {
            key = "user"
        }

        if (storage !== fallbackState && key === "both") {
            localStorage.setItem("cart", JSON.stringify(storage.cart));
            localStorage.setItem("user", JSON.stringify(storage.user));
        } else if (storage !== fallbackState && key === "user") {
            localStorage.setItem("user", JSON.stringify(storage.user));
        } else if (storage !== fallbackState && key === "cart") {
            localStorage.setItem("cart", JSON.stringify(storage.cart));
        }
        
    }, [storage, setStorage, fallbackState])

    return [storage, setStorage];
}
