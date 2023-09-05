import "./suggestions.styles.css";

type SuggestionItemProps = {
  id: number;
  image: string;
  urlLink: string;
};

type SuggestionListProps = {
  itemList: SuggestionItemProps[];
};

function SuggestionItem(item: SuggestionItemProps) {
  return (
    <div className="suggestion-item">
      <a href={item.urlLink} target="_blank" rel="noreferrer">
        <img className="suggestion-image" src={item.image} alt="flavor" />
      </a>
    </div>
  );
}

export default function Suggestions({ itemList }: SuggestionListProps) {
  return (
    <div className="suggestion-list">
      <p>This flavor goes well with:</p>
      {itemList.map((item) => (
        <SuggestionItem key={item.id} {...item} />
      ))}
    </div>
  );
}
