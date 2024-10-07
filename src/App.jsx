import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "09/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "23/05/2024",
    },
    {
      name: "Go to nowhere",
      dueDate: "03/01/2024",
    }
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>



      
    </center>
  );
}

export default App;
