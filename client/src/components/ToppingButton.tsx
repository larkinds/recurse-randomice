import { useState } from "react";

import "./ToppingButton.css";

interface ToppingButtonProps {
    url: string,
    selected: boolean
}

ToppingButton.defaultProps = {
    selected: false
}

function ToppingButton(props: ToppingButtonProps) {
    const [selected, setSelected] = useState(false);
    return (
        <div key={props.url}>
            <div onClick={() => setSelected(!selected)}>
                <img src={props.url} alt="" style={{ width: '50px', height: '50px', marginRight: '10px' }} onClick={() => console.log(props.url)} />
                <p style={{ marginTop: '0px' }}>{selected ? '✅' : '🥄'}</p>
            </div>
        </div>
    );
}

export default ToppingButton;
