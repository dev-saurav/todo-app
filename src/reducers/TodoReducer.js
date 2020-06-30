import { v4 as uuidv4 } from "uuid";
const priority = {
  high: 1,
  medium: 2,
  low: 3
};
const addTodo = text => {
  const todo = {
    id: uuidv4(),
    title: text,
    completed: false,
    priority: priority.low,
    createdOn: new Date()
  };
  return todo;
};

const toggledTodo = (todoList, id) => {
  const todos = todoList.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  return todos;
};

const deleteTodos = (todoList, id) => {
  const todos = todoList.filter(todo => todo.id !== id);
  return todos;
};

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("yo");
      const todo = addTodo(action.payload);
      console.log({ todo, ...state.todos });
      return { ...state, todos: [todo, ...state.todos] };
    case "DELETE_TODO":
      return { ...state, todos: deleteTodos(state.todos, action.payload) };
    case "SEARCH_TODO":
      return { ...state, searchString: action.payload };
    case "TOGGLE_TODO":
      return { ...state, todos: toggledTodo(state.todos, action.payload) };
    default:
      return state;
  }
};
