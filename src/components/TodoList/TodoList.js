import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import TodoItem from '../../components/TodoItem/TodoItem'
import { makeStyles } from "@material-ui/core/styles";
import { List, Typography, ListItem } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  const [state] = useContext(TodoContext);
  let filteredList = state.todos.filter(todo =>
    todo.title.toLowerCase().includes(state.searchString.toLowerCase())
  );
  const classes = useStyles();
  const todoListRender = (<List className={classes.root}>{filteredList.map(todo => (
    <TodoItem todo={todo} />
  ))}</List>)
  return (
    state.todos.length > 0 ? todoListRender : (<Typography align={"center"} color={"error"}>Please add a todo.</Typography>)
  );
}
