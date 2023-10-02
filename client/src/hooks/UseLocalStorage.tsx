import { useState, useEffect } from "react";
import { StorageData } from "../utils/Types";

//to import these functions, destructure the function that you'd like to use just like a built in hook:
// const { setItemInLocalStorage, fetchItemFromLocalStorage, fetchAllItemsFromLocalStorage } = useSetLocalStorage()

export default function useSetLocalStorage(storageItem: StorageData, fallbackState: string) {
    const user = localStorage.getItem("user");
    const cart = localStorage.getItem("cart")
    //danger: what if both user and cart are there?
    
    const [value, setValue] = useState<StorageData>(storageItem ?? {user, cart} ?? fallbackState);

    useEffect(() => {
        console.log("useEffect")
        if (value !== fallbackState) {
            localStorage.setItem(value.key, JSON.stringify(value.value));
        }
    }, [value, setValue, fallbackState])

    return [value, setValue];
}
