import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import Cart from "./Cart";
import Home from "./Home";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const Pages = () => {
  const classes = useStyles();

  return (
    <Router>
      <Header />
      <div className={classes.offset} />
      <Route exact path="/" component={Home}></Route>
      <Route path="/cart" component={Cart}></Route>
    </Router>
  );
};

export default Pages;
