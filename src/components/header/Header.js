import React from "react";
import Navbar from "../navbar/Navbar";
import Button from "../utils/button/Button";
import style from "./header.module.css";
import { ReactComponent as Logo } from "../../assets/images/bg-intro-desktop.svg";
import images from "../../assets/images/image-mockups.png";

function Header() {
  return (
    <header className={style.header}>
      <Navbar />
      <div className={style.header__wrap}>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className={style.btn_wrap}>
          <Button> Request Invite </Button>
        </div>
        <div className={style.header__wrapImage}>
          <Logo className={style.imgBack} />
          <img src={images} alt={images} />
        </div>
      </div>
    </header>
  );
}

export default Header;
