import { useContext } from "react";
import { LocalStorageContext } from "../../context/DataContext";
import { Button, Modal } from "../../components";
import styles from "./cart.module.css";
import {
  IceCreamOrderGroup,
  AddIceCreamOrderGroupAction,
  IceCreamOrderGroupAction,
} from "../../reducers/iceCreamReducer";
import { StorageData } from "../../utils/Types";

type Item = {
  id: string;
  image: string;
  flavor: string;
  price: number;
  quantity: number;
};

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
  cartState: IceCreamOrderGroup[];
  dispatchCart: React.Dispatch<
    AddIceCreamOrderGroupAction | IceCreamOrderGroupAction
  >;
};

export default function Cart({
  isOpen,
  onClose,
  cartState,
  dispatchCart,
}: CartProps) {
  const localStorageContext = useContext(LocalStorageContext);

  function handleDeleteItem(iceCreamItem: IceCreamOrderGroup) {
    dispatchCart({
      type: "delete",
      id: iceCreamItem.id,
    });

    //the rest of this function should be replaced by the method from the localStorage hook that deletes items from localStorage.
    //This is just a temporary work around
    const cartIceCream = localStorageContext.storage?.cart?.iceCream.filter(
      (iceCream) => {
        iceCream.name !== iceCreamItem.iceCreamName;
      },
    );

    const newStorage: StorageData = {
      user: localStorageContext.storage?.user,
      cart: {
        iceCream: cartIceCream || [],
        toppings: localStorageContext.storage?.cart?.toppings,
      },
    };

    localStorageContext.setStorage!(newStorage);
  }

  function handleUpdateQuantity(id: Item["id"], typeOfQuantityChange: string) {
    if (typeOfQuantityChange == "increment") {
      dispatchCart({
        type: "increment",
        id,
      });
    } else {
      dispatchCart({
        type: "decrement",
        id,
      });
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      containerClassNames={styles.modal}
      buttonClassNames={styles.modalCloseBtn}
    >
      {cartState.map((item) => (
        <CartItem key={item.id}>
          <ItemDetails item={item} />
          <div className={styles.actionBtns}>
            <RemoveBtn iceCreamItem={item} onDeleteItem={handleDeleteItem} />
            <Quantity item={item} onUpdate={handleUpdateQuantity} />
          </div>
        </CartItem>
      ))}
    </Modal>
  );
}

function CartItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.cartItem}>{children}</div>;
}

function RemoveBtn({
  onDeleteItem,
  iceCreamItem,
}: {
  onDeleteItem: (iceCreamItem: IceCreamOrderGroup) => void;
  iceCreamItem: IceCreamOrderGroup;
}) {
  return (
    <Button
      className={styles.removeBtn}
      action={() => onDeleteItem(iceCreamItem)}
    >
      Remove
    </Button>
  );
}

function ItemDetails({ item }: { item: IceCreamOrderGroup }) {
  return (
    <div className={styles.details}>
      <div className={styles.flavor}>
        <img src={item.image} alt={item.iceCreamName} />
        <span> {item.iceCreamName} </span>
      </div>
      <p> $0 </p>
    </div>
  );
}

function Quantity({
  item,
  onUpdate,
}: {
  item: IceCreamOrderGroup;
  onUpdate: (id: Item["id"], typeOfQuantityChange: string) => void;
}) {
  function handleIncrement() {
    onUpdate(item.id, "increment");
  }

  function handleDecrement() {
    if (item.quantity > 0) {
      onUpdate(item.id, "decrement");
    }
  }

  return (
    <div className={styles.quantity}>
      <button className={styles.minus} onClick={handleDecrement}>
        -
      </button>
      <span> {item.quantity} </span>
      <button className={styles.plus} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
