import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import styles from "./hall-of-fame.module.css";

const flavors: Flavor[] = Array.from({ length: 22 }, () => ({
  name: "Reluctant Lemon",
  price: 0,
  image: "/strawberry-icecream.jpg",
}));

export default function HallOfFame() {
  return (
    <div className={styles.container}>
      {flavors.map((flavor) => (
        <FlavorThumbnail key={flavor.name} flavor={flavor} />
      ))}
    </div>
  );
}
