import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import "./index.css";
import "./css/commonStyle.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// react 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// old version
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root");
// );
