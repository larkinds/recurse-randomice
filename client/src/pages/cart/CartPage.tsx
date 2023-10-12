import { useState } from "react";
import Cart from "./Cart";
import CartBtn from "./CartBtn";
import {
  IceCreamOrderGroup,
  AddIceCreamOrderGroupAction,
  IceCreamOrderGroupAction,
} from "../../reducers/iceCreamReducer";

type CartPageProps = {
  cartState: IceCreamOrderGroup[];
  dispatchCart: React.Dispatch<
    AddIceCreamOrderGroupAction | IceCreamOrderGroupAction
  >;
};

export default function CartPage({ cartState, dispatchCart }: CartPageProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <CartBtn handleClick={() => setIsCartOpen(true)} />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartState={cartState}
        dispatchCart={dispatchCart}
      />
    </>
  );
}
