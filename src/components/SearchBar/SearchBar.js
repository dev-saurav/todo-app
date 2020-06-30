import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textfieldStyle: {}
});

const SearchBar = () => {
  const [state, dispatch] = useContext(TodoContext);
  const classes = useStyles();
  return (
    <div>
      <TextField
        label="Search Todos"
        variant="outlined"
        margin="normal"
        className={classes.textfieldStyle}
        onChange={e =>
          dispatch({ type: "SEARCH_TODO", payload: e.target.value })
        }
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
