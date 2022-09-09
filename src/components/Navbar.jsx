import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "../../src/index.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SignIn from "../pages/SignIn";

const Navbar = () => {
  const [desktop, setDesktop] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    const responsiveMobile = () =>
      window.innerWidth > 810 ? setDesktop(true) : setDesktop(false);
    responsiveMobile();
    window.addEventListener("resize", () => responsiveMobile());
  }, []);

  // Desktop view
  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <img src={logo} alt="EscoBar Pizzeria" className={classes.logo} />
        </Link>
        <div>
          <Link to="/" className={classes.buttons}>
            <Button variant="text">Incio</Button>
          </Link>
          <Link to="/menu" className={classes.buttons}>
            <Button variant="text">Menú</Button>
          </Link>
          <Link to="/aboutus" className={classes.buttons}>
            <Button variant="text">¿Quiénes Somos?</Button>
          </Link>
          <Link to="/admin" className={classes.buttons}>
            <Button variant="text">Administracion</Button>
          </Link>
        </div>
        <Link to="/signin" element={<SignIn />}>
          <div className={classes.right}>
            <Avatar className={classes.avatar} />
          </div>
        </Link>
      </Toolbar>
    );
  };

  // Mobile view
  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };

    return (
      <Toolbar className={classes.toolbar}>
        <IconButton
          {...{
            edge: "start",
            color: "default",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        {/* Menu Drawer */}
        <Drawer
          className={classes.drawer}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <Link to="/">
            <img
              src={logo}
              alt="EscoBar Pizzeria"
              className={classes.drawerLogo}
            />
          </Link>
          <div>
            <Link to="/" className={classes.drawerButtons}>
              <Button variant="text">Incio</Button>
            </Link>
            <Link to="/menu" className={classes.drawerButtons}>
              <Button variant="text">Menú</Button>
            </Link>
            <Link to="/aboutus" className={classes.drawerButtons}>
              <Button variant="text">¿Quiénes Somos?</Button>
            </Link>
            <Link to="/admin" className={classes.drawerButtons}>
              <Button variant="text">Administracion</Button>
            </Link>
          </div>
        </Drawer>
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
    <AppBar className={classes.root}>
      {desktop ? displayDesktop() : displayMobile()}
    </AppBar>
  );
};

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0",
    backgroundColor: "#f2f2f2",
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
  drawerLogo: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
  },
  drawerButtons: {
    margin: theme.spacing(2, 1, 2, 1),
    padding: theme.spacing(1, 2, 1, 2),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  buttons: {
    margin: theme.spacing(1, 1, 1, 1),
    padding: theme.spacing(1, 2, 1, 2),
    alignItems: "center",
    textDecoration: "none",
  },
  avatar: {
    margin: theme.spacing(1),
  },
}));

export default Navbar;
