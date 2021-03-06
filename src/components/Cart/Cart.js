import classes from "./Cart.module.css";

import pizza from "../../assets/menu/pizza/crispy-mixed-pizza-with-olives-sausage.jpg";

import Button from "../UI/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state) => {
    return {
      cartItems: state.cart.cartItems,
      qty: state.cart.quantity,
    };
  });

  const [price, setPrice] = useState(0);

  useEffect(() => {
    cart.cartItems.map((data) => {
      return setPrice((prev) => Math.round(prev + data.price));
    });
  }, [cart.cartItems]);

  return (
    <div className={classes.cart}>
      <div className={classes["cart-left"]}>
        {cart.cartItems.map((data) => {
          return <CartItem meal={data} />;
        })}
      </div>
      <div className={classes["cart-right"]}>
        <div className={classes["checkout-form"]}>
          <div className={classes["total-items"]}>
            <h1>Subtotal : </h1>
            <span>{cart.qty} items</span>
          </div>
          <div className={classes["total-items"]}>
            <h1>Total Price :</h1>
            <span> {price} $</span>
          </div>

          <div className={classes["checkout-btn"]}>
            <button>Proceed to Buy</button>
          </div>
        </div>
      </div>
      <div className={classes["cart-reccomendations"]}>
        <h3>Other available dishes are</h3>

        <div className={classes["all-meals"]}>
          <div className={classes["available-meals"]}>
            <img src={pizza} alt="" />

            <div className={classes["available-tab"]}>
              <div className={classes["available-info"]}>
                <h2>Burger</h2>

                <div className={classes["available-qty"]}>
                  <label htmlFor="qty">
                    Quantity <span>{">"}</span>
                  </label>
                  <input
                    type="number"
                    id="qty"
                    max="10"
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>
              <div className={classes["available-order"]}>
                <div className={classes["available-price"]}>
                  <h3>
                    {" "}
                    50<span> $</span>
                  </h3>
                </div>

                <Button>Order Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
