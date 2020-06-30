import React, { useState } from "react";
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodo/AddTodo";
import { Paper, Container } from "@material-ui/core";

const Cockpit = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleOpen = () => {
    setOpenDialog(true);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Header handleOpen={handleOpen} />
          <Container>
            <SearchBar />
          </Container>
          <Container>
            <TodoList />
          </Container>
        </Paper>
        <AddTodo open={openDialog} handleClose={handleClose} />
      </Container>
    </div>
  );
};

export default Cockpit;
