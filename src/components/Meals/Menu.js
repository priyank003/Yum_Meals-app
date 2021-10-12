import React, { useState } from "react";
import classes from "../Meals/Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceActions } from "../../store/cartItem-slice";
import menu from "./MenuData";

import square from "../../assets/square.svg";
import circle from "../../assets/circle.svg";
const Menu = () => {
  const [menuMeal, setShowmenuMeal] = useState("burger");

  const clickHandler = (e) => {
    setShowmenuMeal(e.target.outerText);
  };

  const cart = useSelector((state) => {
    return {
      cartItems: state.cart.cartItems,
      qty: state.cart.quantity,
    };
  });
  const dispatch = useDispatch();

  const orderHandler = (meal, index) => {
    let exist = false;
    for (let i = 0; i < cart.cartItems.length; i++) {
      if (cart.cartItems[i].id === meal.id) {
        exist = true;

        break;
      }
    }
    return exist
      ? alert(`${meal.name} already added to the cart`)
      : dispatch(cartSliceActions.addToCart(meal));
  };

  return (
    <div className={classes.menu}>
      <div className={classes["menu-title"]}>OUR MENU</div>
      <div className={classes["menu-heading"]}>
        {" "}
        <h1>Menu That Always</h1> <h1> Make You Fall in Love</h1>{" "}
      </div>

      <div className={classes["menu-nav"]}>
        <img src={square} className={classes.squareSvg} alt="" />
        <img src={circle} className={classes.circleSvg} alt="" />
        <div className={classes["menu-left"]}>
          {menu.map((data) => {
            return (
              <div onClick={clickHandler} className={classes["menu-link"]}>
                <div className={classes["link-icon"]}>
                  <img src={data.icon} alt="" />
                </div>
                <span>{data.name}</span>
              </div>
            );
          })}
        </div>
        <div className={classes["menu-right"]} id="scroll">
          <div className={classes["meals-container"]} id="meals-container">
            {menu.map((data) => {
              return data.name === menuMeal
                ? data.type.map((meal) => {
                    return (
                      <div className={classes["menu-meals"]} key={meal.id}>
                        <img src={meal.img} alt="" />
                        <div className={classes["meal-overlay"]}>
                          <div className={classes["meal-form"]}>
                            {" "}
                            <div className={classes["meal-info"]}>
                              {" "}
                              <h3>{meal.name}</h3>
                              <div className={classes["meal-price"]}>
                                <span>$</span>
                                <h2>{meal.price}</h2>
                              </div>
                            </div>
                            <div className={classes["meal-order"]}>
                              <span
                                onClick={() =>
                                  orderHandler(meal, data.type.indexOf(meal))
                                }
                              >
                                Order Now <b>{">"}</b>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : "";
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;
