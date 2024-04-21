import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/Todoitems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "17/12/2034",
    },
    {
      name: "Go to College",
      dueDate: "12/04/2004",
    },
    {
      name: "Study",
      dueDate: "12/04/2004",
    },
  ];

  return (
    <center className="todocontainer ">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
