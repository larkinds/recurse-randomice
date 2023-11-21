import ToppingsCarousel from "./ToppingsCarousel";

import "./toppingsbar.css";

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
