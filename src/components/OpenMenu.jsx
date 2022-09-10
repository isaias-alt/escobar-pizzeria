import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const OpenMenu = () => {
  const classes = useStyle();
  return (
    <div>
      <Link to="/menu" className={classes.menuButton}>
        <Button
          variant="contained"
          style={{ borderRadius: 50, background: "#CA5C37", color: "#F2F2F2" }}
          className={classes.button}
        >
          Abrir Menú
        </Button>
      </Link>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  menuButton: {
    textDecoration: "none",
  },
  button: {
    padding: theme.spacing(1, 5, 1, 5),
  },
}));

export default OpenMenu;
