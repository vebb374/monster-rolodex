import React from "react";
import Card from "../Card/card.component";
import "./card-list.styles.css";

function Cardlist(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster}></Card>;
      })}
    </div>
  );
}

export default Cardlist;
