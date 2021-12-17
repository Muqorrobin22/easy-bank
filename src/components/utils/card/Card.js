import React from "react";
import style from "./Card.module.css";
function Card(props) {
  return (
    <div className={style.card}>
      <div>{props.icon}</div>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </div>
  );
}

export default Card;
