import { Link } from "react-router-dom";
import "./Suggestions.css";
import { Flavor } from "./FlavorThumbnail";


type SuggestionListProps = {
  itemList: Flavor[];
};

function SuggestionItem(item: Flavor) {
  return (
    <div className="suggestion-item">
      <Link to={`/flavor/${item.name}`} state={{flavor: item}}>
        {item.name}
        <img className="suggestion-image" src={item.image} alt="flavor" />
      </Link>
    </div>
  );
}

export default function Suggestions({ itemList }: SuggestionListProps) {
  return (
    <div className="suggestion-list">
      <h2 className="suggestions-title">Similar Flavors</h2>
      <div className="suggestions">
      {itemList.map((item, i) => (
        <SuggestionItem key={item.name + i} {...item} />
      ))}
      </div>
    </div>
  );
}
