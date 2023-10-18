import styles from ".flavorpage.module.css";
import React from "react";
import ToppingsBar from "../../Components/ToppingsBar";
import Suggestions from "../../Components/Suggestions";
import ProductCard from "../../Components/ProductCard";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const flavorSuggestions = await axios
  .get(`http://localhost:3003/api/icecreams/suggestions/3`)
  .then((res) => res.data);

function FlavorPage() {
  let SuggestionsList = flavorSuggestions.map((dict) => ({
    id: dict["_id"],
    urlLink: `/flavor/${dict["name"]}`,
    image: dict["imageURL"],
  }));

  const navigate = useNavigate();

  const { flavor } = useParams();

  const [creator, setCreator] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3003/api/image", {
  //       prompt: `"${flavor}" flavored icecream`,
  //       flavor: flavor,
  //     })
  //     .then((response) => {
  //       setImage(response.data);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const flavorInfo = await axios
        .get(`http://localhost:3003/api/icecreams/name/${flavor}`)
        .then((res) => res.data);
      if (flavorInfo) {
        setCreator(flavorInfo.userId);
        setImage(flavorInfo.imageURL);
        const hofFlavors = await axios
          .get(`http://localhost:3003/api/hof/name/${flavor}`)
          .then((res) => {
            setQuantity(res.data.quantity);
          });
      } else {
        navigate("/error_page");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ProductCard
        name={flavor}
        description={"Description Goes Here!"}
        image={image}
        creator={creator}
        purchaseHistory={quantity}
      />
      <ToppingsBar />
      <Suggestions itemList={SuggestionsList} />
    </>
  );
}

export default FlavorPage;
