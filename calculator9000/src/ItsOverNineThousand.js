import { useEffect, useState } from "react";
import "./ItsOverNineThousand.css";

function ItsOverNineThousand(props) {
  const [limit, setLimit] = useState(false); //* cet objet useState nous servira à changer l'état du résultat pour nous afficher le message souhaité ou pas

  useEffect(() => {
    //! A REVOIR L'UTILISATION DE useEffect() CAR ENCORE FLOU
    console.log(props.result);
    props.result > 9000 && setLimit(true); //* Si le résultat est plus grand que 9000 on change le State de notre objet à TRUE
  }, [props.result]);

  return limit ? (
    <div className="overNineThousand">
      <p className="over9000">{props.message}</p>
      <p className="resultOver">{props.result}</p>
    </div>
  ) : (
    <div className="underNineThousand">
      <p className="under9000">{props.result}</p>
    </div>
  );
  {
    /* {limit ?} si limit(9000) est atteinte (?, ou égale a true), on affiche le message et le résultat en dessous  */
  }
  {
    /* {limit :} si limit(9000) n'est pas atteinte (:, ou égale a false), on affiche le résultat seul  */
  }
}

export default ItsOverNineThousand;
