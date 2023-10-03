import { useEffect, useState } from "react";
import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import iceCreamService from "../../services/icecreams";
import styles from "./home.module.css";

const makePhrases = async (len: number) => {
  const userFlavors: Flavor[] = new Array<Flavor>();

  for (let i = 0; i < len; i++) {
    let phrase = "";
    await iceCreamService.getAdjective().then((data) => {
      phrase += data.name;
    });
    await iceCreamService.getNoun().then((data) => {
      phrase = phrase + " " + data.name;
      userFlavors.push({
        name: phrase,
        price: 0,
        image: "/strawberry-icecream.jpg",
      });
    });
  }
  return userFlavors;
};

export default function HomePage() {
  const [generatedFlavors, setGeneratedFlavors] = useState<Flavor[]>([]);
  const [userFlavors, setUserFlavors] = useState<Flavor[]>([]);
  const [newFlavor, setNewFlavor] = useState<Flavor>();

  useEffect(() => {
    iceCreamService.getFive().then((data) => {
      setGeneratedFlavors(data);
    });
    makePhrases(5).then((data) => {
      setUserFlavors(data);
    });
    makePhrases(1).then((data) => {
      setNewFlavor(data[0]);
    });
  }, []);

  function handleRegenerateClick() {
    console.log("clicked");
    makePhrases(1).then((data) => {
      setNewFlavor(data[0]);
    });
  }

  return (
    <>
      <div className={styles.container}>
        {generatedFlavors.map((flavor) => (
          <FlavorThumbnail key={flavor.name} flavor={flavor} />
        ))}
      </div>

      <div className={styles.container}>
        {userFlavors.map((flavor) => (
          <FlavorThumbnail key={flavor.name} flavor={flavor} />
        ))}
      </div>

      {newFlavor && (
        <div>
          <button onClick={handleRegenerateClick}>Regenerate</button>
          <FlavorThumbnail flavor={newFlavor} />
        </div>
      )}
    </>
  );
}
