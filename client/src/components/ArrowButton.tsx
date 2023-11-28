import Arrow from "../assets/images/arrow.png"

import "./ArrowButton.css";

interface ArrowProps {
  rotation: number // 0 points left, 90 points up, 180 points right, 270 points down
  handleClick: (direction: string) => void
}

function ArrowButton(props: ArrowProps) {

  return (
    <button>
    <img className='arrow-button' src={Arrow} style={{ transform: `rotate(${props.rotation}deg)` }}
      onClick={() => props.handleClick(`${props.rotation < 180 ? 'left' : 'right'}`)} />
      </button>
  );
}

export default ArrowButton;
