import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slice/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [getNum, setGetNum] = useState("");

  const handleAddTodobtn = () => {
    dispatch(addTodo(getNum));
    setGetNum("");
  };

  return (
    <div className="input-form">
      <input
        type="text"
        placeholder="Enter Todo Here...."
        value={getNum}
        onChange={(e) => setGetNum(e.target.value)}
      />
      <button className="input-btn" onClick={handleAddTodobtn}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
