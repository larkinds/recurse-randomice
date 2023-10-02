import { useState, useEffect, useRef } from "react";
import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import SortButton from "../../components/SortButton";

import styles from "./hall-of-fame.module.css";

const flavors: Flavor[] = Array.from({ length: 1 }, () => ({
  name: "Vanilla",
  price: 0,
  image: "/strawberry-icecream.jpg",
  date: new Date(Date.parse("11/2/2023")),
  totalSales: 45,
}));

const flavors2: Flavor[] = Array.from({ length: 1 }, () => ({
  name: "Strawberry",
  price: 5,
  image: "/strawberry-icecream.jpg",
  date: new Date(Date.parse("10/2/2023")),
  totalSales: 10,
}));

const flavorsAll = flavors.concat(flavors2);

export default function HallOfFame() {
  const [sortBy, useSortBy] = useState<string>("");
  const firstRender = useRef(true);

  let flavorsTable = flavorsAll.map((flavor) => (
    <FlavorThumbnail key={flavor.name} flavor={flavor} />
  ));

  useEffect(() => {
    if (!firstRender.current) {
      console.log(sortBy);
      flavorsTable = flavorsAll
        .sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1))
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
