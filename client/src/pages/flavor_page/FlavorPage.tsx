import styles from "./flavorpage.module.css";
import { useEffect, useState } from "react";
import ToppingsBar from "../../Components/ToppingsBar";
import Suggestions from "../../Components/Suggestions";
import ProductCard from "../../Components/ProductCard";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

async function getFlavorSuggestions() {
  // type dict = {[key:string]:{id:string, urlLink:string, image:string}[]};

  const flavorSuggestions = await axios.get(
    `http://localhost:3003/api/icecreams/suggestions/3`,
  );
  return flavorSuggestions.data.map((dict) => ({
    id: dict["_id"],
    urlLink: `/flavor/${dict["name"]}`,
    image: dict["imageURL"],
  }));
}

async function getFlavorInfo(flavor) {
  const response = await axios.get(
    `http://localhost:3003/api/icecreams/name/${flavor}`,
  );
  return response.data;
}

async function getQuantity(flavor) {
  const soldQuantity = await axios.get(
    `http://localhost:3003/api/hof/name/${flavor}`,
  );
  return soldQuantity.data.quantity;
}

export default function FlavorPage() {
  const navigate = useNavigate();
  const { flavor } = useParams();
  const [state, setState] = useState({ creator: "", quantity: 0, image: "" });
  const[flavorSuggestions, setFlavorSuggestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const gotFlavorSuggestions = await getFlavorSuggestions();
      const flavorInfo = await getFlavorInfo(flavor);
      if (gotFlavorSuggestions && flavorInfo) {
        setFlavorSuggestions(gotFlavorSuggestions);
        setState({
          creator: flavorInfo.userId,
          image: flavorInfo.imageURL,
          quantity: await getQuantity(flavor),
        });
      } else {
        navigate("/error_page");
      }
    }
    fetchData();
  }, [flavor, navigate]);

  return (
    <>
      <ProductCard
        name={flavor}
        description={"Description Goes Here!"}
        image={state.image}
        creator={state.creator}
        purchaseHistory={state.quantity}
        className={styles.productCard}
      />
      <ToppingsBar />
      <Suggestions
        itemList={flavorSuggestions}
        className={styles.suggestions}
      />
    </>
  );
}
