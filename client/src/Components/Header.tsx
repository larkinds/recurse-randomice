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
    <header className="w-full flex justify-between items-center h-[100px] px-4 mt-4">
      <Link to="/" onClick={() => handleSetStarPage("/")}>
      <div className="flex items-center justify-center mb-2">
        <IceCreamLogo/>
        </div>
           <span className="mx-2">Randomice </span>  
      </Link>

      <nav>
        <ul className="flex justify-center list-none ml-2">
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
      <div className="flex ml-auto">
        <CartPage />
        <button className="ml-2.5 mr-2.5 hover:underline">login/logout</button>
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
  const inactiveClasses = "border border-white text-black-500 hover:border-black";

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
