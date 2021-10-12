import "./App.css";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import Review from "./components/Layout/Review";
import Services from "./components/Layout/Services";
import Menu from "./components/Meals/Menu";
import Footer from "./components/Layout/Footer";
import SideNav from "./components/SideNav/SideNav";

import Cart from "./components/Cart/Cart";
import { Switch, Route } from "react-router";
import Login from "./components/auth/Login";
import { useDispatch } from "react-redux";
import { cartSliceActions } from "./store/cartItem-slice";

function App() {
  const dispatch = useDispatch();
  const addcartItems = (meal) => {
    dispatch(cartSliceActions.addToCart(meal));
  };

  return (
    <div className="App">
      <SideNav />

      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
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
