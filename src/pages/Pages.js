import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import Cart from "./Cart";
import Home from "./Home";

const Pages = () => {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home}></Route>
      <Route path="/cart" component={Cart}></Route>
    </Router>
  );
};

export default Pages;
