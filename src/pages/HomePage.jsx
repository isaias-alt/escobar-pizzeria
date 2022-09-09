import { makeStyles } from "@material-ui/core";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import OpenMenu from "../components/OpenMenu";

const HomePage = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <div className={classes.principal}>
        <h1 className={classes.tituloPrincipal}>Pizzas para un buen momento</h1>
        <p className={classes.parrafo}>
          Para aquel trabajador que no dispone de tiempo para prearar la cena,
          para los amigos y para las familias que desean compartir un buen rato
          con una rica pizza
        </p>
        <OpenMenu className={classes.openMenuButton} />
        <div>
          <Card />
        </div>
      </div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  principal: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  tituloPrincipal: {
    margin: theme.spacing(2, 0, 2, 0),
    fontWeight: 600,
    fontSize: "3rem",
  },
  parrafo: {
    margin: theme.spacing(2, 0, 2, 0),
    fontSize: "20px",
  },
  openMenuButton: {
    margin: theme.spacing(3),
  },
}));

export default HomePage;
