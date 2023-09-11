import styles from "./cart.module.css";

// TODO: This eventually needs to be part of a header component
export default function CartBtn({ handleClick }: { handleClick: () => void }) {
  return (
    <button className={styles.cartBtn} onClick={handleClick}>
      🛒
    </button>
  );
}
