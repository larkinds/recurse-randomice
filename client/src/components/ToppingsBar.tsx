import ToppingsCarousel from "./ToppingsCarousel";
import styles from "./toppings-bar.module.css"

function ToppingsBar() {

  return (
    <>
      <div className={styles.container}>
        <h3>toppings bar</h3>
        <ToppingsCarousel />
      </div>
    </>
  );
}

export default ToppingsBar;
