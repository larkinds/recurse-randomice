import { useState, useEffect, Dispatch,SetStateAction } from "react";
import { Cart, StorageData } from "../utils/Types";

//to import these functions, destructure the function that you'd like to use. This hook should only be called at the top level, and then the destructured parts passed down as needed.
//const [value, setStorage] = useSetLocalStorage(localStorageCopy, "Test");

export default function useSetLocalStorage(storageItem: StorageData | null, fallbackState: string): StorageData | {
    user: string | null;
    cart: Cart | null;
}, Dispatch<SetStateAction<StorageData | {
    user: string | null;
    cart: Cart | null;
}>>[] {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const cart = JSON.parse(localStorage.getItem("cart") || "{}");
    
    const [storage, setStorage] = useState(storageItem || {user, cart} || fallbackState);

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
