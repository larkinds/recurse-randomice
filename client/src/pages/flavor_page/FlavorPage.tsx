import styles from ".flavorpage.module.css";
import React from "react";
import ToppingsBar from "../../Components/ToppingsBar";
import Suggestions from "../../Components/Suggestions";
import ProductCard from "../../Components/ProductCard";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

async function getFlavorImage(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    },
  );
  const result = await response.blob();
  return result;
}

const flavorSuggestions = await axios
  .get(`http://localhost:3003/api/icecreams/suggestions/3`)
  .then((res) => res.data);

function FlavorPage() {
  let SuggestionsList = flavorSuggestions.map((dict) => ({
    id: dict["_id"],
    urlLink: `/flavor/${dict["name"]}`,
    image: "/strawberry-icecream.jpg",
  }));

  const navigate = useNavigate();

  const { flavor } = useParams();

  const [creator, setCreator] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   for (let x in SuggestionsList) {
  //     console.log(x);
  //   }
  // }, []);

  useEffect(() => {
    getFlavorImage({ inputs: `"${flavor}" flavored icecream` }).then(
      (response) => {
        const imgURL = URL.createObjectURL(response);

        const imageElement = document.createElement("img");
        imageElement.src = imgURL;
        console.log(imageElement);
        console.log("Ran");
        // Don't forget to release the URL when you're done with it to free up resources
        //URL.revokeObjectURL(url);
        setImage(imgURL);
      },
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const flavorInfo = await axios
        .get(`http://localhost:3003/api/icecreams/name/${flavor}`)
        .then((res) => res.data);
      if (flavorInfo) {
        setCreator(flavorInfo.userId);
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
      <p>{image}</p>
    </>
  );
}

export default FlavorPage;
