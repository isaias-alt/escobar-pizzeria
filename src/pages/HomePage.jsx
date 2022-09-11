import { Grid, makeStyles } from "@material-ui/core";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import OpenMenu from "../components/OpenMenu";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const classes = useStyle();
  const [desktop, setDesktop] = useState(false);

  const displayMobile = () => {
    return (
      <>
      <section className="landing-section">
        <div className={classes.principal}>
          <h1 className={classes.tituloPrincipal}>
            Pizzas para un buen momento
          </h1>
          <p className={classes.parrafo}>
            Para aquel trabajador que no dispone de tiempo para prearar la cena,
            para los amigos y para las familias que desean compartir un buen
            rato con una rica pizza
          </p>
        </div>
        <div className={classes.openMenuButton}>
          <OpenMenu />
        </div>
      </section>
      <section className={classes.cardsSection}>
        <div className={classes.cardContainer}>
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
      </>
    )
  };
  const displayDesktop = () => {};


  return (
    <>
      <Navbar />
      <div>{desktop ? displayDesktop() : displayMobile()}</div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  principal: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  tituloPrincipal: {
    margin: theme.spacing(2, 0, 2, 0),
    fontWeight: 600,
    fontSize: "3rem",
  },
  parrafo: {
    margin: theme.spacing(2, 0, 1, 0),
    fontSize: "20px",
  },
  openMenuButton: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(0, 0, 4, 0),
  },
  cardsSection: {
    background: "#E3E3E3",
    height: "50%",
    padding: theme.spacing(3, 3, 3, 3),
  },
  cardContainer: {
    display: "grid",
    columnGap: "15px",
    rowGap: "15px",
    margin: theme.spacing(3, 3, 3, 3),
  },
}));

export default HomePage;
