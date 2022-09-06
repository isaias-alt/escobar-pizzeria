import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [desktop, setDesktop] = useState(false);
  const classes = useStyle();
  const displayDesktop = () => {};
  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={logo} alt="EscoBar Pizzeria" />
        </Link>
      </Toolbar>
    );
  };
  return (
    <div>
      <AppBar>{desktop ? displayDesktop() : displayMobile()}</AppBar>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  toolbar: {},
}));

export default Navbar;
