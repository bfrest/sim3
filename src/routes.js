import React from "react";
import { Route } from "react-router-dom";
import Auth from "./component/Auth/Auth.js";
import Dashboard from "./component/Dashboard/Dashboard.js";
import Form from "./component/Form/Form.js";
import Post from "./component/Post/Post.js";
import LoggedInProvider from "./Context/LoggedInProvider.js";
import TESTCOMP from "./component/TEST-COMP.js";

export default (
  <div>
    <LoggedInProvider>
      <Route exact path="/" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/post/:postid" component={Post} />
      <Route path="/new" component={Form} />
      <Route path="/test" component={TESTCOMP} />
    </LoggedInProvider>
  </div>
);
