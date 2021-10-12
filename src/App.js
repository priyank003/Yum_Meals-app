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

function App() {
  return (
    <div className="App">
      <SideNav />

      <Header />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/menu">
          <Menu />
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
