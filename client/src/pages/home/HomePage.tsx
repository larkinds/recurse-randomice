import { useEffect, useState } from "react";
import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import iceCreamService from "../../services/icecreams";
// import styles from "./home.module.css";

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
    setNewFlavor((await makePhrases(1)).pop());
  }

  return (
    <>
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" ></div>
    </div>
    </div>
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">Ice cream store</h2>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Randomice</h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">Enjoy the taste of our randomly generated silly flavors!</p>
    </div>
      {newFlavor && (
        <div>
          <button onClick={handleRegenerateClick}>Regenerate</button>
          <FlavorThumbnail flavor={newFlavor} />
        </div>
      )}
      <div className="flex justify-center flex-wrap max-w-xl gap-x-5 gap-y-10 lg:max-w-none lg:gap-x-10 lg:gap-y-50 lg:m-10">
        {generatedFlavors.map((flavor) => (
          <FlavorThumbnail key={flavor.name} flavor={flavor} />
        ))}
      </div>

      <div className="flex justify-center flex-wrap max-w-xl gap-x-5 gap-y-10 lg:max-w-none lg:gap-x-10 lg:gap-y-50 lg:m-10">
        {userFlavors.map((flavor) => (
          <FlavorThumbnail key={flavor.name} flavor={flavor} />
        ))}
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(10%+36rem)] sm:w-[72.1875rem]" ></div>
    </div>
    </>
  );
}
