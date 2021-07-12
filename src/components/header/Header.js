import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Home from "@material-ui/icons/Home";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  cartButton: {
    marginRight: theme.spacing(2),
    color: "white",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.homeButton}
              color="inherit"
              aria-label="menu"
            >
              <Home />
            </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            React Online Store
          </Typography>
          <Link to="/cart">
            <IconButton
              edge="start"
              className={classes.cartButton}
              color="inherit"
              aria-label="menu"
            >
              <ShoppingCart />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
