import React from "react";
import style from "./Article.module.css";
function Article(props) {
  return (
    <article className={style.article}>
      <img src={props.img} alt={props.img} />
      <h6>{props.by}</h6>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
    </article>
  );
}

export default Article;
