import { useState, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import ToppingButton from "./ToppingButton";
import styles from "./toppings-carousal.module.css";
import { useCartContext } from "../context/CartContext";
import { ToppingOrderGroup } from "../utils/Types";

const left = 0
const right = 180

function ToppingsCarousel() {
    const { state } = useCartContext()
    const [toppingImgUrls, setToppingImgUrls] = useState<ToppingOrderGroup[]>([]);

    useEffect(() => {
        setToppingImgUrls(state.toppings)
    }, [state])
    
    function rotateArr(direction: string): void {
        const newArr: ToppingOrderGroup[] = toppingImgUrls.slice();
        if (newArr.length > 1) {
            if (direction == 'left') {
                const topping = newArr.shift();
                if (topping) newArr.push(topping);
            } else {
                const topping = newArr.pop();
                if (topping) newArr.unshift(topping);
            }
        }
        setToppingImgUrls(newArr);
    }

    return (
        <div className={styles.container}>
            <ArrowButton rotation={left} handleClick={rotateArr} />
            {toppingImgUrls.map((properties, index) => (
                <div key={properties.url} hidden={index > 4 ? true : false}>
                    <ToppingButton {...properties} />
                </div>
            ))}
            <ArrowButton rotation={right} handleClick={rotateArr} />
        </div>
    );
}

export default ToppingsCarousel;
