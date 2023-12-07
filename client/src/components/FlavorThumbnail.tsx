export type Flavor = {
  name: string;
  price: number;
  image: string;
  quantity: number;
  userGenerated: boolean;
};

export default function FlavorThumbnail({ flavor }: { flavor: Flavor }) {
  return (
    <>
      <div className="max-w-xs mx-auto bg-white p-5">
        <div className="flex justify-center">
        <img className="w-2/3 h-1/2 object-contain"
            src={flavor.image}
            alt={`Photo of ${flavor.name}`}
          />
        </div>
        <div className="text-center mt-4">
            <h3 className="text-lg font-semibold">{flavor.name}</h3>    
            <p className="text-lg mt-2 mb-2">${flavor.price}</p>
           <button className="bg-white text-black uppercase text-sm px-6 py-3 rounded-full border-2 border-black hover:bg-black hover:text-white focus:outline-none focus:border-4 focus:border-black">
            Add to your cart
            </button> 
        </div>
      </div>
    </>
  );
}

  