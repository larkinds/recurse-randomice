import { useState } from "react";
import IceCreamLogo from "./Logo";
import styles from "./header.module.css";

export default function IceCreamHeader() {
  const [page, setPage] = useState("/");
  let currentPage = page;

  function showNavOption(page: string) {
    return page == currentPage;
  }

  return (
    <header className={styles["header-container"]}>
      {/* icon - site name (links to home) - nav bar - login/out - cart icon/link */}
      <a href="/">
        <IceCreamLogo />
        <span>IceCream Shop Home</span>
      </a>
      <nav>
        <ul className={styles["nav-container"]}>
          <li
            className={styles["nav-item"]}
            hidden={showNavOption("/hall-of-fame")}
          >
            {/* make these routes actually route */}
            <a href="/hall-of-fame">Hall of Fame</a>
          </li>
          <li
            className={styles["nav-item"]}
            hidden={showNavOption("/random-flavors")}
          >
            <a href="/random-flavors">Generate Random Flavors</a>
          </li>
        </ul>
      </nav>
      <div>
        <button className={styles["login-button"]}>login/logout</button>
        <a href="/cart">cart logo</a>
      </div>
    </header>
  );
}
