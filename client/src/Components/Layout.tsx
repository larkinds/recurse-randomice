import { IceCreamOrderGroup, AddIceCreamOrderGroupAction, IceCreamOrderGroupAction } from "../reducers/iceCreamReducer";
import IceCreamHeader from "./Header";
import styles from "./layout.module.css";

export default function Layout(props: { children: React.ReactElement | null, cartState: IceCreamOrderGroup[];
  dispatchCart: React.Dispatch<AddIceCreamOrderGroupAction | IceCreamOrderGroupAction>; }) {
  return (
    <div className={styles.container}>
      <IceCreamHeader cartState={props.cartState} dispatchCart={props.dispatchCart} />
      <main>{props.children}</main>
    </div>
  );
}
