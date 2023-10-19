import { useState } from "react";
import styles from "./topping-button.module.css"

interface ToppingButtonProps {
    url: string,
    selected: boolean
}

ToppingButton.defaultProps = {
    selected: false
}

//todo: make the spoons more obviously a button, and larger

function ToppingButton(props: ToppingButtonProps) {
    const [selected, setSelected] = useState(false);
    return (
        <div key={props.url} className={styles.container}>
                <img className={styles['topping-img']} src={props.url} alt="" onClick={() => console.log(props.url)} />
                <h4 style={{ marginTop: '0px' }} onClick={() => setSelected(!selected)}>{selected ? '✅' : '🥄'}</h4>
        </div>
    );
}

export default ToppingButton;
