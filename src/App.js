import React from "react";
import "./App.css";
import Header from "./compornents/Header/Header";
import Shop from "./compornents/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Review from "./compornents/Review/Review";
import Inventory from "./compornents/Review/inventory/Inventory";
import NotFound from "./compornents/notFound/NotFound";
import ProductDetails from "./compornents/productDetails/ProductDetails";
import LogIn from "./compornents/logIn/LogIn";
import Shipment from "./compornents/shipment/Shipment";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./compornents/privateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
