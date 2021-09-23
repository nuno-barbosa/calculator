//! RCFE créé une function automatiquement
import React from "react";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItsOverNineThousand from "./ItsOverNineThousand";
import TheTitle from "./TheTitle";
import { useState } from "react";
import { unstable_batchedUpdates } from "react-dom";
import "./style.css";

function Calculator() {
  // const [displayData, setDisplayData] = useState("");

  // const changeDisplayData = (numb) => {
  //   console.log("avant", displayData);
  //   setDisplayData(numb);
  //   console.log("après", displayData);
  // };

  const [operation, setOperation] = useState(""); //! on stockera l'affichage / calcul à effectuer dans cette constante - on la passe par la suite en props de BeautifulScreen.js
  const [result, setResult] = useState(null); //! on affecte la valeur null à result jusqu'à ce qu'on clique sur la la touche "=" qui lui affectera le résultat de l'opération finale
  const [operand, setOperand] = useState(); //! On stockera ici le facteur d'opération (+,-,*,/,%), sert surtout à transmettre le props.label a l'enfant dans GreatOperationButton
  const [message, setMessage] = useState("");
  //! Function handleClick qui récupére la valeur de "e" (event) et l'attribue a une constante 'event'
  function handleClick(e) {
    //! e correspond a un event que l'on précisera plus loin dans la function
    // récuperer l'événement
    e.preventDefault(); //! on empeche le rechargement de page auto //! ATTENTION, POUR L'INSTANT e.preventDefault ne sert a RIEN
    const event = e.target.value; //! const event contient la valeur de la cible
    // console.log(event); //! On console.log pour savoir si la valeur est bien récupérée
    setOperation(operation + event);
    console.log(operation);

    {
      /* Je mets en place mon switch/case qui effectuera une action en accord avec la touche cliquée */
    }
    switch (event) {
      case "+":
      case "-":
      case "/":
      case "*":
      case "%":
        {
          /* Dans le cas ou la valeur est un opérateur de calcul */
        }
        setOperation((operation + event).substr(0, 15));
        {
          /* On ajoute à la mémoire de calcul l'opérateur || EXEMPLE (2 (+) + ) */
        }
        setOperand(event);
        {
          /* On attribue à la constante operand la nouvelle valeur d'opérateur */
        }
        break;

      case "=":
        {
          /* Dans le cas ou il s'agit d'un clique sur la touche "=" */
        }
        setOperation(operation + event);
        {
          /* On remet a jour notre mémoire de calcul {operation} */
        }
        try {
          //! try / catch va éviter en cas d'erreur de calcul d'afficher une page erreur et d'afficher l'erreur dans une alerte
          let temp = eval(operation);
          if (temp > 9000) {
            setMessage("IT'S OVER NINE THOUSAND");
          }
          {
            /* on créé une let temp qui stockera le résultat de notre opération grâce a la function eval() qui s'occupe de tout gèrer //! eval() prend en compte les priorités de calcul  */
          }
          setResult(temp);
          {
            /* On met a jour la nouvelle valeur du résultat qui sera affiché dans l'enfant ItsOverNineThousand.js */
          }
          setOperand("");
          {
            /* On remet à vide la valeur de la constante qui stocke l'opérateur */
          }
        } catch (e) {
          //! On catch l'evenement (e)
          if (e instanceof SyntaxError) {
            //! En cas d'erreur on affiche dans une alerte un message + l'erreur en question
            alert("Erreur de calcul : " + e.message);
            setOperation("");
          }
        }
        break;

      case "C":
        {
          /* Dans le cas ou on clique sur la touche "C" */
        }
        setOperation("");
        setResult(null);
        setMessage("");
        {
          /* Je vide là mémoire tampon de calcul (operation) */
        }
        break;

      default:
        {
          /* Le cas default reprénte l'action à effectuer pour toutes les autres touches, autrement dit les chiffres de 1 à 9 */
        }
        setOperation((operation + event).substr(0, 15));
        {
          /* On ajoute à notre mémoire de calcul la nouvelle valeur */
        }
    }
  }

  return (
    <section className="App">
      <div className="wholeCalculator">
        <div className="displayZone">
          <ItsOverNineThousand result={result} message={message} />
          <BeautifulScreen operation={operation} />
        </div>
        {/* ItsOverNineThousand.js est l'élément qui nous affichera le résultat de notre opération, on renvoie donc le props {result} (résultat de notre calcul) à l'enfant */}
        <div className="GreatOperators">
          <GreatOperationButton
            operand={operand}
            handleClick={handleClick}
            label="+"
          />
          <GreatOperationButton
            operand={operand}
            handleClick={handleClick}
            label="-"
          />
          <GreatOperationButton
            operand={operand}
            handleClick={handleClick}
            label="*"
          />
          <GreatOperationButton
            operand={operand}
            handleClick={handleClick}
            label="/"
          />
          <GreatOperationButton
            operand={operand}
            handleClick={handleClick}
            label="%"
          />
        </div>
        <div className="AmazingNumber">
          <AmazingNumberButton label="1" handleClick={handleClick} />
          {/*Label représente la valeur attribuée à notre bouton // On définit cette valeur dans AmazingNumberButton.js*/}
          <AmazingNumberButton label="2" handleClick={handleClick} />
          {/*handleClick est le props que l'on transmettra à l'enfant dans AmazingNumberButton.js*/}
          <AmazingNumberButton label="3" handleClick={handleClick} />
          <AmazingNumberButton label="4" handleClick={handleClick} />
          <AmazingNumberButton label="5" handleClick={handleClick} />
          <AmazingNumberButton label="6" handleClick={handleClick} />
          <AmazingNumberButton label="7" handleClick={handleClick} />
          <AmazingNumberButton label="8" handleClick={handleClick} />
          <AmazingNumberButton label="9" handleClick={handleClick} />
          <GreatOperationButton handleClick={handleClick} label="C" />
          <AmazingNumberButton label="0" handleClick={handleClick} />
          <MagnificientEqualButton handleClick={handleClick} label="=" />
        </div>
      </div>
    </section>
  );
}

export default Calculator;
