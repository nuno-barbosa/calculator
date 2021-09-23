import React from "react";

function MagnificientEqualButton(props) {
  return (
    <button onClick={props.handleClick} value={props.label}>
      {props.label}
    </button>
  );
}

export default MagnificientEqualButton;
