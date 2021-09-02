import classes from "./Landing.module.css";
import chef from "./../../assets/ready_food.svg";
import { Colors } from "../UI/Colors";
import Button from "../UI/Button";
import girl from "../../assets/girl_eating_pizza.svg";
import clock from "../../assets/clock.svg";
import arrow from "../../assets/dashed_arrow.svg";
import flame from "../../assets/flame.png";
import pizza from "../../assets/pizza.webp";
import boy from "../../assets/boy.svg";
import call from "../../assets/call.png";

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
            Our Job is to filling your tummy with delicious food <br /> and with
            fast and free delivery
          </p>
        </div>
        <div className={classes["landing-btns"]}>
          <Button>Get Started</Button>
        </div>
        <div className={classes["landing-customer"]}></div>
      </div>

      <div className={classes["landing-right"]}>
        <div className={classes["hero-wrap"]}>
          {" "}
          <img src={girl} className={classes.girlImg}></img>
          <img src={clock} className={classes.clockImg}></img>
          <img src={arrow} className={classes.arrowImg}></img>
          <img src={flame} className={classes.flameImg} />
          <div className={classes["hero-customer"]}>
            <div className={classes["customer-Img"]}>
              <img src={boy} alt="" />
            </div>
            <div className={classes["customer-name"]}>
              <h3>Richard Watson</h3>
              <span>Food courier</span>
            </div>
            <div className={classes["customer-call"]}>
              <img src={call} alt="" />
            </div>
          </div>
          <div className={classes["hero-product"]}>
            <img src={pizza} alt="" />
            <div className={classes["product-info"]}>
              <span>Italian Pizza</span>
              <div className={classes["product-price"]}>
                <span>$</span>
                <p1>7.49</p1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
{
  /* <div className={classes.container}>
          <div className={classes.box}>
            <div className={classes.circle}>
              <img src={girl} alt="" />
            </div>
            <img src={girl} alt="" />
          </div>
        </div> */
}
