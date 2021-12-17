import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Button from "../utils/button/Button";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={style.navbar}>
      <Logo />
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

      <Button> Request Invite </Button>
    </div>
  );
}

export default Navbar;
