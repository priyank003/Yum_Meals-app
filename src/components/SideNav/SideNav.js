import classes from "./SideNav.module.css";
import Button from "../UI/Button";
import fb from "../../assets/contact/fb.png";
import watsapp from "../../assets/contact/watsapp.png";
import tweet from "../../assets/contact/twitter.png";
import { Link } from "react-router-dom";
import React from "react";
import { sideNavActions } from "../../store/sideNav-slice";
import { useDispatch, useSelector } from "react-redux";
const SideNav = () => {
  const dispatch = useDispatch();

  const sideNavHandler = useSelector((state) => state.sideNav.show);
  const hideSideNavHandler = () => {
    dispatch(sideNavActions.hideSideNav());
  };
  return (
    <div className={classes["sideNav-wrap"]}>
      {sideNavHandler && (
        <React.Fragment>
          <div
            className={classes["sidenav-backdrop"]}
            onClick={hideSideNavHandler}
          />
          <div className={classes.sideNav}>
            <div className={classes.login}>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              {}
              <span>or</span>
              <Button>Sign-up</Button>
            </div>
            <div className={classes["sideNav-links"]}>
              <div className={classes["nav-links"]}>
                <a href="/why">Why Yum Meals ?</a>
                <Link to="/">
                  <a href="/services">Services</a>
                </Link>

                <Link to="/menu">
                  <a href="/menu">Menu</a>
                </Link>

                <a href="/contact">Locate Store</a>
              </div>

              <div className={classes["nav-contact"]}>
                <a href="/www">Contact Us</a>
                <a href="/kjk">About us</a>
              </div>
            </div>

            <div className={classes["nav-brand"]}>
              <h1>
                Yum <span>Meals</span>
              </h1>
              <div className={classes["social-icons"]}>
                <img src={fb} alt="" />
                <img src={watsapp} alt="" />
                <img src={tweet} alt="" />
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default SideNav;
