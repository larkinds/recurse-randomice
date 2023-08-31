import styles from "./flavor-thumbnail.module.css";

export type Flavor = {
  name: string,
  price: number,
  image: string,
};


export default function FlavorThumbnail( {flavor} : {flavor: Flavor}) {
  return (
    <>    
    <div className={styles.container}>
      <img
        className={styles.image}
        src={flavor.image}
        alt={`Photo of ${flavor.name}`}
      />
      <p><strong>{flavor.name}</strong></p>
      <p>${flavor.price}</p>
    </div>
    </>

  );
}
