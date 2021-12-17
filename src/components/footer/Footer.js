import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import Button from "../utils/button/Button";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Fb } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Ig } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../../assets/images/icon-pinterest.svg";
import { ReactComponent as Yt } from "../../assets/images/icon-youtube.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.column_1}>
        <Logo fill="white" />
        <div className={style.social}>
          <Fb className={style.change} />
          <Twitter className={style.change} />
          <Ig className={style.change} />
          <Pinterest className={style.change} />
          <Yt className={style.change} />
        </div>
      </div>
      <div className={style.column_2}>
        <ul>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
        </ul>
      </div>
      <div className={style.column_3}>
        <ul>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className={style.column_4}>
        <div>
          <Button className={style.btn}> Request Invite </Button>
        </div>
        {/* <p> &copy;Easybank. All Rights Reserved </p> */}
        <h4>
          Created by <a href="http">@Achmad Muqorrobin</a>{" "}
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
