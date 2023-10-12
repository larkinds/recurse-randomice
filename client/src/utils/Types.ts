export interface Topping {
    name: string,
    quantity: number
}

export interface IceCream {
    name: string,
    quantity: number,
    image: string
}

export interface Cart {
    iceCream: IceCream[],
    toppings?: Topping[]
}

export interface StorageData {
    user?: string | null;
    cart?: Cart | null;
}
