import React, { Component } from "react";
import "./App.css";
import Auth from "./component/Auth/Auth.js";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Form from "./component/Form/Form.js";
import Nav from "./component/Nav/Nav.js";
import Post from "./component/Post/Post.js";

class App extends Component {
  render() {
    return (
      <div>
        <Auth />
        <Dashboard />
        <Form />
        <Nav />
        <Post />
      </div>
    );
  }
}

export default App;
