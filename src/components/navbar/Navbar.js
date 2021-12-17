import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Button from "../utils/button/Button";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Mobile from "./Mobile";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={style.navbar}>
      <Logo />
      <ul className={style.nav_large}>
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

      <div className={style.nav_large}>
        <Button> Request Invite </Button>
      </div>
      {!isMenuOpen ? (
        <button
          onClick={toggleMobileMenu}
          className={style.mobile_menu}
        ></button>
      ) : (
        <button
          onClick={toggleMobileMenu}
          className={style.mobile_menu_open}
        ></button>
      )}
      {isMenuOpen && <Mobile />}
    </div>
  );
}

export default Navbar;
