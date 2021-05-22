import React from "react";
import "./App.css";
import Header from "./compornents/Header/Header";
import Shop from "./compornents/Shop/Shop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from "./compornents/Review/Review";
import Inventory from "./compornents/Review/inventory/Inventory";
import NotFound from "./compornents/notFound/NotFound";

function App() {
  return <div>
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route   path="/shop">
          <Shop></Shop>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
    </Switch>
    </Router>
  </div>;
}

export default App;
