import "./App.css";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import Review from "./components/Layout/Review";
import Services from "./components/Layout/Services";
import Menu from "./components/Meals/Menu";
import Footer from "./components/Layout/Footer";
import SideNav from "./components/SideNav/SideNav";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import img from "./assets/menu/burger/beef-cotlet-burger-with-sauce-wooden-board.jpg";
function App() {
  const [nav, setNav] = useState(null);

  const [cart, showCart] = useState(false);

  const [cartItem, setCartItem] = useState([]);
  const clickHandler = (data) => {
    setNav(data);
  };

  const hideHandler = (show) => {
    if (show) {
      setNav(false);
    }
  };

  const cartHandler = (prev) => {
    if (prev) {
      showCart(true);
    } else showCart(false);
  };

  const addcartItems = (meal) => {
    setCartItem((prev) => {
      return [meal, ...prev];
    });
  };

  return (
    <div className="App">
      <SideNav hamMenu={nav} />

      <Header
        hamClick={clickHandler}
        onClick={hideHandler}
        cartClick={cartHandler}
      />
      {cart ? (
        <Cart cartItem={cartItem} />
      ) : (
        <div onClick={hideHandler}>
          <Landing />
          <Services />
          <Menu cartItem={addcartItems} />
          <Review />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
