import axios from "axios";
import { useEffect, useState } from "react";
import FlavorThumbnail, { Flavor } from "../../components/FlavorThumbnail";
import iceCreamService from "../../services/icecreams";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const makePhrases = async (len: number) => {
  const userFlavors: Flavor[] = new Array<Flavor>();

  for (let i = 0; i < len; i++) {
    let adjective = (await iceCreamService.getAdjective()).name;
    let noun = (await iceCreamService.getNoun()).name;
    let phrase = adjective + " " + noun;
    userFlavors.push({
      name: phrase,
      price: 0,
      imageURL: "/strawberry-icecream.jpg",
      quantity: 1,
      userGenerated: false,
    });
  }
  return userFlavors;
};

export default function HomePage({ currentFlavor = null }) {
  const { isLoaded, isSignedIn, user } = useUser();
  let navigate = useNavigate();

  const [generatedFlavors, setGeneratedFlavors] = useState<Flavor[]>([]);
  const [userFlavors, setUserFlavors] = useState<Flavor[]>([]);
  const [newFlavor, setNewFlavor] = useState<Flavor>();
  const [generatedImage, setGeneratedImage] = useState<string>("");

  async function handleSaveFlavor() {
    if (isSignedIn) {
      await iceCreamService.saveFlavor({
        name: newFlavor.name,
        userId: user.username,
        isUserGenerated: true,
        dateCreated: new Date(),
        imageURL: generatedImage,
      });
    } else {
      navigate("sign-in");
    }
  }

  const generateFlavors = async () => {
    setGeneratedFlavors(await iceCreamService.getFive());
    setUserFlavors(await makePhrases(5));
  };

  useEffect(() => {
    generateFlavors();
  }, []);

  async function handleRegenerateClick() {
    let nF = (await makePhrases(1)).pop();
    setNewFlavor(nF);
    await axios
      .post("http://localhost:3003/api/image", {
        prompt: `"${nF.name}" flavored icecream`,
        flavor: nF.name,
      })
      .then((response) => {
        setGeneratedImage(response.data);
      });
  }

  return (
    <div className=" bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#fcd1e2] to-[#b0abf4] ">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base mt-10 font-semibold leading-7 text-indigo-600">
          Ice Cream Store
        </h2>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Randomice
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Enjoy the taste of our randomly generated silly flavors!
        </p>
      </div>
      {newFlavor ? (
        <img
          src={generatedImage}
          className="mx-auto"
          width={"400px"}
          alt={`Photo of ${newFlavor} `}
        />
      ) : (
        <></>
      )}
      <div className="mx-auto mt-16 max-w-xl sm:mt-20">
        <p className="text-center block text-sm font-semibold leading-6 text-gray-900">
          You're about to create a never-before-seen flavor
        </p>
        <div className="grid grid-cols-1 gap-x-16 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <input
              type="text"
              placeholder="adjective"
              readOnly
              value={newFlavor?.name.split(" ")[0]}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="mt-2.5">
            <input
              type="text"
              placeholder="noun"
              readOnly
              value={newFlavor?.name.split(" ")[1]}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex justify-center mt-5 mb-20">
          {newFlavor ? (
            <div>
              <button
                className="block w-60 mb-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleRegenerateClick}
              >
                Discover a different ice-cream
              </button>
              <button
                className="block w-30 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSaveFlavor}
              >
                Save Flavor
              </button>
              <button className="block w-30 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add to cart🍨
              </button>
            </div>
          ) : (
            <button
              className="block w-60 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleRegenerateClick}
            >
              I'm feeling lucky✨
            </button>
          )}
        </div>
      </div>
      <div>
        <div className="flex justify-center flex-wrap m-10 gap-3">
          {generatedFlavors.map((flavor) => (
            <div className="bg-white">
              <FlavorThumbnail key={flavor.name} flavor={flavor} />
            </div>
          ))}
        </div>

        <div className="flex justify-center flex-wrap m-10 gap-3">
          {userFlavors.map((flavor) => (
            <div className="bg-white">
              <FlavorThumbnail key={flavor.name} flavor={flavor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
