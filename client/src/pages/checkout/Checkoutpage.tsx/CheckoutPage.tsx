import styles from "./checkout-page.module.css";
import AccountSummary from "./AccountSummary";

// to do: grab account information from context, pass it to Account Summary
    //may need to grab customer's email from db

const tempAccount = {
  username: "Larkin",
  email: "larkinsmith.work@gmail.com",
};

export default function CheckoutPage() {
  return (
    <div className={styles.checkout}>
      <div className={styles.left}>
        <div>Placeholder for Cart Header</div>
        <div>Placeholder for Cart</div>

        <div className={styles["horizontal-line"]} aria-hidden="true"></div>
        <AccountSummary account={null} />
      </div>

      <div className={styles.right}>
        <div className={styles["vertical-line"]} aria-hidden="true"></div>
        <div>Placeholder for Price Total Component </div>
      </div>
    </div>
  );
}
