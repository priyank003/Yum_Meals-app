import classes from "./Services.module.css";
import Title from "../UI/Title";
import order from "../../assets/order.svg";
import delivery from "../../assets/delivery.svg";
import quality from "../../assets/quality.svg";

import square from "../../assets/square.svg";
import circle from "../../assets/circle.svg";
import Button from "../UI/Button";

const Services = () => {
  return (
    <div className={classes.services}>
      <img src={square} className={classes.squareSvg} alt="" />
      <img src={circle} className={classes.circleSvg} alt="" />
      <Title id="serviceTitle">WHAT WE SERVE</Title>
      <div className={classes["services-heading"]}>
        {" "}
        Your Favourite Food <br /> Delivery Partner
      </div>
      <div className={classes["services-Icons"]}>
        <div className={classes.feature}>
          <div className={classes["icon-div"]}>
            <img src={order} alt="" />
          </div>
          <div className={classes["services-info"]}>
            <h3>
              Easy to <span>order</span>
            </h3>{" "}
            <Button>Order Now</Button>
            <p>You only need a few steps in ordering food</p>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes["icon-div"]}>
            <img src={delivery} alt="" />
          </div>
          <div className={classes["services-info"]}>
            <h3>
              Fastest <span> Delivery </span>
            </h3>{" "}
            <p>Delivery that is always ontime even faster</p>
          </div>
        </div>
        <div className={classes.feature}>
          <div className={classes["icon-div"]}>
            <img src={quality} alt="" />
          </div>{" "}
          <div className={classes["services-info"]}>
            <h3>
              Best <span>quality</span>{" "}
            </h3>{" "}
            <p>Not only fast for us quality is also number one</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Services;
