import React, { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
const AddTodo = ({ open, handleClose }) => {
  const [state, dispatch] = useContext(TodoContext);
  const [text, setText] = useState("");
  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
    handleClose();
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="todoText"
          label="Enter todo..."
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTodo;
