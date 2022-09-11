import { React, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Cards = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Hamburguesa"
      />
      <CardContent>
        <Typography variant="body" color="text.secondary">
          Nombre del Producto
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredientes:</Typography>
          <Typography paragraph>Carne</Typography>
          <Typography paragraph>Lechuga</Typography>
          <Typography paragraph>Tomate</Typography>
          <Typography paragraph>Queso</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Cards;
