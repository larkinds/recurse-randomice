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

const imgUrls = [ Caramel, Marshmallow, Strawberry, Chocolate, Nuts, Sprinkles ]

const left = 0
const right = 180
function ToppingsCarousel() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', overflow: 'auto'}}>
        <ArrowButton rotation={left} />
        {imgUrls.map((url) => (
            <div key={url}>
                <ToppingButton url={url} />
            </div>
        ))}
        <ArrowButton rotation={right} />
    </div>
  );
}

export default ToppingsCarousel;
