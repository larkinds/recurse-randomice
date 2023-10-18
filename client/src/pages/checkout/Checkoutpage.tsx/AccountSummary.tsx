import { useState } from "react";
import styles from "./account-summary.module.css";
import AccountForm from "./AccountForm";

export interface Account {
  username: string;
  email: string;
}

interface AccountSummaryProps {
  account: Account | null;
}

function AccountSummary(props: AccountSummaryProps) {
  const [newCustomer, setNewCustomer] = useState(false);
  const [guest, setGuest] = useState(false);

  return (
    <section
      aria-labelledby="account-information"
      className={styles["account-section"]}
    >
      <h3 id="account-information">Account Information</h3>
      {props.account ? (
        <AccountForm username={props.account.username} email={props.account.email} />
      ) : guest || newCustomer ? (
        <>
          <button aria-label="back" onClick={() => {setGuest(false); setNewCustomer(false)}} style={{width: "200px"}}>←</button>
          <AccountForm username="" email="" />
        </>
        
      ) : 
      <div className={styles["account-buttons"]}>
        <button type="button" onClick={(() => setNewCustomer(true))} style={{width: "200px"}}>Sign Up</button>
        <button type="button" onClick={() => setGuest(true)} style={{width: "200px"}}>Checkout as Guest</button>
      </div> }
   
     
    </section>
  );
}

export default AccountSummary;
