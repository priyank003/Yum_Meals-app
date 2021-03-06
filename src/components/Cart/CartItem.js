import classes from "./CartItem.module.css";

import Button from "../UI/Button";
const CartItem = (props) => {
  return (
    <div className={classes["cart-item"]}>
      <div className={classes["item-tab"]}>
        <div className={classes["item-img"]}>
          <img src={props.meal.img} alt="" />
        </div>
        <div className={classes["item-info"]}>
          <h2>{props.meal.name}</h2>

          <div className={classes["item-qty"]}>
            <label htmlFor="qty">
              Quantity <span>{">"}</span>
            </label>
            <input type="number" id="qty" max="10" min="1" defaultValue="1" />
          </div>
        </div>
      </div>
      <div className={classes["item-order"]}>
        <div className={classes["item-price"]}>
          <h3>
            {" "}
            {props.meal.price}
            <span> $</span>
          </h3>
        </div>

        <Button>Order Now</Button>
      </div>
    </div>
  );
};
export default CartItem;
