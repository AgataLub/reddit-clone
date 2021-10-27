import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Post from "./Post";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/post" component={Post} />
  </Router>,
  document.getElementById("root")
);

// looks
// fix empty wrote/said --- [[Prototype]]: Array(0) ?
// text formatting
