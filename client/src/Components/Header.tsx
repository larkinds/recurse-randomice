import { useState } from "react";
import { Link } from "react-router-dom";
import IceCreamLogo from "./IceCreamLogo";
import CartPage from "../pages/cart/CartPage";
import styles from "./header.module.css";
import LogIn from "./LogIn";

export default function IceCreamHeader() {
  const [currentPagePath, setCurrentPagePath] = useState<string>("/");

  function handleSetStarPage(path: string) {
    setCurrentPagePath(path);
  }

  return (
    <header className={styles["header-container"]}>
      <Link to="/" onClick={() => handleSetStarPage("/")}>
        <IceCreamLogo />
        Randomice
      </Link>
      <nav>
        <ul className={styles["nav-container"]}>
          <NavOption
            destinationUrl="/hall-of-fame"
            destinationPage="Hall of Fame"
            currentPagePath={currentPagePath}
            setCurrentPagePath={setCurrentPagePath}
          />
          <NavOption
            destinationUrl="/random-flavors"
            destinationPage="Generate Random Flavors"
            currentPagePath={currentPagePath}
            setCurrentPagePath={setCurrentPagePath}
          />
        </ul>
      </nav>
      <div className={styles["header-end"]}>
        <LogIn />
        <></>
        <CartPage />
      </div>
    </header>
  );
}

interface NavOptionProps {
  destinationUrl: string;
  destinationPage: string;
  currentPagePath: string;
  setCurrentPagePath(pageUrl: string): void;
}

function NavOption(props: NavOptionProps) {
  return (
    <li className={styles["nav-item"]}>
      <Link
        to={props.destinationUrl}
        onClick={() => props.setCurrentPagePath(props.destinationUrl)}
      >
        {props.currentPagePath === props.destinationUrl ? "*" : ""}
        {props.destinationPage}
      </Link>
    </li>
  );
}
