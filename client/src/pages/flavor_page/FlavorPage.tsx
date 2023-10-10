import styles from ".flavorpage.module.css";
import React from "react";
import ToppingsBar from "../../Components/ToppingsBar";
import Suggestions from "../../Components/Suggestions";
import ProductCard from "../../Components/ProductCard";
import { useParams } from "react-router-dom";

type SuggestionItemProps = {
  id: number;
  image: string;
  urlLink: string;
};

function FlavorPage() {
  const { flavor } = useParams();

  return (
    <>
      <ProductCard
        name={flavor}
        description={"dog"}
        image={"/strawberry-icecream.jpg"}
        creator={"josh"}
        purchaseHistory={10}
      />
      <ToppingsBar />
      <Suggestions
        itemList={[
          { id: 1, image: "/strawberry-icecream.jpg", urlLink: "abv" },
        ]}
      />
    </>
  );
}

export default FlavorPage;
