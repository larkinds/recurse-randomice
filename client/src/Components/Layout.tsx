import IceCreamHeader from "./Header"
import styles from "./layout.module.css"

export default function Layout(props: { children: React.ReactElement | null }) {
  return (
    <div className={styles.container}>
      <IceCreamHeader />
      <main>{props.children}</main>
    </div>
  );
}
