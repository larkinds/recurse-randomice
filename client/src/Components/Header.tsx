import { Link } from "react-router-dom";
import IceCreamLogo from "./IceCreamLogo";
import CartPage from "../pages/cart/CartPage";
import { NavLink } from "react-router-dom";

export default function IceCreamHeader() {
  return (
    <header className="w-full flex justify-between items-center h-[100px] px-4 mt-4">
      <Link to="/">
      <div className="flex items-center justify-center mb-2">
        <IceCreamLogo/>
        </div>
           <span className="mx-2">Randomice </span>  
      </Link>

      <nav>
        <ul className="flex justify-center list-none ml-2">
          <NavOption
            destinationUrl="/hall-of-fame"
            destinationPage="Hall of Fame"
          />

          <NavOption
            destinationUrl="/random-flavors"
            destinationPage="Generate Random Flavors"
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
}

function NavOption({ className, destinationUrl, destinationPage}) {
  const linkBaseClasses = "text-center block py-2 px-4 rounded w-auto whitespace-nowrap";
  const activeClasses = "border bg-purple-500 hover:bg-purple-700 text-white";
  const inactiveClasses = "border border-white text-black-500 hover:border-black";

  return (
    <li className={`${className}`}>
      <NavLink
        to={destinationUrl}
        className={({ isActive }) => 
          `${linkBaseClasses} ${isActive ? activeClasses : inactiveClasses}`
      }
      >
        {destinationPage}
      </NavLink>
    </li>
  );
}
