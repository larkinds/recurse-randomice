import { useEffect, useState } from "react";
import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import iceCreamService from "../../services/icecreams";
import styles from "./home.module.css";

const makePhrases = async (len: number) => {
  const userFlavors: Flavor[] = new Array<Flavor>();

  for (let i = 0; i < len; i++) {
    let adjective = (await iceCreamService.getAdjective()).name;
    let noun = (await iceCreamService.getNoun()).name;
    let phrase = adjective + " " + noun;
    userFlavors.push({
      name: phrase,
      price: 0,
      image: "/strawberry-icecream.jpg",
    });
  }
  return userFlavors;
};

export default function HomePage() {
  const [generatedFlavors, setGeneratedFlavors] = useState<Flavor[]>([]);
  const [userFlavors, setUserFlavors] = useState<Flavor[]>([]);
  const [newFlavor, setNewFlavor] = useState<Flavor>();

  const generateFlavors = async () => {
    setGeneratedFlavors(await iceCreamService.getFive());
    setUserFlavors(await makePhrases(5));
    setNewFlavor((await makePhrases(1)).pop());
  };

  useEffect(() => {
    generateFlavors();
  }, []);

  async function handleRegenerateClick() {
    console.log("clicked");
    setNewFlavor((await makePhrases(1)).pop());
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
