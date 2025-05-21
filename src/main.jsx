import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import todoStore from "./Store/todoStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </StrictMode>
);
