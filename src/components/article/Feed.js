import React from "react";
import Article from "../utils/articles/Article";
import style from "./Feed.module.css";
import image1 from "../../assets/images/image-currency.jpg";
import image2 from "../../assets/images/image-restaurant.jpg";
import image3 from "../../assets/images/image-plane.jpg";
import image4 from "../../assets/images/image-confetti.jpg";

function Feed() {
  return (
    <div className={style.feed}>
      <h1>Latest Articles</h1>
      <div className={style.article_wrap}>
        <Article
          img={image1}
          by="By Claire Robinson"
          title="Receive money in any currency with no fees"
          paragraph="The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        />
        <Article
          img={image2}
          by="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          paragraph="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        />
        <Article
          img={image3}
          by="By Wilson Hutton"
          title="Take your Easybank card wherever you goy"
          paragraph="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        />
        <Article
          img={image4}
          by="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          paragraph="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        />
      </div>
    </div>
  );
}

export default Feed;
