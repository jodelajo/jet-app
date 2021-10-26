import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import PostContextProvider from '../src/context/PostContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PostContextProvider>
      <App />
      </PostContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
