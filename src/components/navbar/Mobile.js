import React from "react";
import style from "./Mobile.module.css";
import { Link } from "react-router-dom";

function Mobile() {
  return (
    <div className={style.menu}>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Careers</Link>
        </li>
      </ul>
    </div>
  );
}

export default Mobile;
