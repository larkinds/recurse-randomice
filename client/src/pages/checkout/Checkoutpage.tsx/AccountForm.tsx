import style from "./account-form.module.css"
//todo: this import may need to be updated, if Account is defined elsewhere - or defined in this component itself
import { Account } from "./AccountSummary";


function AccountForm(props?: Account ) {
    return (
          <form className={style['account-form']}>
          <label>Account:
          <input className={style.input}
            type="text"
            defaultValue={props?.username}
            placeholder="username"
          />
          </label>
          
          <label>Email:
          <input
            type="email"
            required
            defaultValue={props?.email}
            placeholder="email"
            className={style.input} /></label>
          
        </form>
       
    );
  }
  
  export default AccountForm;
  