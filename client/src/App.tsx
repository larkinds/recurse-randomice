import FlavorThumbnail from "./components/FlavorThumbnail";

const flavor = {
  name: "Vanilla",
  price: 0,
  image: "/strawberry-icecream.jpg",
};

function App() {
  return <FlavorThumbnail flavor={flavor} />;
}

export default App;
