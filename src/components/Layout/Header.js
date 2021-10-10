import classes from "./Header.module.css";
import SearchIcon from "./../../assets/UI/search_black_24dp.svg";
import cart from "./../../assets/UI/shopping_cart_black_24dp.svg";
import Button from "../UI/Button";
import hamMenu from "../../assets/UI/menu_black_24dp.svg";
import React from "react";

import { Link } from "react-router-dom";
import { sideNavActions } from "../../store/sideNav-slice";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();

  const hamMenuClickHandler = () => {
    dispatch(sideNavActions.showSideNav());
  };

  return (
    <div className={classes.header}>
      <div className={classes.hamMenu} onClick={hamMenuClickHandler}>
        <img src={hamMenu} alt="" />
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className={classes.brand}>
          <h1>
            {" "}
            Yum <span>Meals</span>
          </h1>
        </div>
      </Link>
      <div className={classes.links}>
        <a href="/why">Why Yum Meals ?</a>
        <a href="/services">Services</a>
        <a href="/menu">Menu</a>
        <a href="/contact">Contact</a>
      </div>
      <div className={classes.icons}>
        <img src={SearchIcon} className={classes.searchIcon} alt="" />
        <Link to="/cart">
          <div className={classes["header-cart"]}>
            <div className={classes["cart-count"]}>
              <span>3</span>
            </div>

            <img src={cart} alt="" />
          </div>
        </Link>
        <Link to="/login">
          <Button className={classes["login-btn"]}>Login</Button>
        </Link>
      </div>
    </div>
  );
};
export default Header;
