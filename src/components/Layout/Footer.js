import classes from "./Footer.module.css";

import fb from "../../assets/contact/fb.png";
import watsapp from "../../assets/contact/watsapp.png";
import twitter from "../../assets/contact/twitter.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-left"]}>
        <div className={classes["footer-brand"]}>
          {" "}
          <h2>Yum Meals</h2>{" "}
        </div>
        <div className={classes["brand-info"]}>
          <p>
            Our Job is to filling your tummy <br /> with delicious food and with
            fast
            <br /> and free delivery
          </p>
        </div>
        <div className={classes["brand-social"]}>
          <img src={fb} alt="" />
          <img src={watsapp} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className={classes["footer-right"]}>
        <div className={classes["footer-header"]}>
          <h2>About</h2>
          <div className={classes["footer-link"]}>
            <a href="/">About Us</a>
            <a href="/">Features</a>
            <a href="/">News</a>
            <a href="/">Menu</a>
          </div>
        </div>
        <div className={classes["footer-header"]}>
          <h2>Company</h2>
          <div className={classes["footer-link"]}>
            <a href="/">Why Yum Meals</a>
            <a href="/">Partners</a>
            <a href="/">FAQ</a>
            <a href="/">Blog</a>
          </div>
        </div>

        <div className={classes["footer-header"]}>
          <h2>Support</h2>
          <div className={classes["footer-link"]}>
            <a href="/">Account</a>
            <a href="/">Support Center</a>
            <a href="/">Feedback</a>
            <a href="/">Contact Us</a>
            <a href="/">Accesebility</a>
          </div>
        </div>

        <div className={classes["footer-feedback"]}>
          <h2>Get in touch</h2>
          <div className={classes["feedback-form"]}>
            <p>
              Question or feedback?
              <br /> We'd love to hear from you
            </p>

            <input type="text" placeholder="email address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
