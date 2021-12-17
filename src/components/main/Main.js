import React from "react";
import Card from "../utils/card/Card";
import style from "./Main.module.css";
import { ReactComponent as Icon1 } from "../../assets/images/icon-online.svg";
import { ReactComponent as Icon2 } from "../../assets/images/icon-onboarding.svg";
import { ReactComponent as Icon3 } from "../../assets/images/icon-budgeting.svg";
import { ReactComponent as Icon4 } from "../../assets/images/icon-api.svg";

function Main() {
  return (
    <main className={style.main}>
      <div className={style.main__wrapText}>
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className={style.card__wrap}>
        <div>
          <Card
            icon={<Icon1 />}
            title="Online Banking"
            paragraph="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
        </div>
        <div>
          <Card
            icon={<Icon2 />}
            title="Simple Budgeting"
            paragraph="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
          />
        </div>
        <div>
          <Card
            icon={<Icon3 />}
            title="Fast Onboarding"
            paragraph="We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
          />
        </div>
        <div>
          <Card
            icon={<Icon4 />}
            title="Open API"
            paragraph="Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
          />
        </div>
      </div>
    </main>
  );
}

export default Main;
