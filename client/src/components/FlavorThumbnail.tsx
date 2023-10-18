import styles from "./flavor-thumbnail.module.css";
import { useNavigate } from "react-router-dom";

export type Flavor = {
  name: string;
  price: number;
  imageURL: string;
  quantity: number;
  userGenerated: boolean;
};

export default function FlavorThumbnail({ flavor }: { flavor: Flavor }) {
  let navigate = useNavigate();
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={flavor.imageURL}
          alt={`Photo of ${flavor.name}`}
          onClick={() => {
            navigate(`/flavor/${flavor.name}`);
          }}
        />
        <p className={styles.text}>
          <strong>{flavor.name}</strong>
        </p>
        <p className={styles.text}>${flavor.price}</p>
      </div>
    </>
  );
}
