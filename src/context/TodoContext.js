import React, { createContext, useReducer } from "react";
import { TodoReducer } from "../reducers/TodoReducer";
export const TodoContext = createContext();

const priority = {
  high: 1,
  medium: 2,
  low: 3
};

const initState = {
  todos: [],
  searchString: ""
};

export const TodoContextProvider = props => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {props.children}
    </TodoContext.Provider>
  );
};
