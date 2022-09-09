import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <div>
        <h1>This is the admin page</h1>

        <Link to="/caja" className={classes.buttons}>
          <Button>
            <h2>Caja</h2>
          </Button>
        </Link>

        <Link to="/compraventa" className={classes.buttons}>
          <Button>
            <h2>Compra y venta</h2>
          </Button>
        </Link>

        <Link to="/registroproductos" className={classes.buttons}>
          <Button>
            <h2>Registro de productos</h2>
          </Button>
        </Link>

        <Link to="/clientes" className={classes.buttons}>
          <Button>
            <h2>Clientes</h2>
          </Button>
        </Link>

        <Link to="/crearroles" className={classes.buttons}>
          <Button>
            <h2>Crear roles</h2>
          </Button>
        </Link>

        <Link to="/estadisticas" className={classes.buttons}>
          <Button>
            <h2>Estadisticas</h2>
          </Button>
        </Link>

        <Link to="/auditoria" className={classes.buttons}>
          <Button>
            <h2>Auditoria</h2>
          </Button>
        </Link>

        <Link to="/reportes" className={classes.buttons}>
          <Button>
            <h2>Reportes</h2>
          </Button>
        </Link>
      </div>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  buttons: {
    margin: theme.spacing(1, 1, 1, 1),
    padding: theme.spacing(1, 2, 1, 2),
    alignItems: "center",
    textDecoration: "none",
  },
}));

export default AdminPage;
