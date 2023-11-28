import { useState } from "react";
import ArrowButton from "./ArrowButton";
import ToppingButton from "./ToppingButton";
import Strawberry from "../assets/images/toppings/strawberry.png";
import Chocolate from "../assets/images/toppings/chocolate.png"
import Nuts from "../assets/images/toppings/nuts.png"
import Sprinkles from "../assets/images/toppings/sprinkles.png"
import Caramel from "../assets/images/toppings/caramel.png"
import Marshmallow from "../assets/images/toppings/marshmallow.png"
import styles from "./toppings-carousal.module.css";

const left = 0
const right = 180

function ToppingsCarousel() {
    const [toppingImgUrls, setToppingImgUrls] = useState([Caramel, Marshmallow, Strawberry, Chocolate, Nuts, Sprinkles]);
    function rotateArr(direction: string): void {
        // don't mutate original array. make a copy then mutate the copy
        const newArr: string[] = toppingImgUrls.slice();
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
            {toppingImgUrls.map((url, index) => (
                <div key={url} hidden={index > 4 ? true : false}>
                    <ToppingButton url={url} />
                </div>
            ))}
            <ArrowButton rotation={right} handleClick={rotateArr} />
        </div>
    );
}

export default ToppingsCarousel;
