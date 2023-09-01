import { useState } from "react";
import Arrow from "../assets/images/arrow.png"

import "./ArrowButton.css";

interface ArrowProps {
    rotation: number // 0 points left, 90 points up, 180 points right, 270 points down
}

function ArrowButton(props: ArrowProps) {

  return (
    <>
    <img src={ Arrow } style={{ width: '50px', height: '50px', marginRight: '10px', transform: `rotate(${props.rotation}deg)`}} onClick={()=>console.log(`${props.rotation < 180 ? 'left' : 'right'}`)}></img>
    </>
  );
}

export default ArrowButton;
