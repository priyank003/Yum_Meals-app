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
import { Switch, Route } from "react-router";
import Login from "./components/auth/Login";

function App() {
  const [nav, setNav] = useState(null);

  const [cartItem, setCartItem] = useState([]);
  const clickHandler = (data) => {
    setNav(data);
  };

  const hideHandler = (show) => {
    if (show) {
      setNav(false);
    }
  };

  const addcartItems = (meal) => {
    setCartItem((prev) => {
      return [meal, ...prev];
    });
  };

  return (
    <div className="App">
      <SideNav hamMenu={nav} />

      <Header hamClick={clickHandler} onClick={hideHandler} />
      <Switch>
        <Route path="/cart">
          <Cart cartItem={cartItem} />
        </Route>
        <Route path="/menu">
          <Menu cartItem={addcartItems} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Landing />
          <Services />
          <Review />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
