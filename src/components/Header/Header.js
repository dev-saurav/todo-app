import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  title: {
    flex: 1
  }
}));

export default function Header({ handleOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Todos
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            Add Item
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
