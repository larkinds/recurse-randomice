export default function SubmitButton() {
  const handleSubmit = () => {
    //to be added by Lee: send cart items to db
    console.log("order submitted");
  };
  return (
    <div>
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}
