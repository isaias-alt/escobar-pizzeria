import {
  AppBar,
  Avatar,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "../../src/index.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const [desktop, setDesktop] = useState(false);
  const classes = useStyle();
  const displayDesktop = () => {};
  const displayMobile = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={logo} alt="EscoBar Pizzeria" className={classes.logo} />
        </Link>
        <Link to="/signin" element={<SignIn />}>
          <div className={classes.right}>
            <Avatar className={classes.avatar} />
          </div>
        </Link>
      </Toolbar>
    );
  };
  return (
    <div className={classes.mainDiv}>
      <AppBar className={classes.root}>
        {desktop ? displayDesktop() : displayMobile()}
      </AppBar>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0",
    background: "#f2f2f2",
    zIndex: 99,
    width: "100vw",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "100px",
    height: "70px",
    objectFit: "contain",
  },
  right: {
    display: "flex",
  },
  avatar: {},
}));

export default Navbar;
