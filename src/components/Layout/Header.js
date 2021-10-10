import classes from "./Header.module.css";
import SearchIcon from "./../../assets/UI/search_black_24dp.svg";
import cart from "./../../assets/UI/shopping_cart_black_24dp.svg";
import Button from "../UI/Button";
import hamMenu from "../../assets/UI/menu_black_24dp.svg";
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import { sideNavActions } from "../../store/sideNav-slice";
import { useDispatch } from "react-redux";
const Header = (props) => {
  const dispatch = useDispatch();
  const [sideNav, setsideNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const hamMenuClickHandler = () => {
    dispatch(sideNavActions.showSideNav());
  };

  const cartHandler = () => {
    if (!showCart) setShowCart(true);
    else setShowCart(false);
    props.cartClick(showCart);
  };

  return (
    <div className={classes.header}>
      {console.log(showCart)}
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
          <div className={classes["header-cart"]} onClick={cartHandler}>
            <div className={classes["cart-count"]}>
              <span>3</span>
            </div>

            <img src={cart} alt="" onClick={cartHandler} />
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
