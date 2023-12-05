import { useState } from "react";
import { Link } from "react-router-dom";
import IceCreamLogo from "./IceCreamLogo";
import CartPage from "../pages/cart/CartPage";

export default function IceCreamHeader() {
  const [currentPagePath, setCurrentPagePath] = useState<string>("/");

  function handleSetStarPage(path: string) {
    setCurrentPagePath(path);
  }

  return (
    <header className="w-full flex justify-between items-center h-[100px] px-4">
      <Link to="/" onClick={() => handleSetStarPage("/")}>
        <IceCreamLogo />
        Randomice
      </Link>
      <nav>
        <ul className="flex justify-center list-none mb-0">
          <NavOption
            className="flex"
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
      <div className="flex min-w-[10rem]">
        <button className="mr-2.5">login/logout</button>
        <CartPage />
      </div>
    </header>
  );
}

interface NavOptionProps {
  className?: string;
  destinationUrl: string;
  destinationPage: string;
  currentPagePath: string;
  setCurrentPagePath(pageUrl: string): void;
}

function NavOption({ className, destinationUrl, destinationPage, currentPagePath, setCurrentPagePath }) {
  const isActive = currentPagePath === destinationUrl;
  const linkBaseClasses = "text-center block py-2 px-4 rounded w-auto whitespace-nowrap";
  const activeClasses = "border bg-purple-500 hover:bg-purple-700 text-white";
  const inactiveClasses = "border border-white text-black-500 hover:border-black hover:bg-white";

  return (
    <li className={`${className}`}>
      <Link
        to={destinationUrl}
        className={`${linkBaseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        onClick={() => setCurrentPagePath(destinationUrl)}
      >
        {destinationPage}
      </Link>
    </li>
  );
}
