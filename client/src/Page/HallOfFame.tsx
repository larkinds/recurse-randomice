import FlavorThumbnail, { Flavor } from "../components/FlavorThumbnail";
import styles from "./hall-of-fame.module.css"


export default function HallOfFame() {
    const flavors: Flavor[]  = Array.from( {length: 22}, () =>  ({
            name: "Vanilla",
            price: 0,
            image: "/strawberry-icecream.jpg",
          })
    )

  return (
    <div className={styles.container}>
        {flavors.map((flavor) => <FlavorThumbnail flavor={flavor} />)}
    </div>

  );
}