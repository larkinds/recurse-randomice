import { useState } from "react";
import ToppingsCarousel from "./ToppingsCarousel";

import "./ToppingsBar.css";

function ToppingsBar() {
  return (
    <>
      <div className="toppingbar-title">
        <strong>toppings</strong>
        <ToppingsCarousel />
      </div>
    </>
  );
}

export default ToppingsBar;
