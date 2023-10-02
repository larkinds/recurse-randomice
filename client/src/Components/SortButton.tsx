import { useState } from "react";
import "./SortButton.css";

function SortButton({ sortFunction }) {
  const [openSort, setOpenSort] = useState(false);
  const handleDropDown = () => {
    setOpenSort(!openSort);
  };
  const handleDateSort = () => {
    sortFunction("date");
  };
  const handlePopularSort = () => {
    sortFunction("totalSales");
  };
  const handlePriceSort = () => {
    sortFunction("price");
  };
  return (
    <>
      <div className="SortButton">
        <button onClick={handleDropDown}>Sort By</button>
        {openSort && (
          <ul className="SortChoices">
            <li key="date" className="SortOption">
              <button onClick={handleDateSort}>New Arrivals </button>
            </li>
            <li key="popularity" className="SortOption">
              <button onClick={handlePopularSort}> Most Popular</button>
            </li>
            <li key="price" className="SortOption">
              <button onClick={handlePriceSort}> Price: High to Low</button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default SortButton;
