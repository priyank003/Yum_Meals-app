import classes from "./Header.module.css";
import SearchIcon from "./../../assets/search_black_24dp.svg";
import cart from "./../../assets/shopping_cart_black_24dp.svg";
import Button from "../UI/Button";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.brand}>
        <h1> Yum Meals</h1>
      </div>
      <div className={classes.links}>
        <a href="">Why Yum Meals ?</a>
        <a href="">Services</a>
        <a href="">Menu</a>
        <a href="">Contact</a>
      </div>
      <div className={classes.icons}>
        <img src={SearchIcon} alt="" />
        <img src={cart} alt="" />
        <Button>Login</Button>
      </div>
    </div>
  );
};
export default Header;
