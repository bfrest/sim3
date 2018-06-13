import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./component/Auth/Auth.js";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Form from "./component/Form/Form.js";
import Post from "./component/Post/Post.js";

export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/post/:postid" component={Post} />
    <Route path="/new" component={Form} />
  </Switch>
);
