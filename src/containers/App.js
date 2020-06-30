import React from "react";
import { TodoContextProvider } from "../context/TodoContext";
import Cockpit from "../components/Cockpit/Cockpit";

const App = () => {
  return (
    <TodoContextProvider>
      <div className="App">
        <Cockpit />
      </div>
    </TodoContextProvider>
  );
};

export default App;
