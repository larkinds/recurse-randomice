import styles from "./flavor-thumbnail.module.css";
export default function FlavorThumbnail({ flavor }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={flavor.image}
        alt={`Photo of ${flavor.name}`}
      />
      <p>{flavor.name}</p>
      <p>{flavor.price}</p>
    </div>
  );
}
