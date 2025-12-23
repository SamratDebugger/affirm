import { StrictMode } from "react";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ReactDOM from "react-dom/client";
import MyContext from "../context/MyContext.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <MyContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MyContext>
  </StrictMode>
);
