import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: 1,
    //   text: "Hello I am good",
    //   completed: false,
    // },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    addEditTodo: (state, action) => {
      console.log(
        `id is ${action.payload.id} and newtodo is ${action.payload.newText}`
      );
      //code change

      const latest = state.todos.map((todo) =>
        todo.id == action.payload.id
          ? (todo.text = action.payload.newText)
          : todo
      );

      //debugging
      console.log(`latest value is ${latest}`);
      console.log(`state is ${state.todos}`);
    },

    toggleCompleted: (state, action) => {
      console.log(`toggleCompleted is getting ${action.payload}`);
      state.todos.map((todo) =>
        todo.id == action.payload ? (todo.completed = !todo.completed) : ""
      );
    },
  },
});

export const { addTodo, removeTodo, addEditTodo, toggleCompleted } =
  todoSlice.actions;

export default todoSlice;
