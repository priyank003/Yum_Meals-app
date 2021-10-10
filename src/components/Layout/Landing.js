import classes from "./Landing.module.css";
import Name from "../UI/Name";
import chef from "./../../assets/ready_food.svg";

import Button from "../UI/Button";
import girl from "../../assets/girl_eating_pizza.svg";
import clock from "../../assets/clock.svg";
import arrow from "../../assets/dashed_arrow.svg";
import flame from "../../assets/flame.png";
import pizza from "../../assets/pizza.webp";
import boy from "../../assets/boy.svg";
import call from "../../assets/call.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={classes.landing}>
      <div className={classes["landing-left"]}>
        <div className={classes["landing-caption"]}>
          <span>More than Faster</span>
          <img src={chef} alt="" />
        </div>
        <div className={classes["landing-heading"]}>
          <h1>Be The Fastest</h1>
          <h1>In Delivering</h1>
          <h1>
            Your <span>Food</span>{" "}
          </h1>
          <p>
            Our Job is to filling your tummy with delicious food and with fast
            and free delivery
          </p>
        </div>
        <div className={classes["landing-btns"]}>
          <Link to="/login">
            <Button>Get Started</Button>
          </Link>{" "}
        </div>
        <div className={classes["landing-customer"]}></div>
      </div>

      <div className={classes["landing-right"]}>
        <div className={classes["hero-wrap"]}>
          {" "}
          <img src={girl} className={classes.girlImg} alt=""></img>
          <img src={clock} className={classes.clockImg} alt=""></img>
          <img src={arrow} className={classes.arrowImg} alt=""></img>
          <img src={flame} className={classes.flameImg} alt="" />
          <div className={classes["hero-customer"]}>
            <div className={classes["customer-Img"]}>
              <img src={boy} alt="" />
            </div>
            <div className={classes["customer-name"]}>
              <Name>Richard Watson</Name>
              <span>Food courier</span>
            </div>
            <div className={classes["customer-call"]}>
              <img src={call} alt="" />
            </div>
          </div>
          <div className={classes["hero-product"]}>
            <img src={pizza} alt="" />
            <div className={classes["product-info"]}>
              <Name>Italian Pizza</Name>
              <div className={classes["product-price"]}>
                <span>$</span>
                <Name>7.49</Name>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
