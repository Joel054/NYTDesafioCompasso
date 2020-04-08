import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./style.css";
import LinkWrapper from "../LinkWrapper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button
              className="textbutton"
              style={{margin: "4px",}}
              variant="outlined"
              color="inherit"
              edge="start"
            >
              <LinkWrapper to="/Science"> Ciência </LinkWrapper>{" "}
            </Button>{" "}
            <Button className="textbutton" variant="outlined" color="inherit">
              <LinkWrapper to="/Technology"> Tecnologia </LinkWrapper>{" "}
            </Button>{" "}
          </Typography>{" "}
          <Button className="textbutton" variant="outlined" color="inherit">
            <LinkWrapper to="/" activeStyle={{}}>
              {" "}
              Início{" "}
            </LinkWrapper>{" "}
          </Button>{" "}
        </Toolbar>{" "}
      </AppBar>{" "}
    </div>
  );
}
