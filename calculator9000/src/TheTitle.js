import "./TheTitle.css";

function TheTitle(props) {
  return (
    <section className="titleStyle">
      <h1>{props.name}</h1>
    </section>
  );
}

export default TheTitle;
