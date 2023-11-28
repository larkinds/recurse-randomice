import ToppingsCarousel from "./ToppingsCarousel";
import styles from "./toppings-bar.module.css"

function ToppingsBar() {

  return (
    <>
      <div className={styles.container}>
        <h3 style={{fontSize: "1.5rem"}}>Toppings Bar</h3>
        <ToppingsCarousel />
      </div>
    </>
  );
}

export default ToppingsBar;
