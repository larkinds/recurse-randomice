import { useState } from "react";

export default function ProductCart({name, description, image}: {name: string, description: string, image: string}) {
    const [scoopsCounter, setScoopsCounter] = useState<number>(0);

    return (
        <div>
            <p>revolutionary offer: $0</p>
            <image src={image} />
            <div>
                <button>add to cart</button>
                <button disabled={!scoopsCounter} onClick={() => setScoopsCounter(scoopsCounter - 1) }>-</button>
                <p>{scoopsCounter}</p>
                <button disabled={scoopsCounter >= 10} onClick={() => setScoopsCounter(scoopsCounter + 1)}>+</button>
            </div>
            <div></div>
            <p>name: {name}</p>
            <p>description: {description}</p>
        </div>
    )
}