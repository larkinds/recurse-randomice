import styles from "./error.module.css"
export default function ErrorPage() {
    return <div className={styles.error}>
        <h2>Oh no! An unexpected error has occurred.</h2>
        <img src="/dropped-ice-cream-cone-vector.png" width={"250px"} height={"250px"} />
    </div>;
  }