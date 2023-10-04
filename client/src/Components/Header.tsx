import { useCallback, useState } from "react";
import IceCreamLogo from "./IceCreamLogo";
import styles from "./header.module.css";
import CartPage from "../pages/cart/CartPage";

export default function IceCreamHeader() {
  // update this to use react router useLocation
  // when react router is added to the project
  const [page, setPage] = useState("/");

  function getNavOptionPage(navPage: string): void {
    setPage(navPage);
  }

  return (
    <header className={styles["header-container"]}>
      <a href="/">
        <IceCreamLogo />
        <span>Randomice</span>
      </a>
      <nav>
        <ul className={styles["nav-container"]}>
          <NavOption
            destinationUrl="/hall-of-fame"
            destinationPage="Hall of Fame"
            currentPageUrl={page}
            setPage={getNavOptionPage}
          />
          <NavOption
            destinationUrl="/random-flavors"
            destinationPage="Generate Random Flavors"
            currentPageUrl={page}
            setPage={getNavOptionPage}
          />
        </ul>
      </nav>
      <div className={styles["header-end"]}>
        <button className={styles["login-button"]}>login/logout</button>
        <CartPage />
      </div>
    </header>
  );
}

interface NavOptionProps {
  destinationUrl: string;
  destinationPage: string;
  currentPageUrl: string;
  setPage(pageUrl: string): void;
}

function NavOption(props: NavOptionProps) {
  let linkStyle: string = "";
  let currentPageIndicator: string = "";
  let destinationUrl: string = props.destinationUrl;

  if (destinationUrl == props.currentPageUrl) {
    linkStyle = styles["disabled"];
    currentPageIndicator = "*";
  }

  const handleClick = useCallback(() => {
    props.setPage(destinationUrl);
  }, [props.setPage]);

  return (
    <li className={styles["nav-item"]}>
      <a
        href={props.destinationUrl}
        className={linkStyle}
        onClick={handleClick}
      >
        {currentPageIndicator}
        {props.destinationPage}
      </a>
    </li>
  );
}
