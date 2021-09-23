function AmazingNumberButton(props) {
  return (
    <button
      type="button"
      onClick={props.handleClick}
      id={"number-" + props.label}
      value={props.label}
    >
      {props.label}
    </button>
  );
}

export default AmazingNumberButton;
