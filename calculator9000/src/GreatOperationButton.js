import { useEffect } from "react";
import "./GreatOperator.css";

function GreatOperationButton(props) {
  return (
    <button type="button" onClick={props.handleClick} value={props.label}>
      {props.label}
    </button>
  );
}

export default GreatOperationButton;
