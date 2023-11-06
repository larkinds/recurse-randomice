import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import styles from "./hall-of-fame.module.css";
import axios from "axios";

const hofFlavors = await axios.get("http://localhost:3003/api/hof");

const flavors: Flavor[] = [];
hofFlavors.data.forEach((flavor: any) => {
  flavors.push({
    name: flavor["name"],
    price: 0,
    image: "/strawberry-icecream.jpg",
    quantity: flavor["quantity"],
    userGenerated: flavor["isUserGenerated"],
  });
});

export default function HallOfFame() {
  return (
    <div className={styles.container}>
      {flavors.map((flavor) => (
        <FlavorThumbnail key={flavor.name} flavor={flavor} />
      ))}
    </div>
  );
}
