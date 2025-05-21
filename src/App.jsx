import { useSelector } from "react-redux";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
  const todo = useSelector((state) => state.todos);
  console.log(todo);

  return (
    <div className="main-container">
      <div className="todo-container">
        <h1>Todo App</h1>

        <TodoForm />
        {todo.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
