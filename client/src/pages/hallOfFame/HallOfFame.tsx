import { useState, useEffect, useRef } from "react";
import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import SortButton from "../../components/SortButton";

import styles from "./hall-of-fame.module.css";
import axios from "axios";

const hofFlavors = await axios
  .get("http://localhost:3003/api/hof")
  .then((result) => {
    return result.data;
  });

const flavors: Flavor[] = [];
hofFlavors.forEach((flavor: any) => {
  console.log(flavor);
  flavors.push({
    name: flavor["name"],
    price: 0,
    image: "/strawberry-icecream.jpg",
    quantity: flavor["quantity"],
    date: flavor["dateCreated"],
    userGenerated: flavor["isUserGenerated"],
  });
});

export default function HallOfFame() {
  const [sortBy, useSortBy] = useState<string>("");
  const firstRender = useRef(true);

  let flavorsTable = flavors.map((flavor) => (
    <FlavorThumbnail key={flavor.name} flavor={flavor} />
  ));

  useEffect(() => {
    if (!firstRender.current) {
      console.log(sortBy);
      flavorsTable = flavors
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
        .map((flavor) => <FlavorThumbnail key={flavor.name} flavor={flavor} />);
    } else {
      firstRender.current = false;
    }
  }, [sortBy]); // Only re-run the sortBy changes
  return (
    <>
      <SortButton sortFunction={useSortBy} />
      <div className={styles.container}>{flavorsTable}</div>
    </>
  );
}
