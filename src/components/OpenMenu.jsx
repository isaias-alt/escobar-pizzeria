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
}));

export default OpenMenu;
