import React, { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Component/Checkout";
import Login from "./Component/Login";
import fire from "./firebase";
import { useStateValue } from "./Container/Stateprovider";
import Payment from "./Component/Payment";
import { loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from "./Component/Orders";

const promise = loadStripe('pk_test_51Hd7ajIKCDeXlKXBtz9YZlxvwTeafEmox1tS24oQ2ofbwW0LSS8bBVvi20eOCQCms3rO2M98E4af8uE2q2O16y8V00cNuEDGOf');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    fire.auth().onAuthStateChanged((authUser) => {
      console.log("The User is >>>", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
