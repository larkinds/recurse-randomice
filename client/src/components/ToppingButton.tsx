import { useState } from "react";
import styles from "./topping-button.module.css";
import { useCartContext } from "../context/CartContext";
import { addTopping, removeTopping } from "../utils/DispatchUtils";
import { ToppingOrderGroup } from "../utils/Types";

ToppingButton.defaultProps = {
  selected: false,
};

function ToppingButton(props: ToppingOrderGroup) {
  const { dispatch } = useCartContext();

  const selected = props.isAdded;

  function handleClick() {
    if (!selected) {
      dispatch(addTopping(props.name, props.url));
    } else {
      dispatch(removeTopping(props.url));
    }
  }

  return (
    <div key={props.url} className={styles.container}>
      <img
        className={styles["topping-img"]}
        src={props.url}
        alt=""
        onClick={() => console.log(props.url)}
      />
      <button
        style={{ marginTop: "0px", fontSize: "1.25rem" }}
        onClick={handleClick}
      >
        {selected ? "✅" : "🥄"}
      </button>
    </div>
  );
}

export default ToppingButton;
