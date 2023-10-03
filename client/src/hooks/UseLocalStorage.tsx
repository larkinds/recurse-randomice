import { useState, useEffect } from "react";
import { StorageData } from "../utils/Types";

//to import these functions, destructure the function that you'd like to use just like a built in hook. This hook should only be called at the top level, and then the destructured parts passed down.
//  const [value, setValue] = useSetLocalStorage(localStorageCopy, "Test");

export default function useSetLocalStorage(storageItem: StorageData, fallbackState: string) {
    const user = localStorage.getItem("user");
    const cart = localStorage.getItem("cart");
    
    const [value, setValue] = useState(storageItem ?? {user, cart} ?? fallbackState);

    useEffect(() => {
        let key: string;
        if (value.cart && value.user) {
            key = "both";
        } else if (value.cart) {
            key = "cart"
        } else {
            key = "user"
        }

        if (value !== fallbackState && key === "both") {
            localStorage.setItem("cart", JSON.stringify(value.cart));
            localStorage.setItem("user", JSON.stringify(value.user));
        } else if (value !== fallbackState && key === "user") {
            localStorage.setItem("user", JSON.stringify(value.user));
        } else if (value !== fallbackState && key === "cart") {
            localStorage.setItem("cart", JSON.stringify(value.cart));
        }
    }, [value, setValue, fallbackState])

    return [value, setValue];
}
