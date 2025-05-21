import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEditTodo, removeTodo, toggleCompleted } from "../Slice/todoSlice";

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();

  const [newInput, setNewInput] = useState(todoItem.text);
  const [checkTodo, setCheckTodo] = useState(false);

  const handleRemovebtn = () => {
    dispatch(removeTodo(todoItem.id));
  };

  const addNewtodo = () => {
    console.log("todo btn clicked");
    dispatch(
      addEditTodo({
        id: todoItem.id,
        newText: newInput,
      })
    );
    setCheckTodo(false);
  };

  const toggleChange = () => {
    console.log(`toggleChange is ready to send ${todoItem.id}`);

    dispatch(toggleCompleted(todoItem.id));
  };
  console.log(`check is : ${todoItem.completed}`);

  return (
    <div
      className="todo-item-container"
      style={todoItem.completed ? { backgroundColor: "lightgreen" } : {}}
    >
      <input
        className="input-checkbox"
        type="checkbox"
        value={todoItem.completed}
        onChange={toggleChange}
      />
      <input
        type="text"
        className={`input-text ${
          todoItem.completed ? "text-decoration-line-through" : ""
        } `}
        style={{
          ...(checkTodo ? { border: "2px solid black" } : {}),
          ...(todoItem.completed ? { backgroundColor: "lightgreen" } : {}),
        }}
        // style={todoItem.completed ? { backgroundColor: "lightgreen" } : {}}
        // className="input-text"
        // style={{
        //   width: "60%",
        //   marginTop: "10px",
        //   borderRadius: "1rem",
        //   backgroundColor: "#172842",
        //   color: "white",
        // }}
        readOnly={!checkTodo} //editable only when checktodo is false
        value={newInput}
        onChange={(e) => setNewInput(e.target.value)}
      />
      <button
        className="edit-rem-save-btn"
        style={todoItem.completed ? { backgroundColor: "red" } : {}}
        onClick={() => {
          if (todoItem.completed) return;

          if (checkTodo) {
            addNewtodo();
          } else {
            setCheckTodo((prev) => !prev);
          }
        }}
      >
        {checkTodo ? "📁" : "✏️"}
      </button>
      <button className="edit-rem-save-btn" onClick={handleRemovebtn}>
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
