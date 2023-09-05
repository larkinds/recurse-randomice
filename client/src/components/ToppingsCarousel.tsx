import { useState } from "react";
import ArrowButton from "./ArrowButton";
import ToppingButton from "./ToppingButton";
import Strawberry from "../assets/images/toppings/strawberry.png";
import Chocolate from "../assets/images/toppings/chocolate.png"
import Nuts from "../assets/images/toppings/nuts.png"
import Sprinkles from "../assets/images/toppings/sprinkles.png"
import Caramel from "../assets/images/toppings/caramel.png"
import Marshmallow from "../assets/images/toppings/marshmallow.png"

import "./ToppingsCarousel.css";

const left = 0
const right = 180

function ToppingsCarousel() {
    const [toppingImgUrls, setToppingImgUrls] = useState([ Caramel, Marshmallow, Strawberry, Chocolate, Nuts, Sprinkles ]);
    function rotateArr(direction: string): void {
        // don't mutate original array. make a copy then mutate the copy
        let newArr: string[] = toppingImgUrls.slice();

        if (direction == 'left') {
            newArr.push(newArr.shift());
        } else {
            newArr.unshift(newArr.pop());
        }
        setToppingImgUrls(newArr);
    }
    
  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'auto'}}>
        <ArrowButton rotation={left} buttonFunc={rotateArr}/>
        {toppingImgUrls.map((url) => (
            <div key={url}>
                <ToppingButton url={url} />
            </div>
        ))}
        <ArrowButton rotation={right} buttonFunc={rotateArr}/>
    </div>
  );
}

export default ToppingsCarousel;
