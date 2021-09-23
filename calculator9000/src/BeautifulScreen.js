import React from "react";

function BeautifulScreen(props) {
  return <span>{props.operation}</span>;
}

export default BeautifulScreen;

//! le <p> affichageOperation s'occupe d'afficher le calcul que l'on cherche a faire
//! sa valeur de base est '' (vide) et on vient lui ajouter l'event qui correspond à la valeur de la touche sur laquelle on clique
