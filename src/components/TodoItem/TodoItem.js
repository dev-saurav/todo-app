import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
const TodoItem = ({ todo }) => {
  const [state, dispatch] = useContext(TodoContext);

  return (
    <ListItem
      dense
      button
      onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
    >
      <ListItemIcon>
        <Checkbox edge="start" checked={todo.completed} disableRipple />
      </ListItemIcon>
      <ListItemText
        style={
          todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        primary={todo.title}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
        >
          <DeleteIcon color="secondary" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
