import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import { AddIceCreamOrderGroupAction, IceCreamOrderGroupAction } from "../../reducers/iceCreamReducer";
import styles from "./hall-of-fame.module.css";

const flavors: Flavor[] = Array.from({ length: 22 }, () => ({
  name: "Reluctant Lemon",
  price: 0,
  image: "/strawberry-icecream.jpg",
}));

type HallOfFameProps = {
  dispatchCart: React.Dispatch<AddIceCreamOrderGroupAction | IceCreamOrderGroupAction>;
};

export default function HallOfFame({dispatchCart}: HallOfFameProps) {
  return (
    <div className={styles.container}>
      {flavors.map((flavor, i) => (
        <FlavorThumbnail key={flavor.name + i} flavor={flavor}  dispatchCart={dispatchCart} />
      ))}
    </div>
  );
}
