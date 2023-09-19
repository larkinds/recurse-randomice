import { useState } from "react";
import IceCreamLogo from "./IceCreamLogo";
import styles from "./header.module.css";
import ShoppingCartLogo from "./ShoppingCartLogo";

export default function IceCreamHeader() {
  // update this to use react router useLocation
  // when react router is added to the project
  const [page, setPage] = useState("/");
  let currentPage = page;

  function showNavOption(page: string) {
    let linkStyle = page == currentPage ? styles["disabled"] : "";
    let currentPageIndicator = page == currentPage ? "*" : "";

    return (
      <li className={styles["nav-item"]}>
        <a href={page} className={linkStyle}>
          {currentPageIndicator}
          {page}
        </a>
      </li>
    );
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
          {showNavOption("/hall-of-fame")}
          {showNavOption("/random-flavors")}
        </ul>
      </nav>
      <div>
        <button className={styles["login-button"]}>login/logout</button>
        <a href="/cart">
          <ShoppingCartLogo />
        </a>
      </div>
    </header>
  );
}
