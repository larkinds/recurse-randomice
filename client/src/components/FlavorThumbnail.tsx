import styles from "./flavor-thumbnail.module.css";

export type Flavor = {
  name: string;
  price: number;
  image: string;
  quantity: number;
  userGenerated: boolean;
};

export default function FlavorThumbnail({ flavor }: { flavor: Flavor }) {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={flavor.image}
          alt={`Photo of ${flavor.name} ice cream`}
        />
        <p className={styles.text}>
          <strong>{flavor.name}</strong>
        </p>
        <p className={styles.text}>${flavor.price}</p>
      </div>
    </>
  );
}
